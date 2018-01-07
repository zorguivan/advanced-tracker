import Immutable from 'immutable';

import ReducersService from '../Services/ReducersService';
import {createStore} from 'redux';
import createInitialState from '../start_up';

let store = createStore(ReducersService.reduce.bind(ReducersService), Immutable.fromJS(createInitialState()));
console.log(store)

export default store;