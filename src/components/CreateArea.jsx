import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import CancelIcon from "@material-ui/icons/Cancel";
import CloseIcon from "@material-ui/icons/Close";
// import { makeStyles } from "@material-ui/core/styles";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  // const node = useRef();

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // const handleClick = () => {
  //   setExpanded(false);
  // };

  // const handleClick = (event) => {
  //   if (!node.current.contains(event.target)) {
  //     if (note.title !== "" || note.content !== "") {
  //       setExpanded(true);
  //     }
  //     setExpanded(false);
  //   }
  // };

  const handleClickClose = () => setExpanded(false);

  /// Functionality on shrinking the create area on outside click (NEED TO FIX)
  // useEffect(() => {
  //   //add when mounted
  //   document.addEventListener("mousedown", handleClick);

  //   //return function to be called when unmounted
  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (note.title === "" || note.content === "") {
      return;
    }
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
    setExpanded(false);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            style={{ fontWeight: "bolder" }}
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            autoFocus
          />
        ) : null}
        <textarea
          style={{ fontWeight: "lighter" }}
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <div className="submitInput">
          <Zoom in={isExpanded}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </div>
        <div className="cancelInput">
          <Zoom in={isExpanded}>
            <Fab onClick={handleClickClose}>
              <CloseIcon />
            </Fab>
          </Zoom>
        </div>
      </form>
    </div>
  );
}

export default CreateArea;
