import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./historico.css";
import { db, auth } from "../../firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";
import { EMOCOES } from "../barraEmocoes/BarraEmocoes";
import ModalHistorico from "../../pages/historico/ModalHistorico";

const CalendarioHistorico = () => {
  const [date, setDate] = useState(new Date());
  const [emocoes, setEmocoes] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [selecionado, setSelecionado] = useState(null);

  useEffect(() => {
    const buscarEmocoes = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const userDocRef = doc(db, "usuarios", user.uid);
      const emocoesRef = collection(userDocRef, "emocoes");

      try {
        const snapshot = await getDocs(emocoesRef);
        const dados = snapshot.docs.map((doc) => {
          const data = doc.data().data.toDate().toISOString().split("T")[0];
          return {
            id: doc.id,
            data,
            emocao: doc.data().emocao,
            texto: doc.data().texto || "",
          };
        });
        setEmocoes(dados);
      } catch (error) {
        console.error("Erro ao buscar emoções:", error);
      }
    };

    buscarEmocoes();
  }, []);

  const handleDiaClick = (dataClicada) => {
    const dataStr = dataClicada.toISOString().split("T")[0];
    const entrada = emocoes.find((e) => e.data === dataStr);
    if (entrada) setSelecionado(entrada);
  };

  const nomeDoMes = date.toLocaleDateString("pt-BR", { month: "long" });

  const emocoesFiltradas = filtro
    ? emocoes.filter((e) => e.emocao === filtro)
    : emocoes;

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h4 className="month-title">{nomeDoMes}</h4>
        <select
          onChange={(e) => setFiltro(e.target.value)}
          className="filtro-select"
          value={filtro}
        >
          <option value="">Todas Emoções</option>
          {EMOCOES.map((e) => (
            <option key={e.nome} value={e.nome}>
              {e.emoji} {e.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="calendar">
        <Calendar
          onChange={setDate}
          value={date}
          locale="pt-BR"
          calendarType="iso8601"
          onClickDay={handleDiaClick}
          tileContent={({ date, view }) => {
            if (view !== "month") return null;
            const dataStr = date.toISOString().split("T")[0];
            const entrada = emocoesFiltradas.find((e) => e.data === dataStr);
            const emoji = EMOCOES.find((e) => e.nome === entrada?.emocao)?.emoji;

            return (
              <div className="tile-wrapper">
                <div className="day-number">{date.getDate()}</div>
                <div className="circle-border">
                  <div className="day-circle">
                    {emoji && <div className="emoji-dia">{emoji}</div>}
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>

      {selecionado && (
        <ModalHistorico
          data={selecionado.data}
          emocao={selecionado.emocao}
          texto={selecionado.texto}
          onClose={() => setSelecionado(null)}
        />
      )}
    </div>
  );
};

export default CalendarioHistorico;
