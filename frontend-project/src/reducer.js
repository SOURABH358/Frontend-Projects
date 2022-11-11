const reducer = (state, action) => {

    if (action.type === 'FETCH_DATA') {
        return {
            data: [...action.payload.projects],
            tags: [...action.payload.tags]
        }
    }
    if (action.type === 'CHANGE_TAG') {
        const tagsList = state.tags.map(el => {
            if (el.title === action.payload.tagName)
                return { ...el, active: true }
            return { ...el, active: false };
        })
        const projects = action.payload.data.filter(el => {
            return el.tags.includes(action.payload.tagName)
        })
        if (action.payload.tagName === 'all') {
            return {
                data: [...action.payload.data],
                tags: [...tagsList]
            }
        }
        return {
            data: [...projects],
            tags: [...tagsList]
        }
    }
}

export default reducer;