import ReducersService from '../Services/ReducersService';
import Immutable from 'immutable';

ReducersService.registerReducer('PROJECTS_READY', (state, action) => {
    return state.set('projects', Immutable.fromJS(action.projects));
});
