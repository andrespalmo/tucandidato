$(document).ready(function() {

  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_UK/all.js', function(){
    FB.init({
    appId: '211625652373696',
    });
  });
  
  $('.fb-register').click(function(e){
    console.log(FB.getLoginStatus());
    FB.getLoginStatus(updateStatusCallback);
    e.preventDefault();
  });

});

function updateStatusCallback(response)
{
  if (response.status === 'connected') {
    
    $.post ( themeurl+"/ajax/ajax-fbregister.php" ,
    {
      token: response.authResponse.accessToken,
    },
    function(data,status){
      console.log(data);
      if(data=='1')
      {
        document.location.href = homeurl+'?loggedin=1';
      }
      else
        alert("error");
    });
    
  } else if (response.status === 'not_authorized') {
    // In this case, the person is logged into Facebook, but not into the app, so we call
    // FB.login() to prompt them to do so. 
    // In real-life usage, you wouldn't want to immediately prompt someone to login 
    // like this, for two reasons:
    // (1) JavaScript created popup windows are blocked by most browsers unless they 
    // result from direct interaction from people using the app (such as a mouse click)
    // (2) it is a bad experience to be continually prompted to login upon page load.
    FB.login(updateStatusCallback,{scope: 'email'});
  } else {
    // In this case, the person is not logged into Facebook, so we call the login() 
    // function to prompt them to do so. Note that at this stage there is no indication
    // of whether they are logged into the app. If they aren't then they'll see the Login
    // dialog right after they log in to Facebook. 
    // The same caveats as above apply to the FB.login() call here.
    FB.login();
  }
}