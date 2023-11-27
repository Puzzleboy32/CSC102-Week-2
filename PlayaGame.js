function PlayaGame()
{
    var random1 = Math.ceil(Math.random() *6);
    var random2 = Math.ceil(Math.random() *6);
    
    document.getElementById("Player 1").innerHTML = "1st Player got " + random1;
    document.getElementById("Player 2").innerHTML = "2nd Player got " + random2;

    if (random1 > random2){
    document.getElementById("result").innerHTML = "Winner Winner Chicken dinner, player 1 wins!!";
    }
   else if (random1 < random2){
    document.getElementById("result").innerHTML = "Winner Winner Chicken dinner, player 2 wins!!";
    }
  else if (random1 = random2){
    document.getElementById("result").innerHTML = "You Both Win Congrats!";
    }
}
