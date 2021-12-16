import React from "react";
import Styles from "./Style";
import { View, Text, Button, SafeAreaView, TouchableOpacity, CheckBox } from 'react-native';
import { Directions } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

const MyIcon = () => {return <Icon name="trash" size={30} color="#006CFF" style={{}}/>};

const Header = ({ handleShowForm, showForm , deleteSelected , setnewTodo ,todo , delBtn , setDelBtn}) => {
    let newArr = Object.assign([], todo);
    const getitems = deleteSelected();

    const getdeleted = ()=>{
        let newArr =todo.filter((curr)=>curr.checked===false)
        console.log(newArr)
        setnewTodo(newArr)
        setDelBtn("")
    }

    return ( 
        <View style={Styles.TodoContent}>
            <Text style={Styles.today}>Today</Text>
            <View style = {{display : "flex", flexDirection: "row"}}>
            {delBtn?<TouchableOpacity style={Styles.button} onPress={getdeleted}><Text style={Styles.buttontext, {marginLeft : 9, marginTop:9}}> <MyIcon /></Text></TouchableOpacity>:<View />}
                <TouchableOpacity onPress={handleShowForm} style={Styles.button}><Text style={Styles.buttonText}>{showForm ? " - " : " + "}</Text></TouchableOpacity>
            </View>
        </View>
    )}

export default Header;