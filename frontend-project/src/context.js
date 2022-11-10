import React, {useContext} from 'react'

const intialState = {
    data: []
}
function AppProvider(){
    const AppContext = React.createContext();

    return(
        <AppContext.Provider>

        </AppContext.Provider>
    )
}


export {AppProvider}