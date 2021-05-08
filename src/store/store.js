import { configureStore } from '@reduxjs/toolkit';
import addTask from '../taskListSlice';

export default configureStore({
  reducer: {
    input: addTask,
  },
});