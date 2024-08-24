import { StyleSheet, Text, View, Modal, Image, TextInput, Button } from 'react-native'
import React,{useState} from 'react'

export default function CourseInput({visible,onAddCourse,onCancel}) {
    const [enteredCourseText, setEnteredCourseText] = useState('')
    const addCourseHandler = () =>{
        onAddCourse(enteredCourseText);
        setEnteredCourseText('')
    }
    // const courseInputHandler = (enteredText) =>{
    //     setEnteredCourseText(enteredText);
    // }   
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image  style={styles.images}
          
          source={require("../assets/images/logo.jpg")}
        />
        <TextInput  style={styles.textInput} placeholder="Yeni Kurs Ekle!" value={enteredCourseText} onChangeText={(text) => setEnteredCourseText(text)} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='İptal Et' color='red' onPress={onCancel}/>
          </View>
          <View style={styles.button}>
            <Button title='Ekle' color='green' onPress={addCourseHandler}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'gray',
        padding: 15,
    },
    images:{
        width:150,
        height:150,
        borderRadius: 20,
        margin: 20,
    },
    textInput:{
        borderWidth: 1,
        width:'100%',
        padding:15,
        borderRadius:10,
        backgroundColor: 'pink',
        borderColor: 'pink',
        
    },
    buttonContainer:{
        flexDirection:'row',
        marginTop:10
    },
    button:{
        width:'48%',
        margin:5
    }
})