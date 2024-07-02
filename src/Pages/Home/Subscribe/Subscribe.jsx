import backgroundImage from '../../../assets/image/school.jpg';

const Subscribe = () => {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            // backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundSize: '100% 500px',
        }}
            className='w-full h-[500px] flex justify-center items-center'>
            <div>

                <p className='text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center p-5'>Join With Us</p>
                <div className='flex justify-center'>
                    <input className='p-2' type="text" placeholder='Enter Your email' name="" id="" />
                    <button className='bg-[#FC724D] hover:bg-[#ff714d] text-white p-2'> Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;