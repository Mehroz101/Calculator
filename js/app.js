const inputWeight = document.getElementById("input-weight");
const inputCutWeight = document.getElementById("input-cut-weight");
const inputPricePer40kg = document.getElementById("input-price-per-40kg");
const inputCleanPrice = document.getElementById("input-clean-price");
const inputAttaPrice = document.getElementById("input-atta-price");
const cleanCheck = document.getElementById("clean-check");
const btn = document.getElementById("btn");
const priceSpan = document.getElementById("price-span");
const cutSpan = document.getElementById("cut-span");
const wCutSpan = document.getElementById("w-cut-span");
const iPriceSpan = document.getElementById("i-price-span");

btn.onclick = () => {
  const weightKg = parseFloat(inputWeight.value) || 0;
  const cutWeightPer40kg = parseFloat(inputCutWeight.value) || 2;
  const pricePer40kg = parseFloat(inputPricePer40kg.value) || 100;
  const cleanPricePer40kg = parseFloat(inputCleanPrice.value) || 50;
  const attaPricePer40kg = parseFloat(inputAttaPrice.value) || 50;

  const priceWithoutCut = (weightKg / 40) * pricePer40kg;
  const cleanPrice = cleanCheck.checked
    ? (weightKg / 40) * cleanPricePer40kg
    : 0;
  const totalPriceWithClean = priceWithoutCut + cleanPrice;

  const cutWeight = (weightKg / 40) * cutWeightPer40kg;
  const totalPriceWithoutCut = totalPriceWithClean + (attaPricePer40kg * cutWeight);
  const includePrice = totalPriceWithoutCut / pricePer40kg;

  priceSpan.textContent = `${priceWithoutCut.toFixed(2)}`;
  cutSpan.textContent = `${cutWeight.toFixed(2)}`;
  wCutSpan.textContent = `${totalPriceWithoutCut.toFixed(2)}`;
  iPriceSpan.textContent = `${includePrice.toFixed(2)}`;
};