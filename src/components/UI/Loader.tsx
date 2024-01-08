import { Spin } from 'antd';

const GloabalSpinner = ({
  isLoading = false,
  isFullscreen = false,
}: {
  isLoading: boolean;
  isFullscreen: boolean;
}) => {
  return <Spin spinning={isLoading} fullscreen={isFullscreen} />;
};

export default GloabalSpinner;
