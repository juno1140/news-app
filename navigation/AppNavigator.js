import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import ArticleScreen from '../screens/ArticleScreen'
import ClipScreen from '../screens/ClipScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  )
}

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Clip"
        component={ClipScreen}
        options={{ title: 'クリップ一覧' }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  )
}

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName
    switch (route.name) {
      case 'Home':
        iconName = 'home'
        break
      case 'Clip':
        iconName = 'bookmark'
        break
      default:
        break
    }
    return <FontAwesome name={iconName} size={size} color={color} />
  },
})

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Clip"
          component={ClipStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
