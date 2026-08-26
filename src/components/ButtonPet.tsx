import iconPet from "../assets/pet.svg";

import "./buttonPet.Modules.css";

export function ButtonPet() {
  return (
    <button className="button-pet">
      <img src={iconPet} alt="ícone de pet" />
      <span>MUNDO PET</span>
    </button>
  );
}
