import React, { Component } from 'react';

import { CardList } from './component/card-list/card-list.comp';
import { SearchBox } from './component/search-box/search-box.comp'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchBox: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()
      .then(users => this.setState({ users: users })))
  }

  handleChange = e => {
    this.setState({ searchBox: e.target.value })
  }
  
  render() {
    const { users, searchBox } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchBox.toLowerCase())
      );
    return (
    <div className='App'>
    <SearchBox 
    placeholder='search users'
  handleChange={this.handleChange}
    />
    <CardList users={ filteredUsers } />
    </div>
    );
  }
}
export default App;
