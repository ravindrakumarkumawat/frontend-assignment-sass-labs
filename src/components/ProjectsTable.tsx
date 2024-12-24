import React from 'react';
import { Project } from '../types';
import { Loader2 } from 'lucide-react';
import { Pagination } from './Pagination';
import { ProjectsTableError } from './ProjectsTableError';

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
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return <ProjectsTableError error={error} />;
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Title</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">By</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Backers</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Amount Pledged</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Progress</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {projects.map((project) => (
            <tr key={project["s.no"]} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{project.title}</td>
              <td className="px-6 py-4">{project.by}</td>
              <td className="px-6 py-4">{project["num.backers"]}</td>
              <td className="px-6 py-4">
                ${project["amt.pledged"].toLocaleString()}
              </td>
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