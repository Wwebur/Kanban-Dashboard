import React from 'react';
import { useRouter } from 'next/router';

import { ServiceProvider } from '../../service';
import { Dashboard } from '../../dashboard';

export default function DashboardPage() {
  const router = useRouter();
  const { projectId } = router.query;

  const handleGoToProjects = () => router.push(`/projects`);

  return (
    <ServiceProvider>
      <Dashboard projectId={projectId as string} onGoToProjects={handleGoToProjects} />
    </ServiceProvider>
  );
}
