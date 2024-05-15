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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                element: <AddBook></AddBook>
            },
            {
                path: "/books/:id",
                element: <BookDetails></BookDetails>,
                loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`)
            },
            {
                path: "/borrow",
                element: <BorrowedBooks></BorrowedBooks>,
                loader: () => fetch('http://localhost:3000/borrow')
            },
            {
                path: "/allBooks",
                element: <AllBooks></AllBooks>,
                loader: () => fetch("http://localhost:3000/books")
            },
            {
                path: '/updatePage/:id',
                element: <UpdatePage></UpdatePage>,
                loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`)
            },
        ]
    },
]);
export default router;