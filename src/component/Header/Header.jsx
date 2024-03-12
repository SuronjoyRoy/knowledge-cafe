
import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-2 px-4 border-b-2'>
            <h2 className="text-3xl font-bold">knowledge cafe</h2>
            <img src={profile} alt="Profile" />
        </div>
    );
};

export default Header;
