import "./HalfPage.scss";
export default function halfPage({ className, text }) {
    return (
        <div className={`side-${className}`}>
            <span className="text">{text}</span>
        </div>
    )
}
