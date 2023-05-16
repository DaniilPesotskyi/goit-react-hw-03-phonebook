import css from './ContactsList.module.css'
import ContactsItem from '../ContactsItem/ContactsItem'
const ContactsList = ({contacts, onDelete, children, filter}) => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>My Contacts</h2>
            {children}
            <ul className={css.list}>
                {contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
                .map(({id, name, number}) => (
                    <ContactsItem key={id} id={id} name={name} number={number} onDelete={onDelete}/>
                ))}
            </ul>
        </div>
    )
}

export default ContactsList