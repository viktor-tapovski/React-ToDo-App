import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js';

export default class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const createTodo = this.refs.createTodo;
    const content = createTodo.value;
    this.props.addTodo(content);
    this.refs.createTodo.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="add-todo input-group-field" type="text" placeholder="What's on the agenda today?" onChange={this.handleChange} ref="createTodo"/>
      </form>
    );
  }
}
