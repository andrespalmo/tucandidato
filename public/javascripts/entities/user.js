ChooseCandidate.module('Entities', function(Entities, ContactManager,
Backbone, Marionette, $, _) {

  Entities.User = Backbone.Model.extend({
    
    defaults: {
      id: null,
      third_party_id: null,
      name: null,
      email: null,
      status: 0
    },

    isAuthorized: function() {
      return this.get('third_party_id');
    },

    logout: function() {
      window.activeSession.id = '';
      window.activeSession.clear();
    },

    login: function(opts) {
      var _session = this;

      this._onALWAYS = function() {
        //opts.after && opts.after();
      };

      this.onERROR = function(result) {
        console.log('this._onERROR with result ' + result);
      };

      this._onSUCCESS = function(result) {
        console.log('_onSUCCESS');
      };

      this._getUserData = function(callback) {
        FB.api('/me?fields=third_party_id,email,name', function(response) {
          if(!response || response.error) {
            callback(true, response.error);
          }else{
            callback(null, response);
          }
        });
      };

      this._saveSession = function(user, callback) {
        console.log('session called user: ' + user['name']);

        if (user['third_party_id']) {
          _session.set({
            id: user['id'],
            third_party_id: user['third_party_id'],
            name: user['name'],
            email: user['email'],
            status: '1'
          }, {
            silent: true
          });

          callback(null, 'Everything is wonderful');
        } else {
          callback(true, 'third_party_id check failed!');
          return false;
        }
      };

      FB.login(function(response) {
        
        if(response.authResponse) {
          async.waterfall([
            _session._getUserData,
            _session._saveSession
          ], function(err, result) {
            _session._onALWAYS(result);
          });
          console.log(response);
          console.log(_session);
          console.log('Fetching authResponse information')
        }

      }, {scope: 'email'});
    }

  });

  var user,
    initializeUser;

  initializeUser = function() {
    user = new Entities.User();
  }

  var API = {
    getUserEntities: function() {
      if(user === undefined) {
        initializeUser();
      }
      return user;
    }
  };

  ChooseCandidate.reqres.setHandler('user:entities', function() {
    return API.getUserEntities();
  });

});