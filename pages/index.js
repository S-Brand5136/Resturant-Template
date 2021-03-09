import Head from "next/head";
import Sitenav from "../components/Sitenav";
import styles from "../styles/Home.module.css";
import ImageCarousel from "../components/ImageCarousel";

// React-bootstrap
import { Container, Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12}>
          <ImageCarousel />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div>Hello</div>
        </Col>
      </Row>
    </Container>
  );
}
