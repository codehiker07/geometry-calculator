function calculateTriangleArea() {
    //Get Triangle Base Input Value
    const baseValue = document.getElementById('triangle-base');
    const baseValueText = baseValue.value;
    const baseValueFloat = parseFloat(baseValueText);

    //Get Triangle Height Input Value
    const heightValue = document.getElementById('triangle-height');
    const heightValueText = heightValue.value;
    const heightValueFloat = parseFloat(heightValueText);

    //Validate Input
    if (isNaN(baseValueFloat) || isNaN(heightValueFloat)) {
        alert('Please insert a number');
        return;
    }

    //Calculate Area
    const area = 0.5 * baseValueFloat * heightValueFloat;

    //Show Triangle Area
    const calculatedAreaSpan = document.getElementById('calculated-area-span')
    calculatedAreaSpan.innerText = area;
}

function calculateRectangleArea() {
    //Rectangle Input Width Value
    const widthValue = document.getElementById('rectangle-width');
    const widthValueText = widthValue.value;
    const widthValueFloat = parseFloat(widthValueText);

    //Rectangle Input length Value
    const lengthValue = document.getElementById('rectangle-length');
    const lengthValueText = lengthValue.value;
    const lengthValueFloat = parseFloat(lengthValueText);

    //Validate Input
    if (isNaN(widthValueFloat) || isNaN(lengthValueFloat)) {
        alert('Please insert a number');
        return;
    }

    //Calculate Area
    const rectangleArea = widthValueFloat * lengthValueFloat;
    // console.log(rectangleArea);

    //Show Triangle Area
    const calculatedRectangleAreaSpan = document.getElementById('calculated-rectangle-span')
    calculatedRectangleAreaSpan.innerText = rectangleArea;
}



//Reuseable Function For Parallelogram Area//

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    //Validate Input
    if (isNaN(base) || isNaN(height)) {
        alert('Please insert a number');
        return;
    }
    const area = base * height;
    setElementInnerText('calculated-parallelogram-span', area);

}
// Ellipse
function calculateEllipseArea() {
    const majorRadius = getInputValue('major-radius');
    const minorRadius = getInputValue('minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('calculated-ellipse-span', area)
    //Validate Input
    if (isNaN(majorRadius) || isNaN(minorRadius)) {
        alert('Please insert a number');
        return;
    }
}




//Reuseable Function
function getInputValue(fieldId) {
    const getInputValue = document.getElementById(fieldId);
    const getInputText = getInputValue.value;
    const getInputValueFloat = parseFloat(getInputText);
    return getInputValueFloat;

}

function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}