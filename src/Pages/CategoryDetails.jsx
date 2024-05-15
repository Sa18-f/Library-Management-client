
import { useLoaderData,  } from "react-router-dom";
import BooksCard from "./Home/BooksCard";


const CategoryDetails = () => {
    const books = useLoaderData();
    return (
        <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map(book => (
                    <BooksCard key={book._id} books={book} />
                ))}
            </div>
        </div>
    );
};

export default CategoryDetails;