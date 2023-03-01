import React, { useState } from 'react';

const GifExpertApp = () => {

  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState(['']);
  const [value, setvalue] = useState('');
  const [values, setvalues] = useState(['']);

  const onSetNumber = (evt) => {
    setCategory(evt.target.value);
  }
  const onSetValor = (evt) => {
    setvalues(evt.target.value);
  }

  const onAddNumber = () => {
    setCategories( list =>[...list, category]);
  }

  const onAddValue = () => {
    setvalue( list =>[...list, value]);
  }


  return (
    <div>
        <hr />
        <h1>CHANCE</h1>
        <input class='inpunum' type="number" value={category} 
            onChange={(event) => onSetNumber(event)}/>
        &nbsp;
        <input class='inpuvalue' type="number" value={value} 
            onChange={(event) => onSetValor(event)}/>
        <button onClick={() => onAddNumber()}> Add</button>
        <button onClick={() => onAddValue()}> Add</button>
        <ol>
        {
            categories.map(
                (category, key) => 
                    (
                         <li key={key}>{category}</li>
                    )
                )
        }
      </ol>
      <ol>
      {     
            values.map(
                (value, key) => 
                    (
                         <li key={key}>{value}</li>
                    )
                )
      }
      </ol>
    </div>
  );
}

export default GifExpertApp;