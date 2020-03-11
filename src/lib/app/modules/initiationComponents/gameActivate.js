import { gameCreate } from '../creationComponents/gameCreate';
import { gameTemplates } from '../creationComponents/gameTemplates';
import { userCardEvents } from '../userComponents/userCardEvents';
import { userOptionEvents } from '../userComponents/userOptionEvents';
import $ from 'jquery';

export let gameActivate = {
  startTap: function(players, mode, difficulty) {
    document.getElementById('startGame').addEventListener('click', () => {
      document.getElementById('startGame').style.pointerEvents = 'none';
      document.querySelector('body').style.opacity = 0;
      setTimeout(() => {
        document.querySelector('body').style.opacity = 100;
      }, 5000);
      setTimeout(() => {
        $('body-player-info').replaceWith(`${gameTemplates.playerRecordsInfo}`);
        document
          .getElementsByClassName('playerRecords')[0]
          .insertAdjacentHTML('afterbegin', `${gameTemplates.playerInfo}`);
        gameTemplates.playerLaunch(mode, players);
        document
          .getElementsByClassName('playerRecords')[0]
          .insertAdjacentHTML('afterend', `${gameTemplates.gameBoardInfo}`);
        document
          .getElementsByClassName('gameBoard')[0]
          .insertAdjacentHTML(
            'afterbegin',
            `${gameTemplates.gameDifficultyInfo}`
          );
        document
          .getElementsByClassName('difficulty')[0]
          .insertAdjacentHTML(
            'afterbegin',
            `${gameTemplates.gameDifficultyLaunch(difficulty)}`
          );
        if (mode === 1) {
          document
            .getElementsByClassName('playerRecords')[0]
            .insertAdjacentHTML('beforeend', `${gameTemplates.turnInfo}`);
          document
            .getElementsByClassName('turnId')[0]
            .insertAdjacentHTML('beforeend', `${gameTemplates.turnLaunch}`);
        }
        document
          .getElementsByClassName('playerRecords')[0]
          .insertAdjacentHTML('beforeend', `${gameTemplates.navigationInfo}`);
        document
          .getElementsByClassName('navigation')[0]
          .insertAdjacentHTML('beforeend', `${gameTemplates.navigationLaunch}`);
        document
          .getElementsByClassName('gameBoard')[0]
          .insertAdjacentHTML('afterend', `${gameTemplates.gameOverInfo}`);
        document
          .getElementsByClassName('gameOver')[0]
          .insertAdjacentHTML(
            'afterbegin',
            `${gameTemplates.gameOverResponse}`
          );
        gameTemplates.gameModeLaunch(mode, players);
        gameCreate.loadGame();
        document
          .getElementsByClassName('navigation__items')[0]
          .children[0].addEventListener('click', () => {
            document.getElementsByClassName(
              'navigation__items'
            )[0].children[0].style.pointerEvents = 'none';
            gameActivate.restartTap(players, mode, difficulty);
          });
        document
          .getElementsByClassName('gameOver__restart')[0]
          .addEventListener('click', () => {
            document.getElementsByClassName(
              'gameOver__restart'
            )[0].style.pointerEvents = 'none';
            gameActivate.restartTap(players, mode, difficulty);
          });
        document
          .getElementsByClassName('navigation__items')[0]
          .children[1].addEventListener('click', () => {
            document.getElementsByClassName(
              'navigation__items'
            )[0].children[1].style.pointerEvents = 'none';
            gameActivate.exitTap();
          });
        document
          .getElementsByClassName('gameOver__exit')[0]
          .addEventListener('click', () => {
            document.getElementsByClassName(
              'gameOver__exit'
            )[0].style.pointerEvents = 'none';
            gameActivate.exitTap(players, mode, difficulty);
          });
      }, 5000);
    });
  },

  restartTap: function(players, mode, difficulty) {
    document.querySelector('body').style.opacity = 0;
    setTimeout(() => {
      document.querySelector('body').style.opacity = 100;
    }, 5000);
    setTimeout(() => {
      $('section').remove();
      $('body').prepend('<body-player-info></body-player-info>');
      $('body-player-info').replaceWith(`${gameTemplates.playerRecordsInfo}`);
      document
        .getElementsByClassName('playerRecords')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.playerInfo}`);
      gameTemplates.playerLaunch(mode, players);
      document
        .getElementsByClassName('playerRecords')[0]
        .insertAdjacentHTML('afterend', `${gameTemplates.gameBoardInfo}`);
      document
        .getElementsByClassName('gameBoard')[0]
        .insertAdjacentHTML(
          'afterbegin',
          `${gameTemplates.gameDifficultyInfo}`
        );
      document
        .getElementsByClassName('difficulty')[0]
        .insertAdjacentHTML(
          'afterbegin',
          `${gameTemplates.gameDifficultyLaunch(difficulty)}`
        );
      if (mode === 1) {
        document
          .getElementsByClassName('playerRecords')[0]
          .insertAdjacentHTML('beforeend', `${gameTemplates.turnInfo}`);
        document
          .getElementsByClassName('turnId')[0]
          .insertAdjacentHTML('beforeend', `${gameTemplates.turnLaunch}`);
      }
      document
        .getElementsByClassName('playerRecords')[0]
        .insertAdjacentHTML('beforeend', `${gameTemplates.navigationInfo}`);
      document
        .getElementsByClassName('navigation')[0]
        .insertAdjacentHTML('beforeend', `${gameTemplates.navigationLaunch}`);
      document
        .getElementsByClassName('gameBoard')[0]
        .insertAdjacentHTML('afterend', `${gameTemplates.gameOverInfo}`);
      document
        .getElementsByClassName('gameOver')[0]
        .insertAdjacentHTML('afterbegin', `${gameTemplates.gameOverResponse}`);
      gameTemplates.gameModeLaunch(mode, players);
      gameCreate.loadGame();
      document
        .getElementsByClassName('navigation__items')[0]
        .children[0].addEventListener('click', () => {
          document.getElementsByClassName(
            'navigation__items'
          )[0].children[0].style.pointerEvents = 'none';
          gameActivate.restartTap(players, mode, difficulty);
        });
      document
        .getElementsByClassName('gameOver__restart')[0]
        .addEventListener('click', () => {
          document.getElementsByClassName(
            'gameOver__restart'
          )[0].style.pointerEvents = 'none';
          gameActivate.restartTap(players, mode, difficulty);
        });
      document
        .getElementsByClassName('navigation__items')[0]
        .children[1].addEventListener('click', () => {
          document.getElementsByClassName(
            'navigation__items'
          )[0].children[1].style.pointerEvents = 'none';
          gameActivate.exitTap();
        });
      document
        .getElementsByClassName('gameOver__exit')[0]
        .addEventListener('click', () => {
          document.getElementsByClassName(
            'gameOver__exit'
          )[0].style.pointerEvents = 'none';
          gameActivate.exitTap(players, mode, difficulty);
        });
    }, 5000);
  },

  exitTap: function() {
    document.querySelector('body').style.opacity = 0;
    setTimeout(() => {
      document.querySelector('body').style.opacity = 100;
    }, 5000);
    new Promise(resolve => {
      setTimeout(() => {
        resolve(
          $('section').remove(),
          $('body').load('pair-up.html body-player-info')
        );
      }, 4000);
    }).then(() => {
      setTimeout(() => {
        userOptionEvents.openOptions(),
          userOptionEvents.closeOptions(),
          userCardEvents.homeTap();
      }, 1000);
    });
  }
};
