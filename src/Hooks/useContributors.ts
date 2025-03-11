import { useEffect, useState } from 'react';

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  contributions: number;
}

export const useContributors = () => {
  const [contributors, setContributors] = useState<Array<Contributor>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const responseFront = await fetch('https://api.github.com/repos/Afordin/beerdin-front/contributors');
        const data1 = await responseFront.json();
        const responseBack = await fetch('https://api.github.com/repos/afordin/beerdin/contributors');
        const data2 = await responseBack.json();
        const responseAPI = await fetch('https://api.github.com/repos/afordin/beerdin-api/contributors');
        const data3 = await responseAPI.json();
        // Include all contributors in a unique array
        const response = [...data1, ...data2, ...data3];
        // Extract only the necessary data
        const contributorsData= response.map((contributor: Contributor) => ({
          id: contributor.id,
          login: contributor.login,
          avatar_url: contributor.avatar_url,
          contributions: contributor.contributions,
        }));
        // Filter repeated contributors and sum contributions
        const filteredResponse = contributorsData.reduce<Record<number, Contributor>>((acc, contributor) => {
          if (acc[contributor.id]) {
            acc[contributor.id].contributions += contributor.contributions;
          } else {
            acc[contributor.id] = contributor;
          }
          return acc;
        }, {});
        // Sort contributors by contributions
        const sortedContributors = Object.values(filteredResponse).sort((a, b) => b.contributions - a.contributions);
        setContributors(sortedContributors)
      } catch(error) {
        console.error('Error fetching contributors', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContributors();
  }, []);

  return { contributors, isLoading };
};
