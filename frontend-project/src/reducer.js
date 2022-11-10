const reducer = (state, action)=>{

    if(action.type === 'FETCH_DATA')
    {
        return {
            ...state, 
            data: [...action.projects]
        }
    }
}

export default reducer;