import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { vadhava, kmkro } from '../practiceRedux/Reducer';

const UseReduxx = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.amit);
  const [customValue, setCustomValue] = useState(0);

  const add = () => {
    dispatch(vadhava(customValue));
  };
  const sub = () => {
    dispatch(kmkro());
  };



  return (
    <div>
      <h1>count {count}</h1>
      <input
        type="number"
        value={customValue}
        onChange={(e) => setCustomValue(parseInt(e.target.value))}
      />
      <button onClick={() => add()}>add</button>
      <button onClick={() => sub()}>sub</button>
    </div>
  );
};

export default UseReduxx;
