
import type { RoundelProps } from '~/components/widgets/Roundel.astro';

export interface StationProps {
  topic: string;
  title: string;
  description: string;
  stations: StationProps[];
  roundel: RoundelProps;
}
