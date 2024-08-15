import React, { useState } from 'react';
import { Button } from 'rbx';
import UsersService from '../../../services/users';
import { useNavigate } from 'react-router-dom'; 
import '../../../styles/user_delete.scss';

function UsersDelete() {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const navigate = useNavigate(); 

  const deleteUser = async () => {
    if (window.confirm('Are you sure you wish to delete this account?')) {
      await UsersService.delete();
      setRedirectToHome(true);
    }
  };

  if (redirectToHome) {
    navigate('/'); 
    return null;
  }

  return (
    <Button className="custom-register-button-Delete" color="danger" onClick={deleteUser}>
      Excluir conta
    </Button>
  );
}

export default UsersDelete;
