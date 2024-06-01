"use client"
import React from "react";
import  logo  from "@/public/imgs/logo bg blanco.png";
import { Navbar, MobileNav , Typography , IconButton,} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from 'next/font/google';


const mont = Montserrat({
    weight: "700",
    subsets:['latin'],
  })

export default function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <hr/>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link href="/" className="flex items-center">
            <p className={` text-black ${mont.className}`}>Inicio</p>
          
        </Link>
      </Typography>
      <hr/>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/jeans" className="flex items-center pb-1">
          <p className={` text-black ${mont.className}`}>Jeans</p>
        </Link>
      </Typography>
      
    </ul>
  );
 
  return (
    <header className=" max-h-[350px] ">
      <Navbar className="fixed top-0 py-[0.2px] z-10 h-max max-w-full rounded-none px-4 lg:px-8 lg:py-1 border-none">


        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a" href="/" className=" text-center align-center cursor-pointer py-1.5 font-medium">
              <div>
              <Image src={logo} width={160} height={100} alt="logo"/>
              </div>
            
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (                
                <svg className="rotate-180" width="30px" height="30px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 5H11" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H16" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19H21" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>

    </header>
  );
}