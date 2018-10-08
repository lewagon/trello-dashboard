Trello.authorize({
  type: 'redirect',
  name: 'Le Wagon Course - API & Programming',
  scope: {
    read: 'true',
    write: 'false'
  },
  expiration: '1hour',
  success: function() { console.log('Successful authentication'); },
  error: function() { console.log('Failed authentication'); }
});

// Reference: https://developers.trello.com/docs/clientjs

// TODO:
// (1) Get the trello.com/app-key and put it in the index.html (line 8)
// (2) Get the relevant board id thanks to '/members/me/boards' endpoint
// (3) Render the `Vue` application (`#board`, data: { lists }) with
//     the `/boards/:id/lists?cards=all` endpoint

// Solution: https://gist.github.com/ssaunier/5fbac44dc575194381195147cefdfba0
