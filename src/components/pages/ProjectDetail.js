import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../useData';

const ProjectDetail = () => {
    const [data] = useData()
    const { id } = useParams()
    const [pro, setPro] = useState([])
    console.log(id)
    console.log(data)
    useEffect(() => {
        if (data?.length > 0) {
            const data1 = data?.filter((item) => item.id === parseInt(id));
            setPro(data1)
        }
    }, [data, id])

    return (
        <div className=' lg:px-16 px-1 ' style={{ background: '#091214' }}>
            <div className='mt-6'>
                <div class="hero min-h-screen  lg:mt-0 mt-16">
                    <div class="hero-content flex-col lg:flex-row">
                        <div className=''>
                            <img style={{ height: '500px' }} src={pro[0]?.image} class="max-w-sm  rounded-lg shadow-2xl" />
                        </div>
                        <div className='lg:mx-16 mx-0 mt-4'>
                            <h1 class="text-5xl text-warning font-bold">{pro[0]?.name}</h1>
                            <p class="py-6 text-white text-justify">{pro[0]?.details}</p>
                            <div className='lg:flex grid grid-cols-3 gap-2  lg:gap-6'>
                                {
                                    pro[0]?.tech?.map(i =>
                                        <div >
                                            <p className='text-white border  border-warning p-1 border-2'>{i.tech1}</p>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='lg:flex grid grid-cols-3 gap-2  lg:gap-6 mt-4'>
                                <a href={pro[0]?.live}><button className='text-warning  border  border-warning p-1 border-2'>Client Code</button></a>
                                <a href={pro[0]?.client}><button className='text-warning  border  border-warning p-1 border-2'>Client Code</button></a>
                                {
                                    pro[0]?.server && <a href={pro[0]?.server} target='_blank' rel="noreferrer" className='text-warning  border  border-warning p-1 border-2'>Server Code</a>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   lg:gap-x-6 mt-6 '>
                    {
                        pro[0]?.screenshot?.map(i =>
                            <div style={{ height: '200px' }}>
                                <img className='image-full' src={i.num1} alt="" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;