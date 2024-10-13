import backgroundImage from '../../../assets/image/school.jpg';
import SubscribeBtn from '../../../Components/Subscibebtn/SubscribeBtn';

const Subscribe = () => {
    return (
        <div className='relative w-full h-[500px]'>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
                backgroundSize: '100% 500px',
                // filter: 'brightness(0.5)',
            }}
            className='absolute inset-0 z-0'>
            </div>
            <div className='absolute inset-0 bg-black opacity-50 z-10'></div> 

            <div className='relative z-20 flex justify-center items-center h-full'>
                <div>
                    <p className='text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center p-5'>Join With Us</p>
                    <div className='flex justify-center mb-5'>
                        <SubscribeBtn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
