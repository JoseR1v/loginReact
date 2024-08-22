import React, { useState } from 'react';
import Button from '../../atoms/button/Button';
import './form.css'
import Input from '../../atoms/input/Input';

const Form = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState({
    nombre: '',
    apellidoMaterno: '',
    apellidoPaterno: '',
  });

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleFetchUserData = async () => {
    try {
      const response = await fetch('/data/users.json');
      const users = await response.json();

      const data = users[userId] || {
        nombre: 'No encontrado',
        apellidoMaterno: 'No encontrado',
        apellidoPaterno: 'No encontrado',
      };

      setUserData(data);
    } catch (error) {
      console.error('Error al cargar los datos del usuario:', error);
    }
  };

  return (
    <div className='form-container'>
      <h2>Formulario de Usuario</h2>
      <form>
        <div className='user-search'>
          <Input
            label="ID Usuario"
            value={userId}
            onChange={handleInputChange}
            className='input-id'
          />
          <Button text='BUSCAR' onClick={handleFetchUserData}/>
        </div>
        <div>
          <Input
            label="Nombre"
            value={userData.nombre}
            disabled
          />
        </div>
        <div>
          <Input
            label="Apellido Materno"
            value={userData.apellidoMaterno}
            disabled
          />
        </div>
        <div>
          <Input
            label="Apellido Paterno"
            value={userData.apellidoPaterno}
            disabled
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
