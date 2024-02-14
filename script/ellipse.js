function calculateEllipseArea(){
    const triangleBaseInput = document.getElementById('Ellipse-base')
    const triangleText= triangleBaseInput.value;
    const base = parseFloat(triangleText)
    console.log(base)

    const triangleBaseHight = document.getElementById('Ellipse-hight')
    const triangleHight = triangleBaseHight.value;
    const hight = parseFloat(triangleHight);
    console.log(hight)

    //calculede area
    const area =  base * hight
    console.log(area)

    const triangleAriaSpan= document.getElementById('Ellipse-area')
    triangleAriaSpan.innerText = area
}
