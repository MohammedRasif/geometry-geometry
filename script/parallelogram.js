function calculateParallelogramArea(){
    const triangleBaseInput = document.getElementById('Parallelogram-base')
    const triangleText= triangleBaseInput.value;
    const base = parseFloat(triangleText)
    console.log(base)

    const triangleBaseHight = document.getElementById('Parallelogram-hight')
    const triangleHight = triangleBaseHight.value;
    const hight = parseFloat(triangleHight);
    console.log(hight)

    //calculede area
    const area =  base * hight
    console.log(area)

    const triangleAriaSpan= document.getElementById('Parallelogram-area')
    triangleAriaSpan.innerText = area
}
