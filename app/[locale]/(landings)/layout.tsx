import { ReactNode } from "react";

const LandingLayout = ({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) => {
  return (
    <div>
      This is landing layout
      {children}
    </div>
  );
};

export default LandingLayout;
