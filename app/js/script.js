var vid = document.getElementById('container');
var reset = document.getElementById('reset');
var overlay = document.getElementById('overlay');
var animations = ["Comp 1","Comp 2","Comp 3","Comp 4"];
var time = [5000,4000,4000,6000]
var path = "animations/";
var artyom = new Artyom();
artyom.addCommands([
    {
        indexes: ["impendimenta","impendiment","impediment"],
        action: function(i){
            castSpell(2);
        }
    },
    {
        indexes: ["gravitas","gravita"],
        action: function(i){
            castSpell(3);
        }
    },
    {
        indexes: ["exodus","exod"],
        action: function(i){
            castSpell(1);
        }
    },
    {
        indexes: ["tilemetafora","metafora"],
        action: function(i){
            castSpell(0);
        }
    }
]);

reset.onclick=(function(){
  location.reload();
});

function castSpell(i){
vid.src=path+animations[i]+".mp4";
vid.load();
vid.play();
setTimeout(function(){
vid.pause();
overlay.style.top="0";
artyom.shutUp();
},time[i]);
}

function StartListening() {

artyom.initialize({
    lang:"en-US",
    debug:true, 
    continuous: false,
    listen:true
});

}


window.onload = (function(){
StartListening();
});
