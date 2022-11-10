const reducer = (state, action)=>{

    if(action.type === 'FETCH_DATA')
    {
        return {
            data: [...action.payload.projects],
            tags: [...action.payload.tags],
            currentTag: 'all'
        }
    }
}

export default reducer;