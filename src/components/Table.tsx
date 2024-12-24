import React from 'react';
import '../styles/Table.css';
import { Project } from '../types';

interface TableProps {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

export const Table: React.FC<TableProps> = ({ projects, loading, error }) => {
  if (loading) {
    return <div className="loading" role="status">Loading projects...</div>;
  }

  if (error) {
    return <div className="error" role="alert">{error}</div>;
  }

  return (
    <div className="table-container">
      <table className="projects-table" role="grid">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Percentage Funded</th>
            <th scope="col">Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project["s.no"]}>
              <td>{project["s.no"]}</td>
              <td>{project["percentage.funded"]}%</td>
              <td>${project["amt.pledged"].toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};