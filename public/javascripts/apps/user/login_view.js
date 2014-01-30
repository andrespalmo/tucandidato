ChooseCandidate.module('User.Login', function(User, ChooseCandidate, Backbone, Marionette, $, _) {

  User.GetData = Backbone.Marionette.ItemView.extend({
    template: 'user/login',

    events: {
      'click .fb-register': 'login'
    },

    login: function() {
      ChooseCandidate.User.Login.Controller.getData().login();
    }

  });

});