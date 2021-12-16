// import props from './TodoMap'
import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, TouchableOpacity, CheckBox } from 'react-native';
import Styles from "./Style";
const TodoComp = ({name, checking}) => {
    const [checked, setChecked] = useState(false);
    const handleCheck = (id) => {
        setChecked(!checked)
        checking(id , !checked)
    }
    return (
        <View>
            <View style={Styles.Todolist}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <TouchableOpacity onPress={()=>handleCheck(name.id)} style={checked ? Styles.buttoniconActive : Styles.buttonicon}><Text style={{ color: checked ? "blue" : "white" }}></Text></TouchableOpacity>
                    <Text style={Styles.TodoText}>{name.title}</Text>
                </View>
                <TouchableOpacity style={name.checked ? Styles.IsActivebtn : Styles.IsnotActivebtn}><Text style={Styles.IsActivebtnText}></Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default TodoComp;