import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex
        justify-center items-center h-screen">
            <div className="  text-center">
                <div className="w-3/4 mx-auto">
                    <img className="" src="https://i.postimg.cc/jjS0Tx86/7741849-3747371.jpg" alt="" />
                </div>

                <h2 className="text-5xl font-bold my-5">
                    NOT FOUND
                </h2>

                <Link to='/'> <button className="btn">GO HoME</button></Link>
            </div>
        </div>
    );
};

export default NotFound;