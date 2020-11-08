import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import profile from './assets/profile.jpg'

function App() {
  return (
    <View style={styles.container}>
  
      <Image source={profile} style={styles.image}/>

      <View style={styles.infoContainer}>
      <Text style={styles.label}>School</Text>
      <Text style={styles.info}>The Lawrenceville School</Text>

      <Text style={styles.label}>Email Address</Text>
      <Text style={styles.info}>danielrozar@gmail.com</Text>

      <Text style={styles.label2}>Name</Text>
      <Text style={styles.info2}>Daniel Rozar</Text>

      <Text style={styles.label2}>Nick Name</Text>
      <Text style={styles.info2}>r.daniel</Text>

      <Text style={styles.label2}>Emergency Contact</Text>
      <Text style={styles.info2}>+1-987654321</Text>
      </View>

      
      <TouchableOpacity  style={styles.button}>
      
      <Text style={styles.buttonText}>UPDATE PROFILE</Text>

    </TouchableOpacity>
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width:150,
    height:150,
    alignSelf:"center",
    marginTop:100,
    borderRadius:75
  },
infoContainer: {
  marginTop:20,
  flexDirection:"column",
  marginHorizontal:50
},
label:{
  fontSize:20,
  color:"lightgray",
  marginTop:15
},
info: {
  fontSize:25,
  marginTop:5
},
label2:{
  fontSize:20,
  color:"skyblue",
  marginTop:20
},
info2:{
  fontSize:25,
  borderBottomColor:"lightgray",
  borderBottomWidth:0.8
},
button:{
  backgroundColor:"#66B2FF",
  width: 300,
  height: 50,
  alignSelf:"center",
  marginTop:30,
  borderRadius:25
},
buttonText:{
  fontSize:20,
  alignSelf:"center",
  paddingTop:12,
  color:"white"
}

});

export default App;
