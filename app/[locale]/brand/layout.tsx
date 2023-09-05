import React, {ReactNode} from 'react';

const BrandLayout = ({
    children,
    params,
  }: {
    children: ReactNode;
    params: any;
  }) => {
    return (
        <div>
            This is brand layout
            {children}
        </div>
    );
};

export default BrandLayout;