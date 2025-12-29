import React from 'react'

const Why = () => {
  return (
    <section className='py-20 bg-gray-100'>
        <div className="grid grid-cols-2  gap-10 max-w-7xl mx-auto">
            <div>
        <h1 className='text-3xl text-cyan-950 font-bold mt-24 mb-4'>Why choose Northside Electrical</h1>
        <p className="mb-6 text-cyan-950">Choose Northside Electrical for unparalleled expertise, reliable service and swift response times.
            As a trusted Melbourne local, were commited to providing cost effective solutions
        </p>
        <div className="grid grid-cols-4 bg-cyan-950 gap-4 p-6 rounded-xl">
            <div>
                <p className='text-white text-sm text-center'>Residential & Commerical</p>
            </div>
            <div>
                <p className='text-white text-sm text-center'>Electrical Safety Checks</p>
            </div>
            <div>
                <p className='text-white text-sm text-center'>EV Charger Supply & Install</p>
            </div>
            <div>
                <p className='text-white text-sm text-center'>Solar & Battery Systems</p>
            </div>
        </div>
        </div>
        <div className='grid grid-cols-2 gap-4 '>
            <div className=' rounded-xl bg-white shadow p-6'>
                <h2 className='text-2xl  text-cyan-950 font-bold mb-4'>Expertise</h2>
                <p className='text-cyan-950'>Experienced professionals offering exceptional electrical solutions for residential and commercial clients across Melbourne.</p>
            </div>
            <div className=' rounded-xl bg-white shadow p-6'>
                <h2 className='text-2xl text-cyan-950 font-bold mb-4'>Reliability</h2>
                <p className='text-cyan-950'>Dependable electricians committed to quality service,using industry-standard products to ensure customer satisfaction.</p>
            </div>
            <div className=' rounded-xl bg-white shadow p-6'>
                <h2 className='text-2xl text-cyan-950 font-bold mb-4'>Response Time</h2>
                <p className="text-cyan-950">Prompt andd efficient, we prioritise addressing your electrical concersn with our speedy service and 24/7 emergency callouts.</p>
            </div>
            <div className=' rounded-xl bg-white shadow p-6'>
                <h2 className='text-2xl text-cyan-950 font-bold mb-4'>Melbourne Local</h2>
                <p className="text-cyan-950">Proudly servering Melbourne for over 35 years, Northside Electrical understands the unique needs of our local community.</p>
            </div>
        </div>
        </div>
    </section>
    
  )
}

export default Why