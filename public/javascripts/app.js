var ChooseCandidate = new Backbone.Marionette.Application();

ChooseCandidate.addRegions({
  mainRegion: '.main-region',
  userRegion: '.user-region'
});

ChooseCandidate.addInitializer(function(options) {
  ChooseCandidate.User.Login.Controller.launchData();
});

$(function(){
    ChooseCandidate.start();
    console.log(ChooseCandidate);
});