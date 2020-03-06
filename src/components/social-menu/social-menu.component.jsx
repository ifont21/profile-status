import React, { Component } from "react";
import { ProfileStatus } from "../profile-status/profile-status.component";
import "./social-menu.styles.scss";

const profiles = [
  {
    id: 1,
    name: "Doctor Strange",
    status: "Online",
    conexionTime: 12,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png"
  },
  {
    id: 2,
    name: "Tony Stark",
    status: "Online",
    conexionTime: 5,
    img:
      "https://www.cheatsheet.com/wp-content/uploads/2020/03/Robert-Downey-Jr-640x433.jpg"
  },
  {
    id: 3,
    name: "Spiderman",
    status: "Away",
    conexionTime: 10,
    img:
      "https://vignette.wikia.nocookie.net/spiderman/images/b/bd/Tom_Holland.png/revision/latest?cb=20190627210635&path-prefix=es"
  },
  {
    id: 4,
    name: "Star Lord",
    status: "Offline",
    conexionTime: 24,
    img: ""
  }
];

export class SocialMenu extends Component {
  constructor() {
    super();

    this.state = {
      profiles: [],
      reziseValues: {
        width: 0
      }
    };
  }

  updateDimensions = () => {
    this.setState({ reziseValues: { width: window.innerWidth } });
  };

  componentDidMount() {
    this.setState({ profiles });
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  getColorStatus = status => {
    switch (status) {
      case "Online":
        return () => ({
          background: "green"
        });

      case "Away":
        return () => ({
          background: "orange"
        });

      case "Offline":
        return () => ({
          background: "gray"
        });
    }
  };

  render() {
    const currentSize = this.state.reziseValues.width;

    return (
      <div className="social-menu__wrapper">
        {this.state.profiles.map(profile => {
          const renderColorStatus = this.getColorStatus(profile.status);
          return (
            <ProfileStatus
              key={profile.id}
              name={profile.name}
              status={profile.status}
              timeInfo={profile.conexionTime}
              img={profile.img}
              statusColor={renderColorStatus()}
              resize={currentSize}
            />
          );
        })}
      </div>
    );
  }
}
