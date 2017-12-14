class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }
// make a function in app and pass it to video list then to video list entry, then it will be called at the lowest level. it will return the key

  onVideoListEntryClick(videoId) {
    console.log(videoId);
    // this.setState({
    //   currentVideo: window.exampleVideoData[videoId]//the properties object of the video we just clicked;
    // })
  }

  render() {

    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video = {this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos = {this.state.videos} clickFn = {this.onVideoListEntryClick.bind(this)} key = 0 /></div>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
