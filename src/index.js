import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAww91o7yl5aQjML1zNbga80EGMaO3qMzY';




class App extends Component {

constructor(props){
  super(props);
//ask about super and props and state
  this.state={videos: []};


  YTSearch({
    key: API_KEY,
    term: 'surfboards'
  }, (videos)=> {
    //function (videos) {}
     this.setState({videos: videos});
     // this.setState({videos});
  });

}

//  line 42 this videos variable is named by us and we can use other names, we are importing this to video_list file
// it really simple we just bringing line 18 here and assign it into the the new variable then we can use it on other files
// we are passing the state to child component here which is VideoList and the Parent component is APP



  render() {
    return (
      < div >
      <SearchBar / >
      <VideoList videos={this.state.videos} />
    </div>
    );
  }

}
ReactDOM.render( < App / > , document.querySelector('.container'));
