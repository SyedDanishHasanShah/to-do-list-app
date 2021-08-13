import React, { useState } from 'react';

import TaskAdderAndEditor from './TaskAdderAndEditor';

import WrapperContext from '../contexts/WrapperContext';

import Heading from '../utils/styled-components/Heading';
import GlobalStyles from '../utils/styled-components/GlobalStyles';

const Wrapper = () => {
  const [taskList, setTaskList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <GlobalStyles/>
      <Heading main>To Do App</Heading>
      <WrapperContext.Provider value={{
        taskList,
        setTaskList,
        isEdit,
        setIsEdit,
      }}>
        <TaskAdderAndEditor />
      </WrapperContext.Provider>
    </>
  );
}

export default Wrapper;
