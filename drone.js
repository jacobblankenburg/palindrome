"use strict";

function Palindrome() {
   var revWord = "";
   var userWord = document.getElementById("palin").value;
   var i = userWord.length;
   for(var userWord=i; userWord>=0; userWord--) {
      revWord = revWord + userWord.charAt(userWord);
   }
   if(userWord == revWord) {
      alert(userWord +" is Palindrome");
   } else {
      alert(userWord +" is not a Palindrome");
   }
}
