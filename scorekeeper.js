var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetScore = document.querySelector("#reset");
var inputValue = document.querySelector("input");
var numDisplay = document.querySelector("p span");
var p1Count = 0;
var p2Count = 0;
var gameOver = false;
var winningScore = 5;

p1.addEventListener("click",function(){
 
 	if(!gameOver)
  	{ p1Count++; 
   if( p1Count === winningScore )
   {
   		p1Display.classList.add("winner");
   		gameOver=true;
   }
   p1Display.textContent = p1Count;
}


});

p2.addEventListener("click",function(){

  if(!gameOver)
  {p2Count++;
   if(p2Count === winningScore)
   {
   		p2Display.classList.add("winner");
   	    gameOver = true;
   }
   p2Display.textContent = p2Count;

}

});

resetScore.addEventListener("click",function(){

	reset();
});
function reset()
{
	p1Count = 0;
	p2Count = 0;
    p1Display.textContent = p1Count;
    p2Display.textContent = p2Count;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

inputValue.addEventListener("change",function() {

	numDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();

 });