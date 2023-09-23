import Link from "next/link";
import { Button } from "./ui/button";

export default function PricingSection() {
  return (
      <div className="w-full my-28 rounded-lg space-y-8">
        <h2 className="text-[56px] font-bold text-center animate-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">Pricing</h2>
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-10 py-2 mx-auto max-w-[90%]">
            <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
                <div className="hover:scale-[101.5%] transition ease-in duration-200 flex flex-col w-full max-w-md p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                    <div className="flex-shrink-0">
                        <h2 className="text-xl inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                            Starter
                        </h2>
                    </div>

                    <div className="flex-shrink-0">
                        <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                            $24.90
                        </span>
                        
                        <span className="text-gray-500 dark:text-gray-400">
                            /month
                        </span>
                    </div>

                    <ul className="flex-1 space-y-4">
                        <li className="text-gray-500 dark:text-gray-400">
                            Up to 5 projects
                        </li>

                        <li className="text-gray-500 dark:text-gray-400">
                            Up to 10 collaborators
                        </li>

                        <li className="text-gray-500 dark:text-gray-400">
                            2Gb of storage
                        </li>
                    </ul>

                    <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
                        Start free
                    </button>
                </div>

                <div className="hover:scale-[101.5%] transition ease-in duration-200 flex flex-col w-full max-w-md p-8 space-y-8 text-center bg-blue-600 border-2 border-blue-600 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                    <div className="flex-shrink-0">
                        <h2 className="text-xl inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-500 uppercase rounded-lg bg-white dark:bg-gray-700">
                          Basic
                        </h2>
                    </div>

                    <div className="flex-shrink-0">
                        <span className="pt-2 text-3xl font-bold text-gray-200 uppercase dark:text-gray-100">
                            $24.90
                        </span>
                        
                        <span className="text-slate-200 dark:text-gray-400">
                            /month
                        </span>
                    </div>

                    <ul className="flex-1 space-y-4">
                        <li className="text-slate-200 dark:text-gray-400">
                            Up to 10 projects
                        </li>

                        <li className="text-slate-200 dark:text-gray-400">
                            Up to 20 collaborators
                        </li>

                        <li className="text-slate-200 dark:text-gray-400">
                            10Gb of storage
                        </li>

                        <li className="text-slate-200 dark:text-gray-400">
                            Real-time collaborations
                        </li>
                    </ul>

                    <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-blue-500 uppercase transition-colors bg-slate-50 rounded-lg hover:bg-slate-200">
                        Start free trial
                    </button>
                </div>

                <div className="hover:scale-[101.5%] transition ease-in duration-200 flex flex-col w-full max-w-md p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                    <div className="flex-shrink-0">
                        <h2 className="text-xl inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                            Premium
                        </h2>
                    </div>

                    <div className="flex-shrink-0">
                        <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                            $49.90
                        </span>

                        <span className="text-gray-500 dark:text-gray-400">
                            /month
                        </span>
                    </div>

                    <ul className="flex-1 space-y-4">
                        <li className="text-gray-500 dark:text-gray-400">
                            Unlimited projects
                        </li>
                        
                        <li className="text-gray-500 dark:text-gray-400">
                            Unlimited collaborators
                        </li>
                        
                        <li className="text-gray-500 dark:text-gray-400">
                            Unlimited storage
                        </li>
                        
                        <li className="text-gray-500 dark:text-gray-400">
                            Real-time collaborations
                        </li>
                        
                        <li className="text-gray-500 dark:text-gray-400">
                            24x7 Support
                        </li>
                    </ul>

                    <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
                        Start free trial
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
