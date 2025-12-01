import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Image } from "@unpic/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneForwarded } from "lucide-react";

const SlimProductCard = ({title, imgUrl, description}) => {

  return (
    <Card className='max-w-sm border-0 grid grid-cols-subgrid'>
      <CardHeader className='flex space-y-2 px-3'>
        <CardTitle className="text-xs font-bold line-clamp-1 text-shadow">{title}</CardTitle>
        <Badge className='rounded-full text-gray-600 font-bold'>
          <span >UGX</span> 38,000
        </Badge>
      </CardHeader>
      <CardContent className='p-0 mask-radial-from-[55%_92%]'>
        <Image
          src={imgUrl}
          alt={title}
          className='block h-35 w-full aspect-video object-cover'
        />
      </CardContent>
      <CardFooter className="px-3">
        <div className="grid px-0 gap-2 text-wrap line-clamp-1 ">
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
          <Button className='inline-flex text-xs font-bold text-shadow text-shadow-amber-600 gap-2 px-2'>Details<ArrowRight className='h-2 w-2 font-bold' /></Button>
          <Button variant={'outline'} className='inline-flex text-sx font-bold text-shadow text-shadow-amber-600 gap-2 px-2'>Show<PhoneForwarded className='h-2 w-2' /></Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default SlimProductCard;