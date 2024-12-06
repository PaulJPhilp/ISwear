import type { RoundelProps } from '~/components/widgets/Roundel.astro'

export interface Station {
  title: string
  name: string
  content: string
  description?: string
  topic?: string
  stations?: Station[]
  roundel?: RoundelProps
}

export interface StationProps extends Station {
  stations?: Station[]
}
