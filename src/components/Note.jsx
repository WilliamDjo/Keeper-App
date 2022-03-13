import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
// import EditNote from "./EditNote";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  // const handleOnEdit = () => {
  //   props.onEdit();
  // };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div style={{ left: "50px" }}>
        <button onClick={handleClick}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </button>
        <button onClick={props.editOpen}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </button>
      </div>
      {/* <EditNote open={props.openStatus} onClose={props.editClose}></EditNote> */}
    </div>
  );
}

export default Note;
