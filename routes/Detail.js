import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import { addCart } from '../store/Store';

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: white;
  padding: 0.5rem;
  border-radius: 10%;
  border: none;
  font-size: 1.5rem;
`;

export const Detail = (props) => {
  const [alert, setAlert] = useState(true);
  let { id } = useParams();
  let shoes = props.shoes.find((x) => x.id == id);
  const [nann, setNann] = useState('');
  const [tabcnt, setTabcnt] = useState(0);
  const [fade2, setFade2] = useState('');
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let state = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    let a = setTimeout(() => {
      setFade2('end');
    }, 100);

    return () => {
      clearTimeout(a);
      setFade2(' ');
    };
  }, [shoes]);

  return (
    <div>
      {alert == true ? (
        <div className='alert alert-warning'>2초이내 구매시 할인</div>
      ) : null}
      <Row xs={1} md={2} className={`Detail-item start ${fade2}`}>
        <Col className='Detail-item-Col'>
          <img src={shoes.src} width='80%' className='Detail-item-img' />
        </Col>
        <Col>
          {' '}
          <input
            type='text'
            placeholder=' Input Only Nums'
            onChange={(e) => {
              setNann(e.target.value);
            }}
          />
          <h4>{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{shoes.price}</p>
          <YellowBtn
            bg='burlywood'
            shoes={shoes}
            onClick={() => {
              navigate('/scrap');
              dispatch(addCart(shoes));
            }}
          >
            주문하기
          </YellowBtn>
        </Col>
      </Row>
      <div className='Itembtn-container'>
        <Nav fill variant='tabs' defaultActiveKey='/home'>
          <Nav.Item>
            <Nav.Link
              href='#'
              onClick={() => {
                setTabcnt(0);
              }}
            >
              Btn1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='link-1'
              onClick={() => {
                setTabcnt(1);
              }}
            >
              Btn2
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='link-2'
              onClick={() => {
                setTabcnt(2);
              }}
            >
              Btn3
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className='tab-Content'>
          {' '}
          <Tabcontent tabcnt={tabcnt}></Tabcontent>
        </div>
      </div>
    </div>
  );
};

function Tabcontent({ tabcnt }) {
  let [fade, setFade] = useState('');
  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      clearTimeout(a);
      setFade(' ');
    };
  }, [tabcnt]);
  return (
    <div className={'start ' + fade}>
      {
        [
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          </div>,
          <div>내용2</div>,
          <div>내용3</div>,
        ][tabcnt]
      }
    </div>
  );
}
