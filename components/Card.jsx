
import { TouchableOpacity, Text, Image, View } from "react-native";
import { icons, images } from "../constants";
import React, { useState } from "react";

export const FeaturedCard = ({ items, onPress }) => {
  const [isLiked, setIsLiked] = useState(false);
  
  const toggleLike = (e) => {
    e.stopPropagation(); // Prevent triggering card press when liking
    setIsLiked(!isLiked);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="flex flex-col items-start w-60 h-80 relative m-2 rounded-2xl border border-[#525252] shadow-lg shadow-black/70 bg-black overflow-hidden"
    >
      {/* Main Image with fallback */}
      <Image
        source={items.image}
        // defaultSource={images.NoResults} // Add a placeholder image in your constants
        resizeMode="cover"
        className="w-full h-full rounded-2xl absolute top-0"
      />

      {/* Gradient Overlay */}
      <Image
        source={images.cardGradient}
        className="w-full h-full rounded-2xl absolute bottom-0 opacity-90"
      />
  
      {/* Star Rating */}
      <View className="flex-row items-center bg-white/90 px-3 py-1.5 rounded-full
       absolute top-3 right-3 z-50">
        <Image source={icons.Star} className="w-4 h-4" />
        <Text className="text-xs font-bold text-black ml-1">
          {items.rating || '4.5'} {/* Default rating if not provided */}
        </Text>
      </View>

      {/* Content */}
      <View className="flex flex-col items-start absolute bottom-0 inset-x-0 p-4">
        <Text 
          className="text-xl font-bold text-white" 
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {items.title}
        </Text>
        <Text 
          className="text-base text-white/90 mt-1" 
          numberOfLines={1}
        >
          {items.make}
        </Text>

        <View className="flex-row items-center justify-between w-full mt-3">
          <Text className="text-xl font-bold text-white">
            {items.price.toLocaleString()} {/* Format price */}
          </Text>
          <TouchableOpacity 
            onPress={toggleLike}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} // Easier to tap
          >
            <Image
              source={isLiked ? icons.heartFilled : icons.heart}
              resizeMode="contain"
              className="w-6 h-6"
              tintColor={isLiked ? "#FF0000" : "#FFFFFF"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ item, onPress }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{ width: "48%" }}
      className="aspect-[0.75] flex flex-col rounded-xl border border-[#525252]
       shadow-lg shadow-black/70 bg-black m-1 overflow-hidden"
    >
      {/* Main Image with fallback */}
      <View className="w-full h-[65%] p-2">
        <Image
          source={item.image}
          // defaultSource={images.NoResults}
          className="w-full h-full rounded-lg"
          resizeMode="contain"
        />
      </View>
       {/* Background Gradient */}
        <Image
        source={images.cardGradient}
        className="w-full h-full rounded-xl absolute bottom-0 opacity-90"
      />

      {/* Star Rating */}
      <View className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full flex-row items-center z-50">
        <Image source={icons.Star} className="w-3 h-3" />
        <Text className="text-xs font-bold text-black ml-1">
          {item.rating || '4.5'}
        </Text>
      </View>

      {/* Details Section */}
      <View className="flex-1 flex-col px-3 pb-3 pt-1 justify-between">
        <View>
          <Text className="text-base font-bold text-white" numberOfLines={1}>
            {item.title}
          </Text>
          <Text className="text-xs text-white/80 mt-1" numberOfLines={1}>
            {item.make}
          </Text>
        </View>

        {/* Price & Like Button */}
        <View className="flex-row items-center justify-between">
          <Text className="text-base font-bold text-white">
            {item.price.toLocaleString()}
          </Text>
          <TouchableOpacity 
            onPress={toggleLike}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          >
            <Image
              source={isLiked ? icons.heartFilled : icons.heart}
              resizeMode="contain"
              className="w-6 h-6"
              tintColor={isLiked ? "#FF0000" : "#FFFFFF"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};



export const SearchCard = ({ item, onPress }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className="relative h-80 w-full m-1 rounded-2xl border border-[#525252] 
      shadow-lg shadow-black-100/70 active:bg-gray-800/20 overflow-hidden"
    >
      {/* Main Image */}
      <View className="absolute inset-0">
        <Image
          source={item.image}
          resizeMode="cover"
          className="w-full h-full rounded-2xl"
        />

        {/* Gradient Overlay */}
        <Image
          source={images.cardGradient}
          resizeMode="cover"
          className="absolute inset-0 w-full bottom-0 opacity-90 h-full rounded-2xl"
        />
      </View>

      {/* Rating (Top-Right) */}
      <View className="absolute top-3 left-3 bg-white/90 flex-row items-center px-3 py-1 rounded-full shadow-md">
        <Image source={icons.Star} className="w-3.5 h-3.5" />
        <Text className="text-xs font-bold text-black ml-1">
          {item.rating || "4.5"}
        </Text>
      </View>

      {/* Heart Icon (Top-Left) */}
      <TouchableOpacity 
        onPress={toggleLike}
        className="absolute top-3 right-3"
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Image
          source={isLiked ? icons.heartFilled : icons.heart}
          resizeMode="contain"
          className="w-8 h-8"
          tintColor={isLiked ? "#FF0000" : "#FFFFFF"}
        />
      </TouchableOpacity>

      {/* Content (Bottom) */}
      <View className="absolute bottom-0 w-full p-4">
        <Text className="text-xl font-bold text-white" numberOfLines={1}>
          {item.title}
        </Text>

        <View className="flex-row items-center justify-between mt-2">
          <Text className="text-base font-bold text-white" numberOfLines={1}>
            {item.make}
          </Text>
          <Text className="text-xl font-bold text-white">
            {item.price.toLocaleString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
