import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

function Navigation() {
    const [state, setState] = useState([
      { name: 'Home', href: '/', current: true },
      { name: 'Menu', href: '/menu', current: false },
      { name: 'About', href: '/about', current: false },
      { name: 'Contact', href: '/contact', current: false },
      { name: 'Ragistration', href: '/reg', current: false },
    ])

    let onClickHandle = (toChange) => {
      let newState = JSON.parse(JSON.stringify(state))
      newState.map(item => {
        if( item.name === toChange ){
          item.current = true
        } else {
          item.current = false 
        }
        setState(newState);
      })
    } 

    return <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              {/* Nav Items*/}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                  <h1 className='logo text-2xl text-white  font-bold font-sans font-family:Roboto'>
                      Eatbit
                  </h1>
                </div>

                {/* Desktop nav items hidden on small breakpoint */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {state.map((item) => (
                      <Link 
                        to={item.href}
                        key={item.name}
                        onClick={() => onClickHandle(item.name)}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                      // <p>{item.name}</p>
                    ))}
                  </div>
                </div>
                {/* Desktop menu end */}
              </div>
             
            </div>
          </div>
                        
          {/* Mobile menu panel or nav items */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {state.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  onClick={onClickHandle}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

}

export default Navigation;
