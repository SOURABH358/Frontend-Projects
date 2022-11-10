import React, { StrictMode } from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import { AppProvider } from "./context"
import App from "./App"
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<StrictMode>
    <AppProvider>
        <App />
    </AppProvider>
</StrictMode>)
