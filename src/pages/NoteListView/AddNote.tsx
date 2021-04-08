import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addNote } from '../../app/note/noteSlices';

const AddNote = () => {
  const dispatch = useAppDispatch();

  const handleAddNote = React.useCallback(() => {
      dispatch(addNote())
  }, [dispatch])

  return (
    <button
      onClick={handleAddNote}
    >
      Add Note
    </button>
  )
    
}

export default AddNote