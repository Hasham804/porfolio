import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className=' w-full px-32 py-8 font-medium flex items-center justify-between '>
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>Abouts</Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/"}>Home</Link>
        </nav>
        <h2>Logo</h2>
        <nav>
            <Link href={"/"} target='_blank'>t</Link>
            <Link href={"/"} target='_blank'>t</Link>
            <Link href={"/"} target='_blank'>t</Link>
            <Link href={"/"} target='_blank'>t</Link>
        </nav>
    </header>

  )
}

export default Navbar
