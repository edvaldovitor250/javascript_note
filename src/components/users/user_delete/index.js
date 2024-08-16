import React, { useState } from 'react';
import { Button } from 'rbx';
import { Navigate } from 'react-router-dom';
import UsersService from '../../../services/users'; 
import '../../../styles/user_delete.scss';

function UsersDelete() {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [error, setError] = useState(null); 

  const deleteUser = async () => {
    if (window.confirm('Are you sure you wish to delete this account?')) {
      try {
        await UsersService.delete();
        setRedirectToHome(true);
      } catch (err) {
        setError('Failed to delete account. Please try again later.');
        console.error('Error deleting user:', err);
      }
    }
  };

  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {error && <p className="error-message">{error}</p>} 
      <Button className="custom-register-button-Delete" color="danger" onClick={deleteUser}>
        Excluir conta
      </Button>
    </div>
  );
}

export default UsersDelete;
