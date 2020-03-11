import { create, all } from 'mathjs';
import { animationReference } from '../animationComponents/animationReference';

const config = {};
const math = create(all, config);
const cardId = document.getElementsByClassName('card');
const cardFaceFront = document.getElementsByClassName('card__face--front');
const cardFaceBack = document.getElementsByClassName('card__face--back');

const playerId = document.getElementsByClassName('playerId');
const comboCounterEl = document.getElementsByClassName('player__combo');
const scoreCounterEl = document.getElementsByClassName('scoreCounter');
const turnCounterEl = document.getElementsByClassName('turnCounter');
const cardActive = document.getElementsByClassName('active');
const gameSection = document.getElementsByTagName('section');
const gameOver = document.getElementsByClassName('gameOver');
const gameOverTitle = document.getElementsByClassName('gameOver__title');
const gameOverWinner = document.getElementsByClassName('gameOver__winner');
const gameOverMessage = document.getElementsByClassName('gameOver__message');
const gameOverRestart = document.getElementsByClassName('gameOver__restart');
const gameOverExit = document.getElementsByClassName('gameOver__exit');

export let gameUpdates = {
  match: function() {
    let scoreCounter = [1, 1, 1, 1];
    let turnCounter = 1;
    let scoreSwapper = 0;
    let playerCounter = 0;
    let combo = [1, 1, 1, 1];
    let comboCo = 1;
    let complete = 0;

    const cards = document.querySelectorAll('.card');

    for (let i = 0; i < cardId.length; i++) {
      cardId[i].addEventListener('click', function() {
        if (i % 2 === 0) {
          if (
            cardId[i].classList.contains(`${i}`) &&
            cardId[i + 1].classList.contains(`${i}`)
          ) {
            cards.forEach(element => (element.style.pointerEvents = 'none'));
            setTimeout(() => {
              cards.forEach(
                element => (element.style.pointerEvents = 'initial')
              );
              cardId[i].style.display = 'none';
              cardId[i + 1].style.display = 'none';
            }, 2000);
            cardId[i].classList.remove(`active`);
            cardId[i + 1].classList.remove(`active`);
            if (document.getElementsByClassName('cooperative').length > 0) {
              scoreCounter[scoreSwapper] =
                scoreCounter[scoreSwapper] + 1 * comboCo;
              scoreCounterEl[
                scoreSwapper
              ].innerHTML = `Score: ${scoreCounter[scoreSwapper]}`;
              comboCo *= 2;
              for (let i = 0; i < playerId.length; i++) {
                comboCounterEl[i].innerHTML = `Combo Bonus: x${comboCo}`;
              }
            } else {
              scoreCounter[scoreSwapper] =
                scoreCounter[scoreSwapper] + 1 * combo[playerCounter];
              scoreCounterEl[
                scoreSwapper
              ].innerHTML = `Score: ${scoreCounter[scoreSwapper]}`;
              combo[playerCounter] *= 2;
              comboCounterEl[
                playerCounter
              ].innerHTML = `Combo Bonus: x${combo[playerCounter]}`;
            }
            animationReference.particles(combo, comboCo, playerCounter);
            ++complete;
            gameUpdates.complete(complete, scoreCounter, scoreSwapper);
            ++scoreSwapper;
            playerId[playerCounter].classList.toggle('playerIndicator');
            ++playerCounter;
            if (scoreSwapper === scoreCounterEl.length) {
              scoreSwapper = 0;
            }
            if (playerCounter === playerId.length) {
              playerCounter = 0;
            }
            playerId[playerCounter].classList.toggle('playerIndicator');
          }
        } else {
          if (
            cardId[i].classList.contains(`${i - 1}`) &&
            cardId[i - 1].classList.contains(`${i - 1}`)
          ) {
            cards.forEach(element => (element.style.pointerEvents = 'none'));
            setTimeout(() => {
              cards.forEach(
                element => (element.style.pointerEvents = 'initial')
              );
              cardId[i - 1].style.display = 'none';
              cardId[i].style.display = 'none';
            }, 2000);
            cardId[i - 1].classList.remove(`active`);
            cardId[i].classList.remove(`active`);
            if (document.getElementsByClassName('cooperative').length > 0) {
              scoreCounter[scoreSwapper] =
                scoreCounter[scoreSwapper] + 1 * comboCo;
              scoreCounterEl[
                scoreSwapper
              ].innerHTML = `Score: ${scoreCounter[scoreSwapper]}`;
              comboCo *= 2;
              for (let i = 0; i < playerId.length; i++) {
                comboCounterEl[i].innerHTML = `Combo Bonus: x${comboCo}`;
              }
            } else {
              scoreCounter[scoreSwapper] =
                scoreCounter[scoreSwapper] + 1 * combo[playerCounter];
              scoreCounterEl[
                scoreSwapper
              ].innerHTML = `Score: ${scoreCounter[scoreSwapper]}`;
              combo[playerCounter] *= 2;
              comboCounterEl[
                playerCounter
              ].innerHTML = `Combo Bonus: x${combo[playerCounter]}`;
            }
            animationReference.particles(combo, comboCo, playerCounter);
            ++complete;
            gameUpdates.complete(complete, scoreCounter, scoreSwapper);
            ++scoreSwapper;
            playerId[playerCounter].classList.toggle('playerIndicator');
            ++playerCounter;
            if (scoreSwapper === scoreCounterEl.length) {
              scoreSwapper = 0;
            }
            if (playerCounter === playerId.length) {
              playerCounter = 0;
            }
            playerId[playerCounter].classList.toggle('playerIndicator');
          }
        }
      });
    }
    for (let i = 0; i < cardId.length; i++) {
      cardId[i].addEventListener('click', function() {
        if (
          cardActive.length === 2 &&
          !(
            cardId[i].classList.contains(`${i}`) &&
            cardId[i + 1].classList.contains(`${i}`)
          )
        ) {
          cards.forEach(element => (element.style.pointerEvents = 'none'));
          setTimeout(() => {
            cards.forEach(element => (element.style.pointerEvents = 'initial'));
          }, 2000);
          if (turnCounterEl.length > 0) {
            turnCounterEl[0].innerHTML = `Turn: ${++turnCounter}`;
          }
          combo[playerCounter] = 1;
          comboCo = 1;
          if (document.getElementsByClassName('cooperative').length > 0) {
            for (let i = 0; i < playerId.length; i++)
              comboCounterEl[i].innerHTML = `Combo Bonus: x${comboCo}`;
          } else {
            comboCounterEl[
              scoreSwapper
            ].innerHTML = `Combo Bonus: x${combo[playerCounter]}`;
          }
          comboCounterEl[playerCounter].classList.remove('flux');
          playerId[playerCounter]
            .querySelectorAll('.particle')
            .forEach(function(element) {
              element.style.opacity = 0;
              element.style.animationDuration = '60s';
            });
          ++scoreSwapper;
          playerId[playerCounter].classList.toggle('playerIndicator');
          ++playerCounter;
          for (let i = 0; i < cardId.length; i++) {
            cardId[i].classList.remove(`active`);
            cardId[i].classList.remove(`${i}`);
            cardId[i].classList.remove(`${i - 1}`);
            setTimeout(function() {
              cardId[i].classList.remove('flip');
              cardId[i].classList.remove('flip');
            }, 1500);
          }
          if (scoreSwapper === scoreCounterEl.length) {
            scoreSwapper = 0;
          }
          if (playerCounter === playerId.length) {
            playerCounter = 0;
          }
          playerId[playerCounter].classList.toggle('playerIndicator');
        }
      });
    }
  },

  complete: function(complete, scoreCounter, scoreSwapper) {
    if (complete == cardId.length / 2) {
      setTimeout(() => {
        document.querySelector('body').style.opacity = 0;
      }, 4000);
      setTimeout(() => {
        document.querySelector('body').style.opacity = 100;
      }, 6000);
      setTimeout(function() {
        for (let i = 0; i < gameSection.length; i++) {
          gameSection[i].style.display = 'none';
        }
        gameOver[0].style.display = 'grid';
        gameOverTitle[0].innerHTML = 'GAME OVER';
        gameOverRestart[0].innerHTML = `RESTART`;
        gameOverExit[0].innerHTML = `EXIT`;
        let highScore = Math.max(...scoreCounter);
        let repeatScore = math.mode(...scoreCounter);
        if (document.getElementsByClassName('cooperative').length > 0) {
          gameOverWinner[0].innerHTML = `Congratulations!`;
          gameOverMessage[0].innerHTML = `Completed with a score of ${scoreCounter[scoreSwapper]}!`;
        } else {
          for (let i = 0; i < playerId.length; i++) {
            if (
              scoreCounter[i] === highScore &&
              !repeatScore.includes(highScore)
            ) {
              gameOverWinner[0].innerHTML = `Congratulations Player ${i + 1}!`;
            }
            if (
              scoreCounter[i] === highScore &&
              repeatScore.includes(highScore)
            ) {
              gameOverWinner[0].innerHTML = `Draw!`;
            }
          }
        }
      }, 5000);
    }
  }
};
