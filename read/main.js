(function(){
    console.log('xxx')
    function bookToolPostion(){
        return $(window).height() +  $(window).scrollTop()-$('main').offset().top-$('#book-tool').height()-50
    }
    $('#book-tool-container').css({top:bookToolPostion(),visibility: 'visible'})
$(document).on('scroll',()=>{
    // let temp = $('main').width()
    console.log('zzz')
    if($(window).width()>768){
        let temp = $(window).height()-100
        //窗口可视距离 + 窗口滚动距离 - main元素距离顶部的距离 - book-tool的高度 - book-tool需要离底部的距离
        $('#book-tool-container').css('top',bookToolPostion())
        // $(window).scrolltop
        console.log($(window).height() +  $(window).scrollTop()-$('main').offset().top-50)
        // console.log($('main').offset().top)
    }
})

$(window).on('resize',()=>{
console.log('xxx')
})

})()