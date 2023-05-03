import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import Logo from './imgs/Vector.png';
import { UserCircle, CaretLeft, SignOut } from 'phosphor-react-native';
import auth from "../../firebase";
import { signOut } from 'firebase/auth';

export default function Header(props) {
    const navigation = useNavigation();
    
    function handleSignOut() {
        signOut(auth).then(() => {
            navigation.navigate("SignIn");
        })
    }
    return (
        <View style={styles.header}>
            <View>
                {props.userIcon ?
                    <View style={styles.headerIcons}>
                         <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('User')}>
                            <UserCircle size={40} color='#ffffff' />
                        </TouchableOpacity>
                        <Image source={Logo} resizeMode="contain" style={styles.logo} />
                       
                        <TouchableOpacity style={styles.logout} onPress={() => handleSignOut()}>
                            <SignOut size={32} color='#ffffff' />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.headerIconsMenu}>
                        <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate('Home')}>
                            <CaretLeft size={30} color='#ffffff' />
                        </TouchableOpacity>
                        <Image source={Logo} resizeMode="contain" style={styles.logo} />
                        <TouchableOpacity style={styles.logout} onPress={() => handleSignOut()}>
                            <SignOut size={30} color='#ffffff' />
                        </TouchableOpacity>
                    </View>

                }
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    user: {
        marginLeft: '16%',
    },
    logout: {
        marginRight: '10%',
        marginTop: 4,
    },
    arrow:{
        marginLeft: '8%',
    },
    header: {
        paddingTop: 15,
        backgroundColor: '#0000004f',
        width: '100%',
        height: 160,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

    logo: {
        width: 180,
        height: 90,
        marginRight: '10%',
        marginBottom: '5%',
        marginLeft: '8%',

    },

    headerIcons: {
        marginTop: 35,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerIconsMenu:{
        marginTop: 35,
        marginRight: 10,
        marginLeft: 8,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }


}
)
