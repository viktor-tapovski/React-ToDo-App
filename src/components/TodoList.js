import React, {Component} from 'react';
import TodoItem from './TodoItem.js';
import NewTodo from './NewTodo.js';

export default class TodoList extends Component {
  constructor(props) {
    super();
    this.state = {
      value: '',
      checked: false
    };
  }

  triggerCheckboxes(event, elem) {
    event.preventDefault();
    this.refs.triggerCheckboxes.click();
    console.log(this.refs.complete);
    // this.chkbox.setState({checked: true});
  }

  render() {
    const listItems = this.props.todos.map((listItem, index) =>
      <TodoItem key={index} complete={listItem.complete} id={"list-item-" + index} content={listItem.content}/>
    )
    return (
      <div className="container">
        <div className="list-container">
          <ul className="list-items">
            {listItems}
          </ul>
        </div>
        <a href="" onClick={this.triggerCheckboxes.bind(this)}  ref="triggerCheckboxes" className="complete-all">
          <span className="lnr lnr-checkmark-circle"></span>
          Complete All
        </a>
      </div>
    );
  }
}
