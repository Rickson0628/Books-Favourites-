import { readToken, removeToken } from "@/lib/authenticate";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function MainNav() {
  let token = readToken();
  const router = useRouter();
  function logout() {
    removeToken();
    router.push("/login");
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="fixed-top fs-4.5">
        <Container>
          <Navbar.Brand as={Link} href="/" className="fs-4">
            Rickson Bozar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
            {token && <Nav.Link as={Link} href="/favourites">
              Favourites
            </Nav.Link>}
          </Nav>
          <Nav className="ml-auto">
        {!token && <Nav.Link as={Link} href="/login">Login</Nav.Link>}
         {!token && <Nav.Link as={Link} href="/register">Register</Nav.Link>}
        {token && <Nav.Link onClick={logout}>Logout</Nav.Link>}
      </Nav>
        </Container>
      </Navbar>

      <br />
      <br />
      <br />
    </>
  );
}
