import React, {Component} from 'react';
import NewTodo from './components/NewTodo.js';
import TodoList from './components/TodoList.js';
import FilterState from './components/Header.js';
import NavTabs from './components/Header.js';
import './assets/App.css';

var todos = [
  {
    content: 'Wash the dishes',
    status: true
  }, {
    content: 'Go to the store',
    status: false
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    }
  }

  addTodo(content) {
    var pushContent = this.state.todos;
    pushContent.unshift({
      content,
      complete: false
    });
    this.setState({todos: this.state.todos })
  }

  render() {
    return (
      <div className="App">
        <FilterState/>
        <NewTodo addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.todos}
          items={this.state.items}
          removeItem={this.state.remove}
        />
        <triggerButton />
      </div>
    );
  }
}
