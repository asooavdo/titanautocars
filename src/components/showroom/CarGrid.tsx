import { Car } from '@/types/car';
import CarCard from './CarCard';

interface CarGridProps {
  cars: Car[];
  onViewDetails: (car: Car) => void;
}

const CarGrid = ({ cars, onViewDetails }: CarGridProps) => {
  if (cars.length === 0) {
    return (
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <p className="text-2xl font-display text-muted-foreground mb-4">
            No vehicles match your criteria
          </p>
          <p className="text-muted-foreground">
            Try adjusting your filters to see more results
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <CarCard 
            key={car.id} 
            car={car} 
            onViewDetails={onViewDetails}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default CarGrid;
