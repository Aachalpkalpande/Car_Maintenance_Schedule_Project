// src/components/CarList.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarDetailsRequest } from "../redux/actions/carActions";

function CarList({setSelectedCar}) {

  const dispatch = useDispatch();


  const cars = useSelector((state) => state.car.cars);
   console.log("cars", cars)

  const carDetails = useSelector((state) => state.car.carDetails);
    console.log("car1",carDetails)


  return (
    <div>
      <h2>Cars</h2>

      <ul>
        {cars.map((c) => (
          <li key={c.id}>
            {c.model} {c.color} {c.purchase_date}
            <button onClick={() => {dispatch(fetchCarDetailsRequest(c.ownerid))}}>
              View Details
            </button>
            <button onClick={()=>setSelectedCar(c)}>
              Button
            </button>
          </li>
        ))}
      </ul>

      {carDetails && (

        <div className="card">

          <h3>{carDetails?.model} (Details)</h3>

          <p>Purchase Date: {carDetails.purchase_date}</p>

          <h4>Servicing Records:</h4>

          <ul>

            {carDetails?.Servicing.map((s) => (

              <li key={s.id}>
                {s.servicing_date} - {s.status}

                 <button onClick={()=>setSelectedCar(s)}>
                Button
              </button>
              </li>



            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CarList;
