import About from "../About/About";
import Banner from "../Banner/Banner";
import InfoButton from "../InfoButton/InfoButton";
import Publications from "../Publication/Publications";
import Stats from "../Statistics/Stats";
import Subscribe from "../Subscribe/Subscribe";
import WhyChooseUs from "../WhyChoose/WhyChooseUs";

const Home = () => {
    return (
        <div className=" bg-[#FFFFFF]">
            <Banner></Banner>
            <InfoButton></InfoButton>
            <About></About>
            <WhyChooseUs></WhyChooseUs>
            <Publications></Publications>
            <Stats></Stats>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;