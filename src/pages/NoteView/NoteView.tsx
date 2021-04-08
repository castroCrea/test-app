import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getNote, updateNote } from '../../app/note/noteSlices';
import NoteEditor from './NoteEditor';

const NoteView = () => {
  let { id }: {id: string} = useParams();
  const note = useAppSelector(state => getNote(state)(id));
  const dispatch = useAppDispatch();
  
  const handleChange = React.useCallback((value) => {
    dispatch(updateNote({id, note: {title: value[0]?.children?.[0]?.text, content: value}}))
  }, [dispatch, id])
  
  return(
    <div>
      <NoteEditor content={note.content} onChange={handleChange}/>
    </div>
  )

}

export default NoteView