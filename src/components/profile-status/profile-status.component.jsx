import React from "react";
import "./profile-status.styles.scss";
import placeholderImg from "../../assets/profile-placeholder.png";

export const ProfileStatus = ({
  status,
  name,
  timeInfo,
  img,
  statusColor,
  resize
}) => {
  const MINIMUN_BREAKPOINT = 160;

  const reachBreakpoint = resize ? resize < MINIMUN_BREAKPOINT : false;
  const conexionInHours = `${timeInfo}h`;

  const imgProfile = img || placeholderImg;

  const avatarClass = reachBreakpoint ? "profile-status--no-picture" : "";
  const pictureSpace = reachBreakpoint ? "profile-status--picture-space" : "";
  const circleStatusClass = reachBreakpoint
    ? "profile-status--circle-profile"
    : "";

  return (
    <div className="profile-status__wrapper">
      <div className={`profile-status__picture ${pictureSpace}`}>
        <div className={`profile-status__picture-crop ${avatarClass}`}>
          <img src={imgProfile} alt={name} />
        </div>

        <div
          className={`profile-status__color-status ${circleStatusClass}`}
          style={statusColor}
        ></div>
      </div>
      <div className="profile-status__information">
        <div className="profile-status__name">{name}</div>
        <div className="profile-status__status-details">
          <div className="profile-status__status-label">{status}</div>
          <div className="profile-status__divider"></div>
          <div className="profile-status__status-time">{conexionInHours}</div>
        </div>
      </div>
    </div>
  );
};
