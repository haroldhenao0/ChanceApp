import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GifExpertApp = () => {
  const [chance, setChance] = useState('');
  const [price, setPrice] = useState('');
  const [tickets, setTickets] = useState([]);

  const handleChanceChange = (event) => {
    const inputChance = event.target.value.slice(0, 4); // limit chance to 4 digits hvsdu
    setChance(inputChance);
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }

  const handleAddTicket = () => {
    if (chance.length<3 && price) {
      const ticket = { chance: chance, price: price };
      setTickets([...tickets, ticket]);
      setChance('');
      setPrice('');
    }
  }

  const handleDeleteTickets = () => {
    setTickets([]);
  }

  const calculateTotalUnits = () => {
    return tickets.reduce((total, ticket) => {
      return total + parseInt(ticket.chance);
    }, 0);
  }

  const calculateTotalValue = () => {
    return tickets.reduce((total, ticket) => {
      return total + parseInt(ticket.price);
    }, 0);
  }

  return (
    <div className="container mt-4">
      <h1>Chance app</h1>
      <div className="row mb-3">
        <div className="col-4">
          <label htmlFor="chance" className="form-label">No. Chance:</label>
          <input id="chance" type="number" value={chance} onChange={handleChanceChange} className="form-control" required/>
        </div>
        <div className="col-4">
          <label htmlFor="price" className="form-label">Valor:</label>
          <input id="price" type="number" value={price} onChange={handlePriceChange} className="form-control" required/>
        </div>
        <div className="col-4 mt-4">
          <button onClick={handleAddTicket} className="btn btn-primary">Agregar Chance</button>
          <button onClick={handleDeleteTickets} className="btn btn-danger ms-2">Borrar todo</button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <p className="badge bg-success">Total a pagar: ${calculateTotalValue()}</p>
        </div>
      </div>
      <div className="row">
        {tickets.map((ticket, index) => (
          <div key={index} className="col-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"># {index + 1}</h5>
                <p className="card-text">No.Chance: {ticket.chance}</p>
                <p className="card-text">Valor: ${ticket.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GifExpertApp;