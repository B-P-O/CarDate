import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import { Text, ScrollView, TouchableOpacity } from "react-native";

import { cards, categories }  from "../constants/data.js";

const Filters = ( {selectedCategory, setSelectedCategory} ) => {
  const pathname = usePathname();
  
 ////
  const handleCategoryPress = (category) => {
    const newCategory = selectedCategory === category ? "All"
     : category;
    setSelectedCategory(newCategory);
    router.setParams({ pathname, filter: newCategory });
  };
    

 

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {categories.map((item) => (
        <TouchableOpacity
          onPress={() => handleCategoryPress(item.category)}
          accessibilityLabel={`Filter by ${item.title}`}
          key={item.category || item.id } 
          className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${
            selectedCategory === item.category
              ? "bg-black-200"
              : " bg-black-300 border border-black-200"
          }`}
        >
          <Text
            className={`text-sm ${
              selectedCategory === item.category
                ? "text-primary font-pregular mt-0.5"
                : "text-primary font-pmedium"
            }`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
