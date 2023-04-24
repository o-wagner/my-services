import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import Logo from './imgs/Vector.png';
import { UserCircle, List, CaretLeft, SignOut } from 'phosphor-react-native';
import auth from "../../firebase";
import { signOut } from 'firebase/auth';

export default function Header(props) {
    const navigation = useNavigation();
    const [userIcon, setUserIcon] = useState(props.userIcon);
    
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
                        <Image source={Logo} resizeMode="contain" style={styles.logo} />
                        <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('User')}>
                            <UserCircle size={40} color='#ffffff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={() => handleSignOut()}>
                            <SignOut size={30} color='#ffffff' />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.headerIconsMenu}>
                        <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate('Home')}>
                            <CaretLeft size={30} color='#ffffff' />
                        </TouchableOpacity>
                        <Image source={Logo} resizeMode="contain" style={styles.logo} />
                        <TouchableOpacity style={styles.menu} onPress={() => handleSignOut()}>
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
        marginRight: 10,
        marginLeft: 22,
    },
    menu: {
        marginRight: '5%',
    },
    arrow:{
        marginLeft: '8%',
    },
    header: {
        paddingTop: '10%',
        backgroundColor: '#0000004f',
        width: '100%',
        height: 175,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },

    logo: {
        width: 180,
        height: 90,
        marginRight: '12%',
        marginBottom: '5%',
        marginLeft: '15%',

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
