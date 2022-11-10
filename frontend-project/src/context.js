import React, {useContext, useEffect, useReducer} from 'react'
import reducer from './reducer';
import projects from './data';
const initialState = {
    data: []
}
const AppContext = React.createContext();
function AppProvider(){
    const [globalState, dispatch] = useReducer(reducer, initialState);

    const fetchData = ()=>{
        useEffect(()=>{
            dispatch({type: 'FETCH_DATA', payload: projects})
        },[])
    }
    return(
        <AppContext.Provider>

        </AppContext.Provider>
    )
}

const GlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider, GlobalContext}