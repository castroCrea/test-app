import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { deleteNote } from '../../app/note/noteSlices';
import { Button } from '@material-ui/core';

const DeleteNoteButton = React.memo(({id}: {id: string}) => {
  const dispatch = useAppDispatch();

  const handleDelete = React.useCallback(() => {
    dispatch(deleteNote({ id }))
  }, [dispatch, id])
  
  return <Button onClick={handleDelete} variant="contained" color="secondary">Delete</Button>
})

export default DeleteNoteButton