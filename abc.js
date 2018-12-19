// ==UserScript==
// @name         纪念币农业银行
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://coin.abchina.com/static/mobile/index.html*
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
    console.log('welcome');
    var name = $("input[name='name']");
    var identNo = $("input[name='identNo']");
    var mobile = $("input[name='mobile']");

    var html = "<div id='people_info' style='display:flex;flex-direction:column;position:fixed;right:0;top:0;width:200px;background:white;z-index:999'><ul>";
    people.forEach((e, i) => {
        html += "<li style='padding:10px;cursor:pointer;'>" + e.name + "</li>";
    });
    html += "</ul><input id='time' type='date'></div>";
    $('body').append(html);
    $('#people_info').find('li').click(function () {
        var index = $(this).index('#people_info li');
        var p = people[index];
        console.log(p);
        name.val(p.name);
        identNo.val(p.id);
        mobile.val(p.phone);
    });
    //$('#txtexchangedate').val('2019-01-25');
    $('#time').on('change', function () {
        $('#txtexchangedate').val($('#time').val());
    });
    // Your code here...
})();