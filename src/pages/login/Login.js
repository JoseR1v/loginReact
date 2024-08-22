import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css'
import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input'

const Login = () => {
  const [username, setUsername] = useState('azteca');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [errorPassword, setErrorPassword] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    if (username === 'azteca' && password === '12345') {
      history.push('/home');
    } else {
      setAttempts(attempts + 1);
      console.log('contraseña incorrecta');
      setErrorPassword(`Los datos ingresados son incorrectos, te quedan ${2 - attempts} intentos`)

      if (attempts >= 2) {
        setIsButtonDisabled(true);
      }
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <div className='input-container'>
        <Input label="ID usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        { errorPassword && <p className='error'>{errorPassword}</p>}
      </div>
      <div className='button-container'>
        <Button text='Enviar' className='button' onClick={handleLogin} disabled={isButtonDisabled}/>
      </div>

    </div>
  );
};

export default Login;
