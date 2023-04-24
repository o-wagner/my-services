import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, ImageBackground, KeyboardAvoidingView, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import Header from "../../components/Header";
import Button from "../../components/Button";
import Avatar from "../../components/imgs/Avatar.jpg"
import auth, { db } from '../../../firebase';
import { doc, updateDoc } from "firebase/firestore";
import { signOut } from 'firebase/auth';

export default function User() {
    const navigation = useNavigation();
    const [edit, setEdit] = useState(false);
    const [fullname, setFullname] = useState(null);
    const [username, setUsername] = useState(null);
    const [age, setAge] = useState(null);
    const [phone, setPhone] = useState(null);

    function handleLogout() {
        signOut(auth).then(() => {
            navigation.navigate("SignIn");
        })
    }
    const Editar = () => {
        if (edit === false) {
            setEdit(true);
        } else
            setEdit(false);
    }

    const updateUser = async () => {
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
            Fullname: fullname,
            Phone: phone,
            Age: age
        }).then(() => {
            Alert.alert("Seu Perfil foi Atualizado");
            Editar();
        });
        
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

        {edit ? (<ScrollView>
            <View style={styles.imgArea}>
                <TouchableOpacity>
                    <Image
                        source={Avatar}
                        style={{ borderRadius: 100, width: 140, height: 140, marginTop: 10 }}
                    ></Image>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={styles.username}>{username}</Text>
                <Text style={{ fontSize: 20, color: '#dbdbdb', }}>{fullname}, {age}</Text>
            </View>

            <View style={styles.btnArea}>
                <Button style={styles.btnEdit} textStyle={styles.btnText} label="Editar Perfil" onPress={Editar} />
                <Button style={styles.btnEdit} textStyle={styles.btnText} label="Logout" onPress={() => handleLogout()} />
            </View>
        </ScrollView>) : (
            <KeyboardAvoidingView style={styles.form} behavior="padding">
                <Text style={styles.title}>Complete o seu perfil</Text>
                <Text style={styles.label}>Nome Completo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome completo"
                    value={fullname}
                    onChangeText={(fullname) => setFullname(fullname)}
                />

                <Text style={styles.label}>Digite sua idade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua idade"
                    value={age}
                    onChangeText={(age) => setAge(age)}
                />
                <Text style={styles.label}>Digite seu telefone</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu telefone"
                    value={phone}
                    onChangeText={(phone) => setPhone(phone)}
                />

                <Button label="Salvar Dados" style={styles.btn} onPress={() => updateUser()} />

            </KeyboardAvoidingView>
        )}
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
    title: {
        color: 'white',
        fontSize: 25,
        marginVertical: 25,
        fontWeight: 'bold',
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
        height: 60,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
    },
    btnText: {
        fontSize: 20,
    },
    form: {
        width: '100%',
        alignItems: "center",
    },
    label: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 10,
        marginTop: 20,
        marginLeft: 40,
        alignSelf: 'flex-start'

    },

    input: {
        backgroundColor: "#fff",
        width: "80%",
        height: 40,
        borderRadius: 10,
        padding: 12,
        paddingHorizontal: 20,
        marginBottom: 9,
    },
    btnSair: {
        width: '73%',
        marginLeft: 10,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
    },
    btn: {
        width: '40%',
    }
})