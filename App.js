import Styles from './Style'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity, CheckBox, ScrollView } from 'react-native';
import Header from './Header';
import TodoMap from './TodoMap';
import { useState } from 'react/cjs/react.development';
// import InputTodo from './InputTodo';

const App = () => {
  const [showForm, setShowForm] = React.useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm)
  }
  return (
    <ScrollView style={{ overflow: "scroll", height : 800}}>
      {/* <Header showForm={showForm} handleShowForm={handleShowForm} /> */}
      <TodoMap showForm={showForm} handleShowForm={handleShowForm} />
      {/* <InputTodo /> */}
    </ScrollView>
  )
}


export default App;