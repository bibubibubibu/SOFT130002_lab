/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    var count = 1;
    var date = new Date();
    var currenttime = date.getMinutes();
    setInterval(function(){
        date = new Date();
        if(count>=1024||date.getMinutes()!=currenttime) return; //分别判断两个条件
        count*=2;
        document.getElementById('showtime').innerHTML = count;
        console.log(count);
    },5000);
}
// testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    var telepatten = /^1\d{10}$/;
    var tresult = telepatten.test(telephone);
    var emailpatten = /^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9_-]+((\.[a-zA-Z0-9_-]+){1,4})$/;
    var eresult = emailpatten.test(mail);
    document.getElementById('output').innerHTML = tresult+","+eresult;
    console.log("手机号匹配结果："+tresult);
    console.log("email匹配结果："+eresult);
}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    var strlis = str.split(" ");
    var repeat = new Set();
    var c = 0;
    for(var i = 0;i<strlis.length;i++){
        if(strlis[i].toLowerCase()==strlis[i+1].toLowerCase()) {//判断某两个字符串是否重复
            repeat.add(strlis[i]+" "+strlis[i+1]);
            i++;
        }
        if(c>=10) break;
    }
    document.getElementById('out').innerHTML = repeat;
    console.log(repeat)
}


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和
            _hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    var i = 0;
    var j = 0;
    var output = new Set();
    var count = 0;
    for(i;i<wantInput.length;i++){
        if(wantInput.charAt(i)==actualInput.charAt(j)) j++;
        else{
            output.add(wantInput.toUpperCase().charAt(i))
        }
    }
    document.getElementById('testout').innerHTML = output;
    console.log(output);
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    var words = str.split(" ");
    var output = '';
    for(var i = words.length-1;i>0;i--){
        output+=words[i]+" ";
    }
    output+=words[0];
    document.getElementById('reverced').innerHTML = output;
    console.log(output)
}

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function testtwosum() {
        var list  = [1,2,3,4];
        twoSum(list,5);
}

function twoSum(nums, target) {
    var remain = nums.map(x => {
        return target - x;
    });
    console.log(remain);
        var out = new Array();
        var count = 0;
        for(var i = 0;i<nums.length;i++){
            var tpt = remain.map(tocut => tocut - nums[i])
            tpt.map(function (zero,index) {
                if(zero==0&&index>=i) out[count++]= i+","+index
            })
        }
    document.getElementById('findout').innerHTML = out;
        console.log(out)
}



/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    var maxlen = 0;
    var tptlen = 1;
    for(var i = 1;i<str.length;i++){
        if(str.charAt(i)!=str.charAt(i-1))tptlen++;
        else{
            if(tptlen>maxlen) maxlen=tptlen;
            tptlen = 1;
        }
    }
    document.getElementById('maxrepeat').innerHTML = maxlen;
    console.log(maxlen)
}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}

function DevelopingCountry() {
    this.sayHi = new function () {
        console.log("Hi,i am a developing country.");
    }
}
DevelopingCountry.prototype = new Country();

function PoorCountry(){
    this.saySaid = new function () {
        console.log("I am a sad poor country.");
    }
}
PoorCountry.prototype = new Country();

function DevelopedCountry(){
    this.sayHappy = new function () {
        console.log("I am a Happy developed country.");
    }
}
DevelopedCountry.prototype = new Country();

/*
    测试继承的函数在这里
    直接调用即可打印
*/

function testInherit() {
    let dpc = new DevelopingCountry();
    let pc = new PoorCountry();
    let ddc = new DevelopedCountry();
    dpc.sayHi;
    pc.saySaid;
    ddc.sayHappy;
}