import React from 'react';

const ErrorPage = () => {
    return (
        <div className='text-center border border-black h-screen flex flex-col justify-center'>
            <h1 className='text-3xl'>You came to the wrong place</h1>
            <p className='text-xl mt-4'>404 | Not found</p>
        </div>
    );
};

export default ErrorPage;