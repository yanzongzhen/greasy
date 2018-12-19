// ==UserScript==
// @name         纪念币建设银行
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       yanzongzhen
// @match        *://jinianbi.ccb.com/tran/WCCMainPlatV5*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = $ || window.$;
    var people = [{
        "name": '人名1',
        "id": '21020312102031',
        "phone": '自己电话不超过5次'
    }, {
        "name": '人名2',
        "id": '21020312102031',
        "phone": '自己电话不超过5次'
    }, {
        "name": '人名3',
        "id": '21020312102031',
        "phone": '自己电话不超过5次'
    }, {
        "name": '人名4',
        "id": '21020312102031',
        "phone": '自己电话不超过5次'
    }, {
        "name": '人名5',
        "id": '21020312102031',
        "phone": '自己电话不超过5次'
    }];
    var html = "<div id='people_info'style='display:flex;flex-direction:column;position:fixed;right:0;top:0;width:200px;background:white;z-index:9999'><ul>";
    people.forEach((e, i) => {
        html += "<li style='padding:10px;cursor:pointer;'>" + e.name + "</li>";
    });
    html += "</ul><input id='time' type='date'></div>";
    $('body').append(html);
    $('#people_info').find('li').click(function () {
        var index = $(this).index('#people_info li');
        var p = people[index];
        console.log(p);
        $('#USR_NM').val(p.name);
        $('#CRDT_NO').val(p.id);
        $('#MBLPH_NO').val(p.phone);
    });
    $('#txtexchangedate').val('2019-01-25');
    $('#time').onchange(function () {
        $('#txtexchangedate').val($('#time').val());
    });
    // Your code here...
})();