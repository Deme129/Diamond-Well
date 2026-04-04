import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StickyCallButton from './StickyCallButton';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
}
