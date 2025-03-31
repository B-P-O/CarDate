import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

import { icons } from "../../constants";
// import { useGlobalContext } from "../../context/GlobalProvider";

const TabIcon = ({ icon, iconColor, name, focused }) => {
  return (
    <View className="flex pt-2  items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={iconColor}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-pregular text-xs" : "font-pregular"} text-xs`}
        style={{ color: iconColor }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  // const { loading, isLogged } = useGlobalContext();

  // if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#46d246",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#0d0d0d",
            borderTopWidth: 0.5,
            borderTopColor: "#212121",
            height: 54,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                iconColor={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="cars"
          options={{
            title: "Cars",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.carIcon}
                iconColor={color}
                name="Cars"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                iconColor={color}
                name="Profile"
                focused={focused}
                />
               )
          }}
        />
      </Tabs>

      <StatusBar backgroundColor="#0d0d0d" style="light" />
    </>
  );
};

export default TabLayout;
