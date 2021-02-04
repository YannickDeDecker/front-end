import React from 'react'

export default function Contact() {
    return (
        <div className="contact-page">
            <h1>Why don't you leave a message?</h1>
            <form>
                <label>Name:</label>
                <input type="text"/>
                <label>Email:</label>
                <input type="text"/>
                <label>Phone:</label>
                <input type="text"/>
                <label>Message:</label>
                <textarea></textarea>
                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}
