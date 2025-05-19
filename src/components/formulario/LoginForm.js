// src/components/LoginForm.js
import React from 'react';
import '../formulario/style.css';

const LoginForm = () => {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-form">
          <div className="login-header">
            <h2>Entre na sua conta</h2>
            <p>É de graça e fácil</p>
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </div>
        </div>

        <button className="signup-button">Entre</button>

        <div className="divider">
          <hr />
          <span>ou faça login com outras contas</span>
          <hr />
        </div>

        <div className="social-login">
          <div className="social-icon">
            {/* Simulação de ícone social */}
            <div className="icon-placeholder" />
          </div>
        </div>

        <div className="login-footer">
          <span className="text-muted">Você já tem uma conta? </span>
          <span className="text-link">Entre agora</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
