(function(){
    console.log($(window).width()-($(window).width()-document.body.clientWidth))
    function bookToolPostion(){
        if(document.body.clientWidth>=768){
            return {bottom:100,
                // $(window).height() +  $(window).scrollTop()-$('main').offset().top-$('#book-tool').height()
            left:$('#body-container').width()+($("#body-container").css("marginLeft").slice(0,-2)-0) +50
            // $("#body-container").css("marginLeft").slice(0,-2)-0+$("#body-container").width()+50
            // $(window).width()-$('#aside-container').width()
        }
        }else{
            return {top:0,right:0}
        }
    }

    bookToolChange()

    function bookToolChange(){
        if(document.body.clientWidth>=768){
            //窗口可视距离 + 窗口滚动距离 - main元素距离顶部的距离 - book-tool的高度 - book-tool需要离底部的距离
            $('#aside-container').removeClass('minScreen')
            $('#body-container').addClass('bigScreen')
            $('#aside-container').css({'bottom':bookToolPostion().bottom,'left':bookToolPostion().left})
            console.log($("#body-container").css("marginLeft").slice(0,-2))
        }else{
            console.log('re')
            $('#aside-container').addClass('minScreen')
            $('#body-container').removeClass('bigScreen')
            $('#aside-container').css({bottom:$('main').height()-$('#top-left').height()-16,left:$('#top-left').width()-$('#aside-container').width(),})          
        }
    }

$(document).on('scroll',()=>{
    bookToolChange()
})

$(window).on('resize',()=>{
    console.log(document.body.clientWidth)
    bookToolChange()

})

$('.book-tool-setting').on('click',(e)=>{
    $('.setting-container').addClass('active')
})

$('.setting-close').on('click',(e)=>{
    $('.setting-container').removeClass('active')
})

$('.setting-font-size').on('click',(e)=>{
    if(e.target.classList.value.indexOf('size-up') != '-1'){
        if($('.article-font-size span').text()-0<48){
            let temp = $('.article-font-size span').text()-0 + 1
            $('.article-font-size span').text(temp)
            $('#book-content').css('font-size',temp)
        }else{
            return
        }
    }else if(e.target.classList.value.indexOf('size-down') != '-1'){
        if($('.article-font-size span').text()-0>12){
            let temp = $('.article-font-size span').text()-0 - 1
            $('.article-font-size span').text(temp)
            $('#book-content').css('font-size',temp)
        }else{
            return
        }
    }else{
        return
    }
})






//从url获取小说MD5
// function getNovelMD5(){
//     console.log(window.location.pathname)
//     let test = `https://www.wenku8.net/novel/1/1508/50116`
//     let MD5 = test.split('/')[test.split('/').length-1]
//     console.log(id)
//     return MD5
// }

//获取小说内容
// function getNovel(){
//     axios.get('/novel', {
//         params: {
//           ID: getNovelID()
//         }
//       })
//       .then(function (response) {
        
//       })
//       .catch(function (error) {
//         let data = {
//             content:`一直以来，我过着羞耻的生活。\n咦？是谁曾经说过这样的话？\n是艺人？运动选手？还是因为贪污遭逮捕的政治家？\n算了，别计较了。\n 我才刚升上高二，就提什么"一直以来"的，未免太夸张了。不过十四岁的我所经历过的事真是惊天动地。就像惊涛骇浪般，搞得我天翻地覆，才短短一年的时间，竟让我觉得自己的人生好像就此结束了。`,
//            author:'',
//            list:'',
//            words:'',
//            title:'',
//            beforePage:'/xx',
//            nextPages:'/xx'
//         }
//         //数据库换行符转成P标签,首尾去空格
//         data.content = '<p>' + data.content.replace(/\n/ig,'</p><p>').trim()  + '</p>'
//         console.log(data.content)
//         $('#book-content').html(data.content)
//       });
// }

// getNovel()
})()