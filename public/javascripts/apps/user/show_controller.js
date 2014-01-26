ChooseCandidate.module('User.Show', function(User, ChooseCandidate, Backbone, Marionette, $, _) {

  User.Controller = {
    showData: function() {
      var model = ChooseCandidate.User.Login.Controller.getData();

      var userView = new User.ShowUser({
        model: model
      });

      ChooseCandidate.userRegion.show(userView);
    }
  }
});