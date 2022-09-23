function resetForm() {
    document.getElementById("Order_Form").reset()
}


function calculateEngine3() {

    var a = document.getElementById("eng1").value;
    var b = document.getElementById("eng2").value;
    var c = document.getElementById("wing1").value;
    var d = document.getElementById("tyre1").value;
    var tot = (a * 2500000) + (b * 1250000) + (c * 10000) + (d * 50000);
    document.getElementById("enginetotal").value = tot;
}


function greeting() {
    alert("Thank you " + document.getElementById("name").value + " someone will be in touch!")

    setTimeout(function () {
        window.location.href = "index.html";
    }, 300)
}

