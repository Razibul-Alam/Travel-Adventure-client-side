import React from 'react';
import {Toast} from 'react-bootstrap';

const ToastMessage = ({toastShow,setToastShow}) => {  
    return (  
      <div>
        <Toast onClose={() => setToastShow(false)} show={toastShow} delay={3000} autohide>
          <h5 className="text-center text-success">Booked Successfully </h5>
        </Toast>
        </div>
    );
};

export default ToastMessage;