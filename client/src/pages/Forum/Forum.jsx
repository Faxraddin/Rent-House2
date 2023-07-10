import React,{useState} from "react";
import ForumBox from "../../components/ForumBox";

export default function Forum() {
  const [filter, setFilter] = useState('');
  const [filteredComponents, setFilteredComponents] = useState([]);
  const [roomFilter, setRoomFilter] = useState('');

  const components = [
    { id: 1, name: 'Component 1', price: 100,rooms:1 },
    { id: 2, name: 'Component 2', price: 300,rooms:2  },
    { id: 3, name: 'Component 3', price: 600,rooms:2  },
    { id: 4, name: 'Component 4', price: 200,rooms:4  },
    // ... more component data
  ];

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const handleRoomFilterChange = (event) => {
    const { value } = event.target;
    setRoomFilter(value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();

    if (!filter) {
      setFilteredComponents([]); // Reset filtered components if filter is empty
      return;
    }

    const [minPrice, maxPrice] = filter.split('-').map(Number)
    console.log(maxPrice,maxPrice)

    // Filter the components based on the price range
    const filtered = components.filter(
      (component) =>
        component.price >= minPrice && component.price <= maxPrice &&
        (roomFilter === '' || component.rooms === parseFloat(roomFilter))
    );
    setFilteredComponents(filtered);
  };

  return (
    <>
      <div className="container1">
        <div className="con">
          <div className="filters">
            <h3>Filters</h3>
            <form onSubmit={handleFilterSubmit}  className="filters-con">

              <div className="fil">
                <span>Qiymet:</span>
                <input 
                type="text"
                name="priceFilter"
                placeholder="Enter price range (e.g., 0-500)"
                value={filter}
                onChange={handleFilterChange}
                className="qiy"/>
              </div>

              <div className="fil">
                <span>Otaq sayi:</span>
                <input
                  type="text"
                  name="roomFilter"
                  placeholder="Enter number of rooms"
                  value={roomFilter}
                  onChange={handleRoomFilterChange}
                  className="room-filter"
                />
              </div>

              <div className="fil">
                <span>Unvan:</span>
                <span className="qiy">yaz</span>
              </div>

              <button type="submit">Submit</button>
            </form>
            
          </div>
          
          <div className="boxes">
            {filteredComponents.length > 0 ? (
              filteredComponents.map((component) => (
                <ForumBox key={component.id} price={component.price} rooms = {component.rooms}/>
              ))
            ) : (
              <p>
                {filter ? 'No components found for the specified price range.' : 'Enter a price range to filter components.'}
              </p>
            )}
          </div>

        </div>
      </div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "1vw",
          justifyContent: "center",
        }}
      >
        <li
          style={{
            display: "flex",
            color: "white",
            backgroundColor: "black",
            width: "2.5vw",
            height: "2.5vw",
            borderRadius: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          1
        </li>
        <li
          style={{
            display: "flex",
            color: "white",
            backgroundColor: "grey",
            width: "2.5vw",
            height: "2.5vw",
            borderRadius: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          2
        </li>
        <li
          style={{
            display: "flex",
            color: "white",
            backgroundColor: "grey",
            width: "2.5vw",
            height: "2.5vw",
            borderRadius: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          3
        </li>
        <li
          style={{
            display: "flex",
            color: "white",
            backgroundColor: "grey",
            width: "2.5vw",
            height: "2.5vw",
            borderRadius: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          4
        </li>
        <li
          style={{
            display: "flex",
            color: "white",
            backgroundColor: "grey",
            width: "2.5vw",
            height: "2.5vw",
            borderRadius: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          5
        </li>
      </ul>
    </>
  );
}
