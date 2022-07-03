export default function Welcome() {
  const myStyle = 'container mt-2 pl-40 flow-root'
  return (
    <>
      <div className={myStyle}>
        <div>
          When controlling the flow of text, using the CSS property
          <span className='inline'>display: inline</span>
          will cause the text inside the element to wrap normally. While using
          the property{' '}
          <span className='inline-block'>display: inline-block</span>
          will wrap the element to prevent the text inside from extending beyond
          its parent. Lastly, using the property{' '}
          <span className='block'>display: block</span>
          will put the element on its own line and fill its parent.
        </div>

        <div className='flex items-center space-x-2 text-base'>
          <h4 className='font-semibold text-slate-900'>Contributors</h4>
          <span className='rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700'>
            204
          </span>
        </div>
        <div className='mt-3 flex -space-x-2 overflow-hidden'>
          <img
            className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
          <img
            className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
          <img
            className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
            alt=''
          />
          <img
            className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
          <img
            className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
        </div>
        <div className='mt-3 text-sm font-medium'>
          <a href='#' className='text-blue-500'>
            + 198 others
          </a>
        </div>
      </div>

      <div
        data-theme='night'
        className='card card-compact w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>

      <div data-theme='autumn'>
        <button className='btn gap-2'>
          Inbox
          <div className='badge'>+99999</div>
        </button>
        <button className='btn gap-2'>
          Inbox
          <div className='badge badge-secondary'>+99</div>
        </button>
      </div>

      <div data-theme='autumn' className='avatar-group -space-x-6'>
        <div className='avatar'>
          <div className='w-12'>
            <img src='https://placeimg.com/192/192/people' />
          </div>
        </div>
        <div className='avatar'>
          <div className='w-12'>
            <img src='https://placeimg.com/192/192/people' />
          </div>
        </div>
        <div className='avatar'>
          <div className='w-12'>
            <img src='https://placeimg.com/192/192/people' />
          </div>
        </div>
        <div className='avatar'>
          <div className='w-12'>
            <img src='https://placeimg.com/192/192/people' />
          </div>
        </div>
      </div>

      <div data-theme='dark' className='avatar'>
        <div className='w-32 rounded'>
          <img src='https://placeimg.com/192/192/people' />
        </div>
      </div>
      <div className='avatar'>
        <div className='w-20 rounded'>
          <img
            src='https://placeimg.com/192/192/people'
            alt='Tailwind-CSS-Avatar-component'
          />
        </div>
      </div>
      <div className='avatar'>
        <div className='w-16 rounded'>
          <img
            src='https://placeimg.com/192/192/people'
            alt='Tailwind-CSS-Avatar-component'
          />
        </div>
      </div>
      <div className='avatar'>
        <div className='w-8 rounded'>
          <img
            src='https://placeimg.com/192/192/people'
            alt='Tailwind-CSS-Avatar-component'
          />
        </div>
      </div>

      <div data-theme='cmyk' className='dropdown'>
        <label tabIndex={0} className='btn m-1'>
          Click
        </label>
        <ul
          tabIndex={0}
          className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <div
        data-theme='dracula'
        className='dropdown dropdown-top dropdown-right'>
        <label tabIndex={0} className='btn m-1'>
          Click
        </label>
        <ul
          tabIndex={0}
          className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <div data-theme='cmyk' className='flex flex-col gap-3'>
        <div data-theme='mytheme' className='alert'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='stroke-info h-6 w-6 flex-shrink-0'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>{' '}
            <span>12 unread messages. Tap to see.</span>
          </div>
        </div>{' '}
        <div className='alert alert-info'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='h-6 w-6 flex-shrink-0 stroke-current'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>{' '}
            <span>New software update available.</span>
          </div>
        </div>{' '}
        <div className='alert alert-success'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 flex-shrink-0 stroke-current'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>{' '}
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>{' '}
        <div className='alert alert-warning'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 flex-shrink-0 stroke-current'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>{' '}
            <span>Warning: Invalid email address!</span>
          </div>
        </div>{' '}
        <div className='alert alert-error'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 flex-shrink-0 stroke-current'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>{' '}
            <span>Error! Task failed successfully.</span>
          </div>
        </div>
      </div>
    </>
  )
}
