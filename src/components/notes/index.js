import React, { useEffect, useState } from 'react';
import { Column } from "rbx";
import "../../styles/notes.scss";
import { push as Menu } from 'react-burger-menu';
import List from "../notes/list/index";
import NoteService from '../../services/notes';
import Editor from '../notes/editor/index';
import Search from '../notes/search/index';

function Notes(props) {

  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: "", body: "", id: "" });

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    try {
      const response = await NoteService.index();
      console.log('API Response:', response);
      
      if (response && Array.isArray(response)) {
        console.log('Number of notes:', response.length);
        setNotes(response.reverse()); 
        if (response.length > 0) {
          setCurrentNote(response[0]);
        }
      } else {
        console.error('Response data is not an array or is undefined');
        setNotes([]);
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }

  const deleteNote = async (note) => {
    await NoteService.delete(note._id);
    fetchNotes();
  }

  const searchNotes = async (query) => {
    const response = await NoteService.search(query);
    setNotes(response.data);
  }

  const updateNote = async (oldNote, params) => {
    const updateNote = await NoteService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = [...notes]; 
    newNotes[index] = updateNote;
    setNotes(newNotes);
    setCurrentNote(updateNote);
  }

  const createNote = async () => {
    await NoteService.create();
    fetchNotes();
  }

  const selectNote = (id) => {
    const note = notes.find((note) => note._id === id);
    setCurrentNote(note);
  }

  return (
    <>
      <div className="notes" id="notes">
        <Menu 
          pageWrapId={"notes-editor"} 
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus 
          outerContainerId={"notes"}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <Column.Group>
            <Column size={10} offset={1}>
              <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
            </Column>
          </Column.Group>
          <List
            notes={notes}
            selectNote={selectNote}
            current_note={currentNote} 
            deleteNote={deleteNote}
            createNote={createNote}
          />
        </Menu>

        <Column size={12} className="notes-editor" id="notes-editor">
          <Editor note={currentNote} updateNote={updateNote} />        
        </Column>
      </div>
    </>
  )
}

export default Notes;
