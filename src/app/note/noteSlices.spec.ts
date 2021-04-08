import counterReducer, { addNote, NoteSliceStateType, updateNote } from './noteSlices';

describe('counter reducer', () => {
  const initialState: NoteSliceStateType = {
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, addNote());
    expect(actual).toEqual({1: {id: 1}});
  });

  it('should handle decrement', () => {
    const id = '1';
    const actual = counterReducer({...initialState, ...{1: {id: 1}} }, updateNote({id, card: {title: 'title', content: 'content'}}));
    expect(actual).toEqual({1:{id: 1, title: 'title', content: 'content'} });
  });
});
