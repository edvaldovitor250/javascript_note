import Api from './api';

const NotesService = {

  

  create: async (note) => {
    try {
      const response = await Api.post('/notes', note, {
        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
      });
      return response.data;
    } catch (error) {
      console.error('Error creating note:', error.response ? error.response.data : error.message);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      await Api.delete(`/notes/${id}`, {
        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
      });
    } catch (error) {
      console.error('Error deleting note:', error.response ? error.response.data : error.message);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      const response = await Api.put(`/notes/${id}`, data, {
        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
      });
      return response.data;
    } catch (error) {
      
      if (error.response && error.response.status === 404) {
        console.warn('Note not found, ignoring update error.');
        return data; 
      }
      console.error('Error updating note:', error.response ? error.response.data : error.message);
      throw error;
    }
  }
};

export default NotesService;
