import React from 'react'

function ProjectSection() {
  return (
    <section className="min-h-screen py-16 bg-black" id='project'>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 mt-15 text-center text-blue-400">My Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="border border-amber-400 rounded-xl">
                    <div className="p-6 bg-[#0f0f0f] rounded-xl shadow-md hover:shadow-blue-500/40 transition duration-300">
                        <img src="/img/peakpx.jpg" alt="" className='w-full h-full'/>
                    </div>
                </div>
                                <div className="border border-amber-400 rounded-xl">
                    <div className="p-6 bg-[#0f0f0f] rounded-xl shadow-md hover:shadow-blue-500/40 transition duration-300">
                        <img src="/img/peakpx.jpg" alt="" className='w-full h-full'/>
                    </div>
                </div>
                                <div className="border border-amber-400 rounded-xl">
                    <div className="p-6 bg-[#0f0f0f] rounded-xl shadow-md hover:shadow-blue-500/40 transition duration-300">
                        <img src="/img/peakpx.jpg" alt="" className='w-full h-full'/>
                    </div>
                </div>
                                <div className="border border-amber-400 rounded-xl">
                    <div className="p-6 bg-[#0f0f0f] rounded-xl shadow-md hover:shadow-blue-500/40 transition duration-300">
                        <img src="/img/peakpx.jpg" alt="" className='w-full h-full'/>
                    </div>
                </div>
                                <div className="border border-amber-400 rounded-xl">
                    <div className="p-6 bg-[#0f0f0f] rounded-xl shadow-md hover:shadow-blue-500/40 transition duration-300">
                        <img src="/img/peakpx.jpg" alt="" className='w-full h-full'/>
                    </div>
                </div>
                                <div className="border border-amber-400 rounded-xl">
                    <div className="p-6 bg-[#0f0f0f] rounded-xl shadow-md hover:shadow-blue-500/40 transition duration-300">
                        <img src="/img/peakpx.jpg" alt="" className='w-full h-full'/>
                    </div>
                </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection