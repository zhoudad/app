import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    FlatList
} from 'react-native'
import Todo from './Todo'

export default class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(//创建数组
            PropTypes.shape({//创建对象
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        toggleTodo: PropTypes.func.isRequired
    };

    _renderItem = (data) => {
       let dataItem = data.item;
       let { id } = dataItem;
       let { toggleTodo } = this.props;
        return (
            <Todo
                {...dataItem}
                onClick={() => toggleTodo(id)}
            />
        )
    };

    render() {
        let { todos } = this.props;
        return (
            <FlatList
                data={todos}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={this._renderItem}
            />
        )
    }
}