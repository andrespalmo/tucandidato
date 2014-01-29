ChooseCandidate.module('Header', function(Header, ChooseCandidate, Backbone, Marionette, $, _) {
  
  Header.ShowHeader = Backbone.Marionette.ItemView.extend({
    template: 'header',
    tagName: 'section'
  });

});
