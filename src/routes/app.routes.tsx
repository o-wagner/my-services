import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import MarketRoute from "../screens/MarketRoute";
import PhoneRoute from "../screens/PhoneRoute";
import FoodRoute from "../screens/FoodRoute";
import User from '../screens/User';
import ForgotPassword from '../screens/ForgotPassword';
import WaterRoute from "../screens/WaterRoute";
import EmergencyRoute from "../screens/EmergencyRoute";
import FastFoodRoute from "../screens/FastFoodRoute";
import auth from "../../firebase";
import {onAuthStateChanged} from "firebase/auth";


const { Navigator, Screen } = createNativeStackNavigator();


export default function AppRoutes() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if(user != null){
            console.log("Usuario Autenticado");
            setIsLoggedIn(true);
        }
        else {
            console.log("Not Logged In"); 
            setIsLoggedIn(false);
        }
      })
    }, [])

    return (
        <>
        {isLoggedIn ? (
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={Home} />
                <Screen name="User" component={User} />
                <Screen name="MarketRoute" component={MarketRoute} />
                <Screen name="PhoneRoute" component={PhoneRoute} />
                <Screen name="FoodRoute" component={FoodRoute} />
                <Screen name="ForgotPassword" component={ForgotPassword} />
                <Screen name="WaterRoute" component={WaterRoute}/>
                <Screen name="EmergencyRoute" component={EmergencyRoute}/>
                <Screen name="FastFoodRoute" component={FastFoodRoute}/>
                </Navigator>):(
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="SignIn" component={SignIn} />
                <Screen name="Home" component={Home} />
                <Screen name="User" component={User} />
                <Screen name="MarketRoute" component={MarketRoute} />
                <Screen name="PhoneRoute" component={PhoneRoute} />
                <Screen name="FoodRoute" component={FoodRoute} />
                <Screen name="ForgotPassword" component={ForgotPassword} />
                <Screen name="WaterRoute" component={WaterRoute}/>
            </Navigator> )}
        </>
    )
}
