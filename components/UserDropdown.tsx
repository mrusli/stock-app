'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage,} from "@/components/ui/avatar"
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown = () => {
    const router: any = useRouter();
    const handleSignOut = async () => {
        router.push("/sign-in");
    }

    const user = { name: 'Rusli', email: 'mrusli@asimetris.co.id' };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-3 text-gray-50 hover:text-yellow-500">
                <Avatar className="h-8 w-8">
                    <AvatarImage
                        src="https://media.licdn.com/dms/image/v2/C5603AQGQ5RRdd79kvg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1555562113271?e=1791417600&v=beta&t=eW7ts1JynngzIPhqk6FDPf83JR7bgmGRiU92Dib-_PM"
                        alt="@shadcn"
                        className="grayscale"
                    />
                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                        { user.name[0] }
                    </AvatarFallback>
                    <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                    { user.name }
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400 w-max px-4">
                <div className="flex relative items-center gap-3 py-2">
                    <Avatar className="h-10 w-10">
                        <AvatarImage
                            src="https://media.licdn.com/dms/image/v2/C5603AQGQ5RRdd79kvg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1555562113271?e=1791417600&v=beta&t=eW7ts1JynngzIPhqk6FDPf83JR7bgmGRiU92Dib-_PM"
                            alt="@shadcn"
                            className="grayscale"
                        />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            { user.name[0] }
                        </AvatarFallback>                        
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-400">
                            { user.name }
                        </span>
                        <span className="text-sm text-gray-500 whitespace-nowrap">
                            { user.email }
                        </span>
                    </div>                    
                </div>
                <DropdownMenuSeparator className="bg-gray-600"/>
                <DropdownMenuItem 
                    onClick={handleSignOut} 
                    className="text-gray-100 text-base font-medium 
                        focus:bg-transparent focus:text-yellow-500
                        transition-colors cursor-pointer"
                >
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block"></LogOut>
                    Log Out
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-600"/>
                <nav className="sm:hidden">
                    <NavItems />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown