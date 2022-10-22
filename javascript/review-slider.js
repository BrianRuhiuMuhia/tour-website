const cardsContainer=document.querySelector(".review-container");
const cards=document.querySelector(".main__section-reviews");
let pressed=false
let cursorX;
cardsContainer.addEventListener("mousedown",(e)=>
{
    pressed=true
cursorX=e.offsetX-cards.offsetLeft;
})
cardsContainer.addEventListener("mouseup",(e)=>
{
    pressed=false
    cardsContainer.style.cursor="grab"
})
cardsContainer.addEventListener("mousemove",(e)=>
{
    if(!pressed)return;
    e.preventDefault()
cards.style.left=`${e.offsetX-cursorX}px`
cardsContainer.style.cursor="grabbing"
boundCards()
})
function boundCards()
{
    const container_rect=cardsContainer.getBoundingClientRect()
    const cards_rect=cards.getBoundingClientRect()
    if(parseInt(cards.style.left)>0)
    {
        cards.style.left=0;
    }
    else if(cards_rect.right<container_rect.right)
    {
        cards.style.left=`-${cards_rect.width -container_rect.width}px`
    }
}