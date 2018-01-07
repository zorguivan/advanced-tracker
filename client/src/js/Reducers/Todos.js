import ReducersService from '../Services/ReducersService';
import Immutable from 'immutable';

ReducersService.registerReducer('TODOS_READY', (state, action) => {
    return state.set('todos', Immutable.fromJS(action.todos));
});

ReducersService.registerReducer('TODO_READY', (state, action) => {
    return state.set('todo', Immutable.fromJS(action.todo));
});
