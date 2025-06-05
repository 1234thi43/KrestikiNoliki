import styles from './app.module.css';
import { Information } from './GameLayout/Information/Information'
import { Field } from './GameLayout/Field/Field'
import PropTypes from 'prop-types';

export const AppLayout = ({ status, currentPlayer, onCellClick, field, setField, resetField, winner }) => {
	return(
		<div className={styles.app}>
			<Information
				status={status}
				currentPlayer={currentPlayer}
				winner={winner}
			/>
			<Field
				status={status}
				currentPlayer={currentPlayer}
				onCellClick={onCellClick}
				field={field}
				setField={setField}
			/>
			<button className={styles.restartButton} onClick={resetField}> Начать заново </button>
		</div>
	);
}

AppLayout.propTypes = {
	status: PropTypes.number,
	currentPlayer: PropTypes.number,
	onCellClick: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.array,
	resetField: PropTypes.array,
	winner: PropTypes.string,
}
