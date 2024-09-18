import React from 'react'
const NavMenu=[
    {id:1, title:'Home'},
    {id:1, title:'Admin-Management'},
    {id:1, title:'Student-Management'},
    {id:1, title:'Dashboard'},
    {id:1, title:'Login'},
];
const Navbar = () => {
  return (
    <nav className='bg-[#291063]'>
        <div className='container flex justify-between items-center py-5'>
            <img/>
            <div className='hidden md:block '>
                <ul className='flex gap-10'>
                    {NavMenu.map((menu)=><li key={menu.id} className='inline-block text-xl md:text-2xl text-white hover:text-[#7258AE]'>{menu.title}</li>)}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar