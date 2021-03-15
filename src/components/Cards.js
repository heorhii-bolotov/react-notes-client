import React from 'react'
import '../App.css'

import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import Fab from '@material-ui/core/Fab'

import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import draftToHtml from "draftjs-to-html";


const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}))

function choose(choices) {
    let index = Math.floor(Math.random() * choices.length)
    return choices[index]
}

function Card({onRemove, onEdit, data, index}) {

    const classes = useStyles()
    // const {title, text, category, color, id} = data
    const {title, text} = data
    const category = 'topic'
    const color = choose(["#FEC006", "#2196F3", "#FE5621", "#673AB7"])
    const id = 1

    return (
        <article className="article">
            <h3 className="article__category"
                style={{background: color}}
            >{category}</h3>

            <div className='card-btn'>
                <Fab
                    size="small"
                    style={{
                        backgroundColor: '#e2b30d',
                        color: 'black'
                    }}
                    className={classes.margin}
                    aria-label="Edit"
                    onClick={() => onEdit(index)}
                >
                    <EditIcon />
                </Fab>
                <Fab
                    size="small"
                    color="secondary"
                    className={classes.extendedIcon}
                    aria-label="Delete"
                    onClick={() => onRemove(index)}
                >
                    <DeleteIcon />
                </Fab>
            </div>

            <h2 className="article__title">{title}</h2>
            <div className="article__text">{text}</div>
        </article>
    )
}

export function Cards({onRemove, onEdit, notes}) {

    const renderArticle = (note, idx) => {

        const data = {
            ...note,
            text: createMarkup(getHtml(note.text))
        }

        return (
            <div className="column">
                <Card
                    index={idx}
                    data={data}
                    onRemove={onRemove}
                    onEdit={onEdit}
                />
            </div>
        )
    }

    return (
        <div className="container">
            {notes.map(renderArticle)}
        </div>
    )
}

const createMarkup = html => <div dangerouslySetInnerHTML={{__html: html}}/>

const getHtml = editorState =>
    draftToHtml(convertToRaw(editorState.getCurrentContent()))
