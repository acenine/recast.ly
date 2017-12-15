class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  returnVal() {
    this.props.queryFn($('.form-control').val());
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onInput = {this.returnVal.bind(this)}/>
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

