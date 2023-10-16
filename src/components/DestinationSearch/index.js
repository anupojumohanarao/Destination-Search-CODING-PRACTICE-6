// Write your code here

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-bg-container">
        <div className="main-container">
          <h1 className="title">Destination Search</h1>
          <div className="input-container">
            <input
              className="input"
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="list-container">
            {searchResults.map(eachUser => (
              <DestinationItem
                key={eachUser.id}
                destinationSearchDetails={eachUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
