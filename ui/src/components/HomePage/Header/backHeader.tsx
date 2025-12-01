import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Sidebar, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/RootLayout/AppHeader/AppHeader";
import OutletLogoSVG from "@/components/HomePage/Header/OutletLogoSVG";
import HeroCarousel from "@/components/HomePage/HeroCarousel";
import HorizontalScrollSection from "@/components/HomePage/HorizontalScrollSection";
import PopularGridSection from "@/components/HomePage/PopularGridSection";


const AppLayout = () => {
  return (
    <div className='flex min-h-dvh w-full'>
      <SidebarProvider defaultOpen={false}>
        <Sidebar>
          <SidebarHeader className="p-0 gap-0">
            {/********* Overlay for Logo to have same background as the one in the AppHeader ******/}
            <div className="flex item-center z-53 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b justify-left px-12 py-4">
               <OutletLogoSVG className="h-8"/>
            </div>
          </SidebarHeader>
        </Sidebar>
        <div className='flex flex-1 flex-col'>
          <AppHeader />
          <main className='mx-auto size-full max-w-7xl flex-1 px-2 py-0 sm:px-4'>
            {/* Main content */}
            <section className="grid grid-cols gap-10 row-start-2 col-start-1">
              <HeroCarousel />
              <HorizontalScrollSection />
              <PopularGridSection />
            </section>
          </main>
          <footer>
            <div className='text-muted-foreground mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 max-sm:flex-col sm:gap-6 sm:px-6'>
              <p className='text-sm text-balance max-sm:text-center'>
                {`©${new Date().getFullYear()}`}{' '}
                <a href='#' className='text-primary'>
                  Shadcn/studio
                </a>
                , Made for better web design
              </p>
              <div className='flex items-center gap-5'>
                <a href='#'>
                  <FacebookIcon className='size-4' />
                </a>
                <a href='#'>
                  <InstagramIcon className='size-4' />
                </a>
                <a href='#'>
                  <LinkedinIcon className='size-4' />
                </a>
                <a href='#'>
                  <TwitterIcon className='size-4' />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default AppLayout;
