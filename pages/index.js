import Head from "next/head";
import Image from "next/image";
import Sitenav from "../components/Sitenav";
import styles from "../styles/Home.module.css";

// React-bootstrap
import { Container, Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6}>
          <Image
            src="../images/hamburger"
            alt="Picture of Menu Item"
            layout="fill"
          />
        </Col>
        <Col xs={12} md={6}></Col>
      </Row>
    </Container>
  );
}
