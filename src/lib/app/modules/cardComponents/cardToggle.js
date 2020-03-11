const cardId = document.getElementsByClassName('card');
const cardFaceFront = document.getElementsByClassName('card__face--front');
const cardFaceBack = document.getElementsByClassName('card__face--back');

export let cardToggle = {
  flip: function() {
    for (let i = 0; i < cardId.length; i++) {
      cardId[i].classList.toggle('flip');
    }
  },

  twoSeconds: function() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(cardToggle.flip());
      }, 2000);
    });
  },

  eightSeconds: function() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(cardToggle.flip());
      }, 8000);
    });
  }
};
