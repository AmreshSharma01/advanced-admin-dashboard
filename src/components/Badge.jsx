import React from "react";
import SvgIcons from "../icons/SvgIcons";
// const iconStyle = 'h-4 rounded bg-pink-600 text-white px-1'

const Badge = ({ number }) => {
  return (
    <span className="m-0.5 flex items-center h-4 rounded bg-pink-600 text-white px-1 ">
      <SvgIcons icon="TrelloBadgeIcon" />
      {number}
    </span>
  );
};

export default Badge;
