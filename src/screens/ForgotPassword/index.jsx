import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import Logo from "../../components/imgs/Vector.png";
import Button from "../../components/Button";
import auth from '../../../firebase';
import { sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  function EmailSend() {
    if(email != ''){
      sendPasswordResetEmail(auth, email)
      .then(()=> {
        Alert.alert("Email enviado com sucesso!");  
      })
      .catch((error)=> {
         const errorCode = error.code;
         const errorMessage = error.message;
         Alert.alert("Error: " + errorMessage);
      });
    }else{
    Alert.alert("Insira o email para recuperar sua conta")
    console.log({ email });
  }
  }

  return (
    
    <TouchableWithoutFeedback style={{flex:1}} onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        style={styles.background}
        source={{
          uri: "https://png.pngtree.com/thumb_back/fh260/background/20210722/pngtree-dark-purple-gradient-wallpaper-background-image_750294.jpg",
        }}
        resizeMode="stretch"
      >
        <View style={styles.page}>
          {/* <View style={styles.container}> */}
          <View style={styles.logoContainer}>
            <Text style={styles.title}>Encontre sua conta</Text>
            <Image source={Logo} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.inputArea}>
            <Text style={styles.description}>
              Insira seu email para procurar a sua conta.{" "}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Insira aqui o seu email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            ></TextInput>
          </View>
          <View style={styles.btnArea}>
            <Button
              style={styles.btn}
              textStyle={styles.btnText}
              label="Cancelar"
              onPress={() => navigation.navigate("SignIn")}
            />
            <Button
              style={styles.btn}
              textStyle={styles.btnText}
              label="Enviar"
              onPress={EmailSend}
            />
          </View>
        </View>
        {/* </View> */}
      </ImageBackground>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#0000003b",
    borderRadius: 18,
    width: "100%",
    height: "100%",
    // flex: 1
  },
  logo: {
    width: "60%",
  },

  title: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    position: "absolute",
    top: 18,
    left: 80,
    textTransform: "uppercase",
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
  },

  description: {
    marginBottom: 16,
    fontSize: 16,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#dddddd",
    width: "100%",
    height: 40,
    paddingLeft: 15,
    borderRadius: 8,
    fontSize: 13,
  },
  inputArea: {
    marginVertical: 10,
    width: "70%",
  },
  btnArea: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  btn: {
    width: "33%",
    marginHorizontal: 5,
    borderRadius: 12,
    alignContent: "center",
    alignItems: "center",
    borderColor: " white",
    borderWidth: 1,
  },
  btnText: {
    fontSize: 15,
  },
});
