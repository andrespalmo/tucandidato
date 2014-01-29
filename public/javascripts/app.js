var ChooseCandidate = new Backbone.Marionette.Application();

ChooseCandidate.addRegions({
  headerRegion: '.header',
  mainRegion: '.main-region',
  footerRegion: '.footer'
});

ChooseCandidate.addInitializer(function(options) {
  ChooseCandidate.User.Login.Controller.launchData();
  ChooseCandidate.User.Login.Controller.facebookInit();

  ChooseCandidate.Header.Controller.showHeader();
  ChooseCandidate.Footer.Controller.showFooter();
});

ChooseCandidate.on('initialize:after', function() {
  if(Backbone.history) {
    Backbone.history.start();
  }
});

$(function(){
    ChooseCandidate.start();
    console.log(ChooseCandidate);
});