(function() {
  'use strict';

  var baseURL = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
  var username = [];

  $(document).ready(function() {



      var baseURL = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
      // var userName = [];
      // userName.push($("#input-userName").submit().value());
      // console.log(userName);

      var $messageboardContainer = $('.messageboard-container');

      var messageboardTemplate = _.template($('[data-template-name=message-post]').text());
      $.ajax(baseURL).done(function(posts) {
        _.each(posts, function(post){
          _.defaults(post, {
            message: "No Message",
            username: "Anonymous",
            createdAt: ""
          });
          $messageboardContainer.append(messageboardTemplate(post));
        });
      });

      $('.submit').click(function() {
        username = (".username").value();
        console.log('username');
      });

      // $.ajax({
      //   url: baseURL,
      //   type: "GET"
      //
      // }).done(function(posts) {
      //   _.each(posts, function(post){
      //     _.defaults(post, {
      //       message: "",
      //       username: "",
      //       createdAt: ""
      //     });
      //     $messageboardContainer.append(messageboardTemplate(post));
      //   });
      //
      // });



      // $.getJSON(baseURL).done(function(items) {
      //   renderTemplate('message-reply-template', 'messageboard-container', result);
      // })


    });
    $.ajax({
      url: baseURL,
      type: "POST",
      data: {
        message: "lkjdlkjdljdl",
        username: "Gringo Joe",
        createdAt: Date.now()
      }
    }).done(function(data) {
      // console.log(data);

    });
  })();
