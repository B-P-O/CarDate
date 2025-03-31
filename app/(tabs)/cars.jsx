import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { icons } from "../../constants";
import { router } from "expo-router";
import { SearchCard} from "../../components/Card";
import SearchInput from "../../components/SearchInput";
import  { cards, categories } from "../../constants/data"
import Filters from "../../components/Filters";
import { useCallback, useEffect, useMemo, useState } from "react";
import EmptySate from "../../components/EmptyState";
import useVehicleStore from "../../store/useVehicleStore";


const Cars = () => {

  const [loading, setIsLoading] = useState(false);
   const [selectedCategory, setSelectedCategory] = useState("All" );
   const [searchQuery, setSearchQuery] = useState("");
   const { setVehicles, setSelectedVehicle } = useVehicleStore();

   useEffect(() => {
    // Fetch vehicle data here
    setVehicles(cards); // Mock data
  }, []);


  // Optimized card press handler
  const handleCardPress = useCallback((item) => {
    if (!item?.id) return;
    
    setSelectedVehicle(item);
    router.push({
      pathname: `/details/${item.id}`,
      params: { 
        animation: 'fade',
        animationDuration: 200 
      }
    });
  }, [setSelectedVehicle]);


 // Memoized filtered cards calculation
 const filteredCards = useMemo(() => {
  const result = cards.filter(card => 
    (selectedCategory === "All" || 
     card.fuelType === selectedCategory || 
     card. vehicletype === selectedCategory) &&
    (searchQuery === "" || 
     card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     card.description?.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  return result;
}, [selectedCategory, searchQuery]);


   // Debounced search handler
   const handleSearchWithLoading = useCallback((text) => {
    setIsLoading(true);
    setSearchQuery(text);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  
 
  

  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
      data={filteredCards}
      keyExtractor={(item) => item.id || item.title}
      numColumns={1}
      renderItem={({ item }) => (
              <SearchCard 
              onPress={() => handleCardPress(item)} 
              item={item} />
       )}
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
           
        ListHeaderComponent={() => (
          <View className="mt-2 px-2 space-y-5">
            <View
              className="  w-full h-10 px-2  flex-row 
            bg-black rounded-xl justify-between items-center" >
              <TouchableOpacity
                onPress={() => router.back()}
                className="bg-primary-200 
                rounded-full w-11 h-11 items-center justify-center"
              >
                <Image source={icons.leftArrow} 
                className=" w-5 h-5" />
              </TouchableOpacity>
              
              <Text
                className="text-base
              font-rubik-medium text-primary ">
                Search for Your Dream Car
              </Text>
              <Image source={icons.bell} className="w-6 h-6" />
            </View>

               <SearchInput onSearch={handleSearchWithLoading}/> 
                  
              <Filters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              />        

            </View>
               
        )}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator
             size="small" className="text-primary-300 mt-5" />
          ) : (
            <EmptySate />
          )
        }
      />
    </SafeAreaView>
  );
};
export default Cars;
