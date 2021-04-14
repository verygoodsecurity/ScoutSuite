import { useEffect, useState } from 'react';
import * as API from './api';

/**
 * React Hook to fetch API data and re-render the component
 * @param {*} path
 */
export const useResources = (service, resource, ids) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const asyncAPI = async () => {
      if (service && resource && ids) {
        setLoading(true);
        try {
          const requests = ids.map(id =>
            API.get(`services/${service}/resources/${resource}/${id}`),
          );
          const response = await Promise.all(requests);
          console.info('useResources response', service, resource, ids, response);
          setData(response);
        } catch (e) {
          console.error(e.message);
        }
        setLoading(false);
      }
    };
    asyncAPI();
  }, [ids]);

  return {
    data,
    loading,
  };
};