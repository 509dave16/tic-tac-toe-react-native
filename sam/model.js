import { createStore } from 'redux'
import  mutations  from './model/mutations.js'
import present from './model/present.js'
import nap from './nap.js'

const createModel = () => {
  const store = createStore(mutations.reducers);
  const mergeStateToPresent = dataset => {
    present(dataset, store.getState())(store.dispatch);
    nap(store.getState())(mergeStateToPresent);
  };

  mergeStateToPresent({type:'FIRST_DISPATCH'});

  return {
    present: mergeStateToPresent,
    store
  }
};

export default createModel()
