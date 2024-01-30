import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <nav className='bg-gray-800'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 items-center justify-between'></div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className=''>
              <div className='flex space-x-4'>
                <Link
                  href='/'
                  className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                  aria-current='page'>
                  Dashboard
                </Link>
                <Link
                  href='/about'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                  About
                </Link>
                <Link
                  href='/blog'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                  Blog
                </Link>
                <Link
                  href='/blog/post'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                  Calendar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
