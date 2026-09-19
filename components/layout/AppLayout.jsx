import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import ChatFAB from './ChatFAB';
import Toast from '../ui/Toast';

export default function AppLayout() {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="relative pt-16 min-h-screen bg-background w-full px-space-xl py-space-lg">
          <div className="flex flex-col w-full">
            <Toast />
            <Outlet />
          </div>
        </main>
      </div>
      <ChatFAB />
    </div>
  );
}
