import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-5 mb-4'>
                    <img className='h-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='font-bold text-2xl mb-4'>Title: {title}</h2>
            <p>
                {hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)}
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;