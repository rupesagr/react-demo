import React, { useRef } from "react";
import "./CouponForm.module.css";

const isEmpty = (value) => value.trim() === "";

const CouponForm = (props) => {
  const codeInputRef = useRef();
  const discountInputRef = useRef();
  const expiryDateInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredCode = codeInputRef.current.value;
    const enteredDiscount = discountInputRef.current.value;
    const enteredExpiryDate = expiryDateInputRef.current.value;

    const enteredCodeIsValid = !isEmpty(enteredCode);

    console.log("enteredCode=" + enteredCode);
    console.log("enteredDiscount=" + enteredDiscount);
    console.log("enteredExpiryDate=" + enteredExpiryDate);
    console.log("enteredCodeIsValid=" + enteredCodeIsValid);
    if (enteredCodeIsValid) {
      props.onEnterCoupon({
        code: enteredCode,
        discount: enteredDiscount,
        expDate: enteredExpiryDate,
      });
    }
  };

  return (
    <form className="" onSubmit={submitHandler}>
      <div className="">
        <label htmlFor="code">Code</label>
        <input type="text" id="code" ref={codeInputRef} />
      </div>
      <div className="">
        <label htmlFor="discount">Discount</label>
        <input type="text" id="discount" ref={discountInputRef} />
      </div>
      <div className="">
        <label htmlFor="expiryDate">Expiry Date</label>
        <input type="text" id="expiryDate" ref={expiryDateInputRef} />
      </div>
      <div className="">
        <button>{props.loading ? "Sending..." : "Add Coupon"}</button>
      </div>
    </form>
  );
};

export default CouponForm;
