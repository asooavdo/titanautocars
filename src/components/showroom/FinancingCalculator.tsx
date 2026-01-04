import { useState } from 'react';
import { Calculator, DollarSign, Calendar, Percent, Info } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

interface FinancingCalculatorProps {
  carPrice?: number;
}

const FinancingCalculator = ({ carPrice = 500000 }: FinancingCalculatorProps) => {
  const [price, setPrice] = useState(carPrice);
  const [downPayment, setDownPayment] = useState(20);
  const [loanTerm, setLoanTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(4.5);

  const downPaymentAmount = (price * downPayment) / 100;
  const loanAmount = price - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="p-6 rounded-2xl bg-card border border-border/50">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-titan-red/10 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-titan-red" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground">Financing Calculator</h3>
          <p className="text-sm text-muted-foreground">Estimate your monthly payments</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Vehicle Price */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-muted-foreground flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Vehicle Price
            </label>
            <span className="text-titan-red font-semibold">{formatCurrency(price)}</span>
          </div>
          <Slider
            value={[price]}
            onValueChange={(value) => setPrice(value[0])}
            min={100000}
            max={2000000}
            step={10000}
            className="[&_[role=slider]]:bg-titan-red"
          />
        </div>

        {/* Down Payment */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-muted-foreground flex items-center gap-2">
              <Percent className="w-4 h-4" />
              Down Payment
            </label>
            <span className="text-titan-red font-semibold">{downPayment}% ({formatCurrency(downPaymentAmount)})</span>
          </div>
          <Slider
            value={[downPayment]}
            onValueChange={(value) => setDownPayment(value[0])}
            min={10}
            max={50}
            step={5}
            className="[&_[role=slider]]:bg-titan-red"
          />
        </div>

        {/* Loan Term */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-muted-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Loan Term
            </label>
            <span className="text-titan-red font-semibold">{loanTerm} months</span>
          </div>
          <Slider
            value={[loanTerm]}
            onValueChange={(value) => setLoanTerm(value[0])}
            min={12}
            max={84}
            step={12}
            className="[&_[role=slider]]:bg-titan-red"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-muted-foreground flex items-center gap-2">
              <Percent className="w-4 h-4" />
              Interest Rate
            </label>
            <span className="text-titan-red font-semibold">{interestRate}%</span>
          </div>
          <Slider
            value={[interestRate]}
            onValueChange={(value) => setInterestRate(value[0])}
            min={2}
            max={10}
            step={0.5}
            className="[&_[role=slider]]:bg-titan-red"
          />
        </div>

        {/* Results */}
        <div className="pt-6 border-t border-border/50 space-y-4">
          <div className="p-4 rounded-xl bg-titan-red/10 text-center">
            <p className="text-sm text-muted-foreground mb-1">Estimated Monthly Payment</p>
            <p className="font-display text-3xl font-bold text-titan-red">
              {formatCurrency(monthlyPayment)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-background/50 text-center">
              <p className="text-xs text-muted-foreground">Loan Amount</p>
              <p className="font-semibold text-foreground">{formatCurrency(loanAmount)}</p>
            </div>
            <div className="p-3 rounded-lg bg-background/50 text-center">
              <p className="text-xs text-muted-foreground">Total Interest</p>
              <p className="font-semibold text-foreground">{formatCurrency(totalInterest)}</p>
            </div>
          </div>

          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>This is an estimate. Actual terms may vary based on your credit profile and lender requirements.</p>
          </div>

          <Button variant="titan" className="w-full">
            Apply for Financing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinancingCalculator;
