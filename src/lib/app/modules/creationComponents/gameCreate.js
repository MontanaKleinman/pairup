import { cardPictures } from '../cardComponents/cardPictures';
import { cardPlacement } from '../cardComponents/cardPlacement';
import { cardToggle } from '../cardComponents/cardToggle';
import { userCardEvents } from '../userComponents/userCardEvents';
import { gameUpdates } from '../updateComponents/gameUpdates';

export let gameCreate = {
  loadGame: async function() {
    cardPictures.print(),
      cardPlacement.stack(),
      cardPlacement.shuffle(),
      cardPlacement.switch();
    await cardToggle.twoSeconds();
    await cardToggle.eightSeconds();
    userCardEvents.cardTap();
    gameUpdates.match();
  }
};
