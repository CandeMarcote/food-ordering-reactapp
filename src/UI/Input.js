import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, reference) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={reference} {...props.input} />
    </div>
  )
})

export default Input