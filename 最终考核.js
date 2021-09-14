//2、site-nav 移动事件
var site_nav = new Vue({
    el: ".site-nav",
    data: {
        sjb_isShow: false,
        wzdh_isShow: false,
        wdtb_isShow: false,
        scj_isShow: false,
        sjzc_isShow: false
    },
    methods: {
        sjb_changeshow: function () {
            this.sjb_isShow = !this.sjb_isShow
        },
        sjb_t_changeshow: function () {
            this.sjb_isShow = true
        },
        wzdh_changeshow: function () {
            this.wzdh_isShow = !this.wzdh_isShow
        },
        wzdh_t_changeshow: function () {
            this.wzdh_isShow = true
        },
        wdtb_changeshow: function () {
            this.wdtb_isShow = !this.wdtb_isShow
        },
        wdtb_t_changeshow: function () {
            this.wdtb_isShow = true
        },
        scj_changeshow: function () {
            this.scj_isShow = !this.scj_isShow
        },
        scj_t_changeshow: function () {
            this.scj_isShow = true
        },
        sjzc_changeshow: function () {
            this.sjzc_isShow = !this.sjzc_isShow
        },
        sjzc_t_changeshow: function () {
            this.sjzc_isShow = true
        }
    }
})
$('.jianjiao').mouseenter(function () {
    var $sanjiao = $(this).children('b')
    $sanjiao.stop()
    $sanjiao.css("transform", "rotate(180deg)")
    $sanjiao.css("transition", "0.5s")
})
$('.jianjiao').mouseleave(function () {
    var $sanjiao = $(this).children('b')
    $sanjiao.stop()
    $sanjiao.css("transform", "none")
})


// 4、all-class
$(".all-class>.gwc").mouseenter(function () {
    var $bc = $(this).children(".gwc-list");
    $bc.stop();
    $bc.slideDown(500);
})

$(".all-class>.gwc").mouseleave(function () {
    var $bc = $(this).children(".gwc-list");
    $bc.stop();
    $bc.slideUp(500);
})



// 5.1、category
$(".category>.category-name>.tt").mouseenter(function () {
    var $box = $(this).children(".out-box")
    $box.css("display", "block")
    var $white_children = $(this).children(".white").children()
    $white_children.css("color", "white")
})
$(".category>.category-name>.tt").mouseleave(function () {
    var $box = $(this).children(".out-box")
    $box.css("display", "none")
    var $white_children = $(this).children(".white").children()
    $white_children.eq(1).css("color", "#515151")
    $white_children.eq(2).css("color", "#515151")
    $white_children.eq(0).css("color", "#E22A40")
})


// 5.2 slideshow-box

var app = new Vue({
    el: "#app",
    data: {
        // 闪现轮播图
        imgIndex: 0,
        timer: '',
        delayTimer: '',
        slideFlag: false,
        // 滑动轮播图
        slideIndex: 0,
        _timer: '',
        Xvalue: 0,
        _delayTimer: '',
        _slideFlag: false,
        banners: [
            { src: 'https://img.alicdn.com/tfs/TB1ZjpQhggP7K4jSZFqXXamhVXa-750-291.jpg_Q90.jpg' },
            { src: 'https://img.alicdn.com/imgextra/i4/O1CN01ijwDYn1qTDTqaShU7_!!6000000005496-0-tps-750-291.jpg_Q90.jpg' },
            { src: 'https://img.alicdn.com/imgextra/i3/O1CN01IfYOx81a7CacgrlkQ_!!6000000003282-2-tps-750-291.png_Q90.jpg' },
            { src: 'https://img.alicdn.com/imgextra/i4/O1CN01q6BdOi1Zi0o4JuCnv_!!6000000003227-0-tps-750-291.jpg_Q90.jpg' },
            { src: 'https://img.alicdn.com/imgextra/i1/O1CN01uLSnl51xh8pJxx8lz_!!6000000006474-0-tps-750-291.jpg_Q90.jpg' },
            { src: 'https://img.alicdn.com/imgextra/i2/O1CN01CK7i4n1MIjwmeIizK_!!6000000001412-0-tps-750-291.jpg_Q90.jpg' },
        ]
    },
    methods: {
        // 滑动轮播图
        _next() {
            this._delay();
            const lastIndex = this.banners.length - 1;
            if (this.slideIndex < lastIndex) {
                this.slideIndex += 1;
                this.Xvalue = - (this.slideIndex * 750);
            } else {
                this.slideIndex = 0;
                this.Xvalue = 0;
            }
        },
        _prev() {
            this._delay();
            const lastIndex = this.banners.length - 1;
            if (this.slideIndex > 0) {
                this.slideIndex -= 1;
                this.Xvalue = - (this.slideIndex * 750);
            } else {
                this.slideIndex = lastIndex;
                this.Xvalue = - (lastIndex * 750);
            }
        },
        _play() {
            clearInterval(this._timer);
            this._timer = setInterval(() => {
                if (!this._slideFlag) {
                    this._next();
                }
            }, 5000);
        },
        _jump(index) {
            this._delay();
            this.slideIndex = index;
            this.Xvalue = - (index * 750);
        },
        _delay() {
            this._slideFlag = true;
            clearInterval(this._delayTimer);
            this._delayTimer = setInterval(() => {
                this._slideFlag = false;
            }, 2000);
        },
    },
    computed: {
        transformStyle() {
            return {
                'transform': `translate3d(${this.Xvalue}px, 0, 0)`
            }
        }
    },
    mounted() {
        this._play();

        // 切换浏览器tab页进入
        window.onfocus = () => {
            this._timer = setInterval(() => {
                this._next();
            }, 2000);
        }
        // 切换浏览器tab页退出
        window.onblur = () => {
            clearInterval(this._timer);
        }
    }
})


// detail-class
var detail_class = new Vue({
    el: '.detail-class-wrap',
    data: {
        detail_box: [
            {
                title: "进口酒饮粮油",
                product_category: [
                    { name: "其它食用油" },
                    { name: "调味汁/油" },
                    { name: "调味料" },
                    { name: "大米" },
                    { name: "橄榄油" },
                    { name: "调味酱" },
                    { name: "烘焙原料" },
                    { name: "谷物冲饮" },
                    { name: "咖啡" }
                ],
                category_color: '#B373FB',
                li_box: [
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1998630277.2.XVkDVz&id=44848280079&acm=lb-zebra-27746-338432.1003.4.467318&scm=1003.4.lb-zebra-27746-338432.ITEM_44848280079_467318',
                        img_src: 'https://img.alicdn.com/imgextra/i2/TB1XkStLpXXXXXpXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【原装进口，淡淡果香】',
                        p: '西班牙进口 歌伦初榨橄榄油1000ml/瓶',
                        price: '118'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1998630277.2.OdsJe0&id=44848280079&acm=lb-zebra-27746-338432.1003.4.467318&scm=1003.4.lb-zebra-27746-338432.ITEM_44848280079_467318',
                        img_src: 'https://img.alicdn.com/imgextra/i3/TB16qryLpXXXXcPXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【 茉莉香米 香糯滑软】',
                        p: '泰国进口泰砻氏 泰国茉莉香米1kg 原装进口大米',
                        price: '35.6'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1998630277.3.OdsJe0&id=39291968669&acm=lb-zebra-27746-338432.1003.4.467318&scm=1003.4.lb-zebra-27746-338432.ITEM_39291968669_467318',
                        img_src: 'https://img.alicdn.com/imgextra/i2/TB1A6cDFFXXXXX8apXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '非转基因   自然发酵',
                        p: '韩国进口 膳府酿造酱油501  500ml  生蘸/凉拌',
                        price: '19'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1998630277.4.OdsJe0&id=18503489073&acm=lb-zebra-27746-338432.1003.4.467318&scm=1003.4.lb-zebra-27746-338432.ITEM_18503489073_467318',
                        img_src: 'https://img.alicdn.com/imgextra/i3/TB1oLEoIFXXXXbBXpXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【秋冬温润饮品】',
                        p: '韩国进口冲饮 全南 蜂蜜柚子茶 1kg  原装进口',
                        price: '47.8'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1998630277.5.RfNi27&id=13034137278&acm=lb-zebra-27746-338432.1003.4.467318&scm=1003.4.lb-zebra-27746-338432.ITEM_13034137278_467318',
                        img_src: 'https://img.alicdn.com/imgextra/i1/TB144QhGVXXXXb4XpXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【健康新早餐】',
                        p: '德国进口 亨利玉米片375g/盒 早餐冲饮麦片',
                        price: '35'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1998630277.6.RfNi27&id=521552034257&acm=lb-zebra-27746-338432.1003.4.467318&scm=1003.4.lb-zebra-27746-338432.ITEM_521552034257_467318',
                        img_src: 'https://img.alicdn.com/imgextra/i3/TB1Sg9AIVXXXXaUaXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【好品质的白咖啡】',
                        p: '马来西亚进口名馨榴莲粉速溶白咖啡480g南洋榴莲风味',
                        price: '49.2'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1998630277.7.RfNi27&id=38954310619&acm=lb-zebra-27746-338432.1003.4.467318&scm=1003.4.lb-zebra-27746-338432.ITEM_38954310619_467318',
                        img_src: 'https://img.alicdn.com/imgextra/i4/T1ihPRFINXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【韩国乐天 品质保证】',
                        p: '韩国进口 乐天爱情美女石榴果汁饮料180ml*15听礼盒',
                        price: '58'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1998630277.8.RfNi27&id=38020619798&acm=lb-zebra-27746-338432.1003.4.467318&scm=1003.4.lb-zebra-27746-338432.ITEM_38020619798_467318',
                        img_src: 'https://img.alicdn.com/imgextra/i1/TB1S1wGIpXXXXcGXVXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【24瓶实惠装】',
                        p: '台湾进口 金牌台湾啤酒330ml*24听/箱 台啤新鲜日期',
                        price: '189'
                    }
                ],

                discount: [
                    {
                        a_link: '',
                        img_link: ''
                    },
                ]

            },
            {
                title: "酒水饮料",
                product_category: [
                    { name: "白酒" },
                    { name: "黄酒" },
                    { name: "啤酒" },
                    { name: "果蔬饮料" },
                    { name: "水" },
                    { name: "茶饮料" },
                    { name: "碳酸饮料" },
                    { name: "功能饮料" },
                    { name: "加多宝" }
                ],
                category_color: '#83CFFF',
                li_box: [

                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780493.1.53GYx3&acm=lb-zebra-27746-338451.1003.4.467336&id=18602273441&scm=1003.4.lb-zebra-27746-338451.ITEM_18602273441_467336',
                        img_src: 'https://img.alicdn.com/imgextra/i4/36/O1CN01gNnupJ1C8WtAMUVhJ_!!36-0-lubanu.jpg_160x160q90.jpg',
                        h3: '',
                        p: '52度洋河海之蓝480ml绵柔口感浓香型白酒猫超自营商务宴请送礼',
                        price: '186'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780493.2.53GYx3&acm=lb-zebra-27746-338451.1003.4.467336&id=18743365313&scm=1003.4.lb-zebra-27746-338451.ITEM_18743365313_467336',
                        img_src: 'https://img.alicdn.com/imgextra/i2/142/O1CN01tj49211Cv4s2TO50C_!!142-0-lubanu.jpg_160x160q90.jpg',
                        h3: '',
                        p: '古井贡酒年份原浆献礼版50度500ml 浓香型白酒酒水酒类礼盒装送礼',
                        price: '165'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780493.3.53GYx3&acm=lb-zebra-27746-338451.1003.4.467336&id=18602297168&scm=1003.4.lb-zebra-27746-338451.ITEM_18602297168_467336',
                        img_src: 'https://img.alicdn.com/imgextra/i3/185/O1CN01BLjqiX1DElu52VTzz_!!185-0-lubanu.jpg_160x160q90.jpg',
                        h3: '',
                        p: '52度剑南春 浓香型白酒500ml酒厂直供水晶剑酒类四川国产白酒送礼',
                        price: '458'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780493.4.53GYx3&acm=lb-zebra-27746-338451.1003.4.467336&id=43096385578&scm=1003.4.lb-zebra-27746-338451.ITEM_43096385578_467336',
                        img_src: 'https://img.alicdn.com/imgextra/i4/92/O1CN019pefRc1CYB4Hhijze_!!92-0-lubanu.jpg_160x160q90.jpg',
                        h3: '',
                        p: '水井坊臻酿八号浓香高度白酒52度500ml纯粮食酒商务宴请礼盒送礼',
                        price: '359'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780493.5.53GYx3&acm=lb-zebra-27746-338451.1003.4.467336&id=43250741723&scm=1003.4.lb-zebra-27746-338451.ITEM_43250741723_467336',
                        img_src: 'https://img.alicdn.com/imgextra/i3/163/O1CN01SOliRn1D4hBln2UCw_!!163-0-lubanu.jpg_160x160q90.jpg',
                        h3: '',
                        p: '北京红星二锅头酒大二绿瓶56度500ml*12白酒（新老包装随机发货）',
                        price: '184'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780493.6.53GYx3&acm=lb-zebra-27746-338451.1003.4.467336&id=24185684799&scm=1003.4.lb-zebra-27746-338451.ITEM_24185684799_467336',
                        img_src: 'https://img.alicdn.com/imgextra/i4/725677994/O1CN01T2P2ir28vImQpq1bF_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '',
                        p: '农夫山泉饮用天然水4L *4/箱取自中国八大水源地整箱天然水矿泉水',
                        price: '32'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780493.7.53GYx3&acm=lb-zebra-27746-338451.1003.4.467336&id=43195539795&scm=1003.4.lb-zebra-27746-338451.ITEM_43195539795_467336',
                        img_src: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01NO7Le828vImSyi1dP_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '',
                        p: '山西汾酒杏花村53度青花20清香型高度白酒500ml单瓶天猫超市自营',
                        price: '559'
                    }
                ],

                discount: [
                    {
                        a_link: 'https://pages.tmall.com/wow/ark-pub/common/ee30c50a/tpl?spm=a3204.7084713.1996780493.17.53GYx3&wh_sid=a22cb6892db80699&mcBrandCard=true',
                        img_link: 'https://img.alicdn.com/imgextra/i3/O1CN01PJDFVS1XtnlfXLcPG_!!6000000002982-0-tps-372-645.jpg'
                    },
                    {
                        a_link: 'https://pages.tmall.com/wow/ark-pub/common/ee30c50a/tpl?spm=a3204.7084713.1996780493.18.53GYx3&wh_sid=9133b0539e914937&mcBrandCard=true',
                        img_link: 'https://img.alicdn.com/imgextra/i2/O1CN01YwP6ay1UuJMh5HEVo_!!6000000002577-0-tps-372-645.jpg'
                    },
                ]

            },
            {
                title: "米面杂粮",
                product_category: [
                    { name: "大米" },
                    { name: "食用菌" },
                    { name: "干菜/紫菜" },
                    { name: "木耳" },
                    { name: "桂圆干" },
                    { name: "海产品" },
                    { name: "百合" },
                    { name: "粗粮" },
                    { name: "莲子" }
                ],
                category_color: '#FFBB00',
                li_box: [

                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780481.1.iPjMAD&acm=lb-zebra-27746-338374.1003.4.467349&id=12536208029&scm=1003.4.lb-zebra-27746-338374.ITEM_12536208029_467349',
                        img_src: 'https://img.alicdn.com/imgextra/i3/725677994/O1CN01SdblrY28vImRu4Iby_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【独特酸辣】',
                        p: '张新成推荐农心辣白菜五连包120g*5泡面韩国泡菜方便面拉面辛拉面',
                        price: '27.5'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780481.2.iPjMAD&acm=lb-zebra-27746-338374.1003.4.467349&id=14905766423&scm=1003.4.lb-zebra-27746-338374.ITEM_14905766423_467349',
                        img_src: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01qdh7Lw28vImNBdUWI_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【肉质Q弹】',
                        p: '双汇王中王火腿肠30g*8支香肠肉类休闲零食速食配泡面网红零食',
                        price: '14'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780481.3.iPjMAD&acm=lb-zebra-27746-338374.1003.4.467349&id=18741761703&scm=1003.4.lb-zebra-27746-338374.ITEM_18741761703_467349',
                        img_src: 'https://img.alicdn.com/imgextra/i4/725677994/O1CN01KEnUBI28vImPdgm1c_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【长粒香】',
                        p: '十月稻田长粒香米5kg东北大米10斤粳米当季新米真空包装 精品官方',
                        price: '39.9'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780481.4.iPjMAD&acm=lb-zebra-27746-338374.1003.4.467349&id=13854644015&scm=1003.4.lb-zebra-27746-338374.ITEM_13854644015_467349',
                        img_src: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01dV9SV028vImRvXXFk_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【鱼米之乡 口感软糯】',
                        p: '福临门大米苏软香5kg苏北粳米 软糯香醇煮粥',
                        price: '27.9'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780481.5.iPjMAD&acm=lb-zebra-27746-338374.1003.4.467349&id=35019963196&scm=1003.4.lb-zebra-27746-338374.ITEM_35019963196_467349',
                        img_src: 'https://img.alicdn.com/imgextra/i2/725677994/O1CN01AgZcYu28vImN8mn8E_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '',
                        p: '雪龙瑞斯秋田小町大米 5KG/袋东北吉林大米寿司米小町米',
                        price: '38.8'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780481.6.iPjMAD&acm=lb-zebra-27746-338374.1003.4.467349&id=40533411582&scm=1003.4.lb-zebra-27746-338374.ITEM_40533411582_467349',
                        img_src: 'https://img.alicdn.com/imgextra/i4/103/O1CN01I47puw1CdDQTaO5r9_!!103-0-lubanu.jpg_160x160q90.jpg',
                        h3: '',
                        p: '包邮泰金香茉莉香米10斤 长粒香米5kg大米  非大米 玉香米 稻香',
                        price: '39.9'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780481.7.iPjMAD&acm=lb-zebra-27746-338374.1003.4.467349&id=42440150620&scm=1003.4.lb-zebra-27746-338374.ITEM_42440150620_467349',
                        img_src: 'https://img.alicdn.com/imgextra/i3/138/O1CN01RqB54Y1CtFHwPyXEo_!!138-0-lubanu.jpg_160x160q90.jpg',
                        h3: '',
                        p: '绿帝大号虾仁干货118g野生海虾大海米金钩开洋海鲜非特级干贝虾尾',
                        price: '49.8'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780481.8.iPjMAD&acm=lb-zebra-27746-338374.1003.4.467349&id=45280151504&scm=1003.4.lb-zebra-27746-338374.ITEM_45280151504_467349',
                        img_src: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN018kokgP28vImM4zdYr_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '',
                        p: '盛耳东北黑木耳150g/袋秋耳秋木耳东北特产干货 凉拌木耳腐竹',
                        price: '25.8'
                    }
                ],

                discount: [
                    {
                        a_link: '',
                        img_link: ''
                    }
                ]

            },
            {
                title: "油品调味",
                product_category: [
                    { name: "花生油" },
                    { name: "调和油" },
                    { name: "橄榄油" },
                    { name: "玉米油" },
                    { name: "酱油" },
                    { name: "腌制品" },
                    { name: "辣椒调料" },
                    { name: "调味酱" },
                    { name: "调味料" }
                ],
                category_color: '#F4935F',
                li_box: [

                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780482.1.iPjMAD&acm=lb-zebra-27746-338439.1003.4.467358&id=42970383295&scm=1003.4.lb-zebra-27746-338439.ITEM_42970383295_467358',
                        img_src: 'https://img.alicdn.com/imgextra/i4/725677994/O1CN017jQTzP28vImVJAR3X_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '',
                        p: '包邮福临门 葵花籽清香植物调和油  5L/桶健康油营养清淡家用',
                        price: '42.9'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780482.2.iPjMAD&acm=lb-zebra-27746-338439.1003.4.467358&id=12347949113&scm=1003.4.lb-zebra-27746-338439.ITEM_12347949113_467358',
                        img_src: 'https://img.alicdn.com/imgextra/i4/725677994/O1CN01eYO8ke28vImRaf2wk_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '',
                        p: '多力葵花籽食用油 5L/桶  加赠250ml小油 进口葵籽葵花籽油家用',
                        price: '74.9'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780482.3.iPjMAD&acm=lb-zebra-27746-338439.1003.4.467358&id=45517937143&scm=1003.4.lb-zebra-27746-338439.ITEM_45517937143_467358',
                        img_src: 'https://img.alicdn.com/imgextra/i2/179/O1CN01NrV2am1DC1WgKDFYv_!!179-0-lubanu.jpg_160x160q90.jpg',
                        h3: '',
                        p: '鲁花 一级花生油5.436L赠900ML 5S物理压榨健康 食用油桶装油',
                        price: '189.9'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780482.4.iPjMAD&acm=lb-zebra-27746-338439.1003.4.467358&id=20512827861&scm=1003.4.lb-zebra-27746-338439.ITEM_20512827861_467358',
                        img_src: 'https://img.alicdn.com/imgextra/i4/725677994/O1CN01xzXKRN28vImQTgNx8_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '',
                        p: '包邮金龙鱼 花生浓香型食用植物调和油 5L/桶 食用油 爆款家用',
                        price: '49.8'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780482.5.iPjMAD&acm=lb-zebra-27746-338439.1003.4.467358&id=520545232414&scm=1003.4.lb-zebra-27746-338439.ITEM_520545232414_467358',
                        img_src: 'https://img.alicdn.com/imgextra/i1/37/O1CN018zUCyp1C8zHjknQmW_!!37-0-lubanu.jpg_160x160q90.jpg',
                        h3: '',
                        p: '茂德公香辣牛肉酱225g拌饭辣椒酱意大利面酱下饭拌面酱调味酱酱料',
                        price: '25.8'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780482.7.iPjMAD&acm=lb-zebra-27746-338439.1003.4.467358&id=35053161714&scm=1003.4.lb-zebra-27746-338439.ITEM_35053161714_467358',
                        img_src: 'https://img.alicdn.com/imgextra/i2/63/O1CN01K5ohc71CKta9XGXrH_!!63-0-lubanu.jpg_160x160q90.jpg',
                        h3: '',
                        p: '海天酱油味极鲜特级生抽380ml酿造特级生抽炒菜凉拌火锅蘸料调味',
                        price: '14.8'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780482.8.iPjMAD&acm=lb-zebra-27746-338439.1003.4.467358&id=40549498546&scm=1003.4.lb-zebra-27746-338439.ITEM_40549498546_467358',
                        img_src: 'https://img.alicdn.com/imgextra/i4/146/O1CN01Q6MJ811CwuSNC9IGl_!!146-0-lubanu.jpg_160x160q90.jpg',
                        h3: '',
                        p: '鲁花自然鲜酱香酱油1.28L 特级生抽 非转基因 厨房调料调味品',
                        price: '29.9'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.1996780481.8.iPjMAD&acm=lb-zebra-27746-338374.1003.4.467349&id=45280151504&scm=1003.4.lb-zebra-27746-338374.ITEM_45280151504_467349',
                        img_src: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN018kokgP28vImM4zdYr_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '',
                        p: '盛耳东北黑木耳150g/袋秋耳秋木耳东北特产干货 凉拌木耳腐竹',
                        price: '25.8'
                    }
                ],

                discount: [
                    {
                        a_link: '',
                        img_link: ''
                    }
                ]

            },
            {
                title: "美容护肤",
                product_category: [
                    { name: "乳液面霜" },
                    { name: "面膜" },
                    { name: "进口卸妆用品" },
                    { name: "进口面部洗护" },
                    { name: "男士控油" },
                    { name: "足膜/足霜" },
                    { name: "护手霜" },
                    { name: "身体乳" },
                    { name: "进口面部护理" }
                ],
                category_color: '#FF909F',
                li_box: [

                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.2996780338.1.iPjMAD&acm=lb-zebra-27746-338423.1003.4.467371&id=19775142891&scm=1003.4.lb-zebra-27746-338423.ITEM_19775142891_467371',
                        img_src: 'https://img.alicdn.com/imgextra/i3/166/O1CN01t9Yt8L1D64N9Wcav2_!!166-0-lubanu.jpg_160x160q90.jpg',
                        h3: '【超值实惠大包装】',
                        p: '【官方】Lily Bell/丽丽贝尔经典化妆棉优质棉双层亲肤222枚/包',
                        price: '19.9'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.2996780338.2.iPjMAD&acm=lb-zebra-27746-338423.1003.4.467371&id=13188199957&scm=1003.4.lb-zebra-27746-338423.ITEM_13188199957_467371',
                        img_src: 'https://img.alicdn.com/imgextra/i2/725677994/O1CN01aMYxMR28vImLNvSIz_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【冰爽控油深层洁净】',
                        p: '包邮曼秀雷敦冰爽活炭洁面乳去油保湿收缩毛孔控油去黑头男洗面奶',
                        price: '44.9'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.2996780338.3.iPjMAD&acm=lb-zebra-27746-338423.1003.4.467371&id=43904982180&scm=1003.4.lb-zebra-27746-338423.ITEM_43904982180_467371',
                        img_src: 'https://img.alicdn.com/imgextra/i3/108/O1CN01d93Gg11CfVP8pjpkG_!!108-0-lubanu.jpg_160x160q90.jpg',
                        h3: '【面部精华晒后修复】',
                        p: '包邮完美正品芦荟胶40g面霜芦荟胶补水保湿温和不刺激单支装祛痘',
                        price: '40'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.2996780338.4.iPjMAD&acm=lb-zebra-27746-338423.1003.4.467371&id=15888926789&scm=1003.4.lb-zebra-27746-338423.ITEM_15888926789_467371',
                        img_src: 'https://img.alicdn.com/imgextra/i3/725677994/O1CN01xKhA6k28vImU40AN9_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【温和滋润 舒缓修护】',
                        p: 'Cetaphil/丝塔芙蓝朋友洗面奶洁面118ml温和保湿低刺激敏感肌适用',
                        price: '58'
                    }
                    ,
                    {
                        link: 'https://detail.tmall.com/item.htm?spm=a3204.7084713.2996780338.5.iPjMAD&acm=lb-zebra-27746-338423.1003.4.467371&id=13223685970&scm=1003.4.lb-zebra-27746-338423.ITEM_13223685970_467371',
                        img_src: 'https://img.alicdn.com/imgextra/i3/725677994/O1CN01jrRd3b28vImJ8ZZn2_!!0-item_pic.jpg_160x160q90.jpg',
                        h3: '【快速吸收长效滋润】',
                        p: '大宝SOD蜜男士护肤保湿乳液补水滋润面部护理易吸收女',
                        price: '14'
                    }

                ],

                discount: [
                    {
                        a_link: '',
                        img_link: ''
                    }
                ]

            }
        ]
    }
})


var search = new Vue({
    el: '#search-frame',
    data: {
        key: '',
        NODE: [],

    },
    methods: {
        request: function () {
            // alert("https://suggest.taobao.com/sug?code=utf-8&q=" + this.key)
            // axios.get("https://suggest.taobao.com/sug?code=utf-8&q=" + this.key).then(function (response) {
            //     console.log(response)
            // })
            _this = this
            _this.NODE.length = 0
            $.ajax({

                url: "https://suggest.taobao.com/sug?code=utf-8&q=" + this.key,
                type: 'GET',
                dataType: 'JSONP',  // 处理Ajax跨域问题
                success: function (res) {
                    for (var i = 0; i < res.result.length; i++) {
                        _this.NODE.push(res.result[i][0])
                    }
                }
            });

        }
    }
})
