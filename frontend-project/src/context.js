import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer';
import projects from './data';
let initialState = {
    data: [],
    currentTag: 'All',
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
        tags.unshift({title: 'all', current: true})
        dispatch({ type: 'FETCH_DATA', payload: {tags, projects} })

    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <AppContext.Provider value={
            {
                ...globalState
            }}>
                {children}
        </AppContext.Provider>
    )
}

const GlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, GlobalContext }