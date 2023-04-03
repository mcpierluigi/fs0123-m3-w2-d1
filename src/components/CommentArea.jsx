import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  request = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhZTZiZTY4MzQzMTAwMTRkZWE3ZTciLCJpYXQiOjE2ODA1MzMxODIsImV4cCI6MTY4MTc0Mjc4Mn0.fJe9fzvo3Zjo-xXmQRyDIQCNRu8I8s0nAto6SjBdckA",
        },
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      }
    } catch (error) {
      console.error(error);
    }
  };
  componentDidMount() {
    this.request();
  }

  render() {
    return (
      <ListGroup>
        {this.state.comments.map(comment => (
          <CommentList key={comment._id} author={comment.author} comment={comment.comment} rate={comment.rate} />
        ))}
        ;
      </ListGroup>
    );
  }
}

export default CommentArea;
