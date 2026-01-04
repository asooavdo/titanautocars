import { useState } from 'react';
import { 
  Plus, Edit2, Trash2, Save, X, Car, Image, Search, 
  LayoutGrid, List, AlertCircle
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Car as CarType } from '@/types/car';

const initialCars: CarType[] = [
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
    features: ['Burmester Sound', 'Panoramic Roof', 'Night Vision'],
    images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'],
    description: 'The epitome of luxury sedans.',
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
    features: ['M Sport Package', 'Sky Lounge Roof'],
    images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800'],
    description: 'Ultimate driving luxury.',
  },
];

const brands = ['Mercedes-Benz', 'BMW', 'Porsche', 'Land Rover', 'Audi', 'Bentley', 'Lamborghini', 'Ferrari', 'Rolls-Royce'];
const types = ['Sedan', 'SUV', 'Sports', 'Coupe', 'Convertible'];
const fuelTypes = ['Petrol', 'Hybrid', 'Electric', 'Diesel'];
const transmissions = ['Automatic', 'Manual', 'PDK', 'DCT'];

const emptyCarForm: Partial<CarType> = {
  name: '',
  brand: '',
  type: '',
  year: 2024,
  price: 0,
  mileage: 0,
  engine: '',
  horsepower: 0,
  transmission: '',
  fuelType: '',
  color: '',
  interiorColor: '',
  features: [],
  images: [],
  description: '',
};

const Admin = () => {
  const { toast } = useToast();
  const [cars, setCars] = useState<CarType[]>(initialCars);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingCar, setEditingCar] = useState<CarType | null>(null);
  const [carToDelete, setCarToDelete] = useState<CarType | null>(null);
  const [formData, setFormData] = useState<Partial<CarType>>(emptyCarForm);
  const [featureInput, setFeatureInput] = useState('');
  const [imageInput, setImageInput] = useState('');

  const filteredCars = cars.filter(car => 
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNew = () => {
    setEditingCar(null);
    setFormData(emptyCarForm);
    setIsModalOpen(true);
  };

  const handleEdit = (car: CarType) => {
    setEditingCar(car);
    setFormData({ ...car });
    setIsModalOpen(true);
  };

  const handleDelete = (car: CarType) => {
    setCarToDelete(car);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (carToDelete) {
      setCars(cars.filter(c => c.id !== carToDelete.id));
      toast({
        title: 'Vehicle Deleted',
        description: `${carToDelete.name} has been removed from inventory.`,
      });
      setIsDeleteModalOpen(false);
      setCarToDelete(null);
    }
  };

  const handleSave = () => {
    if (!formData.name || !formData.brand || !formData.price) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    if (editingCar) {
      setCars(cars.map(c => c.id === editingCar.id ? { ...formData, id: editingCar.id } as CarType : c));
      toast({
        title: 'Vehicle Updated',
        description: `${formData.name} has been updated successfully.`,
      });
    } else {
      const newCar: CarType = {
        ...formData,
        id: Date.now().toString(),
      } as CarType;
      setCars([...cars, newCar]);
      toast({
        title: 'Vehicle Added',
        description: `${formData.name} has been added to inventory.`,
      });
    }
    setIsModalOpen(false);
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setFormData({
        ...formData,
        features: [...(formData.features || []), featureInput.trim()],
      });
      setFeatureInput('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features?.filter((_, i) => i !== index),
    });
  };

  const addImage = () => {
    if (imageInput.trim()) {
      setFormData({
        ...formData,
        images: [...(formData.images || []), imageInput.trim()],
      });
      setImageInput('');
    }
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images?.filter((_, i) => i !== index),
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-8 gradient-titan">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Admin <span className="text-gradient-red">Panel</span>
              </h1>
              <p className="text-muted-foreground">Manage your vehicle inventory</p>
            </div>
            <Button variant="titan" onClick={handleAddNew}>
              <Plus className="w-5 h-5 mr-2" />
              Add Vehicle
            </Button>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-6 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card border-border/50"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'titan' : 'titanOutline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <LayoutGrid className="w-5 h-5" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'titan' : 'titanOutline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-6">
            {filteredCars.length} vehicle{filteredCars.length !== 1 ? 's' : ''} in inventory
          </p>

          {viewMode === 'list' ? (
            <div className="space-y-3">
              {filteredCars.map((car) => (
                <div 
                  key={car.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-titan-gold/30 transition-colors"
                >
                  <img 
                    src={car.images[0]} 
                    alt={car.name}
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{car.name}</h3>
                    <p className="text-sm text-muted-foreground">{car.brand} • {car.type} • {car.year}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-semibold text-titan-gold">{formatCurrency(car.price)}</p>
                    <p className="text-xs text-muted-foreground">{car.mileage} km</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="titanOutline" size="icon" onClick={() => handleEdit(car)}>
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => handleDelete(car)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <div 
                  key={car.id}
                  className="rounded-2xl bg-card border border-border/50 overflow-hidden hover:border-titan-gold/30 transition-colors"
                >
                  <img 
                    src={car.images[0]} 
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">{car.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{car.brand} • {car.year}</p>
                    <p className="font-display font-bold text-titan-gold mb-4">{formatCurrency(car.price)}</p>
                    <div className="flex gap-2">
                      <Button variant="titanOutline" className="flex-1" onClick={() => handleEdit(car)}>
                        <Edit2 className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete(car)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Add/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-xl flex items-center gap-2">
              <Car className="w-5 h-5 text-titan-gold" />
              {editingCar ? 'Edit Vehicle' : 'Add New Vehicle'}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Vehicle Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Mercedes-Benz S-Class"
                className="bg-card border-border/50"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Brand *</label>
              <Select value={formData.brand} onValueChange={(v) => setFormData({ ...formData, brand: v })}>
                <SelectTrigger className="bg-card border-border/50">
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Type</label>
              <Select value={formData.type} onValueChange={(v) => setFormData({ ...formData, type: v })}>
                <SelectTrigger className="bg-card border-border/50">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Year</label>
              <Input
                type="number"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
                className="bg-card border-border/50"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Price (AED) *</label>
              <Input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className="bg-card border-border/50"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Mileage (km)</label>
              <Input
                type="number"
                value={formData.mileage}
                onChange={(e) => setFormData({ ...formData, mileage: Number(e.target.value) })}
                className="bg-card border-border/50"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Engine</label>
              <Input
                value={formData.engine}
                onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
                placeholder="e.g. 3.0L V6 Turbo"
                className="bg-card border-border/50"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Horsepower</label>
              <Input
                type="number"
                value={formData.horsepower}
                onChange={(e) => setFormData({ ...formData, horsepower: Number(e.target.value) })}
                className="bg-card border-border/50"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Transmission</label>
              <Select value={formData.transmission} onValueChange={(v) => setFormData({ ...formData, transmission: v })}>
                <SelectTrigger className="bg-card border-border/50">
                  <SelectValue placeholder="Select transmission" />
                </SelectTrigger>
                <SelectContent>
                  {transmissions.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Fuel Type</label>
              <Select value={formData.fuelType} onValueChange={(v) => setFormData({ ...formData, fuelType: v })}>
                <SelectTrigger className="bg-card border-border/50">
                  <SelectValue placeholder="Select fuel type" />
                </SelectTrigger>
                <SelectContent>
                  {fuelTypes.map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Exterior Color</label>
              <Input
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                placeholder="e.g. Obsidian Black"
                className="bg-card border-border/50"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Interior Color</label>
              <Input
                value={formData.interiorColor}
                onChange={(e) => setFormData({ ...formData, interiorColor: e.target.value })}
                placeholder="e.g. Cognac Leather"
                className="bg-card border-border/50"
              />
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <label className="text-sm text-muted-foreground mb-2 block">Features</label>
            <div className="flex gap-2 mb-2">
              <Input
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                placeholder="Add a feature"
                className="bg-card border-border/50"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
              />
              <Button variant="titanOutline" onClick={addFeature}>Add</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.features?.map((feature, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full bg-titan-gold/10 text-titan-gold text-sm flex items-center gap-2"
                >
                  {feature}
                  <button onClick={() => removeFeature(index)} className="hover:text-red-400">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="mb-4">
            <label className="text-sm text-muted-foreground mb-2 block">Images (URLs)</label>
            <div className="flex gap-2 mb-2">
              <Input
                value={imageInput}
                onChange={(e) => setImageInput(e.target.value)}
                placeholder="Image URL"
                className="bg-card border-border/50"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addImage())}
              />
              <Button variant="titanOutline" onClick={addImage}>
                <Image className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {formData.images?.map((img, index) => (
                <div key={index} className="relative flex-shrink-0">
                  <img src={img} alt="" className="w-20 h-14 object-cover rounded-lg" />
                  <button 
                    onClick={() => removeImage(index)}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="text-sm text-muted-foreground mb-1 block">Description</label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Vehicle description..."
              className="bg-card border-border/50 min-h-[80px]"
            />
          </div>

          <DialogFooter>
            <Button variant="titanOutline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="titan" onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" />
              {editingCar ? 'Update Vehicle' : 'Add Vehicle'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent className="max-w-md bg-background border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-xl flex items-center gap-2 text-red-400">
              <AlertCircle className="w-5 h-5" />
              Confirm Delete
            </DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground py-4">
            Are you sure you want to delete <span className="text-foreground font-semibold">{carToDelete?.name}</span>? 
            This action cannot be undone.
          </p>
          <DialogFooter>
            <Button variant="titanOutline" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={confirmDelete}>
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Admin;
