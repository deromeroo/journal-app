import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: []
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
    setPhotosToActiveNote: (state, action) => {
      state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...action.payload]
      state.isSaving = false
    },
    clearNotesLogout: (state) => {
      state.isSaving = false
      state.messageSaved = ''
      state.notes = []
      state.activeNote = null
    },
    deleteNoteById: (state, action) => {
      state.activeNote = null
      state.notes = state.notes.filter(note => note.id !== action.payload)
    }
  }
})

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
  clearNotesLogout,
  deleteNoteById
} = journalSlice.actions
