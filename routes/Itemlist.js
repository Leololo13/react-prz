/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import data from './data';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Itemlist.css';

export const Itemlist = () => {
  const [topics, setTopics] = useState(data);

  return (
    <>
      {' '}
      {topics.map((topic) => (
        <>
          {' '}
          <Col xs={12} md={4} className="Itemlist-col" key={topic.id}>
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                topic.id + 1
              }.jpg`}
              width="80%"
            />
            <h3>{topic.title}</h3>
            <p>{topic.content}</p>
            <p> {topic.price}</p>
          </Col>
        </>
      ))}
    </>
  );
};
