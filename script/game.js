window.onload = function() {
    
    var storedDeck = JSON.parse(sessionStorage.getItem("storedDeck") || "[]");

    storedDeck.forEach(function(card, index){
        let cards = document.createElement("div");
        cards.classList.add("cardContainer");
        cards.classList.add(index);
        cards.id = card.typeOfCard;
        content.appendChild(cards);
        var cardContent = `
        <img class = "cardImg" src= "images/${card.typeOfCard}.png">
        `;
        cards.innerHTML = cardContent;
    });

    var allCards = document.querySelectorAll('#content');
    var firstValue= null;
    var firstElement = null;
    var cardsPaired = 0;
    var winScreen = document.querySelector('.winScreen');
    var cardImg = document.querySelectorAll('.cardContainer img');
    var matchAnimation = document.querySelector('.matched-animation');
    var winnerSound = document.querySelector('.winner-audio');
    var matchedSound = document.querySelector('.matched-audio');
    winnerSound.volume = 0.1;
    matchedSound.volume = 0.1;
 
    for(var i = 0; i < allCards[0].childNodes.length; i++) {

        allCards[0].childNodes[i].addEventListener('click', (e) => {

            var target = e.target || e.srcElement;
            $(target.querySelector('img')).fadeIn( 800 );

            if (firstValue === null){
                firstValue = target.id;
                firstElement = target;

            } else if (firstValue === target.id && target !== firstElement)  {
                
                firstValue = null;
                $(matchAnimation).fadeIn( 100 );
                matchedSound.play();
                $('body').append('<div class="noclick"/>');

                setTimeout(function(){
                    $(target).fadeOut(400, function() {
                        $(target).remove();
                    });
                    $(firstElement).fadeOut(400, function() {
                        $(firstElement).remove();
                    });
                    $(matchAnimation).fadeOut( 100 );
                    $(".noclick").remove();
                 }, 1500);
                
                cardsPaired += 2;

            } else {

                firstValue = null;
                $('body').append('<div class="noclick"/>');

                setTimeout(function(){

                    $(firstElement.querySelector('img')).delay( 200 ).fadeOut( 800 );
                    $(target.querySelector('img')).fadeOut( 800 );
   
                }, 1200);

                setTimeout(function(){
                    $(".noclick").remove();
                }, 2000);

            } if (cardsPaired === storedDeck.length) {
                setTimeout(function() {
                    winScreen.classList.remove('invisible');
                    document.querySelector('.navBar').classList.add('invisible');
                    winnerSound.play();
                }, 2000);
            }
          });
    }
};
