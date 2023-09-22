'use client';

import React from 'react';
import Ticker from 'framer-motion-ticker';

export default async function Bicker() {
    const colors = ['#632bf3', '#f122c8', '#f16022', '#9ef344', '#44d3f3'];
  
    return (
      <div className="hover:scale-[101.5%] transition ease-in duration-200">
        <Ticker duration={20}>
            {colors.map((item, index) => (
            <div
                className="hover:scale-[101.5%] transition ease-in duration-200 hover:outline outline-offset-2 outline-1 outline-slate-300"
                key={index}
                style={{
                backgroundColor: item,
                margin: '5px',
                height: '300px',
                width: '200px',
                }}
            />
            ))}
        </Ticker>
      </div>
    );
  }