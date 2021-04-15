import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Books.css"

export class Books extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            allBooks: []
        };
    }

    fetchBooks() {
        fetch('https://localhost:44378/api/Book')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    loading: false,
                    allBooks: data
                })
            });
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.fetchBooks();
    }

    handleDelete = async (bookID) => {
        await fetch('https://localhost:44378/api/Book/deleteBook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "bookID": bookID
            })
        });

        this.fetchBooks();
    }


    renderTableData() {
        return this.state.allBooks.map((book) => {
            const { bookID, isbn, title, author, genre, isDeleted } = book //destructuring
            return (
                <tr key={bookID}>
                    <td>{isbn}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>{genre}</td>
                    <td><Link to={{ pathname: '/AddEditBook', state: { book, action: 'edit' } }}>Edit</Link></td>
                    <td><button onClick={() => this.handleDelete(bookID)}>Delete</button></td>
                </tr>
            )
        })
    }
    //https://localhost:44378/api/Book
    render() {
        const user = this.props.user;

        return (
            <main>
                <h2>Books</h2>
                <div>
                    <table id='allBooks' style={{ borderCollapse: "collapse" }}>

                        <tbody>
                            <tr>
                                <th>isbn</th>
                                <th>title</th>
                                <th>author</th>
                                <th>genre</th>
                                <th>actions</th>
                            </tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    <Link to={{ pathname: '/AddEditBook', state: { action: 'add' } }}>Add</Link>
                </div>
            </main>
        )
    }
}