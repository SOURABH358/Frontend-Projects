import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer';
import projects from './data';
let initialState = {
    data: [],
    tags: []
}
const AppContext = React.createContext();
function AppProvider({children}) {
    const [globalState, dispatch] = useReducer(reducer, initialState);

    const fetchData = () => {
        let tagsList = [...new Set(projects.map(project => {
            return project.tags
        })
        .join(', ')
        .split(", "))]
        let tags = tagsList.map(el=>{
            return {title: el, active: false}
        })
        tags.unshift({title: 'all', active: true})
        dispatch({ type: 'FETCH_DATA', payload: {tags, projects} })

    }
    const changeTag = (tagName)=>{
        dispatch({type: 'CHANGE_TAG', payload: {tagName}})
        console.log(globalState.tags)
    }
    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <AppContext.Provider value={
            {
                ...globalState,
                changeTag
            }}>
                {children}
        </AppContext.Provider>
    )
}

const GlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, GlobalContext }