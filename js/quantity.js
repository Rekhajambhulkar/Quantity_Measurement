var option1 = ["meter", "kilometer", "centimeter"];
var option2 = ["Celsius", "Farenhite", "Kalvin"];
var option3 = ["liter", "Mililitres", "Gallons"];


onLoad = () => {
    //$("#b3").removeClass("onClickbox3");
    //$("#b2").removeClass("onClickbox2");
    $("#b1").addClass("onClickbox1 img");
    $("#convert1").show(() => {
        selectedOptions(option1);
    });
    $("#convert2").show(() => {
        selectedOptions(option1);
    });
}


$(document).ready(function () {
    $("#b1").on('click', function () {
        $("#section2").val(null);
        $("#section1").val(null);
        //$("#b2").removeClass("onClickbox2");
        //$("#b3").removeClass("onClickbox3");
        $("#b1").addClass("onClickbox1 img");
        $("#convert1").show(() => {
            console.log(option1);
            selectedOptions(option1);
        });
        $("#convert2").show(() => {
            selectedOptions(option1);
        });
    })

    $("#b2").on('click', function () {
        $("#section2").val(null);
        $("#section1").val(null);
        $("#b3").removeClass("onClickbox2");
        $("#b1").removeClass("onClickbox3");
        $("#b2").addClass("onClickbox1 img");
        $("#convert1").show(() => {
            console.log(option2);
            selectedOptions(option2);
        });
        $("#convert2").show(() => {
            selectedOptions(option2);
        });
    })
    $("#b3").on('click', function () {
        $("#section2").val(null);
        $("#section1").val(null);
        // $("#b2").removeClass("onClickbox2");
        //$("#b1").removeClass("onClickbox3");
        $("#b3").addClass("onClickbox1 img");
        $("#convert1").show(() => {
            console.log(option3);
            selectedOptions(option3);
        });
        $("#convert2").show(() => {
            selectedOptions(option3);
        });
    })
})

selectedOptions = (optionVal) => {
    $("#convert1").empty();
    $("#convert2").empty();
    $.each(optionVal, function (index, value) {
        var getOption = `<option id="option1">${value}</option>`;
        $('#convert1').append(getOption);
        $('#convert2').append(getOption);
    });
}

var input = document.getElementById('section1');
var result = document.getElementById('section2');
var inputType = document.getElementById('convert1');
var resultType = document.getElementById('convert2');

input.addEventListener("keyup", myLengthResult);
inputType.addEventListener("change", myLengthResult);
resultType.addEventListener("change", myLengthResult);

inputTypeVal = inputType.value;
resultTypeVal = resultType.value;

function myLengthResult() {

    inputTypeVal = inputType.value;
    resultTypeVal = resultType.value;

    if (inputTypeVal === "meter" && resultTypeVal === "kilometer") {
        result.value = Number(input.value) * 0.001;
    } else if (inputTypeVal === "meter" && resultTypeVal === "centimeter") {
        result.value = Number(input.value) * 100;
    } else if (inputTypeVal === "meter" && resultTypeVal === "meter") {
        result.value = input.value;
    }

    if (inputTypeVal === "kilometer" && resultTypeVal === "meter") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeVal === "kilometer" && resultTypeVal === "centimeter") {
        result.value = Number(input.value) * 100000;
    } else if (inputTypeVal === "kilometer" && resultTypeVal === "kilometer") {
        result.value = input.value;
    }

    if (inputTypeVal === "centimeter" && resultTypeVal === "meter") {
        result.value = Number(input.value) * 0.01;
    } else if (inputTypeVal === "centimeter" && resultTypeVal === "kilometer") {
        result.value = Number(input.value) * 0.00001;
    } else if (inputTypeVal === "centimeter" && resultTypeVal === "centimeter") {
        result.value = input.value;
    }
}
