import React from "react";
import NoteContent from "./NoteContent";

export default function NoteItem({ id, title, body, createdAt, archived, action }) {
  const onDeleteNote = (item) =>
    action((notes) => notes.filter((note) => note.id !== item));

  const onArchiveNote = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  return (
    <div >
      <NoteContent
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
        action={action}
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
        id={id}
      />
    </div>
  );
}
