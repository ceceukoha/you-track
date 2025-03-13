import React from 'react'
import LinksDropdown from "../components/LinksDropdown";
import ThemeToggle from "../components/ThemeToggle";
const Navbar = () => {
  return (
    <nav className="bg-muted py-4 px-4 sm:px-16  lg:px-24 flex items-center justify-between">
      <div>
        <LinksDropdown/>
      </div>
      <div className='flex items-center gap-x-4'>
    <ThemeToggle/>
    {/* <UserButton/> */}
      </div>
    </nav>
  )
}

export default Navbar;

