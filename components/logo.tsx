import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * UAT logo. The source PNG is a blue wordmark on transparent, so on dark/blue
 * bands (variant="light") we render it white via a brightness/invert filter.
 */
export default function Logo({
  variant = "dark",
  className,
  priority = false,
}: {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/UAT.png"
      alt="UAT — Universal Air Technologies · Cleaning Air, Saving Lives"
      width={234}
      height={100}
      priority={priority}
      className={cn("h-10 w-auto", variant === "light" && "brightness-0 invert", className)}
    />
  );
}
