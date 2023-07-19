"use client";
// import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slice/cartSlice";
import toast from "react-hot-toast";

const AddToCart = () => {
  // const dispatch = useDispatch();
  const addItem = () => {
    // dispatch(cartActions.addToCart({ product: {}, quantity: 1 }));
    toast.success("Product Added In Your Cart");
  };
  return (
    <>
      <button onClick={addItem}
        className="text-center tracking-wider p-[10px] transition-all hover:bg-[#212121] hover:text-white text-[1rem] rounded-xl hover:rounded-3xl hover:shadow-[#a19996] shadow-lg hover:shadow-2xl w-full"
        type="button">
        <a href="/cart">Add to Cart</a>
      </button>
    </>
  );
};
export default AddToCart;
