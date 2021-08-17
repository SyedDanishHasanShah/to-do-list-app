import React from 'react';

import TaskAdderAndEditor from './TaskAdderAndEditor';

import Heading from '../utils/styled-components/Heading';
import GlobalStyles from '../utils/styled-components/GlobalStyles';

const Wrapper = () => {
  return (
    <>
      <GlobalStyles/>
      <Heading main>To Do App</Heading>
      <TaskAdderAndEditor />
    </>
  );
}

export default Wrapper;
