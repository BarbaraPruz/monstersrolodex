import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  async componentDidMount() {
    /*     fetch(
      'https://jsonplaceholder.typicode.com/users'
    ).then (response => response.json())
    .then (users => this.setState({monsters:users})) */
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    this.setState({ monsters: users })
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }
  
  render() {
    const { monsters, searchField } = this.state

    const filteredMonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters" 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
