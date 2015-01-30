(function() {
  'use strict';


  $(document).ready(function() {

      var baseURL = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";
      

      $.ajax({
        url: baseURL,
        type: "GET"
      }).done(function(data) {
        console.log(data);

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
      console.log(data);

    });

      $.getJSON(baseURL).done(function(items) {
        renderTemplate('message-reply-template', 'messageboard-container', result);
      })


    });
  })();
