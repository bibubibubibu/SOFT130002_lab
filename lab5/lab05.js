//1. 获取url中名为name的参数。在URL输入框输入url，点击同行submit按钮后，其中的参数名为name的参数值需要出现在Argument value输入框内。
//如果没有名为name的参数，那么可以在Argument value输入框出现任何值。
//请仅在showWindowHref函数内写代码。

//提示：url指代 （若干字符串）?（参数名1）=（参数1值）&（参数2）=（参数2值）...  这样的字符串。具体可以上网查找。例如：hjsdghgbj?name=666666&group=876。
//url、url_submit、url_result指代对应id的三个对象，其中url和url_result可以通过url.value或者url_result.value获得值。
//字符数组处理可以使用相关函数
let url = document.getElementById("url");
let url_submit = document.getElementById("url_submit");
let url_result = document.getElementById("url-result");
url_submit.addEventListener('click',showWindowHref);
function showWindowHref(){
    var query = document.getElementById("url").value;
    var keys = query.split("?");
    var urlkey = keys[keys.length-1];
    var vars = urlkey.split("&");
    var output = 'not found'
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == 'name'){output = pair[1];break;}
    }
    document.getElementById("url-result").value = output;
}


//2. 每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
//注意：你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
//与设置时间相关的函数可以上网查找。

//提示：mul为html中id为"mul"的元素对象，可直接通过mul.value获得其内的输入值。
let mul = document.getElementById("mul");
function timeTest(){
    var t = 1;
    setInterval(function(){
        t = t*2;
        if(t>1024) return;
        document.getElementById("mul").value = t;},5000);

}



//3. 判断输入框most里出现最多的字符，并统计出来。统计出是信息在most_result输入框内以"The most character is:" + index + " times:" + max的形式显示。
//如果多个出现数量一样则选择一个即可。
//请仅在arrSameStr函数内写代码。

//提示：most、result、most_submit的解释及其.value与上面类似。
let most = document.getElementById("most");
let result = document.getElementById("most-result");
let most_submit = document.getElementById("most_submit");
most_submit.addEventListener('click',arrSameStr);
function arrSameStr(){
    var data = document.getElementById("most").value;
    var length = data.length;
    var datas = [];
    var num = [];
    var index = 0;
    for(var i=0;i<length;i++) {
        if(datas.indexOf(data[i])<0) {
            datas[index] = data[i];
            num[data[i]] = 1;
            index++;
        }
        else {
            num[data[i]]++;
        }
    }
    Array.prototype.forEach = function (call) {
        for(var i=0;i<this.length;i++)
            call(this[i]);
    }
    var max = num[datas[0]];
    var datamax = datas[0];
    for(var i=1;i<datas.length;i++){
        if(max<num[datas[i]]) {
            max = num[datas[i]];
            datamax = datas[i];
        }
    }
    document.getElementById("most-result").value = "The most character is:" + datamax + " times:" + max;
}
