import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";



class Saved extends Component {
  state = {
    books: [],
    savedBooks: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then((res) =>
        this.setState({ books: res.data })
      )
      .catch((err) => console.log(err));
  };

  deleteBook = (id) => {
    API.deleteBook(id)
      .then((res) => this.loadBooks())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <h2>Saved Books</h2>
        {this.state.books.length ? (
        //   <h2>Saved Books</h2>
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                <div className="googlebooks">
                  <Row>
                    <Col size="md-10">
                      <a key={book._id + book.id} 
                        href={book.link}
                      >
                        <strong>{book.title}</strong>
                      </a>
                      <p>
                        Written by:{" "}
                        {book.author.join(", ")}
                      </p>
                    </Col>
                    <Col size="md-2">
                      <div className="save-btn">
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} btntype="danger">Delete</DeleteBtn>
                      </div>
                    </Col>
                  </Row>
                  <p>
                    <img
                      align="left"
                      style={{ paddingRight: 10 }}
                      src={book.thumbnail}
                      alt="Book"
                    />
                    {book.synopsis}
                  </p>
                </div>
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Saved Books</h3>
        )}
      </Container>
    );
  }
}

export default Saved;
