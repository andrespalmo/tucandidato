ChooseCandidate.module('Footer', function(Footer, ChooseCandidate, Backbone, Marionette, $, _) {

  Footer.Controller = {
    showFooter: function() {
      var footerView = new Footer.ShowFooter();
      ChooseCandidate.footerRegion.show(footerView);
    }
  };

});
