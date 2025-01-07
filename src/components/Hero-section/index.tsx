import { cn } from '@/lib/utils'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import Banner from '../Banner'
// import { slide as Menu } from 'react-burger-menu'


type Props = {
    menus: Array<string>
}

const HeroSectionMenu = ({ menus }: Props) => {
  const handleUrlLink = (param: string) => {
    if (param.toLowerCase() === 'company') {
      return '#partners'
    } else if (param.toLowerCase() === 'developers') { 
      return 'https://docs.blinqpay.io/reference/introduction-1'
    } else {
      return '#aboutUs'
    }
  }
  return (
      <div className='flex justify-between items-center px-5 py-5 lg:px-20 lg:py-10'>
          <Image src="/logo/blinqpay.svg" alt="logo" width={82} height={18} />
          <NavigationMenu className='hidden lg:block'>
              <NavigationMenuList>
                  {menus.map(menu => (
                      menu.toLowerCase() === "products" ? <NavigationMenuItem key={menu} className='text-white bg-transparent  hover:bg-transparent'>
                          <NavigationMenuTrigger className='bg-transparent !hover:bg-transparent'>{menu}</NavigationMenuTrigger>
                          <NavigationMenuContent className='bg-darkBlue'>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex !bg-darkBlue h-full text-white w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="#qwid"
                  >
                   Qwid
                              </Link>
                              
                </NavigationMenuLink>
                
                          </li>
                          <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex !bg-darkBlue h-full text-white w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="#blinqCheckout"
                  >
                   Blinq Checkout
                              </Link>
                              
                </NavigationMenuLink>
                
                          </li>
                          
                          <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex !bg-darkBlue h-full text-white w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="#zap"
                  >
                   ZAP
                              </Link>
                              
                </NavigationMenuLink>
                
                          </li>
                          <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex !bg-darkBlue h-full text-white w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="#apis"
                  >
                   Apis
                              </Link>
                              
                </NavigationMenuLink>
                
                  </li>
                          
            </ul>
          </NavigationMenuContent>
                          </NavigationMenuItem>
                          : <NavigationMenuItem className={cn('text-white', {
                                  " !mr-4": menu.toLowerCase() === 'developers'
                          })} key={menu}>
                        <Link href={handleUrlLink(menu)} target={menu.toLowerCase() === 'developers' ? '_blank' : '_self'}>
                          {menu}
                        </Link>
                              </NavigationMenuItem>
                      
                  ))}
       
      </NavigationMenuList>
          </NavigationMenu>
          
      <div />
      <div className='lg:hidden'>
      <Sheet >
          <SheetTrigger>
          <Image src="/images/menu.svg" alt="menu" width={24} height={24} />

  </SheetTrigger>
          <SheetContent side="left" className="border-0 p-0 w-[100%] bg-darkBlue bg-[url('/images/bg.png')] bg-contain bg-no-repeat">
          <Banner />
    <SheetHeader>
              <SheetTitle className='text-white text-left text-base font-medium flex items-center ml-[16px] mt-14 mb-5'>
                <Image src="/images/logo.svg" alt="logo" width={18} height={18} />
                <div className='ml-2'>Menu</div></SheetTitle>
      <SheetDescription>
                <ul className='ml-[16px]'>
                  {menus.map(menu => (
                    <li key={menu}>
                      <div className='text-left text-white font-normal text-2xl mt-[16px]'>{menu}</div>
                    </li>
                  ))}
         </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>

    </div>
  )
}

export default HeroSectionMenu