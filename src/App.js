import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './App.css';
import api from'./services/api';

function App() {

  const [input, setInput] = useState('');
  const[cep, setCep] = useState({})

  async function sicronizadorApi(){
    if(input === ""){
      return alert("Por favor, Preencha o Cep!");
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data);
      setCep(response.data);
      setInput("");
    }catch{
      alert("Ops, erro ao buscar pelo cep: " + input);
      setInput("");
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

          <button onClick={sicronizadorApi} className="btn btn-success m-3">
            <span className=''>Buscar</span>
            <FiSearch size={20} color="#fff"/>
          </button>
        </div>
      </div>

      { Object.keys(cep).length > 0 && (
        <main className='main m-5 shadow rounded-3'>
          <h2 className='m-3'>
            CEP: { cep.cep }
          </h2>
          <span className='mb-3 fw-bolder' >Endereção: { cep.logradouro }</span>
          <span className='mb-3 fw-bolder' >Complemento: { cep.complemento }</span>
          <span className='mb-3 fw-bolder' >Bairro: { cep.bairro }</span>
          <span className='mb-3 fw-bolder' >Localização: { cep.localidade } - { cep.uf }</span>
        </main>
      ) }
    </section>
  );
}

export default App;
