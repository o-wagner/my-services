import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import MarketRoute from "../screens/MarketRoute";
import PhoneRoute from "../screens/PhoneRoute";
import FoodRoute from "../screens/FoodRoute";
import User from '../screens/User';


const { Navigator, Screen } = createNativeStackNavigator();


export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="SignIn" component={SignIn}/>
            <Screen name="Home" component={Home}/>
            <Screen name="User" component={User}/>
            <Screen name="MarketRoute" component={MarketRoute}/>
            <Screen name="PhoneRoute" component={PhoneRoute}/>
            <Screen name="FoodRoute" component={FoodRoute}/>
            
        </Navigator>
    )

}
