ChooseCandidate.module('User.Login', function(User, ChooseCandidate, Backbone, Marionette, $, _) {

  User.Controller = {

    launchData: function(callback) {
      var model = ChooseCandidate.request('user:entities');
      var loginView = new User.GetData({ model: model });
      ChooseCandidate.mainRegion.show(loginView);

      this.facebookInit();

      return loginView;
    },

    facebookInit: function() {
      $.getScript('//connect.facebook.net/en_UK/all.js', function(){
        FB.init({
          appId: '211625652373696'
        });
      });
    },

    getData: function() {
      return ChooseCandidate.request('user:entities');
    }

  }
});