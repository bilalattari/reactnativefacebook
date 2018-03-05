import React, { Component } from 'react';
import { Alert , Text, TextInput, StyleSheet, View, Button } from 'react-native';
class Todo extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            todo: 0,
            todoList: []
        }
    }
    onUsernameHandler(text) {

        this.setState({
            todo: text
        })
    }
    _addTodo() {
        const TodoList = []
        TodoList.push(this.state.todo)
        this.setState({
            todoList: TodoList
        })
        this.state.todo = ''
    }

    render() {
        return (
            <View style={styles.view}>

                <Text style={styles.header}> Todo </Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 2 }}
                    onChangeText={(text) => this.onUsernameHandler({ text })}
                    placeholder='Todo' />
                {/* <Button
                    onPress={this._addTodo}
                    title="Press Me"
                /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    view: {
        // backgroundColor: 'green',    
    }
})
export default Todo