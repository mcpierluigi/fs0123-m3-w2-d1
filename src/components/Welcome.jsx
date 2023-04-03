import { Container } from "react-bootstrap";

function Welcome() {
  return (
    <>
      <Container fluid className="Welcome">
        <div>
          <p className="display-5 my-4 text-light fw-bold">
            Welcome to EpiBooks.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Welcome;
