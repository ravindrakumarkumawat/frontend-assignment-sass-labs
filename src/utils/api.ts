import { Project, ProjectsResponse } from '../types';
import { API_URL } from '../constants/config';

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    const data: ProjectsResponse = await response.json();
    
    if (!data?.data || !Array.isArray(data.data)) {
      return [];
    }

    return data.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}