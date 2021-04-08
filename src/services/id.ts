import { NoteSliceStateType } from "../app/note/noteSlices";

export const generateId = (cardSlice: NoteSliceStateType) => {
  const lastKeys = Object.keys(cardSlice).sort().pop();
  return `${(parseInt(lastKeys || '0') || 0) + 1}`
}