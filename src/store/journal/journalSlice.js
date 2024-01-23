import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null
    // activeNote: {
    //   id: 'ABCDE',
    //   title: '',
    //   body: '',
    //   date: 1245,
    //   imageUrls: []
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload
      state.messageSaved = ''
    },
    setNotes: (state, { payload }) => {
      state.notes = payload
    },
    setSaving: (state) => {
      state.isSaving = true
      state.messageSaved = ''
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false
      state.notes = state.notes.map(note => {
        if (note.id === payload.id) return payload
        return note
      })

      state.messageSaved = `${payload.title}, correctly updated!`
    },
    deleteNoteById: (state, action) => {

    }
  }
})

// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById
} = journalSlice.actions
