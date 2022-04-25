import React from 'react';

const Layout:React.FC = ({ children }: React.PropsWithChildren<Record<never, any>>) => {
    
    return (
        <div className='max-w-[1940px] mx-0 my-auto py-[1rem] px-[2rem] md:py-[3rem] lg:px-[2rem] lg:py-[7rem]'>
            {children}
        </div>
    )
}
export default Layout;