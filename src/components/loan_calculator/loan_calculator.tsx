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
import { useTranslate } from '../../context/useTranslate';

export const LoanCalculator = React.forwardRef<HTMLDivElement>((_, ref) => {
    const t = useTranslate();

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
            <CalculatorTitle>{t('calculator_title')}</CalculatorTitle>

            <CalculatorField>
                <CalculatorLabel>{t('calculator_amount')}</CalculatorLabel>
                <CalculatorInput
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(+e.target.value)}
                />
            </CalculatorField>

            <CalculatorField>
                <CalculatorLabel>{t('calculator_rate')}</CalculatorLabel>
                <CalculatorInput
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(+e.target.value)}
                />
            </CalculatorField>

            <CalculatorField>
                <CalculatorLabel>{t('calculator_term')}</CalculatorLabel>
                <CalculatorInput
                    type="number"
                    value={term}
                    onChange={(e) => setTerm(+e.target.value)}
                />
            </CalculatorField>

            <CalculatorButton onClick={handleCalculate}>{t('calculator_button')}</CalculatorButton>

            {showResult && (
                <CalculatorResult>
                    <div className="result-line">
                        <span>{t('calculator_monthly')}</span>
                        <strong>{monthlyPayment.toFixed(0)} ֏</strong>
                    </div>
                    <div className="result-line">
                        <span>{t('calculator_total')}</span>
                        <strong>{totalPayment.toFixed(0)} ֏</strong>
                    </div>
                    <div className="result-line">
                        <span>{t('calculator_overpayment')}</span>
                        <strong>{overpayment.toFixed(0)} ֏</strong>
                    </div>
                </CalculatorResult>
            )}
        </CalculatorContainer>
    );
});
