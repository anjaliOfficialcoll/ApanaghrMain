'use client';

import React from 'react';
import Image from 'next/image';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="animate-bounce">
        <div className="relative h-20 w-20">
          <Image
            src="/images/Apanaghr. (2).gif"
            alt="Loading..."
            fill
            priority
            className="object-contain animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
