import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useLocalSearchParams, router, usePathname } from 'expo-router'
import { icons } from '../constants'

const SearchInput = ( {onSearch} ) => {
  const path = usePathname();
  const params = useLocalSearchParams()
  const [search, setSearch] = useState(params.query || "");

  const debouncedSearch = useDebouncedCallback((text)=> {
    onSearch(text);
    router.setParams({ Pathname : path, query: text });
  }, 1000);
  
const handleSearch = (text) => {
  setSearch(text)
  debouncedSearch(text)
} 
 const handleClear = () => {
  setSearch("")
  onSearch("");
  router.setParams({ Pathname : path, query: "" });
  debouncedSearch("")
}

  return (
    <View className="flex flex-row items-center 
    justify-between w-full px-4 rounded-full bg-accent-100 
      border  border-[#525252]
    mt-2 py-2"> 
      <View className="flex-1 flex flex-row items-center 
      justify-start z-50">
        <Image source={icons.search} className="size-5"/>
      <TextInput
       value={search}
       onChangeText={handleSearch}
       placeholder='Search for Vehicle details'
       placeholderTextColor="#7B7B8B"
       className="text-sm font-pmedium px-2 flex-1 text-primary ml-1 "
      />

          <View className=" items-center
           justify-end">
      {search.length > 0 && ( 
        // Show clear button only when there's text
          <TouchableOpacity onPress={handleClear} className="ml-2 ">
            <Image source={icons.cancel}
            resizeMode="contain"
             className="w-10 h-10 " /> 
            {/* Add close icon */}
          </TouchableOpacity>
        )}
        </View>
      </View>
    </View>
  )
}

export default SearchInput