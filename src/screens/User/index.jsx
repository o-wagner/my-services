import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, ImageBackground, SafeAreaView, TextInput, KeyboardAvoidingView, View, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import Header from "../../components/Header";
import Button from "../../components/Button";
import Avatar from "../../components/imgs/Avatar.jpg"
import auth, { db } from '../../../firebase';
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { signOut } from 'firebase/auth';

export default function User() {
    const navigation = useNavigation();
    const [edit, setEdit] = useState(0);
    const [fullname, setFullname] = useState(null);
    const [username, setUsername] = useState(null);
    const [age, setAge] = useState(null);
    const [phone, setPhone] = useState(null);

    useEffect(() => {
        const ReadData = async () => {
            const docRef = doc(db, "users", auth.currentUser.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setFullname(docSnap.data().Fullname);
                setUsername(docSnap.data().Username);
                setPhone(docSnap.data().Phone);
                setAge(docSnap.data().Age);
            }
        }
        ReadData();
    }, []);

    function handleLogout() {
        signOut(auth).then(() => {
            navigation.navigate("SignIn");
        })
    }

    function changeEdit() {
        if (edit === 0) {
            setEdit(1);
        } else {
            setEdit(0);
        }
    }

    const updateUser = async () => {
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
            Fullname: fullname,
            Phone: phone,
            Age: age
        }).then(() => {
            Alert.alert("Suas alterações foram salvas");
            changeEdit();
        }).catch((err) => {
            console.log(err);
        })
    }

    // const deleteUser = async () => {
    //     const docRef = doc(db, "users", auth.currentUser.uid);
    //     await deleteDoc(docRef)
    //     .then(() => {
    //         Alert.alert("Seu Perfil foi Deletado");
    //         changeEdit();
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }

    const saveUser = async () => {
        await setDoc(doc(db, "users", auth.currentUser.uid), {
            Username: username,
            Fullname: fullname,
            Phone: phone,
            Age: age
        }).then(() => {
            Alert.alert("Seu Perfil foi salvo com sucesso");
            changeEdit();
        }).catch((err) => {
            console.log(err);
        })
    }

    return (

        <ImageBackground
            style={styles.background}
            source={{
                uri:
                    'https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg',
            }}
            resizeMode="stretch"
        >

            <Header />


            {edit === 0 ? (
                 <SafeAreaView style={styles.container}>  
                <ScrollView styles={{ width: '100%', alignSelf: 'center' }}>
                    <View style={styles.imgArea}>
                        <TouchableOpacity>
                            <Image
                                source={Avatar}
                                style={{ borderRadius: 100, width: 140, height: 140 }}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Text style={styles.username}>@{username}</Text>
                        <Text style={{ fontSize: 17, color: '#dbdbdb', marginBottom: 20 }}>{fullname}, {age}</Text>
                    </View>

                    <View style={styles.btnArea}>
                        <Button style={styles.btnEdit} textStyle={styles.btnText} label="Editar Perfil" onPress={changeEdit} />
                        <Button style={styles.btnEdit} textStyle={styles.btnText} label="Logout" onPress={() => handleLogout()} />
                    </View>
                </ScrollView>
                 </SafeAreaView> 


            ) : (
                <KeyboardAvoidingView style={styles.page} behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={80}>
                    <ScrollView styles={{ width: '100%' }}>
                        <View style={styles.imgArea}>
                            <TouchableOpacity>
                                <Image
                                    source={Avatar}
                                    style={{ borderRadius: 100, width: 120, height: 120 }}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                        <KeyboardAvoidingView style={styles.inputArea} behavior='padding'>
                            <Text style={styles.label}>Nome de Usuário</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="@username"
                                value={username}
                                onChangeText={(username) => setUsername(username)}
                            />
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

                            {fullname === null && (
                                <View style={styles.btnArea}>
                                    <Button label="✔ Salvar Perfil" style={[styles.btn, { backgroundColor: '#409e01' }]} onPress={() => saveUser()} />
                                </View>
                            )}
                            {fullname !== null && (
                                <View style={styles.btnArea}>
                                    <Button label="Salvar Alterações no Perfil" style={styles.btn} onPress={() => updateUser()} />
                                    {/* <Button label="  Excluir Perfil ❌ " style={[styles.btn, { backgroundColor: '#b30808'}]} onPress={() => deleteUser()} /> */}
                                </View>
                            )}
                        </KeyboardAvoidingView>

                    </ScrollView>
                </KeyboardAvoidingView>

            )
            }

        </ImageBackground >

    );
}

const styles = StyleSheet.create({
    page: {
        width: '100%',

    },
    background: {
        flex: 1,
        backgroundColor: "#43425D",
    },
    container: {
        width: "100%",

    },

    title: {
        color: 'white',
        fontSize: 25,
        marginTop: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    userAvatar: {
        width: '100%',
    },
    username: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        padding: 8
    },

    imgArea: {
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        padding: 10,
        marginTop: 20,
        // borderColor: 'white',
        // borderWidth: 1
    },

    inputArea: {
        padding: 25
    },

    btnArea: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnEdit: {
        backgroundColor: '#00000049',
        width: '80%',
        height: 50,
        borderRadius: 12,
    },
    btnText: {
        fontSize: 20,
    },

    label: {
        color: "#fff",
        fontSize: 15,
        marginBottom: 5,
        gap: 10,
        alignSelf: 'flex-start'
    },
    input: {
        backgroundColor: "#fff",
        width: "100%",
        height: 40,
        borderRadius: 10,
        padding: 12,
        paddingHorizontal: 18,
        marginBottom: 25,
    },
    btnSair: {
        width: '73%',
        marginLeft: 10,
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
    },
    btn: {
        width: '100%',
        padding: 10
    }
})