import '../menu/style.css';

export const Menu = () => {
     return(
        <div className="container-menu">
            <ul class="nav flex-colum">
                <li class="nav-item">
                    <a class="nav-link active" href="/historico">Histórico</a>
                </li>
                 <li class="nav-item">
                    <a class="nav-link active" href="/configuracoes">Configurações</a>
                </li>
                
            </ul>
        </div>
    );
}