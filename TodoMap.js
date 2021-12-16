import React, { useState } from "react";
import TodoComp from "./TodoComp";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Styles from "./Style";
import Header from "./Header";


const TodoMap = ({ showForm, handleShowForm }) => {
    const arr = [
        { title: "Start making a presentation", checked: false, id: 1 },
        { title: "Pay for rent", checked: false, id: 2 },
        { title: "Buy a milk", checked: false, id: 3 },
        { title: "Don’t forget to pick up Mickael from school", checked: false, id: 4 },
        { title: "Buy a chocolate for Charlotte", checked: false, id: 5 }
    ];
    // handle id count by idcount state 
    const [idCount, setidCount] = useState(arr[arr.length - 1].id + 1)
    const [text, settext] = useState("");
    const [newTodo, setnewTodo] = useState(arr);
    const [delBtn , setDelBtn] = useState("")
    // const [ids , setIds] = useState()

    const obj = {
        title: text, checked: false, id: idCount
    }


    const newTodoItem = () => {
        setidCount(idCount + 1)
        let newArr = Object.assign([], newTodo);
        if (obj.title) {
            newArr.push(obj)
        }
        // createchecks(newArr);
        settext("")
        handleShowForm();
        return setnewTodo(newArr)

    }
    // id and checked from parent 
    const checking = (id, checks) => {

        setDelBtn(delBtn + id);
        let newArr = Object.assign([], newTodo);
        newArr.map((curr) => {
            if (curr.id === id) {
                curr.checked = checks;
            }
        })
        const issFasle = newArr.every(curr =>{
            return curr.checked === false;
        })
        if(issFasle){
            setDelBtn("")
        }

        
        return setnewTodo(newArr)
    }


    const handleText = (e) => {

        if (e == "") {
            (Alert("Todo cannot be blank"))
        }
        else settext(e)
    }

    const deleteSelected = ()=>{
        const newArr = [];
        newTodo.forEach((curr , index)=>{
            if(curr.checked){
                newArr.push(index)
            }
        })
        return newArr
    }




    return (
        <View style={{minHeight:800}}>
            <View>
            <Header showForm={showForm} handleShowForm={handleShowForm} deleteSelected = {deleteSelected} setnewTodo = {setnewTodo} todo = {newTodo} delBtn={delBtn} setDelBtn={setDelBtn}/>
                {
                    newTodo.map((curr) => {
                        return (
                            <TodoComp name={curr} key={curr.id} checking={checking} />
                        )
                    })}
            </View>
            {showForm ? <View style={Styles.InputCompMain}>
                <View>
                    <Text style={Styles.InputTextHead}>Todo</Text>
                    <TextInput
                        style={Styles.Input}
                        placeholder="useless placeholder"
                        value={text}
                        onChangeText={(e) => handleText(e)}
                    />
                    <View style={Styles.InputTodoBtnDiv}>
                        <View><TouchableOpacity onPress={handleShowForm} style={Styles.InputTodoBtn}><Text style={Styles.InputTodoBtnText}>Cancle</Text></TouchableOpacity></View>
                        <View><TouchableOpacity style={Styles.InputTodoBtn} onPress={() => newTodoItem()}><Text style={Styles.InputTodoBtnText}>Done</Text></TouchableOpacity></View>
                    </View>

                </View>
            </View> : <View />}

        </View>
    )
}

export default TodoMap;