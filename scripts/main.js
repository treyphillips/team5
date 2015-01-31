(function() {
'use strict';

var baseURL = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
var username = "";
var messageContent = "";
var currentTime = "";
var messageboardTemplate = "";
var $messageLog= $('.message-reply');
var $messageboardTemplate = _.template($('[data-template-name=message-post]').text());

$(document).ready(function() {

currentTime = Date.now();


  var $messageboardContainer = $('.messageboard-container');


//////////Stores the username//////////


  $('#logButton').on('click', function(){
     event.preventDefault();
     if($(".username-value").val() === '') {
       alert("Enter an username");
     } else {
       username = $(".username-value").val();
       console.log(username);
       $('.username-stored').text(username);
       $('.message-reply').removeClass('hidden');
       $('.message-reply').scrollTop($('.messageboard-container')[0].scrollHeight);
       $('.messageboard-container').removeClass('hidden');
       $('input-container username').addClass('hidden');
     }

   });


//////////Displays stuff from server//////////


  // var messageboardTemplate = _.template($('[data-template-name=message-post]').text());
  $.ajax(baseURL).done(function(posts) {
    _.each(posts, function(post) {
      _.defaults(post, {
        message: "",
        username: "",
        createdAt: ""
      });
      $messageboardContainer.append($messageboardTemplate(post));
    });
  });

  $('.submit').click(function() {
    username = ("#submit").value();
    console.log('username');
  });
});

//this is the end of the document.ready


function getInfo() {
  $.ajax(baseURL).done(infoFilter);

}

function infoFilter(infoData) {
  var filteredData = _.filter(infoData, function(data) {
    return data.createdAt >= currentTime;
  });
  // console.log(filteredData);
  currentTime = Date.now();
  _.each(filteredData, function(info) {
    $messageLog.append($messageboardTemplate(info));
    $('.message-reply').scrollTop($('.messageboard-container')[0].scrollHeight);
  });
}
setInterval(getInfo, 3000);


//////////This hopefully gets user input and posts it//////////

setInterval(messageboardTemplate, 7000);

  $('#submit-chat').on('click', function(){
    event.preventDefault();
    if($("#input-field").val() === ''){
      alert("I SAID TO SAY SOMETHING");
    } else {
      messageContent = $("#input-field").val();
      console.log(messageContent);
      $.ajax({
        url: baseURL,
        type: "POST",
        data: {
          message: messageContent,
          username: username,
          createdAt: Date.now()
        }
      });
    }
    $('#input-field').val('');
  });
})();
// $.ajax({
//   url: baseURL,
//   type: "POST",
//   data: {
//     message: "#input-container".getElementById.click(),
//     username: "#username-value".click(),
//     createdAt: Date.now()
//   }
// }).done(function(data) {
// console.log(data);

// });
