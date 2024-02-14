function calculateRhombusArea(){
    const triangleBaseInput = document.getElementById('Rhombus-base')
    const triangleText= triangleBaseInput.value;
    const base = parseFloat(triangleText)
    console.log(base)

    const triangleBaseHight = document.getElementById('Rhombus-hight')
    const triangleHight = triangleBaseHight.value;
    const hight = parseFloat(triangleHight);
    console.log(hight)

    //calculede area
    const area =  base * hight
    console.log(area)

    const triangleAriaSpan= document.getElementById('Rhombus-area')
    triangleAriaSpan.innerText = area
}
