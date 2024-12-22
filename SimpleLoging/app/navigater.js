import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button,StyleSheet,View} from 'react-native';
import LoginScreen from "./screen/login";
import SignUpScreen from "./screen/signup";
import homeScreen from "./screen/home";
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="login" >
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ title: "" }} />
      <Stack.Screen
        name="signup"
        component={SignUpScreen} />
    <Stack.Screen
        name="home"
        component={homeScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerRight: () => (
            <View style={styles.logout} >
            <Button 
              onPress={() => navigation.reset({index: 0,routes: [{ name: "login" }], })}
              title="Logout"
              color="#f00"  /></View> ),
        })} />
    </Stack.Navigator>
  );};
const styles = StyleSheet.create({
    logout:{
        marginRight:20     
    }})
export default AppNavigator;

