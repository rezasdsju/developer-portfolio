
// import AboutImage from '../assets/laptop-2.jfif'
import PythonImage from '../assets/python.png'
import DjangoImage from '../assets/django.png'
import JSIMage from '../assets/js.png'
import ReactImage from '../assets/react.jfif'
import TypeScriptImage from '../assets/ts.png'
import NextjsLogo from '../assets/next-js-logo.png'
// import { FaGraduationCap } from 'react-icons/fa'
import GraduationCap from '../assets/graduation-cap.jfif'
import Map from '../assets/map-2.jfif'
import Experience from '../assets/experience.jfif'
import TailwindImage from '../assets/tailwind.png'
// import { FaPython } from "react-icons/fa";

export default function About() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 my-6 sm:mt-15 bg-linear-to-br from-blue-50 via-purple-50 to-orange-50 py-4 sm:py-8 '>
            <div className='px-5 sm:px-10'>
                <h2 className='text-blue-700 text-3xl font-bold scroll-mt-20' id='about'>About Me</h2>
                <h2 className='bg-linear-to-r from-orange-900 to-purple-600 bg-clip-text text-transparent text-2xl font-semibold'>Who I Am</h2>
                <p>I am Rezaul Karim Rifat, a passionate and dedicated web developer. I enjoy building web applications and solving real world problems with technology</p>

                <p className='pt-2'>I'm currently focusing on improving my skills and building meaningfull projects. I aim to become a professional full stack developer and contribute to impactfull products in the future</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5'>
                    <div className='bg-lime-950 flex items-center gap-4 px-4 py-2 rounded-2xl'>
                        <img src={GraduationCap} alt="" className='h-10 w-10 rounded-full' />
                        <div>
                            <p className='font-bold text-white'>Education</p>
                            <p className='text-red-200'>Jahangirnagar University </p>
                        </div>
                    </div>
                    <div className='bg-lime-500 flex items-center gap-4 px-4 py-2 rounded-2xl'>
                        <img src={Map} alt="" className='h-10 w-10 rounded-full' />
                        <div>
                            <p className='font-bold'>Location</p>
                            <p className='text-yellow-950'>Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    <div className='bg-amber-900 flex items-center gap-4 px-4 py-2 rounded-2xl'>
                        <img src={Experience} alt="" className='h-10 w-10 rounded-full' />
                        <div>
                            <p className='font-bold text-white'>Experience</p>
                            <p className='text-purple-300'> One Years</p>
                        </div>
                    </div>
 
                </div>
            </div>
            <div className='mt-4 sm:mt-0'>
                {/* <img src={AboutImage} alt="" className='h-70 w-full' /> */}
                <div className='ml-5 sm:ml-0 mb-4'>
                    <h2 className='text-2xl font-semibold text-lime-700 scroll-mt-20' id='skill'>My Skills</h2>
                    <h1 className='text-3xl font-bold'>Technologies and Tools</h1>
                    <p>Here are the technologies and tools I've worked so far</p>
                </div>

                <div className="grid grid-cols-3 gap-5">
                    <div className='flex flex-col items-center '>
                        <img src={PythonImage} alt="" className='h-20' />
                        <h3>Python</h3>
                    </div>
                    <div className='flex flex-col items-center '>
                        <img src={DjangoImage} alt="" className='h-20' />
                        <h3>Django</h3>
                    </div>
                    <div className='flex flex-col items-center '>
                        <img src={JSIMage} alt="" className='h-20' />
                        <h3>JavaScript</h3>
                    </div>
                    <div className='flex flex-col items-center '>
                        <img src={TypeScriptImage} alt="" className='h-20' />
                        <h3>TypeScript</h3>
                    </div>
                    <div className='flex flex-col items-center '>
                        <img src={ReactImage} alt="" className='h-20' />
                        <h3>React</h3>
                    </div>
                    <div className='flex flex-col items-center '>
                        <img src={NextjsLogo} alt="" className='h-20' />
                        <h3>NEXT.js</h3>
                    </div>
                    <div className='flex flex-col items-center '>
                        <img src={TailwindImage} alt="" className='h-20' />
                        <h3>Tailwind </h3>
                    </div>

                </div>
            </div>
        </div>
    )
}
