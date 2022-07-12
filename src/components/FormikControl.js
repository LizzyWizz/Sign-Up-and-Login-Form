import React from 'react';

function FormikControl({ control, id, label, ...rest }) {
  return (
    <>
      {control === 'input' && <label htmlFor={id}>{label}</label>}
      <input id={id} {...rest} />
    </>
  );
}

export default FormikControl;
