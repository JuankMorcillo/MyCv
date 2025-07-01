import React from 'react'

export default function Main() {
    return (
        <div className='flex flex-col p-4 justify-evenly lg:rounded-xl md:rounded-xl xs:rounded-br-xl xs:rounded-bl-xl bg-gray-100 lg:max-w-[35%] md:max-w-90 xs:max-w-90'>

            <div className='flex flex-col gap-4'>

                <span className='text-2xl font-bold text-gray-800 w-full uppercase'>
                    Experience
                </span>

                <div className='flex flex-row justify-between items-center mb-4'>
                    <span className='border-sky-400 border-2 w-[5%]'></span>
                    <span className='border-1 w-full border-gray-400 bg-gray-400 h-[20%]'>
                    </span>
                </div>

                <div className='flex flex-col gap-2'>

                    <div className='grid grid-cols-3 gap-4'>

                        <div className='flex flex-col'>
                            <span className='text-lg font-semibold text-gray-600'>
                                Instructor of Maths
                            </span>
                            <span className='text-md text-gray-500'>
                                2020 - 2022
                            </span>
                        </div>

                        {/* 
                        quiero que tenga esta forma
                        Instructor of Maths 
                                2020 - 2022
                        alli estan alineados y el primer texto se queda donde esta	
                        */}

                        <div className='flex flex-col col-span-2'>
                            <span className='text-lg'>
                                University institute Antonio Jose Camacho
                            </span>

                            <p>
                                I helped students to understand concepts where they were struggling, and i also helped them to prepare for exams.
                            </p>

                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-4'>

                        <div className='flex flex-col'>
                            <span className='text-lg font-semibold text-gray-600'>
                                Develop and support engineer
                            </span>
                            <span className='text-md text-gray-500'>
                                2022 - present
                            </span>
                        </div>

                        <div className='flex flex-col col-span-2'>
                            <span className='text-lg'>
                                Global Circuit
                            </span>

                            <p>
                                I helped students to understand concepts where they were struggling, and i also helped them to prepare for exams.
                            </p>

                        </div>
                    </div>

                </div>


            </div>

            <div className='flex flex-col gap-4'>

                <span className='text-2xl font-bold text-gray-800 w-full uppercase'>
                    Education
                </span>

                <div className='flex flex-row justify-between items-center mb-4'>
                    <span className='border-sky-400 border-2 w-[5%]'></span>
                    <span className='border-1 w-full border-gray-400 bg-gray-400 h-[20%]'>
                    </span>
                </div>


                <div className='flex flex-col gap-2'>

                    <div className='grid grid-cols-3 gap-4'>

                        <div className='flex flex-col'>
                            <span className='text-lg font-semibold text-gray-600'>
                                Mision Tic
                            </span>
                            <span className='text-md text-gray-500'>
                                2021
                            </span>
                        </div>

                        <div className='flex flex-col col-span-2'>
                            <span className='text-lg'>
                                Certificate in Web Development
                            </span>

                            <p>
                                Web Development Bootcamp
                            </p>

                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-4'>

                        <div className='flex flex-col'>
                            <span className='text-lg font-semibold text-gray-600'>
                                University institute Antonio Jose Camacho
                            </span>
                            <span className='text-md text-gray-500'>
                                2024
                            </span>
                        </div>

                        <div className='flex flex-col col-span-2'>
                            <span className='text-lg'>
                                Certificate in Systems Engineering
                            </span>

                            <p>
                                Finished my studies in Systems Engineering
                            </p>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-4'>

                        <div className='flex flex-col'>
                            <span className='text-lg font-semibold text-gray-600'>
                                University institute Antonio Jose Camacho
                            </span>
                            <span className='text-md text-gray-500'>
                                (Awaiting graduation)
                            </span>
                        </div>

                        <div className='flex flex-col col-span-2'>
                            <span className='text-lg'>
                                Bachelor´s degree in Specialization in Database Management
                            </span>
                        </div>
                    </div>

                </div>


            </div>

            <div className='flex flex-col gap-4'>

                <span className='text-2xl font-bold text-gray-800 w-full uppercase'>
                    Hobbies
                </span>

                <div className='flex flex-row justify-between items-center mb-4'>
                    <span className='border-sky-400 border-2 w-[5%]'></span>
                    <span className='border-1 w-full border-gray-400 bg-gray-400 h-[20%]'>
                    </span>
                </div>

                <div className='flex flex-row justify-evenly items-center'>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='size-15'>
                        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                        <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='size-15'>
                        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                        <path d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-15'>
                        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                        <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7l0 72 0 264c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L448 147 192 223.8 192 432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L128 200l0-72c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z" />
                    </svg>

                </div>

            </div>

        </div>
    )
}
