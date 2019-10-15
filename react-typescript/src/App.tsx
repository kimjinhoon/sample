import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import { My3Component } from './HookComponent';
import MyComponent from './MyComponent';
// import MyComponent from './MyComponent';
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';

const App: React.FC = () => (
    <div className='App'>
      {/* <MyComponent name='리액트'/> */}
      {/* <EventPractice/> */}
      {/* <ValidationSample/> */}
      <Button variant='contained' color='primary'>
        안녕 친구
      </Button>
      <MyComponent name="훈"  />
      <My3Component />
    </div>
);

export default App;
