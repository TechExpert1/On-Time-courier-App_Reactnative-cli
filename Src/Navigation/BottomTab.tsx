import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet} from 'react-native';

import {
  ChatActive,
  ChatInActive,
  HomeActive,
  HomeInActive,
  MyOrderActive,
  MyOrderInActive,
  ProfileActive,
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
          width: '100%',
          height: Platform.OS === 'ios' ? 85 : 65,
          alignSelf: 'center',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
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
            focused ? <HomeActive></HomeActive> : <HomeInActive></HomeInActive>,
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
              <MyOrderActive></MyOrderActive>
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
            focused ? <ChatActive></ChatActive> : <ChatInActive></ChatInActive>,
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
              <ProfileActive></ProfileActive>
            ) : (
              <ProfileInActive></ProfileInActive>
            ),
        }}
        name="ME"
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
