import Blogs from "../Blogs/Blogs";
import profile from '../../assets/images/profile.png'
import Bookmarks from "../bookmarks/Bookmarks";
import { useState } from "react";


const Header = () => {

    const [bookmarks, setBookmarks] = useState([])
    const [readingTime, setReadingTime] = useState(0)

    const handleAddToBookmark = (blog) => {
        const newBookmarks = [...bookmarks, blog]
        setBookmarks(newBookmarks)
    }

    const handleMarkAsRead = (time, id)=> {
        const newReadingTime = readingTime + time
        setReadingTime(newReadingTime)
        const reamainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
        setBookmarks(reamainingBookmarks)
    }
    
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center border-b-2 mb-10 mt-4">
                <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
                <img src={profile} alt="" />
            </div>
            <div className="md:flex">
                <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
                <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
            </div>
            
        </div>
    );
};

export default Header;