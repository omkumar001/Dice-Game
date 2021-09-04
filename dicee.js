function runn()
{

var ref1 = Math.random() * 7;

ref1 = Math.floor(ref1);

if (ref1 == 0) 
ref1 = 1;

var ref2 = Math.random() * 7;

ref2 = Math.floor(ref2);

if (ref2 == 0) 
ref2 = 1;


var att_to2="images/dice"+ref2+".png";

var att_to1="images/dice"+ref1+".png";


//console.log(ref);

document.querySelector("img.img1").setAttribute("src", att_to1);
document.querySelector("img.img2").setAttribute("src", att_to2);



if(ref1>ref2)
document.querySelector("h1").innerHTML = "Player 1 Wins!🚩 ";

else if(ref2>ref1)
document.querySelector("h1").innerHTML = "Player 2 Wins!🚩 ";

else
document.querySelector("h1").innerHTML = "Draw! ";

}
