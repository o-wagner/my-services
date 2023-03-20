import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import Categories from "../screens/Categories";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="SignIn" component={SignIn}/>
            <Screen name="Home" component={Home}/>
            <Screen name="Categories" component={Categories}/>
        </Navigator>
    )

}
