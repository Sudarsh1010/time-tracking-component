import React from 'react';

import './UserCard.css';
import { images } from '../../constants';

const UserCard = ({ type, setType }) => {
  return (
    <div className='user-card'>
      <section className="user">
        <div className="user-photo">
          <img src={images.jeremy} alt="" />
        </div>

        <section className='user-info'>
          <p>Report for</p>
          <h2>Jeremy Robson</h2>
        </section>
      </section>

      <div className="btns">
        <button
          className={`daily 
            ${type === 'daily'
              ? 'active-btn'
              : ''
            }
          `}
          onClick={(e) => {
            e.preventDefault();
            setType('daily');
          }}
        >
          Daily
        </button>
        <button
          className={`weekly 
            ${type === 'weekly'
              ? 'active-btn'
              : ''}
          `}
          onClick={(e) => {
            e.preventDefault();
            setType('weekly');
          }}
        >
          Weekly
        </button>
        <button
          className={`monthly 
            ${type === 'monthly'
              ? 'active-btn'
              : ''
            }
          `}
          onClick={(e) => {
            e.preventDefault();
            setType('monthly');
          }}
        >
          Monthly
        </button>
      </div>
    </div>
  )
}

export default UserCard
