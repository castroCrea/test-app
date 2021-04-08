import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateId } from '../../services/id'
import { RootState } from '../../app/store';

export type NoteType = {title?: string,
    content?: string,
    id: number}

export type NoteSliceStateType = {
  [id: string]: {
    title?: string,
    content?: string,
    id: number
  }
}

const initialState: NoteSliceStateType = {}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state: NoteSliceStateType) => {
      const newNote: NoteType = {
        id: generateId(state)
      }
      state[newNote.id] = newNote
    },
    updateNote: (state: NoteSliceStateType, action: PayloadAction<{ id: string, card: Partial<NoteType> }>) => {
      const id = action.payload.id
      if (state[id]) {
        state[id] = {...state[id], ...action.payload.card}
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNote, updateNote } = noteSlice.actions

/** SELECTORS */
export const getCards = (state: RootState) => Object.values(state.note);
export const getCard = (state: RootState) => (id: string) => state.note[id];

export default noteSlice.reducer