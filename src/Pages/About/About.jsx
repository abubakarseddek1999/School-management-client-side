import React from 'react';
import img1 from '../../assets/image/aboutbanner1.jpeg'
import img2 from '../../assets/image/aboutbanner2.jpeg'
const About = () => {
    const TeachersInfo = [
        {
            name: "Sabiha akter",
            title: "Math Teacher",
            image: "https://i.postimg.cc/GhdC3StP/images-6.jpg"

        },
        {
            name: "Jannat akter",
            title: "English Teacher",
            image: "https://i.postimg.cc/NFtt9BN6/images-5.jpg"

        },
        {
            name: "Samia akter",
            title: "Math Teacher",
            image: "https://i.postimg.cc/66Vts43Y/360-F-265183061-Nkulf-PZg-Rxb-Ng3rv-YSNGGwi0i-D7qbm-Op.jpg"

        },
        {
            name: "Purabi Chakraborty",
            title: "Biology Teacher",
            image: "https://i.postimg.cc/wBsYw7Z5/349002603-1800285213822436-1475619621734363733-n-removebg-preview.png"

        },
        {
            name: "Riaz Uddin",
            title: "ICT Teacher",
            image: "https://i.postimg.cc/yYzhdt77/Screenshot-3-removebg-preview.png"

        },
        {
            name: "Anop Kumar",
            title: "English Teacher",
            image: "https://i.postimg.cc/j5pHykNQ/Screenshot-4-removebg-preview.png"

        },
        {
            name: " Abu bakar",
            title: "ICT Teacher",
            image: "https://i.postimg.cc/7ZHg1zCc/IMG-20240112-101143-removebg-preview.png"

        },
        {
            name: " Ajoy Baishnab",
            title: "Chemistry Teacher",
            image: "https://i.postimg.cc/zXXB0Fjn/ajoy-removebg-preview.png"

        },

    ]
    return (
        <div className=' py-20  '>
            {/* Banner */}
            <div className='w-full h-[400px] md:h-[700px] flex justify-center items-center' style={{
                backgroundImage: `url(${img1})`,
                backgroundRepeat: "no-repeat",
                // backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundSize: '100% 700px',
            }}
            >
                
            </div>
            {/* About School */}
            {/* THE GUIDING PRINCIPLES*/}



            {/* Our Teacher */}
            <p className='text-4xl font-bold text-center p-5'>Our Teacher</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 '>

                {TeachersInfo.map(item =>
                    <div key={item.i} className='flex flex-col justify-center items-center relative '>
                        <img className='rounded-md object-cover md:w-[400px] h-[300px]' src={item?.image} alt="Teacher img" />

                        <div className='w-full flex justify-center items-centers'>
                            <div className='flex flex-col justify-center items-center   p-2 w-full' >
                                <p className='text-3xl font-bold'>{item?.name}</p>
                                <p className='font-bold'>{item?.title}</p>
                            </div>
                        </div>

                    </div>
                )}



            </div>

        </div>
    );
};

export default About;