import React, { useState, useEffect } from "react";

import AddCoupon from "./components/Coupon/AddCoupon";
import CouponList from "./components/Coupon/CouponList";
import useHttp from "./hooks/use-http";

import "./App.css";

function App() {
  const [coupons, setCoupons] = useState([]);
  const { isLoading, error, sendRequest: fetchCoupons } = useHttp();

  useEffect(() => {
    const transformCoupons = (couponsObj) => {
      console.log("couponsObj123=", couponsObj);
      setCoupons(couponsObj);
    };

    fetchCoupons(
      {
        url: "http://localhost:9091/couponapi/coupons",
      },
      transformCoupons
    );
  }, [fetchCoupons]);

  const couponAddHandler = (couponObj) => {
    setCoupons((prevCouponObj) => [...prevCouponObj, couponObj]);
    //console.log("coupons after=", coupons);
  };

  return (
    <React.Fragment>
      <CouponList
        items={coupons}
        loading={isLoading}
        error={error}
        onFetch={fetchCoupons}
      />
      <AddCoupon onAddCoupon={couponAddHandler} />
    </React.Fragment>
  );
}

export default App;
