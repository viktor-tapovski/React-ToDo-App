import React, {Component} from 'react';
import '../assets/Header.css';

export default class FilterState extends Component {

  render() {
    return (
      <div>
      <nav className="hover-underline-menu" data-menu-underline-from-center>
        <ul className="menu align-center">
          <li>
            <a className="underline-from-center active">All</a>
          </li>
          <li>
            <a className="underline-from-center">Active</a>
          </li>
          <li>
            <a className="underline-from-center">Complete</a>
          </li>
        </ul>
      </nav>
    </div>
    );
  }
}
