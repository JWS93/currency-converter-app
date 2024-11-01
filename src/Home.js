import { useState } from 'react';
import Select from 'react-select';
import { json, checkStatus } from './utils'

function CurrencyCalculator() {
  function CurrencyValue() {
    const [currencyValue, setCurrencyValue] = useState('');

    const handleValueChange = (event) => {
      setCurrencyValue(Number(event.target.value));
    };
  
    return (
      <div className="col-12 col-md-3 form-group mt-2">
        <label className="pe-2">Currency Amount</label>
        <input
          className="currency-input me-2 border-primary rounded"
          type="number"
          value={currencyValue}
          onChange={handleValueChange}
        />
      </div>
    )
  }

  function CurrencyType() {
    const [currencyType, setCurrencyType] = useState('');

    const options = []

    const json = (response) => response.json()

    fetch('https://api.frankfurter.app/currencies').then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request was either a 404 or 500');
    }).then((data) => {
      console.log(data);
      let optionItems = Object.entries(data).map(([key, value]) => ({ ['value']: key, ['label']: value }));
      console.log(optionItems)
      options.push(optionItems);
    }).catch((error) => {
      console.log(error);
    })
    console.log (options);
    console.log(currencyType);

    return (
      <div className="col-12 col-md-9 mt-4">
        <Select
          className="currency-selector basic-single"
          isClearable
          placeholder="Select Currency"
          value={currencyType}
          onChange={setCurrencyType}
          options={options}
        />
      </div>
    )
  }
  return (
    <div className="container-fluid">
      <div className="row">
          <CurrencyValue />
          <CurrencyType />
      </div>
    </div>
  )
}

export default CurrencyCalculator;