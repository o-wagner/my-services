import {
  StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Alert, TouchableWithoutFeedback,
  Keyboard, Image, StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Logo from "../../components/imgs/Vector.png";
import Button from "../../components/Button";
import { Eye, EyeClosed } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { collection, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth, {db} from "../../../firebase";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function SignIn() {
  const navigation = useNavigation();
  const [step, setStep] = useState(0);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState(null);
  const [phone, setPhone] = useState(null);
  const [age, setAge] = useState(null);
  const [password, setPassword] = useState("");
  const [rptpassword, setRptPassword] = useState("");
  const [passwordReveal, setPasswordReveal] = useState(true);

  const createUser = async() => {
    console.log("currentID: ", auth.currentUser.uid);
    const docRef = await setDoc(doc(db, "users", auth.currentUser.uid), {
        Name: username,
        Fullname: fullname,
        Age: age,
        Phone: phone,
        Email: email,        
    })
    console.log("Document written with ID: ", docRef.id);
}


  function changeForm() {
    if (step === 0) {
      setStep(1);
    } else {
      setStep(0);
    }
  }

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert("Usuário Criado");
        const user = userCredential.user;
        navigation.navigate("Home");
        console.log("userCredential:", userCredential.user);
      }).then(() => {
        console.log("Entrou handleCreate.then2");
        createUser();
      })
      .catch((err) => {
        validateSignUp(err);
        console.log(err);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      })
      .catch((err) => {
        validateForm(err);
        console.log(err);
      });
  };

  const validateSignUp = (err) => {
    if (name === '') {
      Alert.alert("Crie seu nome de usuário");
      return;
    }
    if (rptpassword === '') {
      Alert.alert("Repita sua senha");
      return;
    }
    if (rptpassword !== password) {
      Alert.alert("Senhas não conferem");
      return;
    }
    validateForm(err);
  }

  function validateForm(err) {
    switch (err.code) {
      case 'auth/missing-email':
        return Alert.alert("Preencha o campo email");
      case 'auth/email-already-in-use':
        return Alert.alert("Email ja está em uso");
      case 'auth/invalid-email':
        return Alert.alert("Preencha o campo email corretamente");
      case 'auth/weak-password':
        return Alert.alert("Senha muito fraca (deve conter pelo menos 6 dígitos");
      case 'auth/missing-password':
        return Alert.alert("Preencha o campo de senha");
      case 'auth/wrong-password':
        return Alert.alert("Senha incorreta");
      case 'auth/user-not-found':
        return Alert.alert("Usuário não encontrado");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      
      <ImageBackground
        style={styles.background}
        source={{
          uri: "https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg",
        }}
        resizeMode="stretch"
      >
        <StatusBar barStyle="light-content"></StatusBar>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={step === 0 ? styles.titlelogin : styles.titleSignUp}>
              {step === 0 ? "Faça Login no" : "Crie Sua Conta"}
            </Text>
            <Image
              source={Logo}
              style={styles.logo}
              resizeMode="stretch"
            ></Image>
          </View>

          {step === 0 ? (
            <KeyboardAvoidingView style={styles.form} behavior="padding">
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />

              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={passwordReveal}
                value={password}
                returnKeyType="send"
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setPasswordReveal(!passwordReveal)}
              >
                {passwordReveal ? (
                  <Eye style={styles.eyeIcon} color="#353535" size={25} />
                ) : (
                  <EyeClosed style={styles.eyeIcon} color="#353535" size={25} />
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text
                  style={[
                    styles.label,
                    {
                      marginTop: 5,
                      textAlign: "right",
                    },
                  ]}
                >
                  Esqueceu sua senha?
                </Text>
              </TouchableOpacity>


              <Button style={{ marginTop: 20, marginBottom: 20 }} label="Entrar" onPress={handleSignIn} />
              
                
                <TouchableOpacity onPress={changeForm} style={{flexDirection: 'row', textAlign: 'center', justifyContent: 'center'}}>
                  
                  <Text
                    style={[
                      styles.label,
                      {
                        textAlign: 'center',
                        fontSize: 16,
                        // textDecorationLine: 'underline',
                      },
                    ]}
                  >
                    <Text style={[styles.label, {fontWeight: "bold"}]}>Não tem uma conta? </Text>
                     Cadastre-se
                  </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
          ) : (
            <KeyboardAvoidingView style={styles.form} behavior="padding">
              <Text style={styles.label}>Crie seu nome de usuário</Text>
              <TextInput
                style={styles.input}
                placeholder="@username"
                value={username}
                onChangeText={setUsername}
              />
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                textContentType="emailAddress"
                style={styles.input}
                placeholder="Digite seu email"
                keyboardType="email-address"
                value={email}
                secureTextEntry={false}
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
              <TouchableOpacity
                onPress={() => setPasswordReveal(!passwordReveal)}
              >
                {passwordReveal ? (
                  <Eye style={styles.eyeIcon} color="#353535" size={25} />
                ) : (
                  <EyeClosed style={styles.eyeIcon} color="#353535" size={25} />
                )}
              </TouchableOpacity>

              <Text style={styles.label}>Repita sua senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Repita sua senha"
                secureTextEntry={passwordReveal}
                value={rptpassword}
                onChangeText={setRptPassword}
                autoComplete="off"
                returnKeyType="send"
              />
              <TouchableOpacity
                onPress={() => setPasswordReveal(!passwordReveal)}
              >
                {passwordReveal ? (
                  <Eye style={styles.eyeIcon} color="#353535" size={25} />
                ) : (
                  <EyeClosed style={styles.eyeIcon} color="#353535" size={25} />
                )}
              </TouchableOpacity>

              <Button label="Criar Conta" onPress={handleCreateAccount} style={{marginBottom: 15}} />

              <TouchableOpacity onPress={changeForm}>
                <Text style={[styles.label, { textAlign: "center" }]}>
                  <Text style={{fontWeight: 'bold'}}>Ja possui uma conta?</Text> Fazer Login
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          )}
        </SafeAreaView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#43425D",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    // flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginTop: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    // marginBottom: 10,
  },
  titlelogin: {
    color: "#fff",
    fontSize: 17,
    position: "absolute",
    top: 3,
    left: 1,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  titleSignUp: {
    color: "#fff",
    fontSize: 16,
    position: "absolute",
    top: 20,
    left: 1,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  logo: {
    width: 230,
    height: 70,
  },
  form: {
    marginTop: 20,
    width: "70%",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
    marginTop: 20,
    marginLeft: 4,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    height: 40,
    borderRadius: 10,
    padding: 12,
    paddingHorizontal: 20,
    marginBottom: 9,
  },
  eyeIcon: {
    position: "absolute",
    bottom: 16,
    right: 15,
  },
});
