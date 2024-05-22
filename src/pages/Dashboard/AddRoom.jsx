import { useState } from "react";
import AddRoomForm from "../../components/Dashboard/AddRoomForm";

function AddRoom() {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  const handleDates = (item) => {
    console.log(item);
    setDates(item.selection);
  };
  console.log(dates);
  return (
    <div>
      <AddRoomForm dates={dates} handleDates={handleDates} />
    </div>
  );
}

export default AddRoom;
