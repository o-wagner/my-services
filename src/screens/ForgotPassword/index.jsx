import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Text, StyleSheet, ImageBackground, SafeAreaView, View, TouchableOpacity, TextInput

} from 'react-native';
import Header from "../../components/Header";
import Button from "../../components/Button";

export default function ForgotPassword() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    function EmailSend() {
       console.log({email});
       navigation.navigate('SignIn');
    }

    return (<ImageBackground
        style={styles.background}
        source={{
            uri:
                'https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg',
        }}
        resizeMode="stretch"
    >

        <Header />

        <SafeAreaView style={styles.page}>


            <View style={styles.container}>
                <Text style={styles.title}>Encontre sua conta</Text>

                <Text style={styles.description}>Insira seu email para procurar a sua conta. </Text>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input}
                        placeholder='Insira aqui o seu email'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                        >
                    </TextInput>
                </View>
                <View style={styles.btnArea}>
                    <Button style={styles.btnEdit} textStyle={styles.btnText} label="Cancelar" onPress={() => navigation.navigate('SignIn')} />
                    <Button style={styles.btnEdit} textStyle={styles.btnText} label="Pesquisar" onPress={EmailSend} />
                </View>

            </View>
        </SafeAreaView>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        alignItems: 'center',

    },
    background: {
        flex: 1
    },

    container: {
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 50,
        backgroundColor: '#0000003b',
        padding: 20,
        borderRadius: 18,
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'Roboto',
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',

    },
    input: {
        backgroundColor: '#dddddd',
        width: '100%',
        height: 40,
        paddingLeft: 15,
        borderRadius: 8,
        fontSize: 13,
        marginBottom: 10,
    },
    inputArea:{
        marginVertical: 20,
        width: 250,

    },
    btnArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    btnEdit: {
        width: '35%',
        marginLeft: 13,
        marginTop: 10,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
    },
    btnText: {
        fontSize: 15,
    },
    btnSair: {
        width: '73%',
        marginLeft: 10,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
    },
})