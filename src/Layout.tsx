import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { LazyMotion, domAnimation } from "framer-motion"

const Layout: React.FC = () => {
  const [isFixed, setIsFixed] = useState(true);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      },
      {
        root: null,
        threshold: 0.1, // Adjust as needed
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
    <div className='w-screen'>
      <Header isFixed={isFixed} />
      <main className='pt-[72px]'>
        <Outlet />
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
    </LazyMotion>
  );
};

export default Layout;
