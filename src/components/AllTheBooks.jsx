import { Component } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import books from "../data/horror.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {books.map((book, index) => (
            <Col sm={3} key={`book-${index}`} className="my-1">
              <Card className="CardBook">
                <Card.Img className="CardImg" variant="top" src={book.img} />
                <Card.Body className="CardBody">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}</Card.Text>
                  <Button className="Btn" variant="success">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
