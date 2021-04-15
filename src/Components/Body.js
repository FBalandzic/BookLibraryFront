import React, {Component} from "react"
import "./Books.css"

export class Body extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <main>
            <div className="BodyDiv" style={{textAlign: 'center'}}> 
                <p>Welcome to ElanWave bookstore!</p>
                <p/>
                <p>Here you can browse our book database, add new books, edit or delete the old ones.
                    Basically, you can do anything!
                </p>
            </div>
            </main>
        )
    }
}
