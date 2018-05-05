import React, {Component} from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoListItems = props.videos.map((video) => {
    return <VideoListItem
              key={ video.etag }
              onVideoSelect={props.onVideoSelect}
              video={ video }/>;
  })

  return (
    <ul className="video-list col-md-4 list-group">
      {videoListItems}
    </ul>
  );
}

export default VideoList;
