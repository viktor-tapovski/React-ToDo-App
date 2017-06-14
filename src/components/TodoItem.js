import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../assets/Buttons.css';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: '',
      editing: false
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.editItem = this.editItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  editItem(event) {
    event.preventDefault();
    this.setState({editing: true});
    console.log("We're editing this item.");
  }

  removeItem(event, todos, index) {
    event.preventDefault();
    var elem = todos.target;
    this.refs.listItem.remove();
  }

  handleCheckboxChange(event) {
    this.setState({checked: event.target.checked});
    // console.log(this.state.checked  ? 'Active'  : 'Complete');
  }

  render() {
    return (
      <li className={this.state.checked
        ? 'todo-item complete-task'
        : 'todo-item active-task'} ref="listItem">
        <input type="checkbox" ref="trigger" className="checkbox" onChange={this.handleCheckboxChange}/> {this.props.content}
        <div className="item-options">
          <a className="trigger-controls">•••
            <ul className="item-controls">
              <li className="editButton" onClick={this.editItem}>
                <span className="lnr lnr-pencil"></span>
                &nbsp;Edit
              </li>
              <li className="removeButton" onClick={this.removeItem}>
                <span className="lnr lnr-trash"></span>
                &nbsp;Remove
              </li>
            </ul>
          </a>
        </div>
      </li>
    );
  }
}
