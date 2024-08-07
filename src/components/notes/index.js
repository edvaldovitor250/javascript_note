import React, { useEffect, useState } from 'react';
import { Column } from "rbx";
import "../../styles/notes.scss";
import { push as Menu } from 'react-burger-menu';
import List from "../notes/list/index";
import NoteService from '../../services/notes';
import Editor from '../notes/editor/index'
import Search from '../notes/search/index'

function Notes(props) {

  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: "", body: "", id: "" });

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const response = await NoteService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse());
      setCurrentNote(response.data[0]);
    } else{
      setNotes([])
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
    const newNotes = notes;
    newNotes[index] = updateNote.data;
    setNotes(newNotes);
    setCurrentNote(oldNote.data);
  }

  const createNote = async () => {
    await NoteService.create();
    fetchNotes();
  }

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id === id;
    });
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
        <Editor note={currentNote}
        updateNote={updateNote}
        />        
        </Column>
      </div>
    </>
  )
}

export default Notes;
