import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyThiran } from './components/WhyThiran';
import { Capabilities } from './components/Capabilities';
import { IndustriesServed } from './components/IndustriesServed';
import { TechStackMatrix } from './components/TechStackMatrix';
import { ComplianceStandards } from './components/ComplianceStandards';
import { ApplicationAreas } from './components/ApplicationAreas';
import { PilotCalculator } from './components/PilotCalculator';
import { EngagementModels } from './components/EngagementModels';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [scopeSummary, setScopeSummary] = useState('');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleOpenBooking = () => {
    setScopeSummary('');
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithScope = (summary: string) => {
    setScopeSummary(summary);
    setIsBookingOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenBooking={handleOpenBooking} theme={theme} toggleTheme={toggleTheme} />
      
      <main style={{ flex: 1 }}>
        <Hero onOpenBooking={handleOpenBooking} />
        <WhyThiran />
        <Capabilities />
        <IndustriesServed />
        <TechStackMatrix />
        <ComplianceStandards />
        <ApplicationAreas />
        <PilotCalculator onOpenBookingWithScope={handleOpenBookingWithScope} />
        <EngagementModels onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialScopeSummary={scopeSummary}
      />
    </div>
  );
};

export default App;
