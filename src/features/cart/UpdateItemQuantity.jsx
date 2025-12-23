import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuality } from "./cartSlice";

function UpdateItemQuantity({pizzaId,currentQuantity}) {
    const dispatch = useDispatch();
    return (
        <div className="flex gap-2 item-center md:gap-3 items-center">
            <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>

            <span className='text-sm font-medium'>{currentQuantity}</span>
            
            <Button type="round" onClick={()=>dispatch(increaseItemQuality(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
