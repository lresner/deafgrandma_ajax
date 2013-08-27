$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  $('body').on('submit', '#target', function(event) {
    event.preventDefault();
    // alert('Handler for .submit() called.');
    // return false;
    var params = $(this).serialize();
    console.log(params);

    //$.post(url_to_post_to, params_to_send, callback_function)

    $.post('/grandma', params, function(response){
         //console.log(response);
        $('.container').replaceWith(response);

    });


  });
});
  

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()


  // CLIENT
  //1. CLICK/SUBMIT when user clicks button / submit

    // 2. Gather DAta to Send To Server
    // get form data ( grab attributes one by one ; OR serialize() )

    // 3. POST to sinatra app using AJAX

    // SERVER
    // 4. send something back 

  // 5. Handle the Response that Comes back from Server (Callback Function)


// });
