import React, { useState } from 'react';

export default function CheckboxGroup() {
  const [theArray, setTheArray] = useState([] as string[]); //initialiseer een lege Array ervan uitgaande dat er op page-load nog geen checkbox aangevinkt is - we gebruiken useState om de state bij te houden van een veranderend iets

  const updateFieldChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (theArray.includes(event.target.name)) {
      const newArray = theArray.filter((item) => item !== event.target.name);
      setTheArray(newArray);
    } else {
      setTheArray([...theArray, event.target.name]);
    }
  };

  return (
    <div>
      <label>
        <input
          name='mannen'
          type='checkbox'
          value='event.target.name'
          onChange={updateFieldChanged}
        />{' '}
        Mannen
      </label>
      <label>
        <input
          name='vrouwen'
          type='checkbox'
          value='event.target.name'
          onChange={updateFieldChanged}
        />{' '}
        Vrouwen
      </label>
    </div>
  );
}