import { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
    asin: "",
  };

  toggleBook = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
      asin: !prevState.selected ? this.props.asin : "hola",
    }));
  };

  render() {
    const selectedStyle = {
      border: this.state.selected ? "4px solid red" : "2px solid black",
    };
    return (
      <Card onClick={this.toggleBook} className="CardBook" style={selectedStyle}>
        <Card.Img className="CardImg" variant="top" src={this.props.img}></Card.Img>
        <Card.Body className="CardBody">
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            <Badge className="p-2 my-2" bg="danger">
              {this.props.price}$
            </Badge>
          </Card.Text>
          {this.state.selected && <CommentArea asin={this.props.asin} />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
