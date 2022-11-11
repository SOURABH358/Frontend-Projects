const reducer = (state, action)=>{

    if(action.type === 'FETCH_DATA')
    {
        return {
            data: [...action.payload.projects],
            tags: [...action.payload.tags]
        }
    }
    if(action.type === 'CHANGE_TAG')
    {
        return {
            ...state,
            tags: state.tags.map(el=>{
                if(el.title === action.payload)
                    return {title: action.payload, current: true} 
                return {...el, current: false};
            })
        }
    }
}

export default reducer;