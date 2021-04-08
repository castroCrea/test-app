import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addNote, getCards } from '../../app/note/noteSlices';

const NoteList = () => {
  const cards = useAppSelector(getCards);
  const dispatch = useAppDispatch();
  
  return <div>
    <button
      onClick={() => dispatch(addNote())}
    >Add Note</button>
    {cards.map(card => <li>{card.title}</li>)}
    </div>
}

export default NoteList