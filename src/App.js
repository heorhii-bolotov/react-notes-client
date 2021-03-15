import React, {useEffect, useState} from 'react'
import './App.css'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import {NoteEditor} from "./components/NoteEditor"
import {NotesViewer} from "./components/NotesViewer";

function App() {

    const [isEditing, setIsEditing] = useState(false)
    const [notes, setNotes] = useState([])
    const [editorState, setEditorState] = useState({
        text: null,
        title: null,
        idx: null
    })

    const onSave = (data, idx=null) => {

        if (idx === null) {
            setNotes(prev => ([
                ...prev,
                data
            ]))
        } else {
            setNotes(prev =>
                prev.map((value, idx1) =>
                    idx1 !== idx ? value: data
                    )
            )
        }
        setIsEditing(!isEditing)
    }

    const onCancel = () => {
        setIsEditing(!isEditing)
        setEditorState(null)
    }

    const onAdd = () => {
        setIsEditing(!isEditing)
        setEditorState(null)
    }

    const onRemove = (index) => {
        setNotes(prev =>
            prev.filter((value, idx) => idx !== index)
        )
    }

    const onEdit = (index) => {
        setIsEditing(!isEditing)
        setEditorState(
            {
                ...notes.find((value, idx) => idx === index),
                idx: index
            }
        )
    }

    return (
        <div className="App">
            {/* Header Part */}
            <header>
                <p>Simple<b>Notes</b> 📝</p>
            </header>

            {/* Text Editor or List of Notes */}
            {
                isEditing ?
                    <NoteEditor
                        onSave={onSave}
                        onCancel={onCancel}
                        note={editorState}
                    /> :
                    <NotesViewer
                        onAdd={onAdd}
                        onRemove={onRemove}
                        onEdit={onEdit}
                        notes={notes}
                    />
            }

            <footer>
                <p>Made with <span role="img" aria-label="love">❤️</span> by <a href="#"><b>Heorh & Denis</b></a></p>
            </footer>

        </div>
    )

}

export default App
