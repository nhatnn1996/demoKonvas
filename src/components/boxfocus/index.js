import React from "react";
import { Shape } from "react-konva";

const BoxFocus = () => {
  return (
    <Shape
      sceneFunc={(ctx, shape) => {
        ctx.strokeStyle = "white";
        ctx.lineWidth = "5"
        ctx.strokeRect(102, 102, 318, 175);
      }}
    />
  );
};

export default BoxFocus;
