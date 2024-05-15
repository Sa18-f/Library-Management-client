import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register";
import AddBook from "../Pages/AddBook"
import BookDetails from "../Pages/BookDetails";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import AllBooks from "../Pages/AllBooks/AllBooks";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import PrivateRoute from "../Components/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CategoryDetails from "../Pages/CategoryDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://library-management-system-server-sigma.vercel.app/books")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addBook",
                element: <PrivateRoute>
                    <AddBook></AddBook>
                </PrivateRoute>
            },
            {
                path: "/books/:id",
                element: <PrivateRoute>
                    <BookDetails></BookDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://library-management-system-server-sigma.vercel.app/books/${params.id}`)
            },
            {
                path: "/borrow",
                element: <PrivateRoute>
                    <BorrowedBooks></BorrowedBooks>
                </PrivateRoute>,
                loader: () => fetch('https://library-management-system-server-sigma.vercel.app/borrow')
            },
            {
                path: "/allBooks",
                element: <PrivateRoute>
                    <AllBooks></AllBooks>
                </PrivateRoute>,
                loader: () => fetch("https://library-management-system-server-sigma.vercel.app/books")
            },
            {
                path: '/updatePage/:id',
                element: <PrivateRoute>
                    <UpdatePage></UpdatePage>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://library-management-system-server-sigma.vercel.app/books/${params.id}`)
            },
            {
                path: '/allBooks/:category',
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://library-management-system-server-sigma.vercel.app/allBooks/${params.category}`)
            }
        ]
    },
]);
export default router;