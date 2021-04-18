var header = document.querySelector('.header');
var headerCategory = document.querySelector('.header__category')
var headerLogo = document.querySelector('.header__logo');
var modal = document.querySelector('.modal.modal__category');
var modalSearch = document.querySelector('.modal__search.modal');

var headerSearchInput = document.querySelector('.header__search-input');
var modalOverlaySearch = document.querySelector('.modal__search.modal .modal__overlay');
var modalOverlayCategory = document.querySelector('.modal.modal__category .modal__overlay');
var headerSearch = document.querySelector('.header__search');
var headerNavbarRight = document.querySelector('.header__navbar-right');
var headerNavbarLeft = document.querySelector('.header__navbar-left');

var item1 = document.querySelector('.item-1 a');
var item2 = document.querySelector('.item-2 a');
var item3 = document.querySelector('.item-3 a');
var item4 = document.querySelector('.item-4 a');
var item5 = document.querySelector('.item-5 a');
var item6 = document.querySelector('.item-6 a');
var item7 = document.querySelector('.item-7 a');
var item8 = document.querySelector('.item-8 a');
var item9 = document.querySelector('.item-9 a');
var item10 = document.querySelector('.item-10 a');
var item11 = document.querySelector('.item-11 a');
var item12 = document.querySelector('.item-12 a');
var item13 = document.querySelector('.item-13 a');
var item14 = document.querySelector('.item-14 a');
var item15 = document.querySelector('.item-15 a');
var item16 = document.querySelector('.item-16 a');
var modalBody = document.querySelector('.modal__category .modal__body');

var headerSearchReadmore = document.querySelector('.header__search-readmore');
var headerSearchCollapse = document.querySelector('.header__search-collapse');


headerSearchReadmore.onclick = function(){
    headerSearchReadmore.style.display="none"
    document.querySelector('.header__search-keyword-readmore').style.display="block";
}

headerSearchCollapse.onclick = function(){
    headerSearchReadmore.style.display="block"
    document.querySelector('.header__search-keyword-readmore').style.display="none";
}


headerLogo.onmouseover = function(){
    modal.style.display = "none";
}

headerNavbarRight.onmouseover = function(){
    modal.style.display = "none";
}
headerSearch.onmouseover = function(){
    modal.style.display = "none";
}



headerCategory.onmouseenter = function(){
    modal.style.display = "flex";
    item1.style.backgroundColor = "";
    item1.style.color = "";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    if(modalSearch.style.display === "block"){
        modalOverlayCategory.style.display = "none";
    }else{
        modalOverlayCategory.style.display = "block";
    }
}

item1.onmouseover = function(){
    item1.style.backgroundColor = "var(--primary-color)";
    item1.style.color = "white";
    document.querySelector('.category-1').style.display = "flex";    
    document.querySelector('.item-1 span:nth-child(3)').style.display="flex";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
    
}

item2.onmouseover = function(){
    
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    item2.style.backgroundColor = "var(--primary-color)";
    item2.style.color = "white";
    document.querySelector('.category-2').style.display = "flex";    
    document.querySelector('.item-2 span:nth-child(3)').style.display="flex";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item3.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    item3.style.backgroundColor = "var(--primary-color)";
    item3.style.color = "white";
    document.querySelector('.category-3').style.display = "flex";    
    document.querySelector('.item-3 span:nth-child(3)').style.display="flex";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item4.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "flex";
    document.querySelector('.item-4 span:nth-child(3)').style.display="flex";
    item4.style.backgroundColor = "var(--primary-color)";
    item4.style.color = "white";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item5.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "flex";
    document.querySelector('.item-5 span:nth-child(3)').style.display="flex";
    item5.style.backgroundColor = "var(--primary-color)";
    item5.style.color = "white";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item6.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "flex";
    document.querySelector('.item-6 span:nth-child(3)').style.display="flex";
    item6.style.backgroundColor = "var(--primary-color)";
    item6.style.color = "white";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item7.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "flex";
    document.querySelector('.item-7 span:nth-child(3)').style.display="flex";
    item7.style.backgroundColor = "var(--primary-color)";
    item7.style.color = "white";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item8.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "flex";
    document.querySelector('.item-8 span:nth-child(3)').style.display="flex";
    item8.style.backgroundColor = "var(--primary-color)";
    item8.style.color = "white";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item9.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "flex";
    document.querySelector('.item-9 span:nth-child(3)').style.display="flex";
    item9.style.backgroundColor = "var(--primary-color)";
    item9.style.color = "white";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item10.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "flex";
    document.querySelector('.item-10 span:nth-child(3)').style.display="flex";
    item10.style.backgroundColor = "var(--primary-color)";
    item10.style.color = "white";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item11.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "flex";
    document.querySelector('.item-11 span:nth-child(3)').style.display="flex";
    item11.style.backgroundColor = "var(--primary-color)";
    item11.style.color = "white";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item12.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "flex";
    document.querySelector('.item-12 span:nth-child(3)').style.display="flex";
    item12.style.backgroundColor = "var(--primary-color)";
    item12.style.color = "white";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item13.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "flex";
    document.querySelector('.item-13 span:nth-child(3)').style.display="flex";
    item13.style.backgroundColor = "var(--primary-color)";
    item13.style.color = "white";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item14.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "flex";
    document.querySelector('.item-14 span:nth-child(3)').style.display="flex";
    item14.style.backgroundColor = "var(--primary-color)";
    item14.style.color = "white";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item15.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "flex";
    document.querySelector('.item-15 span:nth-child(3)').style.display="flex";
    item15.style.backgroundColor = "var(--primary-color)";
    item15.style.color = "white";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
}

item16.onmouseover = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "flex";
    document.querySelector('.item-16 span:nth-child(3)').style.display="flex";
    item16.style.backgroundColor = "var(--primary-color)";
    item16.style.color = "white";
}


modalBody.onmouseleave = function(){
    document.querySelector('.category-1').style.display = "none";
    document.querySelector('.item-1 span:nth-child(3)').style.display="none";
    item1.style.backgroundColor = "";
    item1.style.color = "";

    document.querySelector('.category-2').style.display = "none";
    document.querySelector('.item-2 span:nth-child(3)').style.display="none";
    item2.style.backgroundColor = "";
    item2.style.color = "";

    document.querySelector('.category-3').style.display = "none";
    document.querySelector('.item-3 span:nth-child(3)').style.display="none";
    item3.style.backgroundColor = "";
    item3.style.color = "";

    document.querySelector('.category-4').style.display = "none";
    document.querySelector('.item-4 span:nth-child(3)').style.display="none";
    item4.style.backgroundColor = "";
    item4.style.color = "";

    document.querySelector('.category-5').style.display = "none";
    document.querySelector('.item-5 span:nth-child(3)').style.display="none";
    item5.style.backgroundColor = "";
    item5.style.color = "";

    document.querySelector('.category-6').style.display = "none";
    document.querySelector('.item-6 span:nth-child(3)').style.display="none";
    item6.style.backgroundColor = "";
    item6.style.color = "";

    document.querySelector('.category-7').style.display = "none";
    document.querySelector('.item-7 span:nth-child(3)').style.display="none";
    item7.style.backgroundColor = "";
    item7.style.color = "";

    document.querySelector('.category-8').style.display = "none";
    document.querySelector('.item-8 span:nth-child(3)').style.display="none";
    item8.style.backgroundColor = "";
    item8.style.color = "";

    document.querySelector('.category-9').style.display = "none";
    document.querySelector('.item-9 span:nth-child(3)').style.display="none";
    item9.style.backgroundColor = "";
    item9.style.color = "";

    document.querySelector('.category-10').style.display = "none";
    document.querySelector('.item-10 span:nth-child(3)').style.display="none";
    item10.style.backgroundColor = "";
    item10.style.color = "";

    document.querySelector('.category-11').style.display = "none";
    document.querySelector('.item-11 span:nth-child(3)').style.display="none";
    item11.style.backgroundColor = "";
    item11.style.color = "";

    document.querySelector('.category-12').style.display = "none";
    document.querySelector('.item-12 span:nth-child(3)').style.display="none";
    item12.style.backgroundColor = "";
    item12.style.color = "";

    document.querySelector('.category-13').style.display = "none";
    document.querySelector('.item-13 span:nth-child(3)').style.display="none";
    item13.style.backgroundColor = "";
    item13.style.color = "";

    document.querySelector('.category-14').style.display = "none";
    document.querySelector('.item-14 span:nth-child(3)').style.display="none";
    item14.style.backgroundColor = "";
    item14.style.color = "";

    document.querySelector('.category-15').style.display = "none";
    document.querySelector('.item-15 span:nth-child(3)').style.display="none";
    item15.style.backgroundColor = "";
    item15.style.color = "";

    document.querySelector('.category-16').style.display = "none";
    document.querySelector('.item-16 span:nth-child(3)').style.display="none";
    item16.style.backgroundColor = "";
    item16.style.color = "";
    modal.style.display = "none";
   
}

headerSearchInput.onclick = function(){
    modalSearch.style.display="block";
}

modalOverlaySearch.onclick = function(){
    modalSearch.style.display="none";
}

headerNavbarRight.onclick = function(){
    modalSearch.style.display = "none";
}

headerNavbarLeft.onclick = function(){
    modalSearch.style.display = "none";
}


var slides = document.getElementsByClassName("container__slider-item");
var dots = document.getElementsByClassName("dot");
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  if (n > slides.length) {
      slideIndex = 1
    }    
  if (n < 1) {
      slideIndex = slides.length
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

carousel();

function carousel() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(carousel, 5000);
}

var countDownDate = new Date("Dec 31, 100000 00:00:00").getTime();

// Update the count down every 1 second
setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  var minutes = Math.floor((distance / (1000 * 60)) % 60);
  var seconds = Math.floor((distance / 1000) % 60);

  if(hours < 10){
      hours = "0" + hours;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
    if(seconds < 10){
        seconds = "0" + seconds;
    }   

  document.querySelector(".shock-sale__clock").innerHTML =` <span>${hours}</span>
  <span>:</span>
  <span>${minutes}</span>
  <span>:</span>
  <span>${seconds}</span>
  <i class="fas fa-chevron-right"></i>`;
    
  
});

var slidesProduct = document.getElementsByClassName('container__shock-sale-product-slide');

var slideProductIndex = 1;
showSlidesProduct(slideProductIndex);

function plusSlidesProduct(n) {
  showSlidesProduct(slideProductIndex += n);
}

function currentSlideProduct(n) {
  showSlidesProduct(slideProductIndex = n);
}

function showSlidesProduct(n) {
  var i;
  if (n > slidesProduct.length) {
      slideProductIndex = 1
    }    
  if (n < 1) {
      slideProductIndex = slidesProduct.length
    }
  for (i = 0; i < slidesProduct.length; i++) {
      slidesProduct[i].style.display = "none";  
  }
  slidesProduct[slideProductIndex-1].style.display = "block";  
}

var slidesHigtlightSearch = document.getElementsByClassName('highlight-search__list');

var slideHighlightProductIndex = 1;
showSlidesHigtlightSearch(slideHighlightProductIndex);

function plusSlidesHigtlightSearch(n) {
  showSlidesHigtlightSearch(slideHighlightProductIndex += n);
}

function currentSlideProduct(n) {
  showSlidesHigtlightSearch(slideHighlightProductIndex = n);
}

function showSlidesHigtlightSearch(n) {
  var i;
  if (n > slidesHigtlightSearch.length) {
      slideHighlightProductIndex = 1
    }    
  if (n < 1) {
      slideHighlightProductIndex = slidesHigtlightSearch.length
    }
  for (i = 0; i < slidesHigtlightSearch.length; i++) {
      slidesHigtlightSearch[i].style.display = "none";  
  }
  slidesHigtlightSearch[slideHighlightProductIndex-1].style.display = "flex";  
}