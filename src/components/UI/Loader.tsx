import { Spin } from 'antd';

const GlobalSpinner = ({
  isLoading = false,
  isFullscreen = false,
}: {
  isLoading: boolean;
  isFullscreen?: boolean;
}) => {
  return <Spin spinning={isLoading} fullscreen={isFullscreen} />;
};

export default GlobalSpinner;
