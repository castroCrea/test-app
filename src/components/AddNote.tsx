import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { addNote } from '../app/note/noteSlices';
import { Button } from '@material-ui/core';

const AddNote = () => {
  const dispatch = useAppDispatch();

  const handleAddNote = React.useCallback(() => {
      dispatch(addNote())
  }, [dispatch])

  return (
    <Button
      onClick={handleAddNote}
      color="primary"
    >
      Add Note
    </Button>
  )
    
}

export default AddNote