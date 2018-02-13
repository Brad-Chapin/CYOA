$( document ).ready(function() {
  let charName = $("#cname");
  $("#nbtn").on("click", function(){
    event.preventDefault();
    if (charName.val() == ""){
      $("form").append("<p>You cannot enter the wilds without a name. Please tell us what to call you.</p>").append("<button id= 'ok'>Try again.</button");
    } else {
      $("#char-name").val() = charName.val();
    }
  });
});
