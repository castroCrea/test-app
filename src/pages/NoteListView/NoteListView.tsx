import { useAppSelector } from '../../app/hooks';
import { getNotes } from '../../app/note/noteSlices';
import NoteListItem from './NoteListItem';
import List from '@material-ui/core/List';

const NoteListView = () => {
  const notes = useAppSelector(getNotes);

  return <List>
    {notes.map(note =>
      <NoteListItem note={note} key={note.id} />
    )}
    </List>
}

export default NoteListView