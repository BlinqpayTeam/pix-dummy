import { cn } from '@/lib/utils'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import Image from 'next/image'

type Props = {
    menus: Array<string>
}

const HeroSectionMenu = ({menus}: Props) => {
  return (
      <div className='flex justify-between items-center px-5 py-5 lg:px-20 lg:py-10'>
          <Image src="/logo/blinqpay.svg" alt="logo" width={82} height={18} />
          <NavigationMenu className='hidden lg:block'>
              <NavigationMenuList>
                  {menus.map(menu => (
                      menu.toLowerCase() === "products" ? <NavigationMenuItem key={menu} className='text-white bg-transparent  hover:bg-transparent'>
                          <NavigationMenuTrigger className='bg-transparent !hover:bg-transparent'>{menu}</NavigationMenuTrigger>
                          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                   hello
                  </a>
                </NavigationMenuLink>
              </li>
             
            </ul>
          </NavigationMenuContent>
                          </NavigationMenuItem>
                          : <NavigationMenuItem className={cn('text-white', {
                                  " !mr-4": menu.toLowerCase() === 'developers'
                              })} key={menu}>{menu}</NavigationMenuItem>
                      
                  ))}
       
      </NavigationMenuList>
          </NavigationMenu>
          
        <div/>
    </div>
  )
}

export default HeroSectionMenu