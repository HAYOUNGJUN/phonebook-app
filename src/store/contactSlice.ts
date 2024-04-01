import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
export type ContactItem = {
  id: number;
  name: string;
  phoneNumber: number;
};

type ContactState = {
  items: ContactItem[];
  searchTerm: string;
};

// Define the initial state using that type
const initialState: ContactState = {
  items: [],
  searchTerm: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addContact: (
      state,
      action: PayloadAction<{ id: number; name: string; phoneNumber: number }>
    ) => {
      state.items.push(action.payload);
    },
    removeContact: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(itemIndex, 1);
    },
    saveSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addContact, removeContact, saveSearchTerm } =
  contactSlice.actions;
