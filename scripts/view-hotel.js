{
    const destination= document.querySelectorAll('.destination')
    const destinationViewOverlay = document.querySelectorAll('.destination-view-option')
    const destinationViewBtn = document.querySelectorAll('.view-btn')

    destination.forEach(function(destination,index){
        destination.addEventListener('mouseover',()=>{
            destinationViewOverlay[index].style.height="20%";
        })
        destination.addEventListener('mouseleave',()=>{
            destinationViewOverlay[index].style.height="0%";
        })
    })
}