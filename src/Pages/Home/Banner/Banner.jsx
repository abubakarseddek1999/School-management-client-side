import banner from '../../../assets/image/banner.png'
import backgroundImage from '../../../assets/image/background-.png'; // Import your background image

const Banner = () => {
    return (
        <div className='w-full' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',backgroundPosition: 'center',}}>

            <div className="flex flex-col md:flex-row pt-24 lg:gap-5 max-w-[1400px] mx-auto">

                <div className='w-full md:w-1/2 flex flex-col justify-center p-10'>
                    <p className='font-bold text-center md:text-start text-white'>JOIN US</p>
                    <br />
                    <p className="text-4xl md:text-4xl lg:text-5xl font-bold text-white">25K+ STUDENTS TRUST US</p>
                    <br />
                    <p className='text-white'>Every day brings with it a fresh set of learning possibilities.</p>
                    <br />
                    <div>
                        <button className="btn bg-indigo-600 text-white hover:bg-cyan-800">Learn more</button>
                    </div>

                </div>

                {/* Banner image */}
                <div className='ww-full md:w-1/2 flex justify-end'>
                    <img src={banner} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Banner;