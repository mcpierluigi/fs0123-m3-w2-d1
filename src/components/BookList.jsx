import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <>
        <Row xs={1} sm={2} md={3} lg={4} className="mt-3">
          {this.props.books.map((book) => (
            <Col key={book.asin} className="pb-5 px-5">
              <SingleBook img={book.img} title={book.title} price={book.price} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
