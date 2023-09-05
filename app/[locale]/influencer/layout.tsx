import React, {ReactNode} from 'react';

const InfluencerLayout = ({
    children,
    params,
  }: {
    children: ReactNode;
    params: any;
  }) => {
    return (
        <div>
            This is influencer layout
            {children}
        </div>
    );
};

export default InfluencerLayout;