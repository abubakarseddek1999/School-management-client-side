import PrimaryButton from "../../../Components/SectionTitle/PrimaryButton";
import image from "../../../assets/image/home_school2_pic1.jpg"

const About = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-start p-2 gap-5 space-y-8">
                <section className="md:w-1/2">
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
                </section>
                <section className="flex justify-center md:w-1/2">
                    <img
                        className="rounded-lg shadow-md"
                        src={image}// Replace this with the actual image URL
                        alt="Children studying at school"
                    />
                </section>
            </div>

        </div>
    );
};

export default About;