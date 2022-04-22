

const toDo1 = [{
    id: 1,
    toDo: "Buy Chicken",
    done: false
}]

const myReducer = (state = toDo1, action) => {

    console.log("reducer executed");

    if (action?.type === "action") {
        return [...state, action.payload];
    }

    return state;
}


let allTodos = myReducer();
console.log(allTodos);

const toDo2 = {
    id: 2,
    toDo: "Talk with Jane",
    done: false
}

const action = {
    type: "action",
    payload: toDo2
}

let allTodos2 = myReducer(allTodos,action);
console.log(allTodos2);
