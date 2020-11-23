import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import format from 'comma-number';

export const VisitorCount = ({ slug }: { slug: string }) => {
  const [hits, setHits] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== 'production') {
      // Set dummy value to verify on UI
      setHits(1);
      return;
    }

    fetch(`/api/register-hit?slug=${slug}`)
      .then((res) => res.json())
      .then((json) => {
        if (typeof json.hits === 'number') {
          setHits(json.hits);
        }
      });
  }, [slug]);

  return (
    <div>
      <Text>
        Total Visitor Count:{' '}
        {typeof hits !== 'undefined' ? format(hits) : '----'}
      </Text>
    </div>
  );
};
