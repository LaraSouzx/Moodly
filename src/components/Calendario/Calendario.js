import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Calendario/style.css";
import { db, auth } from "../../firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";
import { EMOCOES } from "../barraEmocoes/BarraEmocoes"; // Lista de emoções com emojis

/**
 * Componente Calendario
 *
 * Exibe um calendário mensal com marcações visuais para emoções registradas em cada data.
 * Integra-se com Firebase Firestore para buscar os dados do usuário autenticado.
 *
 * Funcionalidades:
 * - Mostra o emoji correspondente à emoção registrada em cada dia.
 * - Destaca o dia atual com uma borda especial.
 *
 * @returns {JSX.Element} Calendário interativo com emoções por data
 */
const Calendario = () => {
  const [date, setDate] = useState(new Date()); // Estado da data selecionada
  const [emocoesPorData, setEmocoesPorData] = useState([]); // Lista de emoções registradas por data

  // Efeito que busca os dados de emoções do Firestore assim que o componente é montado
  useEffect(() => {
    const buscarEmocoes = async () => {
      const user = auth.currentUser;
      if (!user) return; // Se não houver usuário logado, não busca

      const userDocRef = doc(db, "usuarios", user.uid); // Referência ao documento do usuário
      const emocoesRef = collection(userDocRef, "emocoes"); // Subcoleção de emoções

      try {
        const snapshot = await getDocs(emocoesRef); // Busca os documentos de emoções
        const dados = snapshot.docs.map((doc) => {
          const data = doc.data().data.toDate().toISOString().split("T")[0]; // Formata a data para 'yyyy-mm-dd'
          const emocao = doc.data().emocao;
          return { data, emocao }; // Retorna objeto com data e emoção
        });
        setEmocoesPorData(dados); // Armazena as emoções no estado
      } catch (error) {
        console.error("Erro ao buscar emoções:", error); // Trata erros na busca
      }
    };

    buscarEmocoes(); // Chama a função ao montar o componente
  }, []);

  // Obtém o nome do mês atual em português
  const nomeDoMes = date.toLocaleDateString("pt-BR", {
    month: "long",
  });

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        {/* Título com o nome do mês atual */}
        <h4 className="month-title">{nomeDoMes}</h4>
      </div>

      <div className="calendar">
        <Calendar
          onChange={setDate} // Atualiza a data selecionada
          value={date} // Define a data atual no calendário
          locale="pt-BR" // Localização brasileira
          calendarType="iso8601" // Começa a semana na segunda-feira
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString("pt-BR", { weekday: "short" }).slice(0, 3)
          }
          // Renderização personalizada do conteúdo de cada célula (tile)
          tileContent={({ date: dataTile, view }) => {
            if (view !== "month") return null; // Só exibe em visualização mensal

            const dataFormatada = dataTile.toISOString().split("T")[0]; // Formata a data da célula
            const emocaoDia = emocoesPorData.find((e) => e.data === dataFormatada); // Verifica se há emoção registrada
            const emoji = EMOCOES.find((e) => e.nome === emocaoDia?.emocao)?.emoji; // Busca o emoji correspondente

            // Verifica se a célula representa o dia atual
            const hoje = new Date();
            const isHoje =
              dataTile.getDate() === hoje.getDate() &&
              dataTile.getMonth() === hoje.getMonth() &&
              dataTile.getFullYear() === hoje.getFullYear();

            return (
              <div className="tile-wrapper">
                {/* Número do dia dentro da célula */}
                <div className="day-number">{dataTile.getDate()}</div>

                {/* Círculo de fundo com destaque se for hoje */}
                <div className={`circle-border ${isHoje ? "hoje" : ""}`}>
                  <div className="day-circle">
                    {/* Exibe o emoji da emoção, se houver */}
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
