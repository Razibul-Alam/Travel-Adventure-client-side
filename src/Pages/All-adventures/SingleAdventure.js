import React from 'react';

const SingleAdventure = ({adventure}) => {
    const{_id,img,title,descripton}=adventure;
    return (
        <div>
          <img src={img} alt=""/>  
          <h3>{title}</h3>
          <p>{descripton}</p>
        </div>
    );
};

export default SingleAdventure;