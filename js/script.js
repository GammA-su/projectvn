var canvas;
var background0, background0gif, background_menu, background_text, background_1, background_2, background_3, background_4;
var playbtn, loadbtn, settobtn;
var background_song;
var gomenu;
var hover = "none";
var state = 0, active = "nothing";
var hover_sfx;
var loadkey = 0;
var current_num = 0;
var current_text, current_character, current_background;
var anim = false, animtext = false;
var xtint = 0;
var xtint2 = 0;
var textx = 429, texty = 891, characterx = 410, charactery = 824, mainmenuX = 524, mainmenuY = 1065, settoX = 676, saveX=805, loadX = 887 ;
var xcount = 0, countx = 0, addcount = 0;
var xalpha;
var sttext = [], text2 = "",text3;
var mainfont;
let fs = false;
var progress = 0;
var video;
var ecoFps = 0;



function preload(){
    console.log("Loading all the assets, Please Wait...")
    //soundFormats('mp3', 'ogg');
    //background_song = loadSound("song/01_startup.ogg");
    //ost_1 = loadSound("song/")
    //hover_sfx = loadSound("song/sfx.ogg");
    background0gif = loadGif("/img/background_0_1frame.gif");
    background_text = loadImage ("/img/background_text.png")
    background0 = loadImage('/img/background_0.png');
    background_menu = loadImage("/img/background_menu.png");
    background_1 = loadImage('/img/chapter1/background_1.jpg');
    background_2 = loadImage('/img/chapter1/background_2.jpg');
    background_3 = loadImage('/img/chapter1/background_3.jpg');
    background_4 = loadImage('img/chapter1/background_4.jpg');
    playbtn = loadImage("/img/playbtn.png");
    loadbtn = loadImage("/img/loadbtn.png");
    settobtn = loadImage("/img/settobtn.png");
    ultrafastbackward_btn = loadImage("/img/ultrafastback.png");
    fastbackward_btn = loadImage("/img/fastback.png");
    automode_btn = loadImage("/img/automode.png");
    fastforward_btn = loadImage("/img/fastforward.png");
    ultrafastforward_btn = loadImage("/img/ultrafastforward.png");
    mainfont = loadFont("fonts/rosewoodstd.otf");
    op = createVideo("video/op.mp4");
}


function setup(){
    console.log("All assets initialized.")
    console.log("Setting up the canvas...")
    let canvas = createCanvas(1920, 1080);
    canvas.position(0,0)
    frameRate(30);
    background(255);
    textFont(mainfont);
    op.hide();
    console.log("Canvas initialized.")
    /* textFont("Roboto");*/
}

function draw(){
    
    function menu(){
        
        if (state == 0){
         console.log("Loading the menu...")
         console.log('Currently using memory.')
        // background0gif.position(0, 0);
         /*if (background_song.isPlaying() == true){
            console.log('already playing')
         }
        else{
            background_song.setVolume(0.3);
            background_song.loop();
            console.log("song will play");
            }*/
         //hover_sfx.setVolume(0.8);
         current_background = background0;
         background(current_background)
         //image(background0gif,0,0)
         image(background_menu,550,0)
         strokeWeight(0)
         if (hover=="start"){fill("#4281A4"); /*hover_sfx.play();*/}else{fill("#DB495D");}
         textFont(mainfont);
         textSize(80);
         text("START",687,110);
         image(playbtn,647,71.19);
         if (hover=="load"){fill("#4281A4");/*hover_sfx.play()*/}else{fill("#DB495D");}
         text("LOAD",1062.5,110);
         image(loadbtn,1019,71.19);
         if (hover=="setto"){fill("#4281A4");/*hover_sfx.play()*/}else{fill("#DB495D");}
         text("SETTINGS",1397,110);
         image(settobtn,1353,71.19);
         stroke("#DB495D");
         strokeWeight(27);
         rect(648.5,8,1084,2);
         if (fs == false){
            noStroke()
            fill(66, 129, 164, 210)
            rect(394, 291, 1085, 455)
            stroke("#DB495D")
            strokeCap(SQUARE)
            strokeWeight(27)
            line(394.5, 303.5, 1478.5, 303.5)
            strokeWeight(3)
            line(763.58, 553.5, 1116.5, 553.5)
            textFont('Roboto')
            textSize(55)
            textAlign(LEFT);
            fill("#FFF")
            noStroke();
            text('Press F to go full screen and continue', 490, 477)
            textSize(30)
            text('For Optimized Experience', 770, 650)
         }
         console.log("Menu initialized.");
         console.log("Currently in the Menu.");
         active = "waitingDetectionMenu";
         
         
         
     }
     else{console.log("not using memory")}
    }

    /*function _main_(){
        clear();
        reset();
        background(current_background);
        image(background_text,0,772)
        if (loadkey == 0){
            active = "intro";
        }
        else {
            active = "keystored";
        }

        
        
    }*/
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
                var intro = ["Il existe en ce monde..."/*0*/, "...une chose que personne n'a jamais vue."/*1*/,
                 "FRANGE DE CÔTÉ ELLE AIMERA"/*2*/, "C'est un mensonge."/*3*/,"Ça ne sert à rien... Bon sang..."/*4*/,
                  "Du moisi ? C'est une blague ou quoi "/*5*/,"J'ai enlevé tout le moisi récemment..."/*6*/,
                  "Cette chose est très bonne, très douce, Si on la voit une fois..."/*7*/,"...On voudra probablement la revoir."/*8*/,
                  "C'est pourquoi le monde veut la cacher, la rendre très difficile à obtenir."/*9*/,"Merde. Je ne peux pas l'enlever."/*10*/,
                   "Mais un jour, quelqu'un la trouvera."/*11*/,"Et ce quelqu'un sera celui qui était censé la trouver"/*12*/,
                    'Car cela a été créé ainsi.'/*13*/,""/*14*/,"Éco, éco, éco, écologie..."/*15*/,"Inko, tu dors encore ?"/*16*/,"Debout."/*17*/,
                    "Je t'ai eu !"/*18*/,"Tu es tellement méchant, Ryūji."/*19*/,"Je t'ai dit hier soir que l'école commence aujourd'hui."/*20*/,''
                
                
                
                
                
                ]                  //0         1       2      3        4        5       6         7    8     9      10      11    12    13   14    15       16        17
                var character = ['Ryuuji', 'Ryuuji', '---','Ryuuji','Ryuuji','Ryuuji',"Ryuuji","---","---",'---',"Ryuuji","---","---","---","  ","Ryuuji","Ryuuji","Ryuuji"
                                  // 18
                                ,"Yasuko"]
                var background = [background_1,background_1,background_2,background_2,background_2,background_3,background_3,background_3,background_3,background_3,background_3,background_3,background_3,background_3,background_4,background_4,background_4,background_4,background_4] 
                //var background = [background_1,background_2,background_3,background_4,background_5,background_6,background_7,background_8,background_9,background10,background11,background12,background13,background14,background15,background16,background17,background17,background18]
                current_character = character[cha]
                current_text = intro[num];
                current_background = background[num]
                
            }
        }gen()

    function _intro_(){
        if (state == 0){
                if (current_num == 2 && anim == false || current_num == 5 && anim == false || current_num == 15 && anim == false){
                active = "waiting+anim";
                gen(current_num,current_num);
                console.log("Animation requested...")
                console.log("Background in transition...")

            }
            else {
                
                if (current_num == 3 || current_num == 6  || current_num == 14){
                    anim = false;
                }
                clear();
                reset();
                //console.log(anim)
                if(active != 'animtext'){
                    if (loadkey == 0){
                        active = "intro";
                    }
                    else {
                        active = "keystored";
                    }
                }
                //strokeWeight(0);
                gen(current_num,current_num);
                background(current_background);
                image(background_text,0,772)
                //console.log(current_text);
                if (active == "endforceanim"){image(background_text,0,772)};
                fill("#FFD9D9");
                textFont("Roboto Slab");
                textSize(30);
                text(current_character,characterx,charactery)
                if (animtext == true){text(current_text,textx,texty)}
                fill('#FCB7B7')
                textSize(20);
                textFont("Luminance")
                if(hover == "mainmenu"){fill("#4281A4");}else{fill('#FCB7B7')};
                text("MAIN MENU",mainmenuX,mainmenuY)
                if(hover == "settings"){fill("#4281A4");}else{fill('#FCB7B7')};
                text("SETTINGS", settoX,mainmenuY)
                if(hover == "save"){fill("#4281A4");}else{fill('#FCB7B7')};
                text("SAVE",saveX,mainmenuY)
                if(hover == "load"){fill("#4281A4");}else{fill('#FCB7B7')};
                text("LOAD",loadX,mainmenuY)
                fill('#FCB7B7')
                image(ultrafastbackward_btn, 1059, 1047);
                image(fastbackward_btn,1111, 1047);
                image(automode_btn,1163,1047,20,22)
                image(fastforward_btn,1205,1047)
                image(ultrafastforward_btn,1257,1047)
                stroke("#DB495D")
                //strokeWeight(1);
                line(384.5, 1033.5, 1540.5, 1033.5)
                reset();
                if (active != "animtext"){
                    active = "waiting"
                }
                
            }
        }
        else {
            console.log("not using memory, intro sleep mode")
        }
        
        
        
    }

    function animtext(){
        if (text2.length >= current_text.length){
            console.log('Text Animation finished')
            active = "waiting"
            animtext = true;
            addcount = 0;
            text2=""
            _intro_();
            
        }
        else {
            _intro_();
            xalpha = color(255,255,255,255);
            fill(xalpha)
            countx = countx + 15;
            //console.log(xcount)
            text2 = current_text.slice(0, addcount);
            text3 = text2
            //console.log(text2)
            fill("#FFD9D9");
            textFont("Roboto Slab");
            textSize(30);
            text(text2, textx, texty)
            addcount = addcount + 1;
            active = "animtext"
        }
        
    }
    function animbackgroun(){
        if (xtint*8 > 255){
            if (xtint*16 > 500){
                if(xtint*16 > 255 && xtint2*32 > 220){
                    anim = true;
                    noTint();
                    clear();
                    gen(current_num,current_num);
                    background(current_background);
                    image(background_text,0,772)
                    xtint = 0;
                    xtint2 = 0;
                    active = "animtext"
                    console.log("Text animation requested...")
                    /*insert code of _intro_ here if not working*/

                   // image(background_text,0,772)
                }
                else {
                    tint(255,xtint2*16);
                    image(background_text,0,772)
                    //console.log(current_num)
                    gen(current_num,current_num);
                    //console.log(current_text);
                    fill("#FFD9D9");
                    textFont("Roboto Slab");
                    textSize(30);
                    //text(current_character,characterx,charactery);
                    //text(current_text,textx,texty);
                    xtint2 = xtint2 + 1;
                    active = "waiting+anim";
                    //console.log(xtint2)
                }
                
                
            }
            
        }
        else {
            gen(current_num,current_num);
            tint(255,xtint*16);
            background(current_background);
            xtint = xtint + 1;
            //console.log(xtint);
            active = "waiting+anim";
        }
    }
     
    function reset(){
        stroke(0)
        noStroke();
        strokeWeight(1);
        //console.log("reset")
    }
    function opstart(){
        if (active != "playing"){
            clear();
            //op = createVideo("video/op.mp4")
            op.show();
            op.size(1920, 1080)
            op.position(0, 0)
           // completion = op.time() / op.duration()
            op.play();
            active = "playing"
        }
        if (active == "playing"){
            progress = op.time() / op.duration();
            if (progress == 1){
                clear();
                current_num = current_num + 1;
                op.pause();
                op.hide();
                animtext = false;
                active = "startw8"
            }
        }
        

    }

    //background0gif.position(0, 0);
    function detect(){
        if (active == "menu"){
            if (mouseX > 687 && mouseX < 920 && mouseY > 60 && mouseY < 120){
                if (state < 1){
                    console.log("----------------------------------NEW EVENT----------------------------")
                    console.log("Hovering the Start Button")
                    hover = "start";
                    console.log("Refreshing the Menu...")
                    menu();
                    state = state + 1 ;
                   // ecoFps = ecoFps + 1
                }
                
            }
            else if (hover == "start"){
                    console.log("----------------------------------NEW EVENT----------------------------")
                    console.log("Stopped hovering the Start button")
                    state = 0;
                    hover = "none";
                    console.log("Refreshing the Menu...")
                    menu();
            }
            
                
            if (mouseX > 1065 && mouseX < 1260 && mouseY > 60 && mouseY < 120){
                if (state < 1){
                    console.log("----------------------------------NEW EVENT----------------------------")
                    console.log("Hovering the Load Button")
                    hover = "load";
                    console.log("Refreshing the Menu...")
                    menu();
                    state = state + 1;
                }
                
            }
            else if (hover == "load"){
                    console.log("----------------------------------NEW EVENT----------------------------")
                    console.log("Stopped hovering the Load button")
                    state = 0;
                    hover = "none";
                    console.log("Refreshing the Menu...")
                    menu();
                }
            if (mouseX > 1400 && mouseX < 1745 && mouseY > 60 && mouseY < 120){
                if (state < 1){
                    console.log("----------------------------------NEW EVENT----------------------------")
                    console.log("Hovering the Settings Button")
                    hover = "setto";
                    console.log("Refreshing the Menu...")
                    menu();
                    state = 1;
                }
               
            }
            else if (hover == "setto"){
                    console.log("----------------------------------NEW EVENT----------------------------")
                    console.log("Stopped hovering the Settings button")
                    state = 0;
                    hover = "none";
                    console.log("Refreshing the Menu...")
                    menu();
                }
    
            }
        if (active == "intro" || active == "waiting" || active =="sleep" || active=="animtext"){
            if (mouseX > 524 && mouseX < 650 && mouseY > 1040 && mouseY < 1065){
                console.log("WHAT")
                if (ecoFps<1){
                    hover = "mainmenu";
                    if (active =="waiting"){
                        animtext = true;
                    }
                    _intro_();
                    ecoFps = ecoFps + 2;
                }    
            }
            else if (ecoFps==2){
                hover = "none";
                if (active =="waiting"){
                    animtext = true;
                }
                _intro_();
                ecoFps = 0
            }
            if (mouseX > 676 && mouseX < 770 && mouseY > 1040 && mouseY < 1065){
                if (ecoFps<1){
                    hover = "settings";
                    if (active =="waiting"){
                        animtext = true;
                    }
                    _intro_();
                    ecoFps = ecoFps + 1;
                }    
            }
            else if (ecoFps==1){
                    hover = "none";
                    if (active =="waiting"){
                        animtext = true;
                    }
                    _intro_();
                    ecoFps = 0
                }

            if (mouseX > 805 && mouseX < 851 && mouseY > 1040 && mouseY < 1065){
                if (ecoFps<1){
                    hover = "save";
                    if (active =="waiting"){
                        animtext = true;
                    }
                    _intro_();
                    ecoFps = ecoFps + 3;
                }    
            }
            else if (ecoFps==3){
                    hover = "none";
                    if (active =="waiting"){
                        animtext = true;
                    }
                    _intro_();
                    ecoFps = 0
                }

            if (mouseX > 886 && mouseX < 942 && mouseY > 1040 && mouseY < 1065){
                if (ecoFps<1){
                    hover = "load";
                    if (active =="waiting"){
                        animtext = true;
                    }
                    _intro_();
                    ecoFps = ecoFps + 4;
                }    
            }
            else if (ecoFps==4){
                    hover = "none";
                    if (active =="waiting"){
                        animtext = true;
                    }
                    _intro_();
                    ecoFps = 0
                }
            
            if ( mouseY > 0 && mouseY < 1033.5){
                hover = "content";
            }
            else if (hover=="content"){
                hover = "none";
            }
        }
        
    }

  
    
      detect();
      //console.log(hover)
    //console.log(active)
    function sleep(){
        console.log("not using memorys, sleep mode")
    }

    if (active == "nothing"){
        menu();
    }
   /* if (){
        _main_();
    }*/
    if (active == "intro" || active == "startw8" || active == "waiting+endanim"){
        if (current_num == 14){
            opstart()
        }
        else {
            console.log("Current scene : "+current_num);
            console.log("Loading this scene's assets...")
            _intro_();
            if (active != "waiting+anim"){
            active = "animtext"
        }
        }
    }


    if (active =="waitingDetectionMenu"){
        console.log("not using memory, sleep mode")
        active = "menu";
    }
    if (active =="waiting+op"){
        clear();
        _intro_();
    }
    if(active == "sleep") {
        sleep();
    }

    
    if(active  == "waiting+anim"){
        animbackgroun();
    }
    if (active == "animtext"){
        //console.log("Animating Text...")
        detect();
        animtext();
    }
    if (active == "endforceanim"){
        noTint();
        anim = true;
        animtext = true;
        addcount = 0;
        text2="";
        _intro_();
    }
   if (active == "endforcetxtanim"){
        animtext = true;
        addcount = 0;
        text2="";
        _intro_()
    }
    if (active == "playing"){
        opstart();
    }
    
  console.log(active)
}


function mouseClicked(){
    if (hover == "start"){
        console.log("----------------------------------NEW EVENT----------------------------")
        console.log("Start button pressed. ")
        hover = "none";
        active = "startw8";
        state = 0;
        current_background = background_1;
    }
   if(hover == "content"){
        if (active == "waiting"){
            console.log("----------------------------------NEW EVENT----------------------------")
            current_num = current_num + 1;
            active = "startw8";
        } 
        if (active == "animtext" && active != "waiting+anim"){
            console.log("----------------------------------NEW EVENT----------------------------")
            active = "endforcetxtanim";
        }
       
   }
    
    if (hover == "mainmenu"){
        console.log("----------------------------------NEW EVENT----------------------------")
        clear();
        state = 0;
        hover = "none";
        active = "nothing";
    }
    
}



function keyTyped(){
    if (key === "d"){
        console.log("----------------------------------NEW EVENT----------------------------")
        if (active === "waiting"){
            current_num = current_num + 1;
            active = "startw8";
            }
        if (active == "waiting+anim"){
            active = "endforceanim";
         }
         if (active == "animtext" && active != "waiting+anim"){
            active = "endforcetxtanim";
        }
        if (active =="playing"){ 
            clear();
            current_num = current_num + 1;
            op.stop();
            op.hide();
            animtext = false;
            active ="startw8";
        }
            
    }
    if (key === "a"){
        console.log("----------------------------------NEW EVENT----------------------------")
        if (active ==="waiting"){
            if (current_num != 0){ 
                current_num = current_num - 1;
                if (current_num == 1 && anim == true || current_num == 4 ){
                    current_background = background[current_num-1];
                    console.log(current_background);
                    anim = false;
                }
            }

            console.log(key)
            active = 'startw8';
        }
        if (active == "animtext" && active != "waiting+anim"){
            active = "endforcetxtanim";
        }
        if (active == "waiting+anim"){
            active = "endforceanim"
        }
        if (active =="playing"){
            clear();
            current_num = current_num - 1;
            op.stop();
            op.hide();
            animtext = false;
            active ="startw8";
        }
    }
    if (key == "f"){
        console.log("----------------------------------NEW EVENT----------------------------")
        console.log("Fullscreen key pressed. ")
        fs = fullscreen();
        fullscreen(!fs);
        fs = true;
        active = "nothing"
        console.log("Reloading Menu...")
    }
   
}