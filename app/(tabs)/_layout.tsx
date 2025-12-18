import { Tabs } from "expo-router";
import { HouseIcon } from "phosphor-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function TabLayout() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#03A6A1",
        tabBarInactiveTintColor: "#A1A1AA",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 42 + bottom,
          paddingBottom: bottom,
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0.1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <HouseIcon
              size={28}
              color="#03A6A1"
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
