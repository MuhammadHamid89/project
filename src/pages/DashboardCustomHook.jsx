import useTheme from "../Components/ToggleCustomhook_Contexttheme";
import useCounter from "../Components/Toggle_Hookcustom";
import useToggle from "../Components/Toggle_customHook";

export default function Dashboard(){
    const {theme,toggleTheme}=useTheme()
    const {count,increment,decrement,reset}=useCounter(5)
    const {value,toggle}=useToggle()

    return(
        <>
        <h2>theme: {theme}</h2>
        <button onClick={toggleTheme}> toggle theme</button>

        <h2>counter : {count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>

        <h2>{value ? 'on' : 'off'}</h2>
        <button onClick={toggle}> toggle</button>
        </>
    )
}