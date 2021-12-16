import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TodoContent: {
    marginTop: 52,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  button: {
    color: "blue",
    borderWidth: 1,
    borderColor: "#006CFF",
    width: 50,
    height: 50,
    borderRadius: 50,
    textAlign: "center",
    marginRight : 8

  },
  buttonText: {
    marginTop: -4,
    fontSize: 40,
    marginLeft: 4,
    color: "#006CFF"
  },

  buttonicon: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 99999,
    paddingHorizontal: 10,
  },
  buttoniconActive: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 99999,
    paddingHorizontal: 10,
    backgroundColor: "blue"
  },
  TodoText: {
    fontSize: 18,
    marginHorizontal: 12,
    width: "80%"
  },
  today: {
    fontSize: 36,
    paddingLeft :10
  },
  Todolist: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 20,
    paddingHorizontal: 10
  },
  TodoListItems: {
    display: "flex"
  },
  IsActivebtn: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 99999,
    paddingHorizontal: 10,
    backgroundColor: "green",

  },
  IsnotActivebtn :{
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 99999,
    paddingHorizontal: 10,
    backgroundColor: "red",
  },
  Input: {
    height: 150,
    borderWidth: 1,
    textAlign: "left",
    paddingLeft: 10,
    borderRadius: 10,
    // paddingTop: 10

  },
  InputTextHead: {
    fontSize: 35
  },
  InputCompMain: {
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    position: "absolute",
    top: 32,
    zIndex: 999999,
    width: "90%",
    backgroundColor: "white",
    marginTop :100
    // height: 800
    
    // position : "absolute",
    // top : "30%",
    // left : "40%",
    // width : "80%",
    // Transform : "translate(-50% , -50%)"
    // transform : "translate(-50% , -50%)
  },
  InputTodoBtnDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  InputTodoBtnText: {
    fontSize: 20,
    color: "blue"
  },
  InputTodoBtn: {
    color: "blue",
    fontSize: 20
  }
})


export default Styles;