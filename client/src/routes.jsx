import App from "./App"
import Dashboard from "./pages/Dashboard"
import Dealer from "./pages/Dealer"
import DealerForm from "./pages/DealerForm"
import DealerList from "./pages/DealerList"
import Edit from "./pages/Edit"
import Error from "./pages/Error"
import Login from "./pages/Login"
import Offer from "./pages/Offer"
import OfferList from "./pages/OfferList"


const routes = [
    { path: '/', element: <App />, errorElement: <Error />,
        children: [
            { index: true, element: <Login /> },
            { path: 'dealer/:id', element: <Dealer /> },
            { path: 'dealerform', element: <DealerForm /> },
            { path: 'dealerlist', element: <DealerList /> },
            { path: 'edit/:id', element: <Edit /> },
            { path: 'error', element: <Error /> },
            { path: 'home', element: <Dashboard /> },
            { path: 'login', element: <Login /> },
            { path: 'offer/:id', element: <Offer /> },
            { path: 'offerlist', element: <OfferList /> },
        ]
    }
]

export default routes