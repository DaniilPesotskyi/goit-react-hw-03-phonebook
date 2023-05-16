import React, { Component } from "react";
import css from './ContactsFilter.module.css'

class ContactsFilter extends Component {

    onChangeQuery = e => {
        this.props.onFilter(e.currentTarget.value)
    }

    render() {
        return (
            <div className={css.inputField}>
                <input 
                    autoComplete="off"
                    className={css.input}
                    type="text" 
                    placeholder="."
                    name="query" 
                    id="query" 
                    onChange={e => this.onChangeQuery(e)}
                />
                <label className={css.label} htmlFor="query">Search</label>
            </div>
        )
    }
}

export default ContactsFilter