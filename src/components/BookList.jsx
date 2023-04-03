import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} className="mt-3">
            {this.props.books.map(book => (
              <Col key={book.asin} className="pb-4 px-3">
                <SingleBook img={book.img} title={book.title} price={book.price} asin={book.asin} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
