ChooseCandidate.module('User.Show', function(User, ChooseCandidate, Backbone, Marionette, $, _) {
  
  User.ShowUser = Backbone.Marionette.ItemView.extend({

    template: 'user',

    initialize: function() {
      console.log(this.model);
    }

  });

});