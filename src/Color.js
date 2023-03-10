import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating.js";
import { useColors } from "./color-hooks.js";

export default function Color({ id, title, color, rating }) {
    const { rateColor, removeColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={(rating) => rateColor(id, rating)}
            />
        </section>
    );
}
