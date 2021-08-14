import React, { useState } from 'react';

export const WrapperContext = React.createContext();
export const WrapperContextProvider = WrapperContext.Provider;

export const withWrapperContext = (WrappedComponent) => (props) => {
  const [taskList, setTaskList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <WrapperContextProvider value={{ taskList, setTaskList, isEdit, setIsEdit }}>
      <WrappedComponent {...props}/>
    </WrapperContextProvider>
  );
}
