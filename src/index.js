import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const YOUTUBE_API_KEY = "AIzaSyBiUwwb55THk4qaoJ4KXm3qPafGpLzzb7g";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    // Required to use this inside the function
    // Since it might (and is) running the function in different context,
    // 'this' might have another value
    this.videoSearch = this.videoSearch.bind(this);
    this.videoSearch('coldplay');
  }

  videoSearch(term) {
    YTSearch({key: YOUTUBE_API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      }); // es6 syntax and javascript eval
    });
  }

  render() {
    const videoSearch = _.debounce((term) => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetails video={ this.state.selectedVideo }/>
        <VideoList
          onVideoSelect={ (selectedVideo) => this.setState({selectedVideo}) }
          videos={ this.state.videos }/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
