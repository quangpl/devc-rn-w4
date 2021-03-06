import React, { Component } from "react";
import { ScrollView,View, StyleSheet, Text, TextInput, Button } from "react-native";
import TodoItem from "../components/TodoItem";
import Data from "../constants/Data";
import { newExpression } from "@babel/types";
export default class AllScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data.data,
      text: ""
    };
  }
  onAddItem = () => {
    if (this.state.text) {
      const newData = {
        id: this.state.data.length + 1,
        name: this.state.text,
        status: "active"
      };
      this.setState({
        data: [newData, ...this.state.data]
      });
      this.setState({
        text: ""
      });
    }
  };
  onDeleteItem = id => {
    const newData = this.state.data.filter(todo => todo.id !== id);
    this.setState({
      data: [...newData]
    });
  };
  onPressComplete = id => {
    const newData = this.state.data.map(e => {
      if (e.id === id) {
        if (e.status === "active") {
          e.status = "complete";
        } else {
          e.status = "active";
        }
      }
      return e;
    });
    this.setState({
      data: [...newData]
    });
    const item = this.state.data.find(e => e.id === id);
    this.props.navigation.navigate("Detail", { data: item });
  };
  render() {
    return (
      <View style={styles.rootView}>
        <ScrollView>
          <TextInput
            style={styles.input}
            placeholder="  Input item"
            value={this.state.text}
            onChangeText={text =>
              this.setState({
                text
              })
            }
          />
          <Button title="Add" onPress={this.onAddItem} />
          {this.state.data.map(e => (
            <TodoItem
              onPressComplete={this.onPressComplete}
              name={e.name}
              status={e.status}
              id={e.id}
              key={e.id}
              onDeleteTodo={() => this.onDeleteItem(e.id)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

AllScreen.navigationOptions = {
  title: "All"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 25,
    width: "94%",
    marginLeft: 10,
    marginRight: 10,
    height: 45
  },
  rootView:{
    flex:1,
    paddingBottom:15
  }
});
