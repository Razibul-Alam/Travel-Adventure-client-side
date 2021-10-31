import React, {useState } from 'react';
import { Col, Row, Toast, Button} from 'react-bootstrap';


const ToastMessage = ({toastShow,setToastShow}) => {
     
    return (
        
      <div>
        <Toast onClose={() => setToastShow(false)} show={toastShow} delay={3000} autohide>
          <h5 className="text-center text-danger">Welcome back </h5>
        </Toast>
        </div>
    
    );
};

export default ToastMessage;