import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addNote, getCards } from '../../app/note/noteSlices';

const NoteList = () => {
  const cards = useAppSelector(getCards);
  const dispatch = useAppDispatch();
  
  return <div>
    <button
      onClick={() => dispatch(addNote())}
    >
      Add Note
    </button>
    {cards.map(card =>
      <Link to={`/${card.id}`}>{card.title || 'Untitled'}</Link>
    )}
    </div>
}

export default NoteList