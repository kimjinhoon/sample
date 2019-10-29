import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import { My3Component } from './HookComponent';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
// import MyComponent from './MyComponent';
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';

const App: React.FC = () => {
  return (
    <div className='App'>
      {/* <MyComponent name='리액트'/> */}
      {/* <EventPractice/> */}
      {/* <ValidationSample/> */}
      <Button variant='contained' color='primary'>
        안녕 친구
      </Button>
      <MyComponent name="훈" >리액트</MyComponent>
      <My3Component />
      <EventPractice />
      <ValidationSample />
      {/* <ScrollBox /> */}
      <IterationSample />
    </div>
);
}

export default App;
