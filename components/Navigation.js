import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link";

const Navigation = () => (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <div className="container">
            <Link href="/" passHref>
                <a className="navbar-brand">maddie</a>
            </Link>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
                <Nav className="ml-auto">
                    <Link href="/about" passHref>
                        <Nav.Link>about</Nav.Link>
                    </Link>
                    <Link href="/gallery" passHref>
                        <Nav.Link>gallery</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
);

export default Navigation;