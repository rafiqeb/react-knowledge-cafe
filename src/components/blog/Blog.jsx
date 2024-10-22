import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-5'>
                    <img className='h-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='font-bold text-2xl'>Title: {title}</h2>
            <p>
                {hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)}
            </p>
        </div>
    );
};

Blog.prototype = {
    blog: PropTypes.object.isRequired
}

export default Blog;