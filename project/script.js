function calculateDiff(){

    let start = document.getElementById("startDate").value;
    let end = document.getElementById("endDate").value;

    if(start === "" || end === ""){
        document.getElementById("result").innerHTML = "Please select both dates!";
        return;
    }

    let startDate = new Date(start);
    let endDate = new Date(end);

    if(endDate < startDate){
        document.getElementById("result").innerHTML = "End date must be after start date!";
        return;
    }

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    
    document.getElementById("result").innerHTML =
        years + " Years " + months + " Months " + days + " Days";
}
