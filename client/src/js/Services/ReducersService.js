import Immutable from 'immutable';

class ReducersService{
    constructor(){
        this.reducers = {};
    }

    registerReducer(name, reducer){
        this.reducers[name] = reducer;
        console.log(this.reducers)
    }

    reduce(state, action){
        if (this.reducers[action.type]){
            return this.reducers[action.type](state, action);
        }
        else{
            return state || Immutable.Map({});
        }
    }
}

export default new ReducersService();