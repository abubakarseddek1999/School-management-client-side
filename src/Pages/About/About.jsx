import img1 from '../../assets/image/About/aboutbanner1.jpeg'
import img2 from '../../assets/image/About/aboutbanner2.jpeg'
import abubakar from '../../assets/image/Teachers/abubakar.png'
import sabiha from '../../assets/image/Teachers/sabiha.png'
import jannat from '../../assets/image/Teachers/jannat.png'
import samia from '../../assets/image/Teachers/samia.png'
import ajoy from '../../assets/image/Teachers/ajoy.png'
import anop from '../../assets/image/Teachers/anop.png'
import riaz from "../../assets/image/Teachers/riaz.png"
import purubi from "../../assets/image/Teachers/purubi.png"
import image1 from "../../assets/image/home_school2_pic1.jpg"
import image2 from "../../assets/image/About/about.png"
import PrimaryButton from '../../Components/SectionTitle/PrimaryButton';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import UseTeachers from '../../Hooks/UseTeachers'

const About = () => {
  
    const TeacherData = UseTeachers();
    const {teachers,isLoading,isError,error,refetch}= TeacherData;
    console.log(teachers);

    const TeachersInfo = [
        {
            name: "Sabiha akter",
            title: "Math Teacher",
            image: sabiha,

        },
        {
            name: "Jannat akter",
            title: "English Teacher",
            image: jannat,

        },
        {
            name: "Samia akter",
            title: "Math Teacher",
            image: samia,

        },
        {
            name: "Purabi ",
            title: "Biology Teacher",
            image: purubi,

        },
        {
            name: "Riaz Uddin",
            title: "ICT Teacher",
            image: riaz

        },
        {
            name: "Anop Kumar",
            title: "English Teacher",
            image: anop

        },
        {
            name: " Abu bakar",
            title: "ICT Teacher",
            image: abubakar

        },
        {
            name: " Ajoy Baishnab",
            title: "Chemistry Teacher",
            image: ajoy

        },

    ]

    return (
        <div className='py-20 md:py-20 lg:py-14 '>
            {/* Banner */}
            <div className='relative hidden md:block w-full h-[400px] md:h-[500px] lg:h-[780px] md:justify-center items-center bg-contain md:bg-cover'>
                {/* Blurred background image (img1) */}
                <div
                    className='absolute top-0 left-0 w-full h-full'
                    style={{
                        backgroundImage: `url(${img1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: '100% 750px',
                        filter: 'blur(10px)', // Apply blur only to img1
                        zIndex: 1, // Make sure it's behind img2
                    }}
                ></div>

                {/* Clear foreground image (img2) */}
                <div
                    className='relative w-full h-[400px] md:h-[500px] lg:h-[780px] md:justify-center items-center bg-contain md:bg-cover z-20'
                    style={{
                        backgroundImage: `url(${img1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: '80% 750px',
                        zIndex: 2, // Ensure it's above the blurred image
                    }}
                ></div>
            </div>



            {/* About School */}
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row items-start p-5 gap-5 space-y-8 ">
                    <div className="flex justify-center md:w-1/2">
                        <img
                            className="rounded-lg shadow-md"
                            src={image1}// Replace this with the actual image URL
                            alt="Children studying at school"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-yellow-500 text-xl font-bold">ABOUT US</h2>
                        <br />
                        <h1 className="text-4xl font-bold mt-2">History of our school</h1>
                        <p className="mt-4">
                            Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus sit amet.
                        </p>
                        <p className="mt-4">
                            Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam ullamcorper rhoncus sem vitae tempus mattis porta enim. Duis fermentum faucibus est, sed vehicula velit sodales vitae.
                        </p>
                        <p className="mt-4">
                            Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam ullamcorper rhoncus sem vitae tempus mattis porta enim. Duis fermentum faucibus est, sed vehicula velit sodales vitae.
                        </p>
                        <PrimaryButton name={"Learn more"}></PrimaryButton>
                    </div>

                </div>

            </div>

            {/* more information of about*/}
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col-reverse  md:flex-row md:items-start p-5 gap-5 space-y-8 ">
                    <section className="p-5w-full md:w-1/2">

                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-xl font-bold cursor-pointer my-5'>message from principle</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <MdOutlineArrowForwardIos className='font-bold cursor-pointer' />
                                </div>

                            </div>
                            <hr className="h-1 bg-blue-500 border-none transition-colors duration-300 hover:bg-amber-400 w-full mr-4" />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-xl font-bold cursor-pointer my-5'>Board Executives</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <MdOutlineArrowForwardIos className='font-bold cursor-pointer' />
                                </div>

                            </div>
                            <hr class="h-1 bg-blue-500 border-none transition-colors duration-300 hover:bg-amber-400 w-full mr-4" />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-xl font-bold cursor-pointer my-5'>Our Campus & Facilities</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <MdOutlineArrowForwardIos className='font-bold cursor-pointer' />
                                </div>

                            </div>
                            <hr class="h-1 bg-blue-500 border-none transition-colors duration-300 hover:bg-amber-400 w-full mr-4" />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-xl font-bold cursor-pointer my-5'>Our mission</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <MdOutlineArrowForwardIos className='font-bold cursor-pointer' />
                                </div>

                            </div>
                            <hr class="h-1 bg-blue-500 border-none transition-colors duration-300 hover:bg-amber-400 w-full mr-4" />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-xl font-bold cursor-pointer my-5'>Our Section</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <MdOutlineArrowForwardIos className='font-bold cursor-pointer' />
                                </div>

                            </div>
                            <hr class="h-1 bg-blue-500 border-none transition-colors duration-300 hover:bg-amber-400 w-full mr-4" />
                        </div>


                    </section>

                    <section className="md:w-1/2">
                        <img
                            className="rounded-lg shadow-md"
                            src={image2}// Replace this with the actual image URL
                            alt="Children studying at school"
                        />
                    </section>

                </div>

            </div>

            {/* THE GUIDING PRINCIPLES*/}



            {/* Our Teacher */}
            <div className='max-w-[1400px] mx-auto'>
                <p className='text-4xl font-bold text-center p-5'>Our Teacher</p>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>

                    {TeachersInfo.map(item =>
                        <div key={item.i} className='flex flex-col justify-center items-center  md:border-2 shadow-lg  duration-200 transform hover:scale-105'>
                            <img className='rounded-md object-cover md:w-[400px] h-[300px]' src={item?.image} alt="Teacher img" />

                            <div className='w-full flex justify-center items-center'>
                                <div className='flex flex-col justify-center items-center p-2 w-full'>
                                    <p className='text-3xl font-bold'>{item?.name}</p>
                                    <p className='font-bold'>{item?.title}</p>
                                </div>
                            </div>
                        </div>

                    )}



                </div>
            </div>
            {/* Our Teacher */}
            <div className='max-w-[1400px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>

                    {teachers.map(item =>
                        <div key={item.i} className='flex flex-col justify-center items-center  md:border-2 shadow-lg  duration-200 transform hover:scale-105'>
                            <img className='rounded-md object-cover md:w-[400px] h-[300px]' src={item?.photo} alt="Teacher img" />

                            <div className='w-full flex justify-center items-center'>
                                <div className='flex flex-col justify-center items-center p-2 w-full'>
                                    <p className='text-3xl font-bold'>{item?.name}</p>
                                    <p className='font-bold'>{item?.subject}</p>
                                </div>
                            </div>
                        </div>

                    )}



                </div>
            </div>

        </div>
    );
};

export default About;