// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 10px;
  font-size: 40px;
  background-color: #61dafb;
`;

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </div>
    </div>
  );
}
