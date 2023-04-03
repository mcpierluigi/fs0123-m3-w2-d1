import { Component } from "react";
import { Container, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };
  render() {
    return (
      <Container>
        <Form>
          <p className="text-center">Leave your comment here</p>
          <Form.Group
            className="mb-2"
            controlId="comment"
            value={this.state.comment.comment}
            onChange={(e) => thissetStaet({ comment: e.target.value })}
          >
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Rate the book</Form.Label>
            <Form.Select value={this.state.rate} onChange={(e) => thissetStaet({ rate: e.target.value })}>
              <optin>1</optin>
              <optin>2</optin>
              <optin>3</optin>
              <optin>4</optin>
              <optin>5</optin>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-2"
            controlId="comment"
            value={this.state.elementId}
            onChange={(e) => this.setState({ elementId: e.target.value })}
          >
            <Form.Label>Element Id</Form.Label>
            <FormControl tyupe="text" />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default AddComment;
