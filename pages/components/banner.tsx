export default function Banner(){

    return(
        <>
            <div className="relative w-full h-64 bg-gradient-to-r from-black via-gray-900 to-gray-700 flex items-center justify-self-stretch mt-2 mb-2 overflow-clip ">
                <div>
                    <img className="h-64 scale-125 object-cover mix-blend-lighten" src="/img/Banner_Moon.jpeg"/>
                </div>
                <div className="w-full">
                    <p className='text-7xl text-white font-extrabold flex items-center justify-center'>ZENITH</p>
                    <p className='text-xl text-white font-extralight flex items-center justify-center'>Astronomy Club</p>
                    <p className='text-xl text-white font-extralight flex items-center justify-center'>School of Physics - University of Hyderabad</p>
                </div>
            </div>
        </>
    );
}