const cardId = document.getElementsByClassName('card');
const cardFaceFront = document.getElementsByClassName('card__face--front');

export let userCardEvents = {
  cardTap: function() {
    for (let i = 0; i < cardId.length; i++) {
      cardFaceFront[i].addEventListener('click', () => {
        cardId[i].classList.toggle('flip');
        if (i % 2 === 0) {
          cardId[i].classList.add(`${i}`);
          cardId[i].classList.add(`active`);
        } else {
          cardId[i].classList.add(`${i - 1}`);
          cardId[i].classList.add(`active`);
        }
      });
    }
  },

  homeTap: function() {
    let homeCardId = document.getElementById('homeCard');
    let homeCardFrontId = document.getElementById('homeCardFront');
    homeCardFrontId.addEventListener('click', () => {
      homeCardId.classList.toggle('flip');
    });
  }
};

userCardEvents.homeTap();
