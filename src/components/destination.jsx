import PropTypes from 'prop-types';

const destinations = [
  {
    id: 1,
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=200&h=150&fit=crop",
    description: "Tropical paradise with beautiful beaches and vibrant culture",
    price: "$1,200"
  },
  {
    id: 2,
    name: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=200&h=150&fit=crop",
    description: "City of love, art, and exquisite cuisine",
    price: "$1,500"
  },
  {
    id: 3,
    name: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=200&h=150&fit=crop",
    description: "Stunning sunsets and white-washed architecture",
    price: "$1,800"
  },
  {
    id: 4,
    name: "Tokyo",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=200&h=150&fit=crop",
    description: "Modern city with rich traditions and amazing food",
    price: "$2,000"
  }
];

function DestinationCard({ destination }) {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} className="card-image" />
      <div className="card-content">
        <h2>{destination.name}</h2>
        <h4>{destination.location}</h4>
        <p>{destination.description}</p>
        <p className="price">{destination.price}</p>
      </div>
    </div>
  );
}

DestinationCard.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired
};

function DestinationContainer() {
  return (
    <div className="container">
      {destinations.map((dest) => (
        <DestinationCard key={dest.id} destination={dest} />
      ))}
    </div>
  );
}

export default DestinationContainer;
