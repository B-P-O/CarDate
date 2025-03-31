import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import icons from '../constants/icons'

const FormField = ({title, value,
   placeholder, handleChangeText,
   otherStyles,
   ...props
  
  }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={` ${otherStyles}` }>
      <Text className="
      font-pmedium
       text-primary p-2 px-2 text-xl">{title}</Text>

      <View 
      className='w-full h-16 border-3 px-4 rounded-2xl flex flex-row 
      items-center border-spacing-2
      focus:border-secondary-100
      bg-black-100
       border-black-200'
      >
        <TextInput
        className="flex-1 font-psemibold
         text-primary text-base"
        placeholder={placeholder}
        onChangeText={handleChangeText}
        value={value}
        placeholderTextColor="#7B7B8B"
        secureTextEntry={title === "Password" && !showPassword}
        {...props}
        />

        {title === "Password" && (
          <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          className="flex-shrink-0"
          >
            <Image
            source={!showPassword? icons.eyeHide : icons.eye}
            resizeMode="contain"
            className="text-primary w-5 h-6"
            />
           
          </TouchableOpacity>)
        }
      </View>
    </View>
  )
}

export default FormField