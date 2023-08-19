function calculateTriangleArea() {
    //Get Triangle Base Input Value
    const baseValue = document.getElementById('triangle-base');
    const baseValueText = baseValue.value;
    const baseValueFloat = parseFloat(baseValueText);
    // console.log(baseValueFloat);

    //Get Triangle Height Input Value
    const heightValue = document.getElementById('triangle-height');
    const heightValueText = heightValue.value;
    const heightValueFloat = parseFloat(heightValueText);
    // console.log(heightValueFloat);

    //Calculate Area
    const area = 0.5 * baseValueFloat * heightValueFloat;
    // console.log(area);

    //Show Triangle Area
    const calculatedAreaSpan = document.getElementById('calculated-area-span')
    calculatedAreaSpan.innerText = area;

    //Clear Input Areas

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

    //Calculate Area
    const rectangleArea = widthValueFloat * lengthValueFloat;
    // console.log(rectangleArea);

    //Show Triangle Area
    const calculatedRectangleAreaSpan = document.getElementById('calculated-rectangle-span')
    calculatedRectangleAreaSpan.innerText = rectangleArea;

    //Clear Input Areas
}


//Reuseable Function For Parallelogram Area//

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    setElementInnerText('calculated-parallelogram-span', area);

}
// Ellipse
function calculateEllipseArea() {
    const majorRadius = getInputValue('major-radius');
    const minorRadius = getInputValue('minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('calculated-ellipse-span', area)
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