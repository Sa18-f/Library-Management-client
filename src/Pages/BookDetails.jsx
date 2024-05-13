import { Link, useLoaderData } from "react-router-dom";
// import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { FaRegStar } from "react-icons/fa";
import { MdStar } from "react-icons/md";


const BookDetails = () => {
    const books = useLoaderData();
    const { book_name, author_name, category, rating, photo, description, content, quantity, _id } = books;
    const ratingValue = rating;
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
                <Link to={`/books/${_id}`}>
                    <button className='btn btn-accent btn-outline text-white my-4 lg:mb-0'>Borrow</button>
                </Link>
            </div>
        </div>
    );
};
// BookDetails.propTypes = {
//     books: PropTypes.object.isRequired
// }

export default BookDetails;