// import React, {useState} from 'react';
// import { useNavigation } from "@react-navigation/native";
// import Logo from "../components/imgs/Vector.png";
// import Button from "../components/Button";
// import {
//     StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Alert, TouchableWithoutFeedback,
//     Keyboard, Image,} from "react-native";
//     import { Eye, EyeClosed } from "phosphor-react-native";

// export default function SignInComponent(emails, passwords) {
//     const navigation = useNavigation();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordReveal, setPasswordReveal] = useState(true);

//     function changeForm() {
//         if (step === 0) {
//           setStep(1);
//         } else {
//           setStep(0);
//         }
//       }

//     const handleSignIn = () => {
//         signInWithEmailAndPassword(auth, email, password)
//           .then((userCredential) => {
//             const user = userCredential.user;
//             navigation.reset({
//               index: 0,
//               routes: [{ name: "Home" }],
//             });
//           })
//           .catch((err) => {
//             validateForm(err);
//             console.log(err);
//           });
//       };

//     <KeyboardAvoidingView style={styles.form} behavior="padding">
//               <Text style={styles.label}>E-mail</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Digite seu email"
//                 keyboardType="email-address"
//                 value={email}
//                 onChangeText={(text) => setEmail(text)}
//               />
//               <Text style={styles.label}>Senha</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Digite sua senha"
//                 secureTextEntry={passwordReveal}
//                 value={password}
//                 onChangeText={setPassword}
//               />
//               <TouchableOpacity
//                 onPress={() => setPasswordReveal(!passwordReveal)}
//               >
//                 {passwordReveal ? (
//                   <Eye style={styles.eyeIcon} color="#353535" size={25} />
//                 ) : (
//                   <EyeClosed style={styles.eyeIcon} color="#353535" size={25} />
//                 )}
//               </TouchableOpacity>

//               <Button label="Entrar" onPress={handleSignIn} />

//               <TouchableOpacity
//                 onPress={() => navigation.navigate("ForgotPassword")}
//               >
//                 <Text
//                   style={[
//                     styles.label,
//                     {
//                       marginTop: 25,
//                       textAlign: "center",
//                     },
//                   ]}
//                 >
//                   Esqueceu sua senha?
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity onPress={changeForm}>
//                 <Text
//                   style={[
//                     styles.label,
//                     {
//                       marginTop: 15,
//                       textAlign: "center",
//                       textDecorationLine: "underline",
//                     },
//                   ]}
//                 >
//                   Cadastre-se
//                 </Text>
//               </TouchableOpacity>
//             </KeyboardAvoidingView>
// }
// const styles = StyleSheet.create({
//     background: {
//       flex: 1,
//       backgroundColor: "#43425D",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     container: {
//       // flex: 1,
//       width: "100%",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     header: {
//       height: "15%",
//       justifyContent: "center",
//       alignItems: "center",
//       marginBottom: 5,
//     },
//     title: {
//       color: "#fff",
//       fontSize: 24,
//       marginTop: 10,
//       fontWeight: "bold",
//       textTransform: "uppercase",
//       // marginBottom: 10,
//     },
//     titlelogin: {
//       color: "#fff",
//       fontSize: 17,
//       position: "absolute",
//       top: 3,
//       left: 1,
//       fontWeight: "bold",
//       textTransform: "uppercase",
//     },
//     titleSignUp: {
//       color: "#fff",
//       fontSize: 16,
//       position: "absolute",
//       top: 20,
//       left: 1,
//       fontWeight: "bold",
//       textTransform: "uppercase",
//     },
//     logo: {
//       width: 230,
//       height: 70,
//     },
//     form: {
//       marginTop: 20,
//       width: "70%",
//     },
//     label: {
//       color: "#fff",
//       fontSize: 16,
//       marginBottom: 8,
//       marginTop: 20,
//       marginLeft: 4,
//     },
//     input: {
//       backgroundColor: "#fff",
//       width: "100%",
//       height: 40,
//       borderRadius: 10,
//       padding: 12,
//       paddingHorizontal: 20,
//       marginBottom: 9,
//     },
//     eyeIcon: {
//       position: "absolute",
//       bottom: 16,
//       right: 15,
//     },
//   });
  