import React, { useState } from 'react';
import {View ,Text,StyleSheet} from  'react-native';

const home = () => {

    return(
  <View style={styles.pagecontainer}>

<View  style={styles.container}>
<Text style={styles.text}>Name:- Dinuka Dulanjana</Text>
<Text style={styles.text}>Registration Number:- 2018/ICTS/47</Text>
</View>
  </View>
 );
};
const styles=StyleSheet.create({
    pagecontainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    container:{
    width:'50%',
    height:300,
    borderStyle:'solid',
    borderWidth:3,
    borderColor:'#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#BFE6F2',

    },
    text:{
        fontSize:25,
        fontWeight:'bold'
    }

})


export default home;