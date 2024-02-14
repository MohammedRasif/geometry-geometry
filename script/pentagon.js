function calculateRhombusArea(){
    const triangleBaseInput = document.getElementById('Pentagon-base')
    const triangleText= triangleBaseInput.value;
    const base = parseFloat(triangleText)
    console.log(base)

    const triangleBaseHight = document.getElementById('Pentagon-hight')
    const triangleHight = triangleBaseHight.value;
    const hight = parseFloat(triangleHight);
    console.log(hight)

    //calculede area
    const area =  base * hight
    console.log(area)

    const triangleAriaSpan= document.getElementById('Pentagon-area')
    triangleAriaSpan.innerText = area
}
