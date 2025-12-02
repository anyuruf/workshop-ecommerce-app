import { PauseIcon, PlayIcon, ChevronRight, ChevronLeft } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface Props {
  isPlaying: boolean
  play: () => void
  pause: () => void
  scrollPrev: () => void
  scrollNext: () => void
  className: string
  canScrollNext: boolean
  canScrollPrev: boolean
}
const ButtonGroup = (props:Props) => {
  const { isPlaying, play, pause, scrollPrev, scrollNext, canScrollPrev, canScrollNext, className} = props;

  return (
    <>
    {/******** Enable absolute positioning to mimic the CarouselPrev/Next components **************/}
    <div
      className={cn('absolute divide-primary-foreground/30 inline-flex w-fit divide-x rounded-md shadow-xs', className)}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={scrollPrev} type="button" className='rounded-none rounded-l-full focus-visible:z-10' disabled={canScrollPrev}>
            <ChevronLeft />
            <span className='sr-only'>Scroll left</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className='px-2 py-1 text-xs'>Scroll Left</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={scrollNext} type="button" className='rounded-none focus-visible:z-10' disabled={canScrollNext}>
            <ChevronRight />
            <span className='sr-only'>Scroll Right</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className='px-2 py-1 text-xs'>Scroll right</TooltipContent>
      </Tooltip>

      {isPlaying?
        (<Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={play} type="button" className='rounded-none focus-visible:z-10'>
              <PauseIcon />
              <span className='sr-only'>Pause</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent className='px-2 py-1 text-xs'>Pause</TooltipContent>
        </Tooltip> ):
        (<Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={pause} type="button" className='rounded-none rounded-r-full focus-visible:z-10'>
              <PlayIcon />
              <span className='sr-only'>Play Slides</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent className='px-2 py-1 text-xs'>Play Slides</TooltipContent>
        </Tooltip>)}
    </div>
    </>
  )
}

export default ButtonGroup;
