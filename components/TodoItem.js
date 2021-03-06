import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  onLongPress = todo => {
    const prompt = `"${todo.name}"`;
    Alert.alert(
      "Delete your todo?",
      prompt,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => this.props.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onLongPress={() =>
          this.onLongPress({
            id: this.props.id,
            name: this.props.name,
            status: this.props.status
          })
        }
        onPress={() => this.props.onPressComplete(this.props.id)}
      >
        <Text style={styles.text}>{this.props.name}</Text>
        {this.props.status === "active" ? (
          <Feather
            size={24}
            style={styles.icon}
            color="gray"
            name="circle"
          />
        ) : (
          <Feather
            size={24}
            style={styles.icon}
            color="green"
            name="check-circle"
          />
        )}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "94%",
    height: 55,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  text: {
    color: "black",
    fontSize: 15,
    paddingLeft: 20
  },
  icon: {
    paddingRight: 20
  }
});
