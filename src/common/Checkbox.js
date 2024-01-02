import React from 'react';

const Checkbox = ({ label, value, onChange }) => {
  return (
    <>
      <input type="checkbox" checked={value} onChange={onChange} />
      <label className="mt-4" onClick={onChange}>
        {" " + label}
      </label>
    </>
  );
}

export default Checkbox;