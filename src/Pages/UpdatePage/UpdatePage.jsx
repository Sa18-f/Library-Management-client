import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {
    const book = useLoaderData();
    const { book_name, author_name, category, rating, photo, _id } = book;

    const handleUpdateBook = event => {
        event.preventDefault();
        const form = event.target;
        const book_name = form.book_name.value;
        const author_name = form.author_name.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const updatedBook = { book_name, author_name, category, rating, photo };
        console.log(updatedBook)

        fetch(`https://library-management-system-server-sigma.vercel.app/books/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Spot Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24 mb-12">
            <h2 className="text-3xl font-extrabold text-center">{book_name}</h2>
            <form onSubmit={handleUpdateBook}>
                <div className="md:flex lg:mb-8 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="book_name" placeholder="Name"
                                defaultValue={book_name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="author_name"
                                defaultValue={author_name} placeholder="Author Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* // category */}
                <div className="md:flex gap-4 lg:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            name='category'
                            id='category'
                            className='border p-3 rounded-md'
                        >
                            <option>{category}</option>
                            <option value='Fiction'>Fiction</option>
                            <option value='Fantasy'>Fantasy</option>
                            <option value='Thriller'>Thriller</option>
                            <option value='Psychological Thriller'>Psychological Thriller</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating"
                                defaultValue={rating} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL"
                                defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Submit" className="btn btn-block bg-accent text-xl text-white font-bold" />
            </form>
        </div>
    );
};

export default UpdatePage;