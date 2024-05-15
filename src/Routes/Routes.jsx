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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:3000/books")
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
                loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`)
            },
            {
                path: "/borrow",
                element: <PrivateRoute>
                    <BorrowedBooks></BorrowedBooks>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:3000/borrow')
            },
            {
                path: "/allBooks",
                element: <PrivateRoute>
                    <AllBooks></AllBooks>
                </PrivateRoute>,
                loader: () => fetch("http://localhost:3000/books")
            },
            {
                path: '/updatePage/:id',
                element: <PrivateRoute>
                    <UpdatePage></UpdatePage>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`)
            },
        ]
    },
]);
export default router;