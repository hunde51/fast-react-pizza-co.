import { Link } from "react-router-dom"
import LinkButton from "./LinkButton"

function Button({ children, disabled, to }) {
    const className = "bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2   disabled:curser-not-allowed sm:px-6 sm:py-4";

    if (to) return <Link to={to} className={className}>{children}</Link>
    
    return (
        <div disabled={disabled}  className={className}>
            {children}
        </div>
    )
}

export default Button
