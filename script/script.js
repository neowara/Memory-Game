// This is needed to run the dropdown selection plugin, it will run when the page is loaded
$( document ).ready(function() {
    $('#colorChoices').multiselect({
    });

    var form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        whatSelection ();
      });
});

//we will be pushing all of the values as objects into this array 
var deck = [];


//This function will take what the user has selected (cards per type and types of cards) 
//and will make it into an array of Objects with different keys and values.
function whatSelection () {

    //this variables keeps track of things like position and repetitions 
    var i = 0;
    var f = 0;
    var timesPushed = 1;

    //in this variable we take the selected types of cards and make them into an array
    var selectedCardsType = $('.active input').map(function() {
        return $(this).val();
    }).toArray();


    //here we take the numbers of cards PER type and save it into a variable
    var cardsPerType = $('.pairsAmount option:selected').val() ;


    //this will push our first card into our array as an Object with different key and values
    //is important that is pushed first so that the IF inside the FOR LOOP can have an object to evaluate 
    deck.push({"typeOfCard" : selectedCardsType[f], "value": f, "timesPushed": timesPushed});
   

    //this will loop the IF statement inside until the amount of cards in the deck are equal to the 
    //cards per card type (so if they selected 4 cards and 2 categories of cards, Blue and Red, there should 4 cards of each category making it 8 in total)
    for  (;i !== ((cardsPerType * selectedCardsType.length) -1);i++) {

        //The if statement checks if the current Object has been pushed enough times
        //If the amount of times a card has been pushed is equal to the amount of cards per type then 
        //set the counter for times pushed back to 0 and increase our f counter by 1

         if (deck[i].timesPushed == cardsPerType  ) {
            f++;
            timesPushed=0;
        } //if the current Object hasn't been pushed enough then push it again and increase the times it has been pushed
            timesPushed++;
            deck.push({"typeOfCard" : selectedCardsType[f], "value": f, "timesPushed": timesPushed});    
    }

    shuffle(deck);

    deck.forEach(function(card, index){

        let cards = document.createElement("div");
        cards.classList.add("card");
        cards.id = index;
        content.appendChild(cards);
        var cardContent = `
            <div class = "${card.value} ${card.typeOfCard}">
            <h4> ${card.typeOfCard} </h4>
            </div>
        `;
        document.getElementById(cards.id).innerHTML = cardContent;
    
    });
    }


//this a simple function that suffles elements in an array so they are all in random positions
function shuffle(array) {
    var x, z, randomNum;
    for (x = array.length - 1; x > 0; x--) {
        randomNum = Math.floor(Math.random() * (x + 1));
        z = array[x];
        array[x] = array[randomNum];
        array[randomNum] = z;
    }
    return array;
}


