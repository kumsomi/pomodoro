const taskReducer=(state, action)=>{
    const{type, payload}=action;
    switch(type){
        case "ADD_TASK":return{
            ...state,
            tasks:[
                ...state.tasks,
                {
                    id:payload.id,
                    title:payload.title,
                    description: payload.description,
                    focusDuration: payload.focusDuration,
                    breakDuration: payload.breakDuration,
                  },
                ],
            };
        
        case "UPDATE_TASK":
            return { ...state, tasks: [...payload] };
        
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== payload.id),
            };
        
        default:
            return state;
    }
}
export {taskReducer};