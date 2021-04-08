import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { getCard } from '../../app/note/noteSlices';

const NoteView = () => {
    let { id }: {id: string} = useParams();

  const card = useAppSelector(state => getCard(state)(id));
  
  return(
    <div>
      <Link to='/'>Back</Link>
    <div>
      {card.title || 'Untitled'}
    </div>
  </div>)

}

export default NoteView