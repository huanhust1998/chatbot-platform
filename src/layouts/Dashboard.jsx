import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  ChartPieIcon,
  Cog6ToothIcon,
  XMarkIcon,
  TrashIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ShareIcon,
  PencilSquareIcon,
  SquaresPlusIcon,
  Square3Stack3DIcon,
  WindowIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline'
import Navbar from '../components/MNavbar';
import Chat from '../components/Chat';
import AssistantInfoComponent from '../components/AssistantInfoComponent';

import './Dashboard.css';

const navigation = [
  { name: 'Cài đặt trợ lý ảo', href: '#', icon: Cog6ToothIcon, current: true },
  { name: 'Luồng kịch bản (beta)', href: '#', icon: Square3Stack3DIcon, current: false },
  { name: 'Huấn luyện trợ lý ảo', href: '#', icon: PencilSquareIcon, current: false },
  { name: 'Tuỳ chỉnh giao diện', href: '#', icon: SquaresPlusIcon, current: false },
  { name: 'Dùng thử & gỡ lỗi', href: '#', icon: ChatBubbleOvalLeftEllipsisIcon, current: false },
  { name: 'Tích hợp trợ lý ảo', href: '#', icon: ArrowPathRoundedSquareIcon, current: false },
  { name: 'Giao diện preview', href: '#', icon: WindowIcon, current: false },
  { name: 'Lịch sử hội thoại', href: '#', icon: ChartPieIcon, current: false },
  { name: 'Lấy link chia sẻ', href: '#', icon: ShareIcon, current: false },
  { name: 'Xoá trợ lý ảo', href: '#', icon: TrashIcon, current: false },
]
// const userNavigation = [
//   { name: 'Your profile', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Navbar />
      <div>
        {/* Control sidebar for mobile/destop */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      {/* Logo */}
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-50 text-indigo-600'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Sidebar desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              {/* Logo */} Logo
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  {/* Code lai o day */}
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-10 text-indigo-600'
                              : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-10',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Sidebar mobile */}
        <div className="lg:pl-72">
          {/* <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div> */}

          {/* Cho de place content vaof layout */}
          <main className="py-10">
            
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1, padding: "20px" }}>
              <AssistantInfoComponent />
            </div>
            <div style={{ flex: 1, padding: "20px" }}>
              <Chat />
            </div>
          </div>
          </main>
        </div>
      </div>
    </>
  )
}
