const steps = document.querySelectorAll(".step");

let currentStep = 0;

function showStep(step) {
  steps.forEach((el, index) => {
    el.classList.remove("active");
    if (index === step) {
      el.classList.add("active");
    }
  });
}

function validateStep(step) {
  const stepElement = steps[step];
  const inputs = stepElement.querySelectorAll("input[required]");
  let isValid = true;

  stepElement.classList.add("active");

  for (let input of inputs) {
    if (!input.checkValidity()) {
      input.focus();
      isValid = false;
      break;
    }
  }

  stepElement.classList.remove("active");
  showStep(currentStep);

  return isValid;
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    if (validateStep(currentStep)) {
      currentStep++;
      showStep(currentStep);
    }
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}
