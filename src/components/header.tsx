import Link from 'next/link'
import React from 'react'


 
  
  const Header = () => {
    return (
      <div className="bg-black text-stone-50">
        {/* Main header section */}
        <div className="flex justify-between items-center px-10 font-extrabold border-b-2 border-purple-900 py-4">
          <img 
            src="/logo.PNG"
            alt="Tayyaba Shoukat's Profile Icon"
            className="object-cover w-28 h-28 rounded-full"
          />
          <nav className="space-x-6">
            <Link href="/About" className="hover:text-violet-600">About</Link>
            <Link href="/Skills" className="hover:text-violet-600">Skills</Link>
            <Link href="/Project" className="hover:text-violet-600">Project</Link>
            <Link href="/Contact" className="hover:text-violet-600">Contact</Link>
          </nav>
        </div>
        </div>
     )
     }
     
     export default Header
