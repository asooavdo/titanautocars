import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ShowroomFilters from '@/components/showroom/ShowroomFilters';
import CarGrid from '@/components/showroom/CarGrid';
import CarDetailsModal from '@/components/showroom/CarDetailsModal';
import FinancingCalculator from '@/components/showroom/FinancingCalculator';
import { Car } from '@/types/car';

const carsData: Car[] = [
  {
    id: '1',
    name: 'Mercedes-Benz S-Class',
    brand: 'Mercedes-Benz',
    type: 'Sedan',
    year: 2024,
    price: 450000,
    mileage: 0,
    engine: '3.0L I6 Turbo',
    horsepower: 429,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    color: 'Obsidian Black',
    interiorColor: 'Macchiato Beige',
    features: ['Burmester Sound', 'Panoramic Roof', 'Night Vision', 'Air Suspension', 'Massage Seats'],
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800',
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=800',
    ],
    description: 'The epitome of luxury sedans with cutting-edge technology and unmatched comfort.',
  },
  {
    id: '2',
    name: 'BMW X7 M60i',
    brand: 'BMW',
    type: 'SUV',
    year: 2024,
    price: 380000,
    mileage: 0,
    engine: '4.4L V8 Twin-Turbo',
    horsepower: 523,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    color: 'Mineral White',
    interiorColor: 'Cognac',
    features: ['M Sport Package', 'Sky Lounge Roof', 'Bowers & Wilkins Audio', 'Gesture Control', 'Executive Seating'],
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
      'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    ],
    description: 'Ultimate driving luxury meets spacious SUV versatility in the flagship X7.',
  },
  {
    id: '3',
    name: 'Porsche 911 Turbo S',
    brand: 'Porsche',
    type: 'Sports',
    year: 2024,
    price: 890000,
    mileage: 0,
    engine: '3.8L Flat-6 Twin-Turbo',
    horsepower: 640,
    transmission: 'PDK',
    fuelType: 'Petrol',
    color: 'GT Silver',
    interiorColor: 'Black',
    features: ['Sport Chrono Package', 'PCCB Brakes', 'Rear Axle Steering', 'Burmester Audio', 'Sport Exhaust'],
    images: [
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
    ],
    description: 'The benchmark for sports car performance with everyday usability.',
  },
  {
    id: '4',
    name: 'Range Rover Autobiography',
    brand: 'Land Rover',
    type: 'SUV',
    year: 2024,
    price: 520000,
    mileage: 0,
    engine: '4.4L V8 Twin-Turbo',
    horsepower: 523,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    color: 'Carpathian Grey',
    interiorColor: 'Vintage Tan',
    features: ['Executive Class Seating', 'Meridian Signature Sound', 'Pixel LED Headlights', 'All-Terrain Response', 'Hot Stone Massage'],
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
      'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=800',
      'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?w=800',
    ],
    description: 'The pinnacle of refined capability and luxurious comfort.',
  },
  {
    id: '5',
    name: 'Audi RS e-tron GT',
    brand: 'Audi',
    type: 'Sports',
    year: 2024,
    price: 650000,
    mileage: 0,
    engine: 'Dual Electric Motors',
    horsepower: 637,
    transmission: '2-Speed Auto',
    fuelType: 'Electric',
    color: 'Daytona Grey',
    interiorColor: 'Black Valcona',
    features: ['Matrix LED Headlights', 'Bang & Olufsen 3D Sound', 'Air Suspension', 'Carbon Fiber Roof', 'Virtual Cockpit'],
    images: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800',
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800',
    ],
    description: 'Electric performance meets Audi craftsmanship in this stunning GT.',
  },
  {
    id: '6',
    name: 'Bentley Continental GT',
    brand: 'Bentley',
    type: 'Coupe',
    year: 2024,
    price: 980000,
    mileage: 0,
    engine: '6.0L W12 Twin-Turbo',
    horsepower: 650,
    transmission: '8-Speed DCT',
    fuelType: 'Petrol',
    color: 'Beluga Black',
    interiorColor: 'Linen',
    features: ['Naim Audio System', 'Rotating Display', 'Diamond Knurling', 'Mulliner Driving Spec', 'Night Vision'],
    images: [
      'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    ],
    description: 'Grand touring perfection with handcrafted British luxury.',
  },
  {
    id: '7',
    name: 'Lamborghini Urus',
    brand: 'Lamborghini',
    type: 'SUV',
    year: 2024,
    price: 1200000,
    mileage: 0,
    engine: '4.0L V8 Twin-Turbo',
    horsepower: 657,
    transmission: '8-Speed Auto',
    fuelType: 'Petrol',
    color: 'Verde Mantis',
    interiorColor: 'Nero Ade',
    features: ['Akrapovic Exhaust', 'Carbon Ceramic Brakes', 'Rear Seat Entertainment', 'Bang & Olufsen Audio', 'ANIMA Selector'],
    images: [
      'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    ],
    description: 'Super SUV performance with unmistakable Lamborghini DNA.',
  },
  {
    id: '8',
    name: 'Ferrari Roma',
    brand: 'Ferrari',
    type: 'Coupe',
    year: 2024,
    price: 1100000,
    mileage: 0,
    engine: '3.9L V8 Twin-Turbo',
    horsepower: 612,
    transmission: '8-Speed DCT',
    fuelType: 'Petrol',
    color: 'Rosso Corsa',
    interiorColor: 'Cuoio',
    features: ['Manettino Dial', 'Carbon Fiber Package', 'JBL Premium Audio', 'Adaptive Headlights', 'Racing Seats'],
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
      'https://images.unsplash.com/photo-1592198084033-aade902d1f43?w=800',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
    ],
    description: 'La Nuova Dolce Vita - elegant grand touring with Ferrari soul.',
  },
];

const brands = ['All', 'Mercedes-Benz', 'BMW', 'Porsche', 'Land Rover', 'Audi', 'Bentley', 'Lamborghini', 'Ferrari'];
const types = ['All', 'Sedan', 'SUV', 'Sports', 'Coupe'];

const VirtualShowroom = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1500000]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCars = carsData.filter((car) => {
    const matchesBrand = selectedBrand === 'All' || car.brand === selectedBrand;
    const matchesType = selectedType === 'All' || car.type === selectedType;
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
    return matchesBrand && matchesType && matchesPrice;
  });

  const handleViewDetails = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-titan">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Virtual <span className="text-gradient-gold">Showroom</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our exclusive collection of zero-kilometer luxury vehicles. 
              Experience 360° views and detailed specifications of each masterpiece.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <ShowroomFilters
        brands={brands}
        types={types}
        selectedBrand={selectedBrand}
        selectedType={selectedType}
        priceRange={priceRange}
        onBrandChange={setSelectedBrand}
        onTypeChange={setSelectedType}
        onPriceChange={setPriceRange}
      />

      {/* Results Count */}
      <div className="container mx-auto px-4 py-4">
        <p className="text-muted-foreground">
          Showing <span className="text-titan-gold font-semibold">{filteredCars.length}</span> vehicles
        </p>
      </div>

      {/* Car Grid */}
      <CarGrid cars={filteredCars} onViewDetails={handleViewDetails} />

      {/* Financing Calculator */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Flexible <span className="text-gradient-gold">Financing</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Make your dream car a reality with our competitive financing options. 
                Use our calculator to estimate your monthly payments.
              </p>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-titan-gold" />
                  Competitive interest rates from 2% APR
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-titan-gold" />
                  Flexible loan terms up to 84 months
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-titan-gold" />
                  Quick approval within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-titan-gold" />
                  No hidden fees or charges
                </li>
              </ul>
            </div>
            <FinancingCalculator />
          </div>
        </div>
      </section>

      {/* Car Details Modal */}
      <CarDetailsModal 
        car={selectedCar} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default VirtualShowroom;
