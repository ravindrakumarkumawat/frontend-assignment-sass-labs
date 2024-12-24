import React from 'react';
import { Project } from '../types';
import { Pagination } from './Pagination';

interface ProjectsTableProps {
  projects: Project[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function ProjectsTable({
  projects,
  loading,
  error,
  currentPage,
  totalPages,
  onPageChange,
}: ProjectsTableProps) {
  if (loading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full border-collapse bg-white text-left text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 font-medium">Title</th>
            <th className="px-6 py-4 font-medium">By</th>
            <th className="px-6 py-4 font-medium">Backers</th>
            <th className="px-6 py-4 font-medium">Amount Pledged</th>
            <th className="px-6 py-4 font-medium">Progress</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {projects.map((project) => (
            <tr key={project["s.no"]}>
              <td className="px-6 py-4">{project.title}</td>
              <td className="px-6 py-4">{project.by}</td>
              <td className="px-6 py-4">{project["num.backers"]}</td>
              <td className="px-6 py-4">${project["amt.pledged"].toLocaleString()}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${Math.min(project["percentage.funded"], 100)}%` }}
                    />
                  </div>
                  <span>{project["percentage.funded"]}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}