// Detecting BUTTON click

var numberOfDrumBtns=document.getElementsByClassName("drum").length;
for(var j=0;j<numberOfDrumBtns;j++){
  document.querySelectorAll(".drum")[j].addEventListener("click",function(){
    var buttonInner=this.innerHTML;
    makeSound(buttonInner);
    buttonAnimation(buttonInner);
  });
}

//ekoo biirdey
// var array=document.getElementsByClassName("drum");
// for (var i = 0; i < array.length; i++) {
//   var ar=array[i];
//   ar.addEventListener("click",function(){
//
//   var buttonInnerHTML=this.innerHTML;
//   makeSound(buttonInnerHTML);
// });
//
// }

//Detecting Keyboard Press


document.addEventListener("keypress",function(event){

  makeSound(event.key);
  buttonAnimation(event.key);

});
    //get right char by using event

function makeSound(key) {


    switch (key) {
      case "w":
        var audio1=new Audio("sounds/crash.mp3");
        audio1.play();
        break;
      case "a":
         var audio2=new Audio("sounds/kick-bass.mp3");
         audio2.play();
               break;
      case "s":
        var audio3=new Audio("sounds/snare.mp3");
               audio3.play();
               break;
           case "d":
             var audio4=new Audio("sounds/tom-1.mp3");
              audio4.play();
               break;
           case "j":
               var audio5=new Audio("sounds/tom-2.mp3");
                audio5.play();
                 break;
           case "k":
             var audio6= new Audio("sounds/tom-3.mp3");
              audio6.play();
               break;
           case "l":
             var audio7=new Audio("sounds/tom-4.mp3");
             audio7.play()
           break;

    }

};


function buttonAnimation(currentKey) {
  var activeButton=document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},500)


}
