import Blogs from "../Blogs/Blogs";
import profile from '../../assets/images/profile.png'
import Bookmarks from "../bookmarks/Bookmarks";


const Header = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center border-b-2">
                <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
                <img src={profile} alt="" />
            </div>
            <div className="md:flex">
                <Blogs></Blogs>
                <Bookmarks></Bookmarks>
            </div>
            
        </div>
    );
};

export default Header;