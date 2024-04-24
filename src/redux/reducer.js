
const initialData = {
    testData:{}
}

export const testReducer = (state=initialData,action) => {
    switch(action.type){
        case "GET_TESTDATA":
            return{
                ...state,
                testData:action.payload
            }
            default:
                return state
    }
}