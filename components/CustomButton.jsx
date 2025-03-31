import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const CustomButton = ({title, image, handlePress, containStyles="",textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    className={`bg-secondary-100 flex flex-row rounded-full  min-h-[50px] px-5
      justify-center items-center 
       ${containStyles} ${isLoading ? "opacity-50": ""}`}
    disabled={isLoading}
    activeOpacity={0.7}
    >
     <Image
     source={image}
     resizeMode="contain"
     className="w-6 h-6 p-2"  
     />
      <Text
      className={`text-black mx-6 font-psemibold text-lg ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton