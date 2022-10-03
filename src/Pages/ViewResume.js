import React from 'react'
import html2canvas from 'html2canvas';

function ViewResume(props) {

    const data = props.data;

    const handlePrint = () => {
        console.log("Print")
        html2canvas(document.getElementById("Dipu"))
            .then(function (canvas) {
                let a = document.createElement("a");
                a.download = "mypic" + Math.floor(Math.random() * 20000) + ".png";
                a.href = canvas.toDataURL();
                a.click()
            });
    }
    return (
        <>
            <div className=' bg-gray-300 md:p-5  h-[1123px]'>
                <div id='Dipu' className='grid grid-cols-12'>
                    <div className='col-span-1 md:block hidden'></div>

                    <div className='md:col-span-3 col-span-4 bg-sky-900  border border-black'>
                        <div className='p-10'>
                            <img className='rounded-full' src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg" alt="" />
                        </div>
                        <div className='text-white md:ml-10 ml-2 '>
                            <p className='border-b-2 font-semibold text-3xl'>Contacts</p>
                            <div className='py-3'>
                                <p className='font-semibold text-lg'>Phone</p>
                                <p className='text-sm'>{data?.phone ? data?.phone : '9708846652'}</p>
                            </div>
                            <div className='py-3'>
                                <p className='font-semibold text-lg'>Email</p>
                                <p className='text-sm'>{data?.email ? data?.email : 'dsingh197@gmail.com'}</p>
                            </div>
                            <div className='py-3'>
                                <p className='font-semibold text-lg'>Address</p>
                                <p className='text-sm'>{data?.address ? data?.address : 'Ranchi, Jharkhand'}</p>
                            </div>
                            <div className='my-2 leading-6'>
                                <p className='border-b-2 my-2 font-semibold text-3xl'>Education</p>
                                <p>2010</p>
                                <p className='font-semibold'>Master's In Computer Application</p>
                                <p>Sikkim Manipal University</p>
                            </div>

                            <div>
                                <p className='border-b-2 py-3 font-semibold text-3xl'>Skills</p>
                                <li className='my-1'>React JS</li>
                                <li className='my-1'>Node Js</li>
                                <li className='my-1'>Java Script</li>
                                <li className='my-1'>Tailwind CSS</li>
                            </div>
                            <div>
                                <p className='border-b-2 py-3 font-semibold text-3xl'>Language</p>
                                <li className='my-1'>Hindi</li>
                                <li className='my-1'>English</li>
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-7 col-span-8 bg-white border border-black'>
                        <div className='mx-10 mt-12'>
                            <p className='text-5xl font-bold'>{data?.name ? data?.name : 'Dipu Kumar Singh'}</p>
                            <p className='font-medium py-2 text-2xl'>{data?.occupation ? data?.name : 'Software Engineer'}</p>
                            <p>{data?.about && data.about}</p>
                        </div>
                        <div className='mx-10 mt-8 '>
                            <p className='text-3xl py-2 font-semibold border-b-2 border-black'>Experence</p>
                            <div className='border-l-2 border-black pl-1.5 mt-8'> {/* This is Line*/}
                                <div>
                                    <p className='rounded-full bg-black h-3 w-3 border-2 -ml-[13px] border-black'></p>{/*This is round*/}
                                    <div className='-mt-10 py-6 ml-5'>
                                        <p>2012 - Present</p>
                                        <p><span className='font-semibold'> Aadrika Enterprises </span> | Ranchi, Jharkhand</p>
                                        <p className=' font-semibold'>Job Description</p>
                                        <p className='ml-10'>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 md:block hidden'></div>
                </div>
                <div className='flex justify-center m-3'>
                    <button onClick={props.handleEdit} className='bg-red-500 px-8 py-2 text-2xl font-semibold mx-2 rounded-sm'>Edit</button>
                    <button onClick={handlePrint} className='bg-green-500 px-8 py-2 text-2xl font-semibold mx-2 rounded-sm'>Print</button>
                </div>
            </div>
        </>
    )
}

export default ViewResume