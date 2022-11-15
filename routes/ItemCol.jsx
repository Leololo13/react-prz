import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';

export const ItemCol = (props) => {
  let data = props.shoes;
  let navigate = useNavigate();

  let objreturn = localStorage.getItem('watched');
  objreturn = JSON.parse(objreturn);

  return data.map((data) => {
    return (
      <>
        <Col
          className='Itemcol-list'
          key={data.id}
          onClick={() => {
            navigate(`/detail/${data.id}`);

            objreturn.push(data.id);
            objreturn = new Set(objreturn);
            objreturn = Array.from(objreturn);
            localStorage.setItem('watched', JSON.stringify(objreturn));
          }}
        >
          <img src={data.src} width='80%' />
          <h4>{data.title}</h4>
          <p>{data.content}</p>
          <p>{data.price}</p>
        </Col>
      </>
    );
  });
};
