(function(module) {
  var articlesController = {};

  Article.createTable();
  articlesController.index = function() {
    Article.fetchAll(articleView.initIndexPage);
  };

  module.articlesController = articlesController;
})(window);
