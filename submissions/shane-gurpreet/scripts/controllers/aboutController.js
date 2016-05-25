(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#articles').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
