import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { FaRegStar } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { Link } from 'react-router-dom';


const BooksCard = ({ books }) => {
    const { book_name, author_name, category, rating, photo, _id } = books;
    const ratingValue = rating;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className='bg-gray-900/70 m-4 rounded-xl'>
                <figure className="py-8">
                    <img src={photo} alt="Shoes" className="rounded-xl w-60 h-[270px]" />
                </figure>
            </div>
            <div className='flex gap-3 pl-6 mt-2'>
                <Link to={`/allBooks/${category}`}><p className="bg-slate-100 border text-[#23BE0A] rounded-xl px-3 py-1"> {category}</p></Link>
            </div>
            <div className="card-body mt-[-20px]">
                <div className='border-dashed border-b pb-4'>
                    <h2 className="text-2xl font-bold">{book_name}</h2>
                    <p className='font-semibold mt-2'>By: {author_name}</p>
                </div>
                <div className="flex mb-[-20px]">
                    <p><Rating
                        initialRating={ratingValue}
                        emptySymbol={<FaRegStar size={30} style={{ color: '#ccc' }} />}
                        fullSymbol={<MdStar size={30} style={{ color: '#f8b400' }} />}
                    /></p>
                    <Link to={`/books/${_id}`}>
                        <button className='btn btn-accent btn-outline text-white'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
BooksCard.propTypes = {
    books: PropTypes.object.isRequired
}

export default BooksCard;