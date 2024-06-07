import React, { useState } from 'react';
import cadeado from '../../images/cadeado.png'
import { Botao, Div1, Div2, Div3, DivForm, Icone, Secao } from './styles'
import { Loading } from '../Loading';

interface LoginProps {
    onLogin: (isLoggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // aqui simula o tempo de login
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (username === 'admin' && password === '12345678') {
            onLogin(true);
        } else {
            setErrorMessage('Usuário ou senha incorretos');
        }

        setLoading(false);
    };
  return(
    <>
    <Secao>
        <Div1>
          <Div2>
            <Div3>
              <Icone><img src={cadeado} alt="" /></Icone>
              <h2>Faça seu Login</h2>
              <DivForm>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Nome*</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Digite seu Nome" />
                  </div>
                  <div>
                    <label>Senha*</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Digite sua Senha" />
                  </div>
                    <Botao type='submit' disabled={loading}>Login</Botao>
                  {errorMessage && <div>{errorMessage}</div>}
                  <Loading visible={loading} />
                </form>
              </DivForm>
                <a className='opcao'>Não tem uma conta?</a>
                <a className='opcao'>Esqueceu sua senha?</a>
            </Div3>
          </Div2>
        </Div1>
    </Secao>
    </>
  )
}

export default Login;
