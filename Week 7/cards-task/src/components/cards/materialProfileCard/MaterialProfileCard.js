import React from 'react';
import './MaterialProfileCard.scss';

const MaterialProfileCard = () => {
  return (
    <div className="flip-container centered">
      <div className="flipper">
        <div className="front"></div>
        <div className="back">
          <h1>Eb</h1>
          <p>Web Design & Development</p>
          <div className="font-a-icons">
            <div className="icon-group">
              <span className="bold">T: </span>
              <span className="contact">0900-78601</span>
              <div className="icon-group">
                <span className="bold">E: </span>
                <a
                  className="contact"
                  href="mailto:zainulebadd@gmail.com"
                  target="_top"
                >
                  zainulebadd@gmail.com
                </a>
              </div>
              <div className="icon-group">
                <a className="contact" href="http://www.instagram.com">
                  www.zainuleb.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialProfileCard;
