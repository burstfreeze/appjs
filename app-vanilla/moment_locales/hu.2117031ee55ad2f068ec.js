/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[4339],{22138:function(e,r,t){!function(e){"use strict";var r="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function t(e,r,t,n){var a=e;switch(t){case"s":return n||r?"néhány másodperc":"néhány másodperce";case"m":return"egy"+(n||r?" perc":" perce");case"mm":return a+(n||r?" perc":" perce");case"h":return"egy"+(n||r?" óra":" órája");case"hh":return a+(n||r?" óra":" órája");case"d":return"egy"+(n||r?" nap":" napja");case"dd":return a+(n||r?" nap":" napja");case"M":return"egy"+(n||r?" hónap":" hónapja");case"MM":return a+(n||r?" hónap":" hónapja");case"y":return"egy"+(n||r?" év":" éve");case"yy":return a+(n||r?" év":" éve")}return""}function n(e){return(e?"":"[múlt] ")+"["+r[this.day()]+"] LT[-kor]"}e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,r,t){return e<12?!0===t?"de":"DE":!0===t?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return n.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return n.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t(30381))},65852:(e,r,t)=>{"use strict";var n=t(95318);Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){return c.apply(this,arguments)};var a=n(t(87757)),s=n(t(48926)),u=n(t(22138));function c(){return(c=(0,s.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[u.default]);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);