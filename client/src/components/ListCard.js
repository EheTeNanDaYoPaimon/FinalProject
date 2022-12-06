import { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import { Box, Typography, List, TextField ,ListItemButton, Collapse,Button} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
/*
    This is a card in our list of top 5 lists. It lets select
    a list for editing and it has controls for changing its 
    name or deleting it.
    
    @author McKilla Gorilla
*/
function ListCard(props) {
    // const { store } = useContext(GlobalStoreContext);
    // const [editActive, setEditActive] = useState(false);
    // const [text, setText] = useState("");
    const { idNamePair, selected } = props;
    // function handleLoadList(event, id) {
    //     console.log("handleLoadList for " + id);
    //     if (!event.target.disabled) {
    //         let _id = event.target.id;
    //         if (_id.indexOf('list-card-text-') >= 0)
    //             _id = ("" + _id).substring("list-card-text-".length);

    //         console.log("load " + event.target.id);

    //         // CHANGE THE CURRENT LIST
    //         store.setCurrentList(id);
    //     }
    // }

    // function handleToggleEdit(event) {
    //     event.stopPropagation();
    //     toggleEdit();
    // }

    // function toggleEdit() {
    //     let newActive = !editActive;
    //     if (newActive) {
    //         store.setIsListNameEditActive();
    //     }
    //     setEditActive(newActive);
    // }

    // async function handleDeleteList(event, id) {
    //     event.stopPropagation();
    //     let _id = event.target.id;
    //     _id = ("" + _id).substring("delete-list-".length);
    //     store.markListForDeletion(id);
    // }

    // function handleKeyPress(event) {
    //     if (event.code === "Enter") {
    //         let id = event.target.id.substring("list-".length);
    //         store.changeListName(id, text);
    //         toggleEdit();
    //     }
    // }
    // function handleUpdateText(event) {
    //     setText(event.target.value);
    // }

    // let selectClass = "unselected-list-card";
    // if (selected) {
    //     selectClass = "selected-list-card";
    // }
    // let cardStatus = false;
    // if (store.isListNameEditActive) {
    //     cardStatus = true;
    // }
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
      };

    let songs = ['b','b','b','b','b','b','b']
    let cardElement =
        // <ListItem
        //     id={idNamePair._id}
        //     key={idNamePair._id}
        //     sx={{borderRadius:"25px", p: "10px", bgcolor: '#8000F00F', marginTop: '15px', display: 'flex', p: 1 }}
        //     style={{transform:"translate(1%,0%)", width: '98%', fontSize: '48pt' }}
        //     button
        //     onClick={(event) => {
        //         handleLoadList(event, idNamePair._id)
        //     }}
        // >
        //     <Box sx={{ p: 1, flexGrow: 1 }}>{idNamePair.name}</Box>
        //     <Box sx={{ p: 1 }}>
        //         <IconButton onClick={handleToggleEdit} aria-label='edit'>
        //             <EditIcon style={{fontSize:'48pt'}} />
        //         </IconButton>
        //     </Box>
        //     <Box sx={{ p: 1 }}>
        //         <IconButton onClick={(event) => {
        //                 handleDeleteList(event, idNamePair._id)
        //             }} aria-label='delete'>
        //             <DeleteIcon style={{fontSize:'48pt'}} />
        //         </IconButton>
        //     </Box>
        // </ListItem>
            <List id={"playlist" + idNamePair._id} style={{maxHeight: 200, overflow: 'auto'}}>
                <ListItemButton onClick={handleClick}>
                    <Typography>{idNamePair.name}</Typography>
                    <Box justifyContent={"end"}>
                        <ThumbUpIcon/>
                        <ThumbDownIcon/>
                        <EditIcon/>
                        <Button>Delete</Button>
                    </Box>

                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    {songs.map((song)=>(<Typography>{song}</Typography>))}
                    </List>
                    <Button >Undo</Button>
                    <Button>Redo</Button>
                    <Button>Publish</Button>
                    <Button>Duplicate</Button>
                </Collapse>
            </List>

    // if (editActive) {
    //     cardElement =
    //         <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             id={"list-" + idNamePair._id}
    //             label="Playlist Name"
    //             name="name"
    //             autoComplete="Playlist Name"
    //             className='list-card'
    //             onKeyPress={handleKeyPress}
    //             onChange={handleUpdateText}
    //             defaultValue={idNamePair.name}
    //             inputProps={{style: {fontSize: 48}}}
    //             InputLabelProps={{style: {fontSize: 24}}}
    //             autoFocus
    //         />
    // }

    return (
        cardElement
    );
}

export default ListCard;