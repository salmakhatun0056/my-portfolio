import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useData from '../../useData';
import './Project.css'

const Project = () => {
    const navigate = useNavigate()
    const [data] = useData()
    const handelDetail = id => {
        navigate(`/details/${id}`)
    }
    return (
        <div style={{ background: '#091214' }} className=' lg:px-16 p-4'>
            <h3 className='text-center text-3xl font-bold text-white mb-6'>My <span className='text-warning'>Work</span> &#38; <span className='text-warning'>Projects</span></h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 '>
                {
                    data?.map(item =>
                        <div key={item.id} style={{ height: '28rem' }} className=" text-white border-rounded border-2 border-warning  overflow-hidden card-image  card   shadow-xl image-full">
                            <figure><img src={item.image} alt="image" /></figure>
                            <div class="card-body text-justify " style={{ height: '28rem' }}>
                                <h2 class="card-title text-warning  font-bold text-2xl">{item.name}</h2>
                                <p><span className='text-warning  font-bold'>Project type:</span> {item.type}</p>

                                <p className='text-white '><span className='text-warning font-bold'>Project Description:</span> {item.feature}</p>
                                <div className='justify-evenly flex gap-x-2 '>
                                    <a href={item.live}><button className='btn btn-outline btn-warning'>Client Code</button></a>
                                    <a href={item.client}><button className='btn btn-outline btn-warning'>Client Code</button></a>
                                    {
                                        item.server && <a href={item.server} target='_blank' rel="noreferrer" className='btn btn-outline btn-warning'>Server Code</a>
                                    }

                                </div>
                                <div className='flex items-center justify-center '>
                                    <button onClick={() => handelDetail(item.id)} className='text-white  btn btn-outline btn-warning rounded'>  Project Detail</button>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
            <button onClick={() => navigate('/allproject')} className='mx-auto block   mt-8 text-white  btn btn-outline btn-warning rounded'>SEE MORE</button>
        </div>
    );
};

export default Project;