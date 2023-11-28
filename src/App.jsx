import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const calculoIMC = peso / (alturaMetros * alturaMetros);
      setImc(calculoIMC.toFixed(2));
      definirClassificacao(calculoIMC);
    }
  };

  const definirClassificacao = (imc) => {
    if (imc < 18.5) {
      setClassificacao('Abaixo do Peso');
    } else if (imc < 24.9) {
      setClassificacao('Normal');
    } else if (imc < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imc < 34.9) {
      setClassificacao('Obesidade Grau I');
    } else if (imc < 39.9) {
      setClassificacao('Obesidade Grau II');
    } else {
      setClassificacao('Obesidade Grau III');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="calculator">
        <div>
          <label>Altura (cm): </label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div>
          <label>Peso (kg): </label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button onClick={calcularIMC}>Calcular</button>
        {imc !== null && (
          <div className="result">
            <h2>IMC: {imc}</h2>
            <p>Classificação: {classificacao}</p>
          </div>
        )}
      </div>

      <h2>Tabela de IMC</h2>
      <table className="imc-table">
        <thead>
          <tr>
            <th>Classificação</th>
            <th>IMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo do Peso</td>
            <td>Menor que 18.5</td>
          </tr>
          <tr>
            <td>Normal</td>
            <td>18.5 - 24.9</td>
          </tr>
          <tr>
            <td>Sobrepeso</td>
            <td>25 - 29.9</td>
          </tr>
          <tr>
            <td>Obesidade Grau I</td>
            <td>30 - 34.9</td>
          </tr>
          <tr>
            <td>Obesidade Grau II</td>
            <td>35 - 39.9</td>
          </tr>
          <tr>
            <td>Obesidade Grau III</td>
            <td>40 ou mais</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
