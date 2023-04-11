import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import Logo from './imgs/Vector.png';
import { UserCircle, List } from 'phosphor-react-native';


export default function Header(props) {
    const navigation = useNavigation();
    const [userIcon, setUserIcon] = useState(props.userIcon);

    console.log(props.setUserIcon);
    return (
        <View style={styles.header}>
            <Image source={Logo} resizeMode="contain" style={styles.logo} />


            <View>
                {props.userIcon ?
                    <View style={styles.headerIcons}>
                        <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('User')}>
                            <UserCircle size={40} color='#ffffff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('SignIn')}>
                            <List size={40} color='#ffffff' />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.headerIconsMenu}>
                        <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('SignIn')}>
                            <List size={40} color='#ffffff' />
                        </TouchableOpacity>
                    </View>

                }
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    user: {
        // marginTop: 26,
        marginRight: 6,
        marginLeft: 22,
    },
    menu: {
        // marginTop: 26,
        marginRight: 100,
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
        marginRight: '5%',
        marginLeft: '35%',
        marginTop: 15,
        // backgroundColor: 'red',

    },

    headerIcons: {
        marginTop: 35,
        marginRight: 20,
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerIconsMenu:{
        marginTop: 35,
        marginRight: 10,
        marginLeft: 8,
        padding: 15,
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }


}
)
