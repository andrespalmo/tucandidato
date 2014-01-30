ChooseCandidate.module('Header', function(Header, ChooseCandidate, Backbone, Marionette, $, _) {
  
  Header.ShowHeader = Backbone.Marionette.Layout.extend({
    template: 'header',
    tagName: 'section',

    regions: {
      logoRegion: '.logo'
    }
  });

});
