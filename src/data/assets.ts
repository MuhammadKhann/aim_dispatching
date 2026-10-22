// Directly import images so Vite bundles and hashes them for production (Vercel/Cloud Run)
import heroTruckImg from '../assets/images/hero_american_freight_truck_1792698292717.jpg';
import logisticsYardImg from '../assets/images/freight_logistics_yard_1792698292922.jpg';
import dispatchOfficeImg from '../assets/images/dispatch_operations_coordination_1792698293965.jpg';
import flatbedCargoImg from '../assets/images/flatbed_cargo_transport_1792698293661.jpg';

export const ASSETS = {
  heroTruck: heroTruckImg || '/images/hero_american_freight_truck_1792698292717.jpg',
  logisticsYard: logisticsYardImg || '/images/freight_logistics_yard_1792698292922.jpg',
  dispatchOffice: dispatchOfficeImg || '/images/dispatch_operations_coordination_1792698293965.jpg',
  flatbedCargo: flatbedCargoImg || '/images/flatbed_cargo_transport_1792698293661.jpg',
};
