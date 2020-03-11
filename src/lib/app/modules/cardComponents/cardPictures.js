const cardId = document.getElementsByClassName('card');
const cardFaceBack = document.getElementsByClassName('card__face--back');

export let cardPictures = {
  
print: function() {
    for(let i = 0; i < cardId.length; i++){
        if((i % 2) === 0) {
            cardFaceBack[i].classList.add(`card__face--back--${(i / 2)}`)
            cardFaceBack[(i + 1)].classList.add(`card__face--back--${(i / 2)}`)
        }
    }   
    }

}