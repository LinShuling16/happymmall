/*
* @Author: linshuling
* @Date:   2018-02-10 15:00:06
* @Last Modified by:   linshuling
* @Last Modified time: 2018-02-10 15:39:03
*/
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');
$(function(){
    var type     =  _mm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    //显示对应的提示信息
    $element.show();
})