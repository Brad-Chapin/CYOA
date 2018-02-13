$( document ).ready(function() {
  showSub();
  let charName = $("#cname"), sub = $("#subtitle"), charID = $("#idLine");

  function showSub () {
    setTimeout(function(){
      sub.show();
    }, 1500);
  }

  $("#nbtn").on("click", function(){
    event.preventDefault();
    if (charName.val() == ""){
      $("#nmform").append("<p>You cannot enter the wilds without a name. Please tell us what to call you.</p>").append("<button id= 'ok'>Try again.</button");
    } else {
      charID.append("<span>You are " + charName.val() +"</span>");
      $("#nmform").addClass("hide");
      $("#raceform").removeClass("hide");
    }
  });

  $("#raceform").on("click", function(){
    event.preventDefault();
    console.log(event.target.innerHTML);    charID.append("<span>, the " + event.target.innerHTML + ". " + "</span>")
    $("#raceform").hide();
  });
});
