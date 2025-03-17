'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../assets/Logo.png"
import banner from "../assets/IMG_1308.JPG"

const navigation = [
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
        <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}>
        <header className="absolute inset-x-0 top-0 z-50">
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img alt="" src={Logo} className="h-8 w-auto" />
                </a>
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
                </div>
                <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                </div>
                </div>
            </DialogPanel>
            </Dialog>
        </header>

        {/* Overlay Section - Semitransparent Black Layer */}
        <div className="absolute inset-0 bg-black opacity-50 z-40"></div> {/* Overlay */}

        {/* Banner Section with Logo Centered */}
        <div className="relative isolate flex items-center justify-center h-full px-6 pt-14 lg:px-8 z-50">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
            <img alt="Logo" src={Logo} className="h-70 w-auto" />
            </div>
        </div>
        </div>


  )
}
