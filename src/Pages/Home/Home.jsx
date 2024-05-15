import { useLoaderData } from "react-router-dom";
import Carousel from "../../Components/Carousel";
import BooksCard from "./BooksCard";
import Chart from "./Chart";



const Home = () => {
    const books = useLoaderData();
    const firstFourBooks = books.slice(0, 6);
    return (
        <div>
            <div className="mb-12">
                <Carousel></Carousel>
            </div>
            {/* Latest Books */}
            <h1 className='text-6xl text-center my-8 font-bold'>Latest Book’s</h1>
            <div className='grid lg:grid-cols-3 gap-8 mb-12'>
                {
                    firstFourBooks.map(books => <BooksCard
                        key={books._id}
                        books={books}
                    ></BooksCard>)
                }
            </div>
            <div>
                <Chart books={firstFourBooks} />
            </div>
            {/* founders word */}
            <h1 className="text-3xl font-bold lg:my-12 my-2 text-center">Words from the Founder</h1>
            <div className="my-8">
                <img className="mx-auto rounded-lg" src="https://i.ibb.co/f09fjK3/3789.webp" alt="" />
            </div>
            <h2 className="text-2xl font-bold text-center text-[#2874A6]">The man who does not read good books has no advantage over <br /> the man who cannot read them!!  - Abdul Sattar Edhi.</h2>
            <p className="text-lg my-4">I am Abdul Sattar Edhi, the founder and book enthusiast behind Book Pulse. I’ve been an avid reader since childhood. From then, I became a frequent visitor to local book fairs and libraries. My constant search for new stories to devour took me to countless literary events in Shotwell St, San Francisco, and the surrounding areas.</p>
            <p className="text-lg mt-3 mb-12">From local book fairs to regional literature festivals, I have been engaged in a continuous quest for literary exploration. I hardly even miss participating in book reading contests and bringing home several awards.</p>
        </div>
    );
};

export default Home;