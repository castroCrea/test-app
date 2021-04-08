import { Link } from 'react-router-dom';
import { NoteType } from '../../app/note/noteSlices';
import DeleteNoteButton from './DeleteNoteButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';

const NoteListItem = ({ note }: { note: NoteType }) => {


  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps) => (
        <Link to={`/${note.id}`} {...linkProps} />
      )),
    [note.id],
  );
  

  return (
    <ListItem button component={CustomLink}>
      <ListItemText primary={note.title || 'Untitled'}/>
      <ListItemSecondaryAction><DeleteNoteButton id={note.id}/></ListItemSecondaryAction>
    </ListItem>
  )
}

export default NoteListItem