import React, {useState} from 'react'

import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import draftToHtml from 'draftjs-to-html'

import ButtonGroup from "@material-ui/core/ButtonGroup"
import {Button, Typography, Paper} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

import {Cards} from "./Cards"

export function NotesViewer({notes, onRemove, onEdit, onAdd}) {
    const user = JSON.parse(localStorage.getItem('profile'));
    const paperStyle={padding:  20, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', margin: 20};
    const textStyle = {color: "white"}


    if (!user?.result) {
        return (
          <Paper elevation={2} style={paperStyle}>
            <Typography style={textStyle} variant="h4" align="center">
                <b>SimpleNotes is easy way to create own notes.<p>Sign in to start.</p></b>
            </Typography>
          </Paper>
        );
      }

    return (
        <div>
            <ButtonGroup variant="contained" color='primary'>
                <Button
                    startIcon={<AddIcon/>}
                    onClick={onAdd}
                >
                    Add
                </Button>
            </ButtonGroup>

            <Cards
                onRemove={onRemove}
                onEdit={onEdit}
                notes={notes}
            />

            {/*<Cards*/}
            {/*    details={[*/}
            {/*        { text: createMarkup(cardRef.current), title: titleState, color: "#FEC006", category: "Personal"},*/}
            {/*        { text: createMarkup(cardRef.current), title: titleState, color: "#2196F3", category: "Sport"},*/}
            {/*        { text: createMarkup(cardRef.current), title: titleState, color: "#FE5621", category: "Hobby"},*/}
            {/*        { text: createMarkup(cardRef.current), title: titleState, color: "#673AB7", category: "Work"},*/}
            {/*        { text: createMarkup(cardRef.current), title: titleState, color: "#2196F3", category: "Goal"},*/}
            {/*        { text: createMarkup(cardRef.current), title: titleState, color: "#FEC006", category: "ToDO"},*/}
            {/*    ]} />*/}

        </div>
    )

}
