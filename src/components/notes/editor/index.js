import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 
import '../../../styles/';  

function Editor(props) {
  const [currentContent, setCurrentContent] = useState('');
  const [timer, setTimer] = useState(null);
  const quillRef = useRef(null);

  const updateNote = (content) => {
    const title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 30);
    props.updateNote(props.note, { 'title': title, 'body': content });
  }

  const handleChange = (content, delta, source) => {
    clearTimeout(timer);
    if (source === 'user') {
      setCurrentContent(content);
      setTimer(setTimeout(() => updateNote(content), 2000));
    }
  }

  useEffect(() => {
    setCurrentContent(props.note.body);
  }, [props.note]);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.root.style.backgroundColor = '#6a0dad'; // Purple background
      editor.root.style.color = '#ffffff'; // White text
    }
  }, [quillRef.current]);

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean'],
    ]
  }

  return (
    <>
      <ReactQuill
        ref={quillRef}
        value={currentContent}
        onChange={handleChange}
        modules={modules}
      />
    </>
  );
}

export default Editor;
