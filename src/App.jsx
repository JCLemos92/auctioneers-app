import CarCard from "./components/CarCard.jsx";

// import './App.css'

function App() {
  let myCar = {
    make: "Toyota",
    model: "C-HR",
    engineSize: "1.8L",
    fuel: "diesel",
    year: 2022,
    mileage: 743,
    auctionDateTime: "2024/04/15 09:00:00",
    startingBid: 17000,
    favourite: true,
  };
  const handleFavouriteToggle = (car, isFavourite) => {
    console.log(`Car: ${car.make} ${car.model}, Favourite: ${isFavourite}`);
  };

  return (
    <>
      <CarCard car={myCar} onFavouriteToggle={handleFavouriteToggle} />
    </>
  );
}

export default App;
