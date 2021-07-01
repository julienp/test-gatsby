import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function Chicken() {
  return (
    <StaticImage
      src="../images/chicken.jpg"
      alt="A Silky Chicken"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
    />
  );
}
