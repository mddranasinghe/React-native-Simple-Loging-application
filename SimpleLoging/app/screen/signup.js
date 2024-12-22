
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const navigation = useNavigation();
  
  const handleSignup = async () => {
    if (!email || !password || !confirmPassword || !name) {
        setErrorMessage('Please fill all fields');
        setTimeout(() => {
            setErrorMessage('');
          }, 5000);
          return;
      }
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        setTimeout(() => {
            setErrorMessage('');
          }, 5000);
          return;
      }
  };
 return (
   <View style={styles.container}>
     {errorMessage ?   <View style={styles.errorBOx}><Text style={styles.error}>{errorMessage}</Text>     </View>: null}
      <Text style={styles.title}>SignUp</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('login')} >
        Already have an account? Login here
      </Text> 
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
    fontSize: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 60,
    color: '#831AA9',
  },
  logo: {
    width: 150,
    height: 150,
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
  link: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  button:{
    width: '30%',
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

export default SignupScreen;
