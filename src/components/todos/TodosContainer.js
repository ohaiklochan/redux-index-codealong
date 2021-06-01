import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            text: '',
        })
    }

    render() {
        return(
        <div></div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer); 