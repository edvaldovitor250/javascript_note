import { useState } from "react";
import HeaderLogged from "../../../src/components/header_logged/index";
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
