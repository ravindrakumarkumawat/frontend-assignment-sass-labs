import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ProjectsTableErrorProps {
  error: string;
}

export function ProjectsTableError({ error }: ProjectsTableErrorProps) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-8">
      <div className="flex items-center gap-3">
        <AlertCircle className="h-6 w-6 text-red-500" />
        <h3 className="text-lg font-semibold text-red-800">Error Loading Projects</h3>
      </div>
      <p className="mt-2 text-red-700">{error}</p>
    </div>
  );
}