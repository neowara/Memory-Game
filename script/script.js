$( document ).ready(function() {
    $('#colorChoices').multiselect({
    });
});

function whatSelection () {
    var typesOfCards = [];
    var inputValues = $('.active input').map(function() {
        return $(this).val();
    }).toArray();
    
    var totalCards = $('.pairsAmount option:selected').val() ;
    var i = 0;
    var n = 0;
    var f = 0;
    var k = 1;

    typesOfCards.push({"typeOfCard" : inputValues[n], "amount": n, "amountPushed": k});
   
    for  (;i !== ((totalCards * inputValues.length) -1);i++) {
         if (typesOfCards[i].amountPushed == totalCards  ) {
            n++;
            f++;
            k=0;
        } 
            k++;
            typesOfCards.push({"typeOfCard" : inputValues[n], "amount": f, "amountPushed": k});    
    }

    console.log(inputValues);
        console.log(i);
        console.log(n);
        console.log(f);
        console.log(k);
        console.log(totalCards);
        return typesOfCards;
    }



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
