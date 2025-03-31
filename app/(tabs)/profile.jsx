import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { settings } from '../../constants/data';
import { icons } from '../../constants';
import { router } from 'expo-router';
import CustomButton from '../../components/CustomButton';

const Profile = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        ListHeaderComponent={() => (
          <View className="mt-3 px-2 space-y-5">
            <View className="flex mt-7 mb-3 w-full h-14
             border-[0.6px] px-4 flex-row border-[#525252]
              bg-black rounded-xl items-center">
              <TouchableOpacity
                onPress={() => router.back()}
                className="bg-primary-200 rounded-full 
                w-11 h-11 items-center justify-center"
              >
                <Image 
                  source={icons.leftArrow}
                  className="w-5 h-5"
                />
              </TouchableOpacity>
              <View className="flex-1 flex-col justify-center items-center py-1">
              <Text className="text-primary  font-pextrabold text-3xl">
                Profile
              </Text>
              </View>
            </View>

            <View className="flex w-full h-28 flex-col gap-2 mb-3
             border-[0.6px] px-4 border-[#525252] bg-[#525252]
              rounded-xl  items-center">
              <Image
                source={icons.upload}
                className="w-12 h-12 rounded-xl"
                resizeMode="contain"
              />
              <View className="flex flex-col px-5 justify-center items-start">
                <Text className="text-primary text-base font-semibold">
                  Babatuyi Paul
                </Text>
                <Text className="text-primary text-base font-semibold">
                  @Future
                </Text>
              </View>
            </View>
          </View>
        )}
        data={settings}
        contentContainerStyle={{ gap: 5, padding: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
          onPress={()=>
             Alert.alert("Our deve's are currently working on this section to ship it in, Thank You") }
          className="flex flex-row gap-3 justify-start border-b border-black-200 bg-black-200 p-4 rounded-lg items-center">
            <Image
              source={item.icon}
              className="w-11 h-11"
              resizeMode="contain"
            />
            <Text className="text-primary text-base font-pextrabold">
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.category || item.title}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => (
          <View className="flex flex-1 px-5">
            <CustomButton
              title="Logout"
              image={icons.logout}
              containerStyles="w-full py-3 mt-5"
           handlePress={()=> Alert.alert("You have been Logout ")}
        
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;