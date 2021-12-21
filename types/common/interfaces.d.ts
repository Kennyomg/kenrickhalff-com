import { RefObject } from "react";
import { CloudType } from "../../constants/enums";

interface Vector {
  x: number;
  y: number;
}

interface Cloud {
  img: { url: string, alt: string};
  slug: string;
  title: string;
  type: CloudType;
  parent: Cloud | false;
  private: boolean;
  ref?: RefObject<HTMLDivElement>;
  content?: JSX.Element;
}