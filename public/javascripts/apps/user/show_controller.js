ChooseCandidate.module('User.Show', function(User, ChooseCandidate, Backbone, Marionette, $, _) {

  User.Controller = {
    showData: function() {
      var model = ChooseCandidate.request('user:entities');
      console.log(model);
      var userView = new User.ShowUser({
        model: model
      });

      ChooseCandidate.mainRegion.show(userView);
    }
  };
  
});