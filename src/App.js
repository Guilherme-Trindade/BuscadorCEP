import { FiSearch } from 'react-icons/fi'
import './App.css';

function App() {
  return (
    <section className='container-fluir'>
      <div>
        <h1 className='title '>Buscador CEP</h1>

        <div className='div-form'>
          <input className='p-2 shadow rounded-pill' type="text" placeholder="Digite seu CEP aqui..."></input> <br/>
          <button className="btn btn-success m-3">
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
