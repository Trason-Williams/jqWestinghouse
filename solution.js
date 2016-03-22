function greetUser(name){
$("#greeting").text("Hello,"+(name));
}
function switchImage(picElephant){
    $("#gallery-main").attr("src", picElephant);
    
}
function changeBackgroundColor(){
    $('body').css("background-color", randomColor);
}
   var Colors = ['00','34','70','50','ff','cc'];
var ran = function() {
    return Math.floor(Math.random()*9);
};
var randomColor = function() {
    var t = Colors[ran()];
    var r = Colors[ran()];
    var a = Colors[ran()];
    return "#"+ t + r + a;
}; 