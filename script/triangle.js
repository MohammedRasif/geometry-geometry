function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangleText= triangleBaseInput.value;
    const base = parseFloat(triangleText)
    console.log(base)

    const triangleBaseHight = document.getElementById('triangle-hight')
    const triangleHight = triangleBaseHight.value;
    const hight = parseFloat(triangleHight);
    console.log(hight)

    //calculede area
    const area = 0.5 * base * hight
    console.log(area)

    const triangleAriaSpan= document.getElementById('triangle-aria')
    triangleAriaSpan.innerText = area
}
