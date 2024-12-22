import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const testemail = "dinuka@gmail.com";
  const testpassword = '1111';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate('signup');
  };

  const handleLogin = async () => {
    if (!email || !password) {
        setErrorMessage('Please fill all fields');
        setTimeout(() => {
            setErrorMessage('');
          }, 5000);
          return;
      }

    if (email === testemail && password === testpassword) {
      navigation.navigate('home');
    } else {
        setErrorMessage('Invalid email or password. Please try again.');
        setTimeout(() => {
            setErrorMessage('');
          }, 5000);
          return;
    }
  };

  return (
    <View style={styles.container}>
        
        {/* dispaly error message */}   
        {errorMessage ?   <View style={styles.errorBOx}><Text style={styles.error}>{errorMessage}</Text></View>: null}
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignUpPress}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>

 
          
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 60,
    color: '#831AA9',
  },
  input: {
    width: '50%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#831AA9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    color: '#831AA9',
    fontSize: 16,
  },
  errorBOx:{
width:'50%',
padding:15,
justifyContent: 'center',
alignItems: 'center',
borderRadius:5,
backgroundColor:'#FF0000',
marginBottom:80,

borderStyle:'solid',
borderColor:'red',
borderWidth:1,
fontWeight:'bold'

  },

  error: {
    color: 'white',
   
    fontSize: 18,
   
  },
});

export default LoginScreen;
