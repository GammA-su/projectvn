var canvas;
var background0, background0gif, background_menu, background_text, background_1, background_2;
var playbtn, loadbtn, settobtn;
var background_song;
var gomenu;
var sHover = false, lHover = false, stHover = false;
var state = 0, active = "nothing";
var hover_sfx;
var loadkey = 0;
var current_num = 0;
var current_text, current_character, current_background;
var anim = false;
var xtint = 0;
var xtint2 = 0;
var textx = 429, texty = 891, characterx = 410, charactery = 824, mainmenuX = 524, mainmenuY = 1065, settoX = 676, saveX=805, loadX = 887 ;



function preload(){
    soundFormats('mp3', 'ogg');
    background_song = loadSound("song/01_startup.ogg");
    hover_sfx = loadSound("song/sfx.ogg");
    background0gif = loadGif("img/background_0_1frame.gif");
    background_text = loadImage ("img/background_text.png")
    background0 = loadImage('img/background_0.png');
    background_menu = loadImage("img/background_menu.png");
    background_1 = loadImage('img/chapter1/background_1.jpg');
    background_2 = loadImage('img/chapter1/background_2.jpg');
    playbtn = loadImage("img/playbtn.png");
    loadbtn = loadImage("img/loadbtn.png");
    settobtn = loadImage("img/settobtn.png");
    ultrafastbackward_btn = loadImage("img/ultrafastback.png");
    fastbackward_btn = loadImage("img/fastback.png");
    automode_btn = loadImage("img/automode.png");
    fastforward_btn = loadImage("img/fastforward.png");
    ultrafastforward_btn = loadImage("img/ultrafastforward.png");
}


function setup(){
    let canvas = createCanvas(1920, 1080);
    canvas.position(0,0)
    frameRate(30);
    background(255);
    textFont("rosewood-std");
    /* textFont("Roboto");*/
}

function draw(){
    
    function menu(){
        if (state == 0){
         console.log('using memory')
        // background0gif.position(0, 0);
         if (background_song.isPlaying() == true){
            console.log('already playing')
         }
        else{
            background_song.setVolume(0.3);
            background_song.loop();
            console.log("song will play");
            }
         hover_sfx.setVolume(0.8);
         background(background0)
         //image(background0gif,0,0)
         image(background_menu,550,0)
         strokeWeight(0)
         if (sHover){fill("#4281A4"); hover_sfx.play();}else{fill("#DB495D");}
         textFont("rosewood-std");
         textSize(80);
         text("START",687,110);
         image(playbtn,647,71.19)
         if (lHover){fill("#4281A4");hover_sfx.play()}else{fill("#DB495D");}
         text("LOAD",1062.5,110);
         image(loadbtn,1019,71.19)
         if (stHover){fill("#4281A4");hover_sfx.play()}else{fill("#DB495D");}
         text("SETTINGS",1397,110);
         image(settobtn,1353,71.19)
         stroke("#DB495D")
         strokeWeight(27)
         rect(648.5,8,1084,2)
         active = "menu"
         
         
         
     }
     else{console.log("not using memory")}
    }

    function _main_(){
        reset();
        image(background_text,0,772)
        if (loadkey == 0){
            active = "intro";
        }
        else {
            active = "keystored";
        }

        
        
    }
    /*class Textbuilder {
       
        constructor(state,number){
            this.state = state;
            this.number = number;
        }

        genrate() {
            console.log(this.state, this.number);
            return this.state[this.number];
        }
    }*/

    function gen(num,cha){
            if (active == "intro" || active == "waiting+anim"){
                var intro = ["Il existe en ce monde...", "...une chose que personne n'a jamais vue.", "FRANGE DE CÔTÉ ELLE AIMERA", "C'est un mensonge.","Ça ne sert à rien..."]
                var character = ['Ryuuji', 'Ryuuji', '---','Ryuuji','Ryuuji']
                console.log(intro[num])
                current_character = character[cha]
                current_text = intro[num];
                
            }
        }

    function _intro_(){
        if (current_num == 2 && anim == false){
            active = "waiting+anim"
        }
        else {
            gen(current_num,current_num);
            console.log(current_text);
            if (active == "endforceanim"){image(background_text,0,772)};
            fill("#FFD9D9");
            textFont("Roboto Slab");
            textSize(30);
            text(current_character,characterx,charactery)
            text(current_text,textx,texty)
            fill('#FCB7B7')
            textSize(20);
            textFont("Luminance")
            text("MAIN MENU",mainmenuX,mainmenuY)
            text("SETTINGS", settoX,mainmenuY)
            text("SAVE",saveX,mainmenuY)
            text("LOAD",loadX,mainmenuY)
            stroke("#DB495D")
            line(384.5, 1033.5, 1540.5, 1033.5)
            active = "waiting"
        }
        
        
    }
    function animbackgroun(){
        if (xtint*8 > 255){
            if (xtint*16 > 500){
                if(xtint*16 > 255 && xtint2*32 > 220){
                    anim = true;
                    active = "waiting"
                    noTint();
                    reset();
                    image(background_text,0,772)
                    _intro_();
                    /*insert code of _intro_ here if not working*/

                   // image(background_text,0,772)
                }
                else {
                    tint(255,xtint2*16);
                    image(background_text,0,772)
                    console.log(current_num)
                    gen(current_num,current_num);
                    console.log(current_text);
                    fill("#FFD9D9");
                    textFont("Roboto Slab");
                    textSize(30);
                    text(current_character,characterx,charactery);
                    text(current_text,textx,texty);
                    xtint2 = xtint2 + 1;
                    active = "waiting+anim"
                    console.log(xtint2)
                }
                
                
            }
            
        }
        else {
            tint(255,xtint*16);
            background(background_2);
            xtint = xtint + 1;
            console.log(xtint);
            active = "waiting+anim";
        }
    }
     
    function reset(){
        if (anim){
            console.log("he is here")
            clear();
            background(background_2);
            active = "waiting";

        }
        else {
            console.log("it doesnt have to be here")
            clear();
            background(background_1);
        }
        strokeWeight(1);
        fill(0);
        stroke(0)
    }
    //background0gif.position(0, 0);
    if (active == "menu"){
        if (mouseX > 687 && mouseX < 920 && mouseY > 60 && mouseY < 120){
            sHover = true;
            menu();
            state = 1;
            console.log("start area")
            
        }
        else if (sHover){
                console.log("outside area")
                state = 0;
                sHover = false;
                menu();
            }
        if (mouseX > 1065 && mouseX < 1260 && mouseY > 60 && mouseY < 120){
            lHover = true;
            menu();
            state = 1;
            console.log ("log area");
        }
        else if (lHover){
                console.log("outside log area")
                state = 0;
                lHover = false;
                menu();
            }
        if (mouseX > 1400 && mouseX < 1745 && mouseY > 60 && mouseY < 120){
            stHover = true;
            menu();
            state = 1;
            console.log ("log area");
        }
        else if (stHover){
                console.log("outside setto area")
                state = 0;
                stHover = false;
                menu();
            }
        else {console.log("not using memory, sleep mode")}

        }
    function sleep(){
        console.log("not using memory, sleep mode")
    }

    if (active == "nothing"){
        menu();
    }
    if (active == "startw8" || active == "waiting+endanim"){
        _main_();
    }
    if (active == "intro"){
        _intro_();
    }
    if(active == "sleep") {
        sleep();
    }
    if(active  == "waiting+anim"){
        animbackgroun();
    }
    if (active == "endforceanim"){
        noTint();
        anim = true;
        _intro_();
    }

  
}


function mouseClicked(){
    if (sHover){
        sHover = false;
        console.log("Clicked Start");
        active = "startw8";
    }
    if (active == "waiting"){
        console.log("Click")
        current_num = current_num + 1;
        active = "startw8";
    }
    if (active == "waiting+anim"){
        active = "endforceanim"
    }
    
}
