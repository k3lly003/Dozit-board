import {RouteObject} from "react-router"
import Layout from "../Layout/Layout"
import Boards from "../Pages/Boards"

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                children: [
                    {
                        path: "",
                        element: <Boards />
                    }
                ]
            }
        ]
    }
]

export default routes