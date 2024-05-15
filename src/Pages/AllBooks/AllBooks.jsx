import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllBooksCard from "../../Components/AllBooksCard";

const AllBooks = () => {
    const booksData = useLoaderData();
    const [book, setBook] = useState(booksData);
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSortByCost = () => {
        const sortedBooks = [...book].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.rating - b.rating;
            } else {
                return b.rating - a.rating;
            }
        });
        setBook(sortedBooks);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };
    return (
        <div>
            <div className="flex justify-center items-center mb-4">
                <div className="relative">
                    <button className="btn bg-slate-800 text-white" onClick={handleSortByCost}>
                        Show Available Books {sortOrder === "asc" ? "↓" : "↑"}
                    </button>
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-4 mb-12 mt-[-10px]'>
                {
                    book.map(books => <AllBooksCard
                        key={books._id}
                        books={books}
                    ></AllBooksCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;