import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './App.css';
import api from'./services/api';

function App() {

  const [input, setInput] = useState('');

  async function teste(){
    if(input === ""){
      return alert("Por favor, Preencha o Cep!");
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data);
    }catch{
      alert("Ops, erro ao buscar pelo cep: " + input);
    }
  }

  return (
    <section className='container-fluir'>
      <div>
        <h1 className='title '>Buscador CEP</h1>

        <div className='div-form'>
          <input className='p-2 shadow rounded-pill' 
            type="text"
            placeholder="Digite seu CEP aqui..."
            value={input}
            onChange={(e) => setInput(e.target.value)}>
          </input> <br/>

          <button onClick={teste} className="btn btn-success m-3">
            <span className=''>Buscar</span>
            <FiSearch size={20} color="#fff"/>
          </button>
        </div>
      </div>

      <main className='main m-5 shadow rounded-3'>
        <h2 className='m-3'>
          CEP: 69036220
        </h2>
        <span className='mb-3 fw-bolder' >Endereção: Rua Armando Cunha</span>
        <span className='mb-3 fw-bolder' >Complemento: Fazenda 5</span>
        <span className='mb-3 fw-bolder' >Bairro: Compensa</span>
        <span className='mb-3 fw-bolder' >Localização: Manaus - AM</span>
      </main>
    </section>
  );
}

export default App;
