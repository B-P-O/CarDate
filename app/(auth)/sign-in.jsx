import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import icons from "../../constants/icons";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setFrom] = useState({
    email: "",
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
             text-secondary-200 text-2xl mt-8 px-5  "
          >
            Welcome to CarDate 🚔
          </Text>
          <Text className="font-pregular text-primary mt-1 px-5">
            Log in to CarDate
          </Text>

          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your Email"
            handleChangeText={(e) => setFrom({ ...form, email: e })}
            otherStyles="mt-4"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your Password"
            handleChangeText={(e) => setFrom({ ...form, password: e })}
            otherStyles="mt-4 mb-10"
            // secureTextEntry={true}
          />

          <CustomButton
            title="Sign in"
            handlePress={handleSubmit}
            containerStyles="w-full py-3 mt-5"
            isLoading={isSubmitting}
          />
          <View className="flex flex-row justify-center pt-5 gap-2">
            <Text
              className="text-primary
             font-psemibold justify-center px-[-20] py-5 align-middle flex"
            >
              or login with
            </Text>
          </View>
        
        
             <CustomButton
            title="Continue with Google"
            image={icons.Google}
            handlePress={handleSubmit}
            containerStyles="w-full py-3 mt-5"
            isLoading={isSubmitting}
          />
          

          <View className="flex flex-row justify-center pt-5 gap-2">
            <Text className="font-plight text-primary text-lg ">
              {" "}
              Don't have a CarDate account ?{" "}
            </Text>
            <Link
              className="font-bold
             text-secondary px-1"
              href="/home"
            >
              Register
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
