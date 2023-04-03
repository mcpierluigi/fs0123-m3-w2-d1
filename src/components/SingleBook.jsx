import { Component } from "react";
import { Card, Badge } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleBook = () => {
    this.setState((prevstate) => ({
      selected: !prevstate.selected,
    }));
  };

  render() {
    const selectedStyle = {
      border: this.state.selected ? "4px solid red" : "2px solid black",
    };
    return (
      <Card
        onClick={this.toggleBook}
        className="CardBook"
        style={selectedStyle}
      >
        <Card.Img
          className="CardImg"
          variant="top"
          src={this.props.img}
        ></Card.Img>
        <Card.Body className="CardBody">
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            <Badge className="p-2 my-2" bg="danger">
              {this.props.price}$
            </Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
