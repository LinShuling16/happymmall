/*
* @Author: linshuling
* @Date:   2018-02-09 17:28:26
* @Last Modified by:   linshuling
* @Last Modified time: 2018-02-09 20:04:45
*/
'use strict';
var _mm = require('util/mm.js');

var _cart  = {
    //检查登录状态
    getCartCount : function(resolve,reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/get_cart_product_count.do'),
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _cart;