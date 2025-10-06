import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility function to conditionally join class names together.
 * It uses `clsx` to handle conditional classes and `tailwind-merge`
 * to resolve conflicting Tailwind CSS classes.
 * 
 * @param inputs - A list of class values to merge.
 * @returns A string of merged, conflict-free class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}