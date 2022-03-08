import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const Experience = () => {
  return (
    <section className="bg-db text-white" id="exp">
      <div className="container mx-auto min-h-[45rem]">
        <div className="flex flex-col pt-[9rem] md:max-w-[44rem] sm:max-w-[36rem] max-w-[20rem] mx-auto">
          <h2 className="md:text-4xl text-3xl text-mb mb-6">
            {">_ Experience"}
          </h2>
          <div className="w-full px-0 pt-2">
            <div className="w-full xl:max-w-2xl sm:max-w-full max-w-xs p-2 sm:mx-auto mx-0 bg-white rounded-2xl">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-mb rounded-lg focus:outline-none focus-visible:ring">
                      <span>Hodwa - Associate Manager</span>
                      <div className="flex">
                        <span className="mr-2">2021-2021</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-white`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-db">
                      <ul>
                        <li>
                          - Manage a small team of three and make sure
                          everyone’s on track
                        </li>
                        <li>
                          - Submit monthly proposals for new features or
                          enhancements
                        </li>
                        <li>
                          - Make sure PMs and RDs has a clear and smooth
                          communication channel to complete project on time
                        </li>
                        <li>
                          - Maintain and adding new feature for EIP system
                          (internal system)
                        </li>
                        <li>
                          - Maintain APIs for our Android/iOS APP on AWS lambda
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-mb rounded-lg focus:outline-none focus-visible:ring">
                      <span>Hodwa - Fullstack Developer</span>
                      <div className="flex">
                        <span className="mr-2">2019-2021</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-white`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-db">
                      <ul>
                        <li>- Create/maintain/deploy APIs</li>
                        <li>- Implement internal task management system</li>
                        <li>
                          - Create/maintain/deploy company’s official site
                        </li>
                      </ul>
                      <div className="my-2 italic text-mb underline mb-0">
                        Projects:
                      </div>
                      <div>EIP - internal project management system</div>
                      <div>
                        Lifi+ Smart Homepage - home page for the company
                      </div>
                      <div>
                        APIs - for APP to access database / send out
                        notification
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-mb rounded-lg focus:outline-none focus-visible:ring">
                      <span>Young March - Shipping Manager</span>
                      <div className="flex">
                        <span className="mr-2">2017-2019</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-white`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-db">
                      <ul>
                        <li>- Create website with Wix.com (CMS)</li>
                        <li>
                          - Oversee cargo shipments from Vietnam to the
                          US/Australia/EU
                        </li>
                        <li>
                          - Handle client communications and communicate client
                          agendas to other staff members
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-mb rounded-lg focus:outline-none focus-visible:ring">
                      <span>Quanta Computer - Software Engineer</span>
                      <div className="flex">
                        <span className="mr-2">2013-2017</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-white`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-db">
                      <ul>
                        <li>
                          - Porting drivers and solving bugs regarding to
                          SD/Audio/WDT/RIL/Touch/PMIC/IR promptly on Linux
                          Kernel (MSM/MTK - SOC) using C
                        </li>
                        <li>
                          - Collaborated with HW engineers on solving HW/FW/SW
                          issues regarding drivers/schematics
                        </li>
                        <li>
                          - Designed and implement firmware for BLE device using
                          C (Nordic - IOT)
                        </li>
                        <li>
                          - Developed products participated in CES shows in Las
                          Vegas, 2016 (MTK/Nordic-IOT)
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-mb rounded-lg focus:outline-none focus-visible:ring">
                      <span>Askey Computer - RIL Engineer</span>
                      <div className="flex">
                        <span className="mr-2">2012-2013</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-white`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-db">
                      <ul>
                        <li>
                          - Collaborated work with senior engineers on solving
                          3G/RIL issues using C(MSM-SOC)
                        </li>
                        <li>- Analyzed issues and report problems quickly</li>
                        <li>
                          - Studied and apprehended 3GPP Specs on 3G and 4G in
                          short time
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
