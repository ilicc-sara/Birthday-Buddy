import React, { useState } from "react";

const Person = (props) => {
  {
    const { name, age, image, id } = props;

    return (
      <li class="person">
        <img src={image} class="profile-photo" />
        <div class="person-info">
          <h3 class="person-name">{name}</h3>
          <h5 class="person-age">{age} years</h5>
        </div>

        <button class="delete-btn" onClick={() => props.setPeople([])}>
          X
        </button>
      </li>
    );
  }
};

export default Person;
