import Grid from '@mui/material/Grid';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { ICardData, ICardProps } from './Card';

const Cards = ({ items, deleteFn }: ICardProps) => {
  const router = useRouter();
  const [isOnHover, setIsOnHover] = useState(false);

  function goToDetail(cardItem: ICardData) {
    router.push(`/pokemon/${cardItem.name}`);
  }

  return (
    <>
      <Grid container spacing={3} sx={{ marginBottom: '20px' }}>
        {items &&
          items.length > 0 &&
          items.map((cardItem: ICardData, i: number) => {
            return (
              <>
                <Grid item xs={4} sm={3} key={i}>
                  <div
                    className="rounded bg-repeat bg-center bg-cover shadow cursor-pointer relative"
                    onMouseEnter={() => setIsOnHover(true)}
                    onMouseLeave={() => setIsOnHover(false)}
                  >
                    <div
                      className="p-5 flex flex-col relative min-h-[200px]"
                      onClick={() => goToDetail(cardItem)}
                    >
                      <div>
                        {isOnHover}
                        <h2>{cardItem.name || '-'}</h2>
                      </div>
                    </div>
                  </div>
                </Grid>
              </>
            );
          })}
      </Grid>
    </>
  );
};

export default Cards;
