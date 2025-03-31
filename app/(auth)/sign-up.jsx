import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import icons from "../../constants/icons";
const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setFrom] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = () => {};

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View
          className="w-full h-[83vh]
         justify-center px-4 my-6"
        >
            
        
          <Text
            className="font-bold
             text-secondary-200 text-2xl mt-15 px-5  "
          >
            Welcome to CarDate 🚔
          </Text>
          <Text className="font-pregular text-primary mt-1 px-5">
            Sign up in to CarDate
          </Text>
          
          <FormField
            title="Username"
            value={form.username}
            placeholder="Enter your username"
            handleChangeText={(e) => setFrom({ ...form, username: e })}
            otherStyles="mt-3"
          
          />

          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your Email"
            handleChangeText={(e) => setFrom({ ...form, email: e })}
            otherStyles="mt-5"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your Password"
            handleChangeText={(e) => setFrom({ ...form, password: e })}
            otherStyles="my-5"
            // secureTextEntry={true}
          />

          <CustomButton
            title="Sign Up"
            handlePress={handleSubmit}
            containerStyles="w-full py-3 mt-5"
            isLoading={isSubmitting}
          />
          <View className="flex flex-row justify-center pt-5 gap-2">
            <Text
              className="text-primary
             font-psemibold justify-center px-[-20] py-5 align-middle flex"
            >
              or Sign in with
            </Text>
          </View>
          <TouchableOpacity
            className="flex 
           bg-secondary-100 flex-row rounded-full 
                  min-h-[50px] px-5
                justify-center items-center"
          >
            <Image
              source={icons.Google}
              className="w-[20px] h-[20px]  "
              resizeMode="contain"
            />
            <Text className="font-psemibold text-lg  pl-4 text-black">
              Continue with Google, Asap!
            </Text>
          </TouchableOpacity>

          <View className="flex flex-row justify-center pt-5 gap-2">
            <Text className="font-plight text-primary text-lg ">
              {" "}
              You have a CarDate account ?{" "}
            </Text>
            <Link
              className="font-bold
             text-secondary px-1"
              href="/sign-in"
            >
              {" "}
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
