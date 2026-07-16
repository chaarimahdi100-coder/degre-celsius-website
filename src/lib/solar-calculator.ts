// Solar irradiance data for Tunisian cities (kWh/m²/year)
// Source: Based on Tunisian National Agency for Energy Conservation (ANME) data
export const CITY_SOLAR_DATA: Record<string, { irradiance: number; peakSunHours: number; label: string }> = {
  tunis: { irradiance: 1800, peakSunHours: 4.9, label: "Tunis" },
  sfax: { irradiance: 1950, peakSunHours: 5.3, label: "Sfax" },
  sousse: { irradiance: 1850, peakSunHours: 5.1, label: "Sousse" },
  nabeul: { irradiance: 1820, peakSunHours: 5.0, label: "Nabeul" },
  gabes: { irradiance: 2000, peakSunHours: 5.5, label: "Gabès" },
  monastir: { irradiance: 1860, peakSunHours: 5.1, label: "Monastir" },
  bizerte: { irradiance: 1750, peakSunHours: 4.8, label: "Bizerte" },
  kairouan: { irradiance: 1900, peakSunHours: 5.2, label: "Kairouan" },
  medenine: { irradiance: 2050, peakSunHours: 5.6, label: "Médenine" },
  tozeur: { irradiance: 2100, peakSunHours: 5.8, label: "Tozeur" },
  djerba: { irradiance: 2020, peakSunHours: 5.5, label: "Djerba" },
  hammamet: { irradiance: 1830, peakSunHours: 5.0, label: "Hammamet" },
};

export const PROPERTY_TYPES = [
  { value: "house", label: "Maison Individuelle", factor: 1.0 },
  { value: "apartment", label: "Appartement", factor: 0.7 },
  { value: "company", label: "Entreprise / Industriel", factor: 1.3 },
] as const;

export const ROOF_TYPES = [
  { value: "flat", label: "Toit Plat (Terrasse)", factor: 0.92 },
  { value: "inclined", label: "Toit Incliné", factor: 1.0 },
] as const;

// Constants
const STEG_TARIFF_TND_PER_KWH = 0.295; // Average STEG tariff (TND/kWh)
const PANEL_WATTAGE = 550; // Watts per panel (modern bifacial)
const SYSTEM_COST_PER_KWP = 3200; // TND per kWp installed
const CO2_FACTOR = 0.48; // kg CO2 per kWh (Tunisian grid)
const SYSTEM_EFFICIENCY = 0.82; // Overall system efficiency (inverter + wiring losses)
const PANEL_AREA_M2 = 2.7; // m² per 550W panel

export interface SolarCalculatorInput {
  monthlyBill: number;       // TND
  city: string;
  propertyType: string;
  roofType: string;
}

export interface SolarCalculatorResult {
  systemSizeKWp: number;
  numberOfPanels: number;
  annualProductionKWh: number;
  annualSavingsTND: number;
  co2ReductionKg: number;
  roiYears: number;
  totalSystemCost: number;
  monthlyConsumptionKWh: number;
  roofAreaNeeded: number;
  selfSufficiencyPercent: number;
}

export function calculateSolar(input: SolarCalculatorInput): SolarCalculatorResult {
  const cityData = CITY_SOLAR_DATA[input.city] || CITY_SOLAR_DATA.sfax;
  const propertyType = PROPERTY_TYPES.find(p => p.value === input.propertyType) || PROPERTY_TYPES[0];
  const roofType = ROOF_TYPES.find(r => r.value === input.roofType) || ROOF_TYPES[0];

  // Step 1: Estimate monthly consumption from bill
  const monthlyConsumptionKWh = input.monthlyBill / STEG_TARIFF_TND_PER_KWH;
  const annualConsumptionKWh = monthlyConsumptionKWh * 12;

  // Step 2: Calculate required system size
  const rawSystemSizeKWp = annualConsumptionKWh / (cityData.peakSunHours * 365 * SYSTEM_EFFICIENCY);
  const adjustedSystemSize = rawSystemSizeKWp * propertyType.factor * roofType.factor;
  const systemSizeKWp = Math.round(adjustedSystemSize * 10) / 10; // Round to 1 decimal

  // Step 3: Number of panels
  const numberOfPanels = Math.ceil((systemSizeKWp * 1000) / PANEL_WATTAGE);

  // Step 4: Annual production
  const annualProductionKWh = Math.round(
    systemSizeKWp * cityData.peakSunHours * 365 * SYSTEM_EFFICIENCY
  );

  // Step 5: Annual savings
  const annualSavingsTND = Math.round(annualProductionKWh * STEG_TARIFF_TND_PER_KWH);

  // Step 6: CO2 reduction
  const co2ReductionKg = Math.round(annualProductionKWh * CO2_FACTOR);

  // Step 7: ROI
  const totalSystemCost = Math.round(systemSizeKWp * SYSTEM_COST_PER_KWP);
  const roiYears = annualSavingsTND > 0
    ? Math.round((totalSystemCost / annualSavingsTND) * 10) / 10
    : 0;

  // Step 8: Roof area needed
  const roofAreaNeeded = Math.round(numberOfPanels * PANEL_AREA_M2);

  // Step 9: Self-sufficiency
  const selfSufficiencyPercent = annualConsumptionKWh > 0
    ? Math.min(100, Math.round((annualProductionKWh / annualConsumptionKWh) * 100))
    : 0;

  return {
    systemSizeKWp,
    numberOfPanels,
    annualProductionKWh,
    annualSavingsTND,
    co2ReductionKg,
    roiYears,
    totalSystemCost,
    monthlyConsumptionKWh: Math.round(monthlyConsumptionKWh),
    roofAreaNeeded,
    selfSufficiencyPercent,
  };
}
