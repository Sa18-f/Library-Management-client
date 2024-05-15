import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const BorrowedBooks = () => {
    const { user } = useAuth();
    const [borrow, setBorrow] = useState([]);

    useEffect(() => {
        if (user) {
            // Fetch user's borrow data from backend
            fetch(`https://library-management-system-server-sigma.vercel.app/borrow/${user?.email}`)
                .then(res => res.json())
                .then(data => setBorrow(data))
                .catch(error => console.error('Error fetching user spots:', error));
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, return it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://library-management-system-server-sigma.vercel.app/borrow/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Returned!",
                                text: "Your book has been returned.",
                                icon: "success"
                            });
                        }
                        setBorrow(prevBorrow => prevBorrow.filter(borrow => borrow._id !== id));
                    })
                    .catch(error => console.error('Error deleting spot:', error));
            }
        })
    };
    return (
        <div className="grid gap-8 mb-12">
            {borrow?.map(book =>
                <div key={book._id} className="card bg-base-100 shadow-xl">
                    <div className='bg-gray-900/70 m-4 rounded-xl'>
                        <figure className="py-8">
                            <img src={book.photo} alt="Shoes" className="rounded-xl w-60 h-[270px]" />
                        </figure>
                    </div>
                    <div className='flex gap-8 pl-6 mt-2'>
                        <h2 className="text-2xl font-bold">{book.book_name}</h2>
                        <p className="bg-slate-100 border text-[#23BE0A] rounded-xl px-3 py-1"> {book.category}</p>
                    </div>
                    <div className="card-body mt-[-30px]">
                        <div className='pb-3'>
                            <p className='font-semibold mt-2'>Borrowed Date: {book.borrowsDate}</p>
                            <p className='font-semibold mt-2'>Return Date: {book.returnDate}</p>
                        </div>
                        <button onClick={() => handleDelete(book._id)} className='btn btn-accent btn-outline text-white mb-[-20px] text-lg w-full'>Return</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BorrowedBooks;