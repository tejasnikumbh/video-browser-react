import React, {Component} from 'react';

class VideoListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  render() {
    const video = this.props.video;
    const thumbnailUrl = video.snippet.thumbnails.default.url;

    return (
      <li onClick={ () => this.props.onVideoSelect(video) } className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={ thumbnailUrl }/>
          </div>
          <div className="media-body">
            <h6 className="media-heading"> { video.snippet.title } </h6>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
