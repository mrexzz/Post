import './App.css'
import { useState } from 'react'

function App() {
  const [kelvin, setKelvin] = useState('');
  const [celsius, setCelsius] = useState('');

  const convertToCelsius = () => {
    const kelvinValue = parseFloat(kelvin);
    if (!isNaN(kelvinValue)) {
      const celsiusValue = kelvinValue - 273.15;
      setCelsius(celsiusValue.toFixed(2));5
    } else {
      alert('Lütfen geçerli bir Kelvin değeri girin.');
    }
  }
  return (
    <div>
      <h1>Kelvin to Celsius Converter</h1>
      <label>
        Kelvin:
        <input
          type="number"
          value={kelvin}
          onChange={(e) => setKelvin(e.target.value)}
        />
      </label>
      <button onClick={convertToCelsius}>Convert</button>
      {celsius !== '' && (
        <p>
          {kelvin} Kelvin is equal to {celsius} Celsius.
        </p>
      )}
    </div>
  );
}

export default App

