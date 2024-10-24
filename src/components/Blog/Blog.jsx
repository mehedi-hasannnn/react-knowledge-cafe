import PropTypes from 'prop-types';
import {  FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover_image, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover_image} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex mt-4'>
                    <img className='w-10 rounded-2xl' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <span>{reading_time} read</span>
                    <button onClick={handleAddToBookmark} className='ml-2 text-2xl text-red-400'>< FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a> </span> )
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;