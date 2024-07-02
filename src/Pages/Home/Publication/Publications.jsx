
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const publications = [
    {
        image: 'https://i.postimg.cc/mgcrh06q/GUEST-08ccea63-7b8d-4eec-91a2-a5ed74a83294.jpg', // Replace with actual image paths
        title: 'GMAT',
        price: '$250',
    },
    {
        image: 'https://i.postimg.cc/mgcrh06q/GUEST-08ccea63-7b8d-4eec-91a2-a5ed74a83294.jpg', // Replace with actual image paths
        title: 'Money Book - Finance',
        price: '$430',
    },
    {
        image: 'https://i.postimg.cc/mgcrh06q/GUEST-08ccea63-7b8d-4eec-91a2-a5ed74a83294.jpg', // Replace with actual image paths
        title: 'Service Marketing',
        price: '$190',
    },
];

const Publications = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Change this value to adjust the speed of the autoplay
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="py-12">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl uppercase font-bold text-center mb-8">Our Publications</h2>
                <Slider {...settings}>
                    {publications.map((publication, index) => (
                        <div key={index} className="px-5 ">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src={publication.image} alt={publication.title} className="w-full h[300px]  md:h-[500px] object-cover" />
                                <div className="p-6 ml-8">
                                    <h3 className="text-xl  mb-2 font-bold">{publication.title}</h3>
                                    <p className="text-yellow-500 text-xl font-bold">{publication.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Publications;
