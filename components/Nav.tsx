

"use client";

import Image from 'next/image'
import Link from '@node_modules/next/link'
import { getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Nav = () => {
  const isUserLoggedIn: boolean = true; 

  
  const [providers, setProviders] = useState<any>(null);

  const [toggleDropdown, setToggleDropdown] = useState(false);

  const setProvidersObj = async () => {
    const response = await getProviders();

    setProviders(response);
  }; 

  useEffect(() => {
    setProvidersObj();   
  }, []);

  
  console.log(toggleDropdown)

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/">
          <Image src={"/assets/images/logo.svg"} alt='logo' width={30} height={30} className='object-contain' />
          <p className='logo_text'>Prompt Caller</p>
        </Link>

        {isUserLoggedIn ? <div className='sm:flex hidden'>
            <Link href={"/create-prompt"} className='black_btn mr-2'>
               Create Post
            </Link>

            <button type='button' className='outline_btn mr-2'>Sign Out</button>

            <Link href={"/profile"} className='ml-1 mt-1'>
                <Image src={"/assets/images/logo.svg"} alt='logo' width={25} height={25} className='rounded-full' 
                  onClick={() => setToggleDropdown((prev) => !prev)}
                />
            </Link>
            
        </div> : <>
            {providers && Object.values(providers).map((provider: any) => (
                <button type='button' key={provider.name} className='black_btn' 
                  onClick={() => signIn(provider.id)}
                >
                    Sign in
                </button>
            ))}
        </>}
        
    </nav>
  )
}

export default Nav