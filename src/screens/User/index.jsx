import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Text, StyleSheet, ImageBackground, SafeAreaView, View, TouchableOpacity

} from 'react-native';
import { UserCircle } from 'phosphor-react-native';
import Header from "../../components/Header";
import Button from "../../components/Button";

export default function User() {
    const navigation = useNavigation();
    const [UserIcon, setUserIcon] = useState(false) ;

    return (<ImageBackground
        style={styles.background}
        source={{
            uri:
                'https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg',
        }}
        resizeMode="stretch"
    >

        <Header/>

        <SafeAreaView style={styles.page}>
           
                <TouchableOpacity style={styles.userArea}>
                    <UserCircle color="white" size={140} />
                <View>
                    <Text style={styles.username}>@username</Text>
                </View>
                </TouchableOpacity>
            
                <View style={styles.btnArea}>
                    <Button style={styles.btnEdit} textStyle={styles.btnText} label="Editar Perfil" onPress={() => navigation.navigate('#')}/>
                    <Button style={styles.btnEdit} textStyle={styles.btnText} label="Favoritos" onPress={() => navigation.navigate('#')}/>
                </View>
                <Button style={styles.btnSair} textStyle={styles.btnText} label="Voltar" onPress={() => navigation.navigate('Home')}/>
            
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
    username: {
        fontSize: 28,
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    },

    userArea: {
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 50,
    },

    btnArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    btnEdit: {
        width: '35%',
        padding: 8,
        marginLeft: 13,
        marginTop: 30,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
    },
    btnText:{
        fontSize: 20,
    },
    btnSair: {
        width: '73%',
        padding: 10,
        marginLeft: 10,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
    },
})