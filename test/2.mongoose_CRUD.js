//引入mongoose
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('open', function (err) {
    if (err) console.log('数据库链接失败', err);
    else console.log('数据库链接成功');
})

//3.操作数据库

//1.请来一个帮你看门的保安 ------ 引入模式对象
let Schema = mongoose.Schema;

//2.制定进入你家的规则 --------  创建约束对象
let teachersRule = new Schema({
    tea_id:{
        type:String, //限制学号必须为：字符串
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    hobby:[String],
    info:Schema.Types.Mixed,////接收所有类型
    date:{
        type:Date,
        default:Date.now()
    },
    enable_flag:{
        type:String,
        default:'Y'
    }
})

//3.创建模型对象
let teaModule =  mongoose.model('teachers',teachersRule)

//4 增删改查

//增 --- c (create)
teaModule.create({
    stu_id:'004',
    name:'强',
    age:'42',
    sex:'男',
    hobby:['女','打代码','打篮球'], //限制爱好只能为数组，数组中的每一项必须为字符串
    info:'一个风一样的男子', //接收所有类型
},function (err,data) {
    if (!err)   console.log(data);
    else console.log(err);
})

//查 findOne
teaModule.findOne({name:'强'},{age:42},function (err,data) {
    if (!err) console.log(data)
    else console.log(err)
})
//改 updateOne
teaModule.updateOne({name:'强'},{age:'20'},function (err,data) {
    if (!err) console.log(data)
    else console.log(err)
})
//删 deleteMany
teaModule.deleteMany({name:'强'},function (err,data) {
    if (!err) console.log(data)
    else console.log(err)
})