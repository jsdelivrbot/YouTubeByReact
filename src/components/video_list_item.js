import React from 'react'

const VideoListItem = ({video}) => {
// {video} is ES6 --> like pulling of the props (props) and store in const video = props.video
// console.log(video); we want to get snippet object look at it on console
// Using some bootstrap classes here
//we have a parent div vide-list media , and two children media left-body
  return(
    <li className="list-group-item">
    <div className="video-list media">

      <div className="media-left">
     <img className="media-object"/>
     </div>
     <div className="media-body">
     <div className= "media-heading">
     </div>
     </div>
    </div>
    </li>
  );
};
export default VideoListItem;
