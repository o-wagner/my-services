import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import MarketRoute from "../screens/MarketRoute";
import PhoneRoute from "../screens/PhoneRoute";
import FoodRoute from "../screens/FoodRoute";
import User from '../screens/User';
import ForgotPassword from '../screens/ForgotPassword';
import { app } from "../../firebase";
import { getAuth } from "firebase/auth";

const { Navigator, Screen } = createNativeStackNavigator();


export default function AppRoutes() {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    useEffect(() => {
        auth.onAuthStateChanged((_user)=> {
            setUser(_user);
        });

    }, [])

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="SignIn" component={SignIn}/>
            <Screen name="Home" component={Home}/>
            <Screen name="User" component={User}/>
            <Screen name="MarketRoute" component={MarketRoute}/>
            <Screen name="PhoneRoute" component={PhoneRoute}/>
            <Screen name="FoodRoute" component={FoodRoute}/>
            <Screen name="ForgotPassword" component={ForgotPassword}/>
        </Navigator>
    )

}
