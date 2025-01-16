import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";



const Blog = ({ id, blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, author_img, posted_date, author, reading_time, hashtags } = blog

    // console.log(blog);

    return (
        <div className='mb-10 mt-3 space-y-4'>
            <div className='p-2'>
                <img className='w-full rounded-xl ' src={cover} alt={`Cover picture of the ${cover}`} />

            </div>
            <div className='flex justify-between items-center mb-5 mt-5'>
                <div className='flex justify-between items-center gap-3 mb-3'>
                    <img className='w-16' src={author_img} alt={`author_img`} />
                    <div >
                        <p>
                            {author}
                        </p>
                        <p>
                            {posted_date}
                        </p>

                    </div>
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <p>
                        {reading_time} min read
                    </p>

                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='p-3 text-red-600 text-3xl'><FaBookmark /></button>

                </div>
            </div>

            <div className='flex justify-start items-center gap-3 mb-3'>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}>#{hashtag}</span>)
                }
            </div>

            <button className='underline text-blue-500 font-bold'
                onClick={() => handleMarkAsRead(blog.id, reading_time)}
            >Mark As Read </button>

            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired

}


export default Blog;