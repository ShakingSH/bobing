// pages/game/game.js 
const app = getApp() 
Page({ 
    /** 
     * 页面的初始数据 
     */ 
    data: { 
        dicepath1:"../../images/1.jpg", 
        dicepath2:"../../images/1.jpg", 
        dicepath3:"../../images/1.jpg", 
        dicepath4:"../../images/1.jpg", 
        dicepath5:"../../images/1.jpg", 
        dicepath6:"../../images/1.jpg", 
        count:10, 
        tap:true 
    }, 
 
    /** 
     * 生命周期函数--监听页面加载 
     */ 
    onLoad: function (options) { 
 
    }, 
 
    /** 
     * 生命周期函数--监听页面初次渲染完成 
     */ 
    onReady: function () { 
 
    }, 
 
    /** 
     * 生命周期函数--监听页面显示 
     */ 
    onShow: function () { 
 
    }, 
 
    /** 
     * 生命周期函数--监听页面隐藏 
     */ 
    onHide: function () { 
 
    }, 
 
    /** 
     * 生命周期函数--监听页面卸载 
     */ 
    onUnload: function () { 
 
    }, 
 
    /** 
     * 页面相关事件处理函数--监听用户下拉动作 
     */ 
    onPullDownRefresh: function () { 
 
    }, 
 
    /** 
     * 页面上拉触底事件的处理函数 
     */ 
    onReachBottom: function () { 
 
    }, 
 
    /** 
     * 用户点击右上角分享 
     */ 
    onShareAppMessage: function () { 
 
    }, 
    init: function () { 
        var arr = this.randomFun(); 
        var dice1='../../images/'+(arr[0]+1)+'.jpg'; 
        this.setData({ 
            dicepath1:dice1 
        }) 
        var dice2='../../images/'+(arr[1]+1)+'.jpg'; 
        this.setData({ 
            dicepath2:dice2 
        }) 
        var dice3='../../images/'+(arr[2]+1)+'.jpg'; 
        this.setData({ 
            dicepath3:dice3 
        }) 
        var dice4='../../images/'+(arr[3]+1)+'.jpg'; 
        this.setData({ 
            dicepath4:dice4 
        }) 
        var dice5='../../images/'+(arr[4]+1)+'.jpg'; 
        this.setData({ 
            dicepath5:dice5 
        }) 
        var dice6='../../images/'+(arr[5]+1)+'.jpg'; 
        this.setData({ 
            dicepath6:dice6 
        }) 
        this.animate('#redpacket0',[ 
             {top: "10px",left: "10px",}, 
             {top: "30px",left: "20px",rotate:(360)}, 
             {top: "70px",left: "34px",rotate:(720),},     
             {top: "100px",left: "44px",rotate:(1080),},     
             {top: "130px",left: "57px",rotate:(1440),}, 
             {top: "150px",left: "69px",rotate:(3600),}, 
             {top: "140px",left: "77px",rotate:(2160),}, 
             {top: "148px",left: "64px",rotate:(2520),}, 
             {top: "170px",left: "40px",rotate:(3240),}, 
             {top: "181px",left: "99px"}, 
        ],1500,function () {}.bind(this)); 
        this.animate('#redpacket1',[ 
            {top: "10px",left: "10px",}, 
            {top: "30px",left: "40px",rotate:(360)}, 
            {top: "70px",left: "54px",rotate:(720),},     
            {top: "100px",left: "64px",rotate:(1080),},     
            {top: "130px",left: "77px",rotate:(1440),}, 
            {top: "150px",left: "80px",rotate:(3600),}, 
            {top: "140px",left: "104px",rotate:(2160),}, 
            {top: "148px",left: "134px",rotate:(2520),}, 
            {top: "170px",left: "174px",rotate:(3240),}, 
            {top: "145px",left: "200px"}, 
       ],1500,function () {}.bind(this)); 
       this.animate('#redpacket2',[ 
        {top: "10px",left: "10px",}, 
        {top: "48px",left: "50px",rotate:(360)}, 
        {top: "70px",left: "70px",rotate:(720),},     
        {top: "100px",left: "80px",rotate:(1080),},     
        {top: "130px",left: "77px",rotate:(1440),}, 
        {top: "150px",left: "80px",rotate:(3600),}, 
        {top: "140px",left: "134px",rotate:(2160),}, 
        {top: "190px",left: "150px",rotate:(2520),}, 
        {top: "171px",left: "174px",rotate:(3240),}, 
        {top: "180px",left: "187px"}, 
   ],1500,function () {}.bind(this)); 
   this.animate('#redpacket3',[ 
    {top: "10px",left: "10px",}, 
    {top: "48px",left: "50px",rotate:(360)}, 
    {top: "70px",left: "100px",rotate:(720),},     
    {top: "100px",left: "130px",rotate:(1080),},     
    {top: "130px",left: "140px",rotate:(1440),}, 
    {top: "150px",left: "150px",rotate:(3600),}, 
    {top: "140px",left: "1600px",rotate:(2160),}, 
    {top: "190px",left: "150px",rotate:(2520),}, 
    {top: "171px",left: "174px",rotate:(3240),}, 
    {top: "133px",left: "167px"}, 
],1500,function () {}.bind(this)); 
this.animate('#redpacket4',[ 
    {top: "10px",left: "10px",}, 
    {top: "50px",left: "70px",rotate:(360)}, 
    {top: "100px",left: "90px",rotate:(720),},     
    {top: "130px",left: "100px",rotate:(1080),},     
    {top: "130px",left: "120px",rotate:(1440),}, 
    {top: "150px",left: "130px",rotate:(3600),}, 
    {top: "140px",left: "144px",rotate:(2160),}, 
    {top: "190px",left: "177px",rotate:(2520),}, 
    {top: "171px",left: "153px",rotate:(3240),}, 
    {top: "173px",left: "147px"}, 
],1500,function () {}.bind(this)); 
this.animate('#redpacket5',[ 
    {top: "10px",left: "10px",}, 
    {top: "30px",left: "20px",rotate:(360)}, 
    {top: "70px",left: "34px",rotate:(720),},     
    {top: "90px",left: "44px",rotate:(1080),},     
    {top: "100px",left: "57px",rotate:(1440),}, 
    {top: "120px",left: "69px",rotate:(3600),}, 
    {top: "130px",left: "77px",rotate:(2160),}, 
    {top: "128px",left: "64px",rotate:(2520),}, 
    {top: "135px",left: "80px",rotate:(3240),}, 
    {top: "141px",left: "99px"}, 
],1500,function () {}.bind(this)); 
    }, 
    randomFun: function () { 
        var arr = []; 
        for (var i = 0; i < 6; i++) { 
            arr.push(Math.floor(Math.random() * 6)); 
        } 
        return arr; 
    }, 
    begin: function () { 
        console.log("begin"); 
        var num=this.data.count; 
        num--; 
        this.setData({ 
            tap:false, 
           count:num 
        }) 
        this.init(); 
    }, 
})