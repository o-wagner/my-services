import React from "react";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, TextInput, Text, StyleSheet, View } from "react-native";
import { UserCircle, CaretLeft, MagnifyingGlass } from 'phosphor-react-native';
import { ShoppingCart, ForkKnife, Phone , Drop , FirstAid, Hamburger } from 'phosphor-react-native';

export default function HeaderSearch(props) {
    const navigation = useNavigation();
    let nome = (props.nome);
    let icon = (props.icon);

    return (
        <View style={styles.header}>
            <View style={styles.headerName}>
                <View style={styles.headerIcon} >
                {icon == 'ShoppingCart' && <ShoppingCart size={24} color='#d8d8d8' />}
                {icon == 'Phone' && <Phone size={24} color='#d8d8d8' />}
                {icon == 'ForkKnife' && <ForkKnife size={24} color='#d8d8d8' />}
                {icon == 'Drop' && <Drop size={24} color='#d8d8d8' />}
                {icon == 'FirstAid' && <FirstAid size={24} color='#d8d8d8' />}
                {icon == 'Hamburger' && <Hamburger size={24} color='#d8d8d8' />}
                </View>
            <Text style={styles.title}>{nome}</Text>
            </View>

            <View style={styles.headerRow}>
                <TouchableOpacity style={styles.house} onPress={() => navigation.navigate('Home')}>
                    <CaretLeft size={33} color='#ffffff' />
                </TouchableOpacity>
                <View style={styles.searchArea}>
                    <TextInput style={styles.searchInput}
                        placeholder="Pesquise aqui"
                        value={props.searchText}
                        onChangeText={(text) => props.setSearchText(text)}
                    />
                    <MagnifyingGlass size={18} style={styles.searchIcon} color={'#2a0441'} />
                </View>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('User')}>
                        <UserCircle size={35} color='#ffffff' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    headerIcons: {
        flexDirection: 'row',
        padding: 10,
        flex: 1,
        paddingRight: 28
    },
    title: {
        color: '#fdfdfd',
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 10,

    },
    user: {
        marginLeft: 100,
    },
    house: {
        marginLeft: 20,
    },
    header: {
        paddingTop: '10%',
        backgroundColor: '#0000004f',
        width: '100%',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },

    headerName: {
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 25,
        marginRight: 20,
    },
    headerIcon:{
        marginBottom: 10,
        marginRight: 10,
    },
    searchIcon: {
        position: 'absolute',
        left: 20,
        top: 6,
    },

    searchInput: {
        backgroundColor: '#dddddd',
        width: '145%',
        height: 30,
        borderRadius: 8,
        marginLeft: '8%',
        paddingLeft: '16%',
    },



}
)
