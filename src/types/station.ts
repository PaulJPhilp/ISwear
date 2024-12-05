export interface Station {
title: unknown;
  name: string
  content: string
  // Add other properties your station needs
}

export interface StationProps extends Station {
roundel: IntrinsicAttributes & Props;
  stations?: Station[]; // Add stations as an optional property
}
