import React from "react";
import CouponForm from "./CouponForm";
import Section from "../../UI/Section";
import useHttp from "../../hooks/use-http";

const AddCoupon = (props) => {
  const { isLoading, error, sendRequest: sendAddCouponRequest } = useHttp();

  const createCoupon = (couponJSON, responseData) => {
    console.log("createCoupon > couponJSON=", couponJSON);
    console.log("createCoupon > responseData=", responseData);
    // const generatedId = taskData.name;
    // const createdCoupon = { id: generatedId, text: taskText };

    props.onAddCoupon(responseData);
  };

  const enterCouponHandler = async (couponData) => {
    sendAddCouponRequest(
      {
        url: "http://localhost:9091/couponapi/coupons",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: couponData,
      },
      createCoupon.bind(null, couponData)
    );
  };

  return (
    <Section>
      <CouponForm onEnterCoupon={enterCouponHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default AddCoupon;
