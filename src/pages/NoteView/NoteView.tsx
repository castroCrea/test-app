import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCard, updateNote } from '../../app/note/noteSlices';
import NoteEditor from './NoteEditor';

const NoteView = () => {
    let { id }: {id: string} = useParams();

  const card = useAppSelector(state => getCard(state)(id));
  const dispatch = useAppDispatch();
  
  const handleChange = React.useCallback((value) => {
    dispatch(updateNote({id, card: {title: value[0]?.children?.[0]?.text, content: value}}))
  }, [dispatch, id])
  
  return(
    <div>
      <Link to='/'>Back</Link>
    <div>
        <NoteEditor title={card.title} content={card.content} onChange={handleChange}/>
    </div>
  </div>)

}

export default NoteView