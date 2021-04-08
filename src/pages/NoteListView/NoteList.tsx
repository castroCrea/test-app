import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteNote, getCards } from '../../app/note/noteSlices';

const NoteList = () => {
  const cards = useAppSelector(getCards);
  const dispatch = useAppDispatch();

  const handleDelete = React.useCallback((id: string) => {
    dispatch(deleteNote({ id }))
  }, [dispatch])
  
  return <ul>
    {cards.map(card =>
      <li>
        <Link key={card.id} to={`/${card.id}`}>{card.title || 'Untitled'}</Link>
        <button onClick={() => handleDelete(card.id)}>Delete</button>
      </li>
    )}
    </ul>
}

export default NoteList