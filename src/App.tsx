import React from 'react';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { useProjects } from './hooks/useProjects';
import { usePagination } from './hooks/usePagination';
import './styles/App.css';

export default function App() {
  const { projects, loading, error } = useProjects();
  const { currentPage, totalPages, paginatedItems, handlePageChange } = usePagination(projects);

  return (
    <div className="app">
      <h1>Kickstarter Projects</h1>
      <Table 
        projects={paginatedItems}
        loading={loading}
        error={error}
      />
      {!loading && !error && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}