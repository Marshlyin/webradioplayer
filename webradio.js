function selectPlayer(){
    var selection = document.getElementById('Radio');
    var valeur = selection.value;
    var source = document.getElementById('playerUniqueSource');
    var player = document.getElementById('player');

    console.log(valeur, source);

    switch(valeur){
        case 'FranceInfo':
        document.getElementById('nomRadio').innerHTML = "France Info : 192 kbs";
        source.setAttribute('src',"http://direct.franceinfo.fr/live/franceinfo-midfi.mp3");
        break;

        case 'FranceInter':
        document.getElementById('nomRadio').innerHTML = "France Inter : 192 kbs";
        source.setAttribute('src',"http://direct.franceinter.fr/live/franceinter-midfi.mp3");
        break;

        case 'FIP':
        document.getElementById('nomRadio').innerHTML = "FIP : 192 kbs";
        source.setAttribute('src',"http://direct.fipradio.fr/live/fip-midfi.mp3");
        break;

        case 'SCC':
        document.getElementById('nomRadio').innerHTML = "Radio Salut c'est Cool : 192 kbs";
        source.setAttribute('src',"http://radio.casse-tete.solutions/salut-radio-128.mp3");
        break;
        
        case 'NWP':
        document.getElementById('nomRadio').innerHTML = "Night Wave Plaza : 192 kbs";
        source.setAttribute('src',"http://radio.plaza.one/mp3 ");
        break;

        case 'TSF':
        document.getElementById('nomRadio').innerHTML = "TSF Jazz : 192 kbs";
        source.setAttribute('src',"http://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3");
        break;

        case 'Nova':
        document.getElementById('nomRadio').innerHTML = "Radio Nova : 192 kbs";
        source.setAttribute('src',"http://novazz.ice.infomaniak.ch/novazz-128.mp3");
        break;

        case 'Mouv':
        document.getElementById('nomRadio').innerHTML = "Le Mouv' : 128 kbs";
        source.setAttribute('src',"http://direct.mouv.fr/live/mouv-midfi.mp3");
        break;

        case 'Oui':
        document.getElementById('nomRadio').innerHTML = "OUI FM : 128 kbs";
        source.setAttribute('src',"http://stream.ouifm.fr/ouifm-high.mp3");
        break;

        default: 
        document.getElementById('nomRadio').innerHTML = "";
        break;        
    }

    player.load();
    player.play();
    onAir();
}

function randomSource(){
    var selection = document.getElementById('Radio');
    var source = document.getElementById('playerUniqueSource');
    var player = document.getElementById('player');
    var i = Math.floor(Math.random()*9)+1;
    

    
    switch(i){
        case 1:
        document.getElementById('nomRadio').innerHTML = "France Info : 192 kbs";
        source.setAttribute('src',"http://direct.franceinfo.fr/live/franceinfo-midfi.mp3");
        break;

        case 2:
        document.getElementById('nomRadio').innerHTML = "France Inter : 192 kbs";
        source.setAttribute('src',"http://direct.franceinter.fr/live/franceinter-midfi.mp3");
        break;

        case 3:
        document.getElementById('nomRadio').innerHTML = "FIP : 192 kbs";
        source.setAttribute('src',"http://direct.fipradio.fr/live/fip-midfi.mp3");
        break;

        case 4:
        document.getElementById('nomRadio').innerHTML = "Radio Salut c'est Cool : 192 kbs";
        source.setAttribute('src',"http://radio.casse-tete.solutions/salut-radio-128.mp3");
        break;
        
        case 5:
        document.getElementById('nomRadio').innerHTML = "Night Wave Plaza : 192 kbs";
        source.setAttribute('src',"http://radio.plaza.one/mp3 ");
        break;

        case 6:
        document.getElementById('nomRadio').innerHTML = "TSF Jazz : 192 kbs";
        source.setAttribute('src',"http://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3");
        break;

        case 7:
        document.getElementById('nomRadio').innerHTML = "Radio Nova : 192 kbs";
        source.setAttribute('src',"http://novazz.ice.infomaniak.ch/novazz-128.mp3");
        break;

        case 8:
        document.getElementById('nomRadio').innerHTML = "Le Mouv' : 128 kbs";
        source.setAttribute('src',"http://direct.mouv.fr/live/mouv-midfi.mp3");
        break;

        case 9:
        document.getElementById('nomRadio').innerHTML = "Ouï FM : 128 kbs";
        source.setAttribute('src',"http://stream.ouifm.fr/ouifm-high.mp3");
        break;

        default: 
        document.getElementById('nomRadio').innerHTML = "";
        break;        
    }

    player.load();
    player.play();   
    onAir(); 

}

function onAir(){
    var live = document.getElementById('OnAir');
    live.style.color = '#f70000';
    live.style.backgroundColor = '#000000'; 
}