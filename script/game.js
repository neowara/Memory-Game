window.onload = function() {
    var storedDeck = JSON.parse(sessionStorage.getItem("storedDeck") || "[]");

    storedDeck.forEach(function(card, index){
        let cards = document.createElement("div");
        cards.classList.add("cardContainer");
        cards.id = index;
        content.appendChild(cards);
        var cardContent = `
            <div class = "${card.value} ${card.typeOfCard} card">
            <h4> ${card.typeOfCard} </h4>
            </div>
        `;
        document.getElementById(cards.id).innerHTML = cardContent;
    });

    var allCards = document.querySelectorAll('h4');
    var firstValue= null;
    var firstElement = null;
    var cardsPaired = 0;
 

    for(var i = 0; i < allCards.length; i++) {
        allCards[i].addEventListener('click', (e) => {
            var target = e.target || e.srcElement;
            if (firstValue === null){
                firstValue = target.innerHTML;
                firstElement = target;
            } else if (firstValue === target.innerHTML && target !== firstElement)  {
                console.log("cards match!");
                firstValue = null;
                firstElement.className = "invisible";
                target.className = "invisible";
                cardsPaired += 2;
            } else if (firstElement === target) {
                console.log("you can't click the same card twice");
                firstElement = target;
            } else {
                console.log("not the same");
                firstValue = null;
            } if (cardsPaired === allCards.length) {
                console.log("you win!");
            }
          });
    }
};
