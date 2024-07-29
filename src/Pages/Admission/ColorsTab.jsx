/* eslint-disable react/prop-types */


const ColorsTab = ({ setPageColor, setFormColor, setFontColor, setInputBackground }) => {

    const handleColorSelect = (color, setColor) => {
        setColor(color);
    };
    return (
        <div className="space-y-4">
            <div>
                <h4 className="font-semibold mb-2">Color Scheme</h4>
                <div className="flex space-x-2">
                    {/* Color scheme options */}
                    {["#f1c40f", "#e74c3c", "#8e44ad", "#3498db"].map((color) => (
                        <div
                            key={color}
                            className="w-8 h-8 rounded-full cursor-pointer"
                            style={{ backgroundColor: color }}
                            onClick={() => handleColorSelect(color, setInputBackground)}
                        />
                    ))}
                </div>
            </div>

            <div className="flex space-x-4">
                <div>
                    <label className="block text-sm font-medium text-white">Page Color</label>
                    <input
                        type="color"
                        onChange={(e) => setPageColor(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">Page Image</label>
                    <input
                        type="file"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
            </div>
            <div className="flex space-x-4">
                <div>
                    <label className="block text-sm font-medium text-white">Form Color</label>
                    <input
                        type="color"
                        onChange={(e) => setFormColor(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">Form Image</label>
                    <input
                        type="file"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
            </div>
            <div className="flex space-x-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Font Color</label>
                    <input
                        type="color"
                        onChange={(e) => setFontColor(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Input Background</label>
                    <input
                        type="color"
                        onChange={(e) => setInputBackground(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
            </div>
        </div>
    );
};




export default ColorsTab;