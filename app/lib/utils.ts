import {clsx, type ClassValue} from "clsx";
import { twMerge } from "tailwind-merge";

//Pomocnicza funkcja do czytelniejszego łączenia klas stylów
//szczególnie przy stylach zależnych od propsów/warunków

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

