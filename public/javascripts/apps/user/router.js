ChooseCandidate.module('User', function(User, ChooseCandidate, Backbone, Marionette, $, _) {
  
  User.Router = Marionette.AppRouter.extend({
    appRoutes: {

      'user': 'userDetails'
    }

  });

  var API = {
    userDetails: function() {
      ChooseCandidate.User.Show.Controller.showData();
      console.log('entra a la ruta');
    }
  };

  User.addInitializer(function() {
    new User.Router({
      controller: API
    });
  });

});
