import React from "react";
import { Group } from "react-konva";
import LandScape from "../landscape/index";

function Ribbon(props) {
  return (
    <Group sceneFunc={(context, shape)=> {
      console.log(context);
      console.log(shape);
    }}>
      {props.movies.map((item, i) => (
        <LandScape src={item.src} key={"id"+ item.id + i} index={i} />
      ))}
    </Group>
  );
}

export default Ribbon;
