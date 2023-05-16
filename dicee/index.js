var randomNumber=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber+".png";
var randomImageSource="images/"+randomImage;
var d=document.querySelector(".img1").setAttribute("src",randomImageSource);
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomImage1;
var e=document.querySelector(".img2").setAttribute("src",randomImageSource1);
if(randomNumber<randomNumber1)
{
    document.querySelector("h1").innerHTML="player2 wins";
}
else if(randomNumber>randomNumber1)
{
    document.querySelector("h1").innerHTML="player1 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}