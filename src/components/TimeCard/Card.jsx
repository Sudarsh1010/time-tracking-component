import React from 'react';

import './Card.css'

const Card = ({ type, data }) => {
  return (
    <div className={`card ${data.title}-background`}>
      <div className={data.title}>

      </div>

      <div className="info-contanier">
        <section className='top-container'>
          <p>{data.title}</p>
          <svg
            width="21"
            height="5"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              // fill="#BBC0FF"
              fill-rule="evenodd"
            />
          </svg>

        </section>

        <section className='bottom-container'>
          {
            type === 'daily' ? (
              <>
                <h1>{data.timeframes.daily.current}hrs</h1>
                <p>Last Day - {data.timeframes.daily.previous}hrs</p>
              </>
            ) : (
              <>
                {type === 'weekly' ? (
                  <>
                    <h1>{data.timeframes.weekly.current}hrs</h1>
                    <p>Last Week - {data.timeframes.weekly.previous}hrs</p>
                  </>
                ) : (
                  <>
                    <h1>{data.timeframes.monthly.current}hrs</h1>
                    <p>Last Month - {data.timeframes.monthly.previous}hrs</p>
                  </>
                )}
              </>
            )
          }
        </section>
      </div>
    </div>
  )
}

export default Card