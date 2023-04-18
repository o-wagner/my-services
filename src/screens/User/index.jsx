import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, StyleSheet, ImageBackground, SafeAreaView, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import Header from "../../components/Header";
import Button from "../../components/Button";
import Avatar from "../../components/imgs/Avatar.jpg"

export default function User() {
    const navigation = useNavigation();

    return (<ImageBackground
        style={styles.background}
        source={{
            uri:
                'https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg',
        }}
        resizeMode="stretch"
    >
        <Header />
        {/* <SafeAreaView style={styles.page}> */}
        <ScrollView>
            <View style={styles.imgArea}>
                <TouchableOpacity>
                    <Image 
                    source={Avatar}
                    style={{borderRadius: 100, width: 140, height: 140, marginTop: 10}}
                    ></Image>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={styles.username}>@smoke.ogg</Text>
                <Text style={{fontSize: 20, color: '#dbdbdb', }}>23, Smoke</Text>
            </View>

            <View style={styles.btnArea}>
                <Button style={styles.btnEdit} textStyle={styles.btnText} label="Editar Perfil" onPress={() => navigation.navigate('#')} />
                <Button style={styles.btnEdit} textStyle={styles.btnText} label="Favoritos" onPress={() => navigation.navigate('#')} />
                <Button style={styles.btnEdit} textStyle={styles.btnText} label="Logout" onPress={() => navigation.navigate('SignIn')} />
            </View>
        </ScrollView>
        {/* </SafeAreaView> */}
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        flex: 1,
        width: '100%',

    },
    userAvatar: {
        marginBottom: 10,
    },
    background: {
        flex: 1
    },
    username: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5,
        padding: 5
    },

    imgArea: {
        marginTop: 10,
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: 170,
        padding: 20,

    },

    btnArea: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnEdit: {
        backgroundColor: '#00000049',
        width: '85%',
        height: '20%',
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
    },
    btnText: {
        fontSize: 20,
    },
    btnSair: {
        width: '73%',
        marginLeft: 10,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
    },
})