import React from 'react';
import Game from './components/Game.js';
import initEngine from 'tic-tac-toe-engine';
const engine = initEngine("https://tic-tac-toe-redux-sam.firebaseio.com");

const App = () => {
  return (<Game store={engine.store} actions={engine.actions} />);
};

export default App;