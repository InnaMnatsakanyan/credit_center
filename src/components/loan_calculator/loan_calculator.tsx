import React, { useState } from 'react';
import {
    CalculatorContainer,
    CalculatorTitle,
    CalculatorField,
    CalculatorLabel,
    CalculatorInput,
    CalculatorResult,
    CalculatorButton
} from './loan_calculator.styles';

export const LoanCalculator = React.forwardRef<HTMLDivElement>((_, ref) => {
    const [amount, setAmount] = useState(100000);
    const [term, setTerm] = useState(12);
    const [rate, setRate] = useState(14);
    const [showResult, setShowResult] = useState(false);

    const monthlyRate = rate / 12 / 100;
    const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
    const totalPayment = monthlyPayment * term;
    const overpayment = totalPayment - amount;

    const handleCalculate = () => {
        setShowResult(true);
    };

    return (
        <CalculatorContainer ref={ref}>
            <CalculatorTitle>Վարկային Հաշվիչ</CalculatorTitle>

            <CalculatorField>
                <CalculatorLabel>Վարկի գումար (֏)</CalculatorLabel>
                <CalculatorInput
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(+e.target.value)}
                />
            </CalculatorField>

            <CalculatorField>
                <CalculatorLabel>Տոկոսադրույք (% տարեկան)</CalculatorLabel>
                <CalculatorInput
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(+e.target.value)}
                />
            </CalculatorField>

            <CalculatorField>
                <CalculatorLabel>Վարկի ժամկետ (ամիս)</CalculatorLabel>
                <CalculatorInput
                    type="number"
                    value={term}
                    onChange={(e) => setTerm(+e.target.value)}
                />
            </CalculatorField>

            <CalculatorButton onClick={handleCalculate}>Հաշվել</CalculatorButton>

            {showResult && (
                <CalculatorResult>
                    <div className="result-line">
                        <span>Ամսական վճարում՝</span>
                        <strong>{monthlyPayment.toFixed(0)} ֏</strong>
                    </div>
                    <div className="result-line">
                        <span>Ընդհանուր վճարում՝</span>
                        <strong>{totalPayment.toFixed(0)} ֏</strong>
                    </div>
                    <div className="result-line">
                        <span>Ավել վճարում՝</span>
                        <strong>{overpayment.toFixed(0)} ֏</strong>
                    </div>
                </CalculatorResult>
            )}
        </CalculatorContainer>
    );
});