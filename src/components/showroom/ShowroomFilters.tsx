import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { SlidersHorizontal } from 'lucide-react';

interface ShowroomFiltersProps {
  brands: string[];
  types: string[];
  selectedBrand: string;
  selectedType: string;
  priceRange: number[];
  onBrandChange: (brand: string) => void;
  onTypeChange: (type: string) => void;
  onPriceChange: (range: number[]) => void;
}

const ShowroomFilters = ({
  brands,
  types,
  selectedBrand,
  selectedType,
  priceRange,
  onBrandChange,
  onTypeChange,
  onPriceChange,
}: ShowroomFiltersProps) => {
  const formatPrice = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    return `${(value / 1000).toFixed(0)}K`;
  };

  return (
    <section className="sticky top-20 md:top-[7.5rem] z-30 bg-background/95 backdrop-blur-md border-y border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <SlidersHorizontal className="text-titan-gold" size={20} />
          <h2 className="font-display font-semibold text-lg">Filter Vehicles</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Brand Filter */}
          <div className="space-y-3">
            <label className="text-sm text-muted-foreground font-medium">Brand</label>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <Button
                  key={brand}
                  variant={selectedBrand === brand ? 'titan' : 'outline'}
                  size="sm"
                  onClick={() => onBrandChange(brand)}
                  className="text-xs"
                >
                  {brand}
                </Button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div className="space-y-3">
            <label className="text-sm text-muted-foreground font-medium">Type</label>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? 'titan' : 'outline'}
                  size="sm"
                  onClick={() => onTypeChange(type)}
                  className="text-xs"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-3">
            <label className="text-sm text-muted-foreground font-medium">
              Price Range: <span className="text-titan-gold">AED {formatPrice(priceRange[0])} - AED {formatPrice(priceRange[1])}</span>
            </label>
            <Slider
              value={priceRange}
              onValueChange={onPriceChange}
              min={0}
              max={1500000}
              step={50000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>AED 0</span>
              <span>AED 1.5M+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomFilters;
