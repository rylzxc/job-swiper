import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Matches, Messages, Profile } from "./screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./assets/styles";
import TabBarIcon from "./components/TabBarIcon";
import ChatScreen from "./components/ChatScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: PRIMARY_COLOR,
      tabBarInactiveTintColor: DARK_GRAY,
      tabBarStyle: {
        backgroundColor: WHITE,
        borderTopWidth: 0,
        marginBottom: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: BLACK,
        shadowOffset: { height: 0, width: 0 },
      },
    }}
  >
    <Tab.Screen
      name="Explore"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} iconName="search" />
        ),
      }}
    />
    <Tab.Screen
      name="Matches"
      component={Matches}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} iconName="heart" />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={Messages}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} iconName="chatbubble" />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} iconName="person" />
        ),
      }}
    />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
