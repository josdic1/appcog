import App from "./App"
import Error from "./pages/Error"
import Dashboard from "./pages/Dashboard"

const routes = [
    { path: '/', element: <App />, errorElement: <Error />,
        children: [
            { path: 'error', element: <Error /> },
            { path: 'home', element: <Dashboard /> }
        ]
    }
]

export default routes