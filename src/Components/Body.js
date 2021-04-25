import React, { Component } from "react"
import "./Books.css"

export class Body extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <main>
                <div className="BodyDiv">
                    <p>Welcome to Elan<span className="orangeText">Wave</span> bookstore!</p>
                    <br />
                    <p>Here you can browse our book database, add new books, edit or delete the old ones.
                    Basically, you can do anything!</p>
                    <br />
                    <p>To browse the contents, please sign in, or sign up for an account if you don't have one.</p>
                </div>
            </main>
        )
    }
}
