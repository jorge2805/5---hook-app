
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':            
            return [...state, action.payload];
        
        case 'toogle':
            return state.map( x =>
                (x.id === action.payload)
                ? {...x, done: !x.done}
                : x
            );
        
        case 'toogle-old':            
            return state.map( x => {             
                if (x.id === action.payload) {
                    return {
                        ...x,
                        done: !x.done
                    }
                } else {
                    return x;
                }
            });
        case 'delete':            
            return state.filter(x => x.id !== action.payload );
        default:
            return state;
    }
}
