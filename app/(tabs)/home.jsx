// import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import EmptyState from "../../components/EmptyState";
// import { icons, images } from "../../constants";
// import CountryPicker, { DARK_THEME } from "react-native-country-picker-modal";
// import { Link, router } from "expo-router";
// import { FeaturedCard, Card } from "../../components/Card";
// import { cards, featuredCards } from '../../constants/data';


// const home = () => {
//   const [country, setCountry] = useState({ cca2: "NG", name: "Nigeria" }); // Default to Nigeria
//   const [showPicker, setShowPicker] = useState(false); // Modal visibility

//   const handleCardPress = (item) => {
//     // Navigate to detail page and pass item data
//     router.push({
//       pathname: '/details', // Adjust based on your route name
//       params: { cardData: JSON.stringify(item) }, // Pass item as a string
//     });
//   };

//   return (
//     <SafeAreaView className="bg-black h-full">
//       <FlatList
//         ListHeaderComponent={() => (
//           <View className="mt-3 px-2 space-y-5">
//             <View className="flex mb-3
//             w-full h-14 border-[0.6px] px-4
//            flex-row  border-[#525252]  bg-black 
//             border-rounded rounded-xl justify-between items-stretch"
//             >
//               <View className=" flex flex-col justify-center items-center py-1 ">
//                 <Text
//                   className="font-pmedium
//                 text-sm text-primary"
//                 >
//                   Select country{" "}
//                   <Image
//                     source={icons.Location}
//                     resizeMode="contain"
//                     className="w-5 h-5 px-1 pt-4"
//                     tintColor="primary"
//                   />
//                 </Text>
//                 {/* Country Text (Clickable) */}
//                 <TouchableOpacity onPress={() => setShowPicker(true)}>
//                   <Text className=" border-y-2 border-secondary-200
//                    text-xl font-pextrabold text-primary 
//                   font-bold ">
//                     {country.name}
//                   </Text>
//                 </TouchableOpacity>
//                 {/* Country Picker Modal */}
//                 {showPicker && (
//                   <CountryPicker
//                     countryCode={country.cca2}
//                     theme={DARK_THEME} // Dark mode
//                     withAlphaFilter
//                     withFilter
//                     withCountryNameButton={true}
//                     withFlag={true}
//                     visible={showPicker}
//                     onSelect={(selectedCountry) => {
//                       setCountry(selectedCountry); // Update selected country
//                       setShowPicker(false); // Close modal
//                     }}
//                     onClose={() => setShowPicker(false)} // Close on dismiss
//                   />
//                 )}
//               </View>

//               <View className="flex flex-row items-center justify-center gap-8  px-2 ">
//                 <Link href="/cars">
//                   <Image
//                     source={icons.search}
//                     className="w-5 h-5"
//                     resizeMode="contain"
//                     tintColor="primary"
//                   />
//                 </Link>
//                 <Image
//                   source={icons.bell}
//                   className="w-5 h-5  "
//                   resizeMode="contain"
//                 />
//               </View>
//             </View>

//             <View className="flex flex-row px-5 items-center justify-between ">
//               <TouchableOpacity>
//                 <Text className="font-pextrabold  text-xl text-primary border-b-2 border-secondary px-2 py-1">
//                   Trending
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//               onPress={ () => router.push('/cars')}
//               >
//                 <Text className="text-base font-pextrabold  text-primary">
//                   See all
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             <View
//               className="flex flex-col 
//             border-y-[0.5px] border-primary items-center py-1
//             justify-center "
//             >
//               <FlatList
//                 data={featuredCards}
//                 renderItem={({ item }) => <FeaturedCard items={item} />}
//                 keyExtractor={(item) => item.title}
//                 contentContainerStyle={{ gap: 0.5 }}
//                 horizontal
//                 onPress={handleCardPress}
//                 showsHorizontalScrollIndicator={false}
//               />
//             </View>

//             <View className="mt-2">
//               <View className="flex flex-row items-center justify-between">
//                 <Text className="text-xl font-pextrabold text-primary  border-b-2 border-secondary">
//                   Hot Deals
//                 </Text>
//                 <TouchableOpacity>
//                   <Text
//                    onPress={ () => router.push('/cars')}
//                   className="text-base font-pextrabold text-primary">
//                     See all
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         )}

//         showsVerticalScrollIndicator={false}
//         data={cards}
//         onPress={handleCardPress}
//         renderItem={({ item }) => (
//           <Card item={item} />
//         )}
//         keyExtractor={(item) => item.title}
//         numColumns={2}
//         columnWrapperStyle={{
//           justifyContent: "space-between",
//           marginBottom: 5,
//           marginTop: 3,
//         }} // Ensures proper grid spacing
//         contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}

//       />
//     </SafeAreaView>
//   );
// };

// export default home;


import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState";
import { icons, images } from "../../constants";
import CountryPicker, { DARK_THEME } from "react-native-country-picker-modal";
import { Link, router } from "expo-router";
import { FeaturedCard, Card } from "../../components/Card";
import { cards, featuredCards } from '../../constants/data';
import useVehicleStore from "../../store/useVehicleStore";
import { useCallback } from 'react';

const home = () => {
  const [country, setCountry] = useState({ cca2: "NG", name: "Nigeria" });
  const [showPicker, setShowPicker] = useState(false);
  const { setVehicles , setSelectedVehicle} = useVehicleStore();

     
  // Initialize with your cards data
  
  useEffect(() => {
    // Fetch vehicle data here
    setVehicles(cards); // Mock data
  }, []);

  const handleCardPress = useCallback((item) => {
    setTimeout(() => {
      useVehicleStore.getState().setSelectedVehicle(item);
    }, 0); //  Delays state update until render is done
    router.push(`/details/${item.id}`);
  }, []);
  

  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        ListHeaderComponent={() => (
          <View className="mt-3 px-2 space-y-5">
            <View className="flex mb-3 w-full h-14 border-[0.6px] px-4 flex-row border-[#525252] bg-black border-rounded rounded-xl justify-between items-stretch">
              <View className="flex flex-col justify-center items-center py-1">
                <Text className="font-pmedium text-sm text-primary">
                  Select country{" "}
                  <Image
                    source={icons.Location}
                    resizeMode="contain"
                    className="w-5 h-5 px-1 pt-4"
                    tintColor="primary"
                  />
                </Text>
                <TouchableOpacity onPress={() => setShowPicker(true)}>
                  <Text className="border-y-2 border-secondary-200 text-xl font-pextrabold text-primary font-bold">
                    {country.name}
                  </Text>
                </TouchableOpacity>
                {showPicker && (
                  <CountryPicker
                    countryCode={country.cca2}
                    theme={DARK_THEME}
                    withAlphaFilter
                    withFilter
                    withCountryNameButton={true}
                    withFlag={true}
                    visible={showPicker}
                    onSelect={(selectedCountry) => {
                      setCountry(selectedCountry);
                      setShowPicker(false);
                    }}
                    onClose={() => setShowPicker(false)}
                  />
                )}
              </View>

              <View className="flex flex-row items-center justify-center gap-8 px-2">
                <Link href="/cars">
                  <Image
                    source={icons.search}
                    className="w-5 h-5"
                    resizeMode="contain"
                    tintColor="primary"
                  />
                </Link>
                <Image
                  source={icons.bell}
                  className="w-5 h-5"
                  resizeMode="contain"
                  tintColor="primary"
                />
              </View>
            </View>

            <View className="flex flex-row px-5 items-center justify-between">
              <TouchableOpacity>
                <Text className="font-pextrabold text-xl text-primary border-b-2 border-secondary px-2 py-1">
                  Trending
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/cars')}>
                <Text className="text-base font-pextrabold text-primary">
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            
            <View className="flex flex-col border-y-[0.5px] border-primary items-center py-1 justify-center">
              <FlatList
                data={featuredCards}
                renderItem={({ item }) => (
                  <FeaturedCard 
                    items={item} 
                    onPress={() => handleCardPress(item)}
                  />
                )}
                keyExtractor={(item) => item.id || item.title}
                contentContainerStyle={{ gap: 0.5 }}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>

            <View className="mt-2">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-pextrabold text-primary border-b-2 border-secondary">
                  Hot Deals
                </Text>
                <TouchableOpacity onPress={() => router.push('/cars')}>
                  <Text className="text-base font-pextrabold text-primary">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        data={cards}
        renderItem={({ item }) => (
          <Card 
            item={item} 
            onPress={() => handleCardPress(item)}
          />
        )}
        keyExtractor={(item) => item.id || item.title}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 5,
          marginTop: 3,
        }}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
        ListEmptyComponent={<EmptyState />}
      />
    </SafeAreaView>
  );
};

export default home;