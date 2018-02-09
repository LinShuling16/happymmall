/*
* @Author: linshuling
* @Date:   2018-02-06 17:34:27
* @Last Modified by:   linshuling
* @Last Modified time: 2018-02-09 19:55:28
*/
'use strict';
require('./index.css');
var _mm   = require('util/mm.js'),
    _user = require('service/user-service.js'),
    _cart = require('service/cart-service.js');
//导航
var nav = {
    init : function(){
        this.bindEvent();
        this.loadUserInfo();
        this.loadCarCount();
        return this;//返回nav本身
    },
    bindEvent : function(){
        //登录点击事件
        $('.js-login').click(function(){
            _mm.doLogin();
        });
        //注册点击事件
        $('.js-register').click(function(){
            window.location.href = './register.html';
        });
        //退出点击事件
        $('.js-logout').click(function(){
            _user.logout(function(res){
                window.location.reload();
            },function(errMsg){
                _mm.errorTips(errMsg);
            });
        });
    },
    //加载用户信息
    loadUserInfo : function(){
        _user.checkLogin(function(res){
            $('.user.not-login').hide().siblings('.user.login').show()
            .find('.username').text(res.username);
        },function(errMsg){
           //do nothing
        });
    },
    //加载购物车数量
    loadCarCount : function(){
        _cart.getCartCount(function(res){
            $('.nav .cart-cont').text(res || 0);
        },function(errMsg){
            $('.nav .cart-cont').text(0);
        });
    }

};

module.exports = nav.init();