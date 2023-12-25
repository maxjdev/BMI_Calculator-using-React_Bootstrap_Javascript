import { useState } from "react";

const Imc = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(null);

  const calcImc = (weight, height) => {
    var imc = weight / (height * height);
    return imc.toFixed(2);
  }

  const interpreter = (imc) => {
    if (imc < 18.5) {
      return "Under weight";
    } else if (imc >= 18.5 && imc < 25) {
      return "Normal weight";
    } else if (imc >= 25 && imc < 30) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const imcFinalized = calcImc(weight, height);
    setResult(imcFinalized);
  }

  return (
    <div className="container mx-auto mt-5">
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-row justify-content-center">
          <div className="col-md-4 mb-3">
            <label htmlFor="weight"><b>Weight (kg):</b></label>
            <input type="number" className="form-control" id="weight" value={weight} onChange={(event) => setWeight(event.target.value)} />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="height"><b>Height (m):</b></label>
            <input type="number" step="0.01" className="form-control" id="height" value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Calculate <b>BMI</b></button>
      </form>

      {result !== null && (
        <div className="alert alert-info text-center">
          <p className="mb-0">
            <strong>BMI Result:</strong> {result}
          </p>
          <p className="mb-0">
            <strong>Interpretation:</strong> {interpreter(parseFloat(result))}
          </p>
        </div>
      )}
    </div>
  );
}

export default Imc;

