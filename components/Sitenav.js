import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

export default function Sitenav() {
  return (
    <Navbar expand="lg" className="border-bottom p-3">
      <div className="container">
        <Link href="/">
          <Navbar.Brand as="a" href="/">
            <h3>Northern Diner</h3>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Link href="/">
              <Nav.Link as="a" href="/" className="border-right p-3">
                Home
              </Nav.Link>
            </Link>
            <Link href="/aboutUs">
              <Nav.Link as="a" href="/aboutUs" className="border-right p-3">
                About us
              </Nav.Link>
            </Link>
            <Link href="/ourMenu">
              <Nav.Link as="a" href="/ourMenu" className="border-right p-3">
                Our menu
              </Nav.Link>
            </Link>
            <Link href="/galleryPage">
              <Nav.Link as="a" href="/galleryPage" className="border-right p-3">
                Gallery
              </Nav.Link>
            </Link>
            <Link href="/contactUs">
              <Nav.Link as="a" href="/contactUs" className="p-3">
                Contact us
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
