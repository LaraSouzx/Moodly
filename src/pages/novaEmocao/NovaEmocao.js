import { useState } from "react";
import "../novaEmocao/style.css";
import BarraEmocoes from "../../components/barraEmocoes/BarraEmocoes";
import CampoAnotacao from "../../components/campoAnotacao/Anotacao";
import BotoesAcoes from "../../components/botoesAcoes/BotoesAcao";
import { db, auth } from "../../firebaseConfig";
import { collection, addDoc, doc, getDocs, setDoc } from "firebase/firestore";
import BotaoVoltar from "../../components/botaoVoltar/BotaoVoltar";

/**
 * Componente NovaEmocao
 *
 * Tela onde o usuário pode registrar sua emoção do dia e anotar como se sente.
 * - Permite registrar ou atualizar uma emoção no Firebase
 * - Integração com Firebase Auth e Firestore
 * - Exibe mensagens de sucesso ou erro
 *
 * @returns {JSX.Element} Tela de nova emoção
 */
const NovaEmocao = () => {
  // Estados da emoção selecionada, anotação, navegação e mensagens
  const [emocaoSelecionada, setEmocaoSelecionada] = useState(null);
  const [anotacoes, setAnotacoes] = useState("");
   const [mensagemErro, setMensagemErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
 

  // Data formatada de hoje (exibição)
  const hoje = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  /**
   * Função executada ao confirmar o registro da emoção
   * - Verifica se o usuário está logado
   * - Verifica se já existe uma emoção registrada para hoje
   * - Se sim, atualiza o registro. Se não, cria um novo
   */
  const handleConfirmar = async () => {
    if (!emocaoSelecionada) {
      alert("Selecione uma emoção antes de confirmar.");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      alert("Usuário não está logado.");
      return;
    }

    try {
      const userRef = doc(db, "usuarios", user.uid);
      const emocoesRef = collection(userRef, "emocoes");

      const snapshot = await getDocs(emocoesRef);

      // Data no formato yyyy-mm-dd
      const dataHoje = new Date().toISOString().split("T")[0];

      // Verifica se já existe uma emoção registrada para hoje
      const docExistente = snapshot.docs.find(doc => {
        const dataRegistro = doc.data().data.toDate().toISOString().split("T")[0];
        return dataRegistro === dataHoje;
      });

      if (docExistente) {
        // Atualiza o documento existente
        const docRef = doc(db, "usuarios", user.uid, "emocoes", docExistente.id);
        await setDoc(docRef, {
          emocao: emocaoSelecionada,
          anotacoes: anotacoes,
          data: new Date()
        });
        setMensagemSucesso("Emoção atualizada com sucesso!");
      } else {
        // Cria novo documento
        await addDoc(emocoesRef, {
          emocao: emocaoSelecionada,
          anotacoes: anotacoes,
          data: new Date()
        });
        setMensagemSucesso("Emoção registrada com sucesso!");
      }

      // Limpa mensagens e campos
      setMensagemErro("");
      setEmocaoSelecionada(null);
      setAnotacoes("");

    } catch (error) {
      console.error("Erro ao salvar emoção:", error);
      setMensagemErro("Erro ao salvar emoção. Tente novamente.");
      setMensagemSucesso("");
    }
  };

  // Limpa os campos ao cancelar
  const handleCancelar = () => {
    setEmocaoSelecionada(null);
    setAnotacoes("");
  };

  // Atualiza a emoção selecionada
  const handleSelecionar = (emocao) => {
    setEmocaoSelecionada(emocao);
    console.log("Emoção selecionada:", emocao);
  };

  return (
    <div className="nova-emocao-container">
      {/* Exibe a data atual */}
      <h2 className="data-hoje">{hoje}</h2>

      <BotaoVoltar />

      <h3 className="hoje-sinto">Hoje eu me sinto...</h3>

      {/* Barra de seleção de emoções */}
      <BarraEmocoes
        onSelecionar={handleSelecionar}
        selecionado={emocaoSelecionada}
      />

      {/* Campo de anotação */}
      <CampoAnotacao
        value={anotacoes}
        onChange={(e) => setAnotacoes(e.target.value)}
      />

      {/* Botões de ação: confirmar ou cancelar */}
      <BotoesAcoes
        onConfirmar={handleConfirmar}
        onCancelar={handleCancelar}
      />

      {/* Mensagens de feedback */}
      {mensagemErro && <div className="alert erro-alert">{mensagemErro}</div>}
      {mensagemSucesso && <div className="alert sucesso-alert">{mensagemSucesso}</div>}

      {/* SVG decorativo azul */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="750"
        height="850"
        viewBox="0 0 744 960"
        fill="none"
        className="organicoum"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M223.504 5.31648C405.414 49.8968 350.251 339.67 459.04 492.28C532.643 595.529 712.513 603.971 738.729 728.071C766.908 861.461 677.243 989.684 585.38 1090.34C488.506 1196.48 367.019 1287.13 223.504 1292.61C75.535 1298.26 -85.6002 1242.85 -167.08 1119.08C-241.643 1005.81 -148.528 863.723 -148.12 728.071C-147.714 593.27 -226.362 459.268 -164.735 339.412C-83.5423 181.504 51.1848 -36.9133 223.504 5.31648Z"
          fill="#02C5C6"
        />
      </svg>

      {/* SVG decorativo verde */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="700"
        height="1000"
        viewBox="0 0 667 1024"
        fill="none"
        className="organicodois"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M202.558 -230.059C268.027 -317.315 378.042 -382.937 487.24 -383.093C599.273 -383.253 670.739 -239.273 782.476 -230.888C898.099 -222.211 1013.11 -401.665 1109.07 -336.427C1208.04 -269.144 1078.27 -83.0263 1145.55 15.9384C1214.97 118.039 1415.25 78.15 1467.12 190.17C1512.68 288.594 1429.37 406.347 1367.42 495.148C1310.77 576.355 1222.71 630.209 1132.16 670.325C1056.39 703.892 955.236 656.803 889.301 706.968C783.693 787.319 789.775 991.019 662.229 1027.86C557.067 1058.24 463.835 932.04 389.684 851.292C323.386 779.096 322.936 667.06 261.081 591.025C189.861 503.478 31.1155 486.73 4.03571 377.233C-21.9741 272.062 102.332 187.958 135.958 85.0923C169.737 -18.2399 137.336 -143.132 202.558 -230.059Z"
          fill="#B8DE6F"
        />
      </svg>
    </div>
  );
};

export default NovaEmocao;
