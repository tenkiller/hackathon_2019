function saveData(){
  var heatInput = $("#heatLevel");
  localStorage.setItem("heatLevel", heatInput.val());

  var moistureInput = $("#moistureLevel");
  localStorage.setItem("moistureLevel", moistureInput.val());
  
  var oceanicInput = $("#oceanicRate");
  localStorage.setItem("oceanicRate", oceanicInput.val());
  
  var elevationInput = $("#elevationRate");
  localStorage.setItem("elevationRate", elevationInput.val());
  console.log(localStorage);
}

$("#submitButton").click(function(){
  saveData()
});