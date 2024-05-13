import { useLoaderData } from "react-router-dom";
import Carousel from "../../Components/Carousel";
import BooksCard from "./BooksCard";


const Home = () => {
    const books = useLoaderData();
    const firstFourBooks = books.slice(0, 6);
    return (
        <div>
            <div className="mb-12">
                <Carousel></Carousel>
            </div>
            {/* Tourist spots */}
            <h1 className='text-6xl text-center my-8 font-bold'>Latest Book’s</h1>
            <div className='grid lg:grid-cols-3 gap-8 mb-12'>
                {
                    firstFourBooks.map(books => <BooksCard
                        key={books._id}
                        books={books}
                    ></BooksCard>)
                }
            </div>
        </div>
    );
};

export default Home;