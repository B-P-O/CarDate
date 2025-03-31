import React, { useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import images from "../constants/images";
import icons from "../constants/icons";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { Image as ExpoImage } from "expo-image";

const { width: screenWidth } = Dimensions.get("window");

const preloadImages = () => {
  return onboardingData.map((item) => ExpoImage.prefetch(item.image));
};

const onboardingData = [
  {
    id: 1,
    image: images.CyberTruck,
    title: "Find Your Perfect Ride",
    description: "Browse thousands of vehicles",
  },
  {
    id: 2,
    image: images.GMC,
    title: "Compare Features",
    description: "Side-by-side comparisons",
  },
  {
    id: 3,
    image: images.BMWi7,
    title: "Smart Choices",
    description: "Make informed decisions",
  },
];

export default function Home() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    Promise.all(preloadImages()).then(() => setImagesReady(true));
  }, []);

  const handleSkip = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ index: onboardingData.length - 1 });
      setCurrentIndex(onboardingData.length - 1);
    }
  };

  const renderItem = ({ item, index }) => (
    <View
      style={{
        width: screenWidth,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
    
      <Animated.View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          opacity: currentIndex === index ? 1 : 0.7, // Only current item fully visible
          transform: [{ scale: currentIndex === index ? 1 : 0.9 }], // Only current item at full size
        }}
      >
        <ExpoImage
          source={item.image}
          contentFit="contain"
          style={{
            width: "90%",
            height: 280,
            borderRadius: 20,
            borderWidth: 4,
            borderColor: "#28a428",
          }}
          transition={200}
          cachePolicy="memory-disk"
        />
      </Animated.View>
      <Text
        style={{
          color: "#E2E8F0",
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 16,
          opacity: currentIndex === index ? 1 : 0, // Only show text for current item
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          color: "#E2E8F0",
          fontSize: 18,
          textAlign: "center",
          marginTop: 8,
          opacity: currentIndex === index ? 1 : 0, // Only show text for current item
        }}
      >
        {item.description}
      </Text>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: "#000", flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingHorizontal: 16,
              paddingVertical: 20,
            }}
          >
            {/* Skip Button */}
            {currentIndex < onboardingData.length - 1 && (
              <TouchableOpacity
                onPress={handleSkip}
                style={{ position: "absolute", top: 10, right: 16, zIndex: 10 }}
              >
                <Text style={{ color: "#28a428", fontWeight: "500" }}>
                  Skip
                </Text>
              </TouchableOpacity>
            )}

            {/* Simplified Carousel */}
            <Carousel
              ref={carouselRef}
              data={onboardingData}
              renderItem={renderItem}
              width={screenWidth}
              height={400}
              loop={false}
              onSnapToItem={setCurrentIndex}
              style={{ width: "100%" }}
              // Add these performance props:
              windowSize={3} // Only render 3 items at once
              initialNumToRender={1} // Render only the first item initially
              maxToRenderPerBatch={1} // Render one at a time
              updateCellsBatchingPeriod={50} // Faster updates
              // Disable auto features if not needed
              autoPlay={false}
              // Smoother scrolling
              scrollAnimationDuration={200} // Faster transition
              panGestureHandlerProps={{
                activeOffsetX: [-20, 20], // More responsive touch
              }}
            />

            {/* Progress Dots */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 8,
                marginVertical: 16,
              }}
            >
              {onboardingData.map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor:
                      index === currentIndex ? "#28a428" : "#b5ebb6",
                  }}
                />
              ))}
            </View>

            <Text
              style={{
                color: "#E2E8F0",
                fontSize: 18,
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              Discover the best vehicles, either Electric or Gasoline, compare
              features, and make the smartest choice for a sustainable future.
            </Text>

            <View
              style={{
                width: "100%",
                marginTop: 12,
                gap: 8, // This adds space between buttons
              }}
            >
              <CustomButton
                title={
                  currentIndex === onboardingData.length - 1
                    ? "Get Started"
                    : "Next"
                }
                handlePress={() => {
                  if (currentIndex < onboardingData.length - 1) {
                    carouselRef.current.next();
                  } else {
                    router.push("/home");
                  }
                }}
                containerStyles={{ width: "100%" }}
              />

              {currentIndex === onboardingData.length - 1 && (
                <CustomButton
                  // image={icons.Google}
                  title="Sign In"
                  handlePress={() => router.push("/sign-in")}
                  containerStyles={{
                    width: "100%",
                    backgroundColor: "transparent",
                    borderWidth: 1,
                    borderColor: "#4A5568",
                  }}
                />
              )}
            </View>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#0d0d0d" barStyle="light-content" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
