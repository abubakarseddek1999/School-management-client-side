import backgroundImage from '../../../assets/image/school.jpg';
import SubscribeBtn from '../../../Components/Subscibebtn/SubscribeBtn';

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

                <p className='text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center p-5 '>Join With Us</p>
                <div className='flex justify-center mb-5'>
                     <SubscribeBtn></SubscribeBtn>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;