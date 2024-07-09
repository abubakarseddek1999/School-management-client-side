import CountUp from 'react-countup';

const Stats = () => {
    const stats = [
        {
            icon: '🔄', // Replace with actual icon components if needed
            value: 967,
            label: 'YEAR OF HISTORY',
        },
        {
            icon: '🎓',
            value: 967,
            label: 'ACTIVE STUDENTS',
        },
        {
            icon: '📝',
            value: 967,
            label: 'REGISTERED STUDENTS',
        },
        {
            icon: '🌐',
            value: 967,
            label: 'ONLINE COURSES',
        },
    ];

    return (
        <section 
            className="py-12  bg-slate-500 text-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-3xl mb-4">{stat.icon}</div>

                            <CountUp className='text-2xl' end={stat.value} duration={30}/>
                            {/* <div className="text-4xl font-bold">{stat.value}+</div> */}
                            <div className="text-lg font-bold text-bla">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
