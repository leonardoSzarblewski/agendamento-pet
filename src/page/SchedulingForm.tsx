import { ButtonPet } from "../components/ButtonPet";
import "./schedulingFormModules.css";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import user from "../assets/user.svg";
import petIcon from "../assets/petIcon.svg";
import phone from "../assets/phone.svg";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock.svg";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type FormData = {
  owner: string;
  petName: string;
  phone: string;
  description: string;
  date: string;
  time: string;
};

const schema = yup.object({
  owner: yup.string().required("Nome do tutor é obrigatório"),
  petName: yup.string().required("Nome do pet é obrigatório"),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .min(10, "O número de telefone deve ter no minimo 10 digitos")
    .max(10, "O número de telefone deve ter no máximo 10 digitos"),
  description: yup
    .string()
    .required("Descrição é obrigatória")
    .min(5, "A descrição precisa ter no minimo 5 digitos"),
  date: yup.string().required("Data é obrigatório"),
  time: yup.string().required("Horário é obrigatório"),
});

export function SchedulingForm() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      owner: "",
      petName: "",
      phone: "",
      description: "",
      date: `${getToday()}`,
      time: "",
    },
    resolver: yupResolver(schema),
  });

  function onSubmit(data: FormData) {
    localStorage.setItem("agendamento", JSON.stringify(data));

    alert("Agendamento realizado com sucesso!");

    navigate("/");
  }

  function getToday() {
    return new Date().toLocaleDateString("sv-SE");
  }

  return (
    <div>
      <ButtonPet />
      <div className="container-main">
        <div className="container-form">
          <Link to="/" className="arrowBack">
            Voltar
          </Link>
          <h2>Agende um atendimento</h2>
          <p>Preencha os dados do cliente para realizar o agendamento:</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="owner"
              render={({ field }) => (
                <div className="form-group">
                  <label>Nome do tutor</label>

                  <div
                    className={`input-with-icon ${errors.owner ? "input-error" : ""}`}
                  >
                    <img src={user} alt="ícone de usuário" />
                    <input type="text" placeholder="Nome do tutor" {...field} />
                  </div>
                </div>
              )}
            />
            {errors.owner?.message && (
              <span className="error">{errors.owner.message}</span>
            )}

            <Controller
              control={control}
              name="petName"
              render={({ field }) => (
                <div className="form-group">
                  <label>Nome do pet</label>

                  <div
                    className={`input-with-icon ${errors.petName ? "input-error" : ""}`}
                  >
                    <img src={petIcon} alt="ícone de pet" />
                    <input type="text" placeholder="Nome do pet" {...field} />
                  </div>
                </div>
              )}
            />
            {errors.petName?.message && (
              <span className="error">{errors.petName.message}</span>
            )}

            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <div className="form-group">
                  <label>Telefone</label>

                  <div
                    className={`input-with-icon ${errors.phone ? "input-error" : ""}`}
                  >
                    <img src={phone} alt="ícone de telefone" />
                    <input
                      type="text"
                      placeholder="(00) 0 0000-0000"
                      {...field}
                    />
                  </div>
                </div>
              )}
            />
            {errors.phone?.message && (
              <span className="error">{errors.phone.message}</span>
            )}

            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <div className="form-group">
                  <label>Descrição do serviço</label>

                  <textarea
                    className={`input-with-icon ${errors.description ? "input-error" : ""}`}
                    placeholder="Banho e tosa"
                    rows={4}
                    {...field}
                  />
                </div>
              )}
            />
            {errors.description?.message && (
              <span className="error">{errors.description.message}</span>
            )}

            <div className="flex-inputs">
              <div className="flex-inputs-item">
                <Controller
                  control={control}
                  name="date"
                  render={({ field }) => (
                    <div className="form-group">
                      <label>Data</label>
                      <div
                        className={`input-with-icon ${errors.date ? "input-error" : ""}`}
                      >
                        <img src={calendar} alt="ícone de calendario" />
                        <input type="date" {...field} />
                      </div>
                    </div>
                  )}
                />
                {errors.date?.message && (
                  <span className="error">{errors.date.message}</span>
                )}
              </div>

              <div className="flex-inputs-item">
                <Controller
                  control={control}
                  name="time"
                  render={({ field }) => (
                    <div className="form-group">
                      <label>Hora</label>
                      <div className="select-container">
                        <img src={clock} alt="ícone de relógio" />
                        <select
                          className={`input-with-icon ${errors.time ? "input-error" : ""}`}
                          {...field}
                        >
                          <option value="" disabled>
                            Selecione
                          </option>

                          <option value="09:00">09:00</option>
                          <option value="10:00">10:00</option>
                          <option value="11:00">11:00</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="16:00">16:00</option>
                          <option value="17:00">17:00</option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                          <option value="21:00">21:00</option>
                        </select>
                      </div>
                    </div>
                  )}
                />
                {errors.time?.message && (
                  <span className="error">{errors.time.message}</span>
                )}
              </div>
            </div>

            <button className="btn" type="submit">
              AGENDAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
