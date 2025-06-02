import { useState } from 'react';
import Navbar from '../Navbar/Navbar';

export default function Calculate() {
  const [industry, setIndustry] = useState('FinTech');
  const [country, setCountry] = useState('India');
  const [investment, setInvestment] = useState(100000000);
  const [rounds, setRounds] = useState(3);
  const [investors, setInvestors] = useState(4);
  const [growthRate, setGrowthRate] = useState(25);
  const [foundedYear, setFoundedYear] = useState(2020);
  const [valuation, setValuation] = useState(null);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const industryMultipliers = {
    FinTech: 1.6,
    HealthTech: 1.5,
    EdTech: 1.3,
    ECommerce: 1.4,
    SaaS: 1.7,
  };

  const countryMultipliers = {
    India: 0.9,
    USA: 1.0,
    Germany: 0.95,
    Brazil: 0.85,
    Japan: 0.98,
  };

  const ageFactor = (age) => {
    if (age <= 1) return 0.6;
    if (age === 2) return 0.7;
    if (age === 3) return 0.8;
    if (age === 4) return 0.85;
    if (age === 5) return 0.9;
    return 1.0;
  };

  const calculateValuation = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - foundedYear;

    const baseValue = investment * 3.5;
    const growthAdj = (growthRate / 100) * 1200000;
    const roundsVal = rounds * 70000000;
    const investorsVal = investors * 10000000;
    const subtotal = baseValue + growthAdj + roundsVal + investorsVal;

    const afterAge = subtotal * ageFactor(age);
    const afterIndustry = afterAge * industryMultipliers[industry];
    const final = afterIndustry * countryMultipliers[country];

    setValuation({
      age,
      baseValue,
      growthAdj,
      roundsVal,
      investorsVal,
      subtotal,
      afterAge,
      afterIndustry,
      final: Math.round(final / 1000000),
      ageFactor: ageFactor(age),
      industryMultiplier: industryMultipliers[industry],
      countryMultiplier: countryMultipliers[country],
    });
  };

  return (
    <div>
        <Navbar/>
      <h2>🌟 Startup Valuation Tool</h2>
      <p>"Estimate your startup's worth based on key data"</p>

      <div>
        <label>
          📋 Industry:
          <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
            {Object.keys(industryMultipliers).map((ind) => (
              <option key={ind}>{ind}</option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          🌍 Country:
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            {Object.keys(countryMultipliers).map((cty) => (
              <option key={cty}>{cty}</option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          💰 Total Investment Received (USD):
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          🔁 Funding Rounds:
          <input
            type="number"
            value={rounds}
            onChange={(e) => setRounds(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          👥 Number of Investors:
          <input
            type="number"
            value={investors}
            onChange={(e) => setInvestors(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          📈 Annual Growth Rate (%):
          <input
            type="number"
            value={growthRate}
            onChange={(e) => setGrowthRate(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          📅 Year Founded:
          <input
            type="number"
            value={foundedYear}
            onChange={(e) => setFoundedYear(Number(e.target.value))}
          />
        </label>
      </div>

      <button onClick={calculateValuation}>🧮 Calculate Valuation</button>

      {valuation && (
        <div>
          <h3>📊 Estimated Valuation: ${valuation.final}M</h3>
          <p>📌 Confidence Score: 🔵🔵🔵⚪⚪ (Medium)</p>
          <p>📉 Startup Age: {valuation.age} years</p>
          <p>📂 Industry Multiplier: {valuation.industryMultiplier}</p>
          <p>🌐 Country Risk Multiplier: {valuation.countryMultiplier}</p>

          <button onClick={() => setShowBreakdown(!showBreakdown)}>
            {showBreakdown ? '🔽 Hide' : '📈 Show'} Valuation Breakdown
          </button>

          {showBreakdown && (
            <div>
              <p>• Base Investment Value = ${valuation.baseValue.toLocaleString()}</p>
              <p>• Growth Adjustment = ${valuation.growthAdj.toLocaleString()}</p>
              <p>• Funding Rounds = ${valuation.roundsVal.toLocaleString()}</p>
              <p>• Investors = ${valuation.investorsVal.toLocaleString()}</p>
              <p>Subtotal = ${valuation.subtotal.toLocaleString()}</p>
              <p>
                • Age Factor ({valuation.age} years) = {valuation.ageFactor} → $
                {valuation.afterAge.toLocaleString()}
              </p>
              <p>
                • Industry ({industry}, {valuation.industryMultiplier}) = $
                {valuation.afterIndustry.toLocaleString()}
              </p>
              <p>
                • Country ({country}, {valuation.countryMultiplier}) = ✅ ${valuation.final}M
              </p>
              <strong>🎯 Final Estimated Valuation = ${valuation.final}M</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
