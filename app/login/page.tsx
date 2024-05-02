import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="p-6">
      <p>Login</p>
      <div className="my-4 flex">
        <Link
          href="/"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <ArrowLeftIcon className="w-5 md:w-6" />
          <span>Go back</span>
        </Link>
      </div>
    </div>
  );
};

export default Page;
