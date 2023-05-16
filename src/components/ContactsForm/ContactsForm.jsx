import React, { Component } from "react";
import { nanoid } from 'nanoid'
import css from './ContactsForm.module.css';

class ContactsForm extends Component {
    
    state = {
        id: '',
        name: '',
        number: '',
    }

    onInputChange = e => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
        this.setState({id: nanoid()})
    }

    onFormSubmit = e => {
        e.preventDefault()

        this.props.onSubmit(this.state)
        
        this.setState({id: '', name: '', number: ''})
    }

    render() {
        return (
            <>
                <h2 className={css.title}>Add new contact</h2>
                <form className={css.form} autoComplete="off" onSubmit={e => this.onFormSubmit(e)}>
                    <div className={css.inputField}>
                        <input
                            className={css.input} 
                            placeholder="."
                            type="text" 
                            name="name" 
                            id="name" 
                            value={this.state.name} 
                            onChange={e => this.onInputChange(e)}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                        <label htmlFor="name" className={css.label}>Name</label>
                    </div>
                    <div className={css.inputField}>
                        <input
                            className={css.input} 
                            placeholder="."
                            type="tel" 
                            name="number" 
                            id="number" 
                            value={this.state.number} 
                            onChange={e => this.onInputChange(e)}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required 
                        />
                        <label htmlFor="number" className={css.label}>Number</label>
                    </div>
                    <button className={css.button} type="submit">Add contact</button>
                </form>
            </>
        )
    }
}

export default ContactsForm