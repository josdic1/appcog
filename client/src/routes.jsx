import App from "./App"
import DataBrands from "./components/DataBrands"
import DataDealers from "./components/DataDealers"
import DataTemplates from "./components/DataTemplates"
import DataVariables from "./components/DataVariables"
import Error from "./pages/Error"
import Dashboard from "./pages/Dashboard"

const routes = [
    { path: '/', element: <App />, errorElement: <Error />,
        children: [
            { path: 'databrands', element: <DataBrands /> },
            { path: 'datadealers', element: <DataDealers /> },
            { path: 'datatemplates', element: <DataTemplates /> },
            { path: 'datavariables', element: <DataVariables /> },
            { path: 'error', element: <Error /> },
            { path: 'home', element: <Dashboard /> }
        ]
    }
]

export default routes