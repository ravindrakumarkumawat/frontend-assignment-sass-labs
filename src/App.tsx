import React from 'react';
import { ProjectsTable } from './components/ProjectsTable';
import { useProjects } from './hooks/useProjects';
import { usePagination } from './hooks/usePagination';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  const { projects, loading, error } = useProjects();
  const { currentPage, totalPages, paginatedItems, handlePageChange } = usePagination(projects);
  console.log(projects)
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Kickstarter Projects</h1>
         <ErrorBoundary>
          <ProjectsTable
              projects={paginatedItems}
              loading={loading}
              error={error}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            /> 
          </ErrorBoundary>
      </div>
    </div>
  );
}