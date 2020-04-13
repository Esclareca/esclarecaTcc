import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NewPost from './pages/NewPost'

const AppStack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                {/* Descobrir pq não pode deixar o componente com name diferente */}
                <AppStack.Screen name="Login" component={Login}></AppStack.Screen>
                <AppStack.Screen name="Register" component={Register}></AppStack.Screen>
                <AppStack.Screen name="Home" component={Home}></AppStack.Screen>
                <AppStack.Screen name="NewPost" component={NewPost}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}