import { useLoaderData, useNavigate } from "react-router-dom";
import Rating from 'react-rating';
import { FaRegStar } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import useAuth from "../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";



const BookDetails = () => {
    const { user } = useAuth();
    const [borrowDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const books = useLoaderData();
    const navigate = useNavigate();
    const { _id,book_name, author_name, category, rating, photo, description, content, quantity } = books;
    const ratingValue = rating;


    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${month}/${day}/${year}`;
    };

    const handleBorrowBook = async (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const borrowsDate = formatDate(borrowDate);
        const returnDate = startDate;
        const borrowBook = { _id, userName, email, book_name, author_name, category, rating, photo, description, content, quantity, returnDate, borrowsDate };
        fetch('https://library-management-system-server-sigma.vercel.app/borrow', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(borrowBook)
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(data => {
                        // Handle error response
                        if (data.error && data.error.includes('already borrowed')) {
                            Swal.fire({
                                title: 'Error!',
                                text: data.error,
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                        } else {
                            Swal.fire({
                                title: 'Error!',
                                text: 'An error occurred while borrowing the book. Please try again later.',
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                        }
                        throw new Error('Borrowing failed.');
                    });
                }
                return response.json();
            })
            .then(data => {
                // Handle successful response
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Borrowed successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    });
                    navigate("/borrow");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'This book is already borrowed',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                navigate("/borrow");
            });
    }
    return (
        <div className="flex lg:flex-row  flex-col justify-between bg-base-100 shadow-xl rounded-xl lg:my-12">
            <div className="rounded-xl lg:w-[500px] h-full mt-4">
                <div className="pb-12 px-8">
                    <img className="rounded-xl mx-auto w-80 h-96" src={photo} alt="Album" />
                </div>
            </div>
            <div className="lg:w-[650px] px-3 mt-3">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-2xl mb-3">{book_name}</h2>
                    <p><Rating
                        initialRating={ratingValue}
                        emptySymbol={<FaRegStar size={30} style={{ color: '#ccc' }} />}
                        fullSymbol={<MdStar size={30} style={{ color: '#f8b400' }} />}
                    /></p>
                </div>
                <h2 className="font-semibold text-lg">By: {author_name}</h2>
                <p className="flex items-center font-semibold pt-3">Quantity: <span className="text-lg">{quantity}</span></p>
                <p className='font-semibold my-4'><span className="bg-slate-100 border text-blue-500 rounded-xl px-3 py-2">{category}</span></p>
                <p className="mb-3"><span className="font-bold text-lg">Content:</span> {content}</p>
                <p><span className="font-bold text-lg">Description:</span> {description}</p>
                <a href="#my_modal_8">
                    <button className='btn btn-accent btn-outline text-white my-4 lg:mb-0'>Borrow</button>
                </a>
            </div>
            <div className="modal text-center" role="dialog" id="my_modal_8">
                <div className="modal-box">
                    <form onSubmit={handleBorrowBook}>
                        <div className="md:flex-col mb-8 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="userName"
                                        defaultValue={user?.displayName} placeholder="Username" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name="email" placeholder="Email"
                                        defaultValue={user?.email} className="input input-bordered w-full" />
                                </label>
                            </div>
                            <input type="hidden" name="borrowDate" value={borrowDate} readOnly />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Return Date</span>
                                </label>
                                <DatePicker className="border-2 rounded-lg py-1 pl-3 w-full" selected={startDate} onChange={(date) => setStartDate(date.toLocaleDateString())} />
                            </div>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-block bg-orange-500 text-xl text-white font-bold" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;