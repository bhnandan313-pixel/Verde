import { Routes, Route } from 'react-router-dom';
import { ToastProvider } from './components/ui/Toast';
import AppLayout from './components/layout/AppLayout';
import CategorySelection from './pages/CategorySelection';
import DairyProductSelection from './pages/DairyProductSelection';
import CustomProductInput from './pages/CustomProductInput';
import RecommendationStandard from './pages/RecommendationStandard';
import RecommendationAdvisory from './pages/RecommendationAdvisory';
import StorageTransport from './pages/StorageTransport';
import Suppliers from './pages/Suppliers';

export default function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<CategorySelection />} />
          <Route path="/dairy" element={<DairyProductSelection />} />
          <Route path="/dairy/custom" element={<CustomProductInput />} />
          <Route path="/recommendation" element={<RecommendationStandard />} />
          <Route path="/recommendation/advisory" element={<RecommendationAdvisory />} />
          <Route path="/storage-transport" element={<StorageTransport />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
        </Route>
      </Routes>
    </ToastProvider>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="flex flex-col gap-space-xl max-w-7xl mx-auto w-full pb-16">
      <div className="flex flex-col gap-space-sm pt-space-xs">
        <h1 className="font-headline-lg text-headline-lg text-primary-container tracking-tight">{title}</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">This section is under development.</p>
      </div>
    </div>
  );
}
