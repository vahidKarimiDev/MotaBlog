import Contcat from "./pages/Contcat/Contcat";
import Home from "./pages/Home/Home";

const routers = [
    { path: '/', element: <Home /> },
    { path: '/contact', element: <Contcat /> },
    { path: "*", element: <p>404</p> }
]


export default routers