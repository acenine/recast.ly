class Search extends React.Component {

  constructor(props) {
    super(props);
    this.debounceTimeout = null;
    this.state = {
      text: $('.form-control').val(),
    };

  }


  returnVal() {
    this.setState({
      text: $('.form-control').val()
    });
    this.props.queryFn(this.state.text);
  }

  // debounce() {
  //   this.returnVal.on('change keyPress', function(event) {
  //     clearTimeout(debounceTimeout);
  //     debounceTimeout = setTimeout(returnVal, 500);
  //   })
  // }



  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onKeyPress = {this.returnVal.bind(this)}/>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

