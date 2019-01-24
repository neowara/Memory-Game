window.onload = function() {
    var storedDeck = JSON.parse(sessionStorage.getItem("storedDeck") || "[]");

    storedDeck.forEach(function(card, index){
        let cards = document.createElement("div");
        cards.classList.add("cardContainer");
        cards.classList.add(index);
        cards.id = card.typeOfCard;
        content.appendChild(cards);
        var cardContent = `
        &#x200b;
            <div class = "flip-card">
            <div class = "flip-card-inner">
                <div class = "flip-card-front"></div>
                <div class="flip-card-back"></div>
            </div>
        `;
        cards.innerHTML = cardContent;
    });

    var allCards = document.querySelectorAll('#content');
    var allDivs = document.querySelectorAll('.cardContainer');
    var firstValue= null;
    var firstElement = null;
    var cardsPaired = 0;


 
    for(var i = 0; i < allCards[0].childNodes.length; i++) {

        allCards[0].childNodes[i].addEventListener('click', (e) => {
            var target = e.target || e.srcElement;

            if (firstValue === null){

                firstValue = target.id;
                firstElement = target;
  
            } else if (firstValue === target.id && target !== firstElement)  {

                firstValue = null;
                firstElement.classList.add("invisible");
                target.classList.add("invisible");
                cardsPaired += 2;
                console.log("cards match!");
 
            } else if (firstElement === target && !target.classList.contains("invisible")) {

                console.log("you can't click the same card twice");
                firstElement = target;

            } else {

                console.log("not the same");
                firstValue = null;

            } if (cardsPaired === allCards[0].childNodes.length) {

                console.log("you win!");
            }
          });
    }
};
