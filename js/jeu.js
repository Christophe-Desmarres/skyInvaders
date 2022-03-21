var tabmvt = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
]; //coordonnée ennemi
var dispo = [true, true, true, true, true, true, true, true, ]; // ennemi
var mvtm = [
    [600, 0],
    [600, 0],
    [600, 0],
    [600, 0],
    [600, 0]
]; // coordonées missiles
var dispom = [true, true, true, true, true]; // dispo des missiles
var score = 0;
var scoreb = 0; // pour verifier l'augmentation de vitesse
var vie = 4;
var nbmissile = 5;
var vitesse = 500; //défilement ennemi
var partie = 0; //partie à l'arrêt
var afficheboss = 0; //pour verifier activation du boss
var xBoss = -180; //valeurs x du boss
var yBoss = 200; //valeurs y du boss
var vieboss = 5; //nb missile pour tuer le boss
var codetouche = []; //pour konamicode
var nbcommun = 0; //pour konamicode

//localStorage.highscore = 0; //reset highscore
//localStorage.namehs = "AAA"; //reset name HS

if (!localStorage.highscore) {
    localStorage.highscore = 5;
}
if (!localStorage.namehs) {
    localStorage.namehs = "AAA";
}

var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//open the modal
modal.style.display = "block";

span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("record").innerHTML = localStorage.highscore + " by " + localStorage.namehs;


function initgame() {
    tabmvt = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ];
    dispo = [true, true, true, true, true, true, true, true, ];
    mvtm = [
        [600, 0],
        [600, 0],
        [600, 0],
        [600, 0],
        [600, 0]
    ];
    dispom = [true, true, true, true, true];
    clearscreen();
    score = 0;
    console.log("score init" + score);
    scoreb = 0;
    vie = 4;
    nbmissile = 5;
    vitesse = 500;
    partie = 0;
    afficheboss = 0;
    xBoss = -180;
    yBoss = 200;
    vieboss = 5;
    var perdu = document.getElementById("message");
    perdu.innerHTML = "";
    affichevie(vie);
    affichemiss(nbmissile)
}

function clearscreen() {
    for (i = 0; i < dispo.length; i++) {
        var ennemi = document.getElementById('ennemi' + i);
        ennemi.style.left = -80 + "px";
        ennemi.style.top = 100 + "px";
        ennemi.style.display = "none";
    }
    for (i = 0; i < dispom.length; i++) {
        var missile = document.getElementById('missile' + i);
        missile.style.top = 100 + "px";
        missile.style.left = 580 + "px";
        missile.style.display = "none";
    }
    var boss = document.getElementById('boss');
    boss.style.top = "100px";
    boss.style.left = "-200px";
    boss.style.display = "none";

    tabmvt = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ];
    dispo = [true, true, true, true, true, true, true, true, ];
    mvtm = [
        [600, 0],
        [600, 0],
        [600, 0],
        [600, 0],
        [600, 0]
    ];
    dispom = [true, true, true, true, true];
    nbmissile = 5;
    affichemiss(nbmissile);
}



document.addEventListener("keydown", mvtavion);
document.addEventListener("keydown", konamicode);


document.getElementById("start").addEventListener("click", function () {
    document.getElementById("record").innerHTML = localStorage.highscore + " by " + localStorage.namehs;
    if (partie == 0) {
        initgame();
        clearscreen();
        var demarrage = setTimeout(function () {
            mvtennemi();
        }, vitesse);
        console.log("start game");
    }
});


function affichevie(vie) {
    var ok = '../ressources/images/coeurok.png';
    var nok = '../ressources/images/coeurnok.png';

    var img1 = document.getElementById("vie0");
    var img2 = document.getElementById("vie1");
    var img3 = document.getElementById("vie2");
    var img4 = document.getElementById("vie3");

    switch (vie) {
        case 0:
            img1.src = nok;
            img2.src = nok;
            img3.src = nok;
            img4.src = nok;
            break;
        case 1:
            img1.src = nok;
            img2.src = nok;
            img3.src = nok;
            img4.src = ok;
            break;
        case 2:
            img1.src = nok;
            img2.src = nok;
            img3.src = ok;
            img4.src = ok;
            break;
        case 3:
            img1.src = nok;
            img2.src = ok;
            img3.src = ok;
            img4.src = ok;
            break;
        default:
            img1.src = ok;
            img2.src = ok;
            img3.src = ok;
            img4.src = ok;
    }
}

function affichemiss(nbmissile) {
    var ok = '../ressources/images/missile.gif';
    var nok = '../ressources/images/missileko.png';

    var img1 = document.getElementById("miss0");
    var img2 = document.getElementById("miss1");
    var img3 = document.getElementById("miss2");
    var img4 = document.getElementById("miss3");
    var img5 = document.getElementById("miss4");

    switch (nbmissile) {
        case 0:
            img1.src = nok;
            img2.src = nok;
            img3.src = nok;
            img4.src = nok;
            img5.src = nok;
            break;
        case 1:
            img1.src = nok;
            img2.src = nok;
            img3.src = nok;
            img4.src = nok;
            img5.src = ok;
            break;
        case 2:
            img1.src = nok;
            img2.src = nok;
            img3.src = nok;
            img4.src = ok;
            img5.src = ok;
            break;
        case 3:
            img1.src = nok;
            img2.src = nok;
            img3.src = ok;
            img4.src = ok;
            img5.src = ok;
            break;
        case 4:
            img1.src = nok;
            img2.src = ok;
            img3.src = ok;
            img4.src = ok;
            img5.src = ok;
            break;
        default:
            img1.src = ok;
            img2.src = ok;
            img3.src = ok;
            img4.src = ok;
            img5.src = ok;
    }
}

function aviontir(posx, posy) { //lancement missile disponible

    for (i = 0; i < dispom.length; i++) {
        if (dispom[i]) { //si missile dispo
            var missile = document.getElementById("missile" + i);
            var decalageMissile = posy - 10; //pour affichage au centre de l'avion
            mvtm[i] = [posx, decalageMissile];
            missile.style.top = decalageMissile + "px";
            missile.style.left = posx + "px";
            missile.style.display = "initial";
            document.getElementById("lance").play();

            dispom[i] = false;
            i = dispom.length;
            nbmissile--;
            affichemiss(nbmissile);
        }
    }
}

function mvtennemi(event) {

    partie = 1; //partie en cours
    var avion = document.getElementById('avion');
    posavion = avion.getBoundingClientRect();
    var posY = Math.floor(Math.random() * (357 - 65) + 85); //hauteur au hasard
    var creation = Math.random() * 100; //pour determiner la création d'ennemi
    var numNewEnnemiRandom = Math.floor(Math.random() * 8); //choisi au hasard

    //-----------------------------------------------
    //create ennemi 25% de chance et dispo ds tableau ok
    //-----------------------------------------------
    if (creation > 75 && dispo[numNewEnnemiRandom]) {
        tabmvt[numNewEnnemiRandom] = [-100, posY];
        dispo[numNewEnnemiRandom] = false;
        var ennemi = document.getElementById('ennemi' + numNewEnnemiRandom);
        ennemi.style.top = posY + "px"; // positionne l'ennemi en y
        ennemi.style.display = "initial"; // affiche l'ennemi

    }
    //-----------------------------------------------
    //fait avancer le missile ok
    //-----------------------------------------------
    for (i = 0; i < dispom.length; i++) {

        if (!dispom[i]) {
            var missile = document.getElementById('missile' + i);
            posMissile = missile.getBoundingClientRect();

            if (posMissile.x < 0) { //si missile est arrivé au bout sans rien toucher
                missile.style.display = "none"; //enleve missile
                missile.style.top = "100px";
                missile.style.left = "580px";
                dispom[i] = true; //init missile
                mvtm[i] = [600, 0];
                nbmissile++;
            } else { // sinon avance missile
                var posx = mvtm[i][0] - 35;
                mvtm[i] = [posx, posMissile.y];
                missile.style.left = posx + "px";
            }
        }

    }

    //-----------------------------------------------
    //verifier les coordonnées des missiles par rapport aux ennemis et boss ok
    //-----------------------------------------------
    for (i = 0; i < dispom.length; i++) {

        if (!dispom[i]) { //si missile est lancé
            var missile = document.getElementById("missile" + i);
            posMissile = missile.getBoundingClientRect();

            for (j = 0; j < dispo.length; j++) {
                var ennemi = document.getElementById('ennemi' + j);
                posEnnemi = ennemi.getBoundingClientRect();

                //-----------------------------------------------
                //si posmissile est sur 1 ennemi ok
                //-----------------------------------------------
                if (posEnnemi.x + 50 > posMissile.x && posEnnemi.x + 50 < posMissile.x + 100) {
                    if (posEnnemi.y + 50 > posMissile.y + 25 && posEnnemi.y + 50 < posMissile.y + 75) {
                        document.getElementById("touche").play();
                        ennemi.style.display = "none"; //enleve ennemi
                        ennemi.style.left = "-100px"; //replace ennemi à l'origine
                        dispo[j] = true; // remise en dispo
                        tabmvt[j] = [0, 0]; //init coordonnées ennemi
                        missile.style.display = "none"; //enleve missile
                        missile.style.left = "600px"; //replace missile à l'origine
                        dispom[i] = true; //dispo missile
                        mvtm[i] = [600, 0]; //init coordonnées missile
                        nbmissile++;
                        score++;
                        console.log("score ennemi touché" + score);
                    }
                }
            }

            //-----------------------------------------------
            //verif si missile touche boss
            //-----------------------------------------------
            var boss = document.getElementById("boss");
            posBoss = boss.getBoundingClientRect();
            if (posMissile.x + 50 > posBoss.left && posMissile.x + 50 < posBoss.right) {
                if (posMissile.y + 50 > posBoss.top && posMissile.y + 50 < posBoss.bottom) {
                    vieboss--;
                    console.log("vie boss=" + vieboss);
                    document.getElementById("touche").play();
                    missile.style.display = "none"; //enleve missile
                    missile.style.left = "600px"; //enleve missile
                    dispom[i] = true; //init missile
                    mvtm[i] = [600, 0];
                    nbmissile++;
                    score++;
                    console.log("score boss touché" + score);


                }
            }
        }

    }

    //-----------------------------------------------
    //avance ennemi ok
    //-----------------------------------------------

    for (i = 0; i < dispo.length; i++) { //pour tout les ennemis
        var ennemi = document.getElementById('ennemi' + i);
        posEnnemi = ennemi.getBoundingClientRect();
        var coordEnnemi = tabmvt[i]; //tableau éléments ennemi
        var xEnnemi = coordEnnemi[0]; //coordonnée x de l'élément de tab[i]
        var yEnnemi = coordEnnemi[1]; //coordonnée y de l'élément de tab[i]


        if (!(dispo[i])) { //si ennemi est sortie, je l'avance
            coordEnnemi[0] += 25; //avance de 25px
            ennemi.style.left = coordEnnemi[0] + "px";

            //-----------------------------------------------
            //verification contact ennemi avec avion ok
            //-----------------------------------------------
            //if (xEnnemi+25>posavion.x+25 && xEnnemi-25<posavion.x+75 && yEnnemi+25>posavion.y && yEnnemi-25<posavion.y+75){
            if (xEnnemi + 50 > posavion.x && xEnnemi + 50 < posavion.x + 100) {
                if (yEnnemi + 75 > posavion.y && yEnnemi + 50 < posavion.y + 100) {
                    console.log("avion touché par ennemi vie-1");
                    dispo[i] = true;
                    tabmvt[i] = [0, 0];
                    ennemi.style.display = "none"; // n'affiche plus l'ennemi
                    ennemi.style.left = "-80px"; //repositionne l'ennemi
                    vie--;

                }
            }

            //-----------------------------------------------
            //si ennemi passe sans être touché ok
            //-----------------------------------------------
            if (xEnnemi > 600) {
                dispo[i] = true;
                tabmvt[i] = [0, 0];
                ennemi.style.display = "none"; // affiche l'ennemi
                ennemi.style.left = "-80px"; //repositionne l'ennemi
                score -= 2;
                console.log("score ennemi passé" + score);

            }
        }
    }

    //-----------------------------------------------
    //affiche boss 
    //-----------------------------------------------
    if (score == 12 && afficheboss == 0) {
        document.getElementById("bossok").play();
        console.log("creation boss");
        clearscreen();
        var boss = document.getElementById("boss");
        boss.style.display = "initial";
        boss.style.left = xBoss + "px";
        afficheboss = 1;
        vieboss = 5;
    }
    var boss = document.getElementById("boss");
    //-----------------------------------------------
    //avance boss ok
    //-----------------------------------------------
    if (afficheboss == 1) {
        console.log("boss present");
        if (vieboss != 0) {
            diry = Math.random() * 2;
            if (diry > 1) {
                diry = 25;
            } else {
                diry = -25;
            }
            if (yBoss + diry > 100 && yBoss + diry < 350) {
                yBoss += diry;
            }
            xBoss += 40;
            boss.style.left = xBoss + "px";
            boss.style.top = yBoss + "px";

            //-----------------------------------------------
            //si bosse passe sans etre HS ok
            //-----------------------------------------------
            if (boss.x > 650) {
                console.log("boss parti");
                boss.style.display = "none";
                boss.style.left = "-200px";
                xBoss = -200;
                score -= 10;
                console.log("score boss passé" + score);
                afficheboss = 0;
            }
            //-----------------------------------------------
            //si boss touche avion
            //-----------------------------------------------
            /*missile touche ennemi
                if(posEnnemi.x+50>posMissile.x && posEnnemi.x+50<posMissile.x+100){
                if(posEnnemi.y+50>posMissile.y+25 && posEnnemi.y+50<posMissile.y+75){
            */
            /* missile touche boss
                    if(posMissile.x+50>posBoss.left && posMissile.x+50<posBoss.right){
                    if(posMissile.y+50>posBoss.top && posMissile.y+50<posBoss.bottom){
            */
            /*ennemi touche avion
             if(xEnnemi+50>posavion.x && xEnnemi+50<posavion.x+100){
             if(yEnnemi+75>posavion.y && yEnnemi+50<posavion.y+100){
            */


            /*
            console.log("controle test position");
            console.log("posavion="+posavion.x+" et "+posavion.y);
            console.log("posboss="+boss.x+" et "+boss.y);

            if(boss.y+75>posavion.y && boss.y+50<posavion.y+100){
                console.log("boss même ligne qu'avion");
            }*/
            if (boss.y + 75 > posavion.y && boss.y + 50 < posavion.y + 100) {
                console.log("yavion=" + posavion.y + " et yboss" + boss.y);
                if (boss.x + 50 > posavion.x && boss.x + 50 < posavion.x + 100) {
                    console.log("xavion=" + posavion.x + " et xboss" + boss.x);


                    console.log("boss touché par l'avion");
                    boss.style.display = "none";
                    boss.style.left = "-200px";
                    xBoss = -200;
                    afficheboss = 0;
                    vie -= 3;
                }
            }


        } else {
            console.log("boss mort");
            boss.style.display = "none";
            boss.style.left = "-200px";
            xBoss = -200;
            score += 20;
            afficheboss = 0;
        }
    }


    affichemiss(nbmissile);
    affichevie(vie);
    document.getElementById("score").innerHTML = score;

    //-----------------------------------------------
    //vérification parametre de jeu gain/perte ok
    //-----------------------------------------------
    if (vie < 0 || score <= -25) {
        gameover();
    } else {
        if (score > 0 && score % 5 == 0 && score != scoreb) { //augmentation vitesse
            console.log("augmentation vitesse 5%")
            document.getElementById("vite").play();
            vitesse = vitesse * 0.75;
            scoreb = score;
        }
        //relance 1 cycle de mvtennemi
        setTimeout(function () {
            mvtennemi();
        }, vitesse);
    }



}





var alltouches = document.getElementsByClassName("touch");
//renvoie la touche correspondant à l'espace cliqué ds la grid clavier
for (var i = 0; i < alltouches.length; i++) {
    alltouches[i].addEventListener('click', function (event) {
        var zonetouch = event.target.id;
        console.log(zonetouch);

        if (zonetouch == "tir1" || zonetouch == "tir2") {
            mvtavion(32);
            console.log("tir");
        } else {
            if (zonetouch == "haut") {
                mvtavion(38);
                console.log("haut");

            } else {
                if (zonetouch == "bas") {
                    mvtavion(40);
                    console.log("bas");

                }
            }
        };
    })
}



function mvtavion(event) {
    var winObj = window.event;
    var touche = winObj.keyCode;
    var avion = document.getElementById('avion');
    pos = avion.getBoundingClientRect();

    console.log(event);


    if (touche == 65 || touche == 32 || event == 32) { //touche A ou espace
        if (partie == 1) {
            var posax = pos.x;
            var posay = pos.y;
            aviontir(posax, posay);
        }
    } else {
        if (touche == 38 || event == 38) { //touche haut
            if (pos.y - 20 > 70) {
                avion.style.top = pos.y - 20 + "px";
            }
        } else {
            if (touche == 40 || event == 40) { //touche bas
                if (pos.y + 22 < 420) {
                    avion.style.top = pos.y + 20 + "px";
                }
            } else {
                if (touche == 37) {
                    if (pos.x - 20 > 400) {
                        avion.style.left = pos.x - 20 + "px";
                    }
                } else {
                    if (touche == 39) {
                        if (pos.x + 20 < 560) {
                            avion.style.left = pos.x + 20 + "px";
                        }
                    }
                }
            }
        }
    }
}

function gameover() {
    document.getElementById("over").play();
    var perdu = document.getElementById("message");
    perdu.innerHTML = "GAME OVER";
    if (score > localStorage.highscore) {
        localStorage.highscore = score;
        var nameJ1 = prompt("quel est ton nom ?");
        localStorage.namehs = nameJ1;
        document.getElementById("record").innerHTML = "BRAVO " + nameJ1;
    }
    partie = 0;

    return partie;
}

function konamicode(event) {
    var winObj = window.event;
    var intKeyCode = winObj.keyCode;
    var tab = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    if (codetouche.length > 10) {
        codetouche.shift();
    }
    codetouche.push(intKeyCode);

    for (i = 0; i < tab.length; i++) {
        if (codetouche[i] == tab[i]) { //compte le nb de touche commune
            nbcommun++;
        } else {
            nbcommun = 0;
        }
    }
    if (nbcommun == 11) {
        //var myWindow = window.open("", "_self");
        //myWindow.document.write("<p>I replaced the current window.</p>");
        tabmvt = [
            [-80, 100],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]; //coordonnée ennemi
        dispo = [false, true, true, true, true, true, true, true, ]; // ennemi
        mvtm = [
            [600, 0],
            [600, 0],
            [600, 0],
            [600, 0],
            [600, 0]
        ]; // coordonées missiles
        dispom = [true, true, true, true, true]; // dispo des missiles
        score += 2;
        console.log("score bonus kc" + score);

        if (vie < 4) {
            vie++;
        }
        document.getElementById("kc").play();

        nbmissile = 5;
        vitesse = vitesse * 1.5; //défilement ennemi
        clearscreen();
        var myWindow = window.open("", "MsgWindow", "width=700,height=200");
        myWindow.document.write("<p style='font-size:90px; text-align:center;'>Konami code enclenché !</p>");
        setTimeout(function () {
            myWindow.close()
        }, 750);
        nbcommun = 0;
    }
}
/*
var w=window.innerWidth,h=window.innerHeight;
    var x,y;
    
    var canvas=document.getElementById("cancan");
    canvas.width=canvas.height=w/20;
    canvas.style.position="absolute";
    canvas.style.left=w/10 +"px";
    canvas.style.top=h/10+"px";
    
    var bouton=document.getElementById("bout");
    bouton.style.width=w/10+"px";
    bouton.style.height=w/40+"px";
    bouton.style.position="absolute";
    bouton.style.left=4*w/5+"px";
    bouton.style.top=h/10+"px";
    bouton.value="deplacer";
    bouton.addEventListener('click',doClick);
   
    
    var canvasCtx=canvas.getContext('2d');   
    canvasCtx.fillStyle = "#FF0000";
    canvasCtx.fillRect(0,0,w/20,w/20);
    
    document.addEventListener('mousedown',doMousedown);
    
    function doMousedown(event){
      x = event.clientX;
      y = event.clientY;
      document.removeEventListener('mousedown', doMousedown); 
    }
    
    function doClick(){
       canvas.style.left=x-canvas.width/2+"px";
       canvas.style.top=y-canvas.height/2+"px";
       document.addEventListener('mousedown',doMousedown);
    }
*/
/*
KEY_DOWN        = 40;
KEY_UP          = 38;
KEY_LEFT        = 37;
KEY_RIGHT       = 39;
KEY_SPACE       = 32;
KEY_A           = 65;
KEY_B           = 66;
/*kkc
haut *2
bas*2
gd
gd
BA
enter
*/