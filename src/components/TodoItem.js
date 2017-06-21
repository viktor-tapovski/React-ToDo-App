import React, {Component} from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import '../assets/Buttons.css';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      checked: '',
      editing: false,
      value: ''
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.editItem = this.editItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  editItem(event) {
    event.preventDefault();
    this.setState({
      editing: this.state.editing
        ? false
        : true
    });
  }

  saveItem(event, index) {
    event.preventDefault();
    var editVal = this.refs.editForm.value;
    console.log(editVal);
    // this.props.todos(editVal);
    this.setState({value: editVal, editing: false});
  }

  updateItem(event, value) {
    event.preventDefault();
    this.setState({value: event.target.value});
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

  renderEditForm() {
    const itemState = classNames({
      'todo-item': true,
      'complete-item': this.state.checked,
      'active-item': !this.state.checked,
      'editing-item': this.state.editing
    });
    return (
      <li className={itemState} ref="listItem">
        <form onSubmit={this.saveItem}>
            <input className="edit-form" type="text" ref="editForm" placeholder={this.props.content} autoFocus/>
        </form>
        <div className="item-options">
          <a className="trigger-controls">•••
            <ul className="item-controls">
              <li className="editButton" onClick={this.saveItem}>
                <span className="lnr lnr-download"></span>
                &nbsp;Save
              </li>
              <li className="removeButton" onClick={this.cancel}>
                <span className="lnr lnr-cross"></span>
                &nbsp;Cancel
              </li>
            </ul>
          </a>
        </div>
      </li>
    )
  }

  renderNormalItem() {
    const itemState = classNames({
      'todo-item': true,
      'complete-item': this.state.checked,
      'active-item': !this.state.checked,
      'editing-item': this.state.editing
    });
    return (
        <li className={itemState} ref="listItem" onDoubleClick={this.editItem} value={this.props.editVal}>
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
    )
  }

  render() {
    if (this.state.editing) {
      return this.renderEditForm();
    } else {
      return this.renderNormalItem();
    }
  }
}
