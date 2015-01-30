(function() {
  'use strict';

  var baseURL = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";

  $(document).ready(function() {




      // var userName = [];
      // userName.push($("#input-userName").submit().value());
      // console.log(userName);

      var $messageboardContainer = $('.messageboard-container');
      var messageboardTemplate = _.template($('[data-template-name=message-post]').text());
      $.ajax(baseURL).done(function(posts) {
        _.each(posts, function(post){
          _.defaults(post, {
            message: "",
            username: "",
            createdAt: ""
          });
          $messageboardContainer.append(messageboardTemplate(post));
        });
      });

      


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
