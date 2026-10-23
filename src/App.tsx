import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { EyeHealthPage } from './pages/EyeHealthPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { pageMeta } from './seo/pages';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={pageMeta.home.path} element={<HomePage />} />
        <Route path={pageMeta.about.path} element={<AboutPage />} />
        <Route path={pageMeta.services.path} element={<ServicesPage />} />
        <Route path={pageMeta.team.path} element={<TeamPage />} />
        <Route path={pageMeta.eyeHealth.path} element={<EyeHealthPage />} />
        <Route path={pageMeta.contact.path} element={<ContactPage />} />
        <Route path={pageMeta.privacy.path} element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
