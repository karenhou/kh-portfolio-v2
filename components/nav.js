import React from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Mugshot from "../assets/images/mugshot.PNG";
import Image from "next/image";

const ArrorComponent = () => {
  return <span className="text-lb flex items-center">{">_"}</span>;
};

const navigation = [
  { name: "About", href: "#about", current: false },
  { name: "Experience", href: "#exp", current: false },
  { name: "Works", href: "#works", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => (
  <Disclosure as="nav" className="bg-db">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <a
                    href="/"
                    className=" text-gray-300 rounded-full font-medium h-10 w-10">
                    <Image
                      src={Mugshot}
                      alt="mugshot"
                      layout="responsive"
                      // width={48}
                      // height={48}
                    />
                  </a>
                </Link>
              </div>
              <div className="hidden md:block md:ml-6 w-full h-auto self-center">
                <div className="flex space-x-0 justify-end w-full">
                  {navigation.map((item, i) => (
                    <div
                      className="hover:bg-gray-700 hover:text-white flex rounded-md px-2 text-sm"
                      key={i}>
                      <ArrorComponent />
                      <Link href={item.href}>
                        <a
                          // key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300  ",
                            "pr-3 pl-1 py-2 lg:text-sm text-xs font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}>
                          {item.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Disclosure>
                <div className="flex ">
                  <div className="flex hover:bg-gray-700 hover:text-white w-auto rounded-md pl-3">
                    <ArrorComponent />
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 ",
                        "block pr-3 pl-1 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      {item.name}
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default Nav;
