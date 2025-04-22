import React from "react";

const Person = (props) => {
  {
    const { name, age, image } = props;

    return (
      <li class="person">
        <img src={image} class="profile-photo" />

        <div class="person-info">
          <h3 class="person-name">{name}</h3>
          <h5 class="person-age">{age}</h5>
        </div>
      </li>
    );
  }
};

export default Person;
