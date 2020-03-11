const cardId = document.getElementsByClassName('card');
let cardIndex = []
let gameModeSelector = document.getElementsByClassName('difficulty')

export let cardPlacement = {

  logic: function() {
      var currentIndex = cardIndex.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = cardIndex[currentIndex];
        cardIndex[currentIndex] = cardIndex[randomIndex];
        cardIndex[randomIndex] = temporaryValue;
      }
      return cardIndex;
    },

  stack: function () {
    return cardIndex = []
  },

  shuffle: function () {
    for(let i = 0; i < cardId.length; i++){
      cardIndex.push(i);
      }
    cardIndex = cardPlacement.logic(cardIndex);
    return cardIndex
  },

  switch: function() {
    for(let i = 0; i < cardId.length; i++){
  
      switch (gameModeSelector[0].classList[1]) { 
        case ("easyMode") :
        cardId[i].setAttribute("style", `grid-row: ${(Math.floor(cardIndex[i] / 8)) + 1}; grid-column: ${(Math.floor(cardIndex[i] % 8)) + 1}`)
        break;
        case ("intermediateMode") :
        cardId[i].setAttribute("style", `grid-row: ${(Math.floor(cardIndex[i] / 8)) + 1}; grid-column: ${(Math.floor(cardIndex[i] % 8)) + 1}`)
        break;
        case ("expertMode") :
        cardId[i].setAttribute("style", `grid-row: ${(Math.floor(cardIndex[i] / 8)) + 1}; grid-column: ${(Math.floor(cardIndex[i] % 8)) + 1}`)
        break;
        case ("masterMode") :
        cardId[i].setAttribute("style", `grid-row: ${(Math.floor(cardIndex[i] / 8)) + 1}; grid-column: ${(Math.floor(cardIndex[i] % 8)) + 1}`)
        break;
        }
      }
    }

}
