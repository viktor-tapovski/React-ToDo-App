import React, {Component} from 'react';
import '../assets/Buttons.css'; // Tell Webpack that Button.js uses these styles

export default class ControlButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItem: false
    }
    this.editItem = this.editItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  editItem(e) {
    this.setState({showItem: true});
    console.log("We're editing this item.");
  }

  removeItem(e) {
    console.log("Removing Item");
  }
  render() {
    return (
      <div className="item-options">
        <a href="" className="trigger-controls">•••
          <ul className="item-controls">
            <li className="editButton" onClick={this.editItem}>
              <span className="lnr lnr-pencil"></span> Edit
            </li>
            <li className="removeButton" onClick={this.removeItem}>
              <span className="lnr lnr-trash"></span> Remove
            </li>
          </ul>
        </a>
      </div>
    );
  }
}
