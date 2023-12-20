import React from 'react';
import { useEffect, useState } from "react";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer'
import { getInitialData } from "./utils";

function App() {
    const [query, setQuery] = useState("");
    const [searchNotes, setSearchNotes] = useState([]);
    const [notes, setNotes] = useState(getInitialData());
    console.log(notes);
    const allNotes = (searchNotes || notes).filter((note) => !note.archived);
    const archiveNotes = (searchNotes || notes).filter((note) => note.archived);

    useEffect(() => {
        setSearchNotes(
            notes.filter((note) =>
                note.title.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, notes]);

    return (
        <div className="note-app">
            <Header search={query} setQuery={setQuery} />
            <Body
                allNotes={allNotes}
                archiveNotes={archiveNotes}
                setNotes={setNotes}
            />
            <Footer />
        </div>
    )
}

export default App;