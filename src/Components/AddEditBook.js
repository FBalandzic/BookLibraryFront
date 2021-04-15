import React from "react"
import { Link } from "react-router-dom";
import "./Books.css";

export class AddEditBook extends React.Component {
    constructor(props) {
        super(props);

        const { book, action } = props.location.state;
        this.state = {
            ...book,
            action,
        };
    }

    isFormValid() {
        return !this.isIsbnValid() || !this.isTitleValid() || !this.isAuthorValid || !this.isGenreValid;
    }

    handleAdd = async () => {
        const { isbn, title, author, genre } = this.state;
        if (this.isFormValid()) {
            return;
        }

        const response = await fetch('https://localhost:44378/api/Book', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isbn, title, author, genre
            })
        });
        this.props.history.push('/Books');
    };

    handleEdit = async () => {
        const { isbn, title, author, genre, bookID } = this.state;
        if (this.isFormValid()) {
            return;
        }
        const response = await fetch('https://localhost:44378/api/Book/updateBook', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isbn, title, author, genre, bookID,
            })
        });
        this.props.history.push('/Books');
    };

    isAuthorValid() {
        return this.state.author !== "";
    };

    isTitleValid() {
        return this.state.title !== "";
    };

    isGenreValid() {
        return this.state.genre !== "";
    };

    isIsbnValid() {
        return /^\d{13}$/.test(this.state.isbn);
    };

    render() {
        const { isbn = '', title = '', author = '', genre = '', action } = this.state;

        return (
            <main>
                <div>
                    <h2>{action === 'add' ? 'Add' : 'Edit'} book</h2>
                    <p>*Mandatory field</p>
                </div>
                <span>
                    <p>
                        ISBN*
                        <input
                            type="text"
                            name="isbn"
                            value={isbn}
                            pattern="\d{13}"
                            onChange={event => this.setState({ isbn: event.target.value })}
                        />
                    </p>
                    {!this.isIsbnValid() && (
                        <p style={{ color: "red" }}>Invalid ISBN</p>
                    )}


                </span>

                <span>
                    <p>
                        Title*
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={event => this.setState({ title: event.target.value })}
                        />
                    </p>
                    {!this.isTitleValid() && (
                        <p style={{ color: "red" }}>Cannot be empty</p>
                    )}
                </span>
                <span>
                    <p>
                        Author*
                        <input
                            type="text"
                            name="author"
                            value={author}
                            onChange={event => this.setState({ author: event.target.value })}
                        />
                    </p>
                    {!this.isAuthorValid() && (
                        <p style={{ color: "red" }}>Cannot be empty</p>
                    )}
                </span>

                <span>
                    <p>
                        Genre*
                        <input
                            type="text"
                            name="genre"
                            value={genre}
                            onChange={event => this.setState({ genre: event.target.value })}
                        />
                    </p>
                    {!this.isGenreValid() && (
                        <p style={{ color: "red" }}>Cannot be empty</p>
                    )}
                </span>
                <div>
                    <button onClick={action === 'add' ? this.handleAdd : this.handleEdit}>Confirm</button>
                    <Link to="/Books">cancel</Link>
                </div>
            </main>
        )
    }
}