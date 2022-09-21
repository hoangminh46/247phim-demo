
var headerItem = document.querySelectorAll('.header-item')

headerItem.forEach(function(item,index){
    item.addEventListener('mouseover',function(){
        var dropdownMenu = item.querySelector('.header-dropdown')
        dropdownMenu.classList.add('dropdown-show')
    })
    item.addEventListener('mouseout',function(){
        var dropdownMenu = item.querySelector('.header-dropdown')
        dropdownMenu.classList.remove('dropdown-show')
    })

})