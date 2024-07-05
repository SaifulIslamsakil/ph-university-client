import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenarator } from "../utils/routeGenarator";
import { AdminRoute } from "./admin.route";
import { facultyPaths } from "./faculty.route";
import { studentPaths } from "./student.route";
import Login from "../pages/login/Login";

const route = createBrowserRouter([
    {
        path: "/",
        element: <App />,
       
    },
    {
        path: "/faculty",
        element: <App />,
        children:routeGenarator(facultyPaths)
       
    },
    {
        path: "/student",
        element: <App />,
        children:routeGenarator(studentPaths)
       
    },
    {
        path: "/admin",
        element: <App />,
        children:routeGenarator(AdminRoute)
       
    },
    {
        path: "/login",
        element: <Login />,
    },


])

export default route