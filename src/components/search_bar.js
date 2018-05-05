import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  };

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder = "Search for a video..."
          value = { this.state.term }
          onChange = { (event) => this.onInputChange(event.target.value) }/>
      </div>
    );
  };
}

export default SearchBar;
