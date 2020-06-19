import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

function LandScape(props) {
  const [src] = useImage(props.src);
  let offsetX = (322+10) * props.index;
  return <Image x={offsetX} width={322} height={179} image={src} />;
}

export default LandScape;
