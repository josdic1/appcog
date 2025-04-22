import App from "./App"
import DataBrands from "./components/DataBrands"
import DataDealers from "./components/DataDealers"
import DataTemplates from "./components/DataTemplates"
import DataVariables from "./components/DataVariables"
import Dashboard from "./pages/Dashboard"
import Error from "./pages/Error"
import Login from "./pages/Login"


const routes = [
    { path: '/', element: <App />, errorElement: <Error />,
        children: [
            { path: 'databrands', element: <DataBrands /> },
            { path: 'datadealers', element: <DataDealers /> },
            { path: 'datatemplates', element: <DataTemplates /> },
            { path: 'datavariables', element: <DataVariables /> },
            { path: 'error', element: <Error /> },
            { path: 'home', element: <Dashboard /> },
            { path: 'login', element: <Login /> },
        ]
    }
]

export default routes