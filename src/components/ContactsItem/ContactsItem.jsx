import css from './ContactsItem.module.css'

const ContactsItem = ({id, number, name, onDelete}) => {
    return (
        <li className={css.item}>
            <p className={css.name}>{name}</p>
            <p className={css.number}>{number}</p>
            <button className={css.button} type="button" onClick={() => onDelete(id)}>Delete</button>
        </li>
    )
}

export default ContactsItem