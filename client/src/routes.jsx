import App from "./App"

import Dashboard from "./pages/Dashboard"
import Error from "./pages/Error"
import Login from "./pages/Login"


const routes = [
    { path: '/', element: <App />, errorElement: <Error />,
        children: [

            { path: 'error', element: <Error /> },
            
            { path: 'home', element: <Dashboard /> },
            { path: 'login', element: <Login /> },
        ]
    }
]

export default routes