import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrency = (e) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: e.target.value,
  });
  }
  return (
    <div className='alert alert-secondary' style={{paddingRight: 0}}>
      <div style={{backgroundColor: '#69cf70', color: 'white', width: 'max-content', padding: '1px 6px'}}>
        <span>Currency </span>
        <select className='currency-dropdown' value={currency} onChange={handleCurrency} style={{backgroundColor: 'transparent', border: 'none', outline: 'none', color: 'white'}}>
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      </div>

    </div>
  )
}

export default CurrencyList
