import App from "./App"
import Dashboard from "./pages/Dashboard"
import Edit from "./pages/Edit"
import Error from "./pages/Error"
import Login from "./pages/Login"
import Offer from "./pages/Offer"
import OffersList from "./pages/OffersList"


const routes = [
    { path: '/', element: <App />, errorElement: <Error />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'edit/:id', element: <Edit /> },
            { path: 'error', element: <Error /> },
            { path: 'home', element: <Dashboard /> },
            { path: 'login', element: <Login /> },
            { path: 'offer/:id', element: <Offer /> },
            { path: 'offerslist', element: <OffersList /> },
        ]
    }
]

export default routes