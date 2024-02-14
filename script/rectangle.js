function rectangleArea(){
   const rectangleBaseArea = document.getElementById('rectangle-base')
   const rectangleText = rectangleBaseArea.value;
   const base = parseFloat(rectangleText)
   console.log(base)


   const rectangleHightArea = document.getElementById('rectangle-hight')
   const rectangleHightText = rectangleHightArea.value;
   const hight = parseFloat(rectangleHightText)
   console.log(hight)

   const area = base*hight;
   console.log(area)

   const rectangleAreaSpan = document.getElementById('rectangle-area')
   rectangleAreaSpan.innerText = area
}