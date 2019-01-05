function analyzeBmi(bmi){
    if(bmi >= 25){
      return 'Overweight'
    } else if (bmi < 18.5) {
      return 'Underweight'
    }
    return 'Normal weight'
  }
  
  function renderBmi(result){
    return `
      <div class="bmiInfo">Name: ${result.name}</div>
      <div class="bmiInfo">Age: ${result.age}</div>
      <div class="bmiInfo">Weight: ${result.weight}</div>
      <div class="bmiInfo">${result.weightKg}</div>
      <div class="bmiInfo">Height: ${result.height} inches</div>
      <div class="bmiInfo">${result.heightMeters}</div>
      <div class="bmiInfo">BMI: ${result.BMI}</div>
      <div class="bmiInfo">Status: ${result.BMICalc}</div>
    `
  }
  
  
  function handleSubmit(){
    $('#health').submit((e) => {
      e.preventDefault();
      const name = $('#name').val();
      const age = $('#age').val();
      const weight = $('#weight').val();
      const height = $('#height').val();
      const heightMeters = height / 39.37;
      const weightKg = weight / 2.205;
      
      const BMI = weightKg / (heightMeters * heightMeters)
      
      const returnObj = {
        name: name,
        age: age,
        weight: weight,
        height: height,
        heightMeters: heightMeters,
        weightKg: weightKg,
        BMI: BMI,
        BMICalc: analyzeBmi(BMI)
      }
      
      
      console.log(returnObj);
      const result = renderBmi(returnObj);
      $('#bmiResult').html(result);
    })
  }
  
  handleSubmit();