import React from 'react'

class Search extends React.Component {

  render() {
    return (
      <form action="" onSubmit={ this._handleSubmit.bind(this) }>
        <input type="text" ref={ (input) => this._searchQuery = input }/>
        <button type="submit">Search</button>
      </form>
    )
  }
  _handleSubmit(e) {
    e.preventDefault();
    const { onUserSubmit } = this.props; // object destructuring
    const searchQuery = this._searchQuery.value;
    onUserSubmit(searchQuery);
    this._searchQuery.value = '';
  }
}

// PropTypes
// onUserSubmit

export default Search

