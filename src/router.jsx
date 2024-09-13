import App from "./Admin/App";
import Blog from "./pages/Blog/Blog";
import Contcat from "./pages/Contcat/Contcat";
import Home from "./pages/Home/Home";
// Admin
import HomeAdmin from './Admin/Pages/Home/Home'
import AddBlog from "./Admin/Pages/AddBlog/AddBlog";
import ShowBLog from "./Admin/Pages/ShowBlog/ShowBLog";
import AddCategory from "./Admin/Pages/AddCategory/AddCategory";

const routers = [
    { path: '/', element: <Home /> },
    { path: '/contact', element: <Contcat /> },
    { path: '/blog/:title', element: <Blog /> },


    // Admin
    {
        path: "/admin/*", element: <App />, children: [
            { path: "home", element: <HomeAdmin /> },
            { path: "add-blog", element: <AddBlog /> },
            { path: "showblog", element: <ShowBLog /> },
            { path: "category", element: <AddCategory /> },
        ]
    },
    { path: "*", element: <p>404</p> }
]


export default routers