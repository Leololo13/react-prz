import './App.css';
import { Nav, Navbar, Container, Row } from 'react-bootstrap';
import { Itemlist } from './routes/Itemlist';
import data from './routes/data';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Home } from './routes/Home';

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="imgs/logo.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Leololo
            </Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate('/');
                }}
              >
                Home1123123
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/Funnies');
                }}
              >
                Funnies
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/hot');
                }}
              >
                Hot+15111
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <div className="main-bg"></div>
      <nav></nav>
      <main>
        {' '}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home></Home>
              </div>
            }
          />
          <Route
            path="/Funnies"
            element={
              <Row>
                {' '}
                <Itemlist></Itemlist>
              </Row>
            }
          />
          <Route
            path="/Hot"
            element={
              <div>
                <p>Hott</p>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
