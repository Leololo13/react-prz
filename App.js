import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar, Row } from 'react-bootstrap';
import { Component, createContext, useEffect, useState } from 'react';
import data from './data';
import { ItemCol } from './routes/ItemCol.jsx';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { Detail } from './routes/Detail';
import axios from 'axios';
import Scrap from './routes/Scrap';
import LatestItem from './routes/LatestItem';
import { useQuery } from '@tanstack/react-query';

export let Context1 = createContext();

function App() {
  const [shoes, setShoes] = useState(data);
  const [cnt, setCnt] = useState(2);
  const [btntoggle, setBtntoggle] = useState(true);

  let result = useQuery(['name'], () =>
    axios
      .get('https://codingapple1.github.io/userdata.json')
      .then((a) => a.data)
  );

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.length == 0 &&
      localStorage.setItem('watched', JSON.stringify([]));
  }, []);

  console.log(result.data);
  return (
    <div className='App'>
      <Navbar fixed='top' bg='dark' variant='dark' className='Navbar'>
        <Container>
          <Navbar.Brand href='#home'>Leolo13</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail/2');
              }}
            >
              Funnies
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail/1');
              }}
            >
              Healing
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/scrap');
              }}
            >
              Scrap
            </Nav.Link>

            <Nav.Link>
              {result.isLoading ? 'loading' : result.data.name}
              {result.error && 'error'}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <aside className='aside-latest'>
        <LatestItem shoes={shoes}></LatestItem>
      </aside>
      <Routes>
        <Route path='*' element={<div>page not found</div>}></Route>
        <Route path='/event' element={<Event></Event>}>
          <Route path='one' element={<div>첫 주문시 양배추즙</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰 받기</div>}></Route>
        </Route>
        <Route
          path='/'
          element={
            <>
              <div className='mainbg'></div>
              <Row xs={1} md={3} className='justify-content-xs-center'>
                <ItemCol shoes={shoes}></ItemCol>
                {/* <Card shoes={shoes}></Card> */}
              </Row>{' '}
              {btntoggle == true ? (
                <button
                  onClick={() => {
                    axios
                      .get(
                        `https://codingapple1.github.io/shop/data${cnt}.json`
                      )
                      .then((result) => {
                        let copy = [...shoes, ...result.data];
                        // copy.concat
                        setShoes(copy);
                        setCnt(cnt + 1);
                      })
                      .catch(() => {
                        alert('No more Items');
                        setCnt(2);
                        setBtntoggle(false);
                      });
                  }}
                >
                  더 보기...
                </button>
              ) : null}
            </>
          }
        ></Route>
        <Route
          path='/detail/:id'
          element={<Detail shoes={shoes}></Detail>}
        ></Route>
        <Route path='/scrap' element={<Scrap></Scrap>}></Route>

        <Route path='/about' element={<About></About>}>
          <Route path='member' element={<div>members</div>}></Route>
          <Route path='location' element={<div>location</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}
function Event() {
  return (
    <div className=' Event-event'>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </div>
  );
}
function About() {
  return (
    <div className='About-content'>
      <h4>Aboutttt</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
