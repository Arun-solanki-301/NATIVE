import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native"
import Styles from "./Style";


const InputTodo = () => {
    return (
        <View style={Styles.InputCompMain}>
            <View>
                <Text style={Styles.InputTextHead}>Todo</Text>
                <TextInput
                    style={Styles.Input}
                    placeholder="useless placeholder"
                />
                <View style={Styles.InputTodoBtnDiv}>
                <View><TouchableOpacity style={Styles.InputTodoBtn}><Text style={Styles.InputTodoBtnText}>Cancle</Text></TouchableOpacity></View>
                <View><TouchableOpacity style={Styles.InputTodoBtn}><Text style={Styles.InputTodoBtnText}>Done</Text></TouchableOpacity></View>
                </View>
            </View>
        </View>
    )
}
export default InputTodo;