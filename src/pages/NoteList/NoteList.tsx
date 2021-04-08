import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addNote, deleteNote, getCards } from '../../app/note/noteSlices';

const NoteList = () => {
  const cards = useAppSelector(getCards);
  const dispatch = useAppDispatch();

  console.log(cards)
  
  return <div>
    <button
      onClick={() => dispatch(addNote())}
    >
      Add Note
    </button>
    {cards.map(card =>
      <li>
        <Link key={card.id} to={`/${card.id}`}>{card.title || 'Untitled'}</Link>
        <button onClick={() => dispatch(deleteNote({ id: card.id }))}>Delete</button>
      </li>
    )}
    </div>
}

export default NoteList