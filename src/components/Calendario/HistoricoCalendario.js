// Importação de bibliotecas e componentes necessários
import { useState, useEffect } from "react";
import Calendar from "react-calendar"; // Componente de calendário
import "react-calendar/dist/Calendar.css"; // Estilo padrão do calendário
import "./historico.css"; // Estilo customizado do componente
import { db, auth } from "../../firebaseConfig"; // Firebase: autenticação e banco de dados
import { collection, doc, getDocs } from "firebase/firestore"; // Funções do Firestore
import { EMOCOES } from "../barraEmocoes/BarraEmocoes"; // Lista de emoções e emojis
import ModalHistorico from "../../pages/historico/ModalHistorico"; // Modal que mostra detalhes da emoção selecionada

// Função utilitária para formatar a data no formato YYYY-MM-DD
const formatarData = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const CalendarioHistorico = () => {
  // Estados usados no componente
  const [date, setDate] = useState(new Date()); // Data atualmente selecionada no calendário
  const [emocoes, setEmocoes] = useState([]); // Lista de emoções carregadas do banco
  const [filtro, setFiltro] = useState(""); // Filtro selecionado (nome da emoção)
  const [selecionado, setSelecionado] = useState(null); // Emoção selecionada para abrir no modal

  // useEffect executa a função buscarEmocoes ao carregar o componente
  useEffect(() => {
    const buscarEmocoes = async () => {
      const user = auth.currentUser; // Pega o usuário logado
      if (!user) return;

      // Referência ao documento do usuário e à subcoleção "emocoes"
      const userDocRef = doc(db, "usuarios", user.uid);
      const emocoesRef = collection(userDocRef, "emocoes");

      try {
        // Recupera todas as emoções do usuário
        const snapshot = await getDocs(emocoesRef);
        const dados = snapshot.docs.map((doc) => {
          const data = doc.data().data.toDate(); // Converte o timestamp para Date
          return {
            id: doc.id,
            data: formatarData(data), // Formata a data
            emocao: doc.data().emocao,
            anotacoes: doc.data().anotacoes || "", // Texto opcional
          };
        });
        setEmocoes(dados); // Atualiza o estado com as emoções
      } catch (error) {
        console.error("Erro ao buscar emoções:", error);
      }
    };

    buscarEmocoes();
  }, []); // Executa apenas uma vez (quando o componente monta)

  // Função que lida com o clique em um dia do calendário
  const handleDiaClick = (dataClicada) => {
    const dataStr = formatarData(dataClicada); // Formata a data clicada
    const entrada = emocoes.find((e) => e.data === dataStr); // Procura se há emoção registrada para esse dia
    if (entrada) setSelecionado(entrada); // Se houver, abre o modal com os detalhes
  };

  // Função para navegar entre os meses
  const mudarMes = (offset) => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + offset, 1));
  };

  // Nome do mês atual, formatado para exibição
  const nomeDoMes = date.toLocaleDateString("pt-BR", { 
    month: "long",
    year: "numeric"
  }).replace(/de /g, "");

  // Filtra as emoções com base no filtro selecionado (ou mostra todas se não houver filtro)
  const emocoesFiltradas = filtro
    ? emocoes.filter((e) => e.emocao === filtro)
    : emocoes;

  return (
    <div className="calendar-container">
      {/* Cabeçalho do calendário com navegação e filtro */}
      <div className="calendar-header">
        <div className="navigation-wrapper">
          {/* Botões para mudar de mês */}
          <button className="nav-button" onClick={() => mudarMes(-1)}>&lt;</button>
          <h4 className="month-title">{nomeDoMes}</h4>
          <button className="nav-button" onClick={() => mudarMes(1)}>&gt;</button>
        </div>
        
        {/* Dropdown de filtro de emoções */}
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

      {/* Calendário com marcações personalizadas */}
      <div className="calendar">
        <Calendar
          onChange={setDate} // Atualiza a data selecionada
          value={date} // Data atual selecionada
          locale="pt-BR" // Idioma português
          calendarType="iso8601" // Começa a semana na segunda-feira
          onClickDay={handleDiaClick} // Lida com clique nos dias
          view="month" // Visualização mensal
          tileClassName={({ date }) => {
            // Adiciona uma classe se houver emoção registrada para o dia
            const dataStr = formatarData(date);
            return emocoesFiltradas.some(e => e.data === dataStr) 
              ? 'has-entry' 
              : null;
          }}
          tileContent={({ date, view }) => {
            // Adiciona emoji no dia se houver emoção registrada
            if (view !== "month") return null;
            const dataStr = formatarData(date);
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

      {/* Modal exibido ao clicar em um dia com emoção */}
      {selecionado && (
        <ModalHistorico
          data={selecionado.data}
          emocao={selecionado.emocao}
          anotacoes={selecionado.anotacoes}
          onClose={() => setSelecionado(null)} // Fecha o modal
        />
      )}
    </div>
  );
};

export default CalendarioHistorico;
