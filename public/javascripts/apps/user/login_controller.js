ChooseCandidate.module('User.Login', function(User, ChooseCandidate, Backbone, Marionette, $, _) {

  User.Controller = {

    launchData: function() {
      var loginView = new User.GetData({ model: this.getData() });
      ChooseCandidate.mainRegion.show(loginView);

      this.facebookInit();
      ChooseCandidate.User.Show.Controller.showData();
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