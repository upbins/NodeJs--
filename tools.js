var tools = {
    random_int : function(start,end){
            var num = start + (end - start) * Math.random();
            return Math.floor(num);
    }
}
module.exports = tools