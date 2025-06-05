import { FieldLayout } from "./FieldLayout"
import PropTypes from 'prop-types';

export const Field = ({ onCellClick, field }) => {
    return <FieldLayout field={field} onCellClick={onCellClick}/>
}

Field.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
}
