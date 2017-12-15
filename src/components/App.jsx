class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData, // return an array of 5 video objects
      currentVideo: window.exampleVideoData[0],
      currentQuery: 'dog'
    };
  }
// make a function in app and pass it to video list then to video list entry, then it will be called at the lowest level. it will return the key
  componentDidMount() {
    window.searchYouTube({key: window.YOUTUBE_API_KEY, max: 5, query: this.state.currentQuery}, this.getVids.bind(this));
  }

  onVideoListEntryClick(videoId) {
    this.setState({
      currentVideo: this.state.videos[videoId]
    });
  }

  getVids(info) {
    this.setState({
      videos: info,
      currentVideo: info[0]
    });
  }

  getQueryFromSearch(query) {
    this.setState({
      currentQuery: query,
    });
    this.componentDidMount();
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search queryFn = {this.getQueryFromSearch.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video = {this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos = {this.state.videos} clickFn = {this.onVideoListEntryClick.bind(this)} /></div>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
