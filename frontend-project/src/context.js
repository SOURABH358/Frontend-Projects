import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer';
import projects from './data';
const initialState = {
    data: [],
    currentTag: 'All',
    tags: []
}
const AppContext = React.createContext();
function AppProvider() {
    const [globalState, dispatch] = useReducer(reducer, initialState);

    const fetchData = () => {
        const tags = [...new Set(projects.map(project => {
            return project.tags
        })
        .join(', ')
        .split(", "))]
        console.log(tags)
        dispatch({ type: 'FETCH_DATA', payload: projects })

    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <AppContext.Provider value=
            {
                ...globalState
            }>

        </AppContext.Provider>
    )
}

const GlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, GlobalContext }