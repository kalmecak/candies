(function(namespace) {

  var views = namespace.views;

  var Router = Backbone.Router.extend({
    
    routes: {
      '': 'main'
    },

    main: function() {
      new views.Main({
        el: $('#container')
      });
      new candies.views.Main( {
        el: $( '#sub-container' )
      });
    }
  });

  new Router();

})(root);