import React, { useState } from 'react';

export const TaskAdderAndEditorContext = React.createContext();
export const TaskAdderAndEditorContextProvider = TaskAdderAndEditorContext.Provider;

export const withTaskAdderAndEditorContext = (WrappedComponent) => (props) => {
  const [taskDescription, setTaskDescription] = useState('');

  return (
    <TaskAdderAndEditorContextProvider value={{ taskDescription, setTaskDescription }}>
      <WrappedComponent {...props} />
    </TaskAdderAndEditorContextProvider>
  );
}
