import { useState, useEffect } from 'react';
import { Project } from '../types';
import { fetchProjects } from '../utils/api';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return { projects, loading, error };
}