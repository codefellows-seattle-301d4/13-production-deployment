(function(module) {
  var repos = {};

  repos.all = [];

  // TODO: Refactor this ajax method into a get method to the proxy
  //  'end point' provided by server.js.
  repos.requestRepos = function(callback) {
    $.get('/github/users/codefellows-seattle-301d4/repos' +
    '?per_page=15' +
    '&sort=updated')
    .done(function(data) {
      repos.all = data;
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
