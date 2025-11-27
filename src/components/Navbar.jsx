"use client"
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '#',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Faculty', href: '/faculty' },
        { name: 'Gallery', href: '/gallery' },
      ]
    },
    { 
      name: 'Academics', 
      href: '#',
      dropdown: [
        { name: 'Curriculum', href: '/academics' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Activities', href: '/activities' },
      ]
    },
    { 
      name: 'Admissions', 
      href: '/admissions' 
    },
    {
      name: 'Resources',
      href: '#',
      dropdown: [
        { name: 'News & Events', href: '/news' },
        { name: 'Parent Corner', href: '/parent-corner' },
        { name: 'Student Corner', href: '/student-corner' },
      ]
    },
    { name: 'Visit Us', href: '/visit-us' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-primary-dark leading-tight">
                Gurukula Vidya Mandira
              </span>
              <span className="text-xs text-stone-600 tracking-wider uppercase">
                Est. 1995
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button 
                    className="flex items-center gap-1 text-stone-700 hover:text-primary font-medium transition-colors duration-200 text-sm uppercase tracking-wide py-2"
                  >
                    {item.name} <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-stone-700 hover:text-primary font-medium transition-colors duration-200 text-sm uppercase tracking-wide py-2 block"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg border border-stone-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-50 hover:text-primary"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/admissions" className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-md font-medium transition-colors shadow-md text-sm">
              Admissions Open
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-stone-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200 absolute w-full shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className="w-full flex justify-between items-center px-3 py-3 text-stone-700 hover:text-primary hover:bg-stone-100 rounded-md font-medium text-base"
                    >
                      {item.name} <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-6 space-y-1 bg-stone-100/50 rounded-md mb-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-stone-600 hover:text-primary text-sm"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-stone-700 hover:text-primary hover:bg-stone-100 rounded-md font-medium text-base"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/admissions" onClick={() => setIsOpen(false)} className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-md font-medium transition-colors shadow-md">
                Admissions Open
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
