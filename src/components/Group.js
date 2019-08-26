import React, { Component } from 'react'
import {
    View
} from 'react-native'
import AddTodo from '../containers/AddTodo'
import Filters from './Filters'
import VisibleTodoList from '../containers/VisibleTodoList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers'

class Group extends Component {
    render() {
        return (
            <View style={{paddingHorizontal: 20, paddingVertical: 44}}>
                <AddTodo/>
                <Filters/>
                <VisibleTodoList/>
            </View>
        );
    }
}
export default class GroupCom extends Component {
    render() {
        const store = createStore(reducers);
        return (
            <Provider store={store}>
                <Group />
            </Provider>
        );
    }
}
