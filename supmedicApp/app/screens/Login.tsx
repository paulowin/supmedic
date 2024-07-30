import { View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading ] = useState(false);
    const auth = FIREBASE_AUTH;

const signIn = async () => {
    setLoading(true);
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch (error:any ) {
      console.log(error);
      alert('Inscription échouée: ' + error.message)
    } finally {
        setLoading(false);
    } 
}   

const signUp = async () => {
    setLoading(true);
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        alert('Check your emails !');
    } catch (error:any ) {
      console.log(error);
      alert('Inscription échouée: ' + error.message)
    } finally {
        setLoading(false);
    } 
}
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <KeyboardAvoidingView behavior='padding'>
      <TextInput value={email} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text) }></TextInput>
      <TextInput secureTextEntry={true}  value={password} placeholder='Mot de passe' autoCapitalize='none' onChangeText={(text) => setPassword(text) }></TextInput>
      { loading ? <ActivityIndicator size='large' color='#blue'/> 
      : <>
      <Button title="Connexion" onPress={signIn}/>
      <Button title="S'inscrire" onPress={signUp}/>
      </>}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:   
'center',
  },
});

export default Login