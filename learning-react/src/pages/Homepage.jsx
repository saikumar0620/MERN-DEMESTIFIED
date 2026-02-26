import React from 'react'

const Homepage = () => {
  React.useEffect(()=>{

    return()=>{console.log("unmounted")}
  },[])
  // return (
  //   <h1>Homepage</h1>
  // )
  return (
  <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">
    <div className="max-w-4xl text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
        The Future of Your <span className="text-blue-600">Workflow</span> Starts Here.
      </h1>
      <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
        Stop settling for mediocre interfaces. Build something that actually scales without the CSS headache.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all">
          Get Started
        </button>
        <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-all">
          View Documentation
        </button>
      </div>
    </div>
  </div>
)
}

export default Homepage