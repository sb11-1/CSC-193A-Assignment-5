//function for bigger button
function makeBigger(){
    //add alert to bigger button
    alert("Hello, world!");
    //increase font size of text in text box after clicking
    document.getElementById("text").style.fontSize = "24pt";
}

//onchange calls this function for FancyShmancy
function makeFancy(){
    //function pops up alert
    alert("Text is FancyShmancy! :)");
    //change text font weight to bold
    document.getElementById("text").style.fontWeight = "bold";
    //change text color to blue
    document.getElementById("text").style.color = "blue";
    //underline the text
    document.getElementById("text").style.textDecoration = "underline";
}

//onchange calls this function for BoringBetty
function makeBoring(){
    //function pops up alert
    alert("Text is BoringBetty. :(");
    //change the font size to the initial font size
    document.getElementById("text").style.fontSize = "initial";
    //remove the bold from the text by changing back to normal
    document.getElementById("text").style.fontWeight = "normal";
    //change text color to original black 
    document.getElementById("text").style.color = "black";
    //get rid of the underline, set decoration to none
    document.getElementById("text").style.textDecoration = "none";
}

//function for Moo button
function makeMoo(){
    //using the code from the assignment instructions
    var str = document.getElementById("text").value.toUpperCase();
    var parts = str.split(".");
    str = parts.join("-Moo.");
    //make the text uppercase by assigning value to str
    document.getElementById("text").value = str;
}