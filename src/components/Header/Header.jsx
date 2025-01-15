import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 m-4 border-2 border-red-500 border-b-2'>
            <h1 className="text-3xl font-bold">
                Knowledge Cafe
            </h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;