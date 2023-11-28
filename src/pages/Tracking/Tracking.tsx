import { useRef } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer
  // Autocomplete, DirectionsRenderer
} from "@react-google-maps/api";

import { useState } from "react";
import PurchaseSummary from "../../components/ui/organismos/PurchaseSummary/PurchaseSummary";
import { purchaseListTestData } from "../Checkout/TestData";

const Tracking = () => {
  const center = { lat: -12.084142196725567, lng: -76.9704611988532 };

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAZSCrn2s6_EXA-TJ3r8UVgT4xPNGCA5QI",
    libraries: ["places"]
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  return (
    <div className="flex items-center justify-center h-screen bg-[#C0EAE6]">
      <div className="flex bg-white rounded-lg overflow-hidden w-3/4 h-3/4">
        {/* Left side with a map */}
        <div className="w-2/3 h-full">
          {/* Your map component goes here */}
          <div className="bg-gray-100 h-full rounded-l-lg">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "600px" }}
                center={center}
                zoom={15}
                options={{
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false
                }}>
                <Marker position={center} />
                {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />
                )}
              </GoogleMap>
            ) : (
              <div>Loading Google Maps...</div>
            )}
          </div>
        </div>

        {/* Right side with data */}
        <div className="w-1/3 flex flex-col">
          {/* Top part with green background */}
          <div className="bg-green-500 p-4 h-1/2 text-white">
            <h2 className="text-xl font-bold mb-2">Información de la Orden</h2>
            {/* Add your additional information here */}
            <p>Order #: XYZ123</p>
            <p>Estimated Time: 30 mins</p>
          </div>

          {/* Bottom part with white background */}
          <div className="bg-white p-4 rounded-b-lg h-1/2">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Order Information</h2>
              {/* Add more order-related information here */}
            </div>
            <PurchaseSummary purchases={purchaseListTestData} />
            {/* Another component goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
