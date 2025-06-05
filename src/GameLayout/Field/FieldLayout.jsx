import styles from './Field.module.css'

export const FieldLayout = ({ field, onCellClick }) => (
    <div className={styles.field}> {field.map((cellPlayer, index) =>
        <button
            key={index}
            className={styles.cell}
            onClick={() => onCellClick(index)}
        >
            {cellPlayer}
        </button>
    )} </div>
)
