import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
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
    savedBooks: [],
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

  saveBooks = book => {
    API.saveBook(book)
      .then(res => {
        const currentBook = this.state.books;
        const bookSave = currentBook.filter(book => book.id !== res.data.id);
        this.setState({
          savedBooks: bookSave
        });
      })
      .catch(err => console.log(err));
    }
    

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
                  <Container fluid>
                    <List>
                      {this.state.books.map(book => {
                        return(
                          <Row>
                            <Col size="md-12">
                              <div className="card">
                                <ListItem key={book.id}>
                                  <div className="googlebooks">
                                    <Row>
                                      <Col size="md-10">
                                        <a
                                          // key={"" + index + book.id}
                                          href={book.volumeInfo.infoLink}
                                        >
                                          {book.volumeInfo.title}
                                        </a>
                                        <p>Written by: {book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}</p>
                                      </Col>
                                      <Col size="md-2">
                                        <div className="save-btn">
                                          <SaveBtn 
                                            btntype="info"
                                            onClick={() => this.saveBooks({
                                              title: book.volumeInfo.title,
                                              author: book.volumeInfo.authors,
                                              synopsis: book.volumeInfo.description,
                                              thumbnail: book.volumeInfo.imageLinks.thumbnail,
                                              link: book.volumeInfo.infoLink,
                                              _id: book.id
                                            })}
                                          >
                                            Save
                                          </SaveBtn>
                                        </div>
                                      </Col>
                                      
                                    </Row>
                                    
                                    <p>
                                      <img align="left" style={{paddingRight:10}}
                                        src={book.volumeInfo.imageLinks.thumbnail} alt="Book"
                                      />
                                      {book.volumeInfo.description}
                                    </p>
                                  </div>
                                  

                                </ListItem>
                            </div>
                            </Col>
                            
                          </Row>
 
                          
                        )
                        
                                            
                      })} 
                    </List>
                  </Container>
                
              

              ) : (
              <h3>Please search for a book</h3>
              )}
      </Container>
    )
    
  }
}

export default Books;