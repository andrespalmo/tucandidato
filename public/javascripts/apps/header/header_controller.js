ChooseCandidate.module('Header', function(Header, ChooseCandidate, Backbone, Marionette, $, _) {

  Header.Controller = {
    showHeader: function() {
      var headerView = new Header.ShowHeader();
      ChooseCandidate.headerRegion.show(headerView);
    }
  };

});
