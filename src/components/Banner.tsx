import BannarImage from '../assets/me-0.jpeg'
export default function Banner() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 my-5 md:my-9'>
        <div className='space-y-2 mx-auto px-3 md:px-10'>
            <h2 className='font-semibold text-2xl'>Hello, I am</h2>
            <h1 className='text-3xl md:text-5xl font-bold text-blue-900 '>Rezaul Karim Rifat</h1>
            <h2 className='bg-linear-to-r from-orange-900 to-purple-600 bg-clip-text text-transparent text-2xl font-semibold'>Full Stack Web Developer</h2>
            <p>I build modern and responsive web applications using Python, Django,React and Related Technologies. I love turning ideas into real products</p>
            <div className='flex items-center gap-5 md:gap-8 py-4'>
                <button onClick={()=>document.getElementById('projects')?.scrollIntoView()} className="btn btn-active btn-primary">View My Projects</button>
                <button onClick={()=>document.getElementById('contact')?.scrollIntoView()} className="btn btn-outline">Contact Me</button>
            </div>
        </div>
<div className="relative flex justify-center items-center overflow-hidden min-h-72
  bg-white
  before:absolute before:inset-0
  before:bg-[radial-gradient(ellipse_at_right,#ede9fe_0%,#eff6ff_35%,#ffffff_75%)]">

  {/* Decorative circles */}
  <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-200/40 blur-2xl"></div>

  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-200/40 blur-2xl"></div>

  {/* Image */}
  <div className="relative z-10">
    <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-400 via-purple-400 to-orange-300 blur-xl opacity-40"></div>

    <img
      src={BannarImage}
      alt="Rezaul Karim Rifat"
      className="relative h-60 w-60 object-cover rounded-full border-4 border-white shadow-xl"
    />
  </div>

</div>
    </div>
  )
}
