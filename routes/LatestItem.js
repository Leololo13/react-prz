import React from 'react';

const LatestItem = (props) => {
  let latest = localStorage.getItem('watched');
  latest = JSON.parse(latest);

  let data = props.shoes;
  return (
    <div>
      <h3></h3>
      <div>
        최근본 상품
        {latest.length > 0 && (
          <>
            {' '}
            <p>
              {' '}
              {latest}
              <img src={data[0].src} width='80%' />
            </p>{' '}
            <p>
              {' '}
              hello <img src={data[0].src} width='80%' />
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LatestItem;

//
