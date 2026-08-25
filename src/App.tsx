import "./App.css";

import iconPet from "../src/assets/pet.svg";

function App() {
  return (
    <div>
      <button className="button-pet">
        <img src={iconPet} alt="ícone de pet" />
        <span>MUNDO PET</span>
      </button>

      <div className="container">
        <div className="agenda-info">
          <h1>Sua agenda</h1>
          <p>
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>

        <div>
          <input type="date" className="date-selector" />
        </div>
      </div>
    </div>
  );
}

export default App;
