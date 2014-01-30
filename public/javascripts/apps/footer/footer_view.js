ChooseCandidate.module('Footer', function(Footer, ChooseCandidate, Backbone, Marionette, $, _) {
  
  Footer.ShowFooter = Backbone.Marionette.ItemView.extend({
    template: 'footer/footer',
    tagName: 'section'
  });

});
