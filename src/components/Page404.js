import React from 'react';

import '../stylesheets/page404.scss'

const Page404 = () => {
    return (
      <div className="page404-container">
        <h1 className="title-404">404</h1>
				<h2 className='subtitle-404'>OOOPS, SORRY WE CAN'T FIND THAT PAGE!</h2>
				<h3 className='subsubtitle-404'><a href="/">Go back Home</a></h3> 
      </div>
		)
  }

export default Page404;