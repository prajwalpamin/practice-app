const initialState={
    count:0
}
function addReducer(state=initialState,{type,payload}){
    switch(type){
        case "INCREMENT":{
            return({...state,count:state.count + payload})
        }
        case "DECREMENT":{
            return({...state,count:state.count - payload})
        }
        default: state;

    }
}
export default addReducer;