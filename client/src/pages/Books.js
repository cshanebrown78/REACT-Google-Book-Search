import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import SearchForm from "../components/SearchForm"
// import BookDetail from "../components/List";

class Books extends Component {
  state = {
    books: [],
    result: {},
    search: "",
    title: "",
    author: "",
    synopsis: ""
    };

  // componentDidMount() {
  //   this.searchBooks("Harry Potter");
  // }

  searchBooks = query => {
    console.log("query= " + query)
    API.search(query)
      .then(res => this.setState({ books: res.data.items })
      )
      .catch(err => console.log(err));
  };

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search)
  }

  render() {
    return (
      <Container fluid>
          <div className="card">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div><br />
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return(
                    // <div>
                      <ListItem
                        key={book.id}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                        synopsis={book.volumeInfo.description}
                        src={book.volumeInfo.imageLinks.thumbnail}
                      />
                    // </div>
                    )
                })} 
            </List>
            ) : (
              <h3>Please search for a book</h3>
            )}
              
          
             
      </Container>      

    );
  }
}

export default Books;