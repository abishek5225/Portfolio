"use client";

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar'
import Homebody from '../components/Homebody'




export default function Home() {
  return (
   <>
      <Head>
        <title>Abishek Chaulagain - Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Developer passionate about creating impactful digital experiences with React, Node.js, and modern web technologies." />
        <meta name="keywords" content="Full-Stack Developer, React, Node.js, Web Development, JavaScript, Portfolio" />
        <meta name="author" content="Abishek Chaulagain" />
        <meta property="og:title" content="Abishek Chaulagain - Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer passionate about creating impactful digital experiences" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
        <Navbar />
        <Homebody />
      </div>
    </>
  );
}
