import { useState } from "react";
import HeaderLogged from "../../../components/header_logged";
import Notes from "../../components/notes";

const NotesScrenn = () => {



  const [isOpen, setIsOpen] = useState(false);

  return (

    <>
      <HeaderLogged />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />


    </>
  )


}

export default NotesScrenn;
