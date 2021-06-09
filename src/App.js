import React, {useEffect, useState} from 'react';
import './App.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Container, Typography } from "@material-ui/core"
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import FormContainer from './containers/index_form'

//import FormContainer from './containers/index_form'
import View from './components/test_components/test_view'

import {NoteEditor} from "./components/NoteEditor"
import {NotesViewer} from "./components/NotesViewer";

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

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
  

            <BrowserRouter>
                <Container maxWidth="lg">
                    {/* Header Part */}
                    <Header/>

                    <Switch>
                        <Route exact path="/">
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
                        </Route>
                        {/* Sign In Sign Up */}
                        <Route path="/auth" exact component={FormContainer}/>
                    </Switch>
                  
                    {/* Footer Part */}
                    <Footer /> 
                </Container>
            </BrowserRouter>
    
    )

}

export default App
