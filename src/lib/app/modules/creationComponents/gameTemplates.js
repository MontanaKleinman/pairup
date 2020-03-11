export let gameTemplates = {
  navigationInfo: `<section class="navigation"></section>`,

  navigationLaunch: `<input type="checkbox" class="navigation__checkbox" id="navi-toggle"></input>
        <label for="navi-toggle" class="navigation__button">
        <div class="navigation__bar"></div>
        </label>
        <div class="navigation__background">
        <div class="navigation__menu">
            <ul class="navigation__items">
                <li>RESTART&nbsp;GAME</li>
                <li>EXIT&nbsp;GAME</li>
            </ul>
        </div>
        </div>`,

  playerRecordsInfo: `<section class="playerRecords"></section>`,

  playerInfo: `<div class="playerBoxSize"></div>`,

  playerOne: `<div class="playerId playerOne playerIndicator">

                        <div>
                        <div class="player__icon">Player 1</div>
                        </div>
                        <div class="player__combo">Combo Bonus: x1</div>
                    </div>`,

  playerTwo: `<div class="playerId playerTwo">
                  
                        <div>
                        <div class="player__icon">Player 2</div>
                        </div>
                        <div class="player__combo">Combo Bonus: x1</div>
                    </div>`,

  playerThree: `<div class="playerId playerThree">  
                       
                        <div>
                        <div class="player__icon">Player 3</div>
                        </div>
                        <div class="player__combo">Combo Bonus: x1</div>
                    </div>`,

  playerFour: `<div class="playerId playerFour">
                      
                        <div>
                        <div class="player__icon">Player 4</div>
                        </div>
                        <div class="player__combo">Combo Bonus: x1</div>
                    </div>`,

  playerLaunch: function(mode, players) {
    if (players === 1) {
      document
        .getElementsByClassName('playerBoxSize')[0]
        .classList.add('playerBoxSize--version1');
      document
        .getElementsByClassName('playerBoxSize')[0]
        .insertAdjacentHTML('beforeend', `${gameTemplates.playerOne}`);
      document
        .getElementsByClassName('playerOne')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.particleAnimation}`);
      document.querySelectorAll('.particle').forEach(function(element) {
        element.style.opacity = 0;
        if (mode === 1) {
          element.classList.add('particle-1--small');
        }
        if (mode === 2) {
          element.classList.add('particle-1--large');
        }
      });
    } else if (players === 2) {
      document
        .getElementsByClassName('playerBoxSize')[0]
        .classList.add('playerBoxSize--version2');
      document
        .getElementsByClassName('playerBoxSize')[0]
        .insertAdjacentHTML('beforeend', `${gameTemplates.playerOne}`);
      document
        .getElementsByClassName('playerOne')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.particleAnimation}`);
      document
        .getElementsByClassName('playerBoxSize')[0]
        .insertAdjacentHTML('beforeend', `${gameTemplates.playerTwo}`);
      document
        .getElementsByClassName('playerTwo')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.particleAnimation}`);
      document.querySelectorAll('.particle').forEach(function(element) {
        element.style.opacity = 0;
        if (mode === 1) {
          element.classList.add('particle-2--small');
        }
        if (mode === 2) {
          element.classList.add('particle-2--large');
        }
      });
    } else if (players === 3) {
      document
        .getElementsByClassName('playerBoxSize')[0]
        .classList.add('playerBoxSize--version3');
      document
        .getElementsByClassName('playerBoxSize')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.playerOne}`);
      document
        .getElementsByClassName('playerOne')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.particleAnimation}`);
      document
        .getElementsByClassName('playerBoxSize')[0]
        .insertAdjacentHTML('beforeend', `${gameTemplates.playerTwo}`);
      document
        .getElementsByClassName('playerTwo')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.particleAnimation}`);
      document
        .getElementsByClassName('playerBoxSize')[0]
        .insertAdjacentHTML('beforeend', `${gameTemplates.playerThree}`);
      document
        .getElementsByClassName('playerThree')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.particleAnimation}`);
      document.querySelectorAll('.particle').forEach(function(element) {
        element.style.opacity = 0;
        if (mode === 1) {
          element.classList.add('particle-3--small');
        }
        if (mode === 2) {
          element.classList.add('particle-3--large');
        }
      });
    } else if (players === 4) {
      document
        .getElementsByClassName('playerBoxSize')[0]
        .classList.add('playerBoxSize--version4');
      document
        .getElementsByClassName('playerBoxSize')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.playerOne}`);
      document
        .getElementsByClassName('playerOne')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.particleAnimation}`);
      document
        .getElementsByClassName('playerBoxSize')[0]
        .insertAdjacentHTML('beforeend', `${gameTemplates.playerTwo}`);
      document
        .getElementsByClassName('playerTwo')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.particleAnimation}`);
      document
        .getElementsByClassName('playerBoxSize')[0]
        .insertAdjacentHTML('beforeend', `${gameTemplates.playerThree}`);
      document
        .getElementsByClassName('playerThree')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.particleAnimation}`);
      document
        .getElementsByClassName('playerBoxSize')[0]
        .insertAdjacentHTML('beforeend', `${gameTemplates.playerFour}`);
      document
        .getElementsByClassName('playerFour')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.particleAnimation}`);
      document.querySelectorAll('.particle').forEach(function(element) {
        element.style.opacity = 0;
        if (mode === 1) {
          element.classList.add('particle-4--small');
        }
        if (mode === 2) {
          element.classList.add('particle-4--large');
        }
      });
    }
  },

  turnInfo: `<div class="turnId"></div>`,

  turnLaunch: `<div class="turnCounter">Turn: 1</div>`,

  scoreInfo: `<div class="scoreId"></div>`,

  scoreLaunch: `<div class="scoreCounter">Score: 1</div>`,

  gameBoardInfo: `<section class="gameBoard"></section>`,

  gameModeLaunch: function(mode, players) {
    if (mode === 1) {
      document
        .getElementsByClassName('playerRecords')[0]
        .classList.add('cooperative');
      document
        .getElementsByClassName('turnId')[0]
        .insertAdjacentHTML('afterend', `${gameTemplates.scoreInfo}`);
      document
        .getElementsByClassName('scoreId')[0]
        .insertAdjacentHTML('beforeend', `${gameTemplates.scoreLaunch}`);
    } else {
      document
        .getElementsByClassName('playerRecords')[0]
        .classList.add('competitive');
      if (players >= 1) {
        document
          .getElementsByClassName('player__icon')[0]
          .insertAdjacentHTML('afterend', `${gameTemplates.scoreLaunch}`);
        document
          .getElementsByClassName('playerOne')[0]
          .children[1].classList.add('columnsTwo');
      }
      if (players >= 2) {
        document
          .getElementsByClassName('player__icon')[1]
          .insertAdjacentHTML('afterend', `${gameTemplates.scoreLaunch}`);
        document
          .getElementsByClassName('playerTwo')[0]
          .children[1].classList.add('columnsTwo');
      }
      if (players >= 3) {
        document
          .getElementsByClassName('player__icon')[2]
          .insertAdjacentHTML('afterend', `${gameTemplates.scoreLaunch}`);
        document
          .getElementsByClassName('playerThree')[0]
          .children[1].classList.add('columnsTwo');
      }
      if (players === 4) {
        document
          .getElementsByClassName('player__icon')[3]
          .insertAdjacentHTML('afterend', `${gameTemplates.scoreLaunch}`);
        document
          .getElementsByClassName('playerFour')[0]
          .children[1].classList.add('columnsTwo');
      }
    }
  },

  gameDifficultyInfo: `<div class="difficulty"></div>`,

  gameDifficultyLaunch: function(difficulty) {
    let cardInfo = `<div class="card">
                            <div class="card__face card__face--front"></div>
                            <div class="card__face card__face--back"></div>
                        </div>`;
    if (difficulty === 1) {
      document
        .getElementsByClassName('difficulty')[0]
        .classList.add('easyMode');
      return cardInfo.repeat(8);
    } else if (difficulty === 2) {
      document
        .getElementsByClassName('difficulty')[0]
        .classList.add('intermediateMode');
      return cardInfo.repeat(16);
    } else if (difficulty === 3) {
      document
        .getElementsByClassName('difficulty')[0]
        .classList.add('expertMode');
      return cardInfo.repeat(24);
    } else if (difficulty === 4) {
      document
        .getElementsByClassName('difficulty')[0]
        .classList.add('masterMode');
      return cardInfo.repeat(32);
    } else {
      return console.log('Error - Game Selection Is Unavailable');
    }
  },

  gameOverInfo: `<section class="gameOver"></section>`,

  gameOverResponse: `<p class=gameOver__title></p>
        <p class=gameOver__winner></p>
        <p class=gameOver__message></p>
        <p class=gameOver__restart></p>
        <p class=gameOver__exit></p>`,

  particleAnimation: `<div id="particle-container">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>`
};
