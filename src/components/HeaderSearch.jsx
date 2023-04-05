import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, TextInput, Image, StyleSheet, View } from "react-native";
import Logo from './imgs/Vector.png';
import {UserCircle, House, MagnifyingGlass} from 'phosphor-react-native';


export default function HeaderSearch(props){

    const navigation = useNavigation();
    return(

    <View style={styles.header}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Logo} resizeMode="contain" style={styles.logo} />
            </View>  
        
            <View style={styles.headerRow}>
                <View style={styles.searchArea}>
                    <TextInput style={styles.searchInput} 
                    placeholder="Pesquise aqui"
                    value={props.searchText}
                    onChangeText={(text) => props.setSearchText(text)}
                    />  
                        <MagnifyingGlass size={18} style={styles.searchIcon} color={'#2a0441'} />
                </View>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.user} onPress={() => navigation.navigate()}>
                        <UserCircle size={40} color='#ffffff'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.house} onPress={() => navigation.navigate('Home')}>
                        <House size={40} color='#ffffff'/>
                    </TouchableOpacity>
                </View>
        </View>
    </View>

    );
}

const styles = StyleSheet.create({
    headerIcons:{
        flexDirection:'row',
        padding: 10,
        flex: 1,
        paddingRight: 28
    },

    user: {
        // marginTop: 26,
        marginLeft: 35,
    },
    house: {
        // marginTop: 26,
        marginLeft: 6,
    },
    header: {
        paddingTop: '10%',
        backgroundColor: '#0000004f',
        width: '100%',
    },
    headerRow:{
        flexDirection:'row',
        alignItems: 'center',
        paddingBottom: 10,
    },
    logo: {
        width: 190,
        height: 90,
        marginRight: '28%',
        marginBottom: -18, 
        marginTop: 15,
    },
    searchIcon:{
        position: 'absolute',
        left: 31,
        top: 6,
    },
  
    searchInput:{
        backgroundColor: '#dddddd',
        width:'100%',
        height:30,
        borderRadius: 8,
        marginLeft: '10%',
        paddingLeft: '13%',
    },

        searchArea: {
        flex: 2
    },


} 
)
