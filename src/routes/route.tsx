import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRoute } from "./admin.route";

const route = createBrowserRouter([
    {
        path: "/",
        element: <App />,
       
    },
    {
        path: "/admin",
        element: <App />,
        children:adminRoute
       
    },

])

export default route