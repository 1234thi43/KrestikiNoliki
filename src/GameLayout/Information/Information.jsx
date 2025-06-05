import { InformationLayout } from "./InformationLayout"
import { PLAYER } from "../../constants/player"
import { STATUS } from "../../constants/status"
import PropTypes from 'prop-types';

export const Information = ({ status, currentPlayer, winner }) => {
    const ACTION = {
        [STATUS.TURN]: 'Ходит',
        [STATUS.WIN]: 'Победил',
		[STATUS.DRAW]: 'Ничья',
    }
    const PLAYER_NAME = {
        [PLAYER.X]: 'Крестик',
        [PLAYER.O]: 'Нолик',
    }

    let information;

    if (status === STATUS.WIN) {
        const playerName = winner === PLAYER.X ? PLAYER_NAME[PLAYER.X] : PLAYER_NAME[PLAYER.O];
        information = `${ACTION[STATUS.WIN]} - ${playerName}`;
    } else if (status === STATUS.DRAW) {
        information = ACTION[STATUS.DRAW];
    } else {
        const playerName = currentPlayer === PLAYER.X ? PLAYER_NAME[PLAYER.X] : PLAYER_NAME[PLAYER.O];
        information = `${ACTION[STATUS.TURN]} - ${playerName}`;
    }

    return <InformationLayout information={information}/>
}

Information.propTypes = {
	status: PropTypes.number,
	currentPlayer: PropTypes.number,
	winner: PropTypes.string,
}
