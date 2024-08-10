import Api from './api';

const NotesService = {
  index: async () => {
    try {
      const response = await Api.get('/notes', {
        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
      });
      if (response.data) {
        return response.data;
      } else {
        console.error('Response data is undefined');
        return [];
      }
    } catch (error) {
      console.error('Error fetching notes:', error.response ? error.response.data : error.message);
      throw error;
    }
  },
  
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

  update: async (id, params) => {
    try {
      const response = await Api.put(`/notes/${id}`, params, {
        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
      });
      return response.data;
    } catch (error) {
      console.error('Error updating note:', error.response ? error.response.data : error.message);
      throw error;
    }
  },

  search: async (query) => {
    try {
      const response = await Api.get(`/notes/search?query=${query}`, {
        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
      });
      return response.data;
    } catch (error) {
      console.error('Error searching notes:', error.response ? error.response.data : error.message);
      throw error;
    }
  }
};

export default NotesService;
