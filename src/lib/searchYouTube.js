var searchYouTube = (options, callback) => {
  // TODO

  return ($.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      'key': options.key,
      'part': 'snippet',
      'q': options.query,
      'maxResults': options.max,
      'videoEmbeddable': true,
      'type': 'video'
    },
    success: function(data) {
      console.log('You did it!');
      callback(data.items);
    },
    error: function() {
      console.log('fetch unsuccessful');
    }
  }));

};

window.searchYouTube = searchYouTube;
