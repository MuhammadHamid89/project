import { useContext } from "react";
import { ThemeContext } from "./Toggle_customHookContex";

export default function useTheme(){
    return useContext(ThemeContext) // consume usetheme jo phly banaya tha
}