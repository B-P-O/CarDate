import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  StyleSheet,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { icons, images } from "../../constants";
import { facilities, cards } from "../../constants/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import EmptySate from "../../components/EmptyState";
import useVehicleStore from "../../store/useVehicleStore";
import CustomButton from "../../components/CustomButton";
import { Alert } from "react-native";
import { ActivityIndicator } from "react-native";

const Details = () => {
  const { id } = useLocalSearchParams();
  const item = cards.find((card) => card.id === id);
  const { vehicles, selectedVehicle, setSelectedVehicle } = useVehicleStore();
  const [isLiked, setIsLiked] = useState(false);
  const windowHeight = Dimensions.get("window").height;

  const toggleLike = () => setIsLiked(!isLiked);

  // Find vehicle if not already selected
  useEffect(() => {
    if (!selectedVehicle) {
      const vehicle = vehicles.find((v) => v.id === id);
      if (vehicle) {
        setTimeout(() => setSelectedVehicle(vehicle), 0); // Prevents render conflict
      }
    }
  }, [id, vehicles, selectedVehicle, setSelectedVehicle]);

  // Cleanup on unmount
  useEffect(() => {
    return () => useVehicleStore.getState().clearSelectedVehicle();
  }, []);

  if (!selectedVehicle) {
    return (
      <SafeAreaView className="bg-black flex-1 top-3 justify-center items-center">
        <ActivityIndicator size="small" className="text-primary-300 mt-5" />
        <Text className="font-pmedium text-sm text-primary">Loading...</Text>
      </SafeAreaView>
    );
  }


  const cardFacilities = facilities.map((facility) => {
    const key = facility.title
      .toLowerCase()
      .replace(/ \(miles|seconds\)/g, "")
      .replace(/\s+/g, "");
    return {
      ...facility,
      value: item[key] ?? "N/A",
    };
  });
  
  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Hero Image Section */}
        <View style={{ height: windowHeight * 0.5 }}>
          <Image
            source={item.image}
            className="w-full h-full"
            resizeMode="cover"
            // defaultSource={images.NoResults}
          />

          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            locations={[0.1, 0.5]}
            style={styles.imageGradient}
          />

          {/* Header Navigation */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Image
                source={icons.leftArrow}
                style={styles.icon}
                tintColor="#FFFFFF"
              />
            </TouchableOpacity>

            <Text style={styles.titleText} numberOfLines={1}>
              {item.title}
            </Text>

            <View style={styles.headerIcons}>
              <TouchableOpacity onPress={toggleLike}>
                <Image
                  source={isLiked ? icons.heartFilled : icons.heart}
                  style={styles.icon}
                  tintColor={isLiked ? "#FF0000" : "#FFFFFF"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Features</Text>

          <View style={styles.featuresGrid}>
            {cardFacilities.map((facility, index) => (
              <View
                key={`${facility.title}-${index}`}
                style={styles.featureItem}
              >
                <Image
                  source={facility.icon}
                  style={styles.featureIcon}
                  resizeMode="contain"
                />
                <View style={styles.featureTextContainer}>
                  <Text style={styles.featureTitle}>{facility.title}</Text>
                  <Text style={styles.featureValue}>{facility.value}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Additional Details Section */}
          <View style={styles.detailsSection}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              {item.description || "No description available"}
            </Text>
          </View>

          {/* Action Button */}
          <CustomButton
            title="Contact Seller"
            //  image={icons.Google}
            handlePress={() =>
              Alert.alert(
                "Your Request has been submitted, we will reach out to you"
              )
            }
            containerStyles="w-full py-3 mt-5 p-5"
            //  isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 80,
    backgroundColor: "#000",
  },
  header: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    zIndex: 10,
  },
  backButton: {
    backgroundColor: "rgba(25, 29, 49, 0.7)",
    borderRadius: 20,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    maxWidth: "50%",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  imageGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "40%",
  },
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    marginBottom: 16,
  },
  featureIcon: {
    width: 28,
    height: 28,
    marginRight: 12,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    color: "#FFF",
    fontSize: 14,
    opacity: 0.8,
  },
  featureValue: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  detailsSection: {
    margin: 10,
  },
  descriptionText: {
    color: "#FFF",
    fontSize: 14,
    lineHeight: 22,
    opacity: 0.8,
  },
  actionButton: {
    backgroundColor: "#191D31",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 32,
  },
  actionButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Details;
