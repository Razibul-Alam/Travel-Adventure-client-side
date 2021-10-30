import React from 'react';
import AboutMain from '../About-Page/AboutMain';
import AllAdventures from '../All-adventures/AllAdventures';
import Banner from '../Banner-Page/Banner';
import AllFeedBack from '../Feedback-Page/AllFeedBack';

const HomeMain = () => {
    return (
        <div>
          <Banner/>
          <AllAdventures/> 
          <AboutMain/>
          <AllFeedBack/>
        </div>
    );
};

export default HomeMain;