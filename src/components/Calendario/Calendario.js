import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Calendario/style.css";
import { db, auth } from "../../firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";
import { EMOCOES } from "../barraEmocoes/BarraEmocoes"; // Verifique se está correto

const Calendario = () => {
  const [date, setDate] = useState(new Date());
  const [emocoesPorData, setEmocoesPorData] = useState([]);

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
          const emocao = doc.data().emocao;
          return { data, emocao };
        });
        setEmocoesPorData(dados);
      } catch (error) {
        console.error("Erro ao buscar emoções:", error);
      }
    };

    buscarEmocoes();
  }, []);

  const nomeDoMes = date.toLocaleDateString("pt-BR", {
    month: "long",
  });

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h4 className="month-title">{nomeDoMes}</h4>
      </div>

      <div className="calendar">
        <Calendar
          onChange={setDate}
          value={date}
          locale="pt-BR"
          calendarType="iso8601"
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString("pt-BR", { weekday: "short" }).slice(0, 3)
          }
          tileContent={({ date: dataTile, view }) => {
            if (view !== "month") return null;

            const dataFormatada = dataTile.toISOString().split("T")[0];
            const emocaoDia = emocoesPorData.find((e) => e.data === dataFormatada);
            const emoji = EMOCOES.find((e) => e.nome === emocaoDia?.emocao)?.emoji;

            const hoje = new Date();
            const isHoje =
              dataTile.getDate() === hoje.getDate() &&
              dataTile.getMonth() === hoje.getMonth() &&
              dataTile.getFullYear() === hoje.getFullYear();

            return (
              <div className="tile-wrapper">
                <div className="day-number">{dataTile.getDate()}</div>
                <div className={`circle-border ${isHoje ? "hoje" : ""}`}>
                  <div className="day-circle">
                    {emoji && <span className="emoji-dia">{emoji}</span>}
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Calendario;
