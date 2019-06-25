(function(){
    //左侧组件
    //热门
Vue.component('hot-lists',{
    props:['section','datalist','index'],
template:`
<div class="block-left col-md-6 col-sm-7 col-xs-12 text-center">
    <div class="block-title">
        <a :href="section.url" class="title-link">
            <div class="icon-title"></div>
            <h2 class="title">{{section.namex}}热门文库本</h2>
        </a>
        <a href="https://www.zzuliacgn.com/info/#/faq?to=rank" target="_blank" class="link-faq"><i class="fa fa-question-circle fa-2x"></i></a>
        <a href="https://www.zzuliacgn.com/c/14" class="more">更多<i class="fa fa-angle-right fa-fw"></i></a>
    </div>
    <div class="block-bottom">
    <ul class="book-list">
    <li v-for='item in temp'>
    <a href="#" target="_blank" class="thumb">
        <span class="recom"></span>
        <img :alt="item.alt" class="cover" :src="item.src">
        <div class="label-count">
            <span class="fontstype">{{item.word}}</span>
        </div>
        <div class="book-info">
            <div class="book-info-a">
                <p><span class="d">{{item.title}}</span></p>
                <p><span class="book-info-title">类别：</span><span class="d">{{item.type}}</span></p>
            </div>
            <div class="book-info-b">
                <p><span class="book-info-title">状态：</span><span class="d">{{item.state}}</span></p>
                <p><span class="book-info-title">作者：</span><span class="d">{{item.author}}</span></p>
            </div>
        </div>
    </a>
    <a href="https://www.iqing.com/book/34961" target="_blank" class="title">
        <i class="icon icon-pay"></i>
        <h3 class="hasicon has-icon">{{item.title}}</h3>
    </a>
    </li>
    </ul>
    </div>
</div>
`,
data:function(){
    return {
        temp:[{title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'}],
    }
},
watch:{
    datalist:{
        handler(){
            // this.temp = this.datalist
            this.temp = this.datalist[this.index].hot
            // debugger
            console.log('xxxxxxxxxxxxxxxx')
            console.log(this.temp)
            // debugger
            console.log(this.datalist)
        },
        immediate: true,
        deep: true
    },
    
},
methods:{

},
created:function(){
console.log(this.index)
console.log(this.datalist[this.index].hot)
}
})

//recommend
//中间组件
//推荐
Vue.component('manxie-recommend',{
    props:['datalist','index'],
template:`
<div class="block-center col-md-3 visible-md-block visible-lg-block text-left">
<div class="js-block-rank rank-wrap">
    <div class="block-title block-title-rank">
        <h2 class="title">漫协推荐</h2>
    </div>
    <div class="line-border"></div>
    <ol id="list-14" class="rank-list">
        <li class="recom-new" v-for='item22 in temp22'>
            <a :href="item22.href" target="_blank" :title=item22.title class="thumb">
                <img data-sizes="72px" class="cover" sizes="72px" :src="item22.src">
                <div class="label-count">
                    <span>{{item22.num}}万</span>
                </div>
            </a>
            <div class="book-info">
                <a :href="item22.href" target="_blank" :title=item22.title class="title title-l2 fz-14">
                    <h3>{{item22.title}}</h3>
                </a>
                <h4 class="count">{{item22.profile}}</h4>
            </div>
        </li>
    </ol>
</div>
</div>
`,
data:function(){
    return {
        temp22:this.datalist[this.index].recommend
    }
},
methods:{

},
created:function(){

}
})

//右侧组件
//战力榜
Vue.component('manxie-zhanli',{
    props:['datalist','index'],
template:`
<div class="block-right col-md-3 col-sm-5 col-xs-12 text-left">
<div class="js-block-rank rank-wrap">
    <div class="block-title block-title-rank">
        <h2 class="title">文库本<span class="s-t">战力榜</span>
        </h2>
        <!--a.more(href="/rank/", target="_blank") 更多-->
        <!--    i.fa.fa-angle-right.fa-fw-->
        <div class="js-rank-tab block-title-rank"><a class="tab active js-tab-14-0">日榜</a><a class="tab js-tab-14-1">周榜</a><a class="tab js-tab-14-2">月榜</a>
        </div>
    </div>
    <div class="line-border"></div>
    <ol id="list-14-rank0" class="rank-list">

        <li v-for="(item33,index) in temp33.list1">
            <a :href="item33.href" target="_blank" :title="item33.title" class="thumb">
                <img data-sizes="51px" :alt="item33.title" class="cover"  :src="item33.src">
                <span class="order"><span class="no">{{index+1}}</span></span>
            </a>
            <div class="book-info">
                <a :href="item33.href" target="_blank" :title="item33.title" class="title title-l2 fz-14">
                    <h3>{{item33.title}}</h3>
                </a>
                <a :href="item33.href" target="_blank" class="author">作者：{{item33.author}}</a>
                <p class="count">战力：{{item33.zhanli}}<span class="scl-hf">万</span></p>
            </div>
        </li>

        
        
        <li v-for="(item44,index4) in temp33.list2">
            <a :href="item44.href" target="_blank" :title="item44.title" class="title">
                <h3 class="title-txt"><span class="num">{{index4 + 4}}</span>{{item44.title}}</h3>
                <div class="count-rl">{{item44.zhanli}}<span class="scl-hf">万战力</span></div>
            </a>
        </li>
</ol>
    <ol id="list-14-rank1" class="rank-list hide"></ol>
    <ol id="list-14-rank2" class="rank-list hide"></ol>

</div>
</div>
</div>
`,
data:function(){
    return {
        temp33:this.datalist[this.index].zhanli
    }
},
methods:{

},
created:function(){
console.log(this.zhanli)
}
})


Vue.component('novel-section',{
    props:['index','section','datalist'],
template:`
    <div>
        <hot-lists :datalist = datas :index=index :section=section></hot-lists>
        <manxie-recommend :datalist = datas :index=index :section=section></manxie-recommend>
        <manxie-zhanli :datalist = datas :index=index :section=section></manxie-zhanli>
    </div>
`,
data:function(){
    return {
        namex:this.section.namex,
        // datas:this.datalist[this.index]
        datas:[{hot:[{title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'}],
        recommend:[{title:'刀剑神域',href:'https://www.iqing.com/book/59609',src:'./次元圣经 郑州轻工大学 动漫协会！_files/5b9c39b1-3485-4cb2-b7e7-fb7ce1f88df5.jpg',num:'322.5',profile:'虽然是游戏，但可不是闹着玩的！'}],
        zhanli:{list1:[{title:'精灵幻想记',href:'https://www.zzuliacgn.com/book/34962',alt:'轻小说：精灵幻想记',src:'./次元圣经 郑州轻工大学 动漫协会！_files/680ed4d9-0568-4113-944d-95ab025ae17e.jpg',author:'HJ文库',zhanli:'291.4'}],
        list2:[{title:'异世界料理道',href:'https://www.zzuliacgn.com/book/38406',zhanli:'137.0'}]}
    },
    {hot:[{title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'}],
    recommend:[{title:'刀剑神域',href:'https://www.iqing.com/book/59609',src:'./次元圣经 郑州轻工大学 动漫协会！_files/5b9c39b1-3485-4cb2-b7e7-fb7ce1f88df5.jpg',num:'322.5',profile:'虽然是游戏，但可不是闹着玩的！'}],
    zhanli:{list1:[{title:'精灵幻想记',href:'https://www.zzuliacgn.com/book/34962',alt:'轻小说：精灵幻想记',src:'./次元圣经 郑州轻工大学 动漫协会！_files/680ed4d9-0568-4113-944d-95ab025ae17e.jpg',author:'HJ文库',zhanli:'291.4'}],
    list2:[{title:'异世界料理道',href:'https://www.zzuliacgn.com/book/38406',zhanli:'137.0'}]}
},{hot:[{title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'}],
recommend:[{title:'刀剑神域',href:'https://www.iqing.com/book/59609',src:'./次元圣经 郑州轻工大学 动漫协会！_files/5b9c39b1-3485-4cb2-b7e7-fb7ce1f88df5.jpg',num:'322.5',profile:'虽然是游戏，但可不是闹着玩的！'}],
zhanli:{list1:[{title:'精灵幻想记',href:'https://www.zzuliacgn.com/book/34962',alt:'轻小说：精灵幻想记',src:'./次元圣经 郑州轻工大学 动漫协会！_files/680ed4d9-0568-4113-944d-95ab025ae17e.jpg',author:'HJ文库',zhanli:'291.4'}],
list2:[{title:'异世界料理道',href:'https://www.zzuliacgn.com/book/38406',zhanli:'137.0'}]}
},]
    }
},
watch:{
    datalist:{
        handler(){
            this.datas = this.datalist
            console.log('xxx111111111111')
            console.log(this.datas)
            // debugger
        },
        immediate: true,
        deep: true
    }
},
methods:{

},
created:function(){
    // this.ajaxstart()
    console.log(this.index)
    console.log(this.datas)
}
})

//总
let xxx = Vue.component('novel-section-container',{
    props:['sections'],
template:`
<section class="novel-container row">
    <novel-section  v-for="(section,index) in sectionss" :key= 'section.namex' :datalist = datalist :section=section :index=index></novel-section>
</section>
`,
data:function(){
    return {
        sectionss:this.sections,
        datalist:[{hot:[{title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'}],
        recommend:[{title:'刀剑神域',href:'https://www.iqing.com/book/59609',src:'./次元圣经 郑州轻工大学 动漫协会！_files/5b9c39b1-3485-4cb2-b7e7-fb7ce1f88df5.jpg',num:'322.5',profile:'虽然是游戏，但可不是闹着玩的！'}],
        zhanli:{list1:[{title:'精灵幻想记',href:'https://www.zzuliacgn.com/book/34962',alt:'轻小说：精灵幻想记',src:'./次元圣经 郑州轻工大学 动漫协会！_files/680ed4d9-0568-4113-944d-95ab025ae17e.jpg',author:'HJ文库',zhanli:'291.4'}],
        list2:[{title:'异世界料理道',href:'https://www.zzuliacgn.com/book/38406',zhanli:'137.0'}]}
    },
    {hot:[{title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'}],
    recommend:[{title:'刀剑神域',href:'https://www.iqing.com/book/59609',src:'./次元圣经 郑州轻工大学 动漫协会！_files/5b9c39b1-3485-4cb2-b7e7-fb7ce1f88df5.jpg',num:'322.5',profile:'虽然是游戏，但可不是闹着玩的！'}],
    zhanli:{list1:[{title:'精灵幻想记',href:'https://www.zzuliacgn.com/book/34962',alt:'轻小说：精灵幻想记',src:'./次元圣经 郑州轻工大学 动漫协会！_files/680ed4d9-0568-4113-944d-95ab025ae17e.jpg',author:'HJ文库',zhanli:'291.4'}],
    list2:[{title:'异世界料理道',href:'https://www.zzuliacgn.com/book/38406',zhanli:'137.0'}]}
},{hot:[{title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'}],
recommend:[{title:'刀剑神域',href:'https://www.iqing.com/book/59609',src:'./次元圣经 郑州轻工大学 动漫协会！_files/5b9c39b1-3485-4cb2-b7e7-fb7ce1f88df5.jpg',num:'322.5',profile:'虽然是游戏，但可不是闹着玩的！'}],
zhanli:{list1:[{title:'精灵幻想记',href:'https://www.zzuliacgn.com/book/34962',alt:'轻小说：精灵幻想记',src:'./次元圣经 郑州轻工大学 动漫协会！_files/680ed4d9-0568-4113-944d-95ab025ae17e.jpg',author:'HJ文库',zhanli:'291.4'}],
list2:[{title:'异世界料理道',href:'https://www.zzuliacgn.com/book/38406',zhanli:'137.0'}]}
},]
    }
},
watch:{
    datalist:{
        handler(){
            console.log('000000000000000000')
            console.log(this.datalist)
            debugger
        },
        immediate: true,
        deep: true
    }
},
methods:{
    ajaxstart:function (){
        let url = 'http://xxxx./'+this.namex
        let name=this.namex
        let _temp = this
        for(let i = 0;i<this.sections.length;i++){
            axios.get('/user', {
                params: {
                  type: this.sections[i].namex
                }
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
                let data = {
                    hot:[{title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'},
                    {title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'},
                    {title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'},
                    {title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'},
                    {title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'},
                    {title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'},
                   ],
                   recommend:[{title:'刀剑神域',href:'https://www.iqing.com/book/59609',src:'./次元圣经 郑州轻工大学 动漫协会！_files/5b9c39b1-3485-4cb2-b7e7-fb7ce1f88df5.jpg',num:'322.5',profile:'虽然是游戏，但可不是闹着玩的！'},
                   {title:'神话传说英雄的异世界奇谭',href:'https://www.iqing.com/book/70248',src:'./次元圣经 郑州轻工大学 动漫协会！_files/88d3c85c-e6cb-4af0-9afc-aa750342ae65.jpg',num:'11.6',profile:'我拿你当兄弟，你却要泡我重孙女？'},
                   {title:'OVERLORD 不死者之王',href:'https://www.iqing.com/book/69093',src:'./次元圣经 郑州轻工大学 动漫协会！_files/9938e4ff-0c36-4c3f-bb97-804893305fd6.jpg',num:'87.2',profile:'吾乃侍奉无上至尊之人！'},
                    {title:'Fate/Prototype 苍银的碎片',href:'https://www.iqing.com/book/35981',src:'./次元圣经 郑州轻工大学 动漫协会！_files/102fe928-efdf-4ec6-b26a-a7654f1ceb5b.jpg',num:'132.2',profile:'为了你，我愿意放弃一切！'},
                    ],
                    zhanli:{
                        list1:[{title:'精灵幻想记',href:'https://www.zzuliacgn.com/book/34962',alt:'轻小说：精灵幻想记',src:'./次元圣经 郑州轻工大学 动漫协会！_files/680ed4d9-0568-4113-944d-95ab025ae17e.jpg',author:'HJ文库',zhanli:'291.4'},
                        {title:'百炼霸王与圣约女武神',href:'https://www.zzuliacgn.com/book/34925',alt:'轻小说：百炼霸王与圣约女武神',src:'./次元圣经 郑州轻工大学 动漫协会！_files/e69f9980-88a5-4395-bb95-587af47477cc.jpg',author:'HJ文库',zhanli:'252.8'},
                        {title:'带着智能手机闯荡异世界',href:'https://www.zzuliacgn.com/book/39311',alt:'轻小说：带着智能手机闯荡异世界',src:'./次元圣经 郑州轻工大学 动漫协会！_files/f5f65df2-4791-4fb4-9b4d-1afbb9bd4daf.jpg',author:'HJ文库',zhanli:'907.9'}
                    ],
                        list2:[{title:'异世界料理道',href:'https://www.zzuliacgn.com/book/38406',zhanli:'137.0'},
                        {title:'战斗面包师与机械看板娘',href:'https://www.zzuliacgn.com/book/39673',zhanli:'31.1'},
                        {title:'刀剑神域',href:'https://www.zzuliacgn.com/book/59609',zhanli:'87.2'},
                        {title:'如果有妹妹就好了。',href:'https://www.zzuliacgn.com/book/54730',zhanli:'141.4'},
                        {title:'OVERLORD 不死者之王',href:'https://www.zzuliacgn.com/book/69093',zhanli:'43.2'},
                        {title:'为了女儿，我说不定连魔王都能干掉。',href:'https://www.zzuliacgn.com/book/57141',zhanli:'50.6'}]
                    }
                      
                   }
                   _temp.ajaxsuccess(data,i)
                   debugger
              });
        }
    },
    ajaxsuccess:function(data,i){
        console.log(i)
        console.log(this.sections[i].namex)
        this.datalist[i] = data
        Vue.set(this.datalist, i, data)
        debugger
        console.log(xxx.datalist)
    }
},
created:function(){
    this.ajaxstart()
console.log(this.datalist)
}
})



let app = new Vue({
    el:'#hot-novel',
    data:{
        sections:[{namex:'xx',url:'xx'},{namex:'yy',url:'yy'},{namex:'zz',url:'zz'}],
        //要加东西的话
        temp1:{
         list:[{title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'},
         {title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'},
         {title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'},
         {title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'},
         {title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'},
         {title:'我的姐姐有中二病',href:'https://www.iqing.com/book/34961',alt:'轻小说：我的姐姐有中二病',src:'http://rs.sfacg.com/web/novel/images/NovelCover/Big/2018/09/d36532df-2c23-4f5c-bebf-81fe948730fa.jpg',type:'轻小说',word:'58.1万字',state:'连载中',author:'嘎嘎'},
        ]   
        },
        temp2:{
            list:[{title:'刀剑神域',href:'https://www.iqing.com/book/59609',src:'./次元圣经 郑州轻工大学 动漫协会！_files/5b9c39b1-3485-4cb2-b7e7-fb7ce1f88df5.jpg',num:'322.5',profile:'虽然是游戏，但可不是闹着玩的！'},
            {title:'神话传说英雄的异世界奇谭',href:'https://www.iqing.com/book/70248',src:'./次元圣经 郑州轻工大学 动漫协会！_files/88d3c85c-e6cb-4af0-9afc-aa750342ae65.jpg',num:'11.6',profile:'我拿你当兄弟，你却要泡我重孙女？'},
            {title:'OVERLORD 不死者之王',href:'https://www.iqing.com/book/69093',src:'./次元圣经 郑州轻工大学 动漫协会！_files/9938e4ff-0c36-4c3f-bb97-804893305fd6.jpg',num:'87.2',profile:'吾乃侍奉无上至尊之人！'},
            {title:'Fate/Prototype 苍银的碎片',href:'https://www.iqing.com/book/35981',src:'./次元圣经 郑州轻工大学 动漫协会！_files/102fe928-efdf-4ec6-b26a-a7654f1ceb5b.jpg',num:'132.2',profile:'为了你，我愿意放弃一切！'},
        ]
        },
        temp3:{
            list1:[{title:'精灵幻想记',href:'https://www.zzuliacgn.com/book/34962',alt:'轻小说：精灵幻想记',src:'./次元圣经 郑州轻工大学 动漫协会！_files/680ed4d9-0568-4113-944d-95ab025ae17e.jpg',author:'HJ文库',zhanli:'291.4'},
            {title:'百炼霸王与圣约女武神',href:'https://www.zzuliacgn.com/book/34925',alt:'轻小说：百炼霸王与圣约女武神',src:'./次元圣经 郑州轻工大学 动漫协会！_files/e69f9980-88a5-4395-bb95-587af47477cc.jpg',author:'HJ文库',zhanli:'252.8'},
            {title:'带着智能手机闯荡异世界',href:'https://www.zzuliacgn.com/book/39311',alt:'轻小说：带着智能手机闯荡异世界',src:'./次元圣经 郑州轻工大学 动漫协会！_files/f5f65df2-4791-4fb4-9b4d-1afbb9bd4daf.jpg',author:'HJ文库',zhanli:'907.9'}
        ],
            list2:[{title:'异世界料理道',href:'https://www.zzuliacgn.com/book/38406',zhanli:'137.0'},
            {title:'战斗面包师与机械看板娘',href:'https://www.zzuliacgn.com/book/39673',zhanli:'31.1'},
            {title:'刀剑神域',href:'https://www.zzuliacgn.com/book/59609',zhanli:'87.2'},
            {title:'如果有妹妹就好了。',href:'https://www.zzuliacgn.com/book/54730',zhanli:'141.4'},
            {title:'OVERLORD 不死者之王',href:'https://www.zzuliacgn.com/book/69093',zhanli:'43.2'},
            {title:'为了女儿，我说不定连魔王都能干掉。',href:'https://www.zzuliacgn.com/book/57141',zhanli:'50.6'}]
        }

    },
    created:function(){
        //这里应该有一个获取数据赋值给temp1的函数
        
    }
})


}())