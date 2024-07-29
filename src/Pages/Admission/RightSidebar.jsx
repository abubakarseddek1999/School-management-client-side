/* eslint-disable react/prop-types */
import { useState } from "react";
import ColorsTab from "./ColorsTab";


const RightSidebar = ({ isOpen, onClose, setPageColor, setFormColor, setFontColor, setInputBackground }) => {
    const [activeTab, setActiveTab] = useState("color");

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 right-0 h-full w-96 bg-[#33384A] border-l border-gray-300 shadow-lg z-50 mt-20 text-white">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">Form Designer</h3>
                <button onClick={onClose} className="text-white hover:text-gray-500  text-4xl">
                    &times;
                </button>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-around border-b border-gray-200">
                    {["colors", "styles", "themes", "layout"].map((tab) => (
                        <button
                            key={tab}
                            className={`w-full p-2 ${activeTab === tab ? "bg-gray-200 text-black font-bold" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="p-4">
                    {activeTab === "colors" && <ColorsTab
                        setPageColor={setPageColor}
                        setFormColor={setFormColor}
                        setFontColor={setFontColor}
                        setInputBackground={setInputBackground} />
                    }

                    {activeTab === "styles" && <div>Styles Settings</div>}
                    {activeTab === "themes" && <div>Themes Settings</div>}
                    {activeTab === "layout" && <div>Layout Settings</div>}
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
