import React from 'react'
import { useCount } from '../hooks/UseCount';

export const Test = ({title}) => {

    const {count}=useCount();
  return (
    <div>
        <h1> {title}
            <span>{count}</span>
        </h1>
    </div>
  );
};
