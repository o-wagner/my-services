import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Logo from '../../components/imgs/Vector.png';
import {
    StyleSheet, Text, View, TextInput,
    ImageBackground, TouchableOpacity, KeyboardAvoidingView,
    Alert, TouchableWithoutFeedback, Keyboard, Image, Header
} from 'react-native';
import Button from '../../components/Button';
import { Eye, EyeClosed } from 'phosphor-react-native';

export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [step, setStep] = useState(0);
    const [name, setName] = useState('');
    const [rptpassword, setRptPassword] = useState('');
    const [passwordReveal, setPasswordReveal] = useState(true);

    function changeForm() {
        if (step === 0) {
            setStep(1);
        } else {
            setStep(0);
        }
    }

    function handleSubmit() {
        console.log({ email, password });
        navigation.navigate('Home');
    }

    function validateForm() {
        if (name === '') {
            Alert.alert('Preencha o campo Nome');
            return;
        }if (email === '') {
            Alert.alert('Preencha o campo Email');
            return;
        } if (password === '') {
            Alert.alert('Preencha o campo Senha');
            return;
        } if (rptpassword === '') {
            Alert.alert('Repita sua senha');
            return;
        } if (rptpassword !== password) {
            Alert.alert('Senhas não conferem');
            return;
        }
        handleSubmit();
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ImageBackground
                style={styles.container}
                source={{
                    uri:
                        'https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg',
                }}
                resizeMode="stretch"
            >

                
                    <View style={styles.header}>
                    <Text style={styles.titlelogin}>{step === 0 ? 'Faça Login no' : 'Crie Sua Conta'}</Text>
                        <Image source={Logo} style={styles.logo} resizeMode="stretch"></Image>
                        
                    </View>
                    

                {step === 0 ? (
                    <KeyboardAvoidingView style={styles.form} behavior="">
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email"
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                        />


                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                            secureTextEntry={passwordReveal}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={() => setPasswordReveal(!passwordReveal)}>
                            { passwordReveal ?
                                <EyeClosed  style={styles.eyeIcon} color='#353535' size={25}/>
                                :
                                <Eye style={styles.eyeIcon} color='#353535' size={25} />
                            }
                        </TouchableOpacity>

                        <Button label="Entrar" onPress={handleSubmit}/>

                        <TouchableOpacity onPress={changeForm}>
                            <Text style={[styles.label, {
                                textAlign: 'center',
                                textDecorationLine: 'underline',
                            }]}>Não possuo uma conta</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>

                ) : (
                    <KeyboardAvoidingView style={styles.form} behavior="padding">
                        <Text style={styles.label}>Crie seu Usuário</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Crie seu usuário"
                            value={name}
                            onChangeText={setName}
                        />
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email"
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                        />

                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                       <TouchableOpacity onPress={() => setPasswordReveal(!passwordReveal)}>
                            { passwordReveal ?
                                <EyeClosed  style={styles.eyeIcon} color='#353535' size={25}/>
                                :
                                <Eye style={styles.eyeIcon} color='#353535' size={25} />
                            }
                        </TouchableOpacity>

                        <Text style={styles.label}>Repita sua senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Repita sua senha"
                            secureTextEntry={true}
                            value={rptpassword}
                            onChangeText={setRptPassword}
                        />
                       <TouchableOpacity onPress={() => setPasswordReveal(!passwordReveal)}>
                            { passwordReveal ?
                                <EyeClosed  style={styles.eyeIcon} color='#353535' size={25}/>
                                :
                                <Eye style={styles.eyeIcon} color='#353535' size={25} />
                            }
                        </TouchableOpacity>

                        <Button label="Criar Conta" onPress={handleSubmit}/>

                        <TouchableOpacity onPress={changeForm}>
                            <Text style={[styles.label, { textAlign: 'center' }]}>Ja possuo uma conta</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                )}

            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#43425D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        height:'10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        marginTop: 10,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        textTransform: 'uppercase',
        // marginBottom: 10,
    },
    titlelogin:{
        color: '#fff',
        fontSize: 18,
        position: 'absolute',
        top: 13,
        left: 1,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        textTransform: 'uppercase',
    },
    logo:{
        width: 230,
        height:70,

    },
    form: {
        marginTop: 20,
        width: '70%',
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 8,
        marginTop: 20,
        marginLeft: 4,
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        height: 40,
        borderRadius: 10,
        padding: 12,
        paddingHorizontal: 20,
        marginBottom: 9,
    },
    eyeIcon:{
        position:'absolute',
        bottom: 16,
        right: 15,
    }
    

});
