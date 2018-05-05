import React, {Component} from 'react';

const VideoDetails = (props) => {
  if(!props.video) {
    return (
      <div> Loading ... </div>
    );
  }

  const video = props.video;
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-list col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div className="title">{ video.snippet.title }</div>
        <div className="description">{ video.snippet.description }</div>
      </div>
    </div>
  );
}
// class VideoDetails extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {};
//
//   }


//   render() {
//     if(!this.props.video) {
//       return (
//         <div> Loading... </div>
//       );
//     }
//     const videoId = this.props.video.id.videoId;
//     const url = `https://www.youtube.com/embed/${videoId}`;
//
//     return(
//       <div className="video-details col-md-8">
//         <div className="embed-responsive embed-responsive-16by9">
//           <iframe className="embed-responsive-item" src={url}></iframe>
//         </div>
//         <div className="details">
//           <div className="title">{ this.props.video.snippet.title }</div>
//           <div className="description">{ this.props.video.snippet.description }</div>
//         </div>
//       </div>
//     );
//   }
// }

export default VideoDetails;
