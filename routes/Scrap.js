import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { cntMinus, cntPlus } from '../store/Store';
import { changeName, plusAge } from '../store/userSlice';

const Scrap = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => {
    return state;
  });
  return (
    <div>
      <div className='user-Scrap'>
        {' '}
        {state.user.name}의 Scrap Page
        <button
          onClick={() => {
            dispatch(changeName());
            dispatch(plusAge(3));
          }}
        >
          button
        </button>
      </div>

      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Origin Title</th>
            <th>Content</th>
            <th>Srcapname</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((cart, i) => {
            return (
              <tr key={i}>
                {' '}
                <td>{cart.id}</td>
                <td>{cart.name}</td>
                <td>
                  {cart.count}
                  <button
                    onClick={() => {
                      dispatch(cntPlus(cart.id));
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(cntMinus(cart.id));
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{cart.scrname}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Scrap;
