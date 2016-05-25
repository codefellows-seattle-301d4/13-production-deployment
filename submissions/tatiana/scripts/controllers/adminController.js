(function(module) {
  Article.fetchAll(articleView.initAdminPage);
  var adminController = {
    index: function() {
      $('main > section').hide();
      $('#blog-stats').show();
    }
  };
  module.adminController = adminController;
})(window);
