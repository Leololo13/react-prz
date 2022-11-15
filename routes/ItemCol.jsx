import React from 'react';
import { Col } from 'react-bootstrap';

export const ItemCol = (props) => {
  let data = props.shoes;

  return data.map((data) => {
    return (
      <>
        <Col className='Itemcol-list' key={data.id}>
          <img src={data.src} width='80%' />
          <h4>{data.title}</h4>
          <p>{data.content}</p>
          <p>{data.price}</p>
        </Col>
      </>
    );
  });
};
