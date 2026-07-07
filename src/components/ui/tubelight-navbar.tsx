import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();

  // Determine active item based on current URL path
  const activeItem = items.find(item => {
    if (item.url === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(item.url);
  }) || items[0];

  const activeTab = activeItem.name;

  return (
    <div
      className={cn(
        "relative z-50 w-fit",
        className
      )}
    >
      <div className="flex items-center gap-1.5 sm:gap-3 bg-white/5 border border-white/10 backdrop-blur-lg py-1.5 px-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              to={item.url}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 rounded-full transition-all duration-300",
                "text-[#e5e2e0]/70 hover:text-primary",
                isActive && "text-primary bg-white/5"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.2} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Neon Tubelight Effect */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/25 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/25 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
