/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[9682],{67691:function(e,t,_){!function(e){"use strict";function t(e,t){var _=e.split("_");return t%10==1&&t%100!=11?_[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?_[1]:_[2]}function _(e,_,n){return"m"===n?_?"хвилина":"хвилину":"h"===n?_?"година":"годину":e+" "+t({mm:_?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:_?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[n],+e)}function n(e,t){var _={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};return e?_[/(\[[ВвУу]\]) ?dddd/.test(t)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)?"genitive":"nominative"][e.day()]:_.nominative}function a(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}e.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:n,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:a("[Сьогодні "),nextDay:a("[Завтра "),lastDay:a("[Вчора "),nextWeek:a("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return a("[Минулої] dddd [").call(this);case 1:case 2:case 4:return a("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:_,mm:_,h:"годину",hh:_,d:"день",dd:_,M:"місяць",MM:_,y:"рік",yy:_},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,t,_){return e<4?"ночі":e<12?"ранку":e<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,doy:7}})}(_(30381))},11967:(e,t,_)=>{"use strict";var n=_(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return i.apply(this,arguments)};var a=n(_(87757)),s=n(_(48926)),r=n(_(67691));function i(){return(i=(0,s.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[r.default]);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);