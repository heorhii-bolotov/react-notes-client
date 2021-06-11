import React, {Component} from 'react'

import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import draftToHtml from 'draftjs-to-html'

import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"

import {Cards} from "./Cards"

export function NotesViewer({notes, onRemove, onEdit, onAdd}) {
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
