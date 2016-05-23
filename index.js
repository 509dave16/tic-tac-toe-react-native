import React from 'react';
import model from './sam/model.js'
import Game from './components/Game.js';

const App = () => {
  return (<Game store={model.store} present={model.present} />);
};

export default App;