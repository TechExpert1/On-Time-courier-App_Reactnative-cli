import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';

import {
  ChatInActive,
  HomeActive,
  MyOrderInActive,
  ProfileInActive,
} from '../Assets/Svgs';
import HomeScreen from '../Screens/Home';
import ProfileScreen from '../Screens/Profile';
import {LIGHT_GREEN, NORMAL_YELLOW, PRIMARY} from '../Theme/Colors';
import ChatScreen from '../Screens/Chat';
import MyOrderScreeen from '../Screens/OrderScreen';
import CustomerHome from '../Screens/CustomerSide/CustomerHome';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          width: '96%',
          height: 65,
          alignSelf: 'center',
        },
        tabBarLabelStyle: {marginBottom: 5},
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: PRIMARY,
          tabBarInactiveTintColor: LIGHT_GREEN,
          tabBarIcon: ({focused}) =>
            focused ? <HomeActive></HomeActive> : <HomeActive></HomeActive>,
        }}
        name="Home"
        component={CustomerHome}></Tab.Screen>

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: PRIMARY,
          tabBarInactiveTintColor: LIGHT_GREEN,
          tabBarIcon: ({focused}) =>
            focused ? (
              <MyOrderInActive></MyOrderInActive>
            ) : (
              <MyOrderInActive></MyOrderInActive>
            ),
        }}
        name="My Orders"
        component={MyOrderScreeen}></Tab.Screen>

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: PRIMARY,
          tabBarInactiveTintColor: LIGHT_GREEN,
          tabBarIcon: ({focused}) =>
            focused ? (
              <ChatInActive></ChatInActive>
            ) : (
              <ChatInActive></ChatInActive>
            ),
        }}
        name="Messages"
        component={ChatScreen}></Tab.Screen>

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: PRIMARY,
          tabBarInactiveTintColor: LIGHT_GREEN,
          tabBarIcon: ({focused}) =>
            focused ? (
              <ProfileInActive></ProfileInActive>
            ) : (
              <ProfileInActive></ProfileInActive>
            ),
        }}
        name="Profile"
        component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  home: {
    height: 18,
    width: 18,
  },
});
