//引入数据库模块
let mongoose = require('mongoose');

//1.;链接数据库
mongoose.connect('mongodb://localhost:27017/dp',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


//2.绑定数据库监听
mongoose.connection.on('open',function (err) {
    if(err){
        console.log('数据库连接失败',err)
    }else{
        console.log('数据库连接成功')
        //3.操作数据库
        console.log('操作数据库')
    }
})