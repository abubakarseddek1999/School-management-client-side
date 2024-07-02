/* eslint-disable react/prop-types */


const PrimaryButton = ({name}) => {
    return (
        <div>
            <button className="btn mt-5 border border-white bg-indigo-600 text-white hover:bg-cyan-800">{name}</button>
            
        </div>
    );
};

export default PrimaryButton;