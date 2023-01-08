import React from "react";
import Coupon from "./Coupon";

const CouponList = (props) => {
  let coupons = <h2>No Coupon found. Start adding some!</h2>;
  //console.log("items=" + props.items);
  console.log("items Length=" + props.items.length);
  if (props.items.length > 0) {
    coupons = (
      <ul>
        {props.items.map((coupon) => (
          <Coupon key={coupon.id}>
            {coupon.code} - {coupon.discount} - {coupon.expDate}
          </Coupon>
        ))}
      </ul>
    );
  }

  let content = coupons;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = "Loading Coupons...";
  }

  return (
    <React.Fragment>
      <div className="">{content}</div>
    </React.Fragment>
  );
};

export default CouponList;
