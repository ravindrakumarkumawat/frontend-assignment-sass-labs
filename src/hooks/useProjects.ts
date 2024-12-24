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
      //   setProjects([
      //     {
      //       "s.no": 0,
      //       "amt.pledged": 15823,
      //       "blurb": "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
      //       "by": "Museum of Science Fiction",
      //       "country": "US",
      //       "currency": "usd",
      //       "end.time": "2016-11-01T23:59:00-04:00",
      //       "location": "Washington, DC",
      //       "percentage.funded": 186,
      //       "num.backers": "219382",
      //       "state": "DC",
      //       "title": "Catalysts, Explorers & Secret Keepers: Women of SF",
      //       "type": "Town",
      //       "url": "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery"
      //   },
      //   {
      //     "s.no": 1,
      //     "amt.pledged": 6859,
      //     "blurb": "A unique handmade picture book for kids & art lovers about a nervous monster who finds his courage with the help of a brave little girl",
      //     "by": "Tyrone Wells & Broken Eagle, LLC",
      //     "country": "US",
      //     "currency": "usd",
      //     "end.time": "2016-11-25T01:13:33-05:00",
      //     "location": "Portland, OR",
      //     "percentage.funded": 8,
      //     "num.backers": "154926",
      //     "state": "OR",
      //     "title": "The Whatamagump (a hand-crafted story picture book)",
      //     "type": "Town",
      //     "url": "/projects/thewhatamagump/the-whatamagump-a-hand-crafted-story-picture-book?ref=discovery"
      // },
        // ]);
        console.log(data);
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