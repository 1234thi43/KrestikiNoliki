import { useState, useEffect } from 'react';
import { AppLayout } from './App-layout';
import { STATUS } from './constants/status';
import { PLAYER } from './constants/player';
import { PLAYER_SIGN } from './constants/player-sign';

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // горизонтальные линии
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // вертикальные линии
  [0, 4, 8], [2, 4, 6]             // диагонали
];

const App = () => {
    const [status, setStatus] = useState(STATUS.TURN);
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER.X);
    const [field, setField] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        checkGameResult();
    }, [field]);

    const checkGameResult = () => {
        for (const pattern of WIN_PATTERNS) {
            const [a, b, c] = pattern;
            if (field[a] && field[a] === field[b] && field[a] === field[c]) {
                const winnerPlayer = field[a] === PLAYER_SIGN[PLAYER.X] ? PLAYER.X : PLAYER.O;
                setWinner(winnerPlayer);
                setStatus(STATUS.WIN);
                return;
            }
        }

        if (!field.includes('') && status !== STATUS.WIN) {
            setStatus(STATUS.DRAW);
        }
    };

    const onCellClick = (index) => {
        if (status !== STATUS.TURN || field[index]) return;

        const newField = [...field];
        newField[index] = PLAYER_SIGN[currentPlayer];
        setField(newField);

        if (status === STATUS.TURN) {
            setCurrentPlayer(currentPlayer === PLAYER.X ? PLAYER.O : PLAYER.X);
        }
    };

    const resetField = () => {
        setField(Array(9).fill(''));
        setCurrentPlayer(PLAYER.X);
        setStatus(STATUS.TURN);
        setWinner(null);
    };

    return (
        <AppLayout
            status={status}
            setStatus={setStatus}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            onCellClick={onCellClick}
            field={field}
            setField={setField}
            resetField={resetField}
            winner={winner}
        />
    );
};

export default App;
