// var weaponList = ["AK-47", "Gun", "Machete", "knife"];
// var countries = ["korea", "Japan", "Greece", "Colombia"]

// var soldier = {
  // name: "cha",
  // weapon: weaponList[1],
  // country: countries[3],
  // isDead: false,
  // shoot: function(){
    // console.log("Pew Pew Pew");
  // },
  // sayHi: function(sargent){
    // console.log("Hello" + sargent + "My name is" + this.name)
  // }
// }

// function multiply(chicken, potato) {
  // return chicken * potato;
// }
// function division(lala, lolo) {
  // return lala / lolo;
// }
// var age = prompt("How old are u?");
//
// if (age < 18) {
//   console.log("Get out!");
// }
// else if(age > 18 && age < 45){
//   console.log("You are an adult.")
// }
// else {
//   console.log("Cheers!");
// }

$(document).ready(function(){
  var $heart = $(".heart"),
  $comment = $(".comment"),
  $overlay = $(".profileOverlay"),
  $cog = $(".fa-cog"),
  $closeIcon = $(".fa-times");
  $heart.click(function() {
    $(this).toggleClass("fa-heart-o");
    $(this).toggleClass("fa-heart heart-click");
  });
  $comment.click(function() {
  $(this).toggleClass("fa-comment-o");
  $(this).toggleClass("fa-comment");
});
$cog.click(function() {
  $overlay.fadeIn(500);
});

$times.click(function() {
  $overlay.fadeIn(500);
}
});
