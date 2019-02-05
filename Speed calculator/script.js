window.onkeydown = function (event) {
    if (event.code === "Enter") {
        try {
            let speedInputValue = document.getElementById("speedInput").value;
            if (isNaN(speedInputValue)) {
                throw new err;
            }
            else {
                let newSpeedValue = +(speedInputValue * 1000 / 3600).toFixed(2);
                document.getElementById("output").innerText = "Скорость равна: " + newSpeedValue + " м/с";
                speedInputValue.value = "";
            }
        } catch (err) {
            alert("Введенное значение должно быть числовым");
            document.getElementById("speedInput").value = "";
            document.getElementById("output").innerText = "";
        }
    }
}
;
