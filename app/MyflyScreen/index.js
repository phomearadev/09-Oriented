import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';



function FlyScreen({ navigation }) {


    return(
    <View>
      <Text style={styles.text}>  
        HERE IT IS</Text>  
        <Text style={styles.textbox}>THE FLYSCREEN gizmo</Text>  
    </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'   
  },
  text: {
    fontsize: 40,
  },
  textbox: {
    height: 50,
    width: 210,
    paddingTop: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  }

});


export default FlyScreen;
