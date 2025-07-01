import {
  Button,
  Container,
  Modal,
  Nav,
  Navbar,
  Pagination,
  Spinner,
  Form,
  FloatingLabel,
  Carousel,
} from "react-bootstrap";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { useState } from "react";

function App18() {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/*carousel*/}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/bee.jpg" alt="" />
          <Carousel.Caption>
            <h3>꿀벌</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/bear.jpg" alt="" />
          <Carousel.Caption>
            <h3>아기곰</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
              minima.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/eagle.jpg" alt="" />
          <Carousel.Caption>
            <h3>독수리</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr />
      {/*floatingLabel 예쁜 라벨*/}
      <FloatingLabel label="아이디를 입력해주세요." controlId="idFloatingInput">
        <Form.Control placeholder="아이디를 입력해주세요." />
      </FloatingLabel>
      <FloatingLabel
        label="패스워드를 입력해주세요."
        controlId="passwordFloatingInput"
      >
        <Form.Control type="password" placeholder="비밀번호를 입력해주세요." />
      </FloatingLabel>
      <hr />
      {/*label */}
      <Form.Group controlId="idInput">
        <Form.Label>아이디</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group controlId="passwordInput">
        <Form.Label>패스워드</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group controlId="contentTextarea">
        <Form.Label>본문</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>
      <hr />
      {/* 모달 */}
      <Button onClick={() => setShow(!show)}>모달예제</Button>
      <Modal show={show} onClose={() => setShow(!show)}>
        <Modal.Header>
          <Modal.Title>Lorem ipsum dolor sit amet.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet
          aspernatur commodi corporis error eum excepturi expedita, libero
          maiores maxime minima provident quos ratione reiciendis sed ullam
          voluptatum. Temporibus, veritatis?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
            Close
          </Button>
          <Button onClick={() => setShow(!show)}>Save</Button>
        </Modal.Footer>
      </Modal>
      <hr />
      {/*네브바*/}
      <Navbar className="bg-body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand>PROJECT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/">LINK</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
      {/*페이지 네이션*/}
      <Pagination>
        <Pagination.Prev>
          <GrCaretPrevious></GrCaretPrevious>
        </Pagination.Prev>
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item active={true}>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>5</Pagination.Item>
        <Pagination.Next>
          <GrCaretNext></GrCaretNext>
        </Pagination.Next>
      </Pagination>
      <hr />
      {/*스피너*/}
      <Spinner animation="border" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </div>
  );
}

export default App18;
