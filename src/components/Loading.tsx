import React from 'react';
import Lottie from 'lottie-react';
import '../styles/layout.scss';
import LoadingAnimation from '../assets/animations/loading.json';

interface IProps {
  loadingTitle?: string;
}

const Loader = ({ loadingTitle }: IProps) => {
  return (
    <div className="centeredScreenWrapper">
      <div className="contentWrapper">
        <div className="loadingAnimation">
          <Lottie animationData={LoadingAnimation} />
          {loadingTitle && <p>{loadingTitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default Loader;
