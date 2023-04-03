import { Component } from "react";
import { Badge, ListGroupItem } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      <ListGroupItem className="Commenti text-black">
        <span>Autore: {this.props.author}</span>
        <span>Commento: {this.props.comment}</span>
        <span className="d-flex justify-content-between">
          Rate:
          <Badge className="me-2" bg="danger">
            {this.props.rate}
          </Badge>
        </span>
      </ListGroupItem>
    );
  }
}

export default CommentList;
