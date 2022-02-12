(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);;
!function($){"use strict";var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},hasOwn=Object.prototype.hasOwnProperty;$.toJSON="object"==typeof JSON&&JSON.stringify?JSON.stringify:function(t){if(null===t)return"null";var e,r,n,o,i=$.type(t);if("undefined"!==i){if("number"===i||"boolean"===i)return String(t);if("string"===i)return $.quoteString(t);if("function"==typeof t.toJSON)return $.toJSON(t.toJSON());if("date"===i){var f=t.getUTCMonth()+1,u=t.getUTCDate(),s=t.getUTCFullYear(),a=t.getUTCHours(),l=t.getUTCMinutes(),c=t.getUTCSeconds(),p=t.getUTCMilliseconds();return'"'+s+"-"+(f=f<10?"0"+f:f)+"-"+(u=u<10?"0"+u:u)+"T"+(a=a<10?"0"+a:a)+":"+(l=l<10?"0"+l:l)+":"+(c=c<10?"0"+c:c)+"."+(p=(p=p<100?"0"+p:p)<10?"0"+p:p)+'Z"'}if(e=[],$.isArray(t)){for(r=0;r<t.length;r++)e.push($.toJSON(t[r])||"null");return"["+e.join(",")+"]"}if("object"==typeof t){for(r in t)if(hasOwn.call(t,r)){if("number"===(i=typeof r))n='"'+r+'"';else{if("string"!==i)continue;n=$.quoteString(r)}"function"!==(i=typeof t[r])&&"undefined"!==i&&(o=$.toJSON(t[r]),e.push(n+":"+o))}return"{"+e.join(",")+"}"}}},$.evalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){return eval("("+str+")")},$.secureEvalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered))return eval("("+str+")");throw new SyntaxError("Error parsing JSON, source is not valid.")},$.quoteString=function(t){return t.match(escape)?'"'+t.replace(escape,function(t){var e=meta[t];return"string"==typeof e?e:(e=t.charCodeAt(),"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16))})+'"':'"'+t+'"'}}(jQuery);;
var gform;gform||(document.addEventListener("gform_main_scripts_loaded",function(){gform.scriptsLoaded=!0}),window.addEventListener("DOMContentLoaded",function(){gform.domLoaded=!0}),gform={domLoaded:!1,scriptsLoaded:!1,initializeOnLoaded:function(o){gform.domLoaded&&gform.scriptsLoaded?o():!gform.domLoaded&&gform.scriptsLoaded?window.addEventListener("DOMContentLoaded",o):document.addEventListener("gform_main_scripts_loaded",o)},hooks:{action:{},filter:{}},addAction:function(o,n,r,t){gform.addHook("action",o,n,r,t)},addFilter:function(o,n,r,t){gform.addHook("filter",o,n,r,t)},doAction:function(o){gform.doHook("action",o,arguments)},applyFilters:function(o){return gform.doHook("filter",o,arguments)},removeAction:function(o,n){gform.removeHook("action",o,n)},removeFilter:function(o,n,r){gform.removeHook("filter",o,n,r)},addHook:function(o,n,r,t,i){null==gform.hooks[o][n]&&(gform.hooks[o][n]=[]);var e=gform.hooks[o][n];null==i&&(i=n+"_"+e.length),gform.hooks[o][n].push({tag:i,callable:r,priority:t=null==t?10:t})},doHook:function(n,o,r){var t;if(r=Array.prototype.slice.call(r,1),null!=gform.hooks[n][o]&&((o=gform.hooks[n][o]).sort(function(o,n){return o.priority-n.priority}),o.forEach(function(o){"function"!=typeof(t=o.callable)&&(t=window[t]),"action"==n?t.apply(null,r):r[0]=t.apply(null,r)})),"filter"==n)return r[0]},removeHook:function(o,n,t,i){var r;null!=gform.hooks[o][n]&&(r=(r=gform.hooks[o][n]).filter(function(o,n,r){return!!(null!=i&&i!=o.tag||null!=t&&t!=o.priority)}),gform.hooks[o][n]=r)}});;
var gform=window.gform||{};function announceAJAXValidationErrors(){jQuery(".gform_validation_errors").length&&(jQuery("#gf_form_focus").focus(),setTimeout(function(){wp.a11y.speak(jQuery(".gform_validation_errors > h2").text())},1e3))}function gformBindFormatPricingFields(){jQuery(".ginput_amount, .ginput_donation_amount").off("change.gform").on("change.gform",function(){gformFormatPricingField(this)}),jQuery(".ginput_amount, .ginput_donation_amount").each(function(){gformFormatPricingField(this)})}function Currency(e){this.currency=e,this.toNumber=function(e){return this.isNumeric(e)?parseFloat(e):gformCleanNumber(e,this.currency.symbol_right,this.currency.symbol_left,this.currency.decimal_separator)},this.toMoney=function(e,t){if(!1===(e=!(t=t||!1)?gformCleanNumber(e,this.currency.symbol_right,this.currency.symbol_left,this.currency.decimal_separator):e))return"";"-"==(e+=negative="")[0]&&(e=parseFloat(e.substr(1)),negative="-"),money=this.numberFormat(e,this.currency.decimals,this.currency.decimal_separator,this.currency.thousand_separator),"0.00"==money&&(negative="");t=this.currency.symbol_left?this.currency.symbol_left+this.currency.symbol_padding:"",e=this.currency.symbol_right?this.currency.symbol_padding+this.currency.symbol_right:"";return money=negative+this.htmlDecode(t)+money+this.htmlDecode(e),money},this.numberFormat=function(e,t,r,i,n){n=void 0===n||n,e=(e+"").replace(",","").replace(" ","");var o=isFinite(+e)?+e:0,a=isFinite(+t)?Math.abs(t):0,e=void 0===i?",":i,i=void 0===r?".":r,r="";return 3<(r="0"==t?(o+=1e-10,(""+Math.round(o)).split(".")):(-1==t?""+o:function(e,t){t=Math.pow(10,t);return""+Math.round(e*t)/t}(o+=1e-10,a)).split("."))[0].length&&(r[0]=r[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e)),n&&(r[1]||"").length<a&&(r[1]=r[1]||"",r[1]+=new Array(a-r[1].length+1).join("0")),r.join(i)},this.isNumeric=function(e){return gformIsNumber(e)},this.htmlDecode=function(e){var t,r,i=e,n=i.match(/&#[0-9]{1,5};/g);if(null!=n)for(var o=0;o<n.length;o++)i=-32768<=(t=(r=n[o]).substring(2,r.length-1))&&t<=65535?i.replace(r,String.fromCharCode(t)):i.replace(r,"");return i},this.getCode=function(){return"code"in this.currency&&""!==this.currency.code&&this.currency.code}}function gformCleanNumber(e,t,r,i){var n="",o="",a="",l=!1;e=(e=(e=(e+=" ").replace(/&.*?;/g,"")).replace(t,"")).replace(r,"");for(var s=0;s<e.length;s++)a=e.substr(s,1),0<=parseInt(a,10)&&parseInt(a,10)<=9||a==i?n+=a:"-"==a&&(l=!0);for(s=0;s<n.length;s++)"0"<=(a=n.substr(s,1))&&a<="9"?o+=a:a==i&&(o+=".");return!!gformIsNumber(o=l?"-"+o:o)&&parseFloat(o)}function gformGetDecimalSeparator(e){switch(e){case"currency":var t=new Currency(gf_global.gf_currency_config).currency.decimal_separator;break;case"decimal_comma":t=",";break;default:t="."}return t}function gformIsNumber(e){return!isNaN(parseFloat(e))&&isFinite(e)}function gformIsNumeric(e,t){switch(t){case"decimal_dot":return new RegExp("^(-?[0-9]{1,3}(?:,?[0-9]{3})*(?:.[0-9]+)?)$").test(e);case"decimal_comma":return new RegExp("^(-?[0-9]{1,3}(?:.?[0-9]{3})*(?:,[0-9]+)?)$").test(e)}return!1}function gformDeleteUploadedFile(e,t,r){var i=jQuery("#field_"+e+"_"+t),n=jQuery(r).parent().index();i.find(".ginput_preview").eq(n).remove(),i.find('input[type="file"],.validation_message,#extensions_message_'+e+"_"+t).removeClass("gform_hidden"),i.find(".ginput_post_image_file").show(),i.find('input[type="text"]').val("");var o=jQuery("#gform_uploaded_files_"+e).val();!o||(r=jQuery.secureEvalJSON(o))&&(o="input_"+t,0<(t=i.find("#gform_multifile_upload_"+e+"_"+t)).length?(r[o].splice(n,1),t=(n=t.data("settings")).gf_vars.max_files,jQuery("#"+n.gf_vars.message_id).html(""),r[o].length<t&&gfMultiFileUploader.toggleDisabled(n,!1)):r[o]=null,jQuery("#gform_uploaded_files_"+e).val(jQuery.toJSON(r)))}void 0===jQuery.fn.prop&&(jQuery.fn.prop=jQuery.fn.attr),jQuery(document).on("gform_post_render",announceAJAXValidationErrors),jQuery(document).bind("gform_post_render",gformBindFormatPricingFields),gform.instances={},gform.console={error:function(e){window.console&&console.error(e)},info:function(e){window.console&&console.info(e)},log:function(e){window.console&&console.log(e)}},gform.adminUtils={handleUnsavedChanges:function(e){var t=null;jQuery(e).find("input, select, textarea").on("change keyup",function(){void 0===jQuery(this).attr("onChange")&&void 0===jQuery(this).attr("onClick")&&(t=!0),"enable-api"===(jQuery(this).next().data("jsButton")||jQuery(this).data("jsButton"))&&(t=null)}),"gravityformswebapi"===this.getUrlParameter("subview")&&gf_webapi_vars.api_enabled!==gf_webapi_vars.enable_api_checkbox_checked&&(t=!0),jQuery(e).on("submit",function(){t=null}),window.onbeforeunload=function(){return t}},getUrlParameter:function(e){for(var t=window.location.search.substring(1).split("&"),r=0;r<t.length;r++){var i=t[r].split("=");if(i[0]==e)return i[1]}},handleIEDisplay:function(){var e=!gform.tools.isIE(),t=gform.tools.getNodes("show-if-ie",!0),r=gform.tools.getNodes("hide-if-ie",!0),i=gform.tools.getNodes("show-if-not-ie",!0),n=gform.tools.getNodes("hide-if-not-ie",!0);e?(t.forEach(function(e){e.classList.add("active")}),r.forEach(function(e){e.classList.remove("active")})):(i.forEach(function(e){e.classList.add("active")}),n.forEach(function(e){e.classList.remove("active")}))}},window.HandleUnsavedChanges=gform.adminUtils.handleUnsavedChanges,gform.tools={debounce:function(i,n,o){var a,l,s;return function(){var e=this,t=arguments,r=o&&!a;t===l&&""+s==""+i&&clearTimeout(a);a=setTimeout(function(){a=null,o||i.apply(e,t)},n),s=i,l=t,r&&i.apply(e,t)}},defaultFor:function(e,t){return void 0!==e?e:t},getFocusable:function(e){return e=this.defaultFor(e,document),this.convertElements(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(function(e){return this.visible(e)}.bind(this))},htmlToElement:function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild},elementToHTML:function(e){return e.outerHTML},convertElements:function(e){for(var t=[],r=e.length;r--;t.unshift(e[r]));return t},delegate:function(e,r,i,n){e=document.querySelectorAll(e);[].forEach.call(e,function(e,t){e.addEventListener(r,function(e){var t;((t=e.target).matches||t.msMatchesSelector).call(t,i)&&n(e)})})},getClosest:function(e,t){var r,i;for(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some(function(e){return"function"==typeof document.body[e]&&(r=e,!0)});e;){if((i=e.parentElement)&&i[r](t))return i;e=i}return null},getNodes:function(e,t,r,i){if(!e)return gform.console.error("Please pass a selector to gform.tools.getNodes"),[];e=(r=this.defaultFor(r,document)).querySelectorAll(i?e:'[data-js="'+e+'"]');return e=t?this.convertElements(e):e},mergeObjects:function(){for(var e={},t=0;t<arguments.length;t+=1)for(var r=arguments[t],i=Object.keys(r),n=0;n<i.length;n+=1)e[i[n]]=r[i[n]];return e},setAttr:function(e,t,r,i,n){if(!e||!t||!r)return gform.console.error("Please pass a selector, attribute and value to gform.tools.setAttr"),[];i=this.defaultFor(i,document),n=this.defaultFor(n,0),setTimeout(function(){gform.tools.getNodes(e,!0,i,!0).forEach(function(e){e.setAttribute(t,r)})},n)},isRtl:function(){if("rtl"===jQuery("html").attr("dir"))return!0},isIE:function(){return window.document.documentMode},trigger:function(t,e,r,i){var n;if(t=this.defaultFor(t,""),e=this.defaultFor(e,document),r=this.defaultFor(r,!1),i=this.defaultFor(i,{}),r)(n=document.createEvent("HTMLEvents")).initEvent(t,!0,!1);else try{n=new CustomEvent(t,{detail:i})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,i)}e.dispatchEvent(n)},uniqueId:function(e){return(e=this.defaultFor(e,"id"))+"-"+Math.random().toString(36).substr(2,9)},visible:function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},stripSlashes:function(e){return(e+"").replace(/\\(.?)/g,function(e,t){switch(t){case"\\":return"\\";case"0":return"\0";case"":return"";default:return t}})},getCookie:function(e){for(var t=document.cookie.split(";"),r=0;r<t.length;r++){var i=t[r].split("=");if(e==i[0].trim())return decodeURIComponent(i[1])}return null},setCookie:function(e,t,r,i){var n,o="",a=t;r&&((n=new Date).setTime(n.getTime()+24*r*60*60*1e3),o=" expires="+n.toUTCString()),i&&(a=""!==(i=gform.tools.getCookie(e))&&null!==i?i+","+t:t),document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(a)+";"+o},removeCookie:function(e){gform.tools.setCookie(e,"",-1)}},gform.a11y={},gform.options={jqEditorAccordions:{heightStyle:"content",collapsible:!0,animate:!1,create:function(e){gform.tools.setAttr(".ui-accordion-header","tabindex","0",e.target,100)},activate:function(e){gform.tools.setAttr(".ui-accordion-header","tabindex","0",e.target,100)}}};var _gformPriceFields=new Array,_anyProductSelected;function gformIsHidden(e){return"none"==e.parents(".gfield").not(".gfield_hidden_product").css("display")}var gformCalculateTotalPrice=gform.tools.debounce(function(e){if(_gformPriceFields[e]){var t=0;_anyProductSelected=!1;for(var r=0;r<_gformPriceFields[e].length;r++)t+=gformCalculateProductPrice(e,_gformPriceFields[e][r]);_anyProductSelected&&(t+=gformGetShippingPrice(e)),window.gform_product_total&&(t=window.gform_product_total(e,t)),gformUpdateTotalFieldPrice(e,t=gform.applyFilters("gform_product_total",t,e))}},50,!1);function gformUpdateTotalFieldPrice(e,t){var r=jQuery(".ginput_total_"+e);if(!(0<!r.length)){var i,n=document.querySelector("#gform_wrapper_"+e+".gform_legacy_markup_wrapper"),e=n?r.next():r,t={current:String(e.val()),new:String(t),newFormatted:gformFormatMoney(String(t),!0)};if(i=t,n?i.current!==i.new:i.current!==i.newFormatted){if(n)return e.val(t.new).trigger("change"),void r.html(t.newFormatted);e.val(t.new).trigger("change"),e.val(t.newFormatted)}}}function gformGetShippingPrice(e){var t=jQuery(".gfield_shipping_"+e+" input[readonly], .gfield_shipping_"+e+" select, .gfield_shipping_"+e+" input:checked"),e=0;return gformToNumber(e=1==t.length&&!gformIsHidden(t)?t.attr("readonly")?t.val():gformGetPrice(t.val()):e)}function gformGetFieldId(e){e=jQuery(e).attr("id").split("_");return e.length<=0?0:e[e.length-1]}function gformCalculateProductPrice(n,e){var t="_"+n+"_"+e;jQuery(".gfield_option"+t+", .gfield_shipping_"+n).find("select").each(function(){var e=jQuery(this),r=gformGetPrice(e.val()),i=e.attr("id").split("_")[2];e.children("option").each(function(){var e=jQuery(this),t=gformGetOptionLabel(e,e.val(),r,n,i);e.html(t)})}),jQuery(".gfield_option"+t).find(".gfield_checkbox").find("input:checkbox").each(function(){var e=jQuery(this),t=e.attr("id"),r=t.split("_")[2],t=t.replace("choice_","#label_"),t=jQuery(t),r=gformGetOptionLabel(t,e.val(),0,n,r);t.html(r)}),jQuery(".gfield_option"+t+", .gfield_shipping_"+n).find(".gfield_radio").each(function(){var r=0,e=jQuery(this),i=e.attr("id").split("_")[2],t=e.find("input:radio:checked").val();t&&(r=gformGetPrice(t)),e.find("input:radio").each(function(){var e=jQuery(this),t=e.attr("id").replace("choice_","#label_"),t=jQuery(t);t&&(e=gformGetOptionLabel(t,e.val(),r,n,i),t.html(e))})});var r=gformGetBasePrice(n,e),e=gformGetProductQuantity(n,e);return 0<e&&(jQuery(".gfield_option"+t).find("input:checked, select").each(function(){gformIsHidden(jQuery(this))||(r+=gformGetPrice(jQuery(this).val()))}),_anyProductSelected=!0),r=gformRoundPrice(r*=e)}function gformGetProductQuantity(e,t){if(!gformIsProductSelected(e,t))return 0;var r,i,n=jQuery("#ginput_quantity_"+e+"_"+t);return gformIsHidden(n=!n.length?jQuery("#input_"+e+"_"+t+"_1"):n)?0:(0<n.length?r=n.val():(r=1,0<(n=jQuery(".gfield_quantity_"+e+"_"+t+" :input")).length&&(r=n.val(),i=gf_get_field_number_format(gf_get_input_id_by_html_id(n.attr("id")),e,"value"))),r=(r=gformCleanNumber(r,"","",gformGetDecimalSeparator(i=i||"currency")))||0)}function gformIsProductSelected(e,t){e="_"+e+"_"+t,t=jQuery("#ginput_base_price"+e+", .gfield_donation"+e+' input[type="text"], .gfield_product'+e+" .ginput_amount");return!(!t.val()||gformIsHidden(t))||!(!(t=jQuery(".gfield_product"+e+" select, .gfield_product"+e+" input:checked, .gfield_donation"+e+" select, .gfield_donation"+e+" input:checked")).val()||gformIsHidden(t))}function gformGetBasePrice(e,t){var r="_"+e+"_"+t,e=0,t=jQuery("#ginput_base_price"+r+", .gfield_donation"+r+' input[type="text"], .gfield_product'+r+" .ginput_amount");return 0<t.length?e=t.val():(r=(t=jQuery(".gfield_product"+r+" select, .gfield_product"+r+" input:checked, .gfield_donation"+r+" select, .gfield_donation"+r+" input:checked")).val())&&(e=1<(r=r.split("|")).length?r[1]:0),gformIsHidden(t)&&(e=0),!1===(e=new Currency(gf_global.gf_currency_config).toNumber(e))?0:e}function gformFormatMoney(e,t){return gf_global.gf_currency_config?new Currency(gf_global.gf_currency_config).toMoney(e,t):e}function gformFormatPricingField(e){var t;gf_global.gf_currency_config&&(t=new Currency(gf_global.gf_currency_config).toMoney(jQuery(e).val()),jQuery(e).val(t))}function gformToNumber(e){return new Currency(gf_global.gf_currency_config).toNumber(e)}function gformGetPriceDifference(e,t){e=parseFloat(t)-parseFloat(e);return price=gformFormatMoney(e,!0),0<e&&(price="+"+price),price}function gformGetOptionLabel(e,t,r,i,n){e=jQuery(e);var o=gformGetPrice(t),a=e.attr("price"),t=e.html().replace(/<span(.*)<\/span>/i,"").replace(a,""),a=0==gformToNumber(a=gformGetPriceDifference(r,o))?"":" "+a;e.attr("price",a);e="option"==e[0].tagName.toLowerCase()?" "+a:"<span class='ginput_price'>"+a+"</span>",a=t+e;return a=window.gform_format_option_label?gform_format_option_label(a,t,e,r,o,i,n):a}function gformGetProductIds(e,t){for(var r=(jQuery(t).hasClass(e)?jQuery(t):jQuery(t).parents("."+e)).attr("class").split(" "),i=0;i<r.length;i++)if(r[i].substr(0,e.length)==e&&r[i]!=e)return{formId:r[i].split("_")[2],productFieldId:r[i].split("_")[3]};return{formId:0,fieldId:0}}function gformGetPrice(e){var t=e.split("|"),e=new Currency(gf_global.gf_currency_config);return 1<t.length&&!1!==e.toNumber(t[1])?e.toNumber(t[1]):0}function gformRoundPrice(e){var t=new Currency(gf_global.gf_currency_config),t=t.numberFormat(e,t.currency.decimals,".","");return parseFloat(t)}function gformRegisterPriceField(e){_gformPriceFields[e.formId]||(_gformPriceFields[e.formId]=new Array);for(var t=0;t<_gformPriceFields[e.formId].length;t++)if(_gformPriceFields[e.formId][t]==e.productFieldId)return;_gformPriceFields[e.formId].push(e.productFieldId)}function gformInitPriceFields(){for(formId in jQuery(".gfield_price").each(function(){gformRegisterPriceField(gformGetProductIds("gfield_price",this)),jQuery(this).on("input change",'input[type="text"], input[type="number"], select',function(){var e=gformGetProductIds("gfield_price",this);0==e.formId&&(e=gformGetProductIds("gfield_shipping",this)),jQuery(document).trigger("gform_price_change",[e,this]),gformCalculateTotalPrice(e.formId)}),jQuery(this).on("click",'input[type="radio"], input[type="checkbox"]',function(){var e=gformGetProductIds("gfield_price",this);0==e.formId&&(e=gformGetProductIds("gfield_shipping",this)),jQuery(document).trigger("gform_price_change",[e,this]),gformCalculateTotalPrice(e.formId)})}),_gformPriceFields)_gformPriceFields.hasOwnProperty(formId)&&gformCalculateTotalPrice(formId)}function gformShowPasswordStrength(e){var t=gformPasswordStrength(document.getElementById(e).value,document.getElementById(e+"_2")?document.getElementById(e+"_2").value:""),r=window.gf_text["password_"+t],i="unknown"===t?"blank":t;jQuery("#"+e+"_strength").val(t),jQuery("#"+e+"_strength_indicator").removeClass("blank mismatch short good bad strong").addClass(i).html(r)}function gformPasswordStrength(e,t){if(e.length<=0)return"blank";var r=wp.passwordStrength.hasOwnProperty("userInputDisallowedList")?wp.passwordStrength.userInputDisallowedList():wp.passwordStrength.userInputBlacklist();switch(wp.passwordStrength.meter(e,r,t)){case-1:return"unknown";case 2:return"bad";case 3:return"good";case 4:return"strong";case 5:return"mismatch";default:return"short"}}function gformToggleShowPassword(e){var t=jQuery("#"+e),r=t.parent().find("button"),i=r.find("span");switch(t.attr("type")){case"password":t.attr("type","text"),r.attr("label",r.attr("data-label-hide")),i.removeClass("dashicons-hidden").addClass("dashicons-visibility");break;case"text":t.attr("type","password"),r.attr("label",r.attr("data-label-show")),i.removeClass("dashicons-visibility").addClass("dashicons-hidden")}}function gformToggleCheckboxes(e){var t,r=jQuery(e),i=r.is('input[type="checkbox"]'),n=i?r.parent():r.prev(),o=n.find("label"),a=n.parent().find(".gchoice:not( .gchoice_select_all )"),l=gf_get_form_id_by_html_id(n.parents(".gfield").attr("id")),n=rgars(window,"gf_global/gfcalc/"+l);t=i?e.checked:"boolean"==typeof(e=r.data("checked"))?!e:!(1===parseInt(e)),a.each(function(){jQuery('input[type="checkbox"]',this).prop("checked",t).trigger("change"),"function"==typeof jQuery('input[type="checkbox"]',this)[0].onclick&&jQuery('input[type="checkbox"]',this)[0].onclick()}),i?o.html(t?o.data("label-deselect"):o.data("label-select")):(r.html(t?r.data("label-deselect"):r.data("label-select")),r.data("checked",t)),wp.a11y.speak(t?gf_field_checkbox.strings.selected:gf_field_checkbox.strings.deselected),n&&n.runCalcs(l,n.formulaFields)}function gformToggleRadioOther(e){var t=e.parentElement.parentElement.parentElement.lastChild.querySelector('input[type="text"]');t&&(t.disabled="gf_other_choice"!==e.value)}function gformAddListItem(e,t){var r,i,n=jQuery(e);n.hasClass("gfield_icon_disabled")||(i=(r=n.parents(".gfield_list_group")).clone(),e=r.parents(".gfield_list_container"),n=i.find(":input:last").attr("tabindex"),i.find("input, select, textarea").attr("tabindex",n).not(":checkbox, :radio").val(""),i.find(":checkbox, :radio").prop("checked",!1),i=gform.applyFilters("gform_list_item_pre_add",i,r),r.after(i),gformToggleIcons(e,t),gformAdjustClasses(e),gformAdjustRowAttributes(e),gform.doAction("gform_list_post_item_add",i,e),wp.a11y.speak(window.gf_global.strings.newRowAdded))}function gformDeleteListItem(e,t){var r=jQuery(e).parents(".gfield_list_group"),e=r.parents(".gfield_list_container");r.remove(),gformToggleIcons(e,t),gformAdjustClasses(e),gform.doAction("gform_list_post_item_delete",e),wp.a11y.speak(window.gf_global.strings.rowRemoved)}function gformAdjustClasses(e){e.find(".gfield_list_group").each(function(e){e=(e+1)%2==0?"gfield_list_row_even":"gfield_list_row_odd";jQuery(this).removeClass("gfield_list_row_odd gfield_list_row_even").addClass(e)})}function gformAdjustRowAttributes(e){e.parents(".gform_wrapper").hasClass("gform_legacy_markup_wrapper")||e.find(".gfield_list_group").each(function(e){var t=jQuery(this).find("input, select, textarea");t.attr("aria-label",t.data("aria-label-template").format(e+1));t=jQuery(this).find(".delete_list_item");t.attr("aria-label",t.data("aria-label-template").format(e+1))})}function gformToggleIcons(e,t){var r=e.find(".gfield_list_group").length,i=e.find(".add_list_item");e.find(".delete_list_item").css("visibility",1==r?"hidden":"visible"),0<t&&t<=r?(i.data("title",e.find(".add_list_item").attr("title")),i.addClass("gfield_icon_disabled").attr("title","")):0<t&&(i.removeClass("gfield_icon_disabled"),i.data("title")&&i.attr("title",i.data("title")))}function gformAddRepeaterItem(e,t){var r,i,n=jQuery(e);n.hasClass("gfield_icon_disabled")||(i=(r=n.closest(".gfield_repeater_item")).clone(),e=r.closest(".gfield_repeater_container"),n=i.find(":input:last").attr("tabindex"),i.find('input[type!="hidden"], select, textarea').attr("tabindex",n).not(":checkbox, :radio").val(""),i.find(":checkbox, :radio").prop("checked",!1),i.find(".validation_message").remove(),i=gform.applyFilters("gform_repeater_item_pre_add",i,r),r.after(i),i.children(".gfield_repeater_cell").each(function(){var e=jQuery(this).find(".gfield_repeater_container").first();0<e.length&&(resetContainerItems=function(e){e.children(".gfield_repeater_items").children(".gfield_repeater_item").each(function(e){jQuery(this).children(".gfield_repeater_cell").each(function(){var e=jQuery(this).find(".gfield_repeater_container").first();0<e.length&&resetContainerItems(e)})}),e.children(".gfield_repeater_items").children(".gfield_repeater_item").not(":first").remove()},resetContainerItems(e))}),gformResetRepeaterAttributes(e),"function"==typeof gformInitDatepicker&&(e.find(".ui-datepicker-trigger").remove(),e.find(".hasDatepicker").removeClass("hasDatepicker"),gformInitDatepicker()),gformBindFormatPricingFields(),gformToggleRepeaterButtons(e,t),gform.doAction("gform_repeater_post_item_add",i,e))}function gformDeleteRepeaterItem(e,t){var r=jQuery(e).closest(".gfield_repeater_item"),e=r.closest(".gfield_repeater_container");r.remove(),gformResetRepeaterAttributes(e),gformToggleRepeaterButtons(e,t),gform.doAction("gform_repeater_post_item_delete",e)}function gformResetRepeaterAttributes(e,g,m){var _=null;void 0===g&&(g=0),void 0===m&&(m=0),e.children(".gfield_repeater_items").children(".gfield_repeater_item").each(function(){jQuery(this).children(".gfield_repeater_cell").each(function(){var u=jQuery(this),e=jQuery(this).find(".gfield_repeater_container").first();0<e.length?gformResetRepeaterAttributes(e,g+1,m):jQuery(this).find("input, select, textarea, :checkbox, :radio").each(function(){var e=jQuery(this),t=e.attr("name");if(void 0!==t){var r=/^(input_[^\[]*)((\[[0-9]+\])+)/.exec(t);if(r){r[1];for(var i=r[2],n=/\[([0-9]+)\]/g,o=[],a=n.exec(i);null!=a;)o.push(a[1]),a=n.exec(i);for(var l=r[1],s="",c=(o=o.reverse()).length-1;0<=c;c--)c==g?(l+="["+m+"]",s+="-"+m):(l+="["+o[c]+"]",s+="-"+o[c]);var f=e.attr("id"),d=u.find("label[for='"+f+"']");!f||(f=f.match(/((choice|input)_[0-9|_]*)-/))&&f[2]&&(s=f[1]+s,d.attr("for",s),e.attr("id",s));d=t.replace(r[0],l),r=jQuery('input[name="'+d+'"]').is(":checked");e.is(":radio")&&e.is(":checked")&&t!==d&&r&&(null!==_&&_.prop("checked",!0),e.prop("checked",!1),_=e),e.attr("name",d)}}})}),0===g&&m++}),null!==_&&(_.prop("checked",!0),_=null)}function gformToggleRepeaterButtons(e){var t=e.closest(".gfield_repeater_wrapper").data("max_items"),r=e.children(".gfield_repeater_items").children(".gfield_repeater_item").length,i=e.children(".gfield_repeater_items").children(".gfield_repeater_item").children(".gfield_repeater_buttons"),n=i.children(".add_repeater_item");i.children(".remove_repeater_item").css("visibility",1==r?"hidden":"visible"),0<t&&t<=r?(n.data("title",i.children(".add_repeater_item").attr("title")),n.addClass("gfield_icon_disabled").attr("title","")):0<t&&(n.removeClass("gfield_icon_disabled"),n.data("title")&&n.attr("title",n.data("title"))),e.children(".gfield_repeater_items").children(".gfield_repeater_item").children(".gfield_repeater_cell").each(function(e){var t=jQuery(this).find(".gfield_repeater_container").first();0<t.length&&gformToggleRepeaterButtons(t)})}function gformMatchCard(e){var t=gformFindCardType(jQuery("#"+e).val()),e=jQuery("#"+e).parents(".gfield").find(".gform_card_icon_container");t?(jQuery(e).find(".gform_card_icon").removeClass("gform_card_icon_selected").addClass("gform_card_icon_inactive"),jQuery(e).find(".gform_card_icon_"+t).removeClass("gform_card_icon_inactive").addClass("gform_card_icon_selected")):jQuery(e).find(".gform_card_icon").removeClass("gform_card_icon_selected gform_card_icon_inactive")}function gformFindCardType(e){if(e.length<4)return!1;var t=window.gf_cc_rules,r=new Array;for(type in t)if(t.hasOwnProperty(type))for(i in t[type])if(t[type].hasOwnProperty(i)&&0===t[type][i].indexOf(e.substring(0,t[type][i].length))){r[r.length]=type;break}return 1==r.length&&r[0].toLowerCase()}function gformToggleCreditCard(){jQuery("#gform_payment_method_creditcard").is(":checked")?jQuery(".gform_card_fields_container").slideDown():jQuery(".gform_card_fields_container").slideUp()}function gformInitChosenFields(e,r){return jQuery(e).each(function(){var e,t=jQuery(this);"rtl"==jQuery("html").attr("dir")&&t.addClass("chosen-rtl chzn-rtl"),t.is(":visible")&&0==t.siblings(".chosen-container").length&&(e=gform.applyFilters("gform_chosen_options",{no_results_text:r},t),t.chosen(e))})}function gformInitCurrencyFormatFields(e){jQuery(e).each(function(){jQuery(this).val(gformFormatMoney(jQuery(this).val()))}).change(function(e){jQuery(this).val(gformFormatMoney(jQuery(this).val()))})}var GFMergeTag=function(){GFMergeTag.getMergeTagValue=function(e,t,r){r=(r=void 0===r?"":r).replace(":","");var i,n=parseInt(t,10);0<jQuery("#input_"+e+"_"+n+"_copy_values_activated:checked").length&&(i=jQuery("#input_"+e+"_"+n+"_copy_values_activated").data("source_field_id"),t=t==n?i:t.toString().replace(n+".",i+"."),n=i);var o=jQuery("#field_"+e+"_"+n),a=o.find((n==t?'input[name^="input_'+n+'"]':'input[name="input_'+t+'"]')+', select[name^="input_'+t+'"], textarea[name="input_'+t+'"]');if(!(!window.gf_check_field_rule||"show"==gf_check_field_rule(e,n,!0,"")))return"";o.find(".ginput_container_email").hasClass("ginput_complex")&&(a=a.first());t=gform.applyFilters("gform_value_merge_tag_"+e+"_"+n,!1,a,r);if(!1!==t)return t;switch(t="",r){case"label":return o.find(".gfield_label").text();case"qty":if(o.hasClass("gfield_price"))return!1===(f=gformGetProductQuantity(e,n))||""===f?0:f}if(1===(a="checkbox"===a.prop("type")||"radio"===a.prop("type")?a.filter(":checked"):a).length){if(!a.is("select")&&"radio"!==a.prop("type")&&"checkbox"!==a.prop("type")||""!==r)void 0===f&&(f=a.val());else if((f=a.is("select")?a.find("option:selected"):("radio"===a.prop("type")&&a.parent().hasClass("gchoice_button")?a.parent().siblings(".gchoice_label").find("label"):a.next("label")).clone()).find("span").remove(),1===f.length)f=f.text();else{for(var l=[],s=0;s<f.length;s++)l[s]=jQuery(f[s]).text();f=l}t=jQuery.isArray(f)?f.join(", "):"string"==typeof f?GFMergeTag.formatValue(f,r):""}else if(1<a.length){for(var c,f=[],s=0;s<a.length;s++)"checkbox"===a.prop("type")&&""===r?((c=jQuery(a[s]).next("label").clone()).find("span").remove(),f[s]=GFMergeTag.formatValue(c.text(),r),c.remove()):f[s]=GFMergeTag.formatValue(jQuery(a[s]).val(),r);t=f.join(", ")}return t},GFMergeTag.replaceMergeTags=function(e,t){var r,n,o=GFMergeTag.parseMergeTags(t);for(i in o)o.hasOwnProperty(i)&&(r=o[i][1],parseInt(r,10),n=null==o[i][3]?"":o[i][3].replace(":",""),n=GFMergeTag.getMergeTagValue(e,r,n),t=t.replace(o[i][0],n));return t},GFMergeTag.formatValue=function(e,t){var r="",r=1<(e=e.split("|")).length&&("price"===t||"currency"===t)?gformToNumber(e[1]):e[0];switch(t){case"price":r=!1===(r=gformToNumber(r))?"":r;break;case"currency":r=!1===(r=gformFormatMoney(r,!1))?"":r;break;case"numeric":return!1===(r=gformToNumber(r))?0:r;default:r=r.trim()}return r},GFMergeTag.parseMergeTags=function(e,t){void 0===t&&(t=/{[^{]*?:(\d+(\.\d+)?)(:(.*?))?}/i);for(var r=[];t.test(e);){var i=r.length;r[i]=t.exec(e),e=e.replace(""+r[i][0],"")}return r}};new GFMergeTag;var GFCalc=function(formId,formulaFields){this.formId=formId,this.formulaFields=formulaFields,this.exprPatt=/^[0-9 -/*\(\)]+$/i,this.isCalculating={},this.init=function(e,t){var r=this;jQuery(document).off("gform_post_conditional_logic.gfCalc_{0}".format(e)).on("gform_post_conditional_logic.gfCalc_{0}".format(e),function(){r.runCalcs(e,t)});for(var i=0;i<t.length;i++){var n=jQuery.extend({},t[i]);this.runCalc(n,e),this.bindCalcEvents(n,e)}},this.runCalc=function(formulaField,formId){var calcObj=this,field=jQuery("#field_"+formId+"_"+formulaField.field_id),formulaInput=field.hasClass("gfield_price")?jQuery("#ginput_base_price_"+formId+"_"+formulaField.field_id):jQuery("#input_"+formId+"_"+formulaField.field_id),previous_val=formulaInput.val(),formula=gform.applyFilters("gform_calculation_formula",formulaField.formula,formulaField,formId,calcObj),expr=calcObj.replaceFieldTags(formId,formula,formulaField).replace(/(\r\n|\n|\r)/gm,""),result="";if(calcObj.exprPatt.test(expr)){try{result=eval(expr)}catch(e){}isFinite(result)||(result=0),window.gform_calculation_result&&(result=window.gform_calculation_result(result,formulaField,formId,calcObj),window.console&&console.log('"gform_calculation_result" function is deprecated since version 1.8! Use "gform_calculation_result" JS hook instead.'));var result=gform.applyFilters("gform_calculation_result",result,formulaField,formId,calcObj),formattedResult=gform.applyFilters("gform_calculation_format_result",!1,result,formulaField,formId,calcObj),numberFormat=gf_get_field_number_format(formulaField.field_id,formId),decimalSeparator,thousandSeparator;result=!1!==formattedResult?formattedResult:field.hasClass("gfield_price")||"currency"==numberFormat?gformFormatMoney(result||0,!0):(decimalSeparator=".",thousandSeparator=",","decimal_comma"==numberFormat&&(decimalSeparator=",",thousandSeparator="."),gformFormatNumber(result,gformIsNumber(formulaField.rounding)?formulaField.rounding:-1,decimalSeparator,thousandSeparator)),result!=previous_val&&(field.hasClass("gfield_price")?(jQuery("#input_"+formId+"_"+formulaField.field_id).text(result),formulaInput.val(result).trigger("change"),jQuery(".gfield_label_product").length&&!jQuery(".ginput_total").length&&(result=jQuery("label[ for=input_"+formId+"_"+formulaField.field_id+"_1 ]").find(".gfield_label_product").text()+" "+result,wp.a11y.speak(result)),gformCalculateTotalPrice(formId)):formulaInput.val(result).trigger("change"))}},this.runCalcs=function(e,t){for(var r=0;r<t.length;r++){var i=jQuery.extend({},t[r]);this.runCalc(i,e)}},this.bindCalcEvents=function(e,t){var r,i,n,o=this,a=e.field_id,l=GFMergeTag.parseMergeTags(e.formula);for(r in o.isCalculating[a]=!1,l)l.hasOwnProperty(r)&&(i=l[r][1],n=parseInt(i,10),"checkbox"==(n=jQuery("#field_"+t+"_"+n).find('input[name="input_'+i+'"], select[name="input_'+i+'"]')).prop("type")||"radio"==n.prop("type")?jQuery(n).click(function(){o.bindCalcEvent(i,e,t,0)}):(n.is("select")||"hidden"==n.prop("type")?jQuery(n):jQuery(n).keydown(function(){o.bindCalcEvent(i,e,t)})).change(function(){o.bindCalcEvent(i,e,t,0)}),gform.doAction("gform_post_calculation_events",l[r],e,t,o))},this.bindCalcEvent=function(e,t,r,i){var n=this,o=t.field_id;i=null==i?345:i,n.isCalculating[o][e]&&clearTimeout(n.isCalculating[o][e]),n.isCalculating[o][e]=window.setTimeout(function(){n.runCalc(t,r)},i)},this.replaceFieldTags=function(e,t,r){var n,o,a,l,s,c,f=GFMergeTag.parseMergeTags(t);for(i in f)f.hasOwnProperty(i)&&(n=f[i][1],(o=parseInt(n,10))==r.field_id&&o==n||(c="value",f[i][3]?c=f[i][3]:(a=jQuery(".gfield_price input[name=input_"+o+"]").is("input[type=radio]"),l=0<jQuery(".gfield_price select[name=input_"+o+"]").length,s=jQuery('.gfield_price input[name="input_'+n+'"]').is("input[type=checkbox]"),(l||a||s)&&(c="price")),c=(s=!window.gf_check_field_rule||"show"==gf_check_field_rule(e,o,!0,""))?GFMergeTag.getMergeTagValue(e,n,c):0,c=gform.applyFilters("gform_merge_tag_value_pre_calculation",c,f[i],s,r,e),c=this.cleanNumber(c,e,o,r),t=t.replace(f[i][0],c)));return t},this.cleanNumber=function(e,t,r,i){return e=(e=gformCleanNumber(e,"","",gformGetDecimalSeparator(gf_get_field_number_format(r,t)||gf_get_field_number_format(i.field_id,t))))||0},this.init(formId,formulaFields)},__gf_keyup_timeout;function gformFormatNumber(e,t,r,i){return void 0===r&&(r=window.gf_global?new Currency(gf_global.gf_currency_config).currency.decimal_separator:"."),void 0===i&&(i=window.gf_global?new Currency(gf_global.gf_currency_config).currency.thousand_separator:","),(new Currency).numberFormat(e,t,r,i,!1)}function getMatchGroups(e,t){for(var r=new Array;t.test(e);){var i=r.length;r[i]=t.exec(e),e=e.replace(""+r[i][0],"")}return r}function gf_get_field_number_format(e,t,r){t=rgars(window,"gf_global/number_formats/{0}/{1}".format(t,e)),e=!1;return""===t?e:e=void 0===r?!1!==t.price?t.price:t.value:t[r]}function gformValidateFileSize(e,t){var r=(0<jQuery(e).closest("div").siblings(".validation_message").length?jQuery(e).closest("div"):jQuery(e)).siblings(".validation_message");window.FileReader&&window.File&&window.FileList&&window.Blob&&((e=e.files[0])&&e.size>t?(r.text(e.name+" - "+gform_gravityforms.strings.file_exceeds_limit),wp.a11y.speak(e.name+" - "+gform_gravityforms.strings.file_exceeds_limit)):r.remove())}function gformInitSpinner(e,t){jQuery("#gform_"+e).submit(function(){gformAddSpinner(e,t)})}function gformAddSpinner(e,t){void 0!==t&&t||(t=gform.applyFilters("gform_spinner_url",gf_global.spinnerUrl,e)),0==jQuery("#gform_ajax_spinner_"+e).length&&gform.applyFilters("gform_spinner_target_elem",jQuery("#gform_submit_button_"+e+", #gform_wrapper_"+e+" .gform_next_button, #gform_send_resume_link_button_"+e),e).after('<img id="gform_ajax_spinner_'+e+'"  class="gform_ajax_spinner" src="'+t+'" alt="" />')}function gformReInitTinymceInstance(e,t){var r,i,n;e&&t?(r=window.tinymce)?(i=r.get("input_"+e+"_"+t))?(n=jQuery.extend({},i.settings),i.remove(),r.init(n),gform.console.log("gformReInitTinymceInstance reinitialized TinyMCE on input_"+e+"_"+t+".")):gform.console.error("gformReInitTinymceInstance did not find an instance for input_"+e+"_"+t+"."):gform.console.error("gformReInitTinymceInstance requires tinymce to be available."):gform.console.error("gformReInitTinymceInstance requires a form and field id.")}function gf_raw_input_change(e,t){clearTimeout(__gf_keyup_timeout);var r=jQuery(t),i=r.attr("id"),n=gf_get_input_id_by_html_id(i),o=gf_get_form_id_by_html_id(i),i=gform.applyFilters("gform_field_meta_raw_input_change",{fieldId:n,formId:o},r,e),n=i.fieldId,o=i.formId;n&&(r=!(i=r.is(":checkbox")||r.is(":radio")||r.is("select"))||r.is("textarea"),"keyup"==e.type&&!r||"change"==e.type&&!i&&!r||("keyup"==e.type?__gf_keyup_timeout=setTimeout(function(){gf_input_change(t,o,n)},300):gf_input_change(t,o,n)))}function gf_get_input_id_by_html_id(e){var t=gf_get_ids_by_html_id(e),e=t[t.length-1];return 3==t.length&&(t.shift(),e=t.join(".")),e}function gf_get_form_id_by_html_id(e){return gf_get_ids_by_html_id(e)[0]}function gf_get_ids_by_html_id(e){for(var t=e?e.split("_"):[],r=t.length-1;0<=r;r--)gformIsNumber(t[r])||t.splice(r,1);return t}function gf_input_change(e,t,r){gform.doAction("gform_input_change",e,t,r)}function gformExtractFieldId(e){var t=parseInt(e.toString().split(".")[0],10);return t||e}function gformExtractInputIndex(e){e=parseInt(e.toString().split(".")[1],10);return e||!1}gform.recaptcha={renderRecaptcha:function(){jQuery(".ginput_recaptcha:not(.gform-initialized)").each(function(){var t=jQuery(this),e={sitekey:t.data("sitekey"),theme:t.data("theme"),tabindex:t.data("tabindex")};t.data("stoken")&&(e.stoken=t.data("stoken"));var r=!1;"invisible"==t.data("size")&&(r=function(e){e&&t.closest("form").submit()}),(r=gform.applyFilters("gform_recaptcha_callback",r,t))&&(e.callback=r),t.data("widget-id",grecaptcha.render(this.id,e)),e.tabindex&&t.find("iframe").attr("tabindex",e.tabindex),t.addClass("gform-initialized"),gform.doAction("gform_post_recaptcha_render",t)})},gformIsRecaptchaPending:function(e){e=e.find(".ginput_recaptcha");return!(!e.length||"invisible"!==e.data("size"))&&!((e=e.find(".g-recaptcha-response")).length&&e.val())},needsRender:function(){return document.querySelectorAll(".ginput_recaptcha:not(.gform-initialized)")[0]},renderOnRecaptchaLoaded:function(){var e;gform.recaptcha.needsRender()&&(e=setInterval(function(){window.grecaptcha&&window.grecaptcha.render&&(this.renderRecaptcha(),clearInterval(e))},100))}},gform.initializeOnLoaded(gform.recaptcha.renderOnRecaptchaLoaded),jQuery(document).on("gform_post_render",gform.recaptcha.renderOnRecaptchaLoaded),window.renderRecaptcha=gform.recaptcha.renderRecaptcha,window.gformIsRecaptchaPending=gform.recaptcha.gformIsRecaptchaPending,function(u,g){u.uploaders={};var m="undefined"!=typeof gform_gravityforms?gform_gravityforms.strings:{},_="undefined"!=typeof gform_gravityforms?gform_gravityforms.vars.images_url:"";function i(o){var f,r,e=g(o).data("settings"),t=new plupload.Uploader(e);function d(e,t){g("#"+e).prepend("<li>"+p(t)+"</li>"),setTimeout(function(){wp.a11y.speak(g("#"+e).text())},1e3)}function a(e){var t=parseInt(e.gf_vars.max_files,10);0<t&&(t=t<=i(e.multipart_params.field_id),u.toggleDisabled(e,t),t||(t=e.gf_vars.message_id,e=m.max_reached,g("#"+t+" li:contains('"+e+"')").remove()))}function l(){var e=g("#gform_uploaded_files_"+f).val();return e=void 0===e||""===e?{}:g.parseJSON(e)}function s(e){var t=l(),e=c(e);return void 0===t[e]&&(t[e]=[]),t[e]}function i(e){return s(e).length}function c(e){return"input_"+e}function n(e){e.preventDefault()}f=t.settings.multipart_params.form_id,(u.uploaders[e.container]=t).bind("Init",function(e,t){var r,i,n;e.features.dragdrop||g(".gform_drop_instructions").hide(),r=e.settings.container,i=r.querySelectorAll('input[type="file"]')[0],n=r.querySelectorAll(".gform_button_select_files")[0],r=g(o).closest(".gfield").find(".gfield_label")[0],i&&r&&n&&(r.setAttribute("for",i.id),n.setAttribute("aria-label",n.innerText.toLowerCase()+", "+r.innerText.toLowerCase()),i.setAttribute("tabindex","-1"),i.setAttribute("aria-hidden","true")),a(e.settings)}),u.toggleDisabled=function(e,t){("string"==typeof e.browse_button?g("#"+e.browse_button):g(e.browse_button)).prop("disabled",t)},t.init(),t.bind("BeforeUpload",function(e,t){e.settings.multipart_params.original_filename=t.name}),t.bind("FilesAdded",function(o,e){var a,t,l=parseInt(o.settings.gf_vars.max_files,10),s=i(o.settings.multipart_params.field_id),c=o.settings.gf_vars.disallowed_extensions;0<l&&l<=s?g.each(e,function(e,t){o.removeFile(t)}):(g.each(e,function(e,t){return a=t.name.split(".").pop(),-1<g.inArray(a,c)?(d(o.settings.gf_vars.message_id,t.name+" - "+m.illegal_extension),void o.removeFile(t)):void(t.status==plupload.FAILED||0<l&&l<=s?o.removeFile(t):(r=void 0!==t.size?plupload.formatSize(t.size):m.in_progress,i="$this=jQuery(this); var uploader = gfMultiFileUploader.uploaders."+o.settings.container.id+";uploader.stop();uploader.removeFile(uploader.getFile('"+t.id+"'));$this.after('"+m.cancelled+"'); uploader.start();$this.remove();",n=gform.applyFilters("gform_file_upload_status_markup",n='<div id="{0}" class="ginput_preview">{1} ({2}) <b></b> <a href="javascript:void(0)" title="{3}" onclick="{4}" onkeypress="{4}">{5}</a></div>',t,r,m,i,o).format(t.id,p(t.name),r,m.cancel_upload,i,m.cancel),g("#"+o.settings.filelist).prepend(n),s++));var r,i,n}),o.refresh(),0==(e=g("form#gform_"+f+" "+(t="input:hidden[name='gform_unique_id']"))).length&&(e=g(t)),""===(r=e.val())&&(r="xxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}),e.val(r)),0<l&&l<=s&&(u.toggleDisabled(o.settings,!0),d(o.settings.gf_vars.message_id,m.max_reached)),o.settings.multipart_params.gform_unique_id=r,o.start())}),t.bind("UploadProgress",function(e,t){var r=t.percent+"%";g("#"+t.id+" b").html(r)}),t.bind("Error",function(e,t){var r;t.code===plupload.FILE_EXTENSION_ERROR?(r=(void 0!==e.settings.filters.mime_types?e.settings.filters.mime_types:e.settings.filters)[0].extensions,d(e.settings.gf_vars.message_id,t.file.name+" - "+m.invalid_file_extension+" "+r)):t.code===plupload.FILE_SIZE_ERROR?d(e.settings.gf_vars.message_id,t.file.name+" - "+m.file_exceeds_limit):(r="Error: "+t.code+", Message: "+t.message+(t.file?", File: "+t.file.name:""),d(e.settings.gf_vars.message_id,r)),g("#"+t.file.id).html(""),e.refresh()}),t.bind("ChunkUploaded",function(e,t,r){r=g.secureEvalJSON(r.response);"error"==r.status?(e.removeFile(t),d(e.settings.gf_vars.message_id,t.name+" - "+r.error.message),g("#"+t.id).html("")):e.settings.multipart_params[t.target_name]=r.data}),t.bind("FileUploaded",function(e,t,r){if(e.getFile(t.id)){var i=g.secureEvalJSON(r.response);if("error"==i.status)return d(e.settings.gf_vars.message_id,t.name+" - "+i.error.message),g("#"+t.id).html(""),void a(e.settings);var n="<strong>"+p(t.name)+"</strong>",o=e.settings.multipart_params.form_id,r=e.settings.multipart_params.field_id,n="undefined"!=typeof gf_legacy&&gf_legacy.is_legacy?"<img class='gform_delete' src='"+_+"/delete.png' onclick='gformDeleteUploadedFile("+o+","+r+", this);' onkeypress='gformDeleteUploadedFile("+o+","+r+", this);' alt='"+m.delete_file+"' title='"+m.delete_file+"' /> "+n:"<button class='gform_delete_file' onclick='gformDeleteUploadedFile("+o+","+r+", this);'><span class='dashicons dashicons-trash' aria-hidden='true'></span><span class='screen-reader-text'>"+m.delete_file+": "+t.name+"</span></button> "+n;n=gform.applyFilters("gform_file_upload_markup",n,t,e,m,_,i),g("#"+t.id).html(n),100==t.percent&&(i.status&&"ok"==i.status?(n=r,r=i.data,(i=s(n)).unshift(r),function(e,t){var r=l(),i=g("#gform_uploaded_files_"+f),e=c(e);r[e]=t,i.val(g.toJSON(r))}(n,i)):d(e.settings.gf_vars.message_id,m.unknown_error+": "+t.name))}}),t.bind("FilesRemoved",function(e,t){a(e.settings)}),g("#"+e.drop_element).on({dragenter:n,dragover:n})}function p(e){return g("<div/>").text(e).html()}g(document).bind("gform_post_render",function(e,t){g("form#gform_"+t+" .gform_fileupload_multifile").each(function(){i(this)});var r=g("form#gform_"+t);0<r.length&&r.submit(function(){var r=!1;if(g.each(u.uploaders,function(e,t){if(0<t.total.queued)return!(r=!0)}),r)return alert(m.currently_uploading),window["gf_submitting_"+t]=!1,g("#gform_ajax_spinner_"+t).remove(),!1})}),g(document).bind("gform_post_conditional_logic",function(e,t,r,i){i||g.each(u.uploaders,function(e,t){t.refresh()})}),g(document).ready(function(){"undefined"!=typeof adminpage&&"toplevel_page_gf_edit_forms"===adminpage||"undefined"==typeof plupload?g(".gform_button_select_files").prop("disabled",!0):"undefined"!=typeof adminpage&&-1<adminpage.indexOf("_page_gf_entries")&&g(".gform_fileupload_multifile").each(function(){i(this)})}),u.setup=function(e){i(e)}}(window.gfMultiFileUploader=window.gfMultiFileUploader||{},jQuery),jQuery(document).on("change keyup",".gfield input, .gfield select, .gfield textarea",function(e){gf_raw_input_change(e,this)}),jQuery(document).on("submit.gravityforms",".gform_wrapper form",function(e){var t=jQuery(this).closest(".gform_wrapper"),r=t.attr("id").split("_")[2],i=0<t.find(".gform_page").length,n=parseInt(t.find('input[name^="gform_source_page_number_"]').val(),10),o=parseInt(t.find('input[name^="gform_target_page_number_"]').val(),10),a=0===o,l=!a&&n<o,n="1"===jQuery("#gform_save_"+r).val();o=i?t.find(".gform_page:visible").find('.gform_page_footer [id^="gform_'+(l?"next":"submit")+'_button_"]'):t.find("#gform_submit_button_"+r),n&&wp.a11y.speak(window.gf_global.strings.formSaved);i=!o.is(":visible"),o=o.is(":disabled");!n&&(a||l)&&(i||o)?(window["gf_submitting_"+r]=!1,t.find(".gform_ajax_spinner").remove(),e.preventDefault()):!a||0!==(a=t.find(".ginput_recaptcha")).length&&"invisible"===a.data("size")&&((t=0===(t=t.find('input[name="g-recaptcha-response"]')).length?a.find(".g-recaptcha-response"):t).val()||(grecaptcha.execute(a.data("widget-id")),setTimeout(function(){window["gf_submitting_"+r]=!1},4e3),e.preventDefault()))});{function rgars(e,t){for(var r=t.split("/"),i=e,n=0;n<r.length;n++)i=rgar(i,r[n]);return i}window.rgars}{function rgar(e,t){return void 0!==e[t]?e[t]:""}window.rgar}String.prototype.format=function(){var r=arguments;return this.replace(/{(\d+)}/g,function(e,t){return void 0!==r[t]?r[t]:e})},jQuery(document).ready(function(){jQuery("#gform-form-toolbar__menu > li").hover(function(){jQuery(this).find(".gform-form-toolbar__submenu").toggleClass("open"),jQuery(this).find(".has_submenu").toggleClass("submenu-open")},function(){jQuery(".gform-form-toolbar__submenu.open").removeClass("open"),jQuery(".has_submenu.submenu-open").removeClass("submenu-open")}),jQuery("#gform-form-toolbar__menu .has_submenu").click(function(e){e.preventDefault()})}),jQuery(document).ready(function(){jQuery(".gform-settings-field").each(function(){1<jQuery(this).find("> .gform-settings-input__container").length&&jQuery(this).addClass("gform-settings-field--multiple-inputs")})}),jQuery(function(){gform.tools.trigger("gform_main_scripts_loaded")});;
(function(e,t,o,n,p,r,i){e.prismGlobalObjectAlias=n;e.pgo=e.pgo||function(){(e.pgo.q=e.pgo.q||[]).push(arguments)};e.pgo.l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://prism.app-us1.com/prism.js","pgo");

    pgo('setAccount', '475404987');
    pgo('setTrackByDefault', true);

    pgo('process');;
if(typeof php_data.ac_settings.site_tracking!="undefined"&&php_data.ac_settings.site_tracking=="1")if(typeof php_data.ac_settings.tracking_actid=="undefined"||php_data.ac_settings.tracking_actid==='')console.log('Site tracking account not found');else{(function(a,d,e,f,g,b,c){a.visitorGlobalObjectAlias=f,a[a.visitorGlobalObjectAlias]=a[a.visitorGlobalObjectAlias]||function(){(a[a.visitorGlobalObjectAlias].q=a[a.visitorGlobalObjectAlias].q||[]).push(arguments)},a[a.visitorGlobalObjectAlias].l=(new Date).getTime(),b=d.createElement("script"),b.src=e,b.async=!0,c=d.getElementsByTagName("script")[0],c.parentNode.insertBefore(b,c)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo"),vgo('setAccount',php_data.ac_settings.tracking_actid),vgo('setTrackByDefault',php_data.ac_settings.site_tracking_default=="1"),typeof trackcmp_email!='undefined'&&vgo('setEmail',trackcmp_email),vgo('process');function acEnableTracking(){let a=new Date((new Date).getTime()+1e3*60*60*24*30);document.cookie="ac_enable_tracking=1;samesite=none;secure; expires= "+a+"; path=/",vgo('process','allowTracking')}(php_data.ac_settings.site_tracking_default=="1"||/(^|; )ac_enable_tracking=([^;]+)/.test(document.cookie))&&acEnableTracking()};
/*! lazysizes - v5.3.1 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:1,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});;
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(a){"use strict";function c(e,f){var d=function(){},b=this,g={ajaxSettings:{},autoSelectFirst:!1,appendTo:document.body,serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:c.formatResult,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:d,onSearchComplete:d,onSearchError:d,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:function(a,c,b){return-1!==a.value.toLowerCase().indexOf(b)},paramName:"query",transformResult:function(b){return"string"==typeof b?a.parseJSON(b):b},showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1};b.element=e,b.el=a(e),b.suggestions=[],b.badQueries=[],b.selectedIndex=-1,b.currentValue=b.element.value,b.intervalId=0,b.cachedResponse={},b.onChangeInterval=null,b.onChange=null,b.isLocal=!1,b.suggestionsContainer=null,b.noSuggestionsContainer=null,b.options=a.extend({},g,f),b.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},b.hint=null,b.hintValue="",b.selection=null,b.initialize(),b.setOptions(f)}var d=function(){return{escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},createNode:function(b){var a=document.createElement("div");return a.className=b,a.style.position="absolute",a.style.display="none",a}}}(),b={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40};c.utils=d,a.Autocomplete=c,c.formatResult=function(a,b){var c="("+d.escapeRegExChars(b)+")";return a.value.replace(new RegExp(c,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")},c.prototype={killerFn:null,initialize:function(){var d,b=this,f="."+b.classes.suggestion,g=b.classes.selected,e=b.options;b.element.setAttribute("autocomplete","off"),b.killerFn=function(c){0===a(c.target).closest("."+b.options.containerClass).length&&(b.killSuggestions(),b.disableKillerFn())},b.noSuggestionsContainer=a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),b.suggestionsContainer=c.utils.createNode(e.containerClass),d=a(b.suggestionsContainer),d.appendTo(e.appendTo),"auto"!==e.width&&d.width(e.width),d.on("mouseover.autocomplete",f,function(){b.activate(a(this).data("index"))}),d.on("mouseout.autocomplete",function(){b.selectedIndex=-1,d.children("."+g).removeClass(g)}),d.on("click.autocomplete",f,function(){b.select(a(this).data("index"))}),b.fixPositionCapture=function(){b.visible&&b.fixPosition()},a(window).on("resize.autocomplete",b.fixPositionCapture),b.el.on("keydown.autocomplete",function(a){b.onKeyPress(a)}),b.el.on("keyup.autocomplete",function(a){b.onKeyUp(a)}),b.el.on("blur.autocomplete",function(){b.onBlur()}),b.el.on("focus.autocomplete",function(){b.onFocus()}),b.el.on("change.autocomplete",function(a){b.onKeyUp(a)}),b.el.on("input.autocomplete",function(a){b.onKeyUp(a)})},onFocus:function(){var a=this;a.fixPosition(),0===a.options.minChars&&0===a.el.val().length&&a.onValueChange()},onBlur:function(){this.enableKillerFn()},abortAjax:function(){var a=this;a.currentRequest&&(a.currentRequest.abort(),a.currentRequest=null)},setOptions:function(d){var c=this,b=c.options;a.extend(b,d),c.isLocal=a.isArray(b.lookup),c.isLocal&&(b.lookup=c.verifySuggestionsFormat(b.lookup)),b.orientation=c.validateOrientation(b.orientation,"bottom"),a(c.suggestionsContainer).css({"max-height":b.maxHeight+"px",width:b.width+"px","z-index":b.zIndex})},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var a=this;a.disabled=!0,clearInterval(a.onChangeInterval),a.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var b=this,c=a(b.suggestionsContainer),j=c.parent().get(0),f,g,i,e,d,m,k,l,n,h,o;(j===document.body||b.options.forceFixPosition)&&(f=b.options.orientation,g=c.outerHeight(),i=b.el.outerHeight(),e=b.el.offset(),d={top:e.top,left:e.left},"auto"===f&&(m=a(window).height(),k=a(window).scrollTop(),l=-k+e.top-g,n=k+m-(e.top+i+g),f=Math.max(l,n)===l?"top":"bottom"),("top"===f?d.top+=-g:d.top+=i,j!==document.body)&&(o=c.css("opacity"),b.visible||c.css("opacity",0).show(),h=c.offsetParent().offset(),d.top-=h.top,d.left-=h.left,b.visible||c.css("opacity",o).hide()),"auto"===b.options.width&&(d.width=b.el.outerWidth()-2+"px"),c.css(d))},enableKillerFn:function(){var b=this;a(document).on("click.autocomplete",b.killerFn)},disableKillerFn:function(){var b=this;a(document).off("click.autocomplete",b.killerFn)},killSuggestions:function(){var a=this;a.stopKillSuggestions(),a.intervalId=window.setInterval(function(){a.visible&&(a.el.val(a.currentValue),a.hide()),a.stopKillSuggestions()},50)},stopKillSuggestions:function(){window.clearInterval(this.intervalId)},isCursorAtEnd:function(){var a,c=this,b=c.el.val().length,d=c.element.selectionStart;return"number"==typeof d?d===b:!document.selection||(a=document.selection.createRange(),a.moveStart("character",-b),b===a.text.length)},onKeyPress:function(c){var a=this;if(!a.disabled&&!a.visible&&c.which===b.DOWN&&a.currentValue)return void a.suggest();if(!a.disabled&&a.visible){switch(c.which){case b.ESC:a.el.val(a.currentValue),a.hide();break;case b.RIGHT:if(a.hint&&a.options.onHint&&a.isCursorAtEnd()){a.selectHint();break}return;case b.TAB:if(a.hint&&a.options.onHint)return void a.selectHint();if(-1===a.selectedIndex)return void a.hide();if(a.select(a.selectedIndex),a.options.tabDisabled===!1)return;break;case b.RETURN:if(-1===a.selectedIndex)return void a.hide();a.select(a.selectedIndex);break;case b.UP:a.moveUp();break;case b.DOWN:a.moveDown();break;default:return}c.stopImmediatePropagation(),c.preventDefault()}},onKeyUp:function(c){var a=this;if(!a.disabled){switch(c.which){case b.UP:case b.DOWN:return}clearInterval(a.onChangeInterval),a.currentValue!==a.el.val()&&(a.findBestHint(),a.options.deferRequestBy>0?a.onChangeInterval=setInterval(function(){a.onValueChange()},a.options.deferRequestBy):a.onValueChange())}},onValueChange:function(){var b=this,d=b.options,e=b.el.val(),c=b.getQuery(e);return b.selection&&b.currentValue!==c&&(b.selection=null,(d.onInvalidateSelection||a.noop).call(b.element)),clearInterval(b.onChangeInterval),b.currentValue=e,b.selectedIndex=-1,d.triggerSelectOnValidInput&&b.isExactMatch(c)?void b.select(0):void(c.length<d.minChars?b.hide():b.getSuggestions(c))},isExactMatch:function(b){var a=this.suggestions;return 1===a.length&&a[0].value.toLowerCase()===b.toLowerCase()},getQuery:function(c){var b,d=this.options.delimiter;return d?(b=c.split(d),a.trim(b[b.length-1])):c},getSuggestionsLocal:function(e){var b,f=this,d=f.options,g=e.toLowerCase(),h=d.lookupFilter,c=parseInt(d.lookupLimit,10);return b={suggestions:a.grep(d.lookup,function(a){return h(a,e,g)})},c&&b.suggestions.length>c&&(b.suggestions=b.suggestions.slice(0,c)),b},getSuggestions:function(d){var e,g,h,i,b=this,c=b.options,f=c.serviceUrl;if(c.params[c.paramName]=d,g=c.ignoreParams?null:c.params,c.onSearchStart.call(b.element,c.params)!==!1){if(a.isFunction(c.lookup))return void c.lookup(d,function(a){b.suggestions=a.suggestions,b.suggest(),c.onSearchComplete.call(b.element,d,a.suggestions)});b.isLocal?e=b.getSuggestionsLocal(d):(a.isFunction(f)&&(f=f.call(b.element,d)),h=f+"?"+a.param(g||{}),e=b.cachedResponse[h]),e&&a.isArray(e.suggestions)?(b.suggestions=e.suggestions,b.suggest(),c.onSearchComplete.call(b.element,d,e.suggestions)):b.isBadQuery(d)?c.onSearchComplete.call(b.element,d,[]):(b.abortAjax(),i={url:f,data:g,type:c.type,dataType:c.dataType},a.extend(i,c.ajaxSettings),b.currentRequest=a.ajax(i).done(function(e){var a;b.currentRequest=null,a=c.transformResult(e,d),b.processResponse(a,d,h),c.onSearchComplete.call(b.element,d,a.suggestions)}).fail(function(a,e,f){c.onSearchError.call(b.element,d,a,e,f)}))}},isBadQuery:function(c){if(!this.options.preventBadQueries)return!1;for(var a=this.badQueries,b=a.length;b--;)if(0===c.indexOf(a[b]))return!0;return!1},hide:function(){var b=this,c=a(b.suggestionsContainer);a.isFunction(b.options.onHide)&&b.visible&&b.options.onHide.call(b.element,c),b.visible=!1,b.selectedIndex=-1,clearInterval(b.onChangeInterval),a(b.suggestionsContainer).hide(),b.signalHint(null)},suggest:function(){if(0===this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var e,b=this,c=b.options,j=c.groupBy,m=c.formatResult,g=b.getQuery(b.currentValue),h=b.classes.suggestion,l=b.classes.selected,d=a(b.suggestionsContainer),k=a(b.noSuggestionsContainer),i=c.beforeRender,f="",n=function(b,c){var a=b.data[j];return e===a?"":(e=a,'<div class="autocomplete-group"><strong>'+e+"</strong></div>")};return c.triggerSelectOnValidInput&&b.isExactMatch(g)?void b.select(0):(a.each(b.suggestions,function(a,b){j&&(f+=n(b,g,a)),f+='<div class="'+h+'" data-index="'+a+'">'+m(b,g)+"</div>"}),this.adjustContainerWidth(),k.detach(),d.html(f),a.isFunction(i)&&i.call(b.element,d),b.fixPosition(),d.show(),c.autoSelectFirst&&(b.selectedIndex=0,d.scrollTop(0),d.children("."+h).first().addClass(l)),b.visible=!0,void b.findBestHint())},noSuggestions:function(){var b=this,c=a(b.suggestionsContainer),d=a(b.noSuggestionsContainer);this.adjustContainerWidth(),d.detach(),c.empty(),c.append(d),b.fixPosition(),c.show(),b.visible=!0},adjustContainerWidth:function(){var b,c=this,d=c.options,e=a(c.suggestionsContainer);"auto"===d.width&&(b=c.el.outerWidth()-2,e.width(b>0?b:300))},findBestHint:function(){var b=this,c=b.el.val().toLowerCase(),d=null;c&&(a.each(b.suggestions,function(e,a){var b=0===a.value.toLowerCase().indexOf(c);return b&&(d=a),!b}),b.signalHint(d))},signalHint:function(d){var c="",b=this;d&&(c=b.currentValue+d.value.substr(b.currentValue.length)),b.hintValue!==c&&(b.hintValue=c,b.hint=d,(this.options.onHint||a.noop)(c))},verifySuggestionsFormat:function(b){return b.length&&"string"==typeof b[0]?a.map(b,function(a){return{value:a,data:null}}):b},validateOrientation:function(b,c){return b=a.trim(b||"").toLowerCase(),-1===a.inArray(b,["auto","bottom","top"])&&(b=c),b},processResponse:function(b,c,e){var a=this,d=a.options;b.suggestions=a.verifySuggestionsFormat(b.suggestions),d.noCache||(a.cachedResponse[e]=b,d.preventBadQueries&&0===b.suggestions.length&&a.badQueries.push(c)),c===a.getQuery(a.currentValue)&&(a.suggestions=b.suggestions,a.suggest())},activate:function(g){var c,b=this,d=b.classes.selected,e=a(b.suggestionsContainer),f=e.find("."+b.classes.suggestion);return e.find("."+d).removeClass(d),b.selectedIndex=g,-1!==b.selectedIndex&&f.length>b.selectedIndex?(c=f.get(b.selectedIndex),a(c).addClass(d),c):null},selectHint:function(){var b=this,c=a.inArray(b.hint,b.suggestions);b.select(c)},select:function(b){var a=this;a.hide(),a.onSelect(b)},moveUp:function(){var b=this;if(-1!==b.selectedIndex)return 0===b.selectedIndex?(a(b.suggestionsContainer).children().first().removeClass(b.classes.selected),b.selectedIndex=-1,b.el.val(b.currentValue),void b.findBestHint()):void b.adjustScroll(b.selectedIndex-1)},moveDown:function(){var a=this;a.selectedIndex!==a.suggestions.length-1&&a.adjustScroll(a.selectedIndex+1)},adjustScroll:function(f){var b=this,d=b.activate(f),c,e,g,h;d&&(h=a(d).outerHeight(),c=d.offsetTop,e=a(b.suggestionsContainer).scrollTop(),g=e+b.options.maxHeight-h,e>c?a(b.suggestionsContainer).scrollTop(c):c>g&&a(b.suggestionsContainer).scrollTop(c-b.options.maxHeight+h),b.options.preserveInput||b.el.val(b.getValue(b.suggestions[f].value)),b.signalHint(null))},onSelect:function(e){var b=this,d=b.options.onSelect,c=b.suggestions[e];b.currentValue=b.getValue(c.value),b.currentValue===b.el.val()||b.options.preserveInput||b.el.val(b.currentValue),b.signalHint(null),b.suggestions=[],b.selection=c,a.isFunction(d)&&d.call(b.element,c)},getValue:function(c){var a,b,d=this,e=d.options.delimiter;return e?(a=d.currentValue,b=a.split(e),1===b.length?c:a.substr(0,a.length-b[b.length-1].length)+c):c},dispose:function(){var b=this;b.el.off(".autocomplete").removeData("autocomplete"),b.disableKillerFn(),a(window).off("resize.autocomplete",b.fixPositionCapture),a(b.suggestionsContainer).remove()}},a.fn.autocomplete=a.fn.devbridgeAutocomplete=function(b,e){var d="autocomplete";return 0===arguments.length?this.first().data(d):this.each(function(){var g=a(this),f=g.data(d);"string"==typeof b?f&&"function"==typeof f[b]&&f[b](e):(f&&f.dispose&&f.dispose(),f=new c(this,b),g.data(d,f))})}}),jQuery(document).ready(function(a){"use strict";a('.searchform').each(function(){var e=a(this).find('.live-search-results'),b=a(this).find('.search_categories'),d=flatsomeVars.ajaxurl+'?action=flatsome_ajax_search_products',f='',c;b.length&&b.val()!==''&&(d+='&product_cat='+b.val()),a(this).find('.search-field').devbridgeAutocomplete({minChars:3,appendTo:e,triggerSelectOnValidInput:!1,serviceUrl:d,deferRequestBy:parseInt(flatsomeVars.options.search_result_latency),onSearchStart:function(){a('.submit-button').removeClass('loading'),a('.submit-button').addClass('loading')},onSelect:function(a){a.id!=-1&&(window.location.href=a.url)},onSearchComplete:function(){a('.submit-button').removeClass('loading')},beforeRender:function(b){a(b).removeAttr('style')},formatResult:function(b,d){var e='('+a.Autocomplete.utils.escapeRegExChars(d)+')',c='';return b.img&&(c+='<img class="search-image" src="'+b.img+'">'),c+='<div class="search-name">'+b.value.replace(new RegExp(e,'gi'),'<strong>$1</strong>')+'</div>',b.price&&(c+='<span class="search-price">'+b.price+'<span>'),c}}),b.length&&(c=a(this).find('.search-field').devbridgeAutocomplete(),b.on('change',function(a){b.val()!=''?c.setOptions({serviceUrl:flatsomeVars.ajaxurl+'?action=flatsome_ajax_search_products&product_cat='+b.val()}):c.setOptions({serviceUrl:flatsomeVars.ajaxurl+'?action=flatsome_ajax_search_products'}),c.hide(),c.onValueChange()}))})});
var runtime=function(a){"use strict";var u,t=Object.prototype,h=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",e=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{i({},"")}catch(t){i=function(t,r,e){return t[r]=e}}function c(t,r,e,n){var o,i,a,c,r=r&&r.prototype instanceof v?r:v,r=Object.create(r.prototype),n=new j(n||[]);return r._invoke=(o=t,i=e,a=n,c=l,function(t,r){if(c===p)throw new Error("Generator is already running");if(c===y){if("throw"===t)throw r;return k()}for(a.method=t,a.arg=r;;){var e=a.delegate;if(e){var n=function t(r,e){var n=r.iterator[e.method];if(n===u){if(e.delegate=null,"throw"===e.method){if(r.iterator.return&&(e.method="return",e.arg=u,t(r,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=f(n,r.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,g;n=n.arg;if(!n)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g;{if(!n.done)return n;e[r.resultName]=n.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u)}e.delegate=null;return g}(e,a);if(n){if(n===g)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===l)throw c=y,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=p;n=f(o,i,a);if("normal"===n.type){if(c=a.done?y:s,n.arg!==g)return{value:n.arg,done:a.done}}else"throw"===n.type&&(c=y,a.method="throw",a.arg=n.arg)}}),r}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",g={};function v(){}function d(){}function m(){}var w={};i(w,n,function(){return this});r=Object.getPrototypeOf,r=r&&r(r(O([])));r&&r!==t&&h.call(r,n)&&(w=r);var L=m.prototype=v.prototype=Object.create(w);function x(t){["next","throw","return"].forEach(function(r){i(t,r,function(t){return this._invoke(r,t)})})}function b(a,c){var r;this._invoke=function(e,n){function t(){return new c(function(t,r){!function r(t,e,n,o){t=f(a[t],a,e);if("throw"!==t.type){var i=t.arg;return(e=i.value)&&"object"==typeof e&&h.call(e,"__await")?c.resolve(e.__await).then(function(t){r("next",t,n,o)},function(t){r("throw",t,n,o)}):c.resolve(e).then(function(t){i.value=t,n(i)},function(t){return r("throw",t,n,o)})}o(t.arg)}(e,n,t,r)})}return r=r?r.then(t,t):t()}}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(r){if(r){var t=r[n];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,t=function t(){for(;++e<r.length;)if(h.call(r,e))return t.value=r[e],t.done=!1,t;return t.value=u,t.done=!0,t};return t.next=t}}return{next:k}}function k(){return{value:u,done:!0}}return i(L,"constructor",d.prototype=m),i(m,"constructor",d),d.displayName=i(m,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,i(t,o,"GeneratorFunction")),t.prototype=Object.create(L),t},a.awrap=function(t){return{__await:t}},x(b.prototype),i(b.prototype,e,function(){return this}),a.AsyncIterator=b,a.async=function(t,r,e,n,o){void 0===o&&(o=Promise);var i=new b(c(t,r,e,n),o);return a.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(L),i(L,o,"Generator"),i(L,n,function(){return this}),i(L,"toString",function(){return"[object Generator]"}),a.keys=function(e){var t,n=[];for(t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},a.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&h.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=u),!!r}for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=h.call(o,"catchLoc"),c=h.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&h.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n,o=e.completion;return"throw"===o.type&&(n=o.arg,_(e)),n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=u),g}},a}("object"==typeof module?module.exports:{});try{regeneratorRuntime=runtime}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)};
/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.domReady=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="2oG7")}({"2oG7":function(e,t,n){"use strict";function r(e){"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",e):e())}n.r(t),n.d(t,"default",(function(){return r}))}}).default;;
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );;
( function( domain, translations ) {
	var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
	localeData[""].domain = domain;
	wp.i18n.setLocaleData( localeData, domain );
} )( "default", {"translation-revision-date":"2022-01-18 05:55:29+0000","generator":"GlotPress\/3.0.0-alpha.2","domain":"messages","locale_data":{"messages":{"":{"domain":"messages","plural-forms":"nplurals=2; plural=n != 1;","lang":"en_AU"},"Notifications":["Notifications"]}},"comment":{"reference":"wp-includes\/js\/dist\/a11y.js"}} );;
/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.a11y=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="jncB")}({Y8OO:function(t,e){t.exports=window.wp.domReady},jncB:function(t,e,n){"use strict";n.r(e),n.d(e,"setup",(function(){return u})),n.d(e,"speak",(function(){return d}));var i=n("Y8OO"),o=n.n(i),r=n("l3Sj");function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"polite";const e=document.createElement("div");e.id="a11y-speak-"+t,e.className="a11y-speak-region",e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("aria-live",t),e.setAttribute("aria-relevant","additions text"),e.setAttribute("aria-atomic","true");const{body:n}=document;return n&&n.appendChild(e),e}let p="";function u(){const t=document.getElementById("a11y-speak-intro-text"),e=document.getElementById("a11y-speak-assertive"),n=document.getElementById("a11y-speak-polite");null===t&&function(){const t=document.createElement("p");t.id="a11y-speak-intro-text",t.className="a11y-speak-intro-text",t.textContent=Object(r.__)("Notifications"),t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("hidden","hidden");const{body:e}=document;e&&e.appendChild(t)}(),null===e&&a("assertive"),null===n&&a("polite")}function d(t,e){!function(){const t=document.getElementsByClassName("a11y-speak-region"),e=document.getElementById("a11y-speak-intro-text");for(let e=0;e<t.length;e++)t[e].textContent="";e&&e.setAttribute("hidden","hidden")}(),t=function(t){return t=t.replace(/<[^<>]+>/g," "),p===t&&(t+=" "),p=t,t}(t);const n=document.getElementById("a11y-speak-intro-text"),i=document.getElementById("a11y-speak-assertive"),o=document.getElementById("a11y-speak-polite");i&&"assertive"===e?i.textContent=t:o&&(o.textContent=t),n&&n.removeAttribute("hidden")}o()(u)},l3Sj:function(t,e){t.exports=window.wp.i18n}});;
!function(t){t.fn.textareaCount=function(i,r){var o,l=t(this),c=0,u=i.maxCharacterSize,s=0,f=0,h={};function d(r){for(var a=0,e=0;e<r.length;e++)"\n"===r.charAt(e)&&a++;return a}function p(){return-1!==navigator.appVersion.toLowerCase().indexOf("win")}function g(r){return(r+" ").replace(/^[^A-Za-z0-9]+/gi,"").replace(/[^A-Za-z0-9]+/gi," ").split(" ")}function m(r){return r.length-1}function a(){var r,a,e,t=l.val(),n=("function"==typeof i.charCounter?i.charCounter:h[i.charCounter])(t);return 0<i.maxCharacterSize?(e=d(t=i.truncate&&n>=i.maxCharacterSize?t.substring(0,i.maxCharacterSize):t),r=i.maxCharacterSize,p()&&(r=i.maxCharacterSize-e),i.truncate&&r<n&&(a=this.scrollTop,l.val(t.substring(0,r)),this.scrollTop=a),o.removeClass(i.warningStyle+" "+i.errorStyle),r-n<=i.warningNumber&&o.addClass(i.warningStyle),r-n<0&&o.addClass(i.errorStyle),c=n,p()&&(c=n+e),f=m(g(l.val())),s=u-c):(e=d(t),c=n,p()&&(c=n+e),f=m(g(l.val()))),e=(e=(e=i.displayFormat).replace("#input",c)).replace("#words",f),e=0<u?(e=e.replace("#max",u)).replace("#left",s):e}function e(){return o.html(a()),void 0!==r&&r.call(this,{input:c,max:u,left:s,words:f}),1}h.standard=function(r){return r.length},h.twitter=function(r){var a=Array(23).join("*"),e=new RegExp("(https?://)?([a-z0-9+!*(),;?&=$_.-]+(:[a-z0-9+!*(),;?&=$_.-]+)?@)?([a-z0-9-.]*)\\.(travel|museum|[a-z]{2,4})(:[0-9]{2,5})?(/([a-z0-9+$_-]\\.?)+)*/?(\\?[a-z+&$_.-][a-z0-9;:@&%=+/$_.-]*)?(#[a-z_.-][a-z0-9+$_.-]*)?","gi");return r.replace(e,a).length},i=t.extend({maxCharacterSize:-1,truncate:!0,charCounter:"standard",originalStyle:"originalTextareaInfo",warningStyle:"warningTextareaInfo",errorStyle:"errorTextareaInfo",warningNumber:20,displayFormat:"#input characters | #words words"},i),t("<div class='charleft'>&nbsp;</div>").insertAfter(l),(o=l.next(".charleft")).addClass(i.originalStyle),e(),l.bind("keyup",function(){e()}).bind("mouseover paste",function(){setTimeout(function(){e()},10)})}}(jQuery);;
/*! This file is auto-generated */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):jQuery&&!jQuery.fn.hoverIntent&&e(jQuery)}(function(i){"use strict";function u(e){return"function"==typeof e}var r,v,a={interval:100,sensitivity:6,timeout:0},f=0,s=function(e){r=e.pageX,v=e.pageY},p=function(e,t,n,o){if(Math.sqrt((n.pX-r)*(n.pX-r)+(n.pY-v)*(n.pY-v))<o.sensitivity)return t.off(n.event,s),delete n.timeoutId,n.isActive=!0,e.pageX=r,e.pageY=v,delete n.pX,delete n.pY,o.over.apply(t[0],[e]);n.pX=r,n.pY=v,n.timeoutId=setTimeout(function(){p(e,t,n,o)},o.interval)};i.fn.hoverIntent=function(e,t,n){var o=f++,d=i.extend({},a);i.isPlainObject(e)?(d=i.extend(d,e),u(d.out)||(d.out=d.over)):d=u(t)?i.extend(d,{over:e,out:t,selector:n}):i.extend(d,{over:e,out:e,selector:t});t=function(e){var u=i.extend({},e),r=i(this),t=r.data("hoverIntent");t||r.data("hoverIntent",t={});var v=t[o];v||(t[o]=v={id:o}),v.timeoutId&&(v.timeoutId=clearTimeout(v.timeoutId));t=v.event="mousemove.hoverIntent.hoverIntent"+o;"mouseenter"===e.type?v.isActive||(v.pX=u.pageX,v.pY=u.pageY,r.off(t,s).on(t,s),v.timeoutId=setTimeout(function(){p(u,r,v,d)},d.interval)):v.isActive&&(r.off(t,s),v.timeoutId=setTimeout(function(){var e,t,n,o,i;e=u,t=r,n=v,o=d.out,(i=t.data("hoverIntent"))&&delete i[n.id],o.apply(t[0],[e])},d.timeout))};return this.on({"mouseenter.hoverIntent":t,"mouseleave.hoverIntent":t},d.selector)}});;
!function(c){var b={};function a(d){if(b[d])return b[d].exports;var e=b[d]={i:d,l:!1,exports:{}};return c[d].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=c,a.c=b,a.d=function(b,c,d){a.o(b,c)||Object.defineProperty(b,c,{enumerable:!0,get:d})},a.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},a.t=function(b,d){var c,e;if(1&d&&(b=a(b)),8&d)return b;if(4&d&&"object"==typeof b&&b&&b.__esModule)return b;if(c=Object.create(null),a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:b}),2&d&&"string"!=typeof b)for(e in b)a.d(c,e,function(a){return b[a]}.bind(null,e));return c},a.n=function(b){var c=b&&b.__esModule?function(){return b.default}:function(){return b};return a.d(c,"a",c),c},a.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},a.p="",a(a.s=9)}([function(j,c,d){"use strict";d.d(c,"a",function(){return g}),d.d(c,"b",function(){return h}),d.d(c,"c",function(){return i});var a=document.body,e="body-scroll-lock--active",f=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),b=0;function g(){if(f){b=window.pageYOffset;var c=document.getElementById("wpadminbar"),d=b-(c?c.offsetHeight:0);a.style.overflow="hidden",a.style.position="fixed",a.style.top="-".concat(d,"px"),a.style.width="100%",a.classList.add(e)}}function h(){f&&(a.style.removeProperty("overflow"),a.style.removeProperty("position"),a.style.removeProperty("top"),a.style.removeProperty("width"),window.scrollTo(0,b),a.classList.remove(e))}function i(){return a.classList.contains(e)}},function(b,c){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(b){"object"==typeof window&&(a=window)}b.exports=a},function(a,b){a.exports=window.jQuery},function(b,c,a){a.p=window.flatsomeVars?window.flatsomeVars.assets_url:"/"},function(o,q,p){"use strict";var a="bfred-it:object-fit-images",n=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,b="undefined"==typeof Image?{style:{"object-position":1}}:new Image,h="object-fit"in b.style,f="object-position"in b.style,l="background-size"in b.style,m="string"==typeof b.currentSrc,e=b.getAttribute,c=b.setAttribute,j=!1;function k(a,d,f){var b="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(d||1)+"' height='"+(f||0)+"'%3E%3C/svg%3E";e.call(a,"src")!==b&&c.call(a,"src",b)}function g(a,b){a.naturalWidth?b(a):setTimeout(g,100,a,b)}function i(b){var f=function(c){for(var a,d=getComputedStyle(c).fontFamily,b={};null!==(a=n.exec(d));)b[a[1]]=a[2];return b}(b),d=b[a];if(f["object-fit"]=f["object-fit"]||"fill",!d.img){if("fill"===f["object-fit"])return;if(!d.skipTest&&h&&!f["object-position"])return}if(!d.img){d.img=new Image(b.width,b.height),d.img.srcset=e.call(b,"data-ofi-srcset")||b.srcset,d.img.src=e.call(b,"data-ofi-src")||b.src,c.call(b,"data-ofi-src",b.src),b.srcset&&c.call(b,"data-ofi-srcset",b.srcset),k(b,b.naturalWidth||b.width,b.naturalHeight||b.height),b.srcset&&(b.srcset="");try{!function(b){var d={get:function(c){return b[a].img[c||"src"]},set:function(d,e){return b[a].img[e||"src"]=d,c.call(b,"data-ofi-"+e,d),i(b),d}};Object.defineProperty(b,"src",d),Object.defineProperty(b,"currentSrc",{get:function(){return d.get("currentSrc")}}),Object.defineProperty(b,"srcset",{get:function(){return d.get("srcset")},set:function(a){return d.set(a,"srcset")}})}(b)}catch(a){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(a){if(a.srcset&&!m&&window.picturefill){var b=window.picturefill._;a[b.ns]&&a[b.ns].evaled||b.fillImg(a,{reselect:!0}),a[b.ns].curSrc||(a[b.ns].supported=!1,b.fillImg(a,{reselect:!0})),a.currentSrc=a[b.ns].curSrc||a.src}}(d.img),b.style.backgroundImage='url("'+(d.img.currentSrc||d.img.src).replace(/"/g,'\\"')+'")',b.style.backgroundPosition=f["object-position"]||"center",b.style.backgroundRepeat="no-repeat",b.style.backgroundOrigin="content-box",/scale-down/.test(f["object-fit"])?g(d.img,function(){d.img.naturalWidth>b.width||d.img.naturalHeight>b.height?b.style.backgroundSize="contain":b.style.backgroundSize="auto"}):b.style.backgroundSize=f["object-fit"].replace("none","auto").replace("fill","100% 100%"),g(d.img,function(a){k(b,a.naturalWidth,a.naturalHeight)})}function d(b,c){var g=!j&&!b,e;if(c=c||{},b=b||"img",f&&!c.skipTest||!l)return!1;"img"===b?b=document.getElementsByTagName("img"):"string"==typeof b?b=document.querySelectorAll(b):"length"in b||(b=[b]);for(e=0;e<b.length;e++)b[e][a]=b[e][a]||{skipTest:c.skipTest},i(b[e]);g&&(document.body.addEventListener("load",function(a){"IMG"===a.target.tagName&&d(a.target,{skipTest:c.skipTest})},!0),j=!0,b="img"),c.watchMQ&&window.addEventListener("resize",d.bind(null,b,{skipTest:c.skipTest}))}d.supportsObjectFit=h,d.supportsObjectPosition=f,function(){function b(b,c){return b[a]&&b[a].img&&("src"===c||"srcset"===c)?b[a].img:b}f||(HTMLImageElement.prototype.getAttribute=function(a){return e.call(b(this,a),a)},HTMLImageElement.prototype.setAttribute=function(a,d){return c.call(b(this,a),a,String(d))})}(),o.exports=d},function(a,c,b){(function(c){var b;b=void 0!==c?c:this,a.exports=function(g,c,d){var e,f,a;if(void 0===c)return e=("; "+b.document.cookie).split("; "+g+"="),2===e.length?e.pop().split(";").shift():null;!1===c&&(d=-1),f="",d&&(a=new Date,a.setTime(a.getTime()+24*d*60*60*1e3),f="; expires="+a.toGMTString()),b.document.cookie=g+"="+c+f+"; path=/"}}).call(this,b(1))},function(b,c){function a(c){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?b.exports=a=function(a){return typeof a}:b.exports=a=function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a(c)}b.exports=a},function(a,b,c){void 0!==a.exports&&(a.exports=function(c){"use strict";var a=navigator.userAgent.indexOf("Edge/")>=0,b=new Image,d="object-fit"in b.style&&!a,e="object-position"in b.style&&!a,f=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;function g(c){for(var d=getComputedStyle(c).fontFamily,b=null,a={};null!==(b=f.exec(d));)a[b[1]]=b[2];return a["object-position"]?function(a){return~a["object-position"].indexOf("left")?a["object-position-x"]="left":~a["object-position"].indexOf("right")?a["object-position-x"]="right":a["object-position-x"]="center",~a["object-position"].indexOf("top")?a["object-position-y"]="top":~a["object-position"].indexOf("bottom")?a["object-position-y"]="bottom":a["object-position-y"]="center",a}(a):a}function h(b,c){var a,h,d,e,g;if("fill"!==c["object-fit"]){a=b.style,h=window.getComputedStyle(b),d=document.createElement("object-fit"),d.appendChild(b.parentNode.replaceChild(d,b)),e={height:"100%",width:"100%",boxSizing:"content-box",display:"inline-block",overflow:"hidden"};for(g in"backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight left opacity margin position right top visibility".replace(/\w+/g,function(a){e[a]=h[a]}),e)d.style[g]=e[g];a.border=a.margin=a.padding=0,a.display="block",a.opacity=1,b.addEventListener("loadedmetadata",f),window.addEventListener("optimizedResize",f),b.readyState>=1&&(b.removeEventListener("loadedmetadata",f),f())}function f(){var h=b.videoWidth/b.videoHeight,e=d.clientWidth,f=d.clientHeight,j=e/f,i=0,g=0;a.marginLeft=a.marginTop=0,(h<j?"contain"===c["object-fit"]:"cover"===c["object-fit"])?(i=f*h,g=e/h,a.width=Math.round(i)+"px",a.height=f+"px","left"===c["object-position-x"]?a.marginLeft=0:"right"===c["object-position-x"]?a.marginLeft=Math.round(e-i)+"px":a.marginLeft=Math.round((e-i)/2)+"px"):(g=e/h,a.width=e+"px",a.height=Math.round(g)+"px","top"===c["object-position-y"]?a.marginTop=0:"bottom"===c["object-position-y"]?a.marginTop=Math.round(f-g)+"px":a.marginTop=Math.round((f-g)/2)+"px"),b.autoplay&&b.play()}}d&&e||(function(a){var c=-1,b;for(a?("length"in a)||(a=[a]):a=document.querySelectorAll("video");a[++c];)b=g(a[c]),(b["object-fit"]||b["object-position"])&&(b["object-fit"]=b["object-fit"]||"fill",h(a[c],b))}(c),function(e,d,a){a=a||window;var b=!1,c=null;try{c=new CustomEvent(d)}catch(a){(c=document.createEvent("Event")).initEvent(d,!0,!0)}a.addEventListener("resize",function(){b||(b=!0,requestAnimationFrame(function(){a.dispatchEvent(c),b=!1}))})}(0,"optimizedResize"))})},function(a,b){a.exports=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}},function(b,c,a){a(3),b.exports=a(10)},function(c,b,a){"use strict";a.r(b),function(b){var c=a(5),d=a.n(c);a(11),a(12),a(13),a(14),a(15),a(16),a(17),a(18),a(19),a(20),a(22),a(23),a(24),a(25),a(26),a(52),a(27),a(28),a(29),a(30),a(31),a(32),a(33),a(34),a(35),a(36),a(37),a(38),a(39),a(40),a(41),a(53),a(42),a(43),a(44),jQuery(function(){return b.Flatsome.attach(document)}),b.cookie=d.a}.call(this,a(1))},function(v,b,m){var e,t,g,l,s,j,o,q,h,c,E,n,r,i,C,d,p,B,F,w,x,y,z,A,u,f,D,a,k;!function(c,d){a=[m(2)],void 0===(k=function(a){return function(a,b){"use strict";var g=Array.prototype.slice,c=a.console,d=void 0===c?function(){}:function(a){c.error(a)};function e(e,h,c){function i(f,b,h){var a,g="$()."+e+'("'+b+'")';return f.each(function(l,j){var f=c.data(j,e),i,k;f?(i=f[b],i&&"_"!=b.charAt(0)?(k=i.apply(f,h),a=void 0===a?k:a):d(g+" is not a valid method")):d(e+" not initialized. Cannot call methods, i.e. "+g)}),void 0!==a?a:f}function j(b,a){b.each(function(f,d){var b=c.data(d,e);b?(b.option(a),b._init()):(b=new h(d,a),c.data(d,e,b))})}(c=c||b||a.jQuery)&&(h.prototype.option||(h.prototype.option=function(a){c.isPlainObject(a)&&(this.options=c.extend(!0,this.options,a))}),c.fn[e]=function(a){if("string"==typeof a){var b=g.call(arguments,1);return i(this,a,b)}return j(this,a),this},f(c))}function f(a){!a||a&&a.bridget||(a.bridget=e)}return f(b||a.jQuery),e}(c,a)}.apply(b,a))||(v.exports=k)}(window),"undefined"!=typeof window&&window,g={id:"ev-emitter/ev-emitter",exports:{},loaded:!1},e="function"==typeof(t=function(){function b(){}var a=b.prototype;return a.on=function(a,b){if(a&&b){var c=this._events=this._events||{},d=c[a]=c[a]||[];return-1==d.indexOf(b)&&d.push(b),this}},a.once=function(a,b){if(a&&b){this.on(a,b);var c=this._onceEvents=this._onceEvents||{};return(c[a]=c[a]||{})[b]=!0,this}},a.off=function(c,d){var a=this._events&&this._events[c],b;if(a&&a.length)return b=a.indexOf(d),-1!=b&&a.splice(b,1),this},a.emitEvent=function(c,d){var a=this._events&&this._events[c],e,f,b;if(a&&a.length){a=a.slice(0),d=d||[];for(e=this._onceEvents&&this._onceEvents[c],f=0;f<a.length;f++)b=a[f],e&&e[b]&&(this.off(c,b),delete e[b]),b.apply(this,d);return this}},a.allOff=function(){delete this._events,delete this._onceEvents},b})?t.call(g.exports,m,g.exports,g):t,g.loaded=!0,void 0!==e||(e=g.exports),window,j={id:"get-size/get-size",exports:{},loaded:!1},l="function"==typeof(s=function(){"use strict";var f,a,d,b,e;function c(a){var b=parseFloat(a);return-1==a.indexOf("%")&&!isNaN(b)&&b}f="undefined"==typeof console?function(){}:function(a){console.error(a)},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],d=a.length;function g(b){var a=getComputedStyle(b);return a||f("Style returned "+a+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),a}return e=!1,function x(h){var i,f,w,j,m,v,o,p,q,u,t,k,r,n,l,s;if(function(){var a,d,f;e||(e=!0,a=document.createElement("div"),a.style.width="200px",a.style.padding="1px 2px 3px 4px",a.style.borderStyle="solid",a.style.borderWidth="1px 2px 3px 4px",a.style.boxSizing="border-box",d=document.body||document.documentElement,d.appendChild(a),f=g(a),b=200==Math.round(c(f.width)),x.isBoxSizeOuter=b,d.removeChild(a))}(),"string"==typeof h&&(h=document.querySelector(h)),h&&"object"==typeof h&&h.nodeType){if(i=g(h),"none"==i.display)return function(){for(var c={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0;b<d;b++)c[a[b]]=0;return c}();f={},f.width=h.offsetWidth,f.height=h.offsetHeight;for(w=f.isBorderBox="border-box"==i.boxSizing,j=0;j<d;j++)m=a[j],v=i[m],o=parseFloat(v),f[m]=isNaN(o)?0:o;return p=f.paddingLeft+f.paddingRight,q=f.paddingTop+f.paddingBottom,u=f.marginLeft+f.marginRight,t=f.marginTop+f.marginBottom,k=f.borderLeftWidth+f.borderRightWidth,r=f.borderTopWidth+f.borderBottomWidth,n=w&&b,l=c(i.width),!1!==l&&(f.width=l+(n?0:p+k)),s=c(i.height),!1!==s&&(f.height=s+(n?0:q+r)),f.innerWidth=f.width-(p+k),f.innerHeight=f.height-(q+r),f.outerWidth=f.width+u,f.outerHeight=f.height+t,f}}})?s.call(j.exports,m,j.exports,j):s,j.loaded=!0,void 0!==l||(l=j.exports),function(b,a){"use strict";h={id:"desandro-matches-selector/matches-selector",exports:{},loaded:!1},o="function"==typeof(q=a)?q.call(h.exports,m,h.exports,h):q,h.loaded=!0,void 0!==o||(o=h.exports)}(window,function(){"use strict";var a=function(){var a=window.Element.prototype,c,b,d;if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(c=["webkit","moz","ms","o"],b=0;b<c.length;b++)if(d=c[b]+"MatchesSelector",a[d])return d}();return function(b,c){return b[a](c)}}),function(d,e){c=function(a){return function(b,c){var a={extend:function(a,b){for(var c in b)a[c]=b[c];return a},modulo:function(b,a){return(b%a+a)%a}},e=Array.prototype.slice,d;return a.makeArray=function(a){return Array.isArray(a)?a:null==a?[]:"object"==typeof a&&"number"==typeof a.length?e.call(a):[a]},a.removeFrom=function(a,c){var b=a.indexOf(c);-1!=b&&a.splice(b,1)},a.getParent=function(a,b){for(;a.parentNode&&a!=document.body;)if(a=a.parentNode,c(a,b))return a},a.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},a.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},a.filterFindElements=function(d,e){d=a.makeArray(d);var b=[];return d.forEach(function(a){if(a instanceof HTMLElement)if(e){c(a,e)&&b.push(a);for(var f=a.querySelectorAll(e),d=0;d<f.length;d++)b.push(f[d])}else b.push(a)}),b},a.debounceMethod=function(d,a,b){b=b||100;var e=d.prototype[a],c=a+"Timeout";d.prototype[a]=function(){var d=this[c],f,a;clearTimeout(d),f=arguments,a=this,this[c]=setTimeout(function(){e.apply(a,f),delete a[c]},b)}},a.docReady=function(a){var b=document.readyState;"complete"==b||"interactive"==b?setTimeout(a):document.addEventListener("DOMContentLoaded",a)},a.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(c,a,b){return a+"-"+b}).toLowerCase()},d=b.console,a.htmlInit=function(e,c){a.docReady(function(){var g=a.toDashed(c),f="data-"+g,i=document.querySelectorAll("["+f+"]"),j=document.querySelectorAll(".js-"+g),k=a.makeArray(i).concat(a.makeArray(j)),l=f+"-options",h=b.jQuery;k.forEach(function(a){var b,g=a.getAttribute(f)||a.getAttribute(l),i;try{b=g&&JSON.parse(g)}catch(b){return void(d&&d.error("Error parsing "+f+" on "+a.className+": "+b))}i=new e(a,b),h&&h.data(a,c,i)})})},a}(d,a)}.apply(b,a=[o])}(window),window,E=function(a){return function(d,c){function b(a,b){this.element=a,this.parent=b,this.create()}var a=b.prototype;return a.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},a.destroy=function(){this.unselect(),this.element.style.position="";var a=this.parent.originSide;this.element.style[a]=""},a.getSize=function(){this.size=c(this.element)},a.setPosition=function(a){this.x=a,this.updateTarget(),this.renderPosition(a)},a.updateTarget=a.setDefaultTarget=function(){var a="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[a]+this.size.width*this.parent.cellAlign},a.renderPosition=function(a){var b=this.parent.originSide;this.element.style[b]=this.parent.getPositionValue(a)},a.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},a.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},a.wrapShift=function(a){this.shift=a,this.renderPosition(this.x+this.parent.slideableWidth*a)},a.remove=function(){this.element.parentNode.removeChild(this.element)},b}(0,a)}.apply(b,a=[l]),window,i={id:"flickity/js/slide",exports:{},loaded:!1},n="function"==typeof(r=function(){"use strict";function b(a){this.parent=a,this.isOriginLeft="left"==a.originSide,this.cells=[],this.outerWidth=0,this.height=0}var a=b.prototype;return a.addCell=function(a){if(this.cells.push(a),this.outerWidth+=a.size.outerWidth,this.height=Math.max(a.size.outerHeight,this.height),1==this.cells.length){this.x=a.x;var b=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=a.size[b]}},a.updateTarget=function(){var b=this.isOriginLeft?"marginRight":"marginLeft",a=this.getLastCell(),c=a?a.size[b]:0,d=this.outerWidth-(this.firstMargin+c);this.target=this.x+this.firstMargin+d*this.parent.cellAlign},a.getLastCell=function(){return this.cells[this.cells.length-1]},a.select=function(){this.cells.forEach(function(a){a.select()})},a.unselect=function(){this.cells.forEach(function(a){a.unselect()})},a.getCellElements=function(){return this.cells.map(function(a){return a.element})},b})?r.call(i.exports,m,i.exports,i):r,i.loaded=!0,void 0!==n||(n=i.exports),window,C=function(a){return function(b,a){return{startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){var a,b;this.applyDragForce(),this.applySelectedAttraction(),a=this.x,(this.integratePhysics(),this.positionSlider(),this.settle(a),this.isAnimating)&&(b=this,requestAnimationFrame(function(){b.animate()}))},positionSlider:function(){var b=this.x;this.options.wrapAround&&this.cells.length>1&&(b=a.modulo(b,this.slideableWidth),b-=this.slideableWidth,this.shiftWrapCells(b)),this.setTranslateX(b,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(a,c){a+=this.cursorPosition,a=this.options.rightToLeft?-a:a;var b=this.getPositionValue(a);this.slider.style.transform=c?"translate3d("+b+",0,0)":"translateX("+b+")"},dispatchScrollEvent:function(){var a=this.slides[0],b,c;a&&(b=-this.x-a.target,c=b/this.slidesWidth,this.dispatchEvent("scroll",null,[c,b]))},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(a){return this.options.percentPosition?.01*Math.round(a/this.size.innerWidth*1e4)+"%":Math.round(a)+"px"},settle:function(a){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*a)||this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(a){var b=this.cursorPosition+a,c;this._shiftCells(this.beforeShiftCells,b,-1),c=this.size.innerWidth-(a+this.slideableWidth+this.cursorPosition),this._shiftCells(this.afterShiftCells,c,1)},_shiftCells:function(b,c,e){for(var a=0,d,f;a<b.length;a++)d=b[a],f=c>0?e:0,d.wrapShift(f),c-=d.size.outerWidth},_unshiftCells:function(a){if(a&&a.length)for(var b=0;b<a.length;b++)a[b].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(a){this.velocity+=a},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var a=this.dragX-this.x-this.velocity;this.applyForce(a)}},applySelectedAttraction:function(){if((!this.isDraggable||!this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var a=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(a)}}}}(0,a)}.apply(b,a=[c]),function(f,g){d=function(a,b,c,d,e,g){return function(e,o,n,b,h,g,m){var d=e.jQuery,k=e.getComputedStyle,j=e.console,l,f,a,p;function i(a,c){for(a=b.makeArray(a);a.length;)c.appendChild(a.shift())}l=0,f={};function c(c,e){var a=b.getQueryElement(c),g;if(a){if(this.element=a,this.element.flickityGUID)return g=f[this.element.flickityGUID],g.option(e),g;d&&(this.$element=d(this.element)),this.options=b.extend({},this.constructor.defaults),this.option(e),this._create()}else j&&j.error("Bad element for Flickity: "+(a||c))}return c.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},c.createMethods=[],a=c.prototype,b.extend(a,o.prototype),a._create=function(){var a=this.guid=++l,b,d;for(b in this.element.flickityGUID=a,f[a]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&e.addEventListener("resize",this),this.options.on)d=this.options.on[b],this.on(b,d);c.createMethods.forEach(function(a){this[a]()},this),this.options.watchCSS?this.watchCSS():this.activate()},a.option=function(a){b.extend(this.options,a)},a.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),i(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},a._createSlider=function(){var a=document.createElement("div");a.className="flickity-slider",a.style[this.originSide]=0,this.slider=a},a._filterFindCellElements=function(a){return b.filterFindElements(a,this.options.cellSelector)},a.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},a._makeCells=function(a){return this._filterFindCellElements(a).map(function(a){return new h(a,this)},this)},a.getLastCell=function(){return this.cells[this.cells.length-1]},a.getLastSlide=function(){return this.slides[this.slides.length-1]},a.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},a._positionCells=function(a){var b,e,f,c,d;a=a||0,this.maxCellHeight=a&&this.maxCellHeight||0,b=0,a>0&&(e=this.cells[a-1],b=e.x+e.size.outerWidth);for(f=this.cells.length,c=a;c<f;c++)d=this.cells[c],d.setPosition(b),b+=d.size.outerWidth,this.maxCellHeight=Math.max(d.size.outerHeight,this.maxCellHeight);this.slideableWidth=b,this.updateSlides(),this._containSlides(),this.slidesWidth=f?this.getLastSlide().target-this.slides[0].target:0},a._sizeCells=function(a){a.forEach(function(a){a.getSize()})},a.updateSlides=function(){var a,b,c;this.slides=[],this.cells.length&&(a=new g(this),this.slides.push(a),b="left"==this.originSide?"marginRight":"marginLeft",c=this._getCanCellFit(),this.cells.forEach(function(d,e){if(a.cells.length){var f=a.outerWidth-a.firstMargin+(d.size.outerWidth-d.size[b]);c.call(this,e,f)||(a.updateTarget(),a=new g(this),this.slides.push(a)),a.addCell(d)}else a.addCell(d)},this),a.updateTarget(),this.updateSelectedSlide())},a._getCanCellFit=function(){var a=this.options.groupCells,c,b,d;return a?"number"==typeof a?(c=parseInt(a,10),function(a){return a%c!=0}):(b="string"==typeof a&&a.match(/^(\d+)%$/),d=b?parseInt(b[1],10)/100:1,function(b,a){return a<=(this.size.innerWidth+1)*d}):function(){return!1}},a._init=a.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},a.getSize=function(){this.size=n(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign},p={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}},a.setCellAlign=function(){var a=p[this.options.cellAlign];this.cellAlign=a?a[this.originSide]:this.options.cellAlign},a.setGallerySize=function(){if(this.options.setGallerySize){var a=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=a+"px"}},a._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var a=this.cursorPosition,b=this.cells.length-1;this.beforeShiftCells=this._getGapCells(a,b,-1),a=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(a,0,1)}},a._getGapCells=function(b,c,e){for(var d=[],a;b>0;){if(a=this.cells[c],!a)break;d.push(a),c+=e,b-=a.size.outerWidth}return d},a._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var b=this.options.rightToLeft,c=b?"marginRight":"marginLeft",d=b?"marginLeft":"marginRight",a=this.slideableWidth-this.getLastCell().size[d],e=a<this.size.innerWidth,f=this.cursorPosition+this.cells[0].size[c],g=a-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(b){e?b.target=a*this.cellAlign:(b.target=Math.max(b.target,f),b.target=Math.min(b.target,g))},this)}},a.dispatchEvent=function(b,a,c){var g=a?[a].concat(c):c,e,f;this.emitEvent(b,g),d&&this.$element&&(e=b+=this.options.namespaceJQueryEvents?".flickity":"",a&&(f=d.Event(a),f.type=b,e=f),this.$element.trigger(e,c))},a.select=function(a,c,d){if(this.isActive&&(a=parseInt(a,10),this._wrapSelect(a),(this.options.wrapAround||c)&&(a=b.modulo(a,this.slides.length)),this.slides[a])){var e=this.selectedIndex;this.selectedIndex=a,this.updateSelectedSlide(),d?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[a]),a!=e&&this.dispatchEvent("change",null,[a]),this.dispatchEvent("cellSelect")}},a._wrapSelect=function(c){var a=this.slides.length,d,e,f,g;if(!(this.options.wrapAround&&a>1))return c;d=b.modulo(c,a),e=Math.abs(d-this.selectedIndex),f=Math.abs(d+a-this.selectedIndex),g=Math.abs(d-a-this.selectedIndex),!this.isDragSelect&&f<e?c+=a:!this.isDragSelect&&g<e&&(c-=a),c<0?this.x-=this.slideableWidth:c>=a&&(this.x+=this.slideableWidth)},a.previous=function(a,b){this.select(this.selectedIndex-1,a,b)},a.next=function(a,b){this.select(this.selectedIndex+1,a,b)},a.updateSelectedSlide=function(){var a=this.slides[this.selectedIndex];a&&(this.unselectSelectedSlide(),this.selectedSlide=a,a.select(),this.selectedCells=a.cells,this.selectedElements=a.getCellElements(),this.selectedCell=a.cells[0],this.selectedElement=this.selectedElements[0])},a.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},a.selectInitialIndex=function(){var a=this.options.initialIndex,b;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(a&&"string"==typeof a&&this.queryCell(a))return void this.selectCell(a,!1,!0);b=0,a&&this.slides[a]&&(b=a),this.select(b,!1,!0)}},a.selectCell=function(b,c,d){var a=this.queryCell(b),e;a&&(e=this.getCellSlideIndex(a),this.select(e,c,d))},a.getCellSlideIndex=function(b){for(var a=0;a<this.slides.length;a++)if(-1!=this.slides[a].cells.indexOf(b))return a},a.getCell=function(c){for(var a=0,b;a<this.cells.length;a++)if(b=this.cells[a],b.element==c)return b},a.getCells=function(a){a=b.makeArray(a);var c=[];return a.forEach(function(b){var a=this.getCell(b);a&&c.push(a)},this),c},a.getCellElements=function(){return this.cells.map(function(a){return a.element})},a.getParentCell=function(a){return this.getCell(a)||(a=b.getParent(a,".flickity-slider > *"),this.getCell(a))},a.getAdjacentCellElements=function(d,a){var f,e,c,h,g;if(!d)return this.selectedSlide.getCellElements();if(a=void 0===a?this.selectedIndex:a,f=this.slides.length,1+2*d>=f)return this.getCellElements();for(e=[],c=a-d;c<=a+d;c++)h=this.options.wrapAround?b.modulo(c,f):c,g=this.slides[h],g&&(e=e.concat(g.getCellElements()));return e},a.queryCell=function(a){if("number"==typeof a)return this.cells[a];if("string"==typeof a){if(a.match(/^[#\.]?[\d\/]/))return;a=this.element.querySelector(a)}return this.getCell(a)},a.uiChange=function(){this.emitEvent("uiChange")},a.childUIPointerDown=function(a){"touchstart"!=a.type&&a.preventDefault(),this.focus()},a.onresize=function(){this.watchCSS(),this.resize()},b.debounceMethod(c,"onresize",150),a.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=b.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var a=this.selectedElements&&this.selectedElements[0];this.selectCell(a,!1,!0)}},a.watchCSS=function(){this.options.watchCSS&&(-1!=k(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},a.onkeydown=function(b){var d=document.activeElement&&document.activeElement!=this.element,a;this.options.accessibility&&!d&&(a=c.keyboardHandlers[b.keyCode],a&&a.call(this))},c.keyboardHandlers={37:function(){var a=this.options.rightToLeft?"next":"previous";this.uiChange(),this[a]()},39:function(){var a=this.options.rightToLeft?"previous":"next";this.uiChange(),this[a]()}},a.focus=function(){var a=e.pageYOffset;this.element.focus({preventScroll:!0}),e.pageYOffset!=a&&e.scrollTo(e.pageXOffset,a)},a.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(a){a.destroy()}),this.element.removeChild(this.viewport),i(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},a.destroy=function(){this.deactivate(),e.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),d&&this.$element&&d.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete f[this.guid]},b.extend(a,m),c.data=function(a){var c=(a=b.getQueryElement(a))&&a.flickityGUID;return c&&f[c]},b.htmlInit(c,"flickity"),d&&d.bridget&&d.bridget("flickity",c),c.setJQuery=function(a){d=a},c.Cell=h,c.Slide=g,c}(f,a,b,c,d,e,g)}.apply(b,a=[e,l,c,E,n,C])}(window),function(c,d){p=function(a){return function(b,e){var a,d;function c(){}return a=c.prototype=Object.create(e.prototype),a.bindStartEvent=function(a){this._bindStartEvent(a,!0)},a.unbindStartEvent=function(a){this._bindStartEvent(a,!1)},a._bindStartEvent=function(d,a){var e=(a=void 0===a||a)?"addEventListener":"removeEventListener",c="mousedown";b.PointerEvent?c="pointerdown":"ontouchstart"in b&&(c="touchstart"),d[e](c,this)},a.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},a.getTouch=function(b){for(var a=0,c;a<b.length;a++)if(c=b[a],c.identifier==this.pointerIdentifier)return c},a.onmousedown=function(a){var b=a.button;b&&0!==b&&1!==b||this._pointerDown(a,a)},a.ontouchstart=function(a){this._pointerDown(a,a.changedTouches[0])},a.onpointerdown=function(a){this._pointerDown(a,a)},a._pointerDown=function(b,a){b.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==a.pointerId?a.pointerId:a.identifier,this.pointerDown(b,a))},a.pointerDown=function(a,b){this._bindPostStartEvents(a),this.emitEvent("pointerDown",[a,b])},d={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]},a._bindPostStartEvents=function(a){if(a){var c=d[a.type];c.forEach(function(a){b.addEventListener(a,this)},this),this._boundPointerEvents=c}},a._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(a){b.removeEventListener(a,this)},this),delete this._boundPointerEvents)},a.onmousemove=function(a){this._pointerMove(a,a)},a.onpointermove=function(a){a.pointerId==this.pointerIdentifier&&this._pointerMove(a,a)},a.ontouchmove=function(a){var b=this.getTouch(a.changedTouches);b&&this._pointerMove(a,b)},a._pointerMove=function(a,b){this.pointerMove(a,b)},a.pointerMove=function(a,b){this.emitEvent("pointerMove",[a,b])},a.onmouseup=function(a){this._pointerUp(a,a)},a.onpointerup=function(a){a.pointerId==this.pointerIdentifier&&this._pointerUp(a,a)},a.ontouchend=function(a){var b=this.getTouch(a.changedTouches);b&&this._pointerUp(a,b)},a._pointerUp=function(a,b){this._pointerDone(),this.pointerUp(a,b)},a.pointerUp=function(a,b){this.emitEvent("pointerUp",[a,b])},a._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},a._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},a.pointerDone=function(){},a.onpointercancel=function(a){a.pointerId==this.pointerIdentifier&&this._pointerCancel(a,a)},a.ontouchcancel=function(a){var b=this.getTouch(a.changedTouches);b&&this._pointerCancel(a,b)},a._pointerCancel=function(a,b){this._pointerDone(),this.pointerCancel(a,b)},a.pointerCancel=function(a,b){this.emitEvent("pointerCancel",[a,b])},c.getPointerPoint=function(a){return{x:a.pageX,y:a.pageY}},c}(c,a)}.apply(b,a=[e])}(window),function(c,d){B=function(a){return function(f,c){var a,d,e;function b(){}return a=b.prototype=Object.create(c.prototype),a.bindHandles=function(){this._bindHandles(!0)},a.unbindHandles=function(){this._bindHandles(!1)},a._bindHandles=function(a){for(var d=(a=void 0===a||a)?"addEventListener":"removeEventListener",e=a?this._touchActionValue:"",b=0,c;b<this.handles.length;b++)c=this.handles[b],this._bindStartEvent(c,a),c[d]("click",this),f.PointerEvent&&(c.style.touchAction=e)},a._touchActionValue="none",a.pointerDown=function(a,b){this.okayPointerDown(a)&&(this.pointerDownPointer=b,a.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(a),this.emitEvent("pointerDown",[a,b]))},d={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},e={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0},a.okayPointerDown=function(a){var c=d[a.target.nodeName],f=e[a.target.type],b=!c||f;return b||this._pointerReset(),b},a.pointerDownBlur=function(){var a=document.activeElement;a&&a.blur&&a!=document.body&&a.blur()},a.pointerMove=function(a,b){var c=this._dragPointerMove(a,b);this.emitEvent("pointerMove",[a,b,c]),this._dragMove(a,b,c)},a._dragPointerMove=function(c,a){var b={x:a.pageX-this.pointerDownPointer.pageX,y:a.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(b)&&this._dragStart(c,a),b},a.hasDragStarted=function(a){return Math.abs(a.x)>3||Math.abs(a.y)>3},a.pointerUp=function(a,b){this.emitEvent("pointerUp",[a,b]),this._dragPointerUp(a,b)},a._dragPointerUp=function(a,b){this.isDragging?this._dragEnd(a,b):this._staticClick(a,b)},a._dragStart=function(a,b){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(a,b)},a.dragStart=function(a,b){this.emitEvent("dragStart",[a,b])},a._dragMove=function(a,b,c){this.isDragging&&this.dragMove(a,b,c)},a.dragMove=function(a,b,c){a.preventDefault(),this.emitEvent("dragMove",[a,b,c])},a._dragEnd=function(a,b){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(a,b)},a.dragEnd=function(a,b){this.emitEvent("dragEnd",[a,b])},a.onclick=function(a){this.isPreventingClicks&&a.preventDefault()},a._staticClick=function(a,b){this.isIgnoringMouseUp&&"mouseup"==a.type||(this.staticClick(a,b),"mouseup"!=a.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},a.staticClick=function(a,b){this.emitEvent("staticClick",[a,b])},b.getPointerPoint=c.getPointerPoint,b}(c,a)}.apply(b,a=[p])}(window),function(e,f){F=function(a,b,c){return function(b,c,i,d){var a,h,e,f;d.extend(c.defaults,{draggable:">1",dragThreshold:3}),c.createMethods.push("_createDrag"),a=c.prototype,d.extend(a,i.prototype),a._touchActionValue="pan-y",h="createTouch"in document,e=!1,a._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),h&&!e&&(b.addEventListener("touchmove",function(){}),e=!0)},a.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},a.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},a.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=this.slides.length>1:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},a.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},a.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},a._uiChangeDrag=function(){delete this.isFreeScrolling},a.pointerDown=function(a,c){this.isDraggable?this.okayPointerDown(a)&&(this._pointerDownPreventDefault(a),this.pointerDownFocus(a),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=g(),b.addEventListener("scroll",this),this._pointerDownDefault(a,c)):this._pointerDownDefault(a,c)},a._pointerDownDefault=function(b,a){this.pointerDownPointer={pageX:a.pageX,pageY:a.pageY},this._bindPostStartEvents(b),this.dispatchEvent("pointerDown",b,[a])},f={INPUT:!0,TEXTAREA:!0,SELECT:!0};function g(){return{x:b.pageXOffset,y:b.pageYOffset}}return a.pointerDownFocus=function(a){f[a.target.nodeName]||this.focus()},a._pointerDownPreventDefault=function(a){var b="touchstart"==a.type,c="touch"==a.pointerType,d=f[a.target.nodeName];b||c||d||a.preventDefault()},a.hasDragStarted=function(a){return Math.abs(a.x)>this.options.dragThreshold},a.pointerUp=function(a,b){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",a,[b]),this._dragPointerUp(a,b)},a.pointerDone=function(){b.removeEventListener("scroll",this),delete this.pointerDownScroll},a.dragStart=function(a,c){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),b.removeEventListener("scroll",this),this.dispatchEvent("dragStart",a,[c]))},a.pointerMove=function(a,b){var c=this._dragPointerMove(a,b);this.dispatchEvent("pointerMove",a,[b,c]),this._dragMove(a,b,c)},a.dragMove=function(f,g,b){var e,a,d,c;this.isDraggable&&(f.preventDefault(),this.previousDragX=this.dragX,e=this.options.rightToLeft?-1:1,this.options.wrapAround&&(b.x=b.x%this.slideableWidth),a=this.dragStartPosition+b.x*e,!this.options.wrapAround&&this.slides.length&&(d=Math.max(-this.slides[0].target,this.dragStartPosition),a=a>d?.5*(a+d):a,c=Math.min(-this.getLastSlide().target,this.dragStartPosition),a=a<c?.5*(a+c):a),this.dragX=a,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",f,[g,b]))},a.dragEnd=function(c,d){var a,b;this.isDraggable&&(this.options.freeScroll&&(this.isFreeScrolling=!0),a=this.dragEndRestingSelect(),this.options.freeScroll&&!this.options.wrapAround?(b=this.getRestingPosition(),this.isFreeScrolling=-b>this.slides[0].target&&-b<this.getLastSlide().target):this.options.freeScroll||a!=this.selectedIndex||(a+=this.dragEndBoostSelect()),delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(a),delete this.isDragSelect,this.dispatchEvent("dragEnd",c,[d]))},a.dragEndRestingSelect=function(){var a=this.getRestingPosition(),b=Math.abs(this.getSlideDistance(-a,this.selectedIndex)),c=this._getClosestResting(a,b,1),d=this._getClosestResting(a,b,-1);return c.distance<d.distance?c.index:d.index},a._getClosestResting=function(e,a,d){for(var b=this.selectedIndex,c=1/0,f=this.options.contain&&!this.options.wrapAround?function(a,b){return a<=b}:function(a,b){return a<b};f(a,c)&&(b+=d,c=a,null!==(a=this.getSlideDistance(-e,b)));)a=Math.abs(a);return{distance:c,index:b-d}},a.getSlideDistance=function(f,a){var b=this.slides.length,c=this.options.wrapAround&&b>1,g=c?d.modulo(a,b):a,e=this.slides[g],h;return e?(h=c?this.slideableWidth*Math.floor(a/b):0,f-(e.target+h)):null},a.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;var a=this.getSlideDistance(-this.dragX,this.selectedIndex),b=this.previousDragX-this.dragX;return a>0&&b>0?1:a<0&&b<0?-1:0},a.staticClick=function(b,c){var a=this.getParentCell(b.target),d=a&&a.element,e=a&&this.cells.indexOf(a);this.dispatchEvent("staticClick",b,[c,d,e])},a.onscroll=function(){var a=g(),b=this.pointerDownScroll.x-a.x,c=this.pointerDownScroll.y-a.y;(Math.abs(b)>3||Math.abs(c)>3)&&this._pointerDone()},c}(e,a,b,c)}.apply(b,a=[d,B,c])}(window),window,w=function(a,b,c){return function(g,b,f,d){"use strict";var e="http://www.w3.org/2000/svg",c;function a(a,b){this.direction=a,this.parent=b,this._create()}return a.prototype=Object.create(f.prototype),a.prototype._create=function(){var b,a,c;this.isEnabled=!0,this.isPrevious=-1==this.direction,b=this.parent.options.rightToLeft?1:-1,this.isLeft=this.direction==b,a=this.element=document.createElement("button"),a.className="flickity-button flickity-prev-next-button",a.className+=this.isPrevious?" previous":" next",a.setAttribute("type","button"),this.disable(),a.setAttribute("aria-label",this.isPrevious?"Previous":"Next"),c=this.createSVG(),a.appendChild(c),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},a.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},a.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},a.prototype.createSVG=function(){var b=document.createElementNS(e,"svg"),a,c,d;return b.setAttribute("class","flickity-button-icon"),b.setAttribute("viewBox","0 0 100 100"),c=document.createElementNS(e,"path"),d="string"==typeof(a=this.parent.options.arrowShape)?a:"M "+a.x0+",50 L "+a.x1+","+(a.y1+50)+" L "+a.x2+","+(a.y2+50)+" L "+a.x3+",50  L "+a.x2+","+(50-a.y2)+" L "+a.x1+","+(50-a.y1)+" Z",c.setAttribute("d",d),c.setAttribute("class","arrow"),this.isLeft||c.setAttribute("transform","translate(100, 100) rotate(180) "),b.appendChild(c),b},a.prototype.handleEvent=d.handleEvent,a.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var a=this.isPrevious?"previous":"next";this.parent[a]()}},a.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},a.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},a.prototype.update=function(){var a=this.parent.slides,b,c;this.parent.options.wrapAround&&a.length>1?this.enable():(b=a.length?a.length-1:0,c=this.isPrevious?0:b,this[this.parent.selectedIndex==c?"disable":"enable"]())},a.prototype.destroy=function(){this.deactivate(),this.allOff()},d.extend(b.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),b.createMethods.push("_createPrevNextButtons"),c=b.prototype,c._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new a(-1,this),this.nextButton=new a(1,this),this.on("activate",this.activatePrevNextButtons))},c.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},c.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},b.PrevNextButton=a,b}(0,a,b,c)}.apply(b,a=[d,p,c]),window,x=function(a,b,c){return function(f,b,d,e){function a(a){this.parent=a,this._create()}a.prototype=Object.create(d.prototype),a.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},a.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},a.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},a.prototype.setDots=function(){var a=this.parent.slides.length-this.dots.length;a>0?this.addDots(a):a<0&&this.removeDots(-a)},a.prototype.addDots=function(g){for(var c=document.createDocumentFragment(),d=[],e=this.dots.length,f=e+g,b=e,a;b<f;b++)a=document.createElement("li"),a.className="dot",a.setAttribute("aria-label","Page dot "+(b+1)),c.appendChild(a),d.push(a);this.holder.appendChild(c),this.dots=this.dots.concat(d)},a.prototype.removeDots=function(a){this.dots.splice(this.dots.length-a,a).forEach(function(a){this.holder.removeChild(a)},this)},a.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},a.prototype.onTap=a.prototype.onClick=function(b){var a=b.target,c;"LI"==a.nodeName&&(this.parent.uiChange(),c=this.dots.indexOf(a),this.parent.select(c))},a.prototype.destroy=function(){this.deactivate(),this.allOff()},b.PageDots=a,e.extend(b.defaults,{pageDots:!0}),b.createMethods.push("_createPageDots");var c=b.prototype;return c._createPageDots=function(){this.options.pageDots&&(this.pageDots=new a(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},c.activatePageDots=function(){this.pageDots.activate()},c.updateSelectedPageDots=function(){this.pageDots.updateSelected()},c.updatePageDots=function(){this.pageDots.setDots()},c.deactivatePageDots=function(){this.pageDots.deactivate()},b.PageDots=a,b}(0,a,b,c)}.apply(b,a=[d,p,c]),window,y=function(a,b,c){return function(d,e,c){function a(a){this.parent=a,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}a.prototype=Object.create(d.prototype),a.prototype.play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},a.prototype.tick=function(){var a,b;"playing"==this.state&&(a=this.parent.options.autoPlay,a="number"==typeof a?a:3e3,b=this,this.clear(),this.timeout=setTimeout(function(){b.parent.next(!0),b.tick()},a))},a.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},a.prototype.clear=function(){clearTimeout(this.timeout)},a.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},a.prototype.unpause=function(){"paused"==this.state&&this.play()},a.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},a.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(c.defaults,{pauseAutoPlayOnHover:!0}),c.createMethods.push("_createPlayer");var b=c.prototype;return b._createPlayer=function(){this.player=new a(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},b.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},b.playPlayer=function(){this.player.play()},b.stopPlayer=function(){this.player.stop()},b.pausePlayer=function(){this.player.pause()},b.unpausePlayer=function(){this.player.unpause()},b.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},b.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},b.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},c.Player=a,c}(a,b,c)}.apply(b,a=[e,c,d]),window,z=function(a,b){return function(d,b,c){var a=b.prototype;return a.insert=function(f,a){var b=this._makeCells(f),c,d,e,g,h;b&&b.length&&(c=this.cells.length,a=void 0===a?c:a,d=function(b){var a=document.createDocumentFragment();return b.forEach(function(b){a.appendChild(b.element)}),a}(b),e=a==c,e?this.slider.appendChild(d):(g=this.cells[a].element,this.slider.insertBefore(d,g)),0===a?this.cells=b.concat(this.cells):e?this.cells=this.cells.concat(b):(h=this.cells.splice(a,c-a),this.cells=this.cells.concat(b).concat(h)),this._sizeCells(b),this.cellChange(a,!0))},a.append=function(a){this.insert(a,this.cells.length)},a.prepend=function(a){this.insert(a,0)},a.remove=function(d){var a=this.getCells(d),b;a&&a.length&&(b=this.cells.length-1,a.forEach(function(a){a.remove();var d=this.cells.indexOf(a);b=Math.min(d,b),c.removeFrom(this.cells,a)},this),this.cellChange(b,!0))},a.cellSizeChange=function(b){var a=this.getCell(b),c;a&&(a.getSize(),c=this.cells.indexOf(a),this.cellChange(c))},a.cellChange=function(a,c){var d=this.selectedElement,b;this._positionCells(a),this._getWrapShiftCells(),this.setGallerySize(),b=this.getCell(d),b&&(this.selectedIndex=this.getCellSlideIndex(b)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[a]),this.select(this.selectedIndex),c&&this.positionSliderAtSelected()},b}(0,a,b)}.apply(b,a=[d,c]),window,A=function(a,b){return function(e,b,c){"use strict";b.createMethods.push("_createLazyload");var d=b.prototype;function a(a,b){this.img=a,this.flickity=b,this.load()}return d._createLazyload=function(){this.on("select",this.lazyLoad)},d.lazyLoad=function(){var b=this.options.lazyLoad,e,f,d;b&&(e="number"==typeof b?b:0,f=this.getAdjacentCellElements(e),d=[],f.forEach(function(a){var b=function(a){var b,d,e,f;if("IMG"==a.nodeName)if(b=a.getAttribute("data-flickity-lazyload"),d=a.getAttribute("data-flickity-lazyload-src"),e=a.getAttribute("data-flickity-lazyload-srcset"),b||d||e)return[a];return f=a.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]"),c.makeArray(f)}(a);d=d.concat(b)}),d.forEach(function(b){new a(b,this)},this))},a.prototype.handleEvent=c.handleEvent,a.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var b=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),a=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=b,a&&this.img.setAttribute("srcset",a),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},a.prototype.onload=function(a){this.complete(a,"flickity-lazyloaded")},a.prototype.onerror=function(a){this.complete(a,"flickity-lazyerror")},a.prototype.complete=function(c,d){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var a=this.flickity.getParentCell(this.img),b=a&&a.element;this.flickity.cellSizeChange(b),this.img.classList.add(d),this.flickity.dispatchEvent("lazyLoad",c,b)},b.LazyLoader=a,b}(0,a,b)}.apply(b,a=[d,c]),window,a=[d,F,w,x,y,z,A],u="function"==typeof(f=function(a){return a})?f.apply(b,a):f,window,a=[u,c],void 0===(k="function"==typeof(f=function(b,c){b.createMethods.push("_createAsNavFor");var a=b.prototype;return a._createAsNavFor=function(){var a,b;this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor),a=this.options.asNavFor,a&&(b=this,setTimeout(function(){b.setNavCompanion(a)}))},a.setNavCompanion=function(d){var a,e;d=c.getQueryElement(d),a=b.data(d),a&&a!=this&&(this.navCompanion=a,e=this,this.onNavCompanionSelect=function(){e.navCompanionSelect()},a.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0))},a.navCompanionSelect=function(g){var a=this.navCompanion&&this.navCompanion.selectedCells,d,f,b,e,c,h;a&&(f=a[0],b=this.navCompanion.cells.indexOf(f),e=b+a.length-1,c=Math.floor((e-(d=b))*this.navCompanion.cellAlign+d),(this.selectCell(c,!1,g),this.removeNavSelectedElements(),!(c>=this.cells.length))&&(h=this.cells.slice(b,e+1),this.navSelectedElements=h.map(function(a){return a.element}),this.changeNavSelectedClass("add")))},a.changeNavSelectedClass=function(a){this.navSelectedElements.forEach(function(b){b.classList[a]("is-nav-selected")})},a.activateAsNavFor=function(){this.navCompanionSelect(!0)},a.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},a.onNavStaticClick=function(b,c,d,a){"number"==typeof a&&this.navCompanion.selectCell(a)},a.deactivateAsNavFor=function(){this.removeNavSelectedElements()},a.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},b})?f.apply(b,a):f)||(v.exports=k),function(c,d){"use strict";D=function(a){return function(e,g){var d=e.jQuery,f=e.console,i,j;function h(a,b){for(var c in b)a[c]=b[c];return a}i=Array.prototype.slice;function a(c,e,g){if(!(this instanceof a))return new a(c,e,g);var b,j=c;"string"==typeof c&&(j=document.querySelectorAll(c)),j?(this.elements=(b=j,Array.isArray(b)?b:"object"==typeof b&&"number"==typeof b.length?i.call(b):[b]),this.options=h({},this.options),"function"==typeof e?g=e:h(this.options,e),g&&this.on("always",g),this.getImages(),d&&(this.jqDeferred=new d.Deferred),setTimeout(this.check.bind(this))):f.error("Bad element for imagesLoaded "+(j||c))}a.prototype=Object.create(g.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(b){var c,d,a,f,e,g;if("IMG"==b.nodeName&&this.addImage(b),!0===this.options.background&&this.addElementBackgroundImages(b),c=b.nodeType,c&&j[c]){for(d=b.querySelectorAll("img"),a=0;a<d.length;a++)f=d[a],this.addImage(f);if("string"==typeof this.options.background){e=b.querySelectorAll(this.options.background);for(a=0;a<e.length;a++)g=e[a],this.addElementBackgroundImages(g)}}},j={1:!0,9:!0,11:!0};function b(a){this.img=a}function c(a,b){this.url=a,this.element=b,this.img=new Image}return a.prototype.addElementBackgroundImages=function(c){var b=getComputedStyle(c),d,a,e;if(b)for(d=/url\((['"])?(.*?)\1\)/gi,a=d.exec(b.backgroundImage);null!==a;)e=a&&a[2],e&&this.addBackground(e,c),a=d.exec(b.backgroundImage)},a.prototype.addImage=function(a){var c=new b(a);this.images.push(c)},a.prototype.addBackground=function(a,b){var d=new c(a,b);this.images.push(d)},a.prototype.check=function(){var a=this;function b(b,c,d){setTimeout(function(){a.progress(b,c,d)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(a){a.once("progress",b),a.check()}):this.complete()},a.prototype.progress=function(a,b,c){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!a.isLoaded,this.emitEvent("progress",[this,a,b]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,a),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&f&&f.log("progress: "+c,a,b)},a.prototype.complete=function(){var a=this.hasAnyBroken?"fail":"done",b;this.isComplete=!0,this.emitEvent(a,[this]),this.emitEvent("always",[this]),this.jqDeferred&&(b=this.hasAnyBroken?"reject":"resolve",this.jqDeferred[b](this))},b.prototype=Object.create(g.prototype),b.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},b.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},b.prototype.confirm=function(a,b){this.isLoaded=a,this.emitEvent("progress",[this,this.img,b])},b.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},b.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},b.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},b.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype=Object.create(b.prototype),c.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},c.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype.confirm=function(a,b){this.isLoaded=a,this.emitEvent("progress",[this,this.element,b])},a.makeJQueryPlugin=function(b){(b=b||e.jQuery)&&((d=b).fn.imagesLoaded=function(b,c){return new a(this,b,c).jqDeferred.promise(d(this))})},a.makeJQueryPlugin(),a}(c,a)}.apply(b,a=[e])}("undefined"!=typeof window?window:this),window,void 0===(k=function(a,b){return function(d,a,c){"use strict";a.createMethods.push("_createImagesLoaded");var b=a.prototype;return b._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},b.imagesLoaded=function(){if(this.options.imagesLoaded){var a=this;c(this.slider).on("progress",function(d,c){var b=a.getParentCell(c.img);a.cellSizeChange(b&&b.element),a.options.freeScroll||a.positionSliderAtSelected()})}},a}(0,a,b)}.apply(b,a=[u,D]))||(v.exports=k)},function(a,b){!function(){var a=window.MutationObserver||window.WebKitMutationObserver,c="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,d,e,f,b;void 0===document.documentElement.style["touch-action"]&&!document.documentElement.style["-ms-touch-action"]&&c&&a&&(window.Hammer=window.Hammer||{},d=/touch-action[:][\s]*(none)[^;'"]*/,e=/touch-action[:][\s]*(manipulation)[^;'"]*/,f=/touch-action/,b=/(iP(ad|hone|od))/.test(navigator.userAgent)&&("indexedDB"in window||!!window.performance),window.Hammer.time={getTouchAction:function(a){return this.checkStyleString(a.getAttribute("style"))},checkStyleString:function(a){if(f.test(a))return d.test(a)?"none":!e.test(a)||"manipulation"},shouldHammer:function(a){var c=a.target.hasParent;return!(!c||b&&!(Date.now()-a.target.lastStart<125))&&c},touchHandler:function(a){var b=this.shouldHammer(a),c;"none"===b?this.dropHammer(a):"manipulation"===b&&(c=a.target.getBoundingClientRect(),c.top===this.pos.top&&c.left===this.pos.left&&this.dropHammer(a)),this.scrolled=!1,delete a.target.lastStart,delete a.target.hasParent},dropHammer:function(a){"touchend"===a.type&&(a.target.focus(),setTimeout(function(){a.target.click()},0)),a.preventDefault()},touchStart:function(a){this.pos=a.target.getBoundingClientRect(),a.target.hasParent=this.hasParent(a.target),b&&a.target.hasParent&&(a.target.lastStart=Date.now())},styleWatcher:function(a){a.forEach(this.styleUpdater,this)},styleUpdater:function(a){if(a.target.updateNext)a.target.updateNext=!1;else{var b=this.getTouchAction(a.target);b?"none"!==b&&(a.target.hadTouchNone=!1):!b&&(a.oldValue&&this.checkStyleString(a.oldValue)||a.target.hadTouchNone)&&(a.target.hadTouchNone=!0,a.target.updateNext=!1,a.target.setAttribute("style",a.target.getAttribute("style")+" touch-action: none;"))}},hasParent:function(c){for(var b,a=c;a&&a.parentNode;a=a.parentNode)if(b=this.getTouchAction(a))return b;return!1},installStartEvents:function(){document.addEventListener("touchstart",this.touchStart.bind(this)),document.addEventListener("mousedown",this.touchStart.bind(this))},installEndEvents:function(){document.addEventListener("touchend",this.touchHandler.bind(this),!0),document.addEventListener("mouseup",this.touchHandler.bind(this),!0)},installObserver:function(){this.observer=new a(this.styleWatcher.bind(this)).observe(document,{subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["style"]})},install:function(){this.installEndEvents(),this.installStartEvents(),this.installObserver()}},window.Hammer.time.install())}()},function(a,b,c){!function(){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var c=function(){function a(d,c){for(var b=0,a;b<c.length;b++)a=c[b],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),a=function(){var a=".stickySidebar",d={topSpacing:0,bottomSpacing:0,containerSelector:!1,innerWrapperSelector:".inner-wrapper-sticky",stickyClass:"is-affixed",resizeSensor:!0,minWidth:!1};return function(){function e(a){var c=this,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(b(this,e),this.options=e.extend(d,f),this.sidebar="string"==typeof a?document.querySelector(a):a,void 0===this.sidebar)throw new Error("There is no specific sidebar element.");this.sidebarInner=!1,this.container=this.sidebar.parentElement,this.affixedType="STATIC",this.direction="down",this.support={transform:!1,transform3d:!1},this._initialized=!1,this._reStyle=!1,this._breakpoint=!1,this._resizeListeners=[],this.dimensions={translateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},["handleEvent"].forEach(function(a){c[a]=c[a].bind(c)}),this.initialize()}return c(e,[{key:"initialize",value:function(){var c=this,a,b;if(this._setSupportFeatures(),this.options.innerWrapperSelector&&(this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector),null===this.sidebarInner&&(this.sidebarInner=!1)),!this.sidebarInner){a=document.createElement("div");for(a.setAttribute("class","inner-wrapper-sticky"),this.sidebar.appendChild(a);this.sidebar.firstChild!=a;)a.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector(".inner-wrapper-sticky")}if(this.options.containerSelector)if(b=document.querySelectorAll(this.options.containerSelector),(b=Array.prototype.slice.call(b)).forEach(function(a,b){a.contains(c.sidebar)&&(c.container=a)}),!b.length)throw new Error("The container does not contains on the sidebar.");"function"!=typeof this.options.topSpacing&&(this.options.topSpacing=parseInt(this.options.topSpacing)||0),"function"!=typeof this.options.bottomSpacing&&(this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0),this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(),this.bindEvents(),this._initialized=!0}},{key:"bindEvents",value:function(){window.addEventListener("resize",this,{passive:!0,capture:!1}),window.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update"+a,this),this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(new ResizeSensor(this.sidebarInner,this.handleEvent),new ResizeSensor(this.container,this.handleEvent))}},{key:"handleEvent",value:function(a){this.updateSticky(a)}},{key:"calcDimensions",value:function(){if(!this._breakpoint){var a=this.dimensions;a.containerTop=e.offsetRelative(this.container).top,a.containerHeight=this.container.clientHeight,a.containerBottom=a.containerTop+a.containerHeight,a.sidebarHeight=this.sidebarInner.offsetHeight,a.sidebarWidth=this.sidebar.offsetWidth,a.viewportHeight=window.innerHeight,this._calcDimensionsWithScroll()}}},{key:"_calcDimensionsWithScroll",value:function(){var a=this.dimensions;a.sidebarLeft=e.offsetRelative(this.sidebar).left,a.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,a.viewportBottom=a.viewportTop+a.viewportHeight,a.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft,a.topSpacing=this.options.topSpacing,a.bottomSpacing=this.options.bottomSpacing,"function"==typeof a.topSpacing&&(a.topSpacing=parseInt(a.topSpacing(this.sidebar))||0),"function"==typeof a.bottomSpacing&&(a.bottomSpacing=parseInt(a.bottomSpacing(this.sidebar))||0),"VIEWPORT-TOP"===this.affixedType?a.topSpacing<a.lastTopSpacing&&(a.translateY+=a.lastTopSpacing-a.topSpacing,this._reStyle=!0):"VIEWPORT-BOTTOM"===this.affixedType&&a.bottomSpacing<a.lastBottomSpacing&&(a.translateY+=a.lastBottomSpacing-a.bottomSpacing,this._reStyle=!0),a.lastTopSpacing=a.topSpacing,a.lastBottomSpacing=a.bottomSpacing}},{key:"isSidebarFitsViewport",value:function(){return this.dimensions.sidebarHeight<this.dimensions.viewportHeight}},{key:"observeScrollDir",value:function(){var a=this.dimensions,b;a.lastViewportTop!==a.viewportTop&&(b="down"===this.direction?Math.min:Math.max,a.viewportTop===b(a.viewportTop,a.lastViewportTop)&&(this.direction="down"===this.direction?"up":"down"))}},{key:"getAffixType",value:function(){var a=this.dimensions,b=!1,d,c,e;return this._calcDimensionsWithScroll(),d=a.sidebarHeight+a.containerTop,c=a.viewportTop+a.topSpacing,e=a.viewportBottom-a.bottomSpacing,"up"===this.direction?c<=a.containerTop?(a.translateY=0,b="STATIC"):c<=a.translateY+a.containerTop?(a.translateY=c-a.containerTop,b="VIEWPORT-TOP"):!this.isSidebarFitsViewport()&&a.containerTop<=c&&(b="VIEWPORT-UNBOTTOM"):this.isSidebarFitsViewport()?a.sidebarHeight+c>=a.containerBottom?(a.translateY=a.containerBottom-d,b="CONTAINER-BOTTOM"):c>=a.containerTop&&(a.translateY=c-a.containerTop,b="VIEWPORT-TOP"):a.containerBottom<=e?(a.translateY=a.containerBottom-d,b="CONTAINER-BOTTOM"):d+a.translateY<=e?(a.translateY=e-d,b="VIEWPORT-BOTTOM"):a.containerTop+a.translateY<=c&&(b="VIEWPORT-UNBOTTOM"),a.translateY=Math.max(0,a.translateY),a.translateY=Math.min(a.containerHeight,a.translateY),a.lastViewportTop=a.viewportTop,b}},{key:"_getStyle",value:function(c){var b,a,d;if(void 0!==c){switch(b={inner:{},outer:{}},a=this.dimensions,c){case"VIEWPORT-TOP":b.inner={position:"fixed",top:a.topSpacing,left:a.sidebarLeft-a.viewportLeft,width:a.sidebarWidth};break;case"VIEWPORT-BOTTOM":b.inner={position:"fixed",top:"auto",left:a.sidebarLeft,bottom:a.bottomSpacing,width:a.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":d=this._getTranslate(0,a.translateY+"px"),b.inner=d?{transform:d}:{position:"absolute",top:a.translateY,width:a.sidebarWidth}}switch(c){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":b.outer={height:a.sidebarHeight,position:"relative"}}return b.outer=e.extend({height:"",position:""},b.outer),b.inner=e.extend({position:"relative",top:"",left:"",bottom:"",width:"",transform:this._getTranslate()},b.inner),b}}},{key:"stickyPosition",value:function(f){var b,c,h,g,d,i,j;if(!this._breakpoint){if(f=this._reStyle||f||!1,b=this.getAffixType(),c=this._getStyle(b),(this.affixedType!=b||f)&&b){h="affix."+b.toLowerCase().replace("viewport-","")+a;for(g in e.eventTrigger(this.sidebar,h),"STATIC"===b?e.removeClass(this.sidebar,this.options.stickyClass):e.addClass(this.sidebar,this.options.stickyClass),c.outer)this.sidebar.style[g]=c.outer[g];for(d in c.inner)i="number"==typeof c.inner[d]?"px":"",this.sidebarInner.style[d]=c.inner[d]+i;j="affixed."+b.toLowerCase().replace("viewport-","")+a,e.eventTrigger(this.sidebar,j)}else this._initialized&&(this.sidebarInner.style.left=c.inner.left);this.affixedType=b}}},{key:"_widthBreakpoint",value:function(){window.innerWidth<=this.options.minWidth?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar.removeAttribute("style"),e.removeClass(this.sidebar,this.options.stickyClass),this.sidebarInner.removeAttribute("style")):this._breakpoint=!1}},{key:"updateSticky",value:function(){var a=this,b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._running||(this._running=!0,function(b){requestAnimationFrame(function(){switch(b){case"scroll":a._calcDimensionsWithScroll(),a.observeScrollDir(),a.stickyPosition();break;case"resize":default:a._widthBreakpoint(),a.calcDimensions(),a.stickyPosition(!0)}a._running=!1})}(b.type))}},{key:"_setSupportFeatures",value:function(){var a=this.support;a.transform=e.supportTransform(),a.transform3d=e.supportTransform(!0)}},{key:"_getTranslate",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.support.transform3d?"translate3d("+a+", "+b+", "+c+")":!!this.support.translate&&"translate("+a+", "+b+")"}},{key:"destroy",value:function(){var b,c,d;window.removeEventListener("resize",this,{caption:!1}),window.removeEventListener("scroll",this,{caption:!1}),this.sidebar.classList.remove(this.options.stickyClass),this.sidebar.style.minHeight="",this.sidebar.removeEventListener("update"+a,this),b={inner:{},outer:{}};for(c in b.inner={position:"",top:"",left:"",bottom:"",width:"",transform:""},b.outer={height:"",position:""},b.outer)this.sidebar.style[c]=b.outer[c];for(d in b.inner)this.sidebarInner.style[d]=b.inner[d];this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(ResizeSensor.detach(this.sidebarInner,this.handleEvent),ResizeSensor.detach(this.container,this.handleEvent))}}],[{key:"supportTransform",value:function(d){var b=!1,a=d?"perspective":"transform",c=a.charAt(0).toUpperCase()+a.slice(1),e=document.createElement("support").style;return(a+" "+["Webkit","Moz","O","ms"].join(c+" ")+c).split(" ").forEach(function(a,c){if(void 0!==e[a])return b=a,!1}),b}},{key:"eventTrigger",value:function(d,a,b){try{var c=new CustomEvent(a,{detail:b})}catch(d){(c=document.createEvent("CustomEvent")).initCustomEvent(a,!0,!0,b)}d.dispatchEvent(c)}},{key:"extend",value:function(c,d){var b={},a;for(a in c)void 0!==d[a]?b[a]=d[a]:b[a]=c[a];return b}},{key:"offsetRelative",value:function(a){var b={left:0,top:0},c,d;do c=a.offsetTop,d=a.offsetLeft,isNaN(c)||(b.top+=c),isNaN(d)||(b.left+=d),a="BODY"===a.tagName?a.parentElement:a.offsetParent;while(a)return b}},{key:"addClass",value:function(a,b){e.hasClass(a,b)||(a.classList?a.classList.add(b):a.className+=" "+b)}},{key:"removeClass",value:function(a,b){e.hasClass(a,b)&&(a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(a,b){return a.classList?a.classList.contains(b):new RegExp("(^| )"+b+"( |$)","gi").test(a.className)}}]),e}()}();window.StickySidebar=a,function(){var b,c;"undefined"!=typeof window&&(b=window.$||window.jQuery||window.Zepto,b&&(b.fn.stickySidebar=function(c){return this.each(function(){var e=b(this),d=b(this).data("stickySidebar");if(d||(d=new a(this,"object"==typeof c&&c),e.data("stickySidebar",d)),"string"==typeof c){if(void 0===d[c]&&-1===["destroy","updateSticky"].indexOf(c))throw new Error('No method named "'+c+'"');d[c]()}})},b.fn.stickySidebar.Constructor=a,c=b.fn.stickySidebar,b.fn.stickySidebar.noConflict=function(){return b.fn.stickySidebar=c,this}))}()}()},function(d,e,f){var a,b,c;!function(g){"use strict";b=[f(2)],void 0===(c="function"==typeof(a=function(a){var b=a.scrollTo=function(b,c,d){return a(window).scrollTo(b,c,d)};function d(b){return!b.nodeName||-1!==a.inArray(b.nodeName.toLowerCase(),["iframe","#document","html","body"])}function c(b){return a.isFunction(b)||a.isPlainObject(b)?b:{top:b,left:b}}return b.defaults={axis:"xy",duration:0,limit:!0},a.fn.scrollTo=function(g,f,e){"object"==typeof f&&(e=f,f=0),"function"==typeof e&&(e={onAfter:e}),"max"===g&&(g=9e9),e=a.extend({},b.defaults,e),f=f||e.duration;var h=e.queue&&e.axis.length>1;return h&&(f/=2),e.offset=c(e.offset),e.over=c(e.over),this.each(function(){var l,m,k,n,i,j,o;if(null!==g){switch(m=d(this),k=m?this.contentWindow||window:this,n=a(k),i=g,j={},typeof i){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(i)){i=c(i);break}i=m?a(i):a(i,k);case"object":if(0===i.length)return;(i.is||i.style)&&(l=(i=a(i)).offset())}o=a.isFunction(e.offset)&&e.offset(k,i)||e.offset,a.each(e.axis.split(""),function(s,g){var f="x"===g?"Left":"Top",c=f.toLowerCase(),a="scroll"+f,r=n[a](),q=b.max(k,g),d;l?(j[a]=l[c]+(m?0:r-n.offset()[c]),e.margin&&(j[a]-=parseInt(i.css("margin"+f),10)||0,j[a]-=parseInt(i.css("border"+f+"Width"),10)||0),j[a]+=o[c]||0,e.over[c]&&(j[a]+=i["x"===g?"width":"height"]()*e.over[c])):(d=i[c],j[a]=d.slice&&"%"===d.slice(-1)?parseFloat(d)/100*q:d),e.limit&&/^\d+$/.test(j[a])&&(j[a]=j[a]<=0?0:Math.min(j[a],q)),!s&&e.axis.length>1&&(r===j[a]?j={}:h&&(p(e.onAfterFirst),j={}))}),p(e.onAfter)}function p(b){var c=a.extend({},e,{queue:!0,duration:f,complete:b&&function(){b.call(k,i,e)}});n.animate(j,c)}})},b.max=function(b,j){var c="x"===j?"Width":"Height",e="scroll"+c,g,h,i,f;return d(b)?(g="client"+c,h=b.ownerDocument||b.document,i=h.documentElement,f=h.body,Math.max(i[e],f[e])-Math.min(i[g],f[g])):b[e]-a(b)[c.toLowerCase()]()},a.Tween.propHooks.scrollLeft=a.Tween.propHooks.scrollTop={get:function(b){return a(b.elem)[b.prop]()},set:function(b){var c=this.get(b),d;if(b.options.interrupt&&b._last&&b._last!==c)return a(b.elem).stop();d=Math.round(b.now),c!==d&&(a(b.elem)[b.prop](d),b._last=this.get(b))}},b})?a.apply(e,b):a)||(d.exports=c)}()},function(d,e,f){var a,b,c;b=[f(2)],void 0===(c="function"==typeof(a=function(b){var a,q,e,n,g,z,m=function(){},r=!!window.jQuery,h=b(window),d=function(b,c){a.ev.on("mfp"+b+".mfp",c)},j=function(e,c,d,f){var a=document.createElement("div");return a.className="mfp-"+e,d&&(a.innerHTML=d),f?c&&c.appendChild(a):(a=b(a),c&&a.appendTo(c)),a},c=function(c,d){a.ev.triggerHandler("mfp"+c,d),a.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),a.st.callbacks[c]&&a.st.callbacks[c].apply(a,b.isArray(d)?d:[d]))},t=function(c){return c===z&&a.currTemplate.closeBtn||(a.currTemplate.closeBtn=b(a.st.closeMarkup.replace("%title%",a.st.tClose)),z=c),a.currTemplate.closeBtn},w=function(){b.magnificPopup.instance||((a=new m).init(),b.magnificPopup.instance=a)},i,l,o,y,k,u,x,f,v,B,s,p,A;m.prototype={constructor:m,init:function(){var c=navigator.appVersion;a.isLowIE=a.isIE8=document.all&&!document.addEventListener,a.isAndroid=/android/gi.test(c),a.isIOS=/iphone|ipad|ipod/gi.test(c),a.supportsTransition=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1}(),a.probablyMobile=a.isAndroid||a.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),e=b(document),a.popupsCache={}},open:function(f){var i,k,r,o,l,p,n,q,m;if(!1===f.isObj){{a.items=f.items.toArray(),a.index=0,r=f.items;for(i=0;i<r.length;i++)if((k=r[i]).parsed&&(k=k.el[0]),k===f.el[0]){a.index=i;break}}}else a.items=b.isArray(f.items)?f.items:[f.items],a.index=f.index||0;if(!a.isOpen){a.types=[],g="",f.mainEl&&f.mainEl.length?a.ev=f.mainEl.eq(0):a.ev=e,f.key?(a.popupsCache[f.key]||(a.popupsCache[f.key]={}),a.currTemplate=a.popupsCache[f.key]):a.currTemplate={},a.st=b.extend(!0,{},b.magnificPopup.defaults,f),a.fixedContentPos="auto"===a.st.fixedContentPos?!a.probablyMobile:a.st.fixedContentPos,a.st.modal&&(a.st.closeOnContentClick=!1,a.st.closeOnBgClick=!1,a.st.showCloseBtn=!1,a.st.enableEscapeKey=!1),a.bgOverlay||(a.bgOverlay=j("bg").on("click.mfp",function(){a.close()}),a.wrap=j("wrap").attr("tabindex",-1).on("click.mfp",function(b){a._checkIfClose(b.target)&&a.close()}),a.container=j("container",a.wrap)),a.contentContainer=j("content"),a.st.preloader&&(a.preloader=j("preloader",a.container,a.st.tLoading)),o=b.magnificPopup.modules;for(i=0;i<o.length;i++)l=o[i],l=l.charAt(0).toUpperCase()+l.slice(1),a["init"+l].call(a);return c("BeforeOpen"),a.st.showCloseBtn&&(a.st.closeBtnInside?(d("MarkupParse",function(c,d,a,b){a.close_replaceWith=t(b.type)}),g+=" mfp-close-btn-in"):a.wrap.append(t())),a.st.alignTop&&(g+=" mfp-align-top"),a.fixedContentPos?a.wrap.css({overflow:a.st.overflowY,overflowX:"hidden",overflowY:a.st.overflowY}):a.wrap.css({top:h.scrollTop(),position:"absolute"}),(!1===a.st.fixedBgPos||"auto"===a.st.fixedBgPos&&!a.fixedContentPos)&&a.bgOverlay.css({height:e.height(),position:"absolute"}),a.st.enableEscapeKey&&e.on("keyup.mfp",function(b){27===b.keyCode&&a.close()}),h.on("resize.mfp",function(){a.updateSize()}),a.st.closeOnContentClick||(g+=" mfp-auto-cursor"),g&&a.wrap.addClass(g),p=a.wH=h.height(),n={},a.fixedContentPos&&a._hasScrollBar(p)&&(q=a._getScrollbarSize(),q&&(n.marginRight=q)),a.fixedContentPos&&(a.isIE7?b("body, html").css("overflow","hidden"):n.overflow="hidden"),m=a.st.mainClass,a.isIE7&&(m+=" mfp-ie7"),m&&a._addClassToMFP(m),a.updateItemHTML(),c("BuildControls"),b("html").css(n),a.bgOverlay.add(a.wrap).prependTo(a.st.prependTo||b(document.body)),a._lastFocusedEl=document.activeElement,setTimeout(function(){a.content?(a._addClassToMFP("mfp-ready"),a._setFocus()):a.bgOverlay.addClass("mfp-ready"),e.on("focusin.mfp",a._onFocusIn)},16),a.isOpen=!0,a.updateSize(p),c("Open"),f}a.updateItemHTML()},close:function(){a.isOpen&&(c("BeforeClose"),a.isOpen=!1,a.st.removalDelay&&!a.isLowIE&&a.supportsTransition?(a._addClassToMFP("mfp-removing"),setTimeout(function(){a._close()},a.st.removalDelay)):a._close())},_close:function(){var d,f;c("Close"),d="mfp-removing mfp-ready ",(a.bgOverlay.detach(),a.wrap.detach(),a.container.empty(),a.st.mainClass&&(d+=a.st.mainClass+" "),a._removeClassFromMFP(d),a.fixedContentPos)&&(f={marginRight:""},a.isIE7?b("body, html").css("overflow",""):f.overflow="",b("html").css(f)),e.off("keyup.mfp focusin.mfp"),a.ev.off(".mfp"),a.wrap.attr("class","mfp-wrap").removeAttr("style"),a.bgOverlay.attr("class","mfp-bg"),a.container.attr("class","mfp-container"),!a.st.showCloseBtn||a.st.closeBtnInside&&!0!==a.currTemplate[a.currItem.type]||a.currTemplate.closeBtn&&a.currTemplate.closeBtn.detach(),a.st.autoFocusLast&&a._lastFocusedEl&&b(a._lastFocusedEl).focus(),a.currItem=null,a.content=null,a.currTemplate=null,a.prevHeight=0,c("AfterClose")},updateSize:function(d){if(a.isIOS){var e=document.documentElement.clientWidth/window.innerWidth,b=window.innerHeight*e;a.wrap.css("height",b),a.wH=b}else a.wH=d||h.height();a.fixedContentPos||a.wrap.css("height",a.wH),c("Resize")},updateItemHTML:function(){var d=a.items[a.index],e,f,g;a.contentContainer.detach(),a.content&&a.content.detach(),d.parsed||(d=a.parseEl(a.index)),e=d.type,(c("BeforeChange",[a.currItem?a.currItem.type:"",e]),a.currItem=d,!a.currTemplate[e])&&(f=!!a.st[e]&&a.st[e].markup,c("FirstMarkupParse",f),a.currTemplate[e]=!f||b(f)),n&&n!==d.type&&a.container.removeClass("mfp-"+n+"-holder"),g=a["get"+e.charAt(0).toUpperCase()+e.slice(1)](d,a.currTemplate[e]),a.appendContent(g,e),d.preloaded=!0,c("Change",d),n=d.type,a.container.prepend(a.contentContainer),c("AfterChange")},appendContent:function(b,d){a.content=b,b?a.st.showCloseBtn&&a.st.closeBtnInside&&!0===a.currTemplate[d]?a.content.find(".mfp-close").length||a.content.append(t()):a.content=b:a.content="",c("BeforeAppend"),a.container.addClass("mfp-"+d+"-holder"),a.contentContainer.append(a.content)},parseEl:function(e){var g,d=a.items[e],h,f;if(d.tagName?d={el:b(d)}:(g=d.type,d={data:d,src:d.src}),d.el){for(h=a.types,f=0;f<h.length;f++)if(d.el.hasClass("mfp-"+h[f])){g=h[f];break}d.src=d.el.attr("data-mfp-src"),d.src||(d.src=d.el.attr("href"))}return d.type=g||a.st.type||"inline",d.index=e,d.parsed=!0,a.items[e]=d,c("ElementParse",d),a.items[e]},addGroup:function(c,b){var e=function(d){d.mfpEl=this,a._openClick(d,c,b)},d;b||(b={}),d="click.magnificPopup",b.mainEl=c,b.items?(b.isObj=!0,c.off(d).on(d,e)):(b.isObj=!1,b.delegate?c.off(d).on(d,b.delegate,e):(b.items=c,c.off(d).on(d,e)))},_openClick:function(c,f,d){if((void 0!==d.midClick?d.midClick:b.magnificPopup.defaults.midClick)||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var e=void 0!==d.disableOn?d.disableOn:b.magnificPopup.defaults.disableOn;if(e)if(b.isFunction(e)){if(!e.call(a))return!0}else if(h.width()<e)return!0;c.type&&(c.preventDefault(),a.isOpen&&c.stopPropagation()),d.el=b(c.mfpEl),d.delegate&&(d.items=f.find(d.delegate)),a.open(d)}},updateStatus:function(b,d){if(a.preloader){q!==b&&a.container.removeClass("mfp-s-"+q),d||"loading"!==b||(d=a.st.tLoading);var e={status:b,text:d};c("UpdateStatus",e),b=e.status,d=e.text,a.preloader.html(d),a.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),a.container.addClass("mfp-s-"+b),q=b}},_checkIfClose:function(c){if(!b(c).hasClass("mfp-prevent-close")){var d=a.st.closeOnContentClick,e=a.st.closeOnBgClick;if(d&&e)return!0;if(!a.content||b(c).hasClass("mfp-close")||a.preloader&&c===a.preloader[0])return!0;if(c===a.content[0]||b.contains(a.content[0],c)){if(d)return!0}else if(e&&b.contains(document,c))return!0;return!1}},_addClassToMFP:function(b){a.bgOverlay.addClass(b),a.wrap.addClass(b)},_removeClassFromMFP:function(b){this.bgOverlay.removeClass(b),a.wrap.removeClass(b)},_hasScrollBar:function(b){return(a.isIE7?e.height():document.body.scrollHeight)>(b||h.height())},_setFocus:function(){(a.st.focus?a.content.find(a.st.focus).eq(0):a.wrap).focus()},_onFocusIn:function(c){if(c.target!==a.wrap[0]&&!b.contains(a.wrap[0],c.target))return a._setFocus(),!1},_parseMarkup:function(e,a,f){var d;f.data&&(a=b.extend(f.data,a)),c("MarkupParse",[e,a,f]),b.each(a,function(g,c){var a,f;if(void 0===c||!1===c)return!0;(d=g.split("_")).length>1?(a=e.find(".mfp-"+d[0]),a.length>0&&(f=d[1],"replaceWith"===f?a[0]!==c[0]&&a.replaceWith(c):"img"===f?a.is("img")?a.attr("src",c):a.replaceWith(b("<img>").attr("src",c).attr("class",a.attr("class"))):a.attr(d[1],c))):e.find(".mfp-"+g).html(c)})},_getScrollbarSize:function(){if(void 0===a.scrollbarSize){var b=document.createElement("div");b.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(b),a.scrollbarSize=b.offsetWidth-b.clientWidth,document.body.removeChild(b)}return a.scrollbarSize}},b.magnificPopup={instance:null,proto:m.prototype,modules:[],open:function(a,c){return w(),(a=a?b.extend(!0,{},a):{}).isObj=!0,a.index=c||0,this.instance.open(a)},close:function(){return b.magnificPopup.instance&&b.magnificPopup.instance.close()},registerModule:function(c,a){a.options&&(b.magnificPopup.defaults[c]=a.options),b.extend(this.proto,a.proto),this.modules.push(c)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},b.fn.magnificPopup=function(d){var c,e,f,g;return w(),c=b(this),"string"==typeof d?"open"===d?(f=r?c.data("magnificPopup"):c[0].magnificPopup,g=parseInt(arguments[1],10)||0,f.items?e=f.items[g]:(e=c,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),a._openClick({mfpEl:e},c,f)):a.isOpen&&a[d].apply(a,Array.prototype.slice.call(arguments,1)):(d=b.extend(!0,{},d),r?c.data("magnificPopup",d):c[0].magnificPopup=d,a.addGroup(c,d)),c},y=function(){o&&(l.after(o.addClass(i)).detach(),o=null)},b.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){a.types.push("inline"),d("Close.inline",function(){y()})},getInline:function(d,g){var e,c,f;return y(),d.src?(e=a.st.inline,c=b(d.src),c.length?(f=c[0].parentNode,f&&f.tagName&&(l||(i=e.hiddenClass,l=j(i),i="mfp-"+i),o=c.after(l).detach().removeClass(i)),a.updateStatus("ready")):(a.updateStatus("error",e.tNotFound),c=b("<div>")),d.inlineElement=c,c):(a.updateStatus("ready"),a._parseMarkup(g,{},d),g)}}}),u=function(){k&&b(document.body).removeClass(k)},x=function(){u(),a.req&&a.req.abort()},b.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){a.types.push("ajax"),k=a.st.ajax.cursor,d("Close.ajax",x),d("BeforeChange.ajax",x)},getAjax:function(d){k&&b(document.body).addClass(k),a.updateStatus("loading");var e=b.extend({url:d.src,success:function(f,h,g){var e={data:f,xhr:g};c("ParseAjax",e),a.appendContent(b(e.data),"ajax"),d.finished=!0,u(),a._setFocus(),setTimeout(function(){a.wrap.addClass("mfp-ready")},16),a.updateStatus("ready"),c("AjaxContentAdded")},error:function(){u(),d.finished=d.loadError=!0,a.updateStatus("error",a.st.ajax.tError.replace("%url%",d.src))}},a.st.ajax.settings);return a.req=b.ajax(e),""}}}),B=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=a.st.image.titleSrc;if(d){if(b.isFunction(d))return d.call(a,c);if(c.el)return c.el.attr(d)||""}return""},b.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=a.st.image,e=".image";a.types.push("image"),d("Open"+e,function(){"image"===a.currItem.type&&c.cursor&&b(document.body).addClass(c.cursor)}),d("Close"+e,function(){c.cursor&&b(document.body).removeClass(c.cursor),h.off("resize.mfp")}),d("Resize"+e,a.resizeImage),a.isLowIE&&d("AfterChange",a.resizeImage)},resizeImage:function(){var b=a.currItem,c;b&&b.img&&a.st.image.verticalFit&&(c=0,a.isLowIE&&(c=parseInt(b.img.css("padding-top"),10)+parseInt(b.img.css("padding-bottom"),10)),b.img.css("max-height",a.wH-c))},_onImageHasSize:function(b){b.img&&(b.hasSize=!0,f&&clearInterval(f),b.isCheckingImgSize=!1,c("ImageHasSize",b),b.imgHidden&&(a.content&&a.content.removeClass("mfp-loading"),b.imgHidden=!1))},findImageSize:function(d){var b=0,e=d.img[0],c=function(g){f&&clearInterval(f),f=setInterval(function(){e.naturalWidth>0?a._onImageHasSize(d):(b>200&&clearInterval(f),3==++b?c(10):40===b?c(50):100===b&&c(500))},g)};c(1)},getImage:function(d,e){var l=0,h=function(){d&&(d.img[0].complete?(d.img.off(".mfploader"),d===a.currItem&&(a._onImageHasSize(d),a.updateStatus("ready")),d.hasSize=!0,d.loaded=!0,c("ImageLoadComplete")):++l<200?setTimeout(h,100):i())},i=function(){d&&(d.img.off(".mfploader"),d===a.currItem&&(a._onImageHasSize(d),a.updateStatus("error",j.tError.replace("%url%",d.src))),d.hasSize=!0,d.loaded=!0,d.loadError=!0)},j=a.st.image,k=e.find(".mfp-img"),g;return k.length&&(g=document.createElement("img"),g.className="mfp-img",d.el&&d.el.find("img").length&&(g.alt=d.el.find("img").attr("alt")),d.img=b(g).on("load.mfploader",h).on("error.mfploader",i),g.src=d.src,k.is("img")&&(d.img=d.img.clone()),(g=d.img[0]).naturalWidth>0?d.hasSize=!0:g.width||(d.hasSize=!1)),a._parseMarkup(e,{title:B(d),img_replaceWith:d.img},d),a.resizeImage(),d.hasSize?(f&&clearInterval(f),d.loadError?(e.addClass("mfp-loading"),a.updateStatus("error",j.tError.replace("%url%",d.src))):(e.removeClass("mfp-loading"),a.updateStatus("ready")),e):(a.updateStatus("loading"),d.loading=!0,d.hasSize||(d.imgHidden=!0,e.addClass("mfp-loading"),a.findImageSize(d)),e)}}}),b.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var e,f=a.st.zoom,h=".zoom",g,b,j,k,i;f.enabled&&a.supportsTransition&&(j=f.duration,k=function(d){var c=d.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),e="all "+f.duration/1e3+"s "+f.easing,a={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},b="transition";return a["-webkit-"+b]=a["-moz-"+b]=a["-o-"+b]=a[b]=e,c.css(a),c},i=function(){a.content.css("visibility","visible")},d("BuildControls"+h,function(){if(a._allowZoom()){if(clearTimeout(g),a.content.css("visibility","hidden"),!(e=a._getItemToZoom()))return void i();(b=k(e)).css(a._getOffset()),a.wrap.append(b),g=setTimeout(function(){b.css(a._getOffset(!0)),g=setTimeout(function(){i(),setTimeout(function(){b.remove(),e=b=null,c("ZoomAnimationEnded")},16)},j)},16)}}),d("BeforeClose"+h,function(){if(a._allowZoom()){if(clearTimeout(g),a.st.removalDelay=j,!e){if(!(e=a._getItemToZoom()))return;b=k(e)}b.css(a._getOffset(!0)),a.wrap.append(b),a.content.css("visibility","hidden"),setTimeout(function(){b.css(a._getOffset())},16)}}),d("Close"+h,function(){a._allowZoom()&&(i(),b&&b.remove(),e=null)}))},_allowZoom:function(){return"image"===a.currItem.type},_getItemToZoom:function(){return!!a.currItem.hasSize&&a.currItem.img},_getOffset:function(g){var c,d=(c=g?a.currItem.img:a.st.zoom.opener(a.currItem.el||a.currItem)).offset(),f=parseInt(c.css("padding-top"),10),h=parseInt(c.css("padding-bottom"),10),e;return d.top-=b(window).scrollTop()-f,e={width:c.width(),height:(r?c.innerHeight():c[0].offsetHeight)-h-f},void 0===v&&(v=void 0!==document.createElement("p").style.MozTransform),v?e["-moz-transform"]=e.transform="translate("+d.left+"px,"+d.top+"px)":(e.left=d.left,e.top=d.top),e}}}),s=function(c){if(a.currTemplate.iframe){var b=a.currTemplate.iframe.find("iframe");b.length&&(c||(b[0].src="//about:blank"),a.isIE8&&b.css("display",c?"block":"none"))}},b.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){a.types.push("iframe"),d("BeforeChange",function(c,a,b){a!==b&&("iframe"===a?s():"iframe"===b&&s(!0))}),d("Close.iframe",function(){s()})},getIframe:function(e,f){var c=e.src,d=a.st.iframe,g;return b.each(d.patterns,function(){if(c.indexOf(this.index)>-1)return this.id&&(c="string"==typeof this.id?c.substr(c.lastIndexOf(this.id)+this.id.length,c.length):this.id.call(this,c)),c=this.src.replace("%id%",c),!1}),g={},d.srcAction&&(g[d.srcAction]=c),a._parseMarkup(f,g,e),a.updateStatus("ready"),f}}}),p=function(b){var c=a.items.length;return b>c-1?b-c:b<0?c+b:b},A=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)},b.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var f=a.st.gallery,c=".mfp-gallery";if(a.direction=!0,!f||!f.enabled)return!1;g+=" mfp-gallery",d("Open"+c,function(){f.navigateByImgClick&&a.wrap.on("click"+c,".mfp-img",function(){if(a.items.length>1)return a.next(),!1}),e.on("keydown"+c,function(b){37===b.keyCode?a.prev():39===b.keyCode&&a.next()})}),d("UpdateStatus"+c,function(c,b){b.text&&(b.text=A(b.text,a.currItem.index,a.items.length))}),d("MarkupParse"+c,function(e,g,c,d){var b=a.items.length;c.counter=b>1?A(f.tCounter,d.index,b):""}),d("BuildControls"+c,function(){if(a.items.length>1&&f.arrows&&!a.arrowLeft){var c=f.arrowMarkup,d=a.arrowLeft=b(c.replace(/%title%/gi,f.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close"),e=a.arrowRight=b(c.replace(/%title%/gi,f.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close");d.click(function(){a.prev()}),e.click(function(){a.next()}),a.container.append(d.add(e))}}),d("Change"+c,function(){a._preloadTimeout&&clearTimeout(a._preloadTimeout),a._preloadTimeout=setTimeout(function(){a.preloadNearbyImages(),a._preloadTimeout=null},16)}),d("Close"+c,function(){e.off(c),a.wrap.off("click"+c),a.arrowRight=a.arrowLeft=null})},next:function(){a.direction=!0,a.index=p(a.index+1),a.updateItemHTML()},prev:function(){a.direction=!1,a.index=p(a.index-1),a.updateItemHTML()},goTo:function(b){a.direction=b>=a.index,a.index=b,a.updateItemHTML()},preloadNearbyImages:function(){var b,c=a.st.gallery.preload,d=Math.min(c[0],a.items.length),e=Math.min(c[1],a.items.length);for(b=1;b<=(a.direction?e:d);b++)a._preloadItem(a.index+b);for(b=1;b<=(a.direction?d:e);b++)a._preloadItem(a.index-b)},_preloadItem:function(e){if(e=p(e),!a.items[e].preloaded){var d=a.items[e];d.parsed||(d=a.parseEl(e)),c("LazyLoad",d),"image"===d.type&&(d.img=b('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,c("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}}),b.magnificPopup.registerModule("retina",{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var c=a.st.retina,b=c.ratio;(b=isNaN(b)?b():b)>1&&(d("ImageHasSize.retina",function(c,a){a.img.css({"max-width":a.img[0].naturalWidth/b,width:"100%"})}),d("ElementParse.retina",function(d,a){a.src=c.replaceSrc(a,b)}))}}}}),w()})?a.apply(e,b):a)||(d.exports=c)},function(a,b){!function(){"use strict";var c=0,b={};function a(d){if(!d)throw new Error("No options passed to Waypoint constructor");if(!d.element)throw new Error("No element option passed to Waypoint constructor");if(!d.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+c,this.options=a.Adapter.extend({},a.defaults,d),this.element=this.options.element,this.adapter=new a.Adapter(this.element),this.callback=d.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=a.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=a.Context.findOrCreateByElement(this.options.context),a.offsetAliases[this.options.offset]&&(this.options.offset=a.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),b[this.key]=this,c+=1}a.prototype.queueTrigger=function(a){this.group.queueTrigger(this,a)},a.prototype.trigger=function(a){this.enabled&&this.callback&&this.callback.apply(this,a)},a.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete b[this.key]},a.prototype.disable=function(){return this.enabled=!1,this},a.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},a.prototype.next=function(){return this.group.next(this)},a.prototype.previous=function(){return this.group.previous(this)},a.invokeAll=function(d){var a=[],e,c,f;for(e in b)a.push(b[e]);for(c=0,f=a.length;c<f;c++)a[c][d]()},a.destroyAll=function(){a.invokeAll("destroy")},a.disableAll=function(){a.invokeAll("disable")},a.enableAll=function(){for(var c in a.Context.refreshAll(),b)b[c].enabled=!0;return this},a.refreshAll=function(){a.Context.refreshAll()},a.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},a.viewportWidth=function(){return document.documentElement.clientWidth},a.adapters=[],a.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},a.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=a}(),function(){"use strict";function f(a){window.setTimeout(a,1e3/60)}var d=0,c={},b=window.Waypoint,e=window.onload;function a(e){this.element=e,this.Adapter=b.Adapter,this.adapter=new this.Adapter(e),this.key="waypoint-context-"+d,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},e.waypointContextKey=this.key,c[e.waypointContextKey]=this,d+=1,b.windowContext||(b.windowContext=!0,b.windowContext=new a(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}a.prototype.add=function(a){var b=a.options.horizontal?"horizontal":"vertical";this.waypoints[b][a.key]=a,this.refresh()},a.prototype.checkEmpty=function(){var a=this.Adapter.isEmptyObject(this.waypoints.horizontal),b=this.Adapter.isEmptyObject(this.waypoints.vertical),d=this.element==this.element.window;a&&b&&!d&&(this.adapter.off(".waypoints"),delete c[this.key])},a.prototype.createThrottledResizeHandler=function(){var a=this;function c(){a.handleResize(),a.didResize=!1}this.adapter.on("resize.waypoints",function(){a.didResize||(a.didResize=!0,b.requestAnimationFrame(c))})},a.prototype.createThrottledScrollHandler=function(){var a=this;function c(){a.handleScroll(),a.didScroll=!1}this.adapter.on("scroll.waypoints",function(){a.didScroll&&!b.isTouch||(a.didScroll=!0,b.requestAnimationFrame(c))})},a.prototype.handleResize=function(){b.Context.refreshAll()},a.prototype.handleScroll=function(){var e={},c={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},d,b,h,i,a,f,g,j;for(d in c){b=c[d],h=b.newScroll>b.oldScroll?b.forward:b.backward;for(i in this.waypoints[d])a=this.waypoints[d][i],null!==a.triggerPoint&&(f=b.oldScroll<a.triggerPoint,g=b.newScroll>=a.triggerPoint,(f&&g||!f&&!g)&&(a.queueTrigger(h),e[a.group.id]=a.group))}for(j in e)e[j].flushTriggers();this.oldScroll={x:c.horizontal.newScroll,y:c.vertical.newScroll}},a.prototype.innerHeight=function(){return this.element==this.element.window?b.viewportHeight():this.adapter.innerHeight()},a.prototype.remove=function(a){delete this.waypoints[a.axis][a.key],this.checkEmpty()},a.prototype.innerWidth=function(){return this.element==this.element.window?b.viewportWidth():this.adapter.innerWidth()},a.prototype.destroy=function(){var a=[],c,d,b,e;for(c in this.waypoints)for(d in this.waypoints[c])a.push(this.waypoints[c][d]);for(b=0,e=a.length;b<e;b++)a[b].destroy()},a.prototype.refresh=function(){var p,e=this.element==this.element.window,m=e?void 0:this.adapter.offset(),f={},g,d,q,k,h,i,l,a,c,n,o,j;for(g in this.handleScroll(),p={horizontal:{contextOffset:e?0:m.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:m.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){d=p[g];for(q in this.waypoints[g])a=this.waypoints[g][q],c=a.options.offset,n=a.triggerPoint,o=0,j=null==n,a.element!==a.element.window&&(o=a.adapter.offset()[d.offsetProp]),"function"==typeof c?c=c.apply(a):"string"==typeof c&&(c=parseFloat(c),a.options.offset.indexOf("%")>-1&&(c=Math.ceil(d.contextDimension*c/100))),k=d.contextScroll-d.contextOffset,a.triggerPoint=Math.floor(o+k-c),h=n<d.oldScroll,i=a.triggerPoint>=d.oldScroll,l=!h&&!i,!j&&h&&i?(a.queueTrigger(d.backward),f[a.group.id]=a.group):(!j&&l||j&&d.oldScroll>=a.triggerPoint)&&(a.queueTrigger(d.forward),f[a.group.id]=a.group)}return b.requestAnimationFrame(function(){for(var a in f)f[a].flushTriggers()}),this},a.findOrCreateByElement=function(b){return a.findByElement(b)||new a(b)},a.refreshAll=function(){for(var a in c)c[a].refresh()},a.findByElement=function(a){return c[a.waypointContextKey]},window.onload=function(){e&&e(),a.refreshAll()},b.requestAnimationFrame=function(a){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||f).call(window,a)},b.Context=a}(),function(){"use strict";function c(a,b){return a.triggerPoint-b.triggerPoint}function e(a,b){return b.triggerPoint-a.triggerPoint}var d={vertical:{},horizontal:{}},b=window.Waypoint;function a(a){this.name=a.name,this.axis=a.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),d[this.axis][this.name]=this}a.prototype.add=function(a){this.waypoints.push(a)},a.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},a.prototype.flushTriggers=function(){var a,b,g,d,h,f;for(a in this.triggerQueues){b=this.triggerQueues[a],g="up"===a||"left"===a,b.sort(g?e:c);for(d=0,h=b.length;d<h;d+=1)f=b[d],(f.options.continuous||d===b.length-1)&&f.trigger([a])}this.clearTriggerQueues()},a.prototype.next=function(d){this.waypoints.sort(c);var a=b.Adapter.inArray(d,this.waypoints);return a===this.waypoints.length-1?null:this.waypoints[a+1]},a.prototype.previous=function(d){this.waypoints.sort(c);var a=b.Adapter.inArray(d,this.waypoints);return a?this.waypoints[a-1]:null},a.prototype.queueTrigger=function(a,b){this.triggerQueues[b].push(a)},a.prototype.remove=function(c){var a=b.Adapter.inArray(c,this.waypoints);a>-1&&this.waypoints.splice(a,1)},a.prototype.first=function(){return this.waypoints[0]},a.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},a.findOrCreate=function(b){return d[b.axis][b.name]||new a(b)},b.Group=a}(),function(){"use strict";var a=window.jQuery,c=window.Waypoint;function b(b){this.$element=a(b)}a.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(c,a){b.prototype[a]=function(){var b=Array.prototype.slice.call(arguments);return this.$element[a].apply(this.$element,b)}}),a.each(["extend","inArray","isEmptyObject"],function(d,c){b[c]=a[c]}),c.adapters.push({name:"jquery",Adapter:b}),c.Adapter=b}(),function(){"use strict";var b=window.Waypoint;function a(a){return function(){var c=[],d=arguments[0];return a.isFunction(arguments[0])&&((d=a.extend({},arguments[1])).handler=arguments[0]),this.each(function(){var e=a.extend({},d,{element:this});"string"==typeof e.context&&(e.context=a(this).closest(e.context)[0]),c.push(new b(e))}),c}}window.jQuery&&(window.jQuery.fn.waypoint=a(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=a(window.Zepto))}()},function(a,b){!function(a,b,i){var e,c,f;function j(b,c){this.bodyOverflowX,this.callbacks={hide:[],show:[]},this.checkInterval=null,this.Content,this.$el=a(b),this.$elProxy,this.elProxyPosition,this.enabled=!0,this.options=a.extend({},e,c),this.mouseIsOverProxy=!1,this.namespace="tooltipster-"+Math.round(1e5*Math.random()),this.Status="hidden",this.timerHide=null,this.timerShow=null,this.$tooltip,this.options.iconTheme=this.options.iconTheme.replace(".",""),this.options.theme=this.options.theme.replace(".",""),this._init()}function g(b,c){var d=!0;return a.each(b,function(a,e){if(void 0===c[a]||b[a]!==c[a])return d=!1,!1}),d}function h(){return!f&&c}function d(){var c=(i.body||i.documentElement).style,a="transition",b;if("string"==typeof c[a])return!0;v=["Moz","Webkit","Khtml","O","ms"],a=a.charAt(0).toUpperCase()+a.substr(1);for(b=0;b<v.length;b++)if("string"==typeof c[v[b]+a])return!0;return!1}e={animation:"fade",arrow:!0,arrowColor:"",autoClose:!0,content:null,contentAsHTML:!1,contentCloning:!0,debug:!0,delay:200,minWidth:0,maxWidth:null,functionInit:function(a,b){},functionBefore:function(b,a){a()},functionReady:function(a,b){},functionAfter:function(a){},hideOnClick:!1,icon:"(?)",iconCloning:!0,iconDesktop:!1,iconTouch:!1,iconTheme:"tooltipster-icon",interactive:!1,interactiveTolerance:350,multiple:!1,offsetX:0,offsetY:0,onlyOne:!1,position:"top",positionTracker:!1,positionTrackerCallback:function(a){"hover"==this.option("trigger")&&this.option("autoClose")&&this.hide()},restoration:"current",speed:350,timer:0,theme:"tooltipster-default",touchDevices:!0,trigger:"hover",updateAnimation:!0},j.prototype={_init:function(){var b=this,d,e;i.querySelector&&(d=null,void 0===b.$el.data("tooltipster-initialTitle")&&(void 0===(d=b.$el.attr("title"))&&(d=null),b.$el.data("tooltipster-initialTitle",d)),null!==b.options.content?b._content_set(b.options.content):b._content_set(d),e=b.options.functionInit.call(b.$el,b.$el,b.Content),void 0!==e&&b._content_set(e),b.$el.removeAttr("title").addClass("tooltipstered"),!c&&b.options.iconDesktop||c&&b.options.iconTouch?("string"==typeof b.options.icon?(b.$elProxy=a('<span class="'+b.options.iconTheme+'"></span>'),b.$elProxy.text(b.options.icon)):b.options.iconCloning?b.$elProxy=b.options.icon.clone(!0):b.$elProxy=b.options.icon,b.$elProxy.insertAfter(b.$el)):b.$elProxy=b.$el,"hover"==b.options.trigger?(b.$elProxy.on("mouseenter."+b.namespace,function(){h()&&!b.options.touchDevices||(b.mouseIsOverProxy=!0,b._show())}).on("mouseleave."+b.namespace,function(){h()&&!b.options.touchDevices||(b.mouseIsOverProxy=!1)}),c&&b.options.touchDevices&&b.$elProxy.on("touchstart."+b.namespace,function(){b._showNow()})):"click"==b.options.trigger&&b.$elProxy.on("click."+b.namespace,function(){h()&&!b.options.touchDevices||b._show()}))},_show:function(){var a=this;"shown"!=a.Status&&"appearing"!=a.Status&&(a.options.delay?a.timerShow=setTimeout(function(){("click"==a.options.trigger||"hover"==a.options.trigger&&a.mouseIsOverProxy)&&a._showNow()},a.options.delay):a._showNow())},_showNow:function(f){var e=this;e.options.functionBefore.call(e.$el,e.$el,function(){var g,j,i,k,l,m,n,h;e.enabled&&null!==e.Content&&(f&&e.callbacks.show.push(f),e.callbacks.hide=[],clearTimeout(e.timerShow),e.timerShow=null,clearTimeout(e.timerHide),e.timerHide=null,e.options.onlyOne&&a(".tooltipstered").not(e.$el).each(function(e,c){var b=a(c),d=b.data("tooltipster-ns");a.each(d,function(f,d){var a=b.data(d),c=a.status(),e=a.option("autoClose");"hidden"!==c&&"disappearing"!==c&&e&&a.hide()})}),g=function(){e.Status="shown",a.each(e.callbacks.show,function(b,a){a.call(e.$el)}),e.callbacks.show=[]},"hidden"!==e.Status?(j=0,"disappearing"===e.Status?(e.Status="appearing",d()?(e.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+e.options.animation+"-show"),e.options.speed>0&&e.$tooltip.delay(e.options.speed),e.$tooltip.queue(g)):e.$tooltip.stop().fadeIn(g)):"shown"===e.Status&&g()):(e.Status="appearing",j=e.options.speed,e.bodyOverflowX=a("body").css("overflow-x"),a("body").css("overflow-x","hidden"),i="tooltipster-"+e.options.animation,k="-webkit-transition-duration: "+e.options.speed+"ms; -webkit-animation-duration: "+e.options.speed+"ms; -moz-transition-duration: "+e.options.speed+"ms; -moz-animation-duration: "+e.options.speed+"ms; -o-transition-duration: "+e.options.speed+"ms; -o-animation-duration: "+e.options.speed+"ms; -ms-transition-duration: "+e.options.speed+"ms; -ms-animation-duration: "+e.options.speed+"ms; transition-duration: "+e.options.speed+"ms; animation-duration: "+e.options.speed+"ms;",l=e.options.minWidth?"min-width:"+Math.round(e.options.minWidth)+"px;":"",m=e.options.maxWidth?"max-width:"+Math.round(e.options.maxWidth)+"px;":"",n=e.options.interactive?"pointer-events: auto;":"",(e.$tooltip=a('<div class="tooltipster-base '+e.options.theme+'" style="'+l+" "+m+" "+n+" "+k+'"><div class="tooltipster-content"></div></div>'),d()&&e.$tooltip.addClass(i),e._content_insert(),e.$tooltip.appendTo("body"),e.reposition(),e.options.functionReady.call(e.$el,e.$el,e.$tooltip),d()?(e.$tooltip.addClass(i+"-show"),e.options.speed>0&&e.$tooltip.delay(e.options.speed),e.$tooltip.queue(g)):e.$tooltip.css("display","none").fadeIn(e.options.speed,g),e._interval_set(),a(b).on("scroll."+e.namespace+" resize."+e.namespace,function(){e.reposition()}),e.options.autoClose)&&(a("body").off("."+e.namespace),"hover"==e.options.trigger?(c&&setTimeout(function(){a("body").on("touchstart."+e.namespace,function(){e.hide()})},0),e.options.interactive?(c&&e.$tooltip.on("touchstart."+e.namespace,function(a){a.stopPropagation()}),h=null,e.$elProxy.add(e.$tooltip).on("mouseleave."+e.namespace+"-autoClose",function(){clearTimeout(h),h=setTimeout(function(){e.hide()},e.options.interactiveTolerance)}).on("mouseenter."+e.namespace+"-autoClose",function(){clearTimeout(h)})):e.$elProxy.on("mouseleave."+e.namespace+"-autoClose",function(){e.hide()}),e.options.hideOnClick&&e.$elProxy.on("click."+e.namespace+"-autoClose",function(){e.hide()})):"click"==e.options.trigger&&(setTimeout(function(){a("body").on("click."+e.namespace+" touchstart."+e.namespace,function(){e.hide()})},0),e.options.interactive&&e.$tooltip.on("click."+e.namespace+" touchstart."+e.namespace,function(a){a.stopPropagation()})))),e.options.timer>0&&(e.timerHide=setTimeout(function(){e.timerHide=null,e.hide()},e.options.timer+j)))})},_interval_set:function(){var b=this;b.checkInterval=setInterval(function(){if(0===a("body").find(b.$el).length||0===a("body").find(b.$elProxy).length||"hidden"==b.Status||0===a("body").find(b.$tooltip).length)"shown"!=b.Status&&"appearing"!=b.Status||b.hide(),b._interval_cancel();else if(b.options.positionTracker){var c=b._repositionInfo(b.$elProxy),d=!1;g(c.dimension,b.elProxyPosition.dimension)&&("fixed"===b.$elProxy.css("position")?g(c.position,b.elProxyPosition.position)&&(d=!0):g(c.offset,b.elProxyPosition.offset)&&(d=!0)),d||(b.reposition(),b.options.positionTrackerCallback.call(b,b.$el))}},200)},_interval_cancel:function(){clearInterval(this.checkInterval),this.checkInterval=null},_content_set:function(a){"object"==typeof a&&null!==a&&this.options.contentCloning&&(a=a.clone(!0)),this.Content=a},_content_insert:function(){var a=this,b=this.$tooltip.find(".tooltipster-content");"string"!=typeof a.Content||a.options.contentAsHTML?b.empty().append(a.Content):b.text(a.Content)},_update:function(b){var a=this;a._content_set(b),null!==a.Content?"hidden"!==a.Status&&(a._content_insert(),a.reposition(),a.options.updateAnimation&&(d()?(a.$tooltip.css({width:"","-webkit-transition":"all "+a.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+a.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+a.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+a.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+a.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!=a.Status&&(a.$tooltip.removeClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!==a.Status&&a.$tooltip.css({"-webkit-transition":a.options.speed+"ms","-moz-transition":a.options.speed+"ms","-o-transition":a.options.speed+"ms","-ms-transition":a.options.speed+"ms",transition:a.options.speed+"ms"})},a.options.speed))},a.options.speed)):a.$tooltip.fadeTo(a.options.speed,.5,function(){"hidden"!=a.Status&&a.$tooltip.fadeTo(a.options.speed,1)}))):a.hide()},_repositionInfo:function(a){return{dimension:{height:a.outerHeight(!1),width:a.outerWidth(!1)},offset:a.offset(),position:{left:parseInt(a.css("left")),top:parseInt(a.css("top"))}}},hide:function(e){var c=this,f,g;return e&&c.callbacks.hide.push(e),c.callbacks.show=[],clearTimeout(c.timerShow),c.timerShow=null,clearTimeout(c.timerHide),c.timerHide=null,f=function(){a.each(c.callbacks.hide,function(b,a){a.call(c.$el)}),c.callbacks.hide=[]},"shown"==c.Status||"appearing"==c.Status?(c.Status="disappearing",g=function(){c.Status="hidden","object"==typeof c.Content&&null!==c.Content&&c.Content.detach(),c.$tooltip.remove(),c.$tooltip=null,a(b).off("."+c.namespace),a("body").off("."+c.namespace).css("overflow-x",c.bodyOverflowX),a("body").off("."+c.namespace),c.$elProxy.off("."+c.namespace+"-autoClose"),c.options.functionAfter.call(c.$el,c.$el),f()},d()?(c.$tooltip.clearQueue().removeClass("tooltipster-"+c.options.animation+"-show").addClass("tooltipster-dying"),c.options.speed>0&&c.$tooltip.delay(c.options.speed),c.$tooltip.queue(g)):c.$tooltip.stop().fadeOut(c.options.speed,g)):"hidden"==c.Status&&f(),c},show:function(a){return this._showNow(a),this},update:function(a){return this.content(a)},content:function(a){return void 0===a?this.Content:(this._update(a),this)},reposition:function(){var d=this,i,p,c,g,l,M,Q,F,E,C,n,A,z,D,R,T,y,w,J,H,L,u,o,e,B,k,j,h,f,K,r,I,G,q,O,m,x,N,v,S,P;if(0!==a("body").find(d.$tooltip).length){if(d.$tooltip.css("width",""),d.elProxyPosition=d._repositionInfo(d.$elProxy),i=null,p=a(b).width(),c=d.elProxyPosition,g=d.$tooltip.outerWidth(!1),l=(d.$tooltip.innerWidth(),d.$tooltip.outerHeight(!1)),d.$elProxy.is("area"))if(M=d.$elProxy.attr("shape"),Q=d.$elProxy.parent().attr("name"),F=a('img[usemap="#'+Q+'"]'),E=F.offset().left,C=F.offset().top,n=void 0!==d.$elProxy.attr("coords")?d.$elProxy.attr("coords").split(","):void 0,"circle"==M)A=parseInt(n[0]),z=parseInt(n[1]),D=parseInt(n[2]),c.dimension.height=2*D,c.dimension.width=2*D,c.offset.top=C+z-D,c.offset.left=E+A-D;else if("rect"==M)A=parseInt(n[0]),z=parseInt(n[1]),R=parseInt(n[2]),T=parseInt(n[3]),c.dimension.height=T-z,c.dimension.width=R-A,c.offset.top=C+z,c.offset.left=E+A;else if("poly"==M){for(y=0,w=0,J=0,H=0,L="even",u=0;u<n.length;u++)o=parseInt(n[u]),"even"==L?(o>J&&(J=o,0===u&&(y=J)),o<y&&(y=o),L="odd"):(o>H&&(H=o,1==u&&(w=H)),o<w&&(w=o),L="even");c.dimension.height=H-w,c.dimension.width=J-y,c.offset.top=C+w,c.offset.left=E+y}else c.dimension.height=F.outerHeight(!1),c.dimension.width=F.outerWidth(!1),c.offset.top=C,c.offset.left=E;e=0,B=0,k=0,j=parseInt(d.options.offsetY),h=parseInt(d.options.offsetX),f=d.options.position;function t(){var c=a(b).scrollLeft();e-c<0&&(i=e-c,e=c),e+g-c>p&&(i=e-(p+c-g),e=p+c-g)}function s(d,e){c.offset.top-a(b).scrollTop()-l-j-12<0&&e.indexOf("top")>-1&&(f=d),c.offset.top+c.dimension.height+l+12+j>a(b).scrollTop()+a(b).height()&&e.indexOf("bottom")>-1&&(f=d,k=c.offset.top-l-j-12)}"top"==f&&(K=c.offset.left+g-(c.offset.left+c.dimension.width),e=c.offset.left+h-K/2,k=c.offset.top-l-j-12,t(),s("bottom","top")),("top-left"==f&&(e=c.offset.left+h,k=c.offset.top-l-j-12,t(),s("bottom-left","top-left")),"top-right"==f&&(e=c.offset.left+c.dimension.width+h-g,k=c.offset.top-l-j-12,t(),s("bottom-right","top-right")),"bottom"==f&&(K=c.offset.left+g-(c.offset.left+c.dimension.width),e=c.offset.left-K/2+h,k=c.offset.top+c.dimension.height+j+12,t(),s("top","bottom")),"bottom-left"==f&&(e=c.offset.left+h,k=c.offset.top+c.dimension.height+j+12,t(),s("top-left","bottom-left")),"bottom-right"==f&&(e=c.offset.left+c.dimension.width+h-g,k=c.offset.top+c.dimension.height+j+12,t(),s("top-right","bottom-right")),"left"==f)&&(e=c.offset.left-h-g-12,B=c.offset.left+h+c.dimension.width+12,r=c.offset.top+l-(c.offset.top+c.dimension.height),(k=c.offset.top-r/2-j,e<0&&B+g>p)?(I=2*parseFloat(d.$tooltip.css("border-width")),G=g+e-I,d.$tooltip.css("width",G+"px"),l=d.$tooltip.outerHeight(!1),e=c.offset.left-h-G-12-I,r=c.offset.top+l-(c.offset.top+c.dimension.height),k=c.offset.top-r/2-j):e<0&&(e=c.offset.left+h+c.dimension.width+12,i="left")),("right"==f&&(e=c.offset.left+h+c.dimension.width+12,B=c.offset.left-h-g-12,r=c.offset.top+l-(c.offset.top+c.dimension.height),k=c.offset.top-r/2-j,e+g>p&&B<0?(I=2*parseFloat(d.$tooltip.css("border-width")),G=p-e-I,d.$tooltip.css("width",G+"px"),l=d.$tooltip.outerHeight(!1),r=c.offset.top+l-(c.offset.top+c.dimension.height),k=c.offset.top-r/2-j):e+g>p&&(e=c.offset.left-h-g-12,i="right")),d.options.arrow)&&(q="tooltipster-arrow-"+f,d.options.arrowColor.length<1?(O=d.$tooltip.css("background-color")):O=d.options.arrowColor,(i?"left"==i?(q="tooltipster-arrow-right",i=""):"right"==i?(q="tooltipster-arrow-left",i=""):i="left:"+Math.round(i)+"px;":i="","top"==f||"top-left"==f||"top-right"==f)?(m=parseFloat(d.$tooltip.css("border-bottom-width")),x=d.$tooltip.css("border-bottom-color")):"bottom"==f||"bottom-left"==f||"bottom-right"==f?(m=parseFloat(d.$tooltip.css("border-top-width")),x=d.$tooltip.css("border-top-color")):"left"==f?(m=parseFloat(d.$tooltip.css("border-right-width")),x=d.$tooltip.css("border-right-color")):"right"==f?(m=parseFloat(d.$tooltip.css("border-left-width")),x=d.$tooltip.css("border-left-color")):(m=parseFloat(d.$tooltip.css("border-bottom-width")),x=d.$tooltip.css("border-bottom-color")),m>1&&m++,N="",0!==m&&(v="",S="border-color: "+x+";",-1!==q.indexOf("bottom")?v="margin-top: -"+Math.round(m)+"px;":-1!==q.indexOf("top")?v="margin-bottom: -"+Math.round(m)+"px;":-1!==q.indexOf("left")?v="margin-right: -"+Math.round(m)+"px;":-1!==q.indexOf("right")&&(v="margin-left: -"+Math.round(m)+"px;"),N='<span class="tooltipster-arrow-border" style="'+v+" "+S+';"></span>'),d.$tooltip.find(".tooltipster-arrow").remove(),P='<div class="'+q+' tooltipster-arrow" style="'+i+'">'+N+'<span style="border-color:'+O+';"></span></div>',d.$tooltip.append(P)),d.$tooltip.css({top:Math.round(k)+"px",left:Math.round(e)+"px"})}return d},enable:function(){return this.enabled=!0,this},disable:function(){return this.hide(),this.enabled=!1,this},destroy:function(){var b=this,c,d;return b.hide(),b.$el[0]!==b.$elProxy[0]&&b.$elProxy.remove(),b.$el.removeData(b.namespace).off("."+b.namespace),c=b.$el.data("tooltipster-ns"),1===c.length?(d=null,"previous"===b.options.restoration?d=b.$el.data("tooltipster-initialTitle"):"current"===b.options.restoration&&(d="string"==typeof b.Content?b.Content:a("<div></div>").append(b.Content).html()),d&&b.$el.attr("title",d),b.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")):(c=a.grep(c,function(a,c){return a!==b.namespace}),b.$el.data("tooltipster-ns",c)),b},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:void 0},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:void 0},option:function(a,b){return void 0===b?this.options[a]:(this.options[a]=b,this)},status:function(){return this.Status}},a.fn.tooltipster=function(){var b=arguments,d,c,f,g,h,i,k;if(0===this.length){if("string"==typeof b[0]){switch(d=!0,b[0]){case"setDefaults":a.extend(e,b[1]);break;default:d=!1}return!!d||this}return this}return"string"==typeof b[0]?(c="#*$~&",this.each(function(){var e=a(this).data("tooltipster-ns"),d=e?a(this).data(e[0]):null,f;if(!d)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof d[b[0]])throw new Error('Unknown method .tooltipster("'+b[0]+'")');if(f=d[b[0]](b[1],b[2]),f!==d)return c=f,!1}),"#*$~&"!==c?c:this):(f=[],g=b[0]&&void 0!==b[0].multiple,h=g&&b[0].multiple||!g&&e.multiple,i=b[0]&&void 0!==b[0].debug,k=i&&b[0].debug||!i&&e.debug,this.each(function(){var e=!1,c=a(this).data("tooltipster-ns"),d=null;c?h?e=!0:k&&console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.'):e=!0,e&&(d=new j(this,b[0]),c||(c=[]),c.push(d.namespace),a(this).data("tooltipster-ns",c),a(this).data(d.namespace,d)),f.push(d)}),h?f:this)},c=!!("ontouchstart"in b),f=!1,a("body").one("mousemove",function(){f=!0})}(jQuery,window,document)},function(b,c,a){"use strict";(function(b){var c=a(6),d=a.n(c);b.Flatsome={behaviors:{},plugin:function(a,c,b){b=b||{},jQuery.fn[a]=function(e){if("string"==typeof arguments[0]){var g=null,f=arguments[0],h=Array.prototype.slice.call(arguments,1);return this.each(function(){if(!jQuery.data(this,"plugin_"+a)||"function"!=typeof jQuery.data(this,"plugin_"+a)[f])throw new Error("Method "+f+" does not exist on jQuery."+a);g=jQuery.data(this,"plugin_"+a)[f].apply(this,h)}),"destroy"===f&&this.each(function(){jQuery(this).removeData("plugin_"+a)}),void 0!==g?g:this}if("object"===d()(e)||!e)return this.each(function(){jQuery.data(this,"plugin_"+a)||(e=jQuery.extend({},b,e),jQuery.data(this,"plugin_"+a,new c(this,e)))})}},behavior:function(b,a){this.behaviors[b]=a,a.arrive&&jQuery(document).arrive(a.arrive.selector,a.arrive.handler||function(){Flatsome.attach(b,this.parentNode)})},attach:function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,c;if("string"==typeof a)return this.behaviors.hasOwnProperty(a)&&"function"==typeof this.behaviors[a].attach?this.behaviors[a].attach(b||document):null;for(c in this.behaviors)"function"==typeof this.behaviors[c].attach&&this.behaviors[c].attach(b||document)},detach:function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,c;if("string"==typeof a)return this.behaviors.hasOwnProperty(a)&&"function"==typeof this.behaviors[a].detach?this.behaviors[a].detach(b||document):null;for(c in this.behaviors)"function"==typeof this.behaviors[c].detach&&this.behaviors[c].detach(b||document)}}}).call(this,a(1))},function(p,o,n){"use strict";var e=n(0),m=jQuery("#wrapper"),a=jQuery("#header"),b=jQuery(".header-top",a),c=jQuery("#wpadminbar"),i=c.length&&c.is(":visible")?c.height():0,l=a.hasClass("has-sticky"),k=a.hasClass("sticky-hide-on-scroll"),g=-jQuery(".header-wrapper").height()-100,f=b.hasClass("hide-for-sticky")?-b.height()-1:-1,d,h,j;jQuery(".sticky-shrink .header-wrapper").length&&(d=b.hasClass("hide-for-sticky")?b.height():0,g=-1-d+i,f=-1-d),l&&(a.find(".header-wrapper").waypoint(function(b){var c=jQuery(this.element),d=a.height();"down"===b&&(c.addClass("stuck"),a.height(d),jQuery(".has-transparent").removeClass("transparent"),jQuery(".toggle-nav-dark").removeClass("nav-dark"))},{offset:g}),m.waypoint(function(b){Object(e.c)()||"up"===b&&(a.height(""),jQuery(".header-wrapper").removeClass("stuck"),jQuery(".has-transparent").addClass("transparent"),jQuery(".toggle-nav-dark").addClass("nav-dark"))},{offset:f+i}),k)&&(j=0,jQuery(window).on("scroll",function(){if(!Object(e.c)()){clearTimeout(h);var c=jQuery(window).scrollTop(),b=jQuery(".header-wrapper");c>=b.outerHeight()&&(c<=j?(b.addClass("stuck"),a.removeClass("sticky-hide-on-scroll--active")):(b.removeClass("stuck"),a.addClass("sticky-hide-on-scroll--active"))),h=setTimeout(function(){j=jQuery(window).scrollTop()},100)}}))},function(b,c,a){"use strict";(function(c){var d=a(4),b=a.n(d);a(21),b()(),c.objectFitImages=b.a}).call(this,a(1))},function(a,b){!function(b,c){"use strict";if("IntersectionObserver"in b&&"IntersectionObserverEntry"in b&&"intersectionRatio"in b.IntersectionObserverEntry.prototype)"isIntersecting"in b.IntersectionObserverEntry.prototype||Object.defineProperty(b.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var d=[];a.prototype.THROTTLE_TIMEOUT=100,a.prototype.POLL_INTERVAL=null,a.prototype.USE_MUTATION_OBSERVER=!0,a.prototype.observe=function(a){if(!this._observationTargets.some(function(b){return b.element==a})){if(!a||1!=a.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:a,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},a.prototype.unobserve=function(a){this._observationTargets=this._observationTargets.filter(function(b){return b.element!=a}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},a.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},a.prototype.takeRecords=function(){var a=this._queuedEntries.slice();return this._queuedEntries=[],a},a.prototype._initThresholds=function(b){var a=b||[0];return Array.isArray(a)||(a=[a]),a.sort().filter(function(a,b,c){if("number"!=typeof a||isNaN(a)||a<0||a>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return a!==c[b-1]})},a.prototype._parseRootMargin=function(b){var a=(b||"0px").split(/\s+/).map(function(b){var a=/^(-?\d*\.?\d+)(px|%)$/.exec(b);if(!a)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(a[1]),unit:a[2]}});return a[1]=a[1]||a[0],a[2]=a[2]||a[0],a[3]=a[3]||a[1],a},a.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(g(b,"resize",this._checkForIntersections,!0),g(c,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in b&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(c,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},a.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,h(b,"resize",this._checkForIntersections,!0),h(c,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},a.prototype._checkForIntersections=function(){var a=this._rootIsInDom(),c=a?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(h){var f=h.element,k=e(f),i=this._rootContainsTarget(f),g=h.entry,l=a&&i&&this._computeTargetAndRootIntersection(f,c),d=h.entry=new j({time:b.performance&&performance.now&&performance.now(),target:f,boundingClientRect:k,rootBounds:c,intersectionRect:l});g?a&&i?this._hasCrossedThreshold(g,d)&&this._queuedEntries.push(d):g&&g.isIntersecting&&this._queuedEntries.push(d):this._queuedEntries.push(d)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},a.prototype._computeTargetAndRootIntersection=function(n,s){var d,g,j,k,l,p,o,i,m,a,q,h,r;if("none"!=b.getComputedStyle(n).display){for(d,g,j,k,l,p,o,i,m=e(n),a=f(n),q=!1;!q;){if(h=null,r=1==a.nodeType?b.getComputedStyle(a):{},"none"==r.display)return;if(a==this.root||a==c?(q=!0,h=s):a!=c.body&&a!=c.documentElement&&"visible"!=r.overflow&&(h=e(a)),h&&(d=h,g=m,void 0,void 0,void 0,void 0,void 0,void 0,j=Math.max(d.top,g.top),k=Math.min(d.bottom,g.bottom),l=Math.max(d.left,g.left),i=k-j,!(m=(o=(p=Math.min(d.right,g.right))-l)>=0&&i>=0&&{top:j,bottom:k,left:l,right:p,width:o,height:i})))break;a=f(a)}return m}},a.prototype._getRootRect=function(){var d,a,b;return this.root?d=e(this.root):(a=c.documentElement,b=c.body,d={top:0,left:0,right:a.clientWidth||b.clientWidth,width:a.clientWidth||b.clientWidth,bottom:a.clientHeight||b.clientHeight,height:a.clientHeight||b.clientHeight}),this._expandRectByRootMargin(d)},a.prototype._expandRectByRootMargin=function(b){var c=this._rootMarginValues.map(function(a,c){return"px"==a.unit?a.value:a.value*(c%2?b.width:b.height)/100}),a={top:b.top-c[0],right:b.right+c[1],bottom:b.bottom+c[2],left:b.left-c[3]};return a.width=a.right-a.left,a.height=a.bottom-a.top,a},a.prototype._hasCrossedThreshold=function(b,f){var c=b&&b.isIntersecting?b.intersectionRatio||0:-1,d=f.isIntersecting?f.intersectionRatio||0:-1,e,a;if(c!==d)for(e=0;e<this.thresholds.length;e++)if(a=this.thresholds[e],a==c||a==d||a<c!=a<d)return!0},a.prototype._rootIsInDom=function(){return!this.root||i(c,this.root)},a.prototype._rootContainsTarget=function(a){return i(this.root||c,a)},a.prototype._registerInstance=function(){d.indexOf(this)<0&&d.push(this)},a.prototype._unregisterInstance=function(){var a=d.indexOf(this);-1!=a&&d.splice(a,1)},b.IntersectionObserver=a,b.IntersectionObserverEntry=j}function j(a){this.time=a.time,this.target=a.target,this.rootBounds=a.rootBounds,this.boundingClientRect=a.boundingClientRect,this.intersectionRect=a.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!a.intersectionRect;var b=this.boundingClientRect,c=b.width*b.height,d=this.intersectionRect,e=d.width*d.height;this.intersectionRatio=c?Number((e/c).toFixed(4)):this.isIntersecting?1:0}function a(c,f){var d,e,b,a=f||{};if("function"!=typeof c)throw new Error("callback must be a function");if(a.root&&1!=a.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(d=this._checkForIntersections.bind(this),e=this.THROTTLE_TIMEOUT,b=null,function(){b||(b=setTimeout(function(){d(),b=null},e))}),this._callback=c,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(a.rootMargin),this.thresholds=this._initThresholds(a.threshold),this.root=a.root||null,this.rootMargin=this._rootMarginValues.map(function(a){return a.value+a.unit}).join(" ")}function g(a,b,c,d){"function"==typeof a.addEventListener?a.addEventListener(b,c,d||!1):"function"==typeof a.attachEvent&&a.attachEvent("on"+b,c)}function h(a,b,c,d){"function"==typeof a.removeEventListener?a.removeEventListener(b,c,d||!1):"function"==typeof a.detatchEvent&&a.detatchEvent("on"+b,c)}function e(b){var a;try{a=b.getBoundingClientRect()}catch(a){}return a?(a.width&&a.height||(a={top:a.top,right:a.right,bottom:a.bottom,left:a.left,width:a.right-a.left,height:a.bottom-a.top}),a):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function i(b,c){for(var a=c;a;){if(a==b)return!0;a=f(a)}return!1}function f(b){var a=b.parentNode;return a&&11==a.nodeType&&a.host?a.host:a}}(window,document)},function(i,j,k){"use strict";var a=[];function b(){for(var b=0;b<a.length;b++)a[b].element.offsetParent?e(a[b]):a.splice(b,1)}function e(a){!function(c){var a=c.element,g=c.type,b=f(a.dataset.parallax),e=d(a),h=(window.innerHeight-e.offsetHeight)*b;switch(g){case"backgroundImage":a.style.backgroundSize=b?"100% auto":null;break;case"backgroundElement":a.style.height=b?"".concat(e.offsetHeight+h,"px"):null}}(a),function(o){var j,a=o.element,r=o.type,b=f(a.dataset.parallax||a.dataset.parallaxBackground),h=window.innerHeight,g=d(a),p=a.offsetHeight-g.offsetHeight,n=a.getBoundingClientRect(),i=g!==a?g.getBoundingClientRect():n,k=n.top+a.offsetHeight/2,l=h/2-k,q=h/2-(i.top+g.offsetHeight/2),m=k+c()<h/2?c():l,s=(Math.abs(l),Math.abs(m)/(h/2)),e=0;if(!(i.top>h||i.top+g.offsetHeight<0))switch(r){case"backgroundImage":e=i.top*b,a.style.backgroundPosition=b?"50% ".concat(e.toFixed(0),"px"):null,a.style.backgroundAttachment=b?"fixed":null;break;case"backgroundElement":e=q*b-p/2,a.style.transform=b?"translate3d(0, ".concat(e.toFixed(2),"px, 0)"):null,a.style.backfaceVisibility=b?"hidden":null;break;case"element":e=m*b,a.style.transform=b?"translate3d(0, ".concat(e.toFixed(2),"px, 0)"):null,a.style.backfaceVisibility=b?"hidden":null,void 0!==a.dataset.parallaxFade&&(a.style.opacity=b?(j=1-s,j*(2-j)).toFixed(2):null)}}(a)}function g(a){return void 0!==a.dataset.parallaxBackground?"backgroundElement":void 0!==a.dataset.parallaxElemenet?"element":""!==a.style.backgroundImage?"backgroundImage":"element"}function c(){return document.documentElement.scrollTop||document.body.scrollTop}function d(a){return function(a){for(var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;a&&!h(a).call(a,b);)a=a.parentElement;return a}(a,a.dataset.parallaxContainer||"[data-parallax-container]")||a}function h(a){return a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector}function f(a){return a/10*-1/(2-Math.abs(a)/10)}window.addEventListener("scroll",function(){return window.requestAnimationFrame(b)}),window.addEventListener("resize",function(){return window.requestAnimationFrame(b)}),window.addEventListener("DOMNodeInserted",function(){return window.requestAnimationFrame(b)}),window.jQuery&&(window.jQuery.fn.flatsomeParallax=function(b){"destroy"!==b&&this.each(function(c,b){return function(b){b.classList.add("parallax-active"),!document.querySelector("body").classList.contains("parallax-mobile")&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)||b.classList&&b.dataset&&(a.push({element:b,type:g(b)}),e(a[a.length-1]))}(b)})})},function(a,b){Flatsome.plugin("resizeselect",function(a,b){jQuery(a).change(function(){var a=jQuery(this),c=a.find("option:selected").val(),d=a.find("option:selected").text(),b=jQuery('<span class="select-resize-ghost">').html(d),e;b.appendTo(a.parent()),e=b.width(),b.remove(),a.width(e+7),c&&a.parent().parent().find("input.search-field").focus()}).change()})},function(d,e,a){"use strict";var b=a(7),c=a.n(b);jQuery(".section .loading-spin, .banner .loading-spin, .page-loader").fadeOut(),jQuery("#top-link").on("click",function(a){jQuery.scrollTo(0,300),a.preventDefault()}),jQuery(".scroll-for-more").on("click",function(){jQuery.scrollTo(jQuery(this),{duration:300})}),jQuery(".search-dropdown button").on("click",function(a){jQuery(this).parent().find("input").trigger("focus"),a.preventDefault()}),jQuery(".current-cat").addClass("active"),jQuery("html").removeClass("loading-site"),setTimeout(function(){jQuery(".page-loader").remove()},1e3),jQuery(".resize-select").resizeselect(),flatsomeVars.user.can_edit_pages&&jQuery(".block-edit-link").each(function(){var a=jQuery(this),d=a.data("link"),e=a.data("backend"),f=a.data("title"),b=a.parents('[id^="menu-item-"]'),c;b.length&&b.hasClass("menu-item-has-block")&&(c=b.attr("id").match(/menu-item-(\d+)/),c&&c[1]&&(d+="&menu_id=".concat(c[1]))),jQuery(this).next().addClass("has-block").tooltipster({animationDuration:100,distance:-15,delay:0,repositionOnScroll:!0,interactive:!0,contentAsHTML:!0,content:f+' <br/> <a class="button edit-block-button edit-block-button-builder" href="'+d+'">UX Builder</a> <a class="button edit-block-button edit-block-button edit-block-button-backend" href="'+e+'">WP Editor</a>'}),jQuery(this).remove()}),document.addEventListener("uxb_app_ready",function(){var b=new URLSearchParams(window.top.location.search),a=parseInt(b.get("menu_id"));a&&setTimeout(function(){var b=jQuery("#menu-item-".concat(a));b.hasClass("menu-item-has-block has-dropdown")&&!b.hasClass("current-dropdown")&&jQuery("#menu-item-".concat(a," a:first")).trigger("click")},1e3)}),jQuery("#hotspot").on("click",function(a){a.preventDefault()}),jQuery(".wpcf7-form .wpcf7-submit").on("click",function(a){jQuery(this).parent().parent().addClass("processing")}),jQuery(".wpcf7").on("wpcf7invalid wpcf7spam wpcf7mailsent wpcf7mailfailed",function(a){jQuery(".processing").removeClass("processing")}),jQuery(document).ajaxComplete(function(a,b,c){jQuery(".processing").removeClass("processing")}),jQuery(function(){c()()})},function(a,b){Flatsome.behavior("animate",{attach:function(a){jQuery("[data-animate]",a).each(function(c,b){var a=jQuery(b);if(0===a.data("animate").length)return a.attr("data-animated","true");a.waypoint(function(b){if("down"===b){if("true"==a.data("animated"))return;setTimeout(function(){a.attr("data-animated","true")},300)}},{offset:"101%"})})},detach:function(a){jQuery("[data-animate]",a).each(function(b,a){jQuery(a).attr("data-animated","false")})}})},function(a,b){Flatsome.behavior("commons",{attach:function(a){jQuery("select.resizeselect").resizeselect(),jQuery("[data-parallax]",a).flatsomeParallax(),jQuery.fn.packery&&(jQuery("[data-packery-options], .has-packery",a).each(function(){var a=jQuery(this);a.packery(),setTimeout(function(){a.imagesLoaded(function(){a.packery("layout")})},100)}),jQuery(".banner-grid-wrapper").imagesLoaded(function(){jQuery(this.elements).removeClass("processing")}))},detach:function(a){}})},function(b,c,a){"use strict";(function(h){var i=a(8),j=a.n(i);function f(a,d){var b=Object.keys(a),c;return Object.getOwnPropertySymbols&&(c=Object.getOwnPropertySymbols(a),d&&(c=c.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),b.push.apply(b,c)),b}function c(c){for(var a=1,b;a<arguments.length;a++)b=null!=arguments[a]?arguments[a]:{},a%2?f(Object(b),!0).forEach(function(a){j()(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):f(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))});return c}function g(a){a.addClass("current-dropdown"),function(z){var a=z,b=jQuery(".header-inner").width(),d=a.closest("li.menu-item"),k=d.hasClass("menu-item-design-full-width"),l=d.hasClass("menu-item-design-container-width"),x=!k&&!l,e=h.flatsomeVars.rtl,v,p,o,g,m,j,f,r,s,n,u,q,w,i,y,t;if(x){if(b<750)return!1;v=a.outerWidth(),p=a.offset(),o=Math.max(document.documentElement.clientWidth,window.innerWidth||0),g=p.left-(o-b)/2,e&&(g=jQuery(window).width()-(p.left+v)-(o-b)/2),m=a.width(),j=b-(g+m),f=!1,g>j&&g<m&&(f=(g+j)/3),j<0&&(f=-j),f&&e?a.css("margin-right",-f):f&&a.css("margin-left",-f),m>b&&a.addClass("nav-dropdown-full")}l&&(r=document.querySelector(".header-inner").getBoundingClientRect(),s=a.get(0).getBoundingClientRect(),a.css(c(c({width:b},e&&{right:-(r.right-s.right)}),!e&&{left:r.left-s.left}))),k&&(n=document.body,u=n.getBoundingClientRect(),q=a.get(0).getBoundingClientRect(),w=n.clientWidth,a.css(c(c({width:w},e&&{right:-(u.right-q.right)-15}),!e&&{left:u.left-q.left-15}))),(l||k)&&(i=null,(d.closest("#top-bar").length&&(i=document.querySelector("#top-bar")),d.closest("#masthead").length&&(i=document.querySelector("#masthead")),d.closest("#wide-nav").length&&(i=document.querySelector("#wide-nav")),null!==i)&&(y=i.getBoundingClientRect(),t=d.get(0).getBoundingClientRect(),a.css({top:y.bottom-t.bottom+t.height})))}(a.find(".nav-dropdown"))}function b(a){a.removeClass("current-dropdown"),a.find(".nav-dropdown").attr("style","")}function e(a){a.each(function(d,c){var a=jQuery(c);a.hasClass("current-dropdown")&&b(a)})}function d(a,b){a.length&&a.removeClass("ux-body-overlay--".concat(b,"-active"))}Flatsome.behavior("dropdown",{attach:function(k){var f=jQuery(".nav li.has-dropdown",k),h="uxBuilder"===jQuery("html").attr("ng-app"),c=jQuery(".ux-body-overlay"),j="ontouchstart"in window,i=!1,a=null;f.each(function(p,n){var k=jQuery(n),o=k.hasClass("nav-dropdown-toggle")&&!j,l=!1,m=!1;k.on("touchstart click",function(a){"touchstart"===a.type&&(l=!0),"click"===a.type&&l&&(l&&!m&&a.preventDefault(),m=!0)}),h||o?(i=!0,k.on("click","a:first",function(h){if(h.preventDefault(),a=k,k.hasClass("current-dropdown"))return b(k),void d(c,"click");e(f),g(k),function(a,b){a.length&&a.addClass("ux-body-overlay--".concat("click","-active"))}(c),jQuery(document).trigger("flatsome-dropdown-opened",[k])})):k.hoverIntent({sensitivity:3,interval:20,timeout:70,over:function(a){e(f),g(k),d(c,"click"),jQuery(document).trigger("flatsome-dropdown-opened",[k])},out:function(){m=!1,l=!1,b(k)}})}),!h&&i&&jQuery(document).on("click",function(e){null===a||a===e.target||a.has(e.target).length||(b(a),d(c,"click"))}),jQuery(document).on("flatsome-dropdown-opened",function(b,a){a.hasClass("menu-item-has-block")&&(jQuery.fn.flickity&&a.find("[data-flickity-options]").flickity("resize"),jQuery.fn.packery&&a.find("[data-packery-options]").packery("layout"))})}})}).call(this,a(1))},function(c,d,b){"use strict";var a=b(0);Flatsome.behavior("lightbox-gallery",{attach:function(b){var c={delegate:"a",type:"image",closeBtnInside:flatsomeVars.lightbox.close_btn_inside,closeMarkup:flatsomeVars.lightbox.close_markup,tLoading:'<div class="loading-spin centered dark"></div>',removalDelay:300,gallery:{enabled:!0,navigateByImgClick:!0,arrowMarkup:'<button class="mfp-arrow mfp-arrow-%dir%" title="%title%"><i class="icon-angle-%dir%"></i></button>',preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',verticalFit:!1},callbacks:{beforeOpen:function(){Object(a.a)()},beforeClose:function(){Object(a.b)()}}};jQuery('.lightbox .gallery a[href*=".jpg"], .lightbox .gallery a[href*=".jpeg"], .lightbox a.lightbox-gallery',b).parent().magnificPopup(c),jQuery(".lightbox .lightbox-multi-gallery",b).length&&jQuery(".lightbox-multi-gallery",b).each(function(){jQuery(this).magnificPopup(c)})}})},function(c,d,b){"use strict";var a=b(0);Flatsome.behavior("lightbox-image",{attach:function(b){jQuery(['.lightbox *[id^="attachment"] a[href*=".jpg"]','.lightbox *[id^="attachment"] a[href*=".jpeg"]','.lightbox .wp-block-image a[href*=".jpg"]:not([target="_blank"])','.lightbox .wp-block-image a[href*=".jpeg"]:not([target="_blank"])',".lightbox a.image-lightbox",'.lightbox .entry-content a[href*=".jpg"]','.lightbox .entry-content a[href*=".jpeg"]'].join(","),b).not([".lightbox a.lightbox-gallery",'.lightbox .gallery a[href*=".jpg"]','.lightbox .gallery a[href*=".jpeg"]','.lightbox .lightbox-multi-gallery a[href*=".jpg"]','.lightbox .lightbox-multi-gallery a[href*=".jpeg"]'].join(",")).magnificPopup({type:"image",tLoading:'<div class="loading-spin centered dark"></div>',closeOnContentClick:!0,closeBtnInside:flatsomeVars.lightbox.close_btn_inside,closeMarkup:flatsomeVars.lightbox.close_markup,removalDelay:300,image:{verticalFit:!1},callbacks:{beforeOpen:function(){Object(a.a)()},beforeClose:function(){Object(a.b)()}}})}})},function(c,d,b){"use strict";var a=b(0);Flatsome.behavior("lightboxes-link",{attach:function(b){jQuery(".lightbox-by-id",b).each(function(){var c=jQuery(this).attr("id");jQuery('a[href="#'+c+'"]',b).on("click",function(b){var c=jQuery(b.currentTarget).attr("href").substring(1),d=jQuery("#".concat(c,".lightbox-by-id")),f,e;c&&d.length>0&&(f=d[0],e=jQuery.magnificPopup.open?300:0,e&&jQuery.magnificPopup.close(),setTimeout(function(){jQuery.magnificPopup.open({removalDelay:300,closeBtnInside:flatsomeVars.lightbox.close_btn_inside,closeMarkup:flatsomeVars.lightbox.close_markup,items:{src:f,type:"inline",tLoading:'<div class="loading-spin dark"></div>'},callbacks:{beforeOpen:function(){Object(a.a)()},open:function(){var a,b;Flatsome.attach(this.content),jQuery.fn.flickity&&(a=jQuery("[data-flickity-options]",this.content),a&&a.imagesLoaded(function(){a.flickity("resize")})),jQuery.fn.packery&&(b=jQuery("[data-packery-options]",this.content),b&&b.imagesLoaded(function(){b.packery("layout")}))},beforeClose:function(){Object(a.b)()}}})},e),b.preventDefault())})})}})},function(c,d,b){"use strict";var a=b(0);Flatsome.behavior("lightbox-video",{attach:function(b){jQuery('a.open-video, a.button[href*="vimeo"], a.button[href*="youtube.com/watch"]',b).magnificPopup({type:"iframe",closeBtnInside:flatsomeVars.lightbox.close_btn_inside,mainClass:"my-mfp-video",closeMarkup:flatsomeVars.lightbox.close_markup,tLoading:'<div class="loading-spin centered dark"></div>',removalDelay:300,preloader:!0,callbacks:{beforeOpen:function(){Object(a.a)()},open:function(){jQuery(".slider .is-selected .video").trigger("pause")},beforeClose:function(){Object(a.b)()},close:function(){jQuery(".slider .is-selected .video").trigger("play")}}})}})},function(c,d,b){"use strict";var a=b(0);Flatsome.behavior("lightboxes",{attach:function(b){jQuery("[data-open]",b).on("click",function(d){var b=jQuery(d.currentTarget),e=b.data("open"),h=b.data("color"),f=b.data("bg"),c=b.data("pos"),i=b.data("visible-after"),g=b.data("class"),j=b.attr("data-focus");b.offset(),b.addClass("current-lightbox-clicked"),jQuery.magnificPopup.open({items:{src:e,type:"inline",tLoading:'<div class="loading-spin dark"></div>'},removalDelay:300,closeBtnInside:flatsomeVars.lightbox.close_btn_inside,closeMarkup:flatsomeVars.lightbox.close_markup,focus:j,callbacks:{beforeOpen:function(){this.st.mainClass="off-canvas ".concat(h," off-canvas-").concat(c),Object(a.a)()},open:function(){jQuery("html").addClass("has-off-canvas"),jQuery("html").addClass("has-off-canvas-"+c),g&&jQuery(".mfp-content").addClass(g),f&&jQuery(".mfp-bg").addClass(f),jQuery(".mfp-content .resize-select").change(),jQuery.fn.packery&&jQuery("[data-packery-options], .has-packery").packery("layout")},beforeClose:function(){jQuery("html").removeClass("has-off-canvas"),Object(a.b)()},afterClose:function(){jQuery("html").removeClass("has-off-canvas-"+c),jQuery(".current-lightbox-clicked").removeClass("current-lightbox-clicked"),i&&jQuery(e).removeClass("mfp-hide")}}}),d.preventDefault()})}})},function(a,b){Flatsome.behavior("slider",{attach:function(a){(jQuery(a).data("flickityOptions")?jQuery(a):jQuery("[data-flickity-options]",a)).each(function(h,d){var a=jQuery(d),e=a.closest(".slider-wrapper"),b=a.data("flickity-options"),f,c,g;"undefined"!=typeof UxBuilder&&(b.draggable=!1),!0!==b.watchCSS&&(a.on("ready.flickity",function(){a.find(".flickity-slider > :not(.is-selected) .video-bg").trigger("pause"),a.find(".is-selected .video-bg").trigger("play"),"requestAnimationFrame"in window&&(a.removeClass("flickity-enabled"),window.requestAnimationFrame(function(){a.addClass("flickity-enabled")}))}),f=a.flickity(b),(a.imagesLoaded(function(){e.find(".loading-spin").fadeOut()}),a.on("change.flickity",function(){a.find(".flickity-slider > :not(.is-selected) .video-bg").trigger("pause"),a.find(".is-selected .video-bg").trigger("play")}),a.on("dragStart.flickity",function(){document.ontouchmove=function(a){return a.preventDefault()},a.addClass("is-dragging")}),a.on("dragEnd.flickity",function(){document.ontouchmove=function(){return!0},a.removeClass("is-dragging")}),b.parallax)&&(c=f.data("flickity"),g=a.find(".bg, .flickity-slider > .img img"),a.addClass("slider-has-parallax"),a.on("scroll.flickity",function(a,d){c.slides.forEach(function(d,e){var a=g[e],f=-1*(d.target+c.x)/b.parallax;a&&(a.style.transform="translateX( "+f+"px)")})})))})},detach:function(a){jQuery(a).data("flickityOptions")?jQuery(a).flickity("destroy"):jQuery("[data-flickity-options]",a).flickity("destroy")}})},function(b,c){function a(a,c,b){c.each(function(b,c){return jQuery(c).toggleClass("active",b===a)}),b.each(function(b,c){return jQuery(c).toggleClass("active",b===a)}),jQuery.fn.flickity&&jQuery("[data-flickity-options]",b[a]).flickity("resize"),jQuery.fn.packery&&jQuery("[data-packery-options]",b[a]).packery("layout")}Flatsome.behavior("tabs",{attach:function(c){var b=window.location.hash;jQuery(".tabbed-content",c).each(function(g,f){var e=jQuery(f),c=e.find("> .nav > li"),d=e.find("> .tab-panels > .panel");d.removeAttr("style"),c.each(function(e,g){var f=jQuery(g).find("a");f.on("click",function(b){a(e,c,d),b.preventDefault(),b.stopPropagation()}),b.substr(1).length&&b.substr(1)===f.attr("href").split("#")[1]&&a(e,c,d)})})}})},function(a,b){Flatsome.behavior("toggle",{attach:function(a){function b(b){var a=jQuery(b.currentTarget).parent();a.toggleClass("active"),a.attr("aria-expanded","false"===a.attr("aria-expanded")?"true":"false"),b.preventDefault()}jQuery([".widget ul.children",".nav ul.children",".menu .sub-menu",".mobile-sidebar-levels-2 .nav ul.children > li > ul"].join(", "),a).each(function(){var a=jQuery(this).parents(".nav-slide").length?"right":"down";jQuery(this).parent().addClass("has-child").attr("aria-expanded","false"),jQuery(this).before('<button class="toggle"><i class="icon-angle-'.concat(a,'"></i></button>'))}),jQuery(".current-cat-parent",a).addClass("active").attr("aria-expanded","true").removeClass("current-cat-parent"),jQuery(".toggle",a).on("click",b);var c=jQuery("body").hasClass("mobile-submenu-toggle");jQuery(".sidebar-menu li.menu-item.has-child",a).each(function(){var a=jQuery(this),d=a.find("> a:first");"#"===d.attr("href")?d.on("click",function(b){b.preventDefault(),a.toggleClass("active"),a.attr("aria-expanded","false"===a.attr("aria-expanded")?"true":"false")}):c&&d.next(".toggle").length&&d.on("click",b)})}})},function(b,c){function a(a){a.attr("aria-hidden","true"),a.find("> li > a, > li > button").attr("tabindex","-1")}Flatsome.behavior("sidebar-slider",{attach:function(b){var c=jQuery("body").hasClass("mobile-submenu-toggle");jQuery(".mobile-sidebar-slide",b).each(function(g,b){var e=parseInt(jQuery(b).data("levels"),10)||1,d=jQuery(".sidebar-menu",b),f=jQuery(".nav-sidebar",b);jQuery(["> li > ul.children","> li > .sub-menu",e>1?"> li > ul.children > li > ul":null].filter(Boolean).join(", "),f).each(function(n,m){var b=jQuery(m),e=b.parent(),g=e.parents("ul:first"),l=jQuery(["> .toggle",'> a[href="#"]',c&&"> a"].filter(Boolean).join(","),e),k=e.find("> a").text().trim(),f=b.parents("ul").length,h=Boolean(window.flatsomeVars.rtl),i=jQuery('\n            <li class="nav-slide-header pt-half pb-half">\n              <button class="toggle">\n                <i class="icon-angle-left"></i>\n                '.concat(k||window.flatsomeVars.i18n.mainMenu,"\n              </button>\n            </li>\n          ")),j;b.prepend(i),a(b),j=null,l.off("click").on("click",function(c){var a;e.attr("aria-expanded","true"),g.addClass("is-current-parent"),b.addClass("is-current-slide"),d.css("transform","translateX(".concat(h?"":"-").concat(100*f,"%)")),(a=b).attr("aria-hidden","false"),a.find("> li > a, > li > button").attr("tabindex",""),clearTimeout(j),c.preventDefault()}),i.find(".toggle").on("click",function(){d.css("transform","translateX(".concat(h?"":"-").concat(100*(f-1),"%)")),a(b),j=setTimeout(function(){b.removeClass("is-current-slide"),g.removeClass("is-current-parent")},300),e.removeClass("active"),e.attr("aria-expanded","false")})})})}})},function(a,b){Flatsome.behavior("nav-hover",{attach:function(b){var a=jQuery(".ux-body-overlay",b);a.length&&jQuery(".nav-prompts-overlay > li.menu-item",b).on({mouseenter:function(){a.addClass("ux-body-overlay--hover-active")},mouseleave:function(){a.removeClass("ux-body-overlay--hover-active")}})}})},function(a,b){Flatsome.behavior("back-to-top",{attach:function(a){jQuery("body",a).waypoint({handler:function(b){jQuery(".back-to-top",a).toggleClass("active")},offset:"-100%"})}})},function(a,b){Flatsome.behavior("scroll-to",{attach:function(){var c=jQuery("span.scroll-to"),a=jQuery(".scroll-to-bullets"),b=flatsomeVars.sticky_height,d;a.length&&(a.children().tooltipster("destroy"),a.remove()),jQuery("li.scroll-to-link").remove(),c.length&&(a=jQuery('<div class="scroll-to-bullets hide-for-medium"/>'),jQuery("body").append(a),c.each(function(j,h){var d=jQuery(h),e=d.data("link"),a=d.data("title"),g=d.data("bullet"),c='a[href*="'.concat(e||"<nolink>",'"]'),f,i;g&&(f=jQuery('\n          <a href="'.concat(e,'" data-title="').concat(a,'" title="').concat(a,'">\n          <strong></strong>\n          </a>\n        ')),f.tooltipster({position:"left",delay:50,contentAsHTML:!0,touchDevices:!1}),jQuery(".scroll-to-bullets").append(f)),i=jQuery('\n          <li class="scroll-to-link"><a data-animate="fadeIn" href="'.concat(e,'" data-title="').concat(a,'" title="').concat(a,'">\n          ').concat(a,"\n          </a></li>\n        ")),jQuery("li.nav-single-page").before(i),setTimeout(function(){jQuery(".scroll-to-link a").attr("data-animated","true")},300),d.waypoint(function(a){jQuery(".scroll-to-bullets a, .scroll-to-link").removeClass("active"),jQuery(".scroll-to-bullets").find(c).addClass("active"),jQuery(".nav-single-page").parent().find(c).parent().addClass("active"),"up"===a&&jQuery(".scroll-to-bullets, .nav-single-page").find(c).removeClass("active").prev().addClass("active")},{offset:b}),jQuery(c).off("click").on("click",function(c){var a=jQuery(this).attr("href").split("#")[1],d,e,f;a&&(d="\\#".concat(a),e="span.scroll-to[data-link=".concat(d,"]"),f=jQuery(e).offset().top-b,jQuery.scrollTo(f,{duration:500,axis:"y"}),jQuery.magnificPopup.close(),c.preventDefault())})}),location.hash)&&(d=location.hash.replace("#",""),jQuery.scrollTo("a[name="+d+"]",{duration:500,axis:"y",offset:-b}))},detach:function(){jQuery("span.scroll-to").length&&setTimeout(this.attach,0)}})},function(a,b){Flatsome.behavior("accordion",{attach:function(a){jQuery(".accordion",a).each(function(){var b=jQuery(this).attr("rel"),a;b>0&&(a=jQuery(this).find(".accordion-item:nth-child("+b+") .accordion-inner"),a.show(),a.prev().addClass("active"),jQuery.fn.flickity&&a.find("[data-flickity-options]").flickity("resize"),jQuery.fn.packery&&a.find("[data-packery-options]").packery("layout"))})}}),Flatsome.behavior("accordion-title",{attach:function(a){jQuery(".accordion-title",a).each(function(){jQuery(this).off("click.flatsome").on("click.flatsome",function(b){var c=this,a;jQuery(this).next().is(":hidden")?(jQuery(this).parent().parent().find(".accordion-title").removeClass("active").next().slideUp(200),jQuery(this).toggleClass("active").next().slideDown(200,function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&jQuery.scrollTo(jQuery(this).prev(),{duration:300,offset:-100})}),a=jQuery(this).parent().parent().find("[data-flickity-options]"),Flatsome.detach("slider",a),window.requestAnimationFrame(function(){Flatsome.attach("slider",a),jQuery.fn.packery&&jQuery(c).parent().parent().find("[data-packery-options]").packery("layout")})):jQuery(this).parent().parent().find(".accordion-title").removeClass("active").next().slideUp(200),b.preventDefault()})})}})},function(a,b){Flatsome.behavior("tooltips",{attach:function(a){jQuery(".tooltip, .has-tooltip, .tip-top, li.chosen a",a).tooltipster(),jQuery(".tooltip-as-html",a).tooltipster({interactive:!0,contentAsHTML:!0})}})},function(a,b){Flatsome.behavior("sticky-section",{attach:function(a){jQuery(".sticky-section",a).each(function(c,b){var a=jQuery(b);a.waypoint(function(b){"down"===b&&(a.addClass("is-sticky-section"),a.after('<div class="sticky-section-helper"></div>')),"up"===b&&(a.removeClass("is-sticky-section"),a.next(".sticky-section-helper").remove())},{offset:"0.1px"}),a.waypoint(function(b){"down"===b&&(a.removeClass("is-sticky-section"),a.next(".sticky-section-helper").remove()),"up"===b&&(a.addClass("is-sticky-section"),a.after('<div class="sticky-section-helper"></div>'))},{offset:"-100%"})})}})},function(a,b){Flatsome.behavior("sticky-sidebar",{attach:function(a){var b=parseInt(flatsomeVars.sticky_height)+15;jQuery(".is-sticky-column",a).each(function(c,a){jQuery(a).stickySidebar({topSpacing:b,bottomSpacing:15,minWidth:850,innerWrapperSelector:".is-sticky-column__inner"}),jQuery(document).on("updated_checkout",function(){jQuery(a).stickySidebar("updateSticky")})})}})},function(a,b){Flatsome.behavior("youtube",{attach:function(g){var a,b,c,d,e,f=jQuery(".ux-youtube",g);0!==f.length&&(window.onYouTubePlayerAPIReady=function(){f.each(function(){var a=jQuery(this),d=a.attr("id"),b=a.data("videoid"),c=a.data("loop"),e=a.data("audio");new YT.Player(d,{height:"100%",width:"100%",playerVars:{html5:1,autoplay:1,controls:0,rel:0,modestbranding:1,playsinline:1,showinfo:0,fs:0,loop:c,el:0,playlist:c?b:void 0},videoId:b,events:{onReady:function(a){0===e&&a.target.mute()}}})})},b="script",c="youtube-jssdk",e=(a=document).getElementsByTagName(b)[0],a.getElementById(c)||((d=a.createElement(b)).id=c,d.src="https://www.youtube.com/player_api",e.parentNode.insertBefore(d,e)))}})},,,,,,,,function(c,d,e){"use strict";var a=function(){return(a=Object.assign||function(d){for(var a,b=1,e=arguments.length,c;b<e;b++)for(c in a=arguments[b])Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}).apply(this,arguments)},b=function(){function b(c,d,e){var b=this;this.target=c,this.endVal=d,this.options=e,this.version="2.0.7",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(c){b.startTime||(b.startTime=c);var a=c-b.startTime;b.remaining=b.duration-a,b.useEasing?b.countDown?b.frameVal=b.startVal-b.easingFn(a,0,b.startVal-b.endVal,b.duration):b.frameVal=b.easingFn(a,b.startVal,b.endVal-b.startVal,b.duration):b.countDown?b.frameVal=b.startVal-(b.startVal-b.endVal)*(a/b.duration):b.frameVal=b.startVal+(b.endVal-b.startVal)*(a/b.duration),b.countDown?b.frameVal=b.frameVal<b.endVal?b.endVal:b.frameVal:b.frameVal=b.frameVal>b.endVal?b.endVal:b.frameVal,b.frameVal=Number(b.frameVal.toFixed(b.options.decimalPlaces)),b.printValue(b.frameVal),a<b.duration?b.rAF=requestAnimationFrame(b.count):null!==b.finalEndVal?b.update(b.finalEndVal):b.callback&&b.callback()},this.formatNumber=function(g){var h,f,a,e,c,j=g<0?"-":"",d,i;if(h=Math.abs(g).toFixed(b.options.decimalPlaces),a=(f=(h+="").split("."))[0],e=f.length>1?b.options.decimal+f[1]:"",b.options.useGrouping){c="";for(d=0,i=a.length;d<i;++d)0!==d&&d%3==0&&(c=b.options.separator+c),c=a[i-d-1]+c;a=c}return b.options.numerals&&b.options.numerals.length&&(a=a.replace(/[0-9]/g,function(a){return b.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return b.options.numerals[+a]})),j+b.options.prefix+a+e+b.options.suffix},this.easeOutExpo=function(a,b,c,d){return c*(1-Math.pow(2,-10*a/d))*1024/1023+b},this.options=a(a({},this.defaults),e),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(d),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof c?document.getElementById(c):c,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return b.prototype.determineDirectionAndSmartEasing=function(){var a=this.finalEndVal?this.finalEndVal:this.endVal,b,c;this.countDown=this.startVal>a,b=a-this.startVal,Math.abs(b)>this.options.smartEasingThreshold?(this.finalEndVal=a,c=this.countDown?1:-1,this.endVal=a+c*this.options.smartEasingAmount,this.duration=this.duration/2):(this.endVal=a,this.finalEndVal=null),this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},b.prototype.start=function(a){this.error||(this.callback=a,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},b.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},b.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},b.prototype.update=function(a){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(a),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},b.prototype.printValue=function(b){var a=this.formattingFn(b);"INPUT"===this.el.tagName?this.el.value=a:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=a:this.el.innerHTML=a},b.prototype.ensureNumber=function(a){return"number"==typeof a&&!isNaN(a)},b.prototype.validateValue=function(a){var b=Number(a);return this.ensureNumber(b)?b:(this.error="[CountUp] invalid start or end value: "+a,null)},b.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},b}();Flatsome.behavior("count-up",{attach:function(a){jQuery("span.count-up",a).each(function(d,c){var a=jQuery(c);a.waypoint({handler:function(d){if(!jQuery(this.element).hasClass("active")){var c=parseInt(a.text());new b(a.get(0),c,{decimalPlaces:0,duration:4}).start(),a.addClass("active")}},offset:"100%"})})}})},function(a,b,c){"use strict";Flatsome.behavior("lazy-load-bg",{attach:function(c){var a,b=(a=function(a){a.intersectionRatio>0&&(b.unobserve(a.target),jQuery(a.target).addClass("bg-loaded"))},new IntersectionObserver(function(c){for(var b=0;b<c.length;b++)a(c[b])},{rootMargin:"0px",threshold:.1}));jQuery(".bg",c).each(function(c,a){b.observe(a)})}})}]);
/*! This file is auto-generated */
!function(n,r){var t,e;"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,t=n._,(e=n._=r()).noConflict=function(){return n._=t,e})}(this,function(){var n="1.13.1",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,a=e.slice,p=o.toString,t=o.hasOwnProperty,i="undefined"!=typeof ArrayBuffer,f="undefined"!=typeof DataView,c=Array.isArray,l=Object.keys,h=Object.create,v=i&&ArrayBuffer.isView,y=isNaN,d=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),b=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function j(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}for(var e=Array(i+1),t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}}function _(n){var r=typeof n;return"function"==r||"object"==r&&!!n}function w(n){return void 0===n}function A(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)}function x(n){var r="[object "+n+"]";return function(n){return p.call(n)===r}}var S=x("String"),O=x("Number"),M=x("Date"),E=x("RegExp"),B=x("Error"),N=x("Symbol"),I=x("ArrayBuffer"),T=x("Function"),k=r.document&&r.document.childNodes,D=T="function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof k?function(n){return"function"==typeof n||!1}:T,R=x("Object"),F=f&&R(new DataView(new ArrayBuffer(8))),V="undefined"!=typeof Map&&R(new Map),P=x("DataView");var q=F?function(n){return null!=n&&D(n.getInt8)&&I(n.buffer)}:P,U=c||x("Array");function W(n,r){return null!=n&&t.call(n,r)}var z=x("Arguments");!function(){z(arguments)||(z=function(n){return W(n,"callee")})}();var L=z;function $(n){return O(n)&&y(n)}function C(n){return function(){return n}}function K(r){return function(n){n=r(n);return"number"==typeof n&&0<=n&&n<=m}}function J(r){return function(n){return null==n?void 0:n[r]}}var G=J("byteLength"),H=K(G),Q=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var X=i?function(n){return v?v(n)&&!q(n):H(n)&&Q.test(p.call(n))}:C(!1),Y=J("length");function Z(n,r){r=function(r){for(var t={},n=r.length,e=0;e<n;++e)t[r[e]]=!0;return{contains:function(n){return t[n]},push:function(n){return t[n]=!0,r.push(n)}}}(r);var t=b.length,e=n.constructor,u=D(e)&&e.prototype||o,i="constructor";for(W(n,i)&&!r.contains(i)&&r.push(i);t--;)(i=b[t])in n&&n[i]!==u[i]&&!r.contains(i)&&r.push(i)}function nn(n){if(!_(n))return[];if(l)return l(n);var r,t=[];for(r in n)W(n,r)&&t.push(r);return g&&Z(n,t),t}function rn(n,r){var t=nn(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0}function tn(n){return n instanceof tn?n:this instanceof tn?void(this._wrapped=n):new tn(n)}function en(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}tn.VERSION=n,tn.prototype.valueOf=tn.prototype.toJSON=tn.prototype.value=function(){return this._wrapped},tn.prototype.toString=function(){return String(this._wrapped)};var un="[object DataView]";function on(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"==u||"object"==u||"object"==typeof r)&&function n(r,t,e,u){r instanceof tn&&(r=r._wrapped);t instanceof tn&&(t=t._wrapped);var i=p.call(r);if(i!==p.call(t))return!1;if(F&&"[object Object]"==i&&q(r)){if(!q(t))return!1;i=un}switch(i){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return s.valueOf.call(r)===s.valueOf.call(t);case"[object ArrayBuffer]":case un:return n(en(r),en(t),e,u)}var o="[object Array]"===i;if(!o&&X(r)){var f=G(r);if(f!==G(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;o=!0}if(!o){if("object"!=typeof r||"object"!=typeof t)return!1;i=r.constructor,f=t.constructor;if(i!==f&&!(D(i)&&i instanceof i&&D(f)&&f instanceof f)&&"constructor"in r&&"constructor"in t)return!1}e=e||[];u=u||[];var a=e.length;for(;a--;)if(e[a]===r)return u[a]===t;e.push(r);u.push(t);if(o){if((a=r.length)!==t.length)return!1;for(;a--;)if(!on(r[a],t[a],e,u))return!1}else{var c,l=nn(r);if(a=l.length,nn(t).length!==a)return!1;for(;a--;)if(c=l[a],!W(t,c)||!on(r[c],t[c],e,u))return!1}e.pop();u.pop();return!0}(n,r,t,e)}function fn(n){if(!_(n))return[];var r,t=[];for(r in n)t.push(r);return g&&Z(n,t),t}function an(e){var u=Y(e);return function(n){if(null==n)return!1;var r=fn(n);if(Y(r))return!1;for(var t=0;t<u;t++)if(!D(n[e[t]]))return!1;return e!==hn||!D(n[cn])}}var cn="forEach",ln=["clear","delete"],sn=["get","has","set"],pn=ln.concat(cn,sn),hn=ln.concat(sn),vn=["add"].concat(ln,cn,"has"),yn=V?an(pn):x("Map"),dn=V?an(hn):x("WeakMap"),gn=V?an(vn):x("Set"),bn=x("WeakSet");function mn(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function jn(n){for(var r={},t=nn(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function _n(n){var r,t=[];for(r in n)D(n[r])&&t.push(r);return t.sort()}function wn(a,c){return function(n){var r=arguments.length;if(c&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=a(e),i=u.length,o=0;o<i;o++){var f=u[o];c&&void 0!==n[f]||(n[f]=e[f])}return n}}var An=wn(fn),xn=wn(nn),Sn=wn(fn,!0);function On(n){if(!_(n))return{};if(h)return h(n);var r=function(){};r.prototype=n;n=new r;return r.prototype=null,n}function Mn(n){return _(n)?U(n)?n.slice():An({},n):n}function En(n){return U(n)?n:[n]}function Bn(n){return tn.toPath(n)}function Nn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function In(n,r,t){r=Nn(n,Bn(r));return w(r)?t:r}function Tn(n){return n}function kn(r){return r=xn({},r),function(n){return rn(n,r)}}function Dn(r){return r=Bn(r),function(n){return Nn(n,r)}}function Rn(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}}function Fn(n,r,t){return null==n?Tn:D(n)?Rn(n,r,t):(_(n)&&!U(n)?kn:Dn)(n)}function Vn(n,r){return Fn(n,r,1/0)}function Pn(n,r,t){return tn.iteratee!==Vn?tn.iteratee(n,r):Fn(n,r,t)}function qn(){}function Un(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}tn.toPath=En,tn.iteratee=Vn;var Wn=Date.now||function(){return(new Date).getTime()};function zn(r){function t(n){return r[n]}var n="(?:"+nn(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return e.test(n=null==n?"":""+n)?n.replace(u,t):n}}var Ln={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$n=zn(Ln),Cn=zn(jn(Ln)),Kn=tn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Jn=/(.)^/,Gn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Hn=/\\|'|\r|\n|\u2028|\u2029/g;function Qn(n){return"\\"+Gn[n]}var Xn=/^\s*(\w|\$)+\s*$/;var Yn=0;function Zn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);t=On(n.prototype),u=n.apply(t,u);return _(u)?u:t}var nr=j(function(u,i){function o(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===f?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return Zn(u,o,this,this,t)}var f=nr.placeholder;return o});nr.placeholder=tn;var rr=j(function(r,t,e){if(!D(r))throw new TypeError("Bind must be called on a function");var u=j(function(n){return Zn(r,u,t,this,e.concat(n))});return u}),tr=K(Y);function er(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,i=0,o=Y(n);i<o;i++){var f=n[i];if(tr(f)&&(U(f)||L(f)))if(1<r)er(f,r-1,t,e),u=e.length;else for(var a=0,c=f.length;a<c;)e[u++]=f[a++];else t||(e[u++]=f)}return e}var ur=j(function(n,r){var t=(r=er(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=rr(n[e],n)}return n});var ir=j(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),or=nr(ir,tn,1);function fr(n){return function(){return!n.apply(this,arguments)}}function ar(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}r=nr(ar,2);function cr(n,r,t){r=Pn(r,t);for(var e,u=nn(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e}function lr(i){return function(n,r,t){r=Pn(r,t);for(var e=Y(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}}var sr=lr(1),k=lr(-1);function pr(n,r,t,e){for(var u=(t=Pn(t,e,1))(r),i=0,o=Y(n);i<o;){var f=Math.floor((i+o)/2);t(n[f])<u?i=f+1:o=f}return i}function hr(i,o,f){return function(n,r,t){var e=0,u=Y(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(f&&t&&u)return n[t=f(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(a.call(n,e,u),$))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}}var vr=hr(1,sr,pr),T=hr(-1,k);function yr(n,r,t){t=(tr(n)?sr:cr)(n,r,t);if(void 0!==t&&-1!==t)return n[t]}function dr(n,r,t){if(r=Rn(r,t),tr(n))for(u=0,i=n.length;u<i;u++)r(n[u],u,n);else for(var e=nn(n),u=0,i=e.length;u<i;u++)r(n[e[u]],e[u],n);return n}function gr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var f=e?e[o]:o;i[o]=r(n[f],f,n)}return i}function br(a){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!tr(n)&&nn(n),i=(u||n).length,o=0<a?0:i-1;for(e||(t=n[u?u[o]:o],o+=a);0<=o&&o<i;o+=a){var f=u?u[o]:o;t=r(t,n[f],f,n)}return t}(n,Rn(r,e,4),t,u)}}f=br(1),R=br(-1);function mr(n,e,r){var u=[];return e=Pn(e,r),dr(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u}function jr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0}function _r(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1}function wr(n,r,t,e){return tr(n)||(n=mn(n)),0<=vr(n,r,t="number"!=typeof t||e?0:t)}P=j(function(n,t,e){var u,i;return D(t)?i=t:(t=Bn(t),u=t.slice(0,-1),t=t[t.length-1]),gr(n,function(n){var r=i;if(!r){if(null==(n=u&&u.length?Nn(n,u):n))return;r=n[t]}return null==r?r:r.apply(n,e)})});function Ar(n,r){return gr(n,Dn(r))}function xr(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var f=0,a=(n=tr(n)?n:mn(n)).length;f<a;f++)null!=(t=n[f])&&i<t&&(i=t);else e=Pn(e,r),dr(n,function(n,r,t){u=e(n,r,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i}function Sr(n,r,t){if(null==r||t)return(n=!tr(n)?mn(n):n)[Un(n.length-1)];var e=(tr(n)?Mn:mn)(n),n=Y(e);r=Math.max(Math.min(r,n),0);for(var u=n-1,i=0;i<r;i++){var o=Un(i,u),f=e[i];e[i]=e[o],e[o]=f}return e.slice(0,r)}function Or(i,r){return function(t,e,n){var u=r?[[],[]]:{};return e=Pn(e,n),dr(t,function(n,r){r=e(n,r,t);i(u,n,r)}),u}}var c=Or(function(n,r,t){W(n,t)?n[t].push(r):n[t]=[r]}),i=Or(function(n,r,t){n[t]=r}),sn=Or(function(n,r,t){W(n,t)?n[t]++:n[t]=1}),ln=Or(function(n,r,t){n[t?0:1].push(r)},!0),Mr=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Er(n,r,t){return r in t}var Br=j(function(n,r){var t={},e=r[0];if(null==n)return t;D(e)?(1<r.length&&(e=Rn(e,r[1])),r=fn(n)):(e=Er,r=er(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],f=n[o];e(f,o,n)&&(t[o]=f)}return t}),pn=j(function(n,t){var r,e=t[0];return D(e)?(e=fr(e),1<t.length&&(r=t[1])):(t=gr(er(t,!1,!1),String),e=function(n,r){return!wr(t,r)}),Br(n,e,r)});function Nr(n,r,t){return a.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Ir(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:Nr(n,n.length-r)}function Tr(n,r,t){return a.call(n,null==r||t?1:r)}var kr=j(function(n,r){return r=er(r,!0,!0),mr(n,function(n){return!wr(r,n)})}),V=j(function(n,r){return kr(n,r)});function Dr(n,r,t,e){A(r)||(e=t,t=r,r=!1),null!=t&&(t=Pn(t,e));for(var u=[],i=[],o=0,f=Y(n);o<f;o++){var a=n[o],c=t?t(a,o,n):a;r&&!t?(o&&i===c||u.push(a),i=c):t?wr(i,c)||(i.push(c),u.push(a)):wr(u,a)||u.push(a)}return u}vn=j(function(n){return Dr(er(n,!0,!0))});function Rr(n){for(var r=n&&xr(n,Y).length||0,t=Array(r),e=0;e<r;e++)t[e]=Ar(n,e);return t}Ln=j(Rr);function Fr(n,r){return n._chain?tn(r).chain():r}function Vr(t){return dr(_n(t),function(n){var r=tn[n]=t[n];tn.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),Fr(this,r.apply(tn,n))}}),tn}dr(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];tn.prototype[r]=function(){var n=this._wrapped;return null!=n&&(t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0]),Fr(this,n)}}),dr(["concat","join","slice"],function(n){var r=e[n];tn.prototype[n]=function(){var n=this._wrapped;return Fr(this,n=null!=n?r.apply(n,arguments):n)}});Ln=Vr({__proto__:null,VERSION:n,restArguments:j,isObject:_,isNull:function(n){return null===n},isUndefined:w,isBoolean:A,isElement:function(n){return!(!n||1!==n.nodeType)},isString:S,isNumber:O,isDate:M,isRegExp:E,isError:B,isSymbol:N,isArrayBuffer:I,isDataView:q,isArray:U,isFunction:D,isArguments:L,isFinite:function(n){return!N(n)&&d(n)&&!isNaN(parseFloat(n))},isNaN:$,isTypedArray:X,isEmpty:function(n){if(null==n)return!0;var r=Y(n);return"number"==typeof r&&(U(n)||S(n)||L(n))?0===r:0===Y(nn(n))},isMatch:rn,isEqual:function(n,r){return on(n,r)},isMap:yn,isWeakMap:dn,isSet:gn,isWeakSet:bn,keys:nn,allKeys:fn,values:mn,pairs:function(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:jn,functions:_n,methods:_n,extend:An,extendOwn:xn,assign:xn,defaults:Sn,create:function(n,r){return n=On(n),r&&xn(n,r),n},clone:Mn,tap:function(n,r){return r(n),n},get:In,has:function(n,r){for(var t=(r=Bn(r)).length,e=0;e<t;e++){var u=r[e];if(!W(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=Pn(r,t);for(var e=nn(n),u=e.length,i={},o=0;o<u;o++){var f=e[o];i[f]=r(n[f],f,n)}return i},identity:Tn,constant:C,noop:qn,toPath:En,property:Dn,propertyOf:function(r){return null==r?qn:function(n){return In(r,n)}},matcher:kn,matches:kn,times:function(n,r,t){var e=Array(Math.max(0,n));r=Rn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Un,now:Wn,escape:$n,unescape:Cn,templateSettings:Kn,template:function(i,n,r){n=Sn({},n=!n&&r?r:n,tn.templateSettings);var t,r=RegExp([(n.escape||Jn).source,(n.interpolate||Jn).source,(n.evaluate||Jn).source].join("|")+"|$","g"),o=0,f="__p+='";if(i.replace(r,function(n,r,t,e,u){return f+=i.slice(o,u).replace(Hn,Qn),o=u+n.length,r?f+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?f+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(f+="';\n"+e+"\n__p+='"),n}),f+="';\n",r=n.variable){if(!Xn.test(r))throw new Error("variable is not a bare identifier: "+r)}else f="with(obj||{}){\n"+f+"}\n",r="obj";f="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+f+"return __p;\n";try{t=new Function(r,"_",f)}catch(n){throw n.source=f,n}return(n=function(n){return t.call(this,n,tn)}).source="function("+r+"){\n"+f+"}",n},result:function(n,r,t){var e=(r=Bn(r)).length;if(!e)return D(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=D(i)?i.call(n):i}return n},uniqueId:function(n){var r=++Yn+"";return n?n+r:r},chain:function(n){return(n=tn(n))._chain=!0,n},iteratee:Vn,partial:nr,bind:rr,bindAll:ur,memoize:function(e,u){function i(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return W(r,t)||(r[t]=e.apply(this,arguments)),r[t]}return i.cache={},i},delay:ir,defer:or,throttle:function(t,e,u){var i,o,f,a,c=0;function l(){c=!1===u.leading?0:Wn(),i=null,a=t.apply(o,f),i||(o=f=null)}function n(){var n=Wn();c||!1!==u.leading||(c=n);var r=e-(n-c);return o=this,f=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),c=n,a=t.apply(o,f),i||(o=f=null)):i||!1===u.trailing||(i=setTimeout(l,r)),a}return u=u||{},n.cancel=function(){clearTimeout(i),c=0,i=o=f=null},n},debounce:function(r,t,e){function u(){var n=Wn()-o;n<t?i=setTimeout(u,t-n):(i=null,e||(a=r.apply(c,f)),i||(f=c=null))}var i,o,f,a,c,n=j(function(n){return c=this,f=n,o=Wn(),i||(i=setTimeout(u,t),e&&(a=r.apply(c,f))),a});return n.cancel=function(){clearTimeout(i),i=f=c=null},n},wrap:function(n,r){return nr(r,n)},negate:fr,compose:function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:ar,once:r,findKey:cr,findIndex:sr,findLastIndex:k,sortedIndex:pr,indexOf:vr,lastIndexOf:T,find:yr,detect:yr,findWhere:function(n,r){return yr(n,kn(r))},each:dr,forEach:dr,map:gr,collect:gr,reduce:f,foldl:f,inject:f,reduceRight:R,foldr:R,filter:mr,select:mr,reject:function(n,r,t){return mr(n,fr(Pn(r)),t)},every:jr,all:jr,some:_r,any:_r,contains:wr,includes:wr,include:wr,invoke:P,pluck:Ar,where:function(n,r){return mr(n,kn(r))},max:xr,min:function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var f=0,a=(n=tr(n)?n:mn(n)).length;f<a;f++)null!=(t=n[f])&&t<i&&(i=t);else e=Pn(e,r),dr(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},shuffle:function(n){return Sr(n,1/0)},sample:Sr,sortBy:function(n,e,r){var u=0;return e=Pn(e,r),Ar(gr(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")},groupBy:c,indexBy:i,countBy:sn,partition:ln,toArray:function(n){return n?U(n)?a.call(n):S(n)?n.match(Mr):tr(n)?gr(n,Tn):mn(n):[]},size:function(n){return null==n?0:(tr(n)?n:nn(n)).length},pick:Br,omit:pn,first:Ir,head:Ir,take:Ir,initial:Nr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:Tr(n,Math.max(0,n.length-r))},rest:Tr,tail:Tr,drop:Tr,compact:function(n){return mr(n,Boolean)},flatten:function(n,r){return er(n,r,!1)},without:V,uniq:Dr,unique:Dr,union:vn,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Y(n);e<u;e++){var i=n[e];if(!wr(r,i)){for(var o=1;o<t&&wr(arguments[o],i);o++);o===t&&r.push(i)}}return r},difference:kr,unzip:Rr,transpose:Rr,zip:Ln,object:function(n,r){for(var t={},e=0,u=Y(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t=t||(r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(a.call(n,e,e+=r));return t},mixin:Vr,default:tn});return Ln._=Ln});;
/*! This file is auto-generated */
!function(n){var s="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(t,e,i){s.Backbone=n(s,i,t,e)});else if("undefined"!=typeof exports){var t,e=require("underscore");try{t=require("jquery")}catch(t){}n(s,exports,e,t)}else s.Backbone=n(s,{},s._,s.jQuery||s.Zepto||s.ender||s.$)}(function(t,h,b,e){var i=t.Backbone,o=Array.prototype.slice;h.VERSION="1.4.0",h.$=e,h.noConflict=function(){return t.Backbone=i,this},h.emulateHTTP=!1,h.emulateJSON=!1;function a(t,e,i,n,s){var r,o=0;if(i&&"object"==typeof i){void 0!==n&&"context"in s&&void 0===s.context&&(s.context=n);for(r=b.keys(i);o<r.length;o++)e=a(t,e,r[o],i[r[o]],s)}else if(i&&c.test(i))for(r=i.split(c);o<r.length;o++)e=t(e,r[o],n,s);else e=t(e,i,n,s);return e}var u,n=h.Events={},c=/\s+/;n.on=function(t,e,i){return this._events=a(s,this._events||{},t,e,{context:i,ctx:this,listening:u}),u&&(((this._listeners||(this._listeners={}))[u.id]=u).interop=!1),this},n.listenTo=function(t,e,i){if(!t)return this;var n=t._listenId||(t._listenId=b.uniqueId("l")),s=this._listeningTo||(this._listeningTo={}),r=u=s[n];r||(this._listenId||(this._listenId=b.uniqueId("l")),r=u=s[n]=new g(this,t));t=l(t,e,i,this);if(u=void 0,t)throw t;return r.interop&&r.on(e,i),this};var s=function(t,e,i,n){var s,r;return i&&(s=t[e]||(t[e]=[]),r=n.context,e=n.ctx,(n=n.listening)&&n.count++,s.push({callback:i,context:r,ctx:r||e,listening:n})),t},l=function(t,e,i,n){try{t.on(e,i,n)}catch(t){return t}};n.off=function(t,e,i){return this._events&&(this._events=a(r,this._events,t,e,{context:i,listeners:this._listeners})),this},n.stopListening=function(t,e,i){var n=this._listeningTo;if(!n)return this;for(var s=t?[t._listenId]:b.keys(n),r=0;r<s.length;r++){var o=n[s[r]];if(!o)break;o.obj.off(e,i,this),o.interop&&o.off(e,i)}return b.isEmpty(n)&&(this._listeningTo=void 0),this};var r=function(t,e,i,n){if(t){var s,r=n.context,o=n.listeners,h=0;if(e||r||i){for(s=e?[e]:b.keys(t);h<s.length;h++){var a=t[e=s[h]];if(!a)break;for(var u=[],c=0;c<a.length;c++){var l=a[c];i&&i!==l.callback&&i!==l.callback._callback||r&&r!==l.context?u.push(l):(l=l.listening)&&l.off(e,i)}u.length?t[e]=u:delete t[e]}return t}for(s=b.keys(o);h<s.length;h++)o[s[h]].cleanup()}};n.once=function(t,e,i){var n=a(d,{},t,e,this.off.bind(this));return this.on(n,e="string"==typeof t&&null==i?void 0:e,i)},n.listenToOnce=function(t,e,i){i=a(d,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,i)};var d=function(t,e,i,n){var s;return i&&((s=t[e]=b.once(function(){n(e,s),i.apply(this,arguments)}))._callback=i),t};n.trigger=function(t){if(!this._events)return this;for(var e=Math.max(0,arguments.length-1),i=Array(e),n=0;n<e;n++)i[n]=arguments[n+1];return a(f,this._events,t,void 0,i),this};var f=function(t,e,i,n){var s,r;return t&&(s=t[e],r=t.all,s&&r&&(r=r.slice()),s&&p(s,n),r&&p(r,[e].concat(n))),t},p=function(t,e){var i,n=-1,s=t.length,r=e[0],o=e[1],h=e[2];switch(e.length){case 0:for(;++n<s;)(i=t[n]).callback.call(i.ctx);return;case 1:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r);return;case 2:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,o);return;case 3:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,o,h);return;default:for(;++n<s;)(i=t[n]).callback.apply(i.ctx,e);return}},g=function(t,e){this.id=t._listenId,this.listener=t,this.obj=e,this.interop=!0,this.count=0,this._events=void 0};g.prototype.on=n.on,g.prototype.off=function(t,e){e=this.interop?(this._events=a(r,this._events,t,e,{context:void 0,listeners:void 0}),!this._events):(this.count--,0===this.count);e&&this.cleanup()},g.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId],this.interop||delete this.obj._listeners[this.id]},n.bind=n.on,n.unbind=n.off,b.extend(h,n);var v=h.Model=function(t,e){var i=t||{};e=e||{},this.preinitialize.apply(this,arguments),this.cid=b.uniqueId(this.cidPrefix),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(i=this.parse(i,e)||{});var n=b.result(this,"defaults"),i=b.defaults(b.extend({},n,i),n);this.set(i,e),this.changed={},this.initialize.apply(this,arguments)};b.extend(v.prototype,n,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return b.clone(this.attributes)},sync:function(){return h.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return b.escape(this.get(t))},has:function(t){return null!=this.get(t)},matches:function(t){return!!b.iteratee(t,this)(this.attributes)},set:function(t,e,i){if(null==t)return this;var n;if("object"==typeof t?(n=t,i=e):(n={})[t]=e,!this._validate(n,i=i||{}))return!1;var s=i.unset,r=i.silent,o=[],t=this._changing;this._changing=!0,t||(this._previousAttributes=b.clone(this.attributes),this.changed={});var h,a=this.attributes,u=this.changed,c=this._previousAttributes;for(h in n)e=n[h],b.isEqual(a[h],e)||o.push(h),b.isEqual(c[h],e)?delete u[h]:u[h]=e,s?delete a[h]:a[h]=e;if(this.idAttribute in n&&(this.id=this.get(this.idAttribute)),!r){o.length&&(this._pending=i);for(var l=0;l<o.length;l++)this.trigger("change:"+o[l],this,a[o[l]],i)}if(t)return this;if(!r)for(;this._pending;)i=this._pending,this._pending=!1,this.trigger("change",this,i);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,b.extend({},e,{unset:!0}))},clear:function(t){var e,i={};for(e in this.attributes)i[e]=void 0;return this.set(i,b.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!b.isEmpty(this.changed):b.has(this.changed,t)},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&b.clone(this.changed);var e,i,n=this._changing?this._previousAttributes:this.attributes,s={};for(i in t){var r=t[i];b.isEqual(n[i],r)||(s[i]=r,e=!0)}return!!e&&s},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return b.clone(this._previousAttributes)},fetch:function(i){i=b.extend({parse:!0},i);var n=this,s=i.success;return i.success=function(t){var e=i.parse?n.parse(t,i):t;if(!n.set(e,i))return!1;s&&s.call(i.context,n,t,i),n.trigger("sync",n,t,i)},F(this,i),this.sync("read",this,i)},save:function(t,e,i){var n;null==t||"object"==typeof t?(n=t,i=e):(n={})[t]=e;var s=(i=b.extend({validate:!0,parse:!0},i)).wait;if(n&&!s){if(!this.set(n,i))return!1}else if(!this._validate(n,i))return!1;var r=this,o=i.success,h=this.attributes;i.success=function(t){r.attributes=h;var e=i.parse?r.parse(t,i):t;if((e=s?b.extend({},n,e):e)&&!r.set(e,i))return!1;o&&o.call(i.context,r,t,i),r.trigger("sync",r,t,i)},F(this,i),n&&s&&(this.attributes=b.extend({},h,n));e=this.isNew()?"create":i.patch?"patch":"update";"patch"!=e||i.attrs||(i.attrs=n);e=this.sync(e,this,i);return this.attributes=h,e},destroy:function(e){e=e?b.clone(e):{};function i(){n.stopListening(),n.trigger("destroy",n,n.collection,e)}var n=this,s=e.success,r=e.wait,t=!(e.success=function(t){r&&i(),s&&s.call(e.context,n,t,e),n.isNew()||n.trigger("sync",n,t,e)});return this.isNew()?b.defer(e.success):(F(this,e),t=this.sync("delete",this,e)),r||i(),t},url:function(){var t=b.result(this,"urlRoot")||b.result(this.collection,"url")||q();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},b.extend({},t,{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=b.extend({},this.attributes,t);t=this.validationError=this.validate(t,e)||null;return!t||(this.trigger("invalid",this,t,b.extend(e,{validationError:t})),!1)}});function x(t,e,i){i=Math.min(Math.max(i,0),t.length);for(var n=Array(t.length-i),s=e.length,r=0;r<n.length;r++)n[r]=t[r+i];for(r=0;r<s;r++)t[r+i]=e[r];for(r=0;r<n.length;r++)t[r+s+i]=n[r]}var m=h.Collection=function(t,e){e=e||{},this.preinitialize.apply(this,arguments),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,b.extend({silent:!0},e))},w={add:!0,remove:!0,merge:!0},_={add:!0,remove:!1};b.extend(m.prototype,n,{model:v,preinitialize:function(){},initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return h.sync.apply(this,arguments)},add:function(t,e){return this.set(t,b.extend({merge:!1},e,_))},remove:function(t,e){e=b.extend({},e);var i=!b.isArray(t);t=i?[t]:t.slice();t=this._removeModels(t,e);return!e.silent&&t.length&&(e.changes={added:[],merged:[],removed:t},this.trigger("update",this,e)),i?t[0]:t},set:function(t,e){if(null!=t){(e=b.extend({},w,e)).parse&&!this._isModel(t)&&(t=this.parse(t,e)||[]);var i=!b.isArray(t);t=i?[t]:t.slice();var n=e.at;(n=(n=null!=n?+n:n)>this.length?this.length:n)<0&&(n+=this.length+1);for(var s=[],r=[],o=[],h=[],a={},u=e.add,c=e.merge,l=e.remove,d=!1,f=this.comparator&&null==n&&!1!==e.sort,p=b.isString(this.comparator)?this.comparator:null,g=0;g<t.length;g++){var v,m=t[g],_=this.get(m);_?(c&&m!==_&&(v=this._isModel(m)?m.attributes:m,e.parse&&(v=_.parse(v,e)),_.set(v,e),o.push(_),f&&!d&&(d=_.hasChanged(p))),a[_.cid]||(a[_.cid]=!0,s.push(_)),t[g]=_):u&&(m=t[g]=this._prepareModel(m,e))&&(r.push(m),this._addReference(m,e),a[m.cid]=!0,s.push(m))}if(l){for(g=0;g<this.length;g++)a[(m=this.models[g]).cid]||h.push(m);h.length&&this._removeModels(h,e)}var y=!1;if(s.length&&(!f&&u&&l)?(y=this.length!==s.length||b.some(this.models,function(t,e){return t!==s[e]}),this.models.length=0,x(this.models,s,0),this.length=this.models.length):r.length&&(f&&(d=!0),x(this.models,r,null==n?this.length:n),this.length=this.models.length),d&&this.sort({silent:!0}),!e.silent){for(g=0;g<r.length;g++)null!=n&&(e.index=n+g),(m=r[g]).trigger("add",m,this,e);(d||y)&&this.trigger("sort",this,e),(r.length||h.length||o.length)&&(e.changes={added:r,removed:h,merged:o},this.trigger("update",this,e))}return i?t[0]:t}},reset:function(t,e){e=e?b.clone(e):{};for(var i=0;i<this.models.length;i++)this._removeReference(this.models[i],e);return e.previousModels=this.models,this._reset(),t=this.add(t,b.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,b.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,b.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return o.apply(this.models,arguments)},get:function(t){if(null!=t)return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t)]||t.cid&&this._byId[t.cid]},has:function(t){return null!=this.get(t)},at:function(t){return t<0&&(t+=this.length),this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,!0)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t=t||{};var i=e.length;return b.isFunction(e)&&(e=e.bind(this)),1===i||b.isString(e)?this.models=this.sortBy(e):this.models.sort(e),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return this.map(t+"")},fetch:function(i){var n=(i=b.extend({parse:!0},i)).success,s=this;return i.success=function(t){var e=i.reset?"reset":"set";s[e](t,i),n&&n.call(i.context,s,t,i),s.trigger("sync",s,t,i)},F(this,i),this.sync("read",this,i)},create:function(t,e){var n=(e=e?b.clone(e):{}).wait;if(!(t=this._prepareModel(t,e)))return!1;n||this.add(t,e);var s=this,r=e.success;return e.success=function(t,e,i){n&&s.add(t,i),r&&r.call(i.context,t,e,i)},t.save(null,e),t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},values:function(){return new E(this,k)},keys:function(){return new E(this,I)},entries:function(){return new E(this,S)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(this._isModel(t))return t.collection||(t.collection=this),t;t=new((e=e?b.clone(e):{}).collection=this).model(t,e);return t.validationError?(this.trigger("invalid",this,t.validationError,e),!1):t},_removeModels:function(t,e){for(var i=[],n=0;n<t.length;n++){var s,r,o=this.get(t[n]);o&&(s=this.indexOf(o),this.models.splice(s,1),this.length--,delete this._byId[o.cid],null!=(r=this.modelId(o.attributes))&&delete this._byId[r],e.silent||(e.index=s,o.trigger("remove",o,this,e)),i.push(o),this._removeReference(o,e))}return i},_isModel:function(t){return t instanceof v},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);null!=i&&(this._byId[i]=t),t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);null!=i&&delete this._byId[i],this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if(e){if(("add"===t||"remove"===t)&&i!==this)return;var s,r;"destroy"===t&&this.remove(e,n),"change"!==t||(s=this.modelId(e.previousAttributes()))!==(r=this.modelId(e.attributes))&&(null!=s&&delete this._byId[s],null!=r&&(this._byId[r]=e))}this.trigger.apply(this,arguments)}});var y="function"==typeof Symbol&&Symbol.iterator;y&&(m.prototype[y]=m.prototype.values);var E=function(t,e){this._collection=t,this._kind=e,this._index=0},k=1,I=2,S=3;y&&(E.prototype[y]=function(){return this}),E.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t,e=this._collection.at(this._index);return this._index++,{value:this._kind===k?e:(t=this._collection.modelId(e.attributes),this._kind===I?t:[t,e]),done:!1}}this._collection=void 0}return{value:void 0,done:!0}};var e=h.View=function(t){this.cid=b.uniqueId("view"),this.preinitialize.apply(this,arguments),b.extend(this,b.pick(t,P)),this._ensureElement(),this.initialize.apply(this,arguments)},T=/^(\S+)\s*(.*)$/,P=["model","collection","el","id","attributes","className","tagName","events"];b.extend(e.prototype,n,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){return this._removeElement(),this.stopListening(),this},_removeElement:function(){this.$el.remove()},setElement:function(t){return this.undelegateEvents(),this._setElement(t),this.delegateEvents(),this},_setElement:function(t){this.$el=t instanceof h.$?t:h.$(t),this.el=this.$el[0]},delegateEvents:function(t){if(!(t=t||b.result(this,"events")))return this;for(var e in this.undelegateEvents(),t){var i=t[e];(i=!b.isFunction(i)?this[i]:i)&&(e=e.match(T),this.delegate(e[1],e[2],i.bind(this)))}return this},delegate:function(t,e,i){return this.$el.on(t+".delegateEvents"+this.cid,e,i),this},undelegateEvents:function(){return this.$el&&this.$el.off(".delegateEvents"+this.cid),this},undelegate:function(t,e,i){return this.$el.off(t+".delegateEvents"+this.cid,e,i),this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){var t;this.el?this.setElement(b.result(this,"el")):(t=b.extend({},b.result(this,"attributes")),this.id&&(t.id=b.result(this,"id")),this.className&&(t.class=b.result(this,"className")),this.setElement(this._createElement(b.result(this,"tagName"))),this._setAttributes(t))},_setAttributes:function(t){this.$el.attr(t)}});function H(i,n,t,s){b.each(t,function(t,e){n[e]&&(i.prototype[e]=function(n,t,s,r){switch(t){case 1:return function(){return n[s](this[r])};case 2:return function(t){return n[s](this[r],t)};case 3:return function(t,e){return n[s](this[r],$(t,this),e)};case 4:return function(t,e,i){return n[s](this[r],$(t,this),e,i)};default:return function(){var t=o.call(arguments);return t.unshift(this[r]),n[s].apply(n,t)}}}(n,t,e,s))})}var $=function(e,t){return b.isFunction(e)?e:b.isObject(e)&&!t._isModel(e)?(i=b.matches(e),function(t){return i(t.attributes)}):b.isString(e)?function(t){return t.get(e)}:e;var i};b.each([[m,{forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3},"models"],[v,{keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1},"attributes"]],function(t){var i=t[0],e=t[1],n=t[2];i.mixin=function(t){var e=b.reduce(b.functions(t),function(t,e){return t[e]=0,t},{});H(i,t,e,n)},H(i,b,e,n)}),h.sync=function(t,e,n){var i=A[t];b.defaults(n=n||{},{emulateHTTP:h.emulateHTTP,emulateJSON:h.emulateJSON});var s,r={type:i,dataType:"json"};n.url||(r.url=b.result(e,"url")||q()),null!=n.data||!e||"create"!==t&&"update"!==t&&"patch"!==t||(r.contentType="application/json",r.data=JSON.stringify(n.attrs||e.toJSON(n))),n.emulateJSON&&(r.contentType="application/x-www-form-urlencoded",r.data=r.data?{model:r.data}:{}),!n.emulateHTTP||"PUT"!==i&&"DELETE"!==i&&"PATCH"!==i||(r.type="POST",n.emulateJSON&&(r.data._method=i),s=n.beforeSend,n.beforeSend=function(t){if(t.setRequestHeader("X-HTTP-Method-Override",i),s)return s.apply(this,arguments)}),"GET"===r.type||n.emulateJSON||(r.processData=!1);var o=n.error;n.error=function(t,e,i){n.textStatus=e,n.errorThrown=i,o&&o.call(n.context,t,e,i)};r=n.xhr=h.ajax(b.extend(r,n));return e.trigger("request",e,r,n),r};var A={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};h.ajax=function(){return h.$.ajax.apply(h.$,arguments)};var y=h.Router=function(t){t=t||{},this.preinitialize.apply(this,arguments),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},C=/\((.*?)\)/g,R=/(\(\?)?:\w+/g,M=/\*\w+/g,N=/[\-{}\[\]+?.,\\\^$|#\s]/g;b.extend(y.prototype,n,{preinitialize:function(){},initialize:function(){},route:function(e,i,n){b.isRegExp(e)||(e=this._routeToRegExp(e)),b.isFunction(i)&&(n=i,i=""),n=n||this[i];var s=this;return h.history.route(e,function(t){t=s._extractParameters(e,t);!1!==s.execute(n,t,i)&&(s.trigger.apply(s,["route:"+i].concat(t)),s.trigger("route",i,t),h.history.trigger("route",s,i,t))}),this},execute:function(t,e,i){t&&t.apply(this,e)},navigate:function(t,e){return h.history.navigate(t,e),this},_bindRoutes:function(){if(this.routes){this.routes=b.result(this,"routes");for(var t,e=b.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(N,"\\$&").replace(C,"(?:$1)?").replace(R,function(t,e){return e?t:"([^/?]+)"}).replace(M,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return b.map(i,function(t,e){return e===i.length-1?t||null:t?decodeURIComponent(t):null})}});var j=h.History=function(){this.handlers=[],this.checkUrl=this.checkUrl.bind(this),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},O=/^[#\/]|\s+$/g,U=/^\/+|\/+$/g,z=/#.*$/;j.started=!1,b.extend(j.prototype,n,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root&&!this.getSearch()},matchRoot:function(){return this.decodeFragment(this.location.pathname).slice(0,this.root.length-1)+"/"===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){t=(t||this).location.href.match(/#(.*)$/);return t?t[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===t.charAt(0)?t.slice(1):t},getFragment:function(t){return(t=null==t?this._usePushState||!this._wantsHashChange?this.getPath():this.getHash():t).replace(O,"")},start:function(t){if(j.started)throw new Error("Backbone.history has already been started");if(j.started=!0,this.options=b.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._hasHashChange="onhashchange"in window&&(void 0===document.documentMode||7<document.documentMode),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=("/"+this.root+"/").replace(U,"/"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){t=this.root.slice(0,-1)||"/";return this.location.replace(t+"#"+this.getPath()),!0}this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}this._hasHashChange||!this._wantsHashChange||this._usePushState||(this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1,(e=(e=document.body).insertBefore(this.iframe,e.firstChild).contentWindow).document.open(),e.document.close(),e.location.hash="#"+this.fragment);var e=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState?e("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?e("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&t("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),j.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if((e=e===this.fragment&&this.iframe?this.getHash(this.iframe.contentWindow):e)===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()},loadUrl:function(e){return!!this.matchRoot()&&(e=this.fragment=this.getFragment(e),b.some(this.handlers,function(t){if(t.route.test(e))return t.callback(e),!0}))},navigate:function(t,e){if(!j.started)return!1;e&&!0!==e||(e={trigger:!!e}),t=this.getFragment(t||"");var i=this.root,n=(i=""===t||"?"===t.charAt(0)?i.slice(0,-1)||"/":i)+t;t=t.replace(z,"");i=this.decodeFragment(t);if(this.fragment!==i){if(this.fragment=i,this._usePushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getHash(this.iframe.contentWindow)&&(n=this.iframe.contentWindow,e.replace||(n.document.open(),n.document.close()),this._updateHash(n.location,t,e.replace))}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,i){i?(i=t.href.replace(/(javascript:|#).*$/,""),t.replace(i+"#"+e)):t.hash="#"+e}}),h.history=new j;v.extend=m.extend=y.extend=e.extend=j.extend=function(t,e){var i=this,n=t&&b.has(t,"constructor")?t.constructor:function(){return i.apply(this,arguments)};return b.extend(n,i,e),n.prototype=b.create(i.prototype,t),(n.prototype.constructor=n).__super__=i.prototype,n};var q=function(){throw new Error('A "url" property or function must be specified')},F=function(e,i){var n=i.error;i.error=function(t){n&&n.call(i.context,e,t,i),e.trigger("error",e,t,i)}};return h});;
// MarionetteJS (Backbone.Marionette)
// ----------------------------------
// v2.4.2
//
// Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com


/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */


(function(t,e){if("function"==typeof define&&define.amd)define(["backbone","underscore"],function(i,n){return t.Marionette=t.Mn=e(t,i,n)});else if("undefined"!=typeof exports){var i=require("backbone"),n=require("underscore");module.exports=e(t,i,n)}else t.Marionette=t.Mn=e(t,t.Backbone,t._)})(this,function(t,e,i){"use strict";(function(t,e){var i=t.ChildViewContainer;return t.ChildViewContainer=function(t,e){var i=function(t){this._views={},this._indexByModel={},this._indexByCustom={},this._updateLength(),e.each(t,this.add,this)};e.extend(i.prototype,{add:function(t,e){var i=t.cid;return this._views[i]=t,t.model&&(this._indexByModel[t.model.cid]=i),e&&(this._indexByCustom[e]=i),this._updateLength(),this},findByModel:function(t){return this.findByModelCid(t.cid)},findByModelCid:function(t){var e=this._indexByModel[t];return this.findByCid(e)},findByCustom:function(t){var e=this._indexByCustom[t];return this.findByCid(e)},findByIndex:function(t){return e.values(this._views)[t]},findByCid:function(t){return this._views[t]},remove:function(t){var i=t.cid;return t.model&&delete this._indexByModel[t.model.cid],e.any(this._indexByCustom,function(t,e){return t===i?(delete this._indexByCustom[e],!0):void 0},this),delete this._views[i],this._updateLength(),this},call:function(t){this.apply(t,e.tail(arguments))},apply:function(t,i){e.each(this._views,function(n){e.isFunction(n[t])&&n[t].apply(n,i||[])})},_updateLength:function(){this.length=e.size(this._views)}});var n=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck","reduce"];return e.each(n,function(t){i.prototype[t]=function(){var i=e.values(this._views),n=[i].concat(e.toArray(arguments));return e[t].apply(e,n)}}),i}(t,e),t.ChildViewContainer.VERSION="0.1.7",t.ChildViewContainer.noConflict=function(){return t.ChildViewContainer=i,this},t.ChildViewContainer})(e,i),function(t,e){var i=t.Wreqr,n=t.Wreqr={};return t.Wreqr.VERSION="1.3.3",t.Wreqr.noConflict=function(){return t.Wreqr=i,this},n.Handlers=function(t,e){var i=function(t){this.options=t,this._wreqrHandlers={},e.isFunction(this.initialize)&&this.initialize(t)};return i.extend=t.Model.extend,e.extend(i.prototype,t.Events,{setHandlers:function(t){e.each(t,function(t,i){var n=null;e.isObject(t)&&!e.isFunction(t)&&(n=t.context,t=t.callback),this.setHandler(i,t,n)},this)},setHandler:function(t,e,i){var n={callback:e,context:i};this._wreqrHandlers[t]=n,this.trigger("handler:add",t,e,i)},hasHandler:function(t){return!!this._wreqrHandlers[t]},getHandler:function(t){var e=this._wreqrHandlers[t];if(e)return function(){return e.callback.apply(e.context,arguments)}},removeHandler:function(t){delete this._wreqrHandlers[t]},removeAllHandlers:function(){this._wreqrHandlers={}}}),i}(t,e),n.CommandStorage=function(){var i=function(t){this.options=t,this._commands={},e.isFunction(this.initialize)&&this.initialize(t)};return e.extend(i.prototype,t.Events,{getCommands:function(t){var e=this._commands[t];return e||(e={command:t,instances:[]},this._commands[t]=e),e},addCommand:function(t,e){var i=this.getCommands(t);i.instances.push(e)},clearCommands:function(t){var e=this.getCommands(t);e.instances=[]}}),i}(),n.Commands=function(t,e){return t.Handlers.extend({storageType:t.CommandStorage,constructor:function(e){this.options=e||{},this._initializeStorage(this.options),this.on("handler:add",this._executeCommands,this),t.Handlers.prototype.constructor.apply(this,arguments)},execute:function(t){t=arguments[0];var i=e.rest(arguments);this.hasHandler(t)?this.getHandler(t).apply(this,i):this.storage.addCommand(t,i)},_executeCommands:function(t,i,n){var r=this.storage.getCommands(t);e.each(r.instances,function(t){i.apply(n,t)}),this.storage.clearCommands(t)},_initializeStorage:function(t){var i,n=t.storageType||this.storageType;i=e.isFunction(n)?new n:n,this.storage=i}})}(n,e),n.RequestResponse=function(t,e){return t.Handlers.extend({request:function(t){return this.hasHandler(t)?this.getHandler(t).apply(this,e.rest(arguments)):void 0}})}(n,e),n.EventAggregator=function(t,e){var i=function(){};return i.extend=t.Model.extend,e.extend(i.prototype,t.Events),i}(t,e),n.Channel=function(){var i=function(e){this.vent=new t.Wreqr.EventAggregator,this.reqres=new t.Wreqr.RequestResponse,this.commands=new t.Wreqr.Commands,this.channelName=e};return e.extend(i.prototype,{reset:function(){return this.vent.off(),this.vent.stopListening(),this.reqres.removeAllHandlers(),this.commands.removeAllHandlers(),this},connectEvents:function(t,e){return this._connect("vent",t,e),this},connectCommands:function(t,e){return this._connect("commands",t,e),this},connectRequests:function(t,e){return this._connect("reqres",t,e),this},_connect:function(t,i,n){if(i){n=n||this;var r="vent"===t?"on":"setHandler";e.each(i,function(i,s){this[t][r](s,e.bind(i,n))},this)}}}),i}(n),n.radio=function(t,e){var i=function(){this._channels={},this.vent={},this.commands={},this.reqres={},this._proxyMethods()};e.extend(i.prototype,{channel:function(t){if(!t)throw Error("Channel must receive a name");return this._getChannel(t)},_getChannel:function(e){var i=this._channels[e];return i||(i=new t.Channel(e),this._channels[e]=i),i},_proxyMethods:function(){e.each(["vent","commands","reqres"],function(t){e.each(n[t],function(e){this[t][e]=r(this,t,e)},this)},this)}});var n={vent:["on","off","trigger","once","stopListening","listenTo","listenToOnce"],commands:["execute","setHandler","setHandlers","removeHandler","removeAllHandlers"],reqres:["request","setHandler","setHandlers","removeHandler","removeAllHandlers"]},r=function(t,i,n){return function(r){var s=t._getChannel(r)[i];return s[n].apply(s,e.rest(arguments))}};return new i}(n,e),t.Wreqr}(e,i);var n=t.Marionette,r=t.Mn,s=e.Marionette={};s.VERSION="2.4.2",s.noConflict=function(){return t.Marionette=n,t.Mn=r,this},e.Marionette=s,s.Deferred=e.$.Deferred,s.extend=e.Model.extend,s.isNodeAttached=function(t){return e.$.contains(document.documentElement,t)},s.mergeOptions=function(t,e){t&&i.extend(this,i.pick(t,e))},s.getOption=function(t,e){return t&&e?t.options&&void 0!==t.options[e]?t.options[e]:t[e]:void 0},s.proxyGetOption=function(t){return s.getOption(this,t)},s._getValue=function(t,e,n){return i.isFunction(t)&&(t=n?t.apply(e,n):t.call(e)),t},s.normalizeMethods=function(t){return i.reduce(t,function(t,e,n){return i.isFunction(e)||(e=this[e]),e&&(t[n]=e),t},{},this)},s.normalizeUIString=function(t,e){return t.replace(/@ui\.[a-zA-Z_$0-9]*/g,function(t){return e[t.slice(4)]})},s.normalizeUIKeys=function(t,e){return i.reduce(t,function(t,i,n){var r=s.normalizeUIString(n,e);return t[r]=i,t},{})},s.normalizeUIValues=function(t,e,n){return i.each(t,function(r,o){i.isString(r)?t[o]=s.normalizeUIString(r,e):i.isObject(r)&&i.isArray(n)&&(i.extend(r,s.normalizeUIValues(i.pick(r,n),e)),i.each(n,function(t){var n=r[t];i.isString(n)&&(r[t]=s.normalizeUIString(n,e))}))}),t},s.actAsCollection=function(t,e){var n=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck"];i.each(n,function(n){t[n]=function(){var t=i.values(i.result(this,e)),r=[t].concat(i.toArray(arguments));return i[n].apply(i,r)}})};var o=s.deprecate=function(t,e){i.isObject(t)&&(t=t.prev+" is going to be removed in the future. "+"Please use "+t.next+" instead."+(t.url?" See: "+t.url:"")),void 0!==e&&e||o._cache[t]||(o._warn("Deprecation warning: "+t),o._cache[t]=!0)};o._warn="undefined"!=typeof console&&(console.warn||console.log)||function(){},o._cache={},s._triggerMethod=function(){function t(t,e,i){return i.toUpperCase()}var e=/(^|:)(\w)/gi;return function(n,r,s){var o=3>arguments.length;o&&(s=r,r=s[0]);var h,a="on"+r.replace(e,t),d=n[a];return i.isFunction(d)&&(h=d.apply(n,o?i.rest(s):s)),i.isFunction(n.trigger)&&(o+s.length>1?n.trigger.apply(n,o?s:[r].concat(i.drop(s,0))):n.trigger(r)),h}}(),s.triggerMethod=function(){return s._triggerMethod(this,arguments)},s.triggerMethodOn=function(t){var e=i.isFunction(t.triggerMethod)?t.triggerMethod:s.triggerMethod;return e.apply(t,i.rest(arguments))},s.MonitorDOMRefresh=function(t){function e(){t._isShown=!0,r()}function n(){t._isRendered=!0,r()}function r(){t._isShown&&t._isRendered&&s.isNodeAttached(t.el)&&i.isFunction(t.triggerMethod)&&t.triggerMethod("dom:refresh")}t.on({show:e,render:n})},function(t){function e(e,n,r,s){var o=s.split(/\s+/);i.each(o,function(i){var s=e[i];if(!s)throw new t.Error('Method "'+i+'" was configured as an event handler, but does not exist.');e.listenTo(n,r,s)})}function n(t,e,i,n){t.listenTo(e,i,n)}function r(t,e,n,r){var s=r.split(/\s+/);i.each(s,function(i){var r=t[i];t.stopListening(e,n,r)})}function s(t,e,i,n){t.stopListening(e,i,n)}function o(e,n,r,s,o){if(n&&r){if(!i.isObject(r))throw new t.Error({message:"Bindings must be an object or function.",url:"marionette.functions.html#marionettebindentityevents"});r=t._getValue(r,e),i.each(r,function(t,r){i.isFunction(t)?s(e,n,r,t):o(e,n,r,t)})}}t.bindEntityEvents=function(t,i,r){o(t,i,r,n,e)},t.unbindEntityEvents=function(t,e,i){o(t,e,i,s,r)},t.proxyBindEntityEvents=function(e,i){return t.bindEntityEvents(this,e,i)},t.proxyUnbindEntityEvents=function(e,i){return t.unbindEntityEvents(this,e,i)}}(s);var h=["description","fileName","lineNumber","name","message","number"];return s.Error=s.extend.call(Error,{urlRoot:"http://marionettejs.com/docs/v"+s.VERSION+"/",constructor:function(t,e){i.isObject(t)?(e=t,t=e.message):e||(e={});var n=Error.call(this,t);i.extend(this,i.pick(n,h),i.pick(e,h)),this.captureStackTrace(),e.url&&(this.url=this.urlRoot+e.url)},captureStackTrace:function(){Error.captureStackTrace&&Error.captureStackTrace(this,s.Error)},toString:function(){return this.name+": "+this.message+(this.url?" See: "+this.url:"")}}),s.Error.extend=s.extend,s.Callbacks=function(){this._deferred=s.Deferred(),this._callbacks=[]},i.extend(s.Callbacks.prototype,{add:function(t,e){var n=i.result(this._deferred,"promise");this._callbacks.push({cb:t,ctx:e}),n.then(function(i){e&&(i.context=e),t.call(i.context,i.options)})},run:function(t,e){this._deferred.resolve({options:t,context:e})},reset:function(){var t=this._callbacks;this._deferred=s.Deferred(),this._callbacks=[],i.each(t,function(t){this.add(t.cb,t.ctx)},this)}}),s.Controller=function(t){this.options=t||{},i.isFunction(this.initialize)&&this.initialize(this.options)},s.Controller.extend=s.extend,i.extend(s.Controller.prototype,e.Events,{destroy:function(){return s._triggerMethod(this,"before:destroy",arguments),s._triggerMethod(this,"destroy",arguments),this.stopListening(),this.off(),this},triggerMethod:s.triggerMethod,mergeOptions:s.mergeOptions,getOption:s.proxyGetOption}),s.Object=function(t){this.options=i.extend({},i.result(this,"options"),t),this.initialize.apply(this,arguments)},s.Object.extend=s.extend,i.extend(s.Object.prototype,e.Events,{initialize:function(){},destroy:function(){return this.triggerMethod("before:destroy"),this.triggerMethod("destroy"),this.stopListening(),this},triggerMethod:s.triggerMethod,mergeOptions:s.mergeOptions,getOption:s.proxyGetOption,bindEntityEvents:s.proxyBindEntityEvents,unbindEntityEvents:s.proxyUnbindEntityEvents}),s.Region=s.Object.extend({constructor:function(t){if(this.options=t||{},this.el=this.getOption("el"),this.el=this.el instanceof e.$?this.el[0]:this.el,!this.el)throw new s.Error({name:"NoElError",message:'An "el" must be specified for a region.'});this.$el=this.getEl(this.el),s.Object.call(this,t)},show:function(t,e){if(this._ensureElement()){this._ensureViewIsIntact(t);var n=e||{},r=t!==this.currentView,o=!!n.preventDestroy,h=!!n.forceShow,a=!!this.currentView,d=r&&!o,l=r||h;if(a&&this.triggerMethod("before:swapOut",this.currentView,this,e),this.currentView&&delete this.currentView._parent,d?this.empty():a&&l&&this.currentView.off("destroy",this.empty,this),l){t.once("destroy",this.empty,this),t.render(),t._parent=this,a&&this.triggerMethod("before:swap",t,this,e),this.triggerMethod("before:show",t,this,e),s.triggerMethodOn(t,"before:show",t,this,e),a&&this.triggerMethod("swapOut",this.currentView,this,e);var c=s.isNodeAttached(this.el),u=[],g=i.extend({triggerBeforeAttach:this.triggerBeforeAttach,triggerAttach:this.triggerAttach},n);return c&&g.triggerBeforeAttach&&(u=this._displayedViews(t),this._triggerAttach(u,"before:")),this.attachHtml(t),this.currentView=t,c&&g.triggerAttach&&(u=this._displayedViews(t),this._triggerAttach(u)),a&&this.triggerMethod("swap",t,this,e),this.triggerMethod("show",t,this,e),s.triggerMethodOn(t,"show",t,this,e),this}return this}},triggerBeforeAttach:!0,triggerAttach:!0,_triggerAttach:function(t,e){var n=(e||"")+"attach";i.each(t,function(t){s.triggerMethodOn(t,n,t,this)},this)},_displayedViews:function(t){return i.union([t],i.result(t,"_getNestedViews")||[])},_ensureElement:function(){if(i.isObject(this.el)||(this.$el=this.getEl(this.el),this.el=this.$el[0]),!this.$el||0===this.$el.length){if(this.getOption("allowMissingEl"))return!1;throw new s.Error('An "el" '+this.$el.selector+" must exist in DOM")}return!0},_ensureViewIsIntact:function(t){if(!t)throw new s.Error({name:"ViewNotValid",message:"The view passed is undefined and therefore invalid. You must pass a view instance to show."});if(t.isDestroyed)throw new s.Error({name:"ViewDestroyedError",message:'View (cid: "'+t.cid+'") has already been destroyed and cannot be used.'})},getEl:function(t){return e.$(t,s._getValue(this.options.parentEl,this))},attachHtml:function(t){this.$el.contents().detach(),this.el.appendChild(t.el)},empty:function(t){var e=this.currentView,i=s._getValue(t,"preventDestroy",this);return e?(e.off("destroy",this.empty,this),this.triggerMethod("before:empty",e),i||this._destroyView(),this.triggerMethod("empty",e),delete this.currentView,i&&this.$el.contents().detach(),this):void 0},_destroyView:function(){var t=this.currentView;t.destroy&&!t.isDestroyed?t.destroy():t.remove&&(t.remove(),t.isDestroyed=!0)},attachView:function(t){return this.currentView=t,this},hasView:function(){return!!this.currentView},reset:function(){return this.empty(),this.$el&&(this.el=this.getOption('el')),delete this.$el,this}},{buildRegion:function(t,e){if(i.isString(t))return this._buildRegionFromSelector(t,e);if(t.selector||t.el||t.regionClass)return this._buildRegionFromObject(t,e);if(i.isFunction(t))return this._buildRegionFromRegionClass(t);throw new s.Error({message:"Improper region configuration type.",url:"marionette.region.html#region-configuration-types"})},_buildRegionFromSelector:function(t,e){return new e({el:t})},_buildRegionFromObject:function(t,e){var n=t.regionClass||e,r=i.omit(t,"selector","regionClass");return t.selector&&!r.el&&(r.el=t.selector),new n(r)},_buildRegionFromRegionClass:function(t){return new t}}),s.RegionManager=s.Controller.extend({constructor:function(t){this._regions={},this.length=0,s.Controller.call(this,t),this.addRegions(this.getOption("regions"))},addRegions:function(t,e){return t=s._getValue(t,this,arguments),i.reduce(t,function(t,n,r){return i.isString(n)&&(n={selector:n}),n.selector&&(n=i.defaults({},n,e)),t[r]=this.addRegion(r,n),t},{},this)},addRegion:function(t,e){var i;return i=e instanceof s.Region?e:s.Region.buildRegion(e,s.Region),this.triggerMethod("before:add:region",t,i),i._parent=this,this._store(t,i),this.triggerMethod("add:region",t,i),i},get:function(t){return this._regions[t]},getRegions:function(){return i.clone(this._regions)},removeRegion:function(t){var e=this._regions[t];return this._remove(t,e),e},removeRegions:function(){var t=this.getRegions();return i.each(this._regions,function(t,e){this._remove(e,t)},this),t},emptyRegions:function(){var t=this.getRegions();return i.invoke(t,"empty"),t},destroy:function(){return this.removeRegions(),s.Controller.prototype.destroy.apply(this,arguments)},_store:function(t,e){this._regions[t]||this.length++,this._regions[t]=e},_remove:function(t,e){this.triggerMethod("before:remove:region",t,e),e.empty(),e.stopListening(),delete e._parent,delete this._regions[t],this.length--,this.triggerMethod("remove:region",t,e)}}),s.actAsCollection(s.RegionManager.prototype,"_regions"),s.TemplateCache=function(t){this.templateId=t},i.extend(s.TemplateCache,{templateCaches:{},get:function(t,e){var i=this.templateCaches[t];return i||(i=new s.TemplateCache(t),this.templateCaches[t]=i),i.load(e)},clear:function(){var t,e=i.toArray(arguments),n=e.length;if(n>0)for(t=0;n>t;t++)delete this.templateCaches[e[t]];else this.templateCaches={}}}),i.extend(s.TemplateCache.prototype,{load:function(t){if(this.compiledTemplate)return this.compiledTemplate;var e=this.loadTemplate(this.templateId,t);return this.compiledTemplate=this.compileTemplate(e,t),this.compiledTemplate},loadTemplate:function(t){var i=e.$(t).html();if(!i||0===i.length)throw new s.Error({name:"NoTemplateError",message:'Could not find template: "'+t+'"'});return i},compileTemplate:function(t,e){return i.template(t,e)}}),s.Renderer={render:function(t,e){if(!t)throw new s.Error({name:"TemplateNotFoundError",message:"Cannot render the template since its false, null or undefined."});var n=i.isFunction(t)?t:s.TemplateCache.get(t);return n(e)}},s.View=e.View.extend({isDestroyed:!1,constructor:function(t){i.bindAll(this,"render"),t=s._getValue(t,this),this.options=i.extend({},i.result(this,"options"),t),this._behaviors=s.Behaviors(this),e.View.call(this,this.options),s.MonitorDOMRefresh(this)},getTemplate:function(){return this.getOption("template")},serializeModel:function(t){return t.toJSON.apply(t,i.rest(arguments))},mixinTemplateHelpers:function(t){t=t||{};var e=this.getOption("templateHelpers");return e=s._getValue(e,this),i.extend(t,e)},normalizeUIKeys:function(t){var e=i.result(this,"_uiBindings");return s.normalizeUIKeys(t,e||i.result(this,"ui"))},normalizeUIValues:function(t,e){var n=i.result(this,"ui"),r=i.result(this,"_uiBindings");return s.normalizeUIValues(t,r||n,e)},configureTriggers:function(){if(this.triggers){var t=this.normalizeUIKeys(i.result(this,"triggers"));return i.reduce(t,function(t,e,i){return t[i]=this._buildViewTrigger(e),t},{},this)}},delegateEvents:function(t){return this._delegateDOMEvents(t),this.bindEntityEvents(this.model,this.getOption("modelEvents")),this.bindEntityEvents(this.collection,this.getOption("collectionEvents")),i.each(this._behaviors,function(t){t.bindEntityEvents(this.model,t.getOption("modelEvents")),t.bindEntityEvents(this.collection,t.getOption("collectionEvents"))},this),this},_delegateDOMEvents:function(t){var n=s._getValue(t||this.events,this);n=this.normalizeUIKeys(n),i.isUndefined(t)&&(this.events=n);var r={},o=i.result(this,"behaviorEvents")||{},h=this.configureTriggers(),a=i.result(this,"behaviorTriggers")||{};i.extend(r,o,n,h,a),e.View.prototype.delegateEvents.call(this,r)},undelegateEvents:function(){return e.View.prototype.undelegateEvents.apply(this,arguments),this.unbindEntityEvents(this.model,this.getOption("modelEvents")),this.unbindEntityEvents(this.collection,this.getOption("collectionEvents")),i.each(this._behaviors,function(t){t.unbindEntityEvents(this.model,t.getOption("modelEvents")),t.unbindEntityEvents(this.collection,t.getOption("collectionEvents"))},this),this},_ensureViewIsIntact:function(){if(this.isDestroyed)throw new s.Error({name:"ViewDestroyedError",message:'View (cid: "'+this.cid+'") has already been destroyed and cannot be used.'})},destroy:function(){if(this.isDestroyed)return this;var t=i.toArray(arguments);return this.triggerMethod.apply(this,["before:destroy"].concat(t)),this.isDestroyed=!0,this.triggerMethod.apply(this,["destroy"].concat(t)),this.unbindUIElements(),this.isRendered=!1,this.remove(),i.invoke(this._behaviors,"destroy",t),this},bindUIElements:function(){this._bindUIElements(),i.invoke(this._behaviors,this._bindUIElements)},_bindUIElements:function(){if(this.ui){this._uiBindings||(this._uiBindings=this.ui);var t=i.result(this,"_uiBindings");this.ui={},i.each(t,function(t,e){this.ui[e]=this.$(t)},this)}},unbindUIElements:function(){this._unbindUIElements(),i.invoke(this._behaviors,this._unbindUIElements)},_unbindUIElements:function(){this.ui&&this._uiBindings&&(i.each(this.ui,function(t,e){delete this.ui[e]},this),this.ui=this._uiBindings,delete this._uiBindings)},_buildViewTrigger:function(t){var e=i.isObject(t),n=i.defaults({},e?t:{},{preventDefault:!0,stopPropagation:!0}),r=e?n.event:t;return function(t){t&&(t.preventDefault&&n.preventDefault&&t.preventDefault(),t.stopPropagation&&n.stopPropagation&&t.stopPropagation());var e={view:this,model:this.model,collection:this.collection};this.triggerMethod(r,e)}},setElement:function(){var t=e.View.prototype.setElement.apply(this,arguments);return i.invoke(this._behaviors,"proxyViewProperties",this),t},triggerMethod:function(){var t=s._triggerMethod(this,arguments);return this._triggerEventOnBehaviors(arguments),this._triggerEventOnParentLayout(arguments[0],i.rest(arguments)),t},_triggerEventOnBehaviors:function(t){for(var e=s._triggerMethod,i=this._behaviors,n=0,r=i&&i.length;r>n;n++)e(i[n],t)},_triggerEventOnParentLayout:function(t,e){var n=this._parentLayoutView();if(n){var r=s.getOption(n,"childViewEventPrefix"),o=r+":"+t;s._triggerMethod(n,[o,this].concat(e));var h=s.getOption(n,"childEvents"),a=n.normalizeMethods(h);a&&i.isFunction(a[t])&&a[t].apply(n,[this].concat(e))}},_getImmediateChildren:function(){return[]},_getNestedViews:function(){var t=this._getImmediateChildren();return t.length?i.reduce(t,function(t,e){return e._getNestedViews?t.concat(e._getNestedViews()):t},t):t},_getAncestors:function(){for(var t=[],e=this._parent;e;)t.push(e),e=e._parent;return t},_parentLayoutView:function(){var t=this._getAncestors();return i.find(t,function(t){return t instanceof s.LayoutView})},normalizeMethods:s.normalizeMethods,mergeOptions:s.mergeOptions,getOption:s.proxyGetOption,bindEntityEvents:s.proxyBindEntityEvents,unbindEntityEvents:s.proxyUnbindEntityEvents}),s.ItemView=s.View.extend({constructor:function(){s.View.apply(this,arguments)},serializeData:function(){if(!this.model&&!this.collection)return{};var t=[this.model||this.collection];return arguments.length&&t.push.apply(t,arguments),this.model?this.serializeModel.apply(this,t):{items:this.serializeCollection.apply(this,t)}},serializeCollection:function(t){return t.toJSON.apply(t,i.rest(arguments))},render:function(){return this._ensureViewIsIntact(),this.triggerMethod("before:render",this),this._renderTemplate(),this.isRendered=!0,this.bindUIElements(),this.triggerMethod("render",this),this},_renderTemplate:function(){var t=this.getTemplate();if(t!==!1){if(!t)throw new s.Error({name:"UndefinedTemplateError",message:"Cannot render the template since it is null or undefined."});var e=this.mixinTemplateHelpers(this.serializeData()),i=s.Renderer.render(t,e,this);return this.attachElContent(i),this}},attachElContent:function(t){return this.$el.html(t),this}}),s.CollectionView=s.View.extend({childViewEventPrefix:"childview",sort:!0,constructor:function(){this.once("render",this._initialEvents),this._initChildViewStorage(),s.View.apply(this,arguments),this.on({"before:show":this._onBeforeShowCalled,show:this._onShowCalled,"before:attach":this._onBeforeAttachCalled,attach:this._onAttachCalled}),this.initRenderBuffer()},initRenderBuffer:function(){this._bufferedChildren=[]},startBuffering:function(){this.initRenderBuffer(),this.isBuffering=!0},endBuffering:function(){var t,e=this._isShown&&s.isNodeAttached(this.el);this.isBuffering=!1,this._isShown&&this._triggerMethodMany(this._bufferedChildren,this,"before:show"),e&&this._triggerBeforeAttach&&(t=this._getNestedViews(),this._triggerMethodMany(t,this,"before:attach")),this.attachBuffer(this,this._createBuffer()),e&&this._triggerAttach&&(t=this._getNestedViews(),this._triggerMethodMany(t,this,"attach")),this._isShown&&this._triggerMethodMany(this._bufferedChildren,this,"show"),this.initRenderBuffer()},_triggerMethodMany:function(t,e,n){var r=i.drop(arguments,3);i.each(t,function(t){s.triggerMethodOn.apply(t,[t,n,t,e].concat(r))})},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),this.listenTo(this.collection,"reset",this.render),this.getOption("sort")&&this.listenTo(this.collection,"sort",this._sortViews))},_onCollectionAdd:function(t,e,n){var r;if(r=void 0!==n.at?n.at:i.indexOf(this._filteredSortedModels(),t),this._shouldAddChild(t,r)){this.destroyEmptyView();var s=this.getChildView(t);this.addChild(t,s,r)}},_onCollectionRemove:function(t){var e=this.children.findByModel(t);this.removeChildView(e),this.checkEmpty()},_onBeforeShowCalled:function(){this._triggerBeforeAttach=this._triggerAttach=!1,this.children.each(function(t){s.triggerMethodOn(t,"before:show",t)})},_onShowCalled:function(){this.children.each(function(t){s.triggerMethodOn(t,"show",t)})},_onBeforeAttachCalled:function(){this._triggerBeforeAttach=!0},_onAttachCalled:function(){this._triggerAttach=!0},render:function(){return this._ensureViewIsIntact(),this.triggerMethod("before:render",this),this._renderChildren(),this.isRendered=!0,this.triggerMethod("render",this),this},reorder:function(){var t=this.children,e=this._filteredSortedModels(),n=i.find(e,function(e){return!t.findByModel(e)});if(n)this.render();else{var r=i.map(e,function(e,i){var n=t.findByModel(e);return n._index=i,n.el});this.triggerMethod("before:reorder"),this._appendReorderedChildren(r),this.triggerMethod("reorder")}},resortView:function(){s.getOption(this,"reorderOnSort")?this.reorder():this.render()},_sortViews:function(){var t=this._filteredSortedModels(),e=i.find(t,function(t,e){var i=this.children.findByModel(t);return!i||i._index!==e},this);e&&this.resortView()},_emptyViewIndex:-1,_appendReorderedChildren:function(t){this.$el.append(t)},_renderChildren:function(){this.destroyEmptyView(),this.destroyChildren({checkEmpty:!1}),this.isEmpty(this.collection)?this.showEmptyView():(this.triggerMethod("before:render:collection",this),this.startBuffering(),this.showCollection(),this.endBuffering(),this.triggerMethod("render:collection",this),this.children.isEmpty()&&this.showEmptyView())},showCollection:function(){var t,e=this._filteredSortedModels();i.each(e,function(e,i){t=this.getChildView(e),this.addChild(e,t,i)},this)},_filteredSortedModels:function(){var t,e=this.getViewComparator();return t=e?i.isString(e)||1===e.length?this.collection.sortBy(e,this):i.clone(this.collection.models).sort(i.bind(e,this)):this.collection.models,this.getOption("filter")&&(t=i.filter(t,function(t,e){return this._shouldAddChild(t,e)},this)),t},showEmptyView:function(){var t=this.getEmptyView();if(t&&!this._showingEmptyView){this.triggerMethod("before:render:empty"),this._showingEmptyView=!0;var i=new e.Model;this.addEmptyView(i,t),this.triggerMethod("render:empty")}},destroyEmptyView:function(){this._showingEmptyView&&(this.triggerMethod("before:remove:empty"),this.destroyChildren(),delete this._showingEmptyView,this.triggerMethod("remove:empty"))},getEmptyView:function(){return this.getOption("emptyView")},addEmptyView:function(t,e){var n,r=this._isShown&&!this.isBuffering&&s.isNodeAttached(this.el),o=this.getOption("emptyViewOptions")||this.getOption("childViewOptions");i.isFunction(o)&&(o=o.call(this,t,this._emptyViewIndex));var h=this.buildChildView(t,e,o);h._parent=this,this.proxyChildEvents(h),this._isShown&&s.triggerMethodOn(h,"before:show",h),this.children.add(h),r&&this._triggerBeforeAttach&&(n=[h].concat(h._getNestedViews()),h.once("render",function(){this._triggerMethodMany(n,this,"before:attach")},this)),this.renderChildView(h,this._emptyViewIndex),r&&this._triggerAttach&&(n=[h].concat(h._getNestedViews()),this._triggerMethodMany(n,this,"attach")),this._isShown&&s.triggerMethodOn(h,"show",h)},getChildView:function(){var t=this.getOption("childView");if(!t)throw new s.Error({name:"NoChildViewError",message:'A "childView" must be specified'});return t},addChild:function(t,e,i){var n=this.getOption("childViewOptions");n=s._getValue(n,this,[t,i]);var r=this.buildChildView(t,e,n);return this._updateIndices(r,!0,i),this.triggerMethod("before:add:child",r),this._addChildView(r,i),this.triggerMethod("add:child",r),r._parent=this,r},_updateIndices:function(t,e,i){this.getOption("sort")&&(e&&(t._index=i),this.children.each(function(i){i._index>=t._index&&(i._index+=e?1:-1)}))},_addChildView:function(t,e){var i,n=this._isShown&&!this.isBuffering&&s.isNodeAttached(this.el);this.proxyChildEvents(t),this._isShown&&!this.isBuffering&&s.triggerMethodOn(t,"before:show",t),this.children.add(t),n&&this._triggerBeforeAttach&&(i=[t].concat(t._getNestedViews()),t.once("render",function(){this._triggerMethodMany(i,this,"before:attach")},this)),this.renderChildView(t,e),n&&this._triggerAttach&&(i=[t].concat(t._getNestedViews()),this._triggerMethodMany(i,this,"attach")),this._isShown&&!this.isBuffering&&s.triggerMethodOn(t,"show",t)},renderChildView:function(t,e){return t.render(),this.attachHtml(this,t,e),t},buildChildView:function(t,e,n){var r=i.extend({model:t},n);return new e(r)},removeChildView:function(t){return t&&(this.triggerMethod("before:remove:child",t),t.destroy?t.destroy():t.remove&&t.remove(),delete t._parent,this.stopListening(t),this.children.remove(t),this.triggerMethod("remove:child",t),this._updateIndices(t,!1)),t},isEmpty:function(){return!this.collection||0===this.collection.length},checkEmpty:function(){this.isEmpty(this.collection)&&this.showEmptyView()},attachBuffer:function(t,e){t.$el.append(e)},_createBuffer:function(){var t=document.createDocumentFragment();return i.each(this._bufferedChildren,function(e){t.appendChild(e.el)}),t},attachHtml:function(t,e,i){t.isBuffering?t._bufferedChildren.splice(i,0,e):t._insertBefore(e,i)||t._insertAfter(e)},_insertBefore:function(t,e){var i,n=this.getOption("sort")&&this.children.length-1>e;return n&&(i=this.children.find(function(t){return t._index===e+1})),i?(i.$el.before(t.el),!0):!1},_insertAfter:function(t){this.$el.append(t.el)},_initChildViewStorage:function(){this.children=new e.ChildViewContainer},destroy:function(){return this.isDestroyed?this:(this.triggerMethod("before:destroy:collection"),this.destroyChildren({checkEmpty:!1}),this.triggerMethod("destroy:collection"),s.View.prototype.destroy.apply(this,arguments))},destroyChildren:function(t){var e=t||{},n=!0,r=this.children.map(i.identity);return i.isUndefined(e.checkEmpty)||(n=e.checkEmpty),this.children.each(this.removeChildView,this),n&&this.checkEmpty(),r},_shouldAddChild:function(t,e){var n=this.getOption("filter");return!i.isFunction(n)||n.call(this,t,e,this.collection)},proxyChildEvents:function(t){var e=this.getOption("childViewEventPrefix");this.listenTo(t,"all",function(){var n=i.toArray(arguments),r=n[0],s=this.normalizeMethods(i.result(this,"childEvents"));n[0]=e+":"+r,n.splice(1,0,t),s!==void 0&&i.isFunction(s[r])&&s[r].apply(this,n.slice(1)),this.triggerMethod.apply(this,n)})},_getImmediateChildren:function(){return i.values(this.children._views)},getViewComparator:function(){return this.getOption("viewComparator")}}),s.CompositeView=s.CollectionView.extend({constructor:function(){s.CollectionView.apply(this,arguments)},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),this.listenTo(this.collection,"reset",this._renderChildren),this.getOption("sort")&&this.listenTo(this.collection,"sort",this._sortViews))},getChildView:function(){var t=this.getOption("childView")||this.constructor;return t},serializeData:function(){var t={};return this.model&&(t=i.partial(this.serializeModel,this.model).apply(this,arguments)),t},render:function(){return this._ensureViewIsIntact(),this._isRendering=!0,this.resetChildViewContainer(),this.triggerMethod("before:render",this),this._renderTemplate(),this._renderChildren(),this._isRendering=!1,this.isRendered=!0,this.triggerMethod("render",this),this
},_renderChildren:function(){(this.isRendered||this._isRendering)&&s.CollectionView.prototype._renderChildren.call(this)},_renderTemplate:function(){var t={};t=this.serializeData(),t=this.mixinTemplateHelpers(t),this.triggerMethod("before:render:template");var e=this.getTemplate(),i=s.Renderer.render(e,t,this);this.attachElContent(i),this.bindUIElements(),this.triggerMethod("render:template")},attachElContent:function(t){return this.$el.html(t),this},attachBuffer:function(t,e){var i=this.getChildViewContainer(t);i.append(e)},_insertAfter:function(t){var e=this.getChildViewContainer(this,t);e.append(t.el)},_appendReorderedChildren:function(t){var e=this.getChildViewContainer(this);e.append(t)},getChildViewContainer:function(t){if(t.$childViewContainer)return t.$childViewContainer;var e,i=s.getOption(t,"childViewContainer");if(i){var n=s._getValue(i,t);if(e="@"===n.charAt(0)&&t.ui?t.ui[n.substr(4)]:t.$(n),0>=e.length)throw new s.Error({name:"ChildViewContainerMissingError",message:'The specified "childViewContainer" was not found: '+t.childViewContainer})}else e=t.$el;return t.$childViewContainer=e,e},resetChildViewContainer:function(){this.$childViewContainer&&(this.$childViewContainer=void 0)}}),s.LayoutView=s.ItemView.extend({regionClass:s.Region,options:{destroyImmediate:!1},childViewEventPrefix:"childview",constructor:function(t){t=t||{},this._firstRender=!0,this._initializeRegions(t),s.ItemView.call(this,t)},render:function(){return this._ensureViewIsIntact(),this._firstRender?this._firstRender=!1:this._reInitializeRegions(),s.ItemView.prototype.render.apply(this,arguments)},destroy:function(){return this.isDestroyed?this:(this.getOption("destroyImmediate")===!0&&this.$el.remove(),this.regionManager.destroy(),s.ItemView.prototype.destroy.apply(this,arguments))},showChildView:function(t,e){return this.getRegion(t).show(e)},getChildView:function(t){return this.getRegion(t).currentView},addRegion:function(t,e){var i={};return i[t]=e,this._buildRegions(i)[t]},addRegions:function(t){return this.regions=i.extend({},this.regions,t),this._buildRegions(t)},removeRegion:function(t){return delete this.regions[t],this.regionManager.removeRegion(t)},getRegion:function(t){return this.regionManager.get(t)},getRegions:function(){return this.regionManager.getRegions()},_buildRegions:function(t){var e={regionClass:this.getOption("regionClass"),parentEl:i.partial(i.result,this,"el")};return this.regionManager.addRegions(t,e)},_initializeRegions:function(t){var e;this._initRegionManager(),e=s._getValue(this.regions,this,[t])||{};var n=this.getOption.call(t,"regions");n=s._getValue(n,this,[t]),i.extend(e,n),e=this.normalizeUIValues(e,["selector","el"]),this.addRegions(e)},_reInitializeRegions:function(){this.regionManager.invoke("reset")},getRegionManager:function(){return new s.RegionManager},_initRegionManager:function(){this.regionManager=this.getRegionManager(),this.regionManager._parent=this,this.listenTo(this.regionManager,"before:add:region",function(t){this.triggerMethod("before:add:region",t)}),this.listenTo(this.regionManager,"add:region",function(t,e){this[t]=e,this.triggerMethod("add:region",t,e)}),this.listenTo(this.regionManager,"before:remove:region",function(t){this.triggerMethod("before:remove:region",t)}),this.listenTo(this.regionManager,"remove:region",function(t,e){delete this[t],this.triggerMethod("remove:region",t,e)})},_getImmediateChildren:function(){return i.chain(this.regionManager.getRegions()).pluck("currentView").compact().value()}}),s.Behavior=s.Object.extend({constructor:function(t,e){this.view=e,this.defaults=i.result(this,"defaults")||{},this.options=i.extend({},this.defaults,t),this.ui=i.extend({},i.result(e,"ui"),i.result(this,"ui")),s.Object.apply(this,arguments)},$:function(){return this.view.$.apply(this.view,arguments)},destroy:function(){return this.stopListening(),this},proxyViewProperties:function(t){this.$el=t.$el,this.el=t.el}}),s.Behaviors=function(t,e){function i(t,n){return e.isObject(t.behaviors)?(n=i.parseBehaviors(t,n||e.result(t,"behaviors")),i.wrap(t,n,e.keys(o)),n):{}}function n(t,e){this._view=t,this._behaviors=e,this._triggers={}}function r(t){return t._uiBindings||t.ui}var s=/^(\S+)\s*(.*)$/,o={behaviorTriggers:function(t,e){var i=new n(this,e);return i.buildBehaviorTriggers()},behaviorEvents:function(i,n){var o={};return e.each(n,function(i,n){var h={},a=e.clone(e.result(i,"events"))||{};a=t.normalizeUIKeys(a,r(i));var d=0;e.each(a,function(t,r){var o=r.match(s),a=o[1]+"."+[this.cid,n,d++," "].join(""),l=o[2],c=a+l,u=e.isFunction(t)?t:i[t];h[c]=e.bind(u,i)},this),o=e.extend(o,h)},this),o}};return e.extend(i,{behaviorsLookup:function(){throw new t.Error({message:"You must define where your behaviors are stored.",url:"marionette.behaviors.html#behaviorslookup"})},getBehaviorClass:function(e,n){return e.behaviorClass?e.behaviorClass:t._getValue(i.behaviorsLookup,this,[e,n])[n]},parseBehaviors:function(t,n){return e.chain(n).map(function(n,r){var s=i.getBehaviorClass(n,r),o=new s(n,t),h=i.parseBehaviors(t,e.result(o,"behaviors"));return[o].concat(h)}).flatten().value()},wrap:function(t,i,n){e.each(n,function(n){t[n]=e.partial(o[n],t[n],i)})}}),e.extend(n.prototype,{buildBehaviorTriggers:function(){return e.each(this._behaviors,this._buildTriggerHandlersForBehavior,this),this._triggers},_buildTriggerHandlersForBehavior:function(i,n){var s=e.clone(e.result(i,"triggers"))||{};s=t.normalizeUIKeys(s,r(i)),e.each(s,e.bind(this._setHandlerForBehavior,this,i,n))},_setHandlerForBehavior:function(t,e,i,n){var r=n.replace(/^\S+/,function(t){return t+"."+"behaviortriggers"+e});this._triggers[r]=this._view._buildViewTrigger(i)}}),i}(s,i),s.AppRouter=e.Router.extend({constructor:function(t){this.options=t||{},e.Router.apply(this,arguments);var i=this.getOption("appRoutes"),n=this._getController();this.processAppRoutes(n,i),this.on("route",this._processOnRoute,this)},appRoute:function(t,e){var i=this._getController();this._addAppRoute(i,t,e)},_processOnRoute:function(t,e){if(i.isFunction(this.onRoute)){var n=i.invert(this.getOption("appRoutes"))[t];this.onRoute(t,n,e)}},processAppRoutes:function(t,e){if(e){var n=i.keys(e).reverse();i.each(n,function(i){this._addAppRoute(t,i,e[i])},this)}},_getController:function(){return this.getOption("controller")},_addAppRoute:function(t,e,n){var r=t[n];if(!r)throw new s.Error('Method "'+n+'" was not found on the controller');this.route(e,n,i.bind(r,t))},mergeOptions:s.mergeOptions,getOption:s.proxyGetOption,triggerMethod:s.triggerMethod,bindEntityEvents:s.proxyBindEntityEvents,unbindEntityEvents:s.proxyUnbindEntityEvents}),s.Application=s.Object.extend({constructor:function(t){this._initializeRegions(t),this._initCallbacks=new s.Callbacks,this.submodules={},i.extend(this,t),this._initChannel(),s.Object.call(this,t)},execute:function(){this.commands.execute.apply(this.commands,arguments)},request:function(){return this.reqres.request.apply(this.reqres,arguments)},addInitializer:function(t){this._initCallbacks.add(t)},start:function(t){this.triggerMethod("before:start",t),this._initCallbacks.run(t,this),this.triggerMethod("start",t)},addRegions:function(t){return this._regionManager.addRegions(t)},emptyRegions:function(){return this._regionManager.emptyRegions()},removeRegion:function(t){return this._regionManager.removeRegion(t)},getRegion:function(t){return this._regionManager.get(t)},getRegions:function(){return this._regionManager.getRegions()},module:function(t,e){var n=s.Module.getClass(e),r=i.toArray(arguments);return r.unshift(this),n.create.apply(n,r)},getRegionManager:function(){return new s.RegionManager},_initializeRegions:function(t){var e=i.isFunction(this.regions)?this.regions(t):this.regions||{};this._initRegionManager();var n=s.getOption(t,"regions");return i.isFunction(n)&&(n=n.call(this,t)),i.extend(e,n),this.addRegions(e),this},_initRegionManager:function(){this._regionManager=this.getRegionManager(),this._regionManager._parent=this,this.listenTo(this._regionManager,"before:add:region",function(){s._triggerMethod(this,"before:add:region",arguments)}),this.listenTo(this._regionManager,"add:region",function(t,e){this[t]=e,s._triggerMethod(this,"add:region",arguments)}),this.listenTo(this._regionManager,"before:remove:region",function(){s._triggerMethod(this,"before:remove:region",arguments)}),this.listenTo(this._regionManager,"remove:region",function(t){delete this[t],s._triggerMethod(this,"remove:region",arguments)})},_initChannel:function(){this.channelName=i.result(this,"channelName")||"global",this.channel=i.result(this,"channel")||e.Wreqr.radio.channel(this.channelName),this.vent=i.result(this,"vent")||this.channel.vent,this.commands=i.result(this,"commands")||this.channel.commands,this.reqres=i.result(this,"reqres")||this.channel.reqres}}),s.Module=function(t,e,n){this.moduleName=t,this.options=i.extend({},this.options,n),this.initialize=n.initialize||this.initialize,this.submodules={},this._setupInitializersAndFinalizers(),this.app=e,i.isFunction(this.initialize)&&this.initialize(t,e,this.options)},s.Module.extend=s.extend,i.extend(s.Module.prototype,e.Events,{startWithParent:!0,initialize:function(){},addInitializer:function(t){this._initializerCallbacks.add(t)},addFinalizer:function(t){this._finalizerCallbacks.add(t)},start:function(t){this._isInitialized||(i.each(this.submodules,function(e){e.startWithParent&&e.start(t)}),this.triggerMethod("before:start",t),this._initializerCallbacks.run(t,this),this._isInitialized=!0,this.triggerMethod("start",t))},stop:function(){this._isInitialized&&(this._isInitialized=!1,this.triggerMethod("before:stop"),i.invoke(this.submodules,"stop"),this._finalizerCallbacks.run(void 0,this),this._initializerCallbacks.reset(),this._finalizerCallbacks.reset(),this.triggerMethod("stop"))},addDefinition:function(t,e){this._runModuleDefinition(t,e)},_runModuleDefinition:function(t,n){if(t){var r=i.flatten([this,this.app,e,s,e.$,i,n]);t.apply(this,r)}},_setupInitializersAndFinalizers:function(){this._initializerCallbacks=new s.Callbacks,this._finalizerCallbacks=new s.Callbacks},triggerMethod:s.triggerMethod}),i.extend(s.Module,{create:function(t,e,n){var r=t,s=i.drop(arguments,3);e=e.split(".");var o=e.length,h=[];return h[o-1]=n,i.each(e,function(e,i){var o=r;r=this._getModule(o,e,t,n),this._addModuleDefinition(o,r,h[i],s)},this),r},_getModule:function(t,e,n,r){var s=i.extend({},r),o=this.getClass(r),h=t[e];return h||(h=new o(e,n,s),t[e]=h,t.submodules[e]=h),h},getClass:function(t){var e=s.Module;return t?t.prototype instanceof e?t:t.moduleClass||e:e},_addModuleDefinition:function(t,e,i,n){var r=this._getDefine(i),s=this._getStartWithParent(i,e);r&&e.addDefinition(r,n),this._addStartWithParent(t,e,s)},_getStartWithParent:function(t,e){var n;return i.isFunction(t)&&t.prototype instanceof s.Module?(n=e.constructor.prototype.startWithParent,i.isUndefined(n)?!0:n):i.isObject(t)?(n=t.startWithParent,i.isUndefined(n)?!0:n):!0},_getDefine:function(t){return!i.isFunction(t)||t.prototype instanceof s.Module?i.isObject(t)?t.define:null:t},_addStartWithParent:function(t,e,i){e.startWithParent=e.startWithParent&&i,e.startWithParent&&!e.startWithParentIsConfigured&&(e.startWithParentIsConfigured=!0,t.addInitializer(function(t){e.startWithParent&&e.start(t)}))}}),s});
// Backbone.Radio v1.0.1
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("underscore"),require("backbone")):"function"==typeof define&&define.amd?define(["underscore","backbone"],n):e.Backbone.Radio=n(e._,e.Backbone)}(this,function(e,n){"use strict";function t(e,n,t,r){var s=e[n];return t&&t!==s.callback&&t!==s.callback._callback||r&&r!==s.context?void 0:(delete e[n],!0)}function r(n,r,s,i){n||(n={});for(var a=r?[r]:e.keys(n),u=!1,o=0,c=a.length;c>o;o++)r=a[o],n[r]&&t(n,r,s,i)&&(u=!0);return u}function s(n){return c[n]||(c[n]=e.partial(u.log,n))}function i(n){return e.isFunction(n)?n:function(){return n}}var a=n.Radio,u=n.Radio={};u.VERSION="1.0.1",u.noConflict=function(){return n.Radio=a,this},u.DEBUG=!1,u._debugText=function(e,n,t){return e+(t?" on the "+t+" channel":"")+': "'+n+'"'},u.debugLog=function(e,n,t){u.DEBUG&&console&&console.warn&&console.warn(u._debugText(e,n,t))};var o=/\s+/;u._eventsApi=function(n,t,r,s){if(!r)return!1;var i={};if("object"==typeof r){for(var a in r){var u=n[t].apply(n,[a,r[a]].concat(s));o.test(a)?e.extend(i,u):i[a]=u}return i}if(o.test(r)){for(var c=r.split(o),l=0,h=c.length;h>l;l++)i[c[l]]=n[t].apply(n,[c[l]].concat(s));return i}return!1},u._callHandler=function(e,n,t){var r=t[0],s=t[1],i=t[2];switch(t.length){case 0:return e.call(n);case 1:return e.call(n,r);case 2:return e.call(n,r,s);case 3:return e.call(n,r,s,i);default:return e.apply(n,t)}};var c={};e.extend(u,{log:function(n,t){var r=e.rest(arguments,2);console.log("["+n+'] "'+t+'"',r)},tuneIn:function(e){var n=u.channel(e);return n._tunedIn=!0,n.on("all",s(e)),this},tuneOut:function(e){var n=u.channel(e);return n._tunedIn=!1,n.off("all",s(e)),delete c[e],this}}),u.Requests={request:function(n){var t=e.rest(arguments),r=u._eventsApi(this,"request",n,t);if(r)return r;var s=this.channelName,i=this._requests;if(s&&this._tunedIn&&u.log.apply(this,[s,n].concat(t)),i&&(i[n]||i["default"])){var a=i[n]||i["default"];return t=i[n]?t:arguments,u._callHandler(a.callback,a.context,t)}u.debugLog("An unhandled request was fired",n,s)},reply:function(e,n,t){return u._eventsApi(this,"reply",e,[n,t])?this:(this._requests||(this._requests={}),this._requests[e]&&u.debugLog("A request was overwritten",e,this.channelName),this._requests[e]={callback:i(n),context:t||this},this)},replyOnce:function(n,t,r){if(u._eventsApi(this,"replyOnce",n,[t,r]))return this;var s=this,a=e.once(function(){return s.stopReplying(n),i(t).apply(this,arguments)});return this.reply(n,a,r)},stopReplying:function(e,n,t){return u._eventsApi(this,"stopReplying",e)?this:(e||n||t?r(this._requests,e,n,t)||u.debugLog("Attempted to remove the unregistered request",e,this.channelName):delete this._requests,this)}},u._channels={},u.channel=function(e){if(!e)throw new Error("You must provide a name for the channel.");return u._channels[e]?u._channels[e]:u._channels[e]=new u.Channel(e)},u.Channel=function(e){this.channelName=e},e.extend(u.Channel.prototype,n.Events,u.Requests,{reset:function(){return this.off(),this.stopListening(),this.stopReplying(),this}});var l,h,f=[n.Events,u.Commands,u.Requests];e.each(f,function(n){e.each(n,function(n,t){u[t]=function(n){return h=e.rest(arguments),l=this.channel(n),l[t].apply(l,h)}})}),u.reset=function(n){var t=n?[this._channels[n]]:this._channels;e.invoke(t,"reset")};var p=u;return p});
/* 
 * The MIT License (MIT)
 * 
 * Copyright (c) Ankit
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/** math-expression-evaluator version 1.2.16
 Dated:2017-02-02 */
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.mexp=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){var d=a("./postfix_evaluator.js");d.prototype.formulaEval=function(){"use strict";for(var a,b,c,d=[],e=this.value,f=0;f<e.length;f++)1===e[f].type||3===e[f].type?d.push({value:3===e[f].type?e[f].show:e[f].value,type:1}):13===e[f].type?d.push({value:e[f].show,type:1}):0===e[f].type?d[d.length-1]={value:e[f].show+("-"!=e[f].show?"(":"")+d[d.length-1].value+("-"!=e[f].show?")":""),type:0}:7===e[f].type?d[d.length-1]={value:(1!=d[d.length-1].type?"(":"")+d[d.length-1].value+(1!=d[d.length-1].type?")":"")+e[f].show,type:7}:10===e[f].type?(a=d.pop(),b=d.pop(),"P"===e[f].show||"C"===e[f].show?d.push({value:"<sup>"+b.value+"</sup>"+e[f].show+"<sub>"+a.value+"</sub>",type:10}):d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+"<sup>"+a.value+"</sup>",type:1})):2===e[f].type||9===e[f].type?(a=d.pop(),b=d.pop(),d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+e[f].show+(1!=a.type?"(":"")+a.value+(1!=a.type?")":""),type:e[f].type})):12===e[f].type&&(a=d.pop(),b=d.pop(),c=d.pop(),d.push({value:e[f].show+"("+c.value+","+b.value+","+a.value+")",type:12}));return d[0].value},b.exports=d},{"./postfix_evaluator.js":5}],2:[function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++)a[c]+=b;return a}function e(a,b,c,d){for(var e=0;e<d;e++)if(a[c+e]!==b[e])return!1;return!0}var f=a("./math_function.js"),g=["sin","cos","tan","pi","(",")","P","C","asin","acos","atan","7","8","9","int","cosh","acosh","ln","^","root","4","5","6","/","!","tanh","atanh","Mod","1","2","3","*","sinh","asinh","e","log","0",".","+","-",",","Sigma","n","Pi","pow"],h=["sin","cos","tan","&pi;","(",")","P","C","asin","acos","atan","7","8","9","Int","cosh","acosh"," ln","^","root","4","5","6","&divide;","!","tanh","atanh"," Mod ","1","2","3","&times;","sinh","asinh","e"," log","0",".","+","-",",","&Sigma;","n","&Pi;","pow"],j=[f.math.sin,f.math.cos,f.math.tan,"PI","(",")",f.math.P,f.math.C,f.math.asin,f.math.acos,f.math.atan,"7","8","9",Math.floor,f.math.cosh,f.math.acosh,Math.log,Math.pow,Math.sqrt,"4","5","6",f.math.div,f.math.fact,f.math.tanh,f.math.atanh,f.math.mod,"1","2","3",f.math.mul,f.math.sinh,f.math.asinh,"E",f.math.log,"0",".",f.math.add,f.math.sub,",",f.math.sigma,"n",f.math.Pi,Math.pow],k={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0},l=[0,0,0,3,4,5,10,10,0,0,0,1,1,1,0,0,0,0,10,0,1,1,1,2,7,0,0,2,1,1,1,2,0,0,3,0,1,6,9,9,11,12,13,12,8],m={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0},n={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0},o={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0},p={},q={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0},r={1:!0},s=[[],["1","2","3","7","8","9","4","5","6","+","-","*","/","(",")","^","!","P","C","e","0",".",",","n"],["pi","ln","Pi"],["sin","cos","tan","Del","int","Mod","log","pow"],["asin","acos","atan","cosh","root","tanh","sinh"],["acosh","atanh","asinh","Sigma"]];f.addToken=function(a){for(i=0;i<a.length;i++){x=a[i].token.length;var b=-1;if(x<s.length)for(y=0;y<s[x].length;y++)if(a[i].token===s[x][y]){b=g.indexOf(s[x][y]);break}b===-1?(g.push(a[i].token),l.push(a[i].type),s.length<=a[i].token.length&&(s[a[i].token.length]=[]),s[a[i].token.length].push(a[i].token),j.push(a[i].value),h.push(a[i].show)):(g[b]=a[i].token,l[b]=a[i].type,j[b]=a[i].value,h[b]=a[i].show)}},f.lex=function(a,b){"use strict";var c,i,t,u,v=[{type:4,value:"(",show:"(",pre:0}],w=[],x=a,y=0,z=m,A=0,B=p,C="";"undefined"!=typeof b&&f.addToken(b);var D={};for(i=0;i<x.length;i++)if(" "!=x[i]){c="";a:for(t=x.length-i>s.length-2?s.length-1:x.length-i;t>0;t--)for(u=0;u<s[t].length;u++)if(e(x,s[t][u],i,t)){c=s[t][u];break a}if(i+=c.length-1,""===c)throw new f.exception("Can't understand after "+x.slice(i));var E=g.indexOf(c),F=c,G=l[E],H=j[E],I=k[G],J=h[E],K=v[v.length-1];for(L=w.length;L--;)if(0===w[L]&&[0,2,3,5,9,11,12,13].indexOf(G)!==-1){if(z[G]!==!0)throw new f.exception(c+" is not allowed after "+C);v.push({value:")",type:5,pre:0,show:")"}),z=n,B=q,d(w,-1).pop()}if(z[G]!==!0)throw new f.exception(c+" is not allowed after "+C);if(B[G]===!0&&(G=2,H=f.math.mul,J="&times;",I=3,i-=c.length),D={value:H,type:G,pre:I,show:J},0===G)z=m,B=p,d(w,2).push(2),v.push(D),v.push({value:"(",type:4,pre:0,show:"("});else if(1===G)1===K.type?(K.value+=H,d(w,1)):v.push(D),z=n,B=o;else if(2===G)z=m,B=p,d(w,2),v.push(D);else if(3===G)v.push(D),z=n,B=q;else if(4===G)y+=w.length,w=[],A++,z=m,B=p,v.push(D);else if(5===G){if(!A)throw new f.exception("Closing parenthesis are more than opening one, wait What!!!");for(;y--;)v.push({value:")",type:5,pre:0,show:")"});y=0,A--,z=n,B=q,v.push(D)}else if(6===G){if(K.hasDec)throw new f.exception("Two decimals are not allowed in one number");1!==K.type&&(K={value:0,type:1,pre:0},v.push(K),d(w,-1)),z=r,d(w,1),B=p,K.value+=H,K.hasDec=!0}else 7===G&&(z=n,B=q,d(w,1),v.push(D));8===G?(z=m,B=p,d(w,4).push(4),v.push(D),v.push({value:"(",type:4,pre:0,show:"("})):9===G?(9===K.type?K.value===f.math.add?(K.value=H,K.show=J,d(w,1)):K.value===f.math.sub&&"-"===J&&(K.value=f.math.add,K.show="+",d(w,1)):5!==K.type&&7!==K.type&&1!==K.type&&3!==K.type&&13!==K.type?"-"===F&&(z=m,B=p,d(w,2).push(2),v.push({value:f.math.changeSign,type:0,pre:21,show:"-"}),v.push({value:"(",type:4,pre:0,show:"("})):(v.push(D),d(w,2)),z=m,B=p):10===G?(z=m,B=p,d(w,2),v.push(D)):11===G?(z=m,B=p,v.push(D)):12===G?(z=m,B=p,d(w,6).push(6),v.push(D),v.push({value:"(",type:4,pre:0})):13===G&&(z=n,B=q,v.push(D)),d(w,-1),C=c}for(var L=w.length;L--;)0===w[L]&&(v.push({value:")",show:")",type:5,pre:3}),d(w,-1).pop());if(z[5]!==!0)throw new f.exception("complete the expression");for(;A--;)v.push({value:")",show:")",type:5,pre:3});return v.push({type:5,value:")",show:")",pre:0}),new f(v)},b.exports=f},{"./math_function.js":3}],3:[function(a,b,c){var d=function(a){this.value=a};d.math={isDegree:!0,acos:function(a){return d.math.isDegree?180/Math.PI*Math.acos(a):Math.acos(a)},add:function(a,b){return a+b},asin:function(a){return d.math.isDegree?180/Math.PI*Math.asin(a):Math.asin(a)},atan:function(a){return d.math.isDegree?180/Math.PI*Math.atan(a):Math.atan(a)},acosh:function(a){return Math.log(a+Math.sqrt(a*a-1))},asinh:function(a){return Math.log(a+Math.sqrt(a*a+1))},atanh:function(a){return Math.log((1+a)/(1-a))},C:function(a,b){var c=1,e=a-b,f=b;f<e&&(f=e,e=b);for(var g=f+1;g<=a;g++)c*=g;return c/d.math.fact(e)},changeSign:function(a){return-a},cos:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.cos(a)},cosh:function(a){return(Math.pow(Math.E,a)+Math.pow(Math.E,-1*a))/2},div:function(a,b){return a/b},fact:function(a){if(a%1!==0)return"NAN";for(var b=1,c=2;c<=a;c++)b*=c;return b},inverse:function(a){return 1/a},log:function(a){return Math.log(a)/Math.log(10)},mod:function(a,b){return a%b},mul:function(a,b){return a*b},P:function(a,b){for(var c=1,d=Math.floor(a)-Math.floor(b)+1;d<=Math.floor(a);d++)c*=d;return c},Pi:function(a,b,c){for(var d=1,e=a;e<=b;e++)d*=Number(c.postfixEval({n:e}));return d},pow10x:function(a){for(var b=1;a--;)b*=10;return b},sigma:function(a,b,c){for(var d=0,e=a;e<=b;e++)d+=Number(c.postfixEval({n:e}));return d},sin:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.sin(a)},sinh:function(a){return(Math.pow(Math.E,a)-Math.pow(Math.E,-1*a))/2},sub:function(a,b){return a-b},tan:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.tan(a)},tanh:function(a){return d.sinha(a)/d.cosha(a)},toRadian:function(a){return a*Math.PI/180}},d.exception=function(a){this.message=a},b.exports=d},{}],4:[function(a,b,c){var d=a("./lexer.js");d.prototype.toPostfix=function(){"use strict";for(var a,b,c,e,f,g=[],h=[{value:"(",type:4,pre:0}],i=this.value,j=1;j<i.length;j++)if(1===i[j].type||3===i[j].type||13===i[j].type)1===i[j].type&&(i[j].value=Number(i[j].value)),g.push(i[j]);else if(4===i[j].type)h.push(i[j]);else if(5===i[j].type)for(;4!==(b=h.pop()).type;)g.push(b);else if(11===i[j].type){for(;4!==(b=h.pop()).type;)g.push(b);h.push(b)}else{a=i[j],e=a.pre,f=h[h.length-1],c=f.pre;var k="Math.pow"==f.value&&"Math.pow"==a.value;if(e>c)h.push(a);else{for(;c>=e&&!k||k&&e<c;)b=h.pop(),f=h[h.length-1],g.push(b),c=f.pre,k="Math.pow"==a.value&&"Math.pow"==f.value;h.push(a)}}return new d(g)},b.exports=d},{"./lexer.js":2}],5:[function(a,b,c){var d=a("./postfix.js");d.prototype.postfixEval=function(a){"use strict";a=a||{},a.PI=Math.PI,a.E=Math.E;for(var b,c,e,f=[],g=this.value,h="undefined"!=typeof a.n,i=0;i<g.length;i++)1===g[i].type?f.push({value:g[i].value,type:1}):3===g[i].type?f.push({value:a[g[i].value],type:1}):0===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):7===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):8===g[i].type?(b=f.pop(),c=f.pop(),f.push({type:1,value:g[i].value(c.value,b.value)})):10===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(c.value=c.concat(b),c.value.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):2===g[i].type||9===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(console.log(c),c=c.concat(b),c.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):12===g[i].type?(b=f.pop(),"undefined"!=typeof b.type&&(b=[b]),c=f.pop(),e=f.pop(),f.push({type:1,value:g[i].value(e.value,c.value,new d(b))})):13===g[i].type&&(h?f.push({value:a[g[i].value],type:3}):f.push([g[i]]));if(f.length>1)throw new d.exception("Uncaught Syntax error");return f[0].value>1e15?"Infinity":Number(f[0].value.toFixed(15)).toPrecision()},d.eval=function(a,b,c){return"undefined"==typeof b?this.lex(a).toPostfix().postfixEval():"undefined"==typeof c?"undefined"!=typeof b.length?this.lex(a,b).toPostfix().postfixEval():this.lex(a).toPostfix().postfixEval(b):this.lex(a,b).toPostfix().postfixEval(c)},b.exports=d},{"./postfix.js":4}]},{},[1])(1)});
// TODO: Fix error collecting.
//window.onerror = function(message, url, lineNumber) {
//  var data;
//
//  data = {
//  	'action': 'nf_log_js_error',
//  	'security': nfFrontEnd.ajaxNonce,
//  	'message': message,
//  	'url': url,
//  	'lineNumber': lineNumber
//  };
//
//  jQuery.ajax({
//	    url: nfFrontEnd.adminAjax,
//	    type: 'POST',
//	    data: data,
//	    cache: false,
//	   	success: function( data, textStatus, jqXHR ) {
//	   		try {
//		   		
//	   		} catch( e ) {
//	   			console.log( e );
//	   			console.log( 'Parse Error' );
//				console.log( e );
//	   		}
//
//	    },
//	    error: function( jqXHR, textStatus, errorThrown ) {
//	        // Handle errors here
//	        console.log('ERRORS: ' + errorThrown);
//			console.log( jqXHR );
//
//			try {
//			
//			} catch( e ) {
//				console.log( 'Parse Error' );
//			}
//		}
//	});
//  return false;
//};  

var nfRadio = Backbone.Radio;

nfRadio.channel( 'form' ).on( 'render:view', function() {		
	jQuery( '.g-recaptcha' ).each( function() {
		var callback = jQuery( this ).data( 'callback' );
		var fieldID = jQuery( this ).data( 'fieldid' );
		if ( typeof window[ callback ] !== 'function' ){
			window[ callback ] = function( response ) {
				nfRadio.channel( 'recaptcha' ).request( 'update:response', response, fieldID );
			};
		}
	} );
} );

var nfRecaptcha = Marionette.Object.extend( {
	initialize: function() {
		/*
		 * If we've already rendered our form view, render our recaptcha fields.
		 */
		if ( 0 != jQuery( '.g-recaptcha' ).length ) {
			this.renderCaptcha();
		}
		/*
		 * We haven't rendered our form view, so hook into the view render radio message, and then render.
		 */
		this.listenTo( nfRadio.channel( 'form' ), 'render:view', this.renderCaptcha );
        this.listenTo( nfRadio.channel( 'captcha' ), 'reset', this.renderCaptcha );
	},

	renderCaptcha: function() {
		jQuery( '.g-recaptcha:empty' ).each( function() {
			var opts = {
				fieldid: jQuery( this ).data( 'fieldid' ),
				size: jQuery( this ).data( 'size' ),
				theme: jQuery( this ).data( 'theme' ),
				sitekey: jQuery( this ).data( 'sitekey' ),
				callback: jQuery( this ).data( 'callback' )
			};

			var grecaptchaID = grecaptcha.render( jQuery( this )[0], opts );

            if ( opts.size === 'invisible' ) {
                try {
                    grecaptcha.execute( grecaptchaID );
                } catch( e ){
                    console.log( 'Notice: Error trying to execute grecaptcha.' );
                }
            }
		} );
	}

} );

var nfRenderRecaptcha = function() {
	new nfRecaptcha();
};
(function () {
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

define("../lib/almond", function(){});

define( 'models/fieldErrorModel',[], function() {
	var model = Backbone.Model.extend( {

	} );
	
	return model;
} );
define( 'models/fieldErrorCollection',['models/fieldErrorModel'], function( errorModel ) {
	var collection = Backbone.Collection.extend( {
		model: errorModel
	} );
	return collection;
} );
define( 'models/fieldModel',['models/fieldErrorCollection'], function( fieldErrorCollection ) {
	var model = Backbone.Model.extend( {
		defaults: {
			placeholder: '',
			value: '',
			label_pos: '',
			classes: 'ninja-forms-field',
			reRender: false,
			mirror_field: false,
			confirm_field: false,
			clean: true,
			disabled: '',
			visible: true,
			invalid: false
		},

		initialize: function() {
			var type = this.get('type');

			this.set( 'formID', this.collection.options.formModel.get( 'id' ) );
			this.listenTo( nfRadio.channel( 'form-' + this.get( 'formID' ) ), 'reset', this.resetModel );

    		this.bind( 'change', this.changeModel, this );
    		this.bind( 'change:value', this.changeValue, this );
    		this.set( 'errors', new fieldErrorCollection() );

			if (type === 'listimage') {
				this.get = this.listimageGet;
				this.set = this.listimageSet;
			}

    		/*
			 * Trigger an init event on two channels:
			 * 
			 * fields
			 * field-type
			 *
			 * This lets specific field types modify model attributes before anything uses them.
			 */
			nfRadio.channel( 'fields' ).trigger( 'init:model', this );
			nfRadio.channel( this.get( 'type' ) ).trigger( 'init:model', this );
			nfRadio.channel( 'fields-' + this.get( 'type' ) ).trigger( 'init:model', this );

			if( 'undefined' != typeof this.get( 'parentType' ) ){
				nfRadio.channel( this.get( 'parentType' ) ).trigger( 'init:model', this );
			}

			/*
			 * When we load our form, fire another event for this field.
			 */
			this.listenTo( nfRadio.channel( 'form-' + this.get( 'formID' ) ), 'loaded', this.formLoaded );
		
			/*
			 * Before we submit our form, send out a message so that this field can be modified if necessary.
			 */
			this.listenTo( nfRadio.channel( 'form-' + this.get( 'formID' ) ), 'before:submit', this.beforeSubmit );
		},

		listimageGet: function(attr) {
            if(attr === 'options') {
					attr = 'image_options';
			}

            return Backbone.Model.prototype.get.call(this, attr);
		},
		
		listimageSet: function(attributes, options) {
			if ('options' === attributes) {
				attributes = 'image_options';
			}
			return Backbone.Model.prototype.set.call(this, attributes, options);
		},

		changeModel: function() {
			nfRadio.channel( 'field-' + this.get( 'id' ) ).trigger( 'change:model', this );
			nfRadio.channel( this.get( 'type' ) ).trigger( 'change:model', this );
			nfRadio.channel( 'fields' ).trigger( 'change:model', this );
		},

		changeValue: function() {
			nfRadio.channel( 'field-' + this.get( 'id' ) ).trigger( 'change:modelValue', this );
			nfRadio.channel( this.get( 'type' ) ).trigger( 'change:modelValue', this );
			nfRadio.channel( 'fields' ).trigger( 'change:modelValue', this );
		},

		addWrapperClass: function( cl ) {
			this.set( 'addWrapperClass', cl );
		},

		removeWrapperClass: function( cl ) {
			this.set( 'removeWrapperClass', cl );
		},

		setInvalid: function( invalid ) {
			this.set( 'invalid', invalid );
		},

		formLoaded: function() {
			nfRadio.channel( 'fields' ).trigger( 'formLoaded', this );
			nfRadio.channel( 'fields-' + this.get( 'type' ) ).trigger( 'formLoaded', this );
		},

		beforeSubmit: function( formModel ) {
			nfRadio.channel( this.get( 'type' ) ).trigger( 'before:submit', this );
			nfRadio.channel( 'fields' ).trigger( 'before:submit', this );
		},

		/**
		 * Return the value of this field.
		 * This method exists so that more complex fields can return more than just the field value.
		 * Those advanced fields should create their own method with this name.
		 * 
		 * @since  3.5
		 * @return {string} Value of this field.
		 */
		getValue: function() {
			return this.get( 'value' );
		}

	} );

	return model;
} );

define( 'models/fieldCollection',['models/fieldModel'], function( fieldModel ) {
	var collection = Backbone.Collection.extend( {
		model: fieldModel,
		comparator: 'order',

		initialize: function( models, options ) {
			this.options = options;
            this.on( 'reset', function( fieldCollection ){
                nfRadio.channel( 'fields' ).trigger( 'reset:collection', fieldCollection );
            }, this );
		},

		validateFields: function() {
			_.each( this.models, function( fieldModel ) {
				// added here for help with multi-part part validation
				fieldModel.set( 'clean', false );
				nfRadio.channel( 'submit' ).trigger( 'validate:field', fieldModel );
			}, this );
		},

		showFields: function() {
			this.invoke( 'set', { visible: true } );
            this.invoke( function() {
                this.trigger( 'change:value', this );
            });
		},

		hideFields: function() {
			this.invoke( 'set', { visible: false } );
            this.invoke( function() {
                this.trigger( 'change:value', this );
            });
		}
	} );
	return collection;
} );

define( 'models/formErrorModel',[], function() {
	var model = Backbone.Model.extend( {

	} );
	
	return model;
} );
define( 'models/formErrorCollection',['models/formErrorModel'], function( errorModel ) {
	var collection = Backbone.Collection.extend( {
		model: errorModel
	} );
	return collection;
} );
define( 'models/formModel',[
	'models/fieldCollection',
	'models/formErrorCollection'
	], function(
		FieldCollection,
		ErrorCollection
	) {
	var model = Backbone.Model.extend({
		defaults: {
			beforeForm: '',
			afterForm: '',
			beforeFields: '',
			afterFields: '',
			wrapper_class: '',
			element_class: '',
			hp: '',
			fieldErrors: {},
			extra: {}
		},

		initialize: function() {
			// Loop over settings and map to attributes
			_.each( this.get( 'settings' ), function( value, setting ) {
				this.set( setting, value );
			}, this );

			this.set( 'loadedFields', this.get( 'fields' ) );
			this.set( 'fields', new FieldCollection( this.get( 'fields' ), { formModel: this } ) );
			this.set( 'errors', new ErrorCollection() );

			/*
			 * Send out a radio message so that anyone who wants to filter our content data can register their filters.
			 */
			nfRadio.channel( 'form' ).trigger( 'before:filterData', this );

			/*
			 * Set our formContentData to our form setting 'formContentData'
			 */
			var formContentData = this.get( 'formContentData' );

			/*
			 * The formContentData variable used to be fieldContentsData.
			 * If we don't have a 'formContentData' setting, check to see if we have an old 'fieldContentsData'.
			 * 
			 * TODO: This is for backwards compatibility and should be removed eventually. 
			 */
			if ( ! formContentData ) {
				formContentData = this.get( 'fieldContentsData' );
			}
			
			var formContentLoadFilters = nfRadio.channel( 'formContent' ).request( 'get:loadFilters' );
			/* 
			* Get our first filter, this will be the one with the highest priority.
			*/
			var sortedArray = _.without( formContentLoadFilters, undefined );
			var callback = _.first( sortedArray );
			formContentData = callback( formContentData, this, this );
			
			this.set( 'formContentData', formContentData );

			nfRadio.channel( 'forms' ).trigger( 'init:model', this );
			nfRadio.channel( 'form-' + this.get( 'id' ) ).trigger( 'init:model', this );

			// Fields
			nfRadio.channel( 'form-' + this.get( 'id' ) ).reply( 'get:fieldByKey', this.getFieldByKey, this );

			// Form Errors
			nfRadio.channel( 'form-' + this.get( 'id' ) ).reply( 'add:error',    this.addError, this    );
			nfRadio.channel( 'form-' + this.get( 'id' ) ).reply( 'remove:error', this.removeError, this );

			// Extra Data
			nfRadio.channel( 'form-' + this.get( 'id' ) ).reply( 'get:extra',    this.getExtra,    this );
			nfRadio.channel( 'form-' + this.get( 'id' ) ).reply( 'add:extra',    this.addExtra,    this );
			nfRadio.channel( 'form-' + this.get( 'id' ) ).reply( 'remove:extra', this.removeExtra, this );
		
			// Respond to requests to get this model.
			nfRadio.channel( 'form-' + this.get( 'id' ) ).reply( 'get:form', 	 this.getForm, 	   this );

			nfRadio.channel( 'form' ).trigger( 'loaded', this );
			nfRadio.channel( 'form' ).trigger( 'after:loaded', this );
			nfRadio.channel( 'form-' + this.get( 'id' ) ).trigger( 'loaded', 	 this );
		},

		/*
		 |--------------------------------------------------------------------------
		 | Fields
		 |--------------------------------------------------------------------------
		 */

		getFieldByKey: function( key ) {
			return this.get( 'fields' ).findWhere( { key: key } );
		},

		/*
		 |--------------------------------------------------------------------------
		 | Form Errors
		 |--------------------------------------------------------------------------
		 */

		addError: function( id, msg ) {
			var errors = this.get( 'errors' );
			errors.add( { id: id, msg: msg } );
			nfRadio.channel( 'form-' + this.get( 'id' ) ).trigger( 'add:error', this, id, msg );
		},

		removeError: function( id ) {
			var errors = this.get( 'errors' );
			var errorModel = errors.get( id );
			errors.remove( errorModel );
			nfRadio.channel( 'form-' + this.get( 'id' ) ).trigger( 'remove:error', this, id );
		},

		/*
		 |--------------------------------------------------------------------------
		 | Extra Data
		 |--------------------------------------------------------------------------
		 */

		getExtra: function( key ) {
			var extraData = this.get( 'extra' );
			if( 'undefined' == typeof key ) return extraData;
			return extraData[ key ];
		},

		addExtra: function( key, value ) {
			var extraData = this.get( 'extra' );
			extraData[ key ] = value;
			nfRadio.channel( 'form-' + this.get( 'id' ) ).trigger( 'add:extra', this, key, value );
		},

		removeExtra: function( key ) {
			var extraData = this.get( 'extra' );
			delete extraData[ key ];
			nfRadio.channel( 'form-' + this.get( 'id' ) ).trigger( 'remove:extra', this, key );
		},

		/*
		 |--------------------------------------------------------------------------
		 | Get this form
		 |--------------------------------------------------------------------------
		 */
		getForm: function() {
			return this;
		}
	} );

	return model;
} );
define( 'models/formCollection',['models/formModel'], function( formModel ) {
	var collection = Backbone.Collection.extend( {
		model: formModel
	} );
	return collection;
} );
/*
 * Handles setting up our form.
 *
 * Holds a collection of our fields.
 * Replies to requests for field data.
 * Updates field models.
 */
define('controllers/formData',['models/formModel', 'models/formCollection', 'models/fieldCollection', 'models/formErrorCollection'], function( FormModel, FormCollection, FieldCollection, ErrorCollection ) {
	var controller = Marionette.Object.extend( {
		initialize: function() {

			/*
			 * Setup our field collections.
			 */
			var that = this;

			/*
			 * Initialize our form collection (incase we have multiple forms on the page)
			 */
			this.collection = new FormCollection( nfForms );

			nfRadio.channel( 'forms' ).trigger( 'loaded', this.collection );
			nfRadio.channel( 'app' ).trigger( 'forms:loaded', this.collection );

			nfRadio.channel( 'app' ).reply( 'get:form', this.getForm, this );
			nfRadio.channel( 'app' ).reply( 'get:forms', this.getForms, this );

			nfRadio.channel( 'fields' ).reply( 'get:field', this.getField, this );
		},

		getForm: function( id ) {
			return this.collection.get( id );
		},

		getForms: function() {
			return this.collection;
		},

		getField: function( id ) {
			var model = false;
			
			_.each( this.collection.models, function( form ) {
				if ( ! model ) {
					model = form.get( 'fields' ).get( id );	
				}			
			} );

			if(typeof model == "undefined"){
				model = nfRadio.channel( "field-repeater" ).request( 'get:repeaterFieldById', id );
			}
			
			return model;
		}
	});

	return controller;
} );

define('controllers/fieldError',['models/fieldErrorModel'], function( fieldErrorModel ) {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			nfRadio.channel( 'fields' ).reply( 'add:error', this.addError );
			nfRadio.channel( 'fields' ).reply( 'remove:error', this.removeError );
			nfRadio.channel( 'fields' ).reply( 'get:error', this.getError );
		},

		addError: function( targetID, id, msg ) {
			var model = nfRadio.channel( 'fields' ).request( 'get:field', targetID );

			if( 'undefined' == typeof model ) return;

			var errors = model.get( 'errors' );
			errors.add( { 'id': id, 'msg' : msg } );
			model.set( 'errors', errors );
			model.trigger( 'change:errors', model );
			model.set( 'clean', false );
			nfRadio.channel( 'fields' ).trigger( 'add:error', model, id, msg );
		},

		removeError: function( targetID, id ) {
			var model = nfRadio.channel( 'fields' ).request( 'get:field', targetID );

			if( 'undefined' == typeof model ) return;
			var errors = model.get( 'errors' );
			var targetError = errors.get( id );

			if ( 'undefined' != typeof targetError ) {
				errors.remove( targetError );
				model.set( 'errors', errors );
				model.trigger( 'change:errors', model );
				nfRadio.channel( 'fields' ).trigger( 'remove:error', model, id );
			}
		},

		getError: function( targetID, id ) {
			var model = nfRadio.channel( 'fields' ).request( 'get:field', targetID );
			var errors = model.get( 'errors' );
			var targetError = errors.get( id );
			if ( 'undefined' != targetError ) {
				return targetError;
			} else {
				return false;
			}
		}
	});

	return controller;
} );
/**
 * Controller responsible for replying to a Radio request stating that a field has been changed.
 *
 * This controller sends out a message to the field-specific channel, the field type channel,
 * and the public fields channel so that the data model can be updated.
 */

define('controllers/changeField',[], function() {
	var controller = Marionette.Object.extend( {

		initialize: function() {
			/*
			 * Reply to our request for changing a field.
			 */
			nfRadio.channel( 'nfAdmin' ).reply( 'change:field', this.changeField );

			/*
			 * If we blur our field, set the model attribute of 'clean' to false.
			 * 'clean' tracks whether or not the user has every interacted with this element.
			 * Some validation, like required, uses this to decide whether or not to add an error.
			 */
			this.listenTo( nfRadio.channel( 'fields' ), 'blur:field', this.blurField );
		},

		changeField: function( el, model ) {
			// Get our current value.
			var value = nfRadio.channel( model.get( 'type' ) ).request( 'before:updateField', el, model );
			value = ( 'undefined' != typeof value ) ? value : nfRadio.channel( model.get( 'parentType' ) ).request( 'before:updateField', el, model );
			value = ( 'undefined' != typeof value ) ? value : jQuery( el ).val();

			// Set our 'isUpdated' flag to false.
			model.set( 'isUpdated', false );

			// Set our 'clean' flag to false.
			model.set( 'clean', false );

			/*
			 * Send out a message saying that we've changed a field.
			 * The first channel is field id/key specific.
			 * The second channel is the field type, i.e. text, email, radio
			 * The third channel is a generic 'field' channel.
			 *
			 * If the submitted value you wish to store in the data model isn't the same as the value received above,
			 * you can set that model in the actions below and set the 'isUpdated' model attribute to true.
			 * i.e. model.set( 'isUpdated', true );
			 */
			nfRadio.channel( 'field-' + model.get( 'id' ) ).trigger( 'change:field', el, model );
			nfRadio.channel( model.get( 'type' ) ).trigger( 'change:field', el, model );
			nfRadio.channel( 'fields' ).trigger( 'change:field', el, model );

			/*
			 * Send a request out on our nfAdmin channel to update our field model.
			 * If the field model has a 'isUpdated' property of false, nothing will be updated.
			 */
			nfRadio.channel( 'nfAdmin' ).request( 'update:field', model, value );
		},

		blurField: function( el, model ) {
			// Set our 'clean' flag to false.
			model.set( 'clean', false );
		}
	});

	return controller;
} );
define('controllers/changeEmail',[], function() {
	var radioChannel = nfRadio.channel( 'email' );
	// var emailReg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var errorID = 'invalid-email';

	var controller = Marionette.Object.extend( {

		initialize: function() {
			this.listenTo( radioChannel, 'change:modelValue', this.onChangeModelValue );
			this.listenTo( radioChannel, 'keyup:field', this.emailKeyup );
			this.listenTo( radioChannel, 'blur:field', this.onBlurField );
		},

		onChangeModelValue: function( model ) {
			var value = model.get( 'value' );
			var fieldID = model.get( 'id' );
			this.emailChange( value, fieldID );
		},

		onBlurField: function( el, model ) {
			var value = jQuery( el ).val();
			var fieldID = model.get( 'id' );
			this.emailChange( value, fieldID );
		},

		emailChange: function( value, fieldID ) {
			if ( 0 < value.length ) {
				if( emailReg.test( value ) ) {
					nfRadio.channel( 'fields' ).request( 'remove:error', fieldID, errorID );
				} else {
					var fieldModel = nfRadio.channel( 'fields' ).request( 'get:field', fieldID );
					var formModel  = nfRadio.channel( 'app'    ).request( 'get:form',  fieldModel.get( 'formID' ) );
					nfRadio.channel( 'fields' ).request( 'add:error', fieldID, errorID, formModel.get( 'settings' ).changeEmailErrorMsg );
				}				
			} else {
				nfRadio.channel( 'fields' ).request( 'remove:error', fieldID, errorID );
			}
		},

		/**
		 * When a user types inside of an email field, track their keypresses and add the appropriate class.
		 * If the value validates as an email, add a class of nf-pass
		 * If the value does not validate as email, add a class of nf-fail
		 * 
		 * @since  3.0
		 * @param  {object} el    Element that triggered the keyup event.
		 * @param  {object} model Model connected to the element that triggered the event
		 * @return {void}
		 */
		emailKeyup: function( el, model, keyCode ) {
			
			/*
			 * If we pressed the 'tab' key to get to this field, return false.
			 */
			if ( 9 == keyCode ) {
				return false;
			}
			/*
			 * Get the current value from our element.
			 */
			var value = jQuery( el ).val();

			/*
			 * Get our current ID
			 */
			var fieldID = model.get( 'id' );

			/*
			 * Check our value to see if it is a valid email.
			 */
			if ( 0 == value.length ) {
				nfRadio.channel( 'fields' ).request( 'remove:error', fieldID, errorID );
			} else if ( ! emailReg.test( value ) && ! model.get( 'clean' ) ) {

				var fieldModel = nfRadio.channel( 'fields' ).request( 'get:field', fieldID );
				var formModel  = nfRadio.channel( 'app'    ).request( 'get:form',  fieldModel.get( 'formID' ) );
				nfRadio.channel( 'fields' ).request( 'add:error', fieldID, errorID, formModel.get( 'settings' ).changeEmailErrorMsg );

				model.removeWrapperClass( 'nf-pass' );
			} else if ( emailReg.test( value ) ) {
				nfRadio.channel( 'fields' ).request( 'remove:error', fieldID, errorID );
				/*
				 * Add nf-pass class to the wrapper.
				 */
				model.addWrapperClass( 'nf-pass' );
				model.set( 'clean', false );
			}
		}
	});

	return controller;
} );
define('controllers/changeDate',[], function() {
	var radioChannel = nfRadio.channel( 'date' );
	var errorID = 'invalid-date';

	var controller = Marionette.Object.extend( {

		initialize: function() {
			this.listenTo( radioChannel, 'change:modelValue', this.onChangeModelValue );
			this.listenTo( radioChannel, 'keyup:field', this.dateKeyup );
			this.listenTo( radioChannel, 'blur:field', this.onBlurField );
			
			this.listenTo( radioChannel, 'change:extra', this.changeHoursMinutes, this)
		},

		onChangeModelValue: function( model ) {
			this.dateChange( model );
		},

		onBlurField: function( el, model ) {
			this.dateChange( model );
		},

		dateChange: function( model ) {
			var fieldID = model.get( 'id' );
			var value = model.get( 'value' );
			var format = model.get( 'date_format' );

			if( 'default' === format) {
				format = nfi18n.dateFormat;
			}

			// If we are dealing with purely a time field, bail early.
			if ( 'time_only' == model.get( 'date_mode' ) ) {
				return false;
			}

			if ( 0 < value.length ) {
				// use moment's isValid to check against the fields format setting
				if( moment( value, format ).isValid() ) {
					nfRadio.channel( 'fields' ).request( 'remove:error', fieldID, errorID );
				} else {
					var fieldModel = nfRadio.channel( 'fields' ).request( 'get:field', fieldID );
					var formModel  = nfRadio.channel( 'app'    ).request( 'get:form',  fieldModel.get( 'formID' ) );
					nfRadio.channel( 'fields' ).request( 'add:error', fieldID, errorID, formModel.get( 'settings' ).changeDateErrorMsg );
				}
			} else {
				nfRadio.channel( 'fields' ).request( 'remove:error', fieldID, errorID );
			}
		},

		/**
		 * When a user types inside of an dat field, track their keypresses
		 * and add the appropriate class.
		 * If the value validates as an date, add a class of nf-pass
		 * If the value does not validate as date, add a class of nf-fail
		 *
		 * @since  3.0
		 * @param  {object} el    Element that triggered the keyup event.
		 * @param  {object} model Model connected to the element that triggered the event
		 * @return {void}
		 */
		dateKeyup: function( el, model, keyCode ) {

			/*
			 * If we pressed the 'tab' key to get to this field, return false.
			 */
			if ( 9 == keyCode ) {
				return false;
			}
			/*
			 * Get the current value from our element.
			 */
			var value = jQuery( el ).val();

			/*
			 * Get our current ID
			 */
			var fieldID = model.get( 'id' );

			/*
			* Get our current date format
			 */
			var format = model.get( 'date_format' );

			if( 'default' === format) {
				format = nfi18n.dateFormat;
			}

			/*
			 * Check our value to see if it is a valid email.
			 */
			if ( 0 == value.length ) {
				nfRadio.channel( 'fields' ).request( 'remove:error', fieldID, errorID );
			}
			// use moment's isValid to check against the fields format setting
			else if ( ! moment( value, format ).isValid() && ! model.get( 'clean' ) ) {

				var fieldModel = nfRadio.channel( 'fields' ).request( 'get:field', fieldID );
				var formModel  = nfRadio.channel( 'app'    ).request( 'get:form',  fieldModel.get( 'formID' ) );
				nfRadio.channel( 'fields' ).request( 'add:error', fieldID, errorID, formModel.get( 'settings' ).changeDateErrorMsg );

				model.removeWrapperClass( 'nf-pass' );
			}
			// use moment's isValid to check against the fields format setting
			else if ( moment( value, format ).isValid() ) {
				nfRadio.channel( 'fields' ).request( 'remove:error', fieldID, errorID );
				/*
				 * Add nf-pass class to the wrapper.
				 */
				model.addWrapperClass( 'nf-pass' );
				model.set( 'clean', false );
			}
		},

		changeHoursMinutes: function( e, fieldModel ) {
			let type = '';
			let container = jQuery( e.target ).closest( '.nf-field-element' );

			// Set our hour, minute, and ampm
			let selected_hour = jQuery( container ).find( '.hour' ).val();
			let selected_minute = jQuery( container ).find( '.minute' ).val();
			let selected_ampm = jQuery( container ).find( '.ampm' ).val();

			fieldModel.set( 'selected_hour', selected_hour );
			fieldModel.set( 'selected_minute', selected_minute );
			fieldModel.set( 'selected_ampm', selected_ampm );
			// Trigger a change on our model.
			fieldModel.trigger( 'change:value', fieldModel );
		}
	});

	return controller;
} );
define('controllers/fieldCheckbox',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			/*
			 * When we init our checkbox model, register our renderClasses() function
			 */
			this.listenTo( nfRadio.channel( 'checkbox' ), 'init:model', this.registerRenderClasses );

			nfRadio.channel( 'checkbox' ).reply( 'validate:required', this.validateRequired );
			nfRadio.channel( 'checkbox' ).reply( 'validate:modelData', this.validateModelData );
            nfRadio.channel( 'checkbox' ).reply( 'before:updateField', this.beforeUpdateField, this );
            nfRadio.channel( 'checkbox' ).reply( 'get:calcValue', this.getCalcValue, this );
		},

		beforeUpdateField: function( el, model ) {
			var checked = jQuery( el ).prop( 'checked' );
			if ( checked ) {
				var value = 1;
				jQuery( el ).addClass( 'nf-checked' );
				jQuery( el ).closest( '.field-wrap' ).find( 'label[for="' + jQuery( el ).prop( 'id' ) + '"]' ).addClass( 'nf-checked-label' );
			} else {
				var value = 0;
				jQuery( el ).removeClass( 'nf-checked' );
				jQuery( el ).closest( '.field-wrap' ).find( 'label[for="' + jQuery( el ).prop( 'id' ) + '"]' ).removeClass( 'nf-checked-label' );
			}

			return value;
		},

		validateRequired: function( el, model ) {
			return el[0].checked;
		},

		validateModelData: function( model ) {
			return model.get( 'value' ) != 0;
		},

		getCalcValue: function( fieldModel ) {
			if ( 1 == fieldModel.get( 'value' ) ) {
				calcValue = fieldModel.get( 'checked_calc_value' );
			} else {
				calcValue = fieldModel.get( 'unchecked_calc_value' );
			}

			return calcValue;
		},

		registerRenderClasses: function( model ) {
			if ( 'checked' == model.get( 'default_value' ) ) {
				model.set( 'value', 1 );
			} else {
				model.set( 'value', 0 );
			}
			model.set( 'customClasses', this.customClasses );
			model.set( 'customLabelClasses', this.customLabelClasses );
			model.set( 'maybeChecked', this.maybeChecked );
		},

		customClasses: function( classes ) {
			if ( 1 == this.value || ( this.clean && 'undefined' != typeof this.default_value && 'checked' == this.default_value ) ) {
				classes += ' nf-checked';
			} else {
				classes.replace( 'nf-checked', '' );
			}
			return classes;
		},

		customLabelClasses: function( classes ) {
			if ( 1 == this.value || ( this.clean && 'undefined' != typeof this.default_value && 'checked' == this.default_value ) ) {
				classes += ' nf-checked-label';
			} else {
				classes.replace( 'nf-checked-label', '' );
			}
			return classes;
		},

		maybeChecked: function() {
			if ( 1 == this.value || ( this.clean && 'undefined' != typeof this.default_value && 'checked' == this.default_value ) ) {
				return ' checked';
			} else {
				return '';
			}
		}
	});

	return controller;
} );
define('controllers/fieldCheckboxList',[], function() {
    var controller = Marionette.Object.extend( {
        initialize: function() {
            this.listenTo( nfRadio.channel( 'listcheckbox' ), 'init:model', this.register );
            this.listenTo( nfRadio.channel( 'terms' ), 'init:model', this.register );
            nfRadio.channel( 'listcheckbox' ).reply( 'before:updateField', this.beforeUpdateField, this );
            nfRadio.channel( 'terms' ).reply( 'before:updateField', this.beforeUpdateField, this );
            nfRadio.channel( 'listcheckbox' ).reply( 'get:calcValue', this.getCalcValue, this );
            nfRadio.channel( 'terms' ).reply( 'get:calcValue', this.getCalcValue, this );
        },

        register: function( model ) {
            model.set( 'renderOptions', this.renderOptions );
            model.set( 'renderOtherText', this.renderOtherText );
            model.set( 'selected', [] );

            /*
             * When we init a model, we need to set our 'value' to the selected option's value.
             * This is the list equivalent of a 'default value'.
             */ 
            if ( 0 != model.get( 'options' ).length ) {
                var selected = _.filter( model.get( 'options' ), function( opt ) { return 1 == opt.selected } );
                selected = _.map( selected, function( opt ) { return opt.value } );
            }

            /*
            * This part is re-worked to take into account custom user-meta
            * values for fields.
             */
	        var savedVal = model.get( 'value' );
	        if( 'undefined' !== typeof savedVal && Array.isArray( savedVal ) ) {
		        model.set( 'value', savedVal );
	        } else if ( 'undefined' != typeof selected ) {
		        model.set( 'value', selected );
	        }
        },

        renderOptions: function() {
            var html = '';

            if ( '' == this.value || ( Array.isArray( this.value ) && 0 < this.value.length )
                || 0 < this.value.length ) {
                var valueFound = true;
            } else {
                var valueFound = false;
            }

            _.each( this.options, function( option, index ) {
                if( Array.isArray( this.value ) ) {
                	if( Array.isArray( this.value[ 0 ] ) && -1 !== _.indexOf( this.value[ 0 ], option.value ) ) {
                		valueFound = true;
	                }
                    else if( _.indexOf( this.value, option.value ) ) {
                        valueFound = true;
	                }
                }

                if ( option.value == this.value ) {
                    valueFound = true;
                }

                /*
                 * TODO: This is a bandaid fix for making sure that each option has a "visible" property.
                 * This should be moved to creation so that when an option is added, it has a visible property by default.
                 */
                if ( 'undefined' == typeof option.visible ) {
                    option.visible = true;
                }

                option.fieldID = this.id;
                option.classes = this.classes;
                option.index = index;

                var selected = false;
				/*
				* This part has been re-worked to account for values passed in
				* via custom user-meta ( a la User Mgmt add-on)
				 */
	            if( Array.isArray( this.value ) && 0 < this.value.length ) {
	            	if ( -1 !== _.indexOf( this.value[ 0 ].split( ',' ), option.value )
		                || -1 !== _.indexOf( this.value, option.value ) ) {
			            selected = true;
	            	}
	            } else if ( ! _.isArray( this.value ) && option.value == this.value ) {
		            selected = true;
	            } else if ( ( 1 == option.selected && this.clean ) && 'undefined' === typeof this.value ) {
		            selected = true;
	            }


                // else if( ( option.selected && "0" != option.selected ) && this.clean ){
	            //     isSelected = true;
	            // } else {
	            //     var testValues = _.map( this.value, function( value ) {
	            //         return value.toString();
	            //     } );
	            //
	            //     option.isSelected = ( -1 != testValues.indexOf( option.value.toString() ) );
	            // }
	            option.selected = selected;
	            option.isSelected = selected;
	            option.required = this.required;
                var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-listcheckbox-option' );
                html += template( option );
            }, this );

            if ( 1 == this.show_other ) {
                if ( 'nf-other' == this.value ) {
                    valueFound = false;
                }
                var data = {
                    fieldID: this.id,
                    classes: this.classes,
                    currentValue: this.value,
                    renderOtherText: this.renderOtherText,
                    valueFound: valueFound
                };

                var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-listcheckbox-other' );
                html += template( data );

            }

            return html;
        },

        renderOtherText: function() {
            if ( 'nf-other' == this.currentValue || ! this.valueFound ) {
                if ( 'nf-other' == this.currentValue ) {
                    this.currentValue = '';
                }
                var data = {
                    fieldID: this.fieldID,
                    classes: this.classes,
                    currentValue: this.currentValue
                };
                var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-listcheckbox-other-text' );
                return template( data );
            }
        },

        getCalcValue: function( fieldModel ) {
            var calc_value = 0;
            var options = fieldModel.get( 'options' );
            if ( 0 != options.length ) {
                _.each( fieldModel.get( 'value' ), function( val ) {
                    var tmp_opt = _.find( options, function( opt ) { return opt.value == val } );
                    calc_value = Number( calc_value ) + Number( tmp_opt.calc );
                } );
            }
            return calc_value;
        },

        beforeUpdateField: function( el, model ) {
            var selected = model.get( 'value' ) || [];
            if ( typeof selected == 'string' ) selected = [ selected ];

            var value = jQuery( el ).val();
            var checked = jQuery( el ).prop( 'checked' );
            if ( checked ) {
                selected.push( value );
                jQuery( el ).addClass( 'nf-checked' );
                jQuery( el ).parent().find( 'label[for="' + jQuery( el ).prop( 'id' ) + '"]' ).addClass( 'nf-checked-label' );
            } else {
                jQuery( el ).removeClass( 'nf-checked' );
                jQuery( el ).parent().find( 'label[for="' + jQuery( el ).prop( 'id' ) + '"]' ).removeClass( 'nf-checked-label' );
                var i = selected.indexOf( value );
                if( -1 != i ){
                    selected.splice( i, 1 );
                } else if ( Array.isArray( selected ) ) {
                	var optionArray = selected[0].split( ',' );
                	var valueIndex = optionArray.indexOf( value );
                	if( -1 !== valueIndex) {
                		optionArray.splice( valueIndex, 1 );
	                }
                	selected = optionArray.join( ',' );
                }
            }

            // if ( 1 == model.get( 'show_other' ) ) {
            //     model.set( 'reRender', true );
            // }

            return _.clone( selected );
        }
    });

    return controller;
} );
define('controllers/fieldImageList',[], function() {
    var controller = Marionette.Object.extend( {
        initialize: function() {
            this.listenTo( nfRadio.channel( 'listimage' ), 'init:model', this.register );
            nfRadio.channel( 'listimage' ).reply( 'before:updateField', this.beforeUpdateField, this );
            nfRadio.channel( 'listimage' ).reply( 'get:calcValue', this.getCalcValue, this );
        },

        register: function( model ) {
            model.set( 'renderOptions', this.renderOptions );
            model.set( 'renderOtherText', this.renderOtherText );
            model.set( 'selected', [] );

            /*
             * When we init a model, we need to set our 'value' to the selected option's value.
             * This is the list equivalent of a 'default value'.
             */ 
            if ( 0 != model.get( 'image_options' ).length ) {
                var selected = _.filter( model.get( 'image_options' ), function( opt ) { return 1 == opt.selected } );
                selected = _.map( selected, function( opt ) { return opt.value } );
            }

            /*
            * This part is re-worked to take into account custom user-meta
            * values for fields.
             */
	        var savedVal = model.get( 'value' );
	        if( 'undefined' !== typeof savedVal && Array.isArray( savedVal ) ) {
		        model.set( 'value', savedVal );
	        } else if ( 'undefined' != typeof selected ) {
		        model.set( 'value', selected );
	        }
        },

        renderOptions: function() {
            var html = '';
            
            if ( '' == this.value || ( Array.isArray( this.value ) && 0 < this.value.length )
                || 0 < this.value.length ) {
                var valueFound = true;
            } else {
                var valueFound = false;
            }

            if (this.allow_multi_select === 1) {
                this.old_classname = 'list-checkbox';
                this.image_type = 'checkbox';
            } else {
                this.image_type = 'radio';
            }

            if(this.list_orientation === 'horizontal') {
                this.flex_direction = 'row';
            } else {
                this.flex_direction = 'column';
            }
            var that = this;

            var num_columns = parseInt(this.num_columns) || 1;
            var current_column = 1;
            var current_row = 1;
            
            _.each( this.image_options, function( image, index ) {
                if (!this.show_option_labels) {
                    image.label = '';
                }
                if( Array.isArray( this.value ) ) {
                	if( Array.isArray( this.value[ 0 ] ) && -1 !== _.indexOf( this.value[ 0 ], image.value ) ) {
                		valueFound = true;
	                }
                    else if( _.indexOf( this.value, image.value ) ) {
                        valueFound = true;
	                }
                }

                if ( image.value == this.value ) {
                    valueFound = true;
                }

                /*
                 * TODO: This is a bandaid fix for making sure that each option has a "visible" property.
                 * This should be moved to creation so that when an option is added, it has a visible property by default.
                 */
                if ( 'undefined' == typeof image.visible ) {
                    image.visible = true;
                }
                
                if(that.list_orientation === 'horizontal' && current_column <= num_columns) {
                    image.styles = "margin:auto;grid-column: " + current_column + "; grid-row = " + current_row;

                    if(current_column === num_columns) {
                        current_column = 1;
                        current_row += 1;
                    } else {
                        current_column += 1;
                    }
                }

                image.image_type = that.image_type; 
                image.fieldID = this.id;
                image.classes = this.classes;
                image.index = index;

                var selected = false;
				/*
				* This part has been re-worked to account for values passed in
				* via custom user-meta ( a la User Mgmt add-on)
				 */
	            if( Array.isArray( this.value ) && 0 < this.value.length ) {
	            	if ( -1 !== _.indexOf( this.value[ 0 ].split( ',' ), image.value )
		                || -1 !== _.indexOf( this.value, image.value ) ) {
			            selected = true;
	            	}
	            } else if ( ! _.isArray( this.value ) && image.value == this.value ) {
		            selected = true;
	            } else if ( ( 1 == image.selected && this.clean ) && ('undefined' === typeof this.value || '' === this.value)) {
		            selected = true;
	            }

	            image.selected = selected;
	            image.isSelected = selected;
	            image.required = this.required;
                var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-listimage-option' );
                html += template( image );
            }, this );

            if ( 1 == this.show_other ) {
                if ( 'nf-other' == this.value ) {
                    valueFound = false;
                }
                var data = {
                    fieldID: this.id,
                    classes: this.classes,
                    value: this.value,
                    currentValue: this.value,
                    renderOtherText: this.renderOtherText,
                    valueFound: valueFound
                };

                var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-listimage-other' );
                html += template( data );

            }

            return html;
        },

        renderOtherText: function() {
            if ( 'nf-other' == this.currentValue || ! this.valueFound ) {
                if ( 'nf-other' == this.currentValue ) {
                    this.currentValue = '';
                }
                var data = {
                    fieldID: this.fieldID,
                    classes: this.classes,
                    currentValue: this.currentValue
                };
                var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-listimage-other-text' );
                return template( data );
            }
        },

        getCalcValue: function( fieldModel ) {
			var calc_value = 0;
			var options = fieldModel.get( 'options' );
			if ( 0 != options.length ) {
				/*
				 * Check to see if this is a multi-select list.
				 */
				if ( 1 == parseInt( fieldModel.get( 'allow_multi_select' ) ) ) {
					/*
					 * We're using a multi-select, so we need to check out any selected options and add them together.
					 */
					_.each( fieldModel.get( 'value' ), function( val ) {
						var tmp_opt = _.find( options, function( opt ) { return opt.value == val } );
						calc_value += Number( tmp_opt.calc );
					} );
				} else {
					/*
					 * We are using a single select, so our selected option is in the 'value' attribute.
					 */
					var selected = _.find( options, function( opt ) { return fieldModel.get( 'value' ) == opt.value } );
					/*
					 * If we have a selcted value, use it.
					 */
					if ( 'undefined' !== typeof selected ) {
                        calc_value = selected.calc;
					}	
				}
			}
			return calc_value;
        },

        beforeUpdateField: function( el, model ) {

            if(model.get('allow_multi_select') !== 1) {
                var selected = jQuery( el ).val();
                var options = model.get('image_options');
                _.each(options, function(option, index) {
                    if(option.value === selected) {
                        option.isSelected = true;
                        option.selected = true;
                    } else {
                        option.isSelected = false;
                        option.selected = false;
                    }
                    if(!option.isSelected) {
                        option.selected = false;
                        jQuery("#nf-field-" + option.fieldID + "-" + index).removeClass('nf-checked');
                        jQuery("#nf-label-field-" + option.fieldID + "-" + index).removeClass('nf-checked-label');
                    } else {
                        jQuery("#nf-field-" + option.fieldID + "-" + index).addClass('nf-checked');
                        jQuery("#nf-label-field-" + option.fieldID + "-" + index).addClass('nf-checked-label');
                    }
                });
            } else {
                var selected = model.get( 'value' ) || [];
                if ( typeof selected == 'string' ) selected = [ selected ];
                var value = jQuery( el ).val();
                var checked = jQuery( el ).prop( 'checked' );
                if ( checked ) {
                    selected.push( value );
                    jQuery( el ).addClass( 'nf-checked' );
                    jQuery( el ).parent().find( 'label[for="' + jQuery( el ).prop( 'id' ) + '"]' ).addClass( 'nf-checked-label' );
                } else {
                    jQuery( el ).removeClass( 'nf-checked' );
                    jQuery( el ).parent().find( 'label[for="' + jQuery( el ).prop( 'id' ) + '"]' ).removeClass( 'nf-checked-label' );
                    var i = selected.indexOf( value );
                    if( -1 != i ){
                        selected.splice( i, 1 );
                    } else if ( Array.isArray( selected ) ) {
                        var optionArray = selected[0].split( ',' );
                        var valueIndex = optionArray.indexOf( value );
                        if( -1 !== valueIndex) {
                            optionArray.splice( valueIndex, 1 );
                        }
                        selected = optionArray.join( ',' );
                    }
                }
            }

            return _.clone( selected );
        }
    });

    return controller;
} );
define('controllers/fieldRadio',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			this.listenTo( nfRadio.channel( 'listradio' ), 'change:modelValue', this.changeModelValue );
			this.listenTo( nfRadio.channel( 'listradio' ), 'init:model', this.register );
			nfRadio.channel( 'listradio' ).reply( 'get:calcValue', this.getCalcValue, this );
			
			this.listenTo( nfRadio.channel( 'listradio' ), 'change:field', this.updateCheckedClass, this );
		},

		register: function( model ) {
			model.set( 'renderOptions', this.renderOptions );
			model.set( 'renderOtherText', this.renderOtherText );
			/*
			 * When we init a model, we need to set our 'value' to the selected option's value.
			 * This is the list equivalent of a 'default value'.
			 */ 
			if ( 0 != model.get( 'options' ).length ) {
				/*
				 * Check to see if we have a selected value.
				 */
				var selected = _.find( model.get( 'options' ), function( opt ) { return 1 == opt.selected } );

				if ( 'undefined' != typeof selected ) {
					model.set( 'value', selected.value );
				}
			}
		},

		changeModelValue: function( model ) {
			if ( 1 == model.get( 'show_other' ) ) {
				// model.set( 'reRender', true );
				model.trigger( 'reRender');
			}
		},

		renderOptions: function() {
			var html = '';
			if ( '' == this.value ) {
				var valueFound = true;
			} else {
				var valueFound = false;
			}
			
			_.each( this.options, function( option, index ) {
				if ( option.value == this.value ) {
					valueFound = true;
				}

				/*
                 * TODO: This is a bandaid fix for making sure that each option has a "visible" property.
                 * This should be moved to creation so that when an option is added, it has a visible property by default.
                 */
                if ( 'undefined' == typeof option.visible ) {
                    option.visible = true;
                }

                option.selected = false;
				option.fieldID = this.id;
				option.classes = this.classes;
				option.currentValue = this.value;
				option.index = index;
				option.required = this.required;

				/*
				 * If we haven't edited this field yet, use the default checked
				 */
				if ( this.clean && 1 == this.selected ) {
					option.selected = true;
				} else if ( this.value == option.value ) {
					option.selected = true;
				} else {
					option.selected = false;
				}

				var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-listradio-option' );

				html += template( option );
			}, this );

			if ( 1 == this.show_other ) {
				if ( 'nf-other' == this.value ) {
					valueFound = false;
				}
				var data = {
					fieldID: this.id,
					classes: this.classes,
					currentValue: this.value,
					renderOtherText: this.renderOtherText,
					valueFound: valueFound
				};
				var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-listradio-other' );
				html += template( data );
			}

			return html;
		},

		renderOtherText: function() {
			if ( 'nf-other' == this.currentValue || ! this.valueFound ) {
				if ( 'nf-other' == this.currentValue ) {
					this.currentValue = '';
				}
				var data = {
					fieldID: this.fieldID,
					classes: this.classes,
					currentValue: this.currentValue
				};
				var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-listradio-other-text' );
				return template( data );
			}
		},

		getCalcValue: function( fieldModel ) {
			
            /*
             * Default to 0, in case we have no selection.
             */
            var calc_value = 0;
            
			if ( 0 != fieldModel.get( 'options' ).length ) {
				/*
				 * Check to see if we have a selected value.
				 */
				var selected = _.find( fieldModel.get( 'options' ), function( opt ) { return fieldModel.get( 'value' ) == opt.value } );
				if ( 'undefined' !== typeof selected ) {
                    calc_value = selected.calc;
				}

			}
			return calc_value;
		},

		updateCheckedClass: function( el, model ) {
			jQuery( '[name="' + jQuery( el ).attr( 'name' ) + '"]' ).removeClass( 'nf-checked' );
			jQuery( el ).closest( 'ul' ).find( 'label' ).removeClass( 'nf-checked-label' );
			jQuery( el ).addClass( 'nf-checked' );
			jQuery( el ).closest( 'li' ).find( 'label[for="' + jQuery( el ).prop( 'id' ) + '"]' ).addClass( 'nf-checked-label' );


		}

	});

	return controller;
} );
define('controllers/fieldNumber',[], function() {
    var controller = Marionette.Object.extend( {
        initialize: function() {
            this.listenTo( nfRadio.channel( 'number' ), 'init:model', this.maybeMinDefault );
            this.listenTo( nfRadio.channel( 'number' ), 'keyup:field', this.validateMinMax );
        },

        maybeMinDefault: function( model ) {

            if( '' == model.get( 'value' ) && '' == model.get( 'placeholder' ) ){
                var min = model.get( 'num_min' );
                model.set( 'placeholder', min );
            }
        },

        validateMinMax: function( el, model ) {
            var $el = jQuery( el );
            var value = parseFloat( $el.val() );
            var min = $el.attr( 'min' );
            var max = $el.attr( 'max' );
            var step = parseFloat( $el.attr( 'step' ) );

            if( min && value < min ){
                var fieldModel = nfRadio.channel( 'fields' ).request( 'get:field', model.get( 'id' ) );
                var formModel  = nfRadio.channel( 'app'    ).request( 'get:form',  fieldModel.get( 'formID' ) );
                nfRadio.channel( 'fields' ).request( 'add:error', model.get( 'id' ), 'number-min', formModel.get( 'settings' ).fieldNumberNumMinError );
            } else {
                nfRadio.channel( 'fields' ).request( 'remove:error', model.get( 'id' ), 'number-min' );
            }

            if ( max && value > max ){
                var fieldModel = nfRadio.channel( 'fields' ).request( 'get:field', model.get( 'id' ) );
                var formModel  = nfRadio.channel( 'app'    ).request( 'get:form',  fieldModel.get( 'formID' ) );
                nfRadio.channel( 'fields' ).request( 'add:error', model.get( 'id' ), 'number-max', formModel.get( 'settings' ).fieldNumberNumMaxError );
            } else {
                nfRadio.channel( 'fields' ).request( 'remove:error', model.get( 'id' ), 'number-max' );
            }

            var testValue = Math.round( parseFloat( value ) * 1000000000 );
            var testStep = Math.round( parseFloat( step ) * 1000000000  );

            if( value && 0 !== testValue % testStep ){
                var fieldModel = nfRadio.channel( 'fields' ).request( 'get:field', model.get( 'id' ) );
                var formModel  = nfRadio.channel( 'app'    ).request( 'get:form',  fieldModel.get( 'formID' ) );
                nfRadio.channel( 'fields' ).request( 'add:error', model.get( 'id' ), 'number-step', formModel.get( 'settings' ).fieldNumberIncrementBy + step );
            } else {
                nfRadio.channel( 'fields' ).request( 'remove:error', model.get( 'id' ), 'number-step' );
            }
        }

    });

    return controller;
} );
define( 'controllers/mirrorField',[], function() {
	var radioChannel = nfRadio.channel( 'fields' );

	var controller = Marionette.Object.extend( {
		listeningModel: '',

		initialize: function() {
			this.listenTo( radioChannel, 'init:model', this.registerMirror );
		},

		registerMirror: function( model ) {
			if ( model.get( 'mirror_field' ) ) {
				this.listeningModel = model;
				var targetID = model.get( 'mirror_field' );
				this.listenTo( nfRadio.channel( 'field-' + targetID ), 'change:modelValue', this.changeValue );
			}
		},

		changeValue: function( targetModel ) {
			this.listeningModel.set( 'value', targetModel.get( 'value' ) );
			// this.listeningModel.set( 'reRender', true );
			this.listeningModel.trigger( 'reRender' );
		}
	});

	return controller;
} );
define( 'controllers/confirmField',[], function() {
	var radioChannel = nfRadio.channel( 'fields' );
	var errorID = 'confirm-mismatch';

	var controller = Marionette.Object.extend( {

		initialize: function() {
			this.listenTo( radioChannel, 'init:model', this.registerConfirm );
			this.listenTo( radioChannel, 'keyup:field', this.confirmKeyup );
		},

		registerConfirm: function( confirmModel ) {
			if ( ! confirmModel.get( 'confirm_field' ) ) return;

			this.listenTo( nfRadio.channel( 'form' ), 'loaded', function( formModal ){
				this.registerConfirmListeners( confirmModel );
			});
		},

		registerConfirmListeners: function( confirmModel ) {
			
			var targetModel = nfRadio.channel( 'form-' + confirmModel.get( 'formID' ) ).request( 'get:fieldByKey', confirmModel.get( 'confirm_field' ) );

			//TODO: Add better handling for password confirm fields on the front end.
			if( 'undefined' == typeof targetModel ) return;

			targetModel.set( 'confirm_with', confirmModel.get( 'id' ) );
			this.listenTo( nfRadio.channel( 'field-' + targetModel.get( 'id' ) ), 'change:modelValue', this.changeValue );
			this.listenTo( nfRadio.channel( 'field-' + confirmModel.get( 'id' ) ), 'change:modelValue', this.changeValue );
		},

		changeValue: function( model ) {
			if ( 'undefined' == typeof model.get( 'confirm_with' ) ) {
				var confirmModel = model;
				var targetModel = nfRadio.channel( 'form-' + model.get( 'formID' ) ).request( 'get:fieldByKey', confirmModel.get( 'confirm_field' ) );
			} else {
				var targetModel = model;
				var confirmModel = radioChannel.request( 'get:field', targetModel.get( 'confirm_with' ) );
			}
			var targetID = targetModel.get( 'id' );
			var confirmID = confirmModel.get( 'id' );

			if ( '' == confirmModel.get( 'value' ) || confirmModel.get( 'value' ) == targetModel.get( 'value' ) ) {
				nfRadio.channel( 'fields' ).request( 'remove:error', confirmID, errorID );
			} else {
				var fieldModel = nfRadio.channel( 'fields' ).request( 'get:field', confirmID );
				var formModel  = nfRadio.channel( 'app'    ).request( 'get:form',  fieldModel.get( 'formID' ) );
				nfRadio.channel( 'fields' ).request( 'add:error', confirmID, errorID, formModel.get( 'settings' ).confirmFieldErrorMsg );
			}
		},
		
		confirmKeyup: function( el, model, keyCode ) {

			var currentValue = jQuery( el ).val();
			if ( model.get( 'confirm_field' ) ) {
				var confirmModel = model;
				var confirmID = model.get( 'id' );
				var targetModel = nfRadio.channel( 'form-' + model.get( 'formID' ) ).request( 'get:fieldByKey', confirmModel.get( 'confirm_field' ) );
				var compareValue = targetModel.get( 'value' );
				var confirmValue = currentValue;
			} else if ( model.get( 'confirm_with' ) ) {
				var confirmModel = nfRadio.channel( 'fields' ).request( 'get:field', model.get( 'confirm_with' ) );
				var confirmID = confirmModel.get( 'id' );
				var confirmValue = confirmModel.get( 'value' );
				var compareValue = confirmValue;
			}

			if ( 'undefined' !== typeof confirmModel ) {
				if ( '' == confirmValue ) {
					nfRadio.channel( 'fields' ).request( 'remove:error', confirmID, errorID );
				} else if ( currentValue == compareValue ) {
					nfRadio.channel( 'fields' ).request( 'remove:error', confirmID, errorID );
				} else {
					var fieldModel = nfRadio.channel( 'fields' ).request( 'get:field', confirmID );
					var formModel  = nfRadio.channel( 'app'    ).request( 'get:form',  fieldModel.get( 'formID' ) );
					nfRadio.channel( 'fields' ).request( 'add:error', confirmID, errorID, formModel.get( 'settings' ).confirmFieldErrorMsg );
				}
			}
		}
	});

	return controller;
} );
define('controllers/updateFieldModel',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			nfRadio.channel( 'nfAdmin' ).reply( 'update:field', this.updateField );
		},

		updateField: function( model, value ) {
			if ( ! model.get( 'isUpdated' ) ) {
				model.set( 'value', value );
				model.set( 'isUpdated', true );
				/*
				 * If we're working with an array, it won't trigger a change event on the value attribute.
				 * Instead, we have to manually trigger a change event.
				 */ 
				if ( _.isArray( value ) ) {
					model.trigger( 'change:value', model );
				}
			}
		}
	});

	return controller;
} );
define('controllers/submitButton',['controllers/submitButton'], function( submitButton ) {
	var controller = Marionette.Object.extend( {
		bound: {},

		initialize: function() {
			this.listenTo( nfRadio.channel( 'submit' ), 'init:model', this.registerHandlers );
		},

		registerHandlers: function( fieldModel ) {
			if ( 'undefined' != typeof this.bound[ fieldModel.get( 'id' ) ] ) {
				return false;
			}

			this.listenTo( nfRadio.channel( 'field-' + fieldModel.get( 'id' ) ), 'click:field', this.click, this );
			/*
			 * Register an interest in the 'before:submit' event of our form.
			 */
			fieldModel.listenTo( nfRadio.channel( 'form-' + fieldModel.get( 'formID' ) ), 'before:submit', this.beforeSubmit, fieldModel );
			fieldModel.listenTo( nfRadio.channel( 'form-' + fieldModel.get( 'formID' ) ), 'submit:failed', this.resetLabel, fieldModel );
			fieldModel.listenTo( nfRadio.channel( 'form-' + fieldModel.get( 'formID' ) ), 'submit:response', this.resetLabel, fieldModel );
			fieldModel.listenTo( nfRadio.channel( 'form-' + fieldModel.get( 'formID' ) ), 'enable:submit', this.maybeEnable, fieldModel );
			fieldModel.listenTo( nfRadio.channel( 'form-' + fieldModel.get( 'formID' ) ), 'disable:submit', this.maybeDisable, fieldModel );
			fieldModel.listenTo( nfRadio.channel( 'form-' + fieldModel.get( 'formID' ) ), 'processingLabel', this.processingLabel, fieldModel );

			fieldModel.listenTo( nfRadio.channel( 'fields' ), 'add:error', this.maybeDisable, fieldModel );
			fieldModel.listenTo( nfRadio.channel( 'fields' ), 'remove:error', this.maybeEnable, fieldModel );
			
			this.bound[ fieldModel.get( 'id') ] = true;
		},

		click: function( e, fieldModel ) {
			var formModel = nfRadio.channel( 'app' ).request( 'get:form', fieldModel.get( 'formID' ) );
			nfRadio.channel( 'form-' + fieldModel.get( 'formID' ) ).request( 'submit', formModel );
		},

		beforeSubmit: function() {
			this.set( 'disabled', true );
			nfRadio.channel( 'form-' + this.get( 'formID' ) ).trigger( 'processingLabel', this );
		},

		maybeDisable: function( fieldModel ) {

			if( 'undefined' != typeof fieldModel && fieldModel.get( 'formID' ) != this.get( 'formID' ) ) return;

			this.set( 'disabled', true );
			this.trigger( 'reRender' );
		},

		maybeEnable: function( fieldModel ) {
			/*
			 * If the field reporting the error is not on the same form as the submit button, return false;
			 */
			if ( 'undefined' != typeof fieldModel && fieldModel.get( 'formID' ) != this.get( 'formID' ) ) {
				return false;
			}
			
			var formModel = nfRadio.channel( 'app' ).request( 'get:form', this.get( 'formID' ) );
			if ( 0 == _.size( formModel.get( 'fieldErrors' ) ) ) {
				this.set( 'disabled', false );
				this.trigger( 'reRender' );
			}
		},

		processingLabel: function() {
			if ( this.get( 'label' ) == this.get( 'processing_label' ) ) return false;

			this.set( 'oldLabel', this.get( 'label' ) );
			this.set( 'label', this.get( 'processing_label' ) );
			this.trigger( 'reRender' );
		},

		resetLabel: function( response ) {
			if ( 'undefined' != typeof response.errors &&
				 'undefined' != typeof response.errors.nonce &&
				 _.size( response.errors.nonce ) > 0 ) {
				if( 'undefined' != typeof response.errors.nonce.new_nonce && 'undefined' != typeof response.errors.nonce.nonce_ts ) {
					// Do not reset label for nonce errors, which will re-submit the form.
					return;
				}
			}
			if ( 'undefined' != typeof this.get( 'oldLabel' ) ) {
				this.set( 'label', this.get( 'oldLabel' ) );
			}
			this.set( 'disabled', false );
			this.trigger( 'reRender' );
		}

	});

	return controller;
} );
define('controllers/submitDebug',[], function() {
    var controller = Marionette.Object.extend( {
        initialize: function() {
            this.listenTo( nfRadio.channel( 'forms' ), 'submit:response', this.submitDebug );
        },

        submitDebug: function( response, textStatus, jqXHR, formID ) {

            if( 'undefined' == typeof response.debug ) return;

            /* Form Debug Messages */
            if( 'undefined' != typeof response.debug.form ) {
                var debugMessages = document.createElement( 'span' );
                _.each(response.debug.form, function (message, index) {
                    var messageText = document.createTextNode( message );
                    debugMessages.appendChild( messageText );
                    debugMessages.appendChild(
                        document.createElement( 'br' )
                    );
                });
                jQuery('.nf-debug-msg').html( debugMessages );
            }

            /* Console Debug Messages */
            if( 'undefined' != typeof response.debug.console ) {
                var style = '';
                console.log( '%c%s', style, 'NINJA SUPPORT' );
                _.each(response.debug.console, function (message, index) {
                    console.log( message );
                });
                console.log( '%c%s', style, 'END NINJA SUPPORT' );
            }
        }

    });

    return controller;
} );

define('controllers/getFormErrors',[], function() {
	var radioChannel = nfRadio.channel( 'fields' );
	var controller = Marionette.Object.extend( {
		initialize: function( model ) {
			nfRadio.channel( 'form' ).reply( 'get:errors', this.getFormErrors );
		},

		getFormErrors: function( formID ) {
			var formModel = nfRadio.channel( 'app' ).request( 'get:form', formID );
			var errors = false;
			
			if ( formModel ) {
				/*
				 * Check to see if we have any errors on our form model.
				 */
				if ( 0 !== formModel.get( 'errors' ).length ) {
					_.each( formModel.get( 'errors' ).models, function( error ) {
						errors = errors || {};
						errors[ error.get( 'id' ) ] = error.get( 'msg' );
					} );						
				}

				_.each( formModel.get( 'fields' ).models, function( field ) {
					if ( field.get( 'type' ) != 'submit' && field.get( 'errors' ).length > 0 ) {
						errors = errors || {};
						errors[ field.get( 'id' ) ] = field.get( 'errors' );
					}
				} );
			}
			return errors;
		},
	});

	return controller;
} );
define('controllers/validateRequired',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			this.listenTo( nfRadio.channel( 'fields' ), 'blur:field', this.validateRequired );
			this.listenTo( nfRadio.channel( 'fields' ), 'change:field', this.validateRequired );
			this.listenTo( nfRadio.channel( 'fields' ), 'keyup:field', this.validateKeyup );

			this.listenTo( nfRadio.channel( 'fields' ), 'change:modelValue', this.validateModelData );
			this.listenTo( nfRadio.channel( 'submit' ), 'validate:field', this.validateModelData );
		},
		
		validateKeyup: function( el, model, keyCode ) {
			if ( 1 != model.get( 'required' ) ) {
				return false;
			}

			if ( ! model.get( 'clean' ) ) {
				this.validateRequired( el, model );
			}
		},

		validateRequired: function( el, model ) {
			if ( 1 != model.get( 'required' ) || ! model.get( 'visible' ) ) {
				return false;
			}

			var currentValue = jQuery( el ).val();
			var customReqValidation = nfRadio.channel( model.get( 'type' ) ).request( 'validate:required', el, model );
			var defaultReqValidation = true;

			var maskPlaceholder = model.get( 'mask' );
			if ( maskPlaceholder ) {
				maskPlaceholder = maskPlaceholder.replace( /9/g, '_' );
				maskPlaceholder = maskPlaceholder.replace( /a/g, '_' );
				maskPlaceholder = maskPlaceholder.replace( /\*/g, '_' );
			}

            // If the field has a mask...
            // AND that mask is equal to the current value...            
            if ( maskPlaceholder && currentValue === maskPlaceholder ) {
                // If we have a pre-existing error...
                if ( 0 < model.get( 'errors' ).length ) {
                    // Persist that error.
                    defaultReqValidation = false;
                }
            }
            // If our value is an empty string...
            if ( ! jQuery.trim( currentValue ) ) {
                // Throw an error.
                defaultReqValidation = false;
            }

			if ( 'undefined' !== typeof customReqValidation ) {
				var valid = customReqValidation;
			} else {
				var valid = defaultReqValidation;
			}

			this.maybeError( valid, model );
		},

		validateModelData: function( model ) {

			if ( 1 != model.get( 'required' ) || ! model.get( 'visible' ) || model.get( 'clean' ) ) {
				return false;
			}

			/*
			 * If we already have a required error on this model, return false
			 */
			if ( model.get( 'errors' ).get( 'required-error' ) ) {
				return false;
			}

			currentValue = model.get( 'value' );

			var defaultReqValidation = true;

			if ( ! jQuery.trim( currentValue ) ) {
				defaultReqValidation = false;
			}

			var customReqValidation = nfRadio.channel( model.get( 'type' ) ).request( 'validate:modelData', model );
			if ( 'undefined' !== typeof customReqValidation ) {
				var valid = customReqValidation;
			} else {
				var valid = defaultReqValidation;
			}

			this.maybeError( valid, model );

		},

		maybeError: function( valid, model ) {
			if ( ! valid ) {

				var formModel  = nfRadio.channel( 'form-' + model.get( 'formID' ) ).request( 'get:form' );

				if( 'undefined' != typeof formModel ) {
					nfRadio.channel('fields').request('add:error', model.get('id'), 'required-error', formModel.get('settings').validateRequiredField);
				}
			} else {
				nfRadio.channel( 'fields' ).request( 'remove:error', model.get( 'id' ), 'required-error' );
			}			
		}
	});

	return controller;
} );

define('controllers/submitError',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			this.listenTo( nfRadio.channel( 'forms' ), 'submit:response', this.submitErrors );
		},

		submitErrors: function( response, textStatus, jqXHR, formID ) {

			// Check for nonce error.
			if ( _.size( response.errors.nonce ) > 0 ) {
				if( 'undefined' != typeof response.errors.nonce.new_nonce && 'undefined' != typeof response.errors.nonce.nonce_ts ) {
					// Update nonce from response.
					nfFrontEnd.ajaxNonce = response.errors.nonce.new_nonce;
					nfFrontEnd.nonce_ts = response.errors.nonce.nonce_ts;
					// Re-submit form.
					var formModel = nfRadio.channel( 'app' ).request( 'get:form', formID );
					nfRadio.channel( 'form-' + formID ).request( 'submit', formModel );
				}
			}

			if ( _.size( response.errors.fields ) > 0 ) {
				_.each( response.errors.fields, function( data, fieldID ) {
                    if ( typeof( data ) === 'object' ) {
                        nfRadio.channel( 'fields' ).request( 'add:error', fieldID, data.slug, data.message );
                    } else {
                        nfRadio.channel( 'fields' ).request( 'add:error', fieldID, 'required-error', data );
                    }
				} );
			}

			if ( _.size( response.errors.form ) > 0 ) {
				_.each( response.errors.form, function( msg, errorID ) {
					nfRadio.channel( 'form-' + formID ).request( 'remove:error', errorID );
					nfRadio.channel( 'form-' + formID ).request( 'add:error', errorID, msg );
				} );
			}

			if ( 'undefined' != typeof response.errors.last ) {
				if( 'undefined' != typeof response.errors.last.message ) {
					var style = 'background: rgba( 255, 207, 115, .5 ); color: #FFA700; display: block;';
					console.log( '%c NINJA FORMS SUPPORT: SERVER ERROR', style );
					console.log( response.errors.last.message );
					console.log( '%c END SERVER ERROR MESSAGE', style );
				}
			}

			/**
			 * TODO: This needs to be re-worked for backbone. It's not dynamic enough.
			 */
			/*
			 * Re-show any hidden fields during a form submission re-start.
			 */
			jQuery( '#nf-form-' + formID + '-cont .nf-field-container' ).show();
		}

	});

	return controller;
} );

define('controllers/actionRedirect',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			this.listenTo( nfRadio.channel( 'forms' ), 'submit:response', this.actionRedirect );
		},

		actionRedirect: function( response ) {

			if ( 'undefined' != typeof response.data.halt && 'undefined' != typeof response.data.halt.redirect && '' != response.data.halt.redirect ) {
				window.location = response.data.halt.redirect;
			}

			if ( _.size( response.errors ) == 0 && 'undefined' != typeof response.data.actions ) {

				if ( 'undefined' != typeof response.data.actions.redirect && '' != response.data.actions.redirect ) {
					window.location = response.data.actions.redirect;
				}
			}
		}

	});

	return controller;
} );
define('controllers/actionSuccess',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			this.listenTo( nfRadio.channel( 'forms' ), 'submit:response', this.actionSubmit );
		},

		actionSubmit: function( response ) {
			if ( _.size( response.errors ) == 0 && 'undefined' != typeof response.data.actions ) {
				if ( 'undefined' != typeof response.data.actions.success_message && '' != response.data.actions.success_message ) {
					var form_id = response.data.form_id;
					var success_message = jQuery( '#nf-form-' + form_id + '-cont .nf-response-msg' );
					
					success_message.html( response.data.actions.success_message ).show();
					
					//Let's check if the success message is already fully visible in the viewport without scrolling
					var top_of_success_message = success_message.offset().top;
					var bottom_of_success_message = success_message.offset().top + success_message.outerHeight();
					var bottom_of_screen = jQuery(window).scrollTop() + jQuery(window).height();
					var top_of_screen = jQuery(window).scrollTop();

					var the_element_is_visible = ((bottom_of_screen > bottom_of_success_message) && (top_of_screen < top_of_success_message));

					if(!the_element_is_visible){
						//The element isn't visible, so let's scroll to the success message as in the previous release, but with a short animation
						jQuery('html, body').animate({
							scrollTop: ( success_message.offset().top - 50 )
						}, 300 );
					}	
				}
			}
		}

	});

	return controller;
} );

define('controllers/fieldSelect',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {

			this.listenTo( nfRadio.channel( 'fields' ), 'init:model', function( model ){
				if( 'list' == model.get( 'parentType' ) ) this.register( model );
			}, this );

			nfRadio.channel( 'listselect' ).reply( 'get:calcValue', this.getCalcValue, this );
			nfRadio.channel( 'listmultiselect' ).reply( 'get:calcValue', this.getCalcValue, this );
		},

		register: function( model ) {
			model.set( 'renderOptions', this.renderOptions );
			model.set( 'renderOtherAttributes', this.renderOtherAttributes );
			/*
			 * When we init a model, we need to set our 'value' to the selected option's value.
			 * This is the list equivalent of a 'default value'.
			 */ 
			if ( 0 != model.get( 'options' ).length ) {
				//Check to see if there is a value set for the field
				var savedVal = model.get( 'value' );

				/*
				 * Check to see if this is a multi-select list.
				 */
				if ( 'listmultiselect' == model.get( 'type' ) ) {
					/*
					 * We're using a multi-select, so we need to check out any selected options and add them together.
					 */
					var selected = _.filter( model.get( 'options' ), function( opt ) { return 1 == opt.selected } );
					selected = _.map( selected, function( opt ) { return opt.value } );
					var value = selected;
				} else if ( 'listradio' !== model.get( 'type' ) ) {
					/*
					 * Check to see if we have a selected value.
					 */
					var selected = _.find( model.get( 'options' ), function( opt ) { return 1 == opt.selected } );
					/*
					 * We don't have a selected value, so use our first option.
					 */
					if ( 'undefined' == typeof selected ) {
						selected = _.first( model.get( 'options' ) );
					}

					if ( 'undefined' != typeof selected
						&& 'undefined' != typeof selected.value ) {
						var value = selected.value;
					} else if ( 'undefined' != typeof selected ) {
						var value = selected.label;
					}	
				}

				/*
	            * This part is re-worked to take into account custom user-meta
	            * values for fields.
	             */
				if( 'undefined' !== typeof savedVal && '' !== savedVal
					&& Array.isArray( savedVal ) ) {
					model.set( 'value', savedVal );
				} else if ( 'undefined' != typeof selected ) {
					model.set( 'value', value );
				}
			}
		},

		renderOptions: function() {
			var html = '';

			_.each( this.options, function( option ) {
				/*
				* This part has been re-worked to account for values passed in
				* via custom user-meta ( a la User Mgmt add-on)
				 */
				if ( _.isArray( this.value ) ) {
                    // If we have a multiselect list...
                    // AND it has selected values...
					if( 'listmultiselect' === this.type && 0 < this.value.length &&
						-1 != _.indexOf( this.value[ 0 ].split( ',' ), option.value ) ) {
						var selected = true;
					} else if( -1 != _.indexOf( this.value, option.value ) ) {
						var selected = true;
					}
				} else if ( ! _.isArray( this.value ) && option.value == this.value ) {
					var selected = true;
				} else if ( ( 1 == option.selected && this.clean )
					&& 'undefined' === typeof this.value ) {
					var selected = true;
				} else {
					var selected = false;
				}

				/*
                 * TODO: This is a bandaid fix for making sure that each option has a "visible" property.
                 * This should be moved to creation so that when an option is added, it has a visible property by default.
                 */
                if ( 'undefined' == typeof option.visible ) {
                    option.visible = true;
                }

				option.selected = selected;
				option.fieldID = this.id;
				option.classes = this.classes;
				option.currentValue = this.value;

				var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-listselect-option' );
				html += template( option );
			}, this );

			return html;
		},

		renderOtherAttributes: function() {
			var otherAttributes = '';

			if( 'listmultiselect' == this.type ){
				otherAttributes = otherAttributes + ' multiple';

				var multiSize = this.multi_size || 5;
				otherAttributes = otherAttributes + ' size="' + multiSize + '"';
			}

			return otherAttributes;
		},

		getCalcValue: function( fieldModel ) {
			var calc_value = 0;
			var options = fieldModel.get( 'options' );
			if ( 0 != options.length ) {
				/*
				 * Check to see if this is a multi-select list.
				 */
				if ( 'listmultiselect' == fieldModel.get( 'type' ) ) {
					/*
					 * We're using a multi-select, so we need to check out any selected options and add them together.
					 */
					_.each( fieldModel.get( 'value' ), function( val ) {
						var tmp_opt = _.find( options, function( opt ) { return opt.value == val } );
						calc_value += Number( tmp_opt.calc );
					} );
				} else {
					/*
					 * We are using a single select, so our selected option is in the 'value' attribute.
					 */
					var selected = _.find( options, function( opt ) { return fieldModel.get( 'value' ) == opt.value } );
					/*
					 * We don't have a selected value, so use our first option.
					 */
					if ( 'undefined' == typeof selected ) {
						selected = fieldModel.get( 'options' )[0];
					}		
					calc_value  = selected.calc;			
				}
			}
			return calc_value;
		}

	});

	return controller;
} );

define('controllers/coreSubmitResponse',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			this.listenTo( nfRadio.channel( 'forms' ), 'submit:response', this.actionSubmit );
		},

		actionSubmit: function( response ) {
			var formModel = nfRadio.channel( 'app' ).request( 'get:form', response.data.form_id );
			/*
			 * If we have errors, don't hide or clear.
			 */
			if ( 0 != _.size( response.errors ) ) {
				return false;
			}

			if ( 1 == response.data.settings.clear_complete ) {
				// nfRadio.channel( 'form-' + response.data.form_id ).trigger( 'reset' );
				formModel.get( 'fields' ).reset( formModel.get( 'loadedFields' ) );
                if ( 1 != response.data.settings.hide_complete ) {
                    nfRadio.channel( 'captcha' ).trigger( 'reset' );
                }
			}

			if ( 1 == response.data.settings.hide_complete ) {
				/**
				 * TODO: This needs to be re-worked for backbone. It's not dynamic enough.
				 */
				formModel.trigger( 'hide' );
				// jQuery( '.nf-fields' ).hide();
				// jQuery( '.nf-form-title' ).hide();
			}
		}

	});

	return controller;
} );
define('controllers/fieldProduct',[], function() {
    var controller = Marionette.Object.extend( {
        initialize: function() {
            this.listenTo( nfRadio.channel( 'product' ), 'init:model', this.register );
            nfRadio.channel( 'product' ).reply( 'get:calcValue', this.getCalcValue, this );
        },

        register: function( model ) {
            model.set( 'renderProductQuantity', this.renderProductQuantity );
            model.set( 'renderProduct', this.renderProduct );
            model.set( 'renderOptions', this.renderOptions );
        },

        renderProduct: function(){
            switch( this.product_type ) {
                case 'user':
                    var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-textbox' );
                    return template( this );
                    break;
                case 'hidden':
                    var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-hidden' );
                    return template( this );
                    break;

                case 'dropdown':
                    var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-product-dropdown' );
                    return template( this );
                    break;
                default:
                    var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-product-single' );
                    return template( this );
            }
        },

        renderProductQuantity: function(){
            if ( 1 == this.product_use_quantity ) {
                var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-product-quantity' );
                return template( this );
            }
        },

        renderOptions: function() {
            var that = this;
            var html = '';
            _.each( this.options, function( option ) {
                if ( 1 == option.selected ) {
                    var selected = true;
                } else {
                    var selected = false;
                }

                option.selected = selected;
                option.fieldID = that.id;
                option.classes = that.classes;
                option.currentValue = that.value;

                var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-product-' + that.product_type + '-option' );
                html += template( option );
            } );

            return html;
        },

        getCalcValue: function( fieldModel ) {

            var product_price = fieldModel.get( 'product_price' );
            var product_quantity = fieldModel.get( 'value' );

            return product_price * product_quantity;
        }
    });

    return controller;
} );

define('controllers/fieldTotal',[], function() {
    var controller = Marionette.Object.extend( {

        totalModel: {},

        productTotals: {},

        initialize: function() {
            this.listenTo( nfRadio.channel( 'total' ), 'init:model', this.register );
            this.listenTo( nfRadio.channel( 'shipping' ), 'init:model', this.registerShipping );
        },

        register: function( totalModel ){
            this.totalModel = totalModel;

            var formID = totalModel.get( 'formID' );
            this.listenTo( nfRadio.channel( 'form-' + formID ), 'loaded', this.onFormLoaded );

            this.listenTo( nfRadio.channel( 'product' ), 'change:modelValue', this.onChangeProduct );
            this.listenTo( nfRadio.channel( 'quantity' ), 'change:modelValue', this.onChangeQuantity );
        },

        registerShipping: function( shippingModel ){
            this.shippingCost = shippingModel.get( 'shipping_cost' );
        },

        onFormLoaded: function( formModel ){

            var fieldModels = formModel.get( 'fields' ).models;

            var productFields = {};
            var quantityFields = {};

            for( var model in fieldModels ){

                var field = fieldModels[ model ];
                var fieldID = field.get( 'id' );

                // TODO: Maybe use switch
                if( 'product' == field.get( 'type' ) ){
                    productFields[ fieldID ] = field;
                } else if( 'quantity' == field.get( 'type' ) ){
                    var productID = field.get( 'product_assignment' );
                    quantityFields[ productID ] = field;
                }
            }

            for( var productID in productFields ){

                var product = productFields[ productID ];

                var productPrice = Number( product.get( 'product_price' ) );

                if( quantityFields[ productID ] ){

                    productPrice *= quantityFields[ productID ].get( 'value' );

                } else if( 1 == product.get( 'product_use_quantity' ) ){

                    productPrice *= product.get( 'value' );

                }

                this.productTotals[ productID ] = productPrice;
            }

            this.updateTotal();
        },

        onChangeProduct: function( model ){
            var productID = model.get( 'id' );
            var productPrice = Number( model.get( 'product_price' ) );
            var productQuantity = Number( model.get( 'value' ) );
            var newTotal = productQuantity * productPrice;
            this.productTotals[ productID ] = newTotal;

            this.updateTotal();
        },

        onChangeQuantity: function( model ){
            var productID = model.get( 'product_assignment' );
            var productField = nfRadio.channel( 'fields' ).request( 'get:field', productID );
            var productPrice = Number( productField.get( 'product_price' ) );

            var quantity = Number( model.get( 'value' ) );

            var newTotal = quantity * productPrice;

            this.productTotals[ productID ] = newTotal;

            this.updateTotal();
        },

        updateTotal: function(){

            var newTotal = 0;

            for( var product in this.productTotals ){
                newTotal += Number( this.productTotals[ product ] );
            }

            if( newTotal && this.shippingCost ) {
                // Only add shipping if there is a cost.
                newTotal += Number(this.shippingCost);
            }

            this.totalModel.set( 'value', newTotal.toFixed( 2 ) );
            this.totalModel.trigger( 'reRender' );
        }
    });

    return controller;
});
define('controllers/fieldQuantity',[], function() {
    var controller = Marionette.Object.extend( {

        initialize: function() {
            this.listenTo( nfRadio.channel( 'quantity' ), 'init:model', this.registerQuantity );
        },

        registerQuantity: function( model ){
            var productID = model.get( 'product_assignment' );
            var product = nfRadio.channel( 'fields' ).request( 'get:field', productID );

            if( product ) {
                product.set('product_use_quantity', 0);
            }
        },

    });

    return controller;
});
/**
 * Model that represents a calculation.
 *
 * On init, we trigger a radio message so that controllers can do things when a calc model inits.
 */
define( 'models/calcModel',[], function() {
	var model = Backbone.Model.extend( {
		initialize: function() {
			// Set our form id
			this.set( 'formID', this.collection.options.formModel.get( 'id' ) );
			// Set our initial fields object to empty. This will hold our key/value pairs.
			this.set( 'fields', {} );
			// Trigger a radio message to let controllers know we've inited this model.
			nfRadio.channel( 'calc' ).trigger( 'init:model', this );
			// When we change the value of this calculation, send out a radio message
			this.on( 'change:value', this.changeValue, this );
		},

		/**
		 * Trigger a radio message when a field present in our calculation changes
		 *
		 * The listener that triggers/calls this function is in controllers/calculations
		 * 
		 * @since  3.0
		 * @return void
		 */
		changeField: function( fieldModel ) {
			nfRadio.channel( 'calc' ).trigger( 'change:field', this, fieldModel );
		},

		changeCalc: function( targetCalcModel ) {
			nfRadio.channel( 'calc' ).trigger( 'change:calc', this, targetCalcModel );
		},

		changeValue: function() {
			nfRadio.channel( 'calc' ).trigger( 'change:value', this );
		}
	} );

	return model;
} );

define( 'models/calcCollection',['models/calcModel'], function( CalcModel ) {
	var collection = Backbone.Collection.extend( {
		model: CalcModel,
		comparator: 'order',

		initialize: function( models, options ) {
			this.options = options;
            _.each( models, function( model ) {
            	if( 'undefined' == typeof model.dec ) return;
                if ( '' === model.dec.toString().trim() ) model.dec = 2;
                model.dec = parseInt( model.dec );
            } );
			/*
			 * Respond to requests for our calc model
			 */
			nfRadio.channel( 'form-' + options.formModel.get( 'id' ) ).reply( 'get:calc', this.getCalc, this );
		},

		getCalc: function( key ) {
			return this.findWhere( { name: key } );
		}
	} );
	return collection;
} );
/**
 * Controller responsible for keeping up with calculations.
 */
define('controllers/calculations',['models/calcCollection'], function( CalcCollection ) {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			this.calcs = {};
			this.displayFields = {};
			// When our form initialises, check to see if there are any calculations that need to be tracked.
			this.listenTo( nfRadio.channel( 'form' ), 'loaded', this.registerCalcs );
            
            // When our collection gets reset, reset calculation tracking as well.
            this.listenTo( nfRadio.channel( 'fields' ), 'reset:collection', this.resetCalcs );

			// When a calc model is initialised, run a setup function.
			// this.listenTo( nfRadio.channel( 'calc' ), 'init:model', this.setupCalc );

			// When a field referenced by a calc model changes, update our calc.
			this.listenTo( nfRadio.channel( 'calc' ), 'change:field', this.changeField );

			// When a calculation referenced by a calc model changes, update our calc.
			this.listenTo( nfRadio.channel( 'calc' ), 'change:calc', this.changeCalc );

			/*
			 * Listen to our field model init for fields that want to display calc values.
			 * If that field has a calc merge tag, replace it with the default calc value.
			 */
			var that = this;
			_.each( nfFrontEnd.use_merge_tags.calculations, function( fieldType ) {
				that.listenTo( nfRadio.channel( 'fields-' + fieldType ), 'init:model', that.initDisplayField );
			} );
			
			// When we change our calc value, update any display fields.
			this.listenTo( nfRadio.channel( 'calc' ), 'change:value', this.updateDisplayFields );

			// Set an init variable so that we only call reRender on the display field on change, not on init.
			this.init = {};
		},
        
        /**
         * Passthrough function to reset tracking of calculations when the fieldCollection is reset.
         * 
         * @since 3.2
         * @param backbone.collection fieldCollection
         * @return void
         */
        resetCalcs: function( fieldCollection ) {
            if( 'undefined' != typeof( fieldCollection.options.formModel ) ) {
                this.registerCalcs( fieldCollection.options.formModel );  
            }
        },

		/**
		 * When our form loads, create a collection out of any calculations.
		 * 
		 * @since  3.0
		 * @param  backbone.model formModel
		 * @return void
		 */
		registerCalcs: function( formModel ) {
			var calcCollection = new CalcCollection( formModel.get( 'settings' ).calculations, { formModel: formModel } );
			this.calcs[ formModel.get( 'id' ) ] = calcCollection;
			var that = this;

			_.each( calcCollection.models, function( calcModel ) {
				/*
				 * We set a property on our init variable for the calc model we're looping over.
				 * This property is set to true so that when we make changes to the calc model on the next line
				 * the field view doesn't try to redraw itself.
				 * If we don't do this, the 'reRender' attribute of the model will be set before the view is initialized,
				 * which means that setting 'reRender' to true will never re-render the view.
				 */
				that.init[ calcModel.get( 'name' ) ] = true;
				// Setup our calculation models with initial values and register listeners for calc-related fields.
				that.setupCalc( calcModel );
			} );
		},

		/**
		 * When a calculation model is instantiated from the registerCalcs function:
		 *
		 * Use a regex to get an array of the field keys
		 * Setup an initial key/values array
		 * Check for any references to other calculations
		 * Set the initial value of our calculation
		 * 
		 * @since  3.0
		 * @param  backbone.model calcModel
		 * @return void
		 */
		setupCalc: function( calcModel ) {
			// Setup our that var so we can access 'this' context in our loop.
			var that = this;
			// Get our equation
			var eq = calcModel.get( 'eq' );
			// We want to keep our original eq intact, so we use a different var for string replacment.
			var eqValues = eq;
            // Store the name for debugging later.
            var calcName = calcModel.get( 'name' );

			/* TODO:
			 * It might be possible to refactor these two if statements.
			 * The difficulty is that each has a different method of retreiving the specific data model.
			 */
			// Check to see if we have any field merge tags in our equation.
			var fields = eq.match( new RegExp( /{field:(.*?)}/g ) );
			if ( fields ) {
				/*
				 * fields is now an array of field keys that looks like:
				 * ['{field:key'], ['{field:key'], etc.
				 *
				 * We need to run a function with each of our field keys to setup our field key array and hook up our field change listner.
				 */
				
				fields = fields.map( function( field ) {
					// field will be {field:key}
					var key = field.replace( ':calc}', '' ).replace( '}', '' ).replace( '{field:', '' );

					// Get our field model
					fieldModel = nfRadio.channel( 'form-' + calcModel.get( 'formID' ) ).request( 'get:fieldByKey', key );

                    if( 'undefined' == typeof fieldModel ) return;

                    fieldModel.set( 'clean', false );

					// Register a listener in our field model for value changes.
					fieldModel.on( 'change:value', calcModel.changeField, calcModel );
					// Get our calc value from our field model.
					var calcValue = that.getCalcValue( fieldModel );
					// Add this field to our internal key/value object.
					that.updateCalcFields( calcModel, key, calcValue );
					// Update the string tracking our merged eq with the calc value.
					eqValues = that.replaceKey( 'field', key, calcValue, eqValues );
				} );
			}

			// Check to see if we have any calc merge tags in our equation.
			var calcs = eq.match( new RegExp( /{calc:(.*?)}/g ) );
			if ( calcs ) {
				/*
				 * calcs is now an array of calc keys that looks like:
				 * ['{calc:key'], ['{calc:key'], etc.
				 *
				 * We need to run a function with each of our calc keys to setup our calc key array and hook up our calc change listner.
				 */
				
				calcs = calcs.map( function( calc ) {
					// calc will be {calc:name}
					var name = calc.replace( '}', '' ).replace( '{calc:', '' );
					// Get our calc model
					var targetCalcModel = calcModel.collection.findWhere( { name: name } );

					if( 'undefined' == typeof targetCalcModel ) return;

					// Listen for changes on our calcluation, since we need to update our calc when it changes.
					targetCalcModel.on( 'change:value', calcModel.changeCalc, calcModel );
					// // Get our calc value from our calc model.
					var calcValue = targetCalcModel.get( 'value' );
					// Update the string tracking our merged eq with the calc value.
					eqValues = that.replaceKey( 'calc', name, calcValue, eqValues );
				} );

			}

            // Scrub unmerged tags (ie deleted/nox-existent fields/calcs, etc).
            eqValues = eqValues.replace( /{([a-zA-Z0-9]|:|_|-)*}/g, 0 );
            // Scrub line breaks.
            eqValues = eqValues.replace( /\r?\n|\r/g, '' );
			// Evaluate the equation and update the value of this model.
			try {
				this.debug('Calculation Decoder ' + eqValues + ' -> ' + this.localeDecodeEquation(eqValues) + ' (Setup)');
				calcModel.set( 'value', Number( mexp.eval( this.localeDecodeEquation(eqValues) ) ).toFixed( calcModel.get( 'dec' ) ) );
			} catch( e ) {
                //console.log( calcName );
				console.log( e );
			}
            
            // If for whatever reason, we got NaN, reset that to 0.
            if( calcModel.get( 'value' ) === 'NaN' ) calcModel.set( 'value', '0' );

			// Debugging console statement.
			// console.log( eqValues + ' = ' + calcModel.get( 'value' ) );
		},

		/**
		 * Update an item in our key/value pair that represents our fields and calc values.
		 * 
		 * @since  3.0
		 * @param  backbone.model 	calcModel
		 * @param  string 			key
		 * @param  string 			calcValue
		 * @return void
		 */
		updateCalcFields: function( calcModel, key, calcValue ) {
			var fields = calcModel.get( 'fields' );
			fields[ key ] = calcValue;
			calcModel.set( 'fields', fields );
		},

		/**
		 * Get a calc value from a field model.
		 *
		 * Sends a request to see if there's a special calc value
		 * Uses the value of the field if there is not.
		 * 
		 * @since  3.0
		 * @param  backbone.model fieldModel
		 * @return value
		 */
		getCalcValue: function( fieldModel ) {
			/*
			 * Send out a request on the field type and parent type channel asking if they need to modify the calc value.
			 * This is helpful for fields like lists that can have a different calc_value than selected value.
			 */
			var value = nfRadio.channel( fieldModel.get( 'type' ) ).request( 'get:calcValue', fieldModel );

			var localeConverter = new nfLocaleConverter(nfi18n.siteLocale, nfi18n.thousands_sep, nfi18n.decimal_point);
			

			var calcValue = value || fieldModel.get( 'value' );
			var machineNumber = localeConverter.numberDecoder(calcValue);
			var formattedNumber = localeConverter.numberEncoder(calcValue);

			if ( 'undefined' !== typeof machineNumber && jQuery.isNumeric( machineNumber ) ) {
				value = formattedNumber;
			} else {
				value = 0;
			}
			// }

			if ( ! fieldModel.get( 'visible' ) ) {
				value = 0;
			}
		
			return value;
		},

		/**
		 * Replace instances of key with calcValue. This is used to replace one key at a time.
		 *
		 * If no eq is passed, use calcModel eq.
		 *
		 * Returns a string with instances of key replaced with calcValue.
		 * 
		 * @since  version
		 * @param  string 	key       
		 * @param  string 	calcValue 
		 * @param  string 	eq        
		 * @return string 	eq      
		 */
		replaceKey: function( type, key, calcValue, eq ) {
			eq = eq || calcModel.get( 'eq' );

			tag = '{' + type + ':' + key + '}';
			var reTag = new RegExp( tag, 'g' );

			calcTag = '{' + type + ':' + key + ':calc}';
			var reCalcTag = new RegExp( calcTag, 'g' );

			eq = eq.replace( reTag, calcValue );
			eq = eq.replace( reCalcTag, calcValue );

			return eq;
		},

		/**
		 * Takes a calcModel and returns a string eq with all keys replaced by their appropriate calcValues.
		 * 
		 * @since  3.0
		 * @param  backbone.model 	calcModel
		 * @return string			eq
		 */
		replaceAllKeys: function( calcModel ) {
			var eq = calcModel.get( 'eq' );
			var that = this;
			_.each( calcModel.get( 'fields' ), function( value, key ) {
				eq = that.replaceKey( 'field', key, value, eq );
			} );

			// If we have any calc merge tags, replace those as well.
			var calcs = eq.match( new RegExp( /{calc:(.*?)}/g ) );
			if ( calcs ) {
				_.each( calcs, function( calc ) {
					// calc will be {calc:key}
					var name = calc.replace( '}', '' ).replace( '{calc:', '' );
					var targetCalcModel = calcModel.collection.findWhere( { name: name } );
                    if( 'undefined' == typeof targetCalcModel ) return;
					var re = new RegExp( calc, 'g' );
					eq = eq.replace( re, targetCalcModel.get( 'value' ) );
				} );
			}

			return eq;
		},

		/**
		 * Function that's called when a field within the calculation changes.
		 * 
		 * @since  3.0
		 * @param  backbone.model calcModel
		 * @param  backbone.model fieldModel
		 * @return void
		 */
		changeField: function( calcModel, fieldModel ) {
		
			var key = fieldModel.get( 'key' );
			var value = this.getCalcValue( fieldModel );
			
			this.updateCalcFields( calcModel, key, value );
			var eqValues = this.replaceAllKeys( calcModel );

            // Scrub unmerged tags (ie deleted/nox-existent fields/calcs, etc).
            eqValues = eqValues.replace( /{([a-zA-Z0-9]|:|_|-)*}/g, '0' );
            eqValues = eqValues.replace( /\r?\n|\r/g, '' );
            try {
				this.debug('Calculation Decoder ' + eqValues + ' -> ' + this.localeDecodeEquation(eqValues) + ' (Change Field)');
			     calcModel.set( 'value', Number( mexp.eval( this.localeDecodeEquation(eqValues) ) ).toFixed( calcModel.get( 'dec' ) ) );
            } catch( e ) {
                if(this.debug())console.log( e );
            }
            if( calcModel.get( 'value' ) === 'NaN' ) calcModel.set( 'value', '0' );

			// Debugging console statement.
			// console.log( eqValues + ' = ' + calcModel.get( 'value' ) );		
		},

		initDisplayField: function( fieldModel ) {

			if( ! fieldModel.get( 'default' ) || 'string' != typeof fieldModel.get( 'default' ) ) return;

			var calcs = fieldModel.get( 'default' ).match( new RegExp( /{calc:(.*?)}/g ) );
			if ( calcs ) {
				_.each( calcs, function( calcName ) {
					calcName = calcName.replace( '{calc:', '' ).replace( '}', '' ).replace( ':2', '' );
					this.displayFields[ calcName ] = this.displayFields[ calcName ] || [];
					this.displayFields[ calcName ].push( fieldModel );
				}, this );
			}
		},

		updateDisplayFields: function( calcModel ) {
			var that = this;
			if ( 'undefined' != typeof this.displayFields[ calcModel.get( 'name' ) ] ) {
				_.each( this.displayFields[ calcModel.get( 'name' ) ], function( fieldModel ) {

					var value = '';

					/**
					 * if we have a html field, we want to use the actual
					 * value and re-evaluate
				    **/
					if( "html" === fieldModel.get( 'type' ) ) {
						value = fieldModel.get( 'value' );
					} else {
						// if not a html field, use default to re-evaluate
						value = fieldModel.get( 'default' );
					}

					/*
					 This is a fix for the issue of the merge tags being
					 display'd
					 */

					// Find spans with calc data-key values
					var spans = value.match( new RegExp( /<span data-key="calc:(.*?)<\/span>/g ));
					_.each( spans, function( spanVar ) {
						// transform the span back into a merge tag
						var tmpCalcTag = "{" + spanVar.replace("<span" +
							" data-key=\"", "" ).replace( /">(.*?)<\/span>/, "" ) + "}";

						value = value.replace( spanVar, tmpCalcTag );
					} );
					var calcs = value.match( new RegExp( /{calc:(.*?)}/g ) );
					_.each( calcs, function( calc ) {
//						var rounding = false;
						// calc will be {calc:key} or {calc:key:2}
						var name = calc.replace( '}', '' ).replace( '{calc:', '' ).replace( ':2', '' );

						/*
						 * TODO: Bandaid for rounding calculations to two decimal places when displaying the merge tag.
						 * Checks to see if we have a :2. If we do, remove it and set our rounding variable to true.
						 */
//						if ( -1 != name.indexOf( ':2' ) ) {
//							rounding = true;
//							name = name.replace( ':2', '' );
//						}

						var calcModel = that.calcs[ fieldModel.get( 'formID' ) ].findWhere( { name: name } );
						var re = new RegExp( calc, 'g' );
						var calcValue = calcModel.get( 'value' ) ;
//						if ( rounding ) {
//							calcValue = calcValue.toFixed( 2 );
//							rounding = false;
//						}
						
                        if( 'undefined' != typeof( calcValue ) ) {
                            calcValue = that.applyLocaleFormatting( calcValue, calcModel );
						}
                        /*
                         * We replace the merge tag with the value
						 * surrounded by a span so that we can still find it
						 * and not affect itself or other field merge tags
						 *
						 * Unless this isn't a html field, then we just set
						  * value to calcValue
						*/
                        if( "html" === fieldModel.get( 'type' ) ) {
	                        value = value.replace(re, "<span data-key=\"calc:" + name + "\">"
		                        + calcValue + "</span>");
                        } else {
                        	value = calcValue;
                        }
					} );
					
					fieldModel.set( 'value', value );
					if ( ! that.init[ calcModel.get( 'name' ) ] ) {
						// fieldModel.set( 'reRender', true );
						fieldModel.trigger( 'reRender' );
					}
					that.init[ calcModel.get( 'name' ) ] = false;
				} );
			}
		},

		getCalc: function( name, formID ) {
			return this.calcs[ formID ].findWhere( { name: name } );
		},

		changeCalc: function( calcModel, targetCalcModel ) {
			var eqValues = this.replaceAllKeys( calcModel );
			
			eqValues = eqValues.replace( '[', '' ).replace( ']', '' );
            eqValues = eqValues.replace( /\r?\n|\r/g, '' );
            try {
				this.debug('Calculation Decoder ' + eqValues + ' -> ' + this.localeDecodeEquation(eqValues) + ' (Change Calc)');
			     calcModel.set( 'value', Number( mexp.eval( this.localeDecodeEquation( eqValues ) ) ).toFixed( calcModel.get( 'dec' ) ) );
            } catch( e ) {
                console.log( e );
            }
            if( calcModel.get( 'value' ) === 'NaN' ) calcModel.set( 'value', '0' );
		},
        
        /**
         * Function to apply Locale Formatting to Calculations
         * @since Version 3.1
         * @param Str number
         * 
         * @return Str
         */
        applyLocaleFormatting: function( number, calcModel ) {

			var localeConverter = new nfLocaleConverter(nfi18n.siteLocale, nfi18n.thousands_sep, nfi18n.decimal_point);

			var formattedNumber = localeConverter.numberEncoder(number, calcModel.get('dec'));
            
            // // Split our string on the decimal to preserve context.
            // var splitNumber = number.split('.');
            // // If we have more than one element (if we had a decimal point)...
            // if ( splitNumber.length > 1 ) {
            //     // Update the thousands and remerge the array.
            //     splitNumber[ 0 ] = splitNumber[ 0 ].replace( /\B(?=(\d{3})+(?!\d))/g, nfi18n.thousands_sep );
            //     var formattedNumber = splitNumber.join( nfi18n.decimal_point );
            // }
            // // Otherwise (we had no decimal point)...
            // else {
            //     // Update the thousands.
            //     var formattedNumber = number.replace( /\B(?=(\d{3})+(?!\d))/g, nfi18n.thousands_sep );
            // }
            return formattedNumber;
		},
		
		localeDecodeEquation: function( eq ) {
			var result = '';
			var expression = '';
			var pattern = /[0-9.,]/;
			var localeConverter = new nfLocaleConverter(nfi18n.siteLocale, nfi18n.thousands_sep, nfi18n.decimal_point);
			// This pattern accounts for all whitespace characters (including thin space).
			eq = eq.replace( /\s/g, '' );
			eq = eq.replace( /&nbsp;/g, '' );
			var characters = eq.split('');
			// foreach ( characters as character ) {
			characters.forEach( function( character ) {
				// If the character is numeric or '.' or ','
				if (pattern.test(character)) {
					expression = expression + character;
				} else {
					// If we reach an operator char, append the expression to the result
					if ( 0 < expression.length ) {
						result = result + localeConverter.numberDecoder( expression );
						expression = '';
					}
					result = result + character;
				}
			});
			// The following catches the case of the last character being a digit.
			if ( 0 < expression.length ) {
				result = result + localeConverter.numberDecoder( expression );
			}
			return result;
		},

		debug: function(message) {
			if ( window.nfCalculationsDebug || false ) console.log(message);
		}
	
	});

	return controller;
} );

define('controllers/dateBackwardsCompat',[], function() {
    var controller = Marionette.Object.extend({

        initialize: function () {
            this.listenTo( Backbone.Radio.channel( 'pikaday-bc' ), 'init', this.dateBackwardsCompat );	
        },

        dateBackwardsCompat: function( dateObject, fieldModel ) {
           
            /**
             * Start backwards compatibility for old pikaday customisation
             */
            // Legacy properties
            dateObject.pikaday = {};
            dateObject.pikaday._o = {};

            //Old hook for Pikaday Custom code
            nfRadio.channel( 'pikaday' ).trigger( 'init', dateObject, fieldModel );

            // If we've set a disableDayFn property in custom code, hook it up to Flatpickr
            if ( typeof dateObject.pikaday._o.disableDayFn !== 'undefined') {
                dateObject.set( 'disable', [ dateObject.pikaday._o.disableDayFn ] );
            }

            //Compatibility for i18n pikaday function
            if ( typeof dateObject.pikaday._o.i18n !== 'undefined' || typeof dateObject.pikaday._o.firstDay !== 'undefined') {

                let locale = dateObject.config.locale;

                if ( typeof dateObject.pikaday._o.firstDay !== 'undefined') {
                    locale.firstDayOfWeek = dateObject.pikaday._o.firstDay;
                }

                if ( typeof dateObject.pikaday._o.i18n !== 'undefined') {
                    if ( typeof dateObject.pikaday._o.i18n.weekdays !== 'undefined') {
                        locale.weekdays.longhand = dateObject.pikaday._o.i18n.weekdays;
                    }

                    if ( typeof dateObject.pikaday._o.i18n.weekdaysShort !== 'undefined') {
                        locale.weekdays.shorthand = dateObject.pikaday._o.i18n.weekdaysShort;
                    }
                    
                    if ( typeof dateObject.pikaday._o.i18n.months !== 'undefined') {
                        jQuery( '.flatpickr-monthDropdown-months > option' ).each( function() {
                            this.text = dateObject.pikaday._o.i18n.months[ this.value ];
                        } );
                    }
                }

                dateObject.set( 'locale', locale );
                
            }

            if ( Object.keys(dateObject.pikaday._o).length > 0 ) {
                console.log("%cDeprecated Ninja Forms Pikaday custom code detected.", "color: Red; font-size: large");
                console.log("You are using deprecated Ninja Forms Pikaday custom code. Support for this custom code will be removed in a future version of Ninja Forms. Please contact Ninja Forms support for more details.");
            }

        }

    });

    return controller;
});
define('controllers/fieldDate',[], function() {
    var controller = Marionette.Object.extend({

        initialize: function () {
            this.listenTo( nfRadio.channel( 'date' ), 'init:model', this.registerFunctions );
            this.listenTo( nfRadio.channel( 'date' ), 'render:view', this.initDatepicker );
        },

        registerFunctions: function( model ) {
            model.set( 'renderHourOptions', this.renderHourOptions );
            model.set( 'renderMinuteOptions', this.renderMinuteOptions );
            model.set( 'maybeRenderAMPM', this.maybeRenderAMPM );
            model.set( 'customClasses', this.customClasses );
            // Overwrite the default getValue() method.
            model.getValue = this.getValue;
        },

        renderHourOptions: function() {
            return this.hours_options;
        },

        renderMinuteOptions: function() {
            return this.minutes_options;
        },

        maybeRenderAMPM: function() {
            if ( 'undefined' == typeof this.hours_24 || 1 == this.hours_24 ) {
                return;
            }

            return '<div style="float:left;"><select class="ampm extra"><option value="am">AM</option><option value="pm">PM</option></select></div>';
        },

        initDatepicker: function ( view ) {
            view.model.set( 'el', view.el );
            var el = jQuery( view.el ).find( '.nf-element' )[0];
            view.listenTo( nfRadio.channel( 'form-' + view.model.get( 'formID' ) ), 'before:submit', this.beforeSubmit, view );

            // If we are using a time_only date_mode, then hide the date input.
            if ( 'undefined' != typeof view.model.get( 'date_mode' ) && 'time_only' == view.model.get( 'date_mode' ) ) {
                jQuery( el ).hide();
                return false;
            }

            var dateFormat = view.model.get( 'date_format' );
    
            // For "default" date format, convert PHP format to JS compatible format.
            if( '' == dateFormat || 'default' == dateFormat ){
                dateFormat = this.convertDateFormat( nfi18n.dateFormat );
            }

            var dateSettings = {
                classes: jQuery( el ).attr( "class" ),
                placeholder: view.model.get( 'placeholder' ),
                parseDate: function (datestr, format) {
                    return moment(datestr, format, true).toDate();
                },
                formatDate: function (date, format, locale) {
                    return moment(date).format(format);
                },
                dateFormat: dateFormat,
                altFormat: dateFormat,
                altInput: true,
                ariaDateFormat: dateFormat,
                mode: "single",
                allowInput: true,
                disableMobile: "true",
                locale: {
                    months: {
                        shorthand: nfi18n.monthsShort,
                        longhand: nfi18n.months
                    },
                    weekdays: {
                        shorthand: nfi18n.weekdaysShort,
                        longhand: nfi18n.weekdays
                    },
                    firstDayOfWeek: nfi18n.startOfWeek,
                }
            }; 
           
            // Filter our datepicker settings object.
            let filteredDatePickerSettings = nfRadio.channel( 'flatpickr' ).request( 'filter:settings', dateSettings, view );
            if ( 'undefined' != typeof filteredDatePickerSettings ) {
                dateSettings = filteredDatePickerSettings;
            }

            var dateObject = flatpickr( el, dateSettings );

            if ( 1 == view.model.get( 'date_default' ) ) {
                dateObject.setDate( moment().format(dateFormat) );
                view.model.set( 'value', moment().format(dateFormat) );
            }

            //Trigger Pikaday backwards compatibility
            nfRadio.channel( 'pikaday-bc' ).trigger( 'init', dateObject, view.model, view );

            nfRadio.channel( 'flatpickr' ).trigger( 'init', dateObject, view.model, view );
        },

        beforeSubmit: function( formModel ) {
            if ( 'date_only' == this.model.get( 'date_mode' ) ) {
                return false;
            }
            let hour = jQuery( this.el ).find( '.hour' ).val();
            let minute = jQuery( this.el ).find( '.minute' ).val();
            let ampm = jQuery( this.el ).find( '.ampm' ).val();
            let current_value = this.model.get( 'value' );
            let date = false;

            if ( _.isObject( current_value ) ) {
                date = current_value.date;
            } else {
                date = current_value;
            }

            let date_value = {
                date: date,
                hour: hour,
                minute: minute,
                ampm: ampm,
            };

            this.model.set( 'value', date_value );
        },

        getYearRange: function( fieldModel ) {
            var yearRange      = 10;
            var yearRangeStart = fieldModel.get( 'year_range_start' );
            var yearRangeEnd   = fieldModel.get( 'year_range_end'   );

            if( yearRangeStart && yearRangeEnd ){
                return [ yearRangeStart, yearRangeEnd ];
            } else if( yearRangeStart ) {
                yearRangeEnd = yearRangeStart + yearRange;
                return [ yearRangeStart, yearRangeEnd ];
            } else if( yearRangeEnd ) {
                yearRangeStart = yearRangeEnd - yearRange;
                return [ yearRangeStart, yearRangeEnd ];
            }

            return yearRange;
        },

        getMinDate: function( fieldModel ) {
            var minDate = null;
            var yearRangeStart = fieldModel.get( 'year_range_start' );

            if( yearRangeStart ) {
                return new Date( yearRangeStart, 0, 1 );
            }

            return minDate;
        },

        getMaxDate: function( fieldModel ) {
            var maxDate = null;
            var yearRangeEnd   = fieldModel.get( 'year_range_end' );

            if( yearRangeEnd ) {
                return new Date( yearRangeEnd, 11, 31 );
            }

            return maxDate;
        },
        
        convertDateFormat: function( dateFormat ) {
            // http://php.net/manual/en/function.date.php
            // https://github.com/dbushell/Pikaday/blob/master/README.md#formatting  **** Switched to flatpickr ***
            // Note: Be careful not to add overriding replacements. Order is important here.

            /** Day */
            dateFormat = dateFormat.replace( 'D', 'ddd' ); // @todo Ordering issue?
            dateFormat = dateFormat.replace( 'd', 'DD' );
            dateFormat = dateFormat.replace( 'l', 'dddd' );
            dateFormat = dateFormat.replace( 'j', 'D' );
            dateFormat = dateFormat.replace( 'N', '' ); // Not Supported
            dateFormat = dateFormat.replace( 'S', '' ); // Not Supported
            dateFormat = dateFormat.replace( 'w', 'd' );
            dateFormat = dateFormat.replace( 'z', '' ); // Not Supported

            /** Week */
            dateFormat = dateFormat.replace( 'W', 'W' );

            /** Month */
            dateFormat = dateFormat.replace( 'M', 'MMM' ); // "M" before "F" or "m" to avoid overriding.
            dateFormat = dateFormat.replace( 'F', 'MMMM' );
            dateFormat = dateFormat.replace( 'm', 'MM' );
            dateFormat = dateFormat.replace( 'n', 'M' );
            dateFormat = dateFormat.replace( 't', '' );  // Not Supported

            // Year
            dateFormat = dateFormat.replace( 'L', '' ); // Not Supported
            dateFormat = dateFormat.replace( 'o', 'YYYY' );
            dateFormat = dateFormat.replace( 'Y', 'YYYY' );
            dateFormat = dateFormat.replace( 'y', 'YY' );

            // Time - Not supported
            dateFormat = dateFormat.replace( 'a', '' );
            dateFormat = dateFormat.replace( 'A', '' );
            dateFormat = dateFormat.replace( 'B', '' );
            dateFormat = dateFormat.replace( 'g', '' );
            dateFormat = dateFormat.replace( 'G', '' );
            dateFormat = dateFormat.replace( 'h', '' );
            dateFormat = dateFormat.replace( 'H', '' );
            dateFormat = dateFormat.replace( 'i', '' );
            dateFormat = dateFormat.replace( 's', '' );
            dateFormat = dateFormat.replace( 'u', '' );
            dateFormat = dateFormat.replace( 'v', '' );

            // Timezone - Not supported
            dateFormat = dateFormat.replace( 'e', '' );
            dateFormat = dateFormat.replace( 'I', '' );
            dateFormat = dateFormat.replace( 'O', '' );
            dateFormat = dateFormat.replace( 'P', '' );
            dateFormat = dateFormat.replace( 'T', '' );
            dateFormat = dateFormat.replace( 'Z', '' );

            // Full Date/Time - Not Supported
            dateFormat = dateFormat.replace( 'c', '' );
            dateFormat = dateFormat.replace( 'r', '' );
            dateFormat = dateFormat.replace( 'u', '' );

            return dateFormat;
        },

        customClasses: function( classes ) {
            if ( 'date_and_time' == this.date_mode ) {
                classes += ' date-and-time';
            }
            return classes;
        },

        // This function is called whenever we want to know the value of the date field.
        // Since it could be a date/time field, we can't return just the value.
        getValue: function() {

            if ( 'date_only' == this.get( 'date_mode' ) ) {
                return this.get( 'value' );
            }

            let el = this.get( 'el' );
            let hour = jQuery( el ).find( '.hour' ).val();
            let minute = jQuery( el ).find( '.minute' ).val();
            let ampm = jQuery( el ).find( '.ampm' ).val();
            let current_value = this.get( 'value' );
            let date = false;

            if ( _.isObject( current_value ) ) {
                date = current_value.date;
            } else {
                date = current_value;
            }

            let value = '';

            if ( 'undefined' != typeof date ) {
                value += date;
            }

            if ( 'undefined' != typeof hour && 'undefined' != typeof minute ) {
                value += ' ' + hour + ':' + minute;
            }

            if ( 'undefined' != typeof ampm ) {
                value += ' ' + ampm;
            }

            return value;

            // let date_value = {
            //     date: date,
            //     hour: hour,
            //     minute: minute,
            //     ampm: ampm,
            // };

            // this.model.set( 'value', date_value );
        }
    });

    return controller;
});

define('controllers/fieldRecaptcha',[], function() {
    var controller = Marionette.Object.extend({

        initialize: function () {
            this.listenTo( nfRadio.channel( 'recaptcha' ), 'init:model',      this.initRecaptcha  );
            this.listenTo( nfRadio.channel( 'forms' ),     'submit:response', this.resetRecaptcha );
        },

       	initRecaptcha: function ( model ) {
       		nfRadio.channel( 'recaptcha' ).reply( 'update:response', this.updateResponse, this, model.id );
        },

        updateResponse: function( response, fieldID ) {
        	var model = nfRadio.channel( 'fields' ).request( 'get:field', fieldID );
			model.set( 'value', response );
            nfRadio.channel( 'fields' ).request( 'remove:error', model.get( 'id' ), 'required-error' );
        },

        resetRecaptcha: function() {
			var recaptchaID = 0;
			jQuery( '.g-recaptcha' ).each( function() {
				try {
					grecaptcha.reset( recaptchaID );
				} catch( e ){
					console.log( 'Notice: Error trying to reset grecaptcha.' );
				}
				recaptchaID++;
			} );
        }
    });

    return controller;
} );
define('controllers/fieldRecaptchaV3',[], function() {
    var controller = Marionette.Object.extend({

        initialize: function () {
            this.listenTo( nfRadio.channel( 'recaptcha_v3' ), 'init:model', this.initRecaptcha  );
        },

       	initRecaptcha: function ( model ) {
	        let formID = model.get( 'formID' );
	        nfRadio.channel( 'form-' + formID ).trigger( 'disable:submit', model );
	        grecaptcha.ready( function() {
		        grecaptcha.execute( model.get( 'site_key' ), {
			        action: 'register'
		        } ).then( function( token ) {
			        model.set( 'value', token );
			        nfRadio.channel( 'form-' + formID ).trigger( 'enable:submit', model );
		        } );
	        } );
        },
    });

    return controller;
} );
define('controllers/fieldHTML',[], function() {
    var controller = Marionette.Object.extend({

        htmlFields: [],
        trackedMergeTags: [],

        initialize: function () {
            this.listenTo( Backbone.Radio.channel( 'fields-html' ), 'init:model', this.setupFieldMergeTagTracking );
        },

        setupFieldMergeTagTracking: function( fieldModel ) {
            this.htmlFields.push( fieldModel );

            var formID = fieldModel.get( 'formID' );

            this.listenTo( nfRadio.channel( 'form-' + formID ), 'init:model', function( formModel ){

                var mergeTags = fieldModel.get( 'default' ).match( new RegExp( /{field:(.*?)}/g ) );
                if ( ! mergeTags ) return;

                _.each( mergeTags, function( mergeTag ) {
                    var fieldKey = mergeTag.replace( '{field:', '' ).replace( '}', '' );
                    var fieldModel = formModel.get( 'fields' ).findWhere({ key: fieldKey });
                    if( 'undefined' == typeof fieldModel ) return;

                    this.trackedMergeTags.push( fieldModel );
                    this.listenTo( nfRadio.channel( 'field-' + fieldModel.get( 'id' ) ), 'change:modelValue', this.updateFieldMergeTags );
                }, this );

                // Let's get this party started!
                this.updateFieldMergeTags();
            }, this );
        },

        updateFieldMergeTags: function( fieldModel ) {
            _.each( this.htmlFields, function( htmlFieldModel ){
                var value = htmlFieldModel.get( 'value' );
               _.each( this.trackedMergeTags, function( fieldModel ){

                   /* Search the value for any spans with mergetag data-key
                   * values
                   */
                   var spans = value.match( new RegExp( /<span data-key="field:(.*?)<\/span>/g ) );
	               _.each( spans, function( spanVar ) {
	                   /* See if the span string contains the current
                       * fieldModel's key. If so replace the span with a
                       * merge tag for evaluation.
                       */
                       if( -1 < spanVar.indexOf( "data-key=\"field:" + fieldModel.get( 'key' ) ) ) {
	                       value = value.replace( spanVar, "{field:" + fieldModel.get( 'key' ) + "}" );
                       }
	               } );

                    var mergeTag = '{field:' + fieldModel.get( 'key' ) + '}';
	               /* We replace the merge tag with the value
	               * surrounded by a span so that we can still find it
	               * and not affect itself or other field merge tags
	               */
                    value = value.replace( mergeTag, "<span data-key=\"field:"
                        + fieldModel.get( 'key' ) + "\">"
                        + fieldModel.getValue() + "</span>" );
               }, this ) ;
               htmlFieldModel.set( 'value', value );
               htmlFieldModel.trigger( 'reRender' );
            }, this );
        }

    });

    return controller;
});

/**
 * When a form is loaded, enable any help text that appears on the page.
 */
define('controllers/helpText',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			this.listenTo( nfRadio.channel( 'form' ), 'render:view', this.initHelpText );

			nfRadio.channel( 'form' ).reply( 'init:help', this.initHelpText );
		},

		initHelpText: function( view ) {
			jQuery( view.el ).find( '.nf-help' ).each( function() {
				var jBox = jQuery( this ).jBox( 'Tooltip', {
					theme: 'TooltipBorder',
					content: jQuery( this ).data( 'text' )
				});
			} );
		}
	});

	return controller;
} );
define('controllers/fieldTextbox',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
            nfRadio.channel( 'textbox' ).reply( 'get:calcValue', this.getCalcValue, this );
		},

		getCalcValue: function( fieldModel ) {
            if('currency' == fieldModel.get('mask')){
                var form = nfRadio.channel( 'app' ).request( 'get:form', fieldModel.get( 'formID' ) );
                var currencySymbol = ('undefined' !== typeof form) ? form.get( 'currencySymbol' ) : '';
                var currencySymbolDecoded = jQuery('<textarea />').html(currencySymbol).text();
                return fieldModel.get( 'value' ).replace(currencySymbolDecoded, '');
            }

			return fieldModel.get( 'value' );
		},
	});

	return controller;
} );
/**
 * When a form is loaded, enable any rtes in textareas.
 */
define('controllers/fieldTextareaRTE',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			this.listenTo( nfRadio.channel( 'textarea' ), 'render:view', this.initTextareaRTEs );
			this.listenTo( nfRadio.channel( 'textarea' ), 'click:extra', this.clickExtra );

			// Instantiates the variable that holds the media library frame.
			this.meta_image_frame;

			this.currentContext = {};

			if( 'undefined' == typeof jQuery.summernote ) return;

			jQuery.summernote.options.icons = {
		        'align': 'dashicons dashicons-editor-alignleft',
		        'alignCenter': 'dashicons dashicons-editor-aligncenter',
		        'alignJustify': 'dashicons dashicons-editor-justify',
		        'alignLeft': 'dashicons dashicons-editor-alignleft',
		        'alignRight': 'dashicons dashicons-editor-alignright',
		        'indent': 'dashicons dashicons-editor-indent',
		        'outdent': 'dashicons dashicons-editor-outdent',
		        // 'arrowsAlt': 'dashicons fa-arrows-alt',
		        'bold': 'dashicons dashicons-editor-bold',
		        'caret': 'dashicons dashicons-arrow-down',
		        // 'circle': 'dashicons fa-circle',
		        'close': 'dashicons dashicons-dismiss',
		        'code': 'dashicons dashicons-editor-code',
		        'eraser': 'dashicons dashicons-editor-removeformatting',
		        // 'font': 'dashicons fa-font',
		        // 'frame': 'dashicons fa-frame',
		        'italic': 'dashicons dashicons-editor-italic',
		        'link': 'dashicons dashicons-admin-links',
		        'unlink': 'dashicons dashicons-editor-unlink',
		        'magic': 'dashicons dashicons-editor-paragraph',
		        // 'menuCheck': 'dashicons fa-check',
		        'minus': 'dashicons dashicons-minus',
		        'orderedlist': 'dashicons dashicons-editor-ol',
		        // 'pencil': 'dashicons fa-pencil',
		        // 'picture': 'dashicons fa-picture-o',
		        // 'question': 'dashicons fa-question',
		        'redo': 'dashicons dashicons-redo',
		        'square': 'dashicons fa-square',
		        // 'strikethrough': 'dashicons fa-strikethrough',
		        // 'subscript': 'dashicons fa-subscript',
		        // 'superscript': 'dashicons fa-superscript',
		        'table': 'dashicons dashicons-editor-table',
		        // 'textHeight': 'dashicons fa-text-height',
		        // 'trash': 'dashicons fa-trash',
		        'underline': 'dashicons dashicons-editor-underline',
		        'undo': 'dashicons dashicons-undo',
		        'unorderedlist': 'dashicons dashicons-editor-ul',
		        // 'video': 'dashicons fa-youtube-play'
		      };

		},

		initTextareaRTEs: function( view ) {
			if ( 1 != view.model.get( 'textarea_rte' ) ) {
				return false;
			}
			/*
			 * Custom Button for links
			 */
			var that = this;
			// var linkButton = this.linkButton();
			var linkButton = function( context ) {
				return that.linkButton( context );
			}
			var mediaButton = function( context ) {
				return that.mediaButton( context );
			}

			var toolbar = [
				[ 'paragraphStyle', ['style'] ],
				[ 'fontStyle', [ 'bold', 'italic', 'underline','clear' ] ],
				[ 'lists', [ 'ul', 'ol' ] ],
			    [ 'paragraph', [ 'paragraph' ] ],
			    [ 'customGroup', [ 'linkButton', 'unlink' ] ],
			    [ 'table', [ 'table' ] ],
			    [ 'actions', [ 'undo', 'redo' ] ],
			];

			if ( 1 == view.model.get( 'textarea_media' ) && 0 != userSettings.uid ) {
				toolbar.push( [ 'tools', [ 'mediaButton' ] ] );
			}

			jQuery( view.el ).find( '.nf-element' ).summernote( {
				toolbar: toolbar,
				buttons: {
					linkButton: linkButton,
					mediaButton: mediaButton
				},
				height: 150,   //set editable area's height
				codemirror: { // codemirror options
				    theme: 'monokai',
				    lineNumbers: true
				},
				prettifyHtml: true,
				callbacks: {
					onChange: function( e ) {
						view.model.set( 'value', jQuery( this ).summernote( 'code' ) );
					}
				}
			} );

			var linkMenu = jQuery( view.el ).find( '.link-button' ).next( '.dropdown-menu' ).find( 'button' );
			linkMenu.replaceWith(function () {
			    return jQuery( '<div/>', {
			        class: jQuery( linkMenu ).attr( 'class' ),
			        html: this.innerHTML
			    } );
			} );
		},

		linkButton: function( context ) {
			var that = this;
			var ui = jQuery.summernote.ui;
			var linkButton = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-rte-link-button' );
			var linkDropdown = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-rte-link-dropdown' );
			return ui.buttonGroup([
				ui.button({
	            className: 'dropdown-toggle link-button',
	            contents: linkButton({}),
	            tooltip: nfi18n.fieldTextareaRTEInsertLink,
	            click: function( e ) {
	            	that.clickLinkButton( e, context );
	            },
	            data: {
	              toggle: 'dropdown'
	            }
	          }),
				ui.dropdown([
	            ui.buttonGroup({
	              children: [
	                ui.button({
	                  contents: linkDropdown({}),
	                  tooltip: ''
	                }),
	              ]
	            })
	          ])
			]).render();
		},

		mediaButton: function( context ) {
			var that = this;
			var ui = jQuery.summernote.ui;
			var mediaButton = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-rte-media-button' );
			return ui.button({
	            className: 'dropdown-toggle',
	            contents: mediaButton({}),
	            tooltip: nfi18n.fieldTextareaRTEInsertMedia,
	            click: function( e ) {
	            	that.openMediaManager( e, context );
	            }
	          }).render();
		},

		openMediaManager: function( e, context ) {
			context.invoke( 'editor.saveRange' );
			// If the frame already exists, re-open it.
			if ( this.meta_image_frame ) {
				this.meta_image_frame.open();
				return;
			}

			// Sets up the media library frame
			this.meta_image_frame = wp.media.frames.meta_image_frame = wp.media({
				title: nfi18n.fieldTextareaRTESelectAFile,
				button: { text:  'insert' }
			});

			var that = this;

			// Runs when an image is selected.
			this.meta_image_frame.on('select', function(){

				// Grabs the attachment selection and creates a JSON representation of the model.
				var media_attachment = that.meta_image_frame.state().get('selection').first().toJSON();
				that.insertMedia( media_attachment, context );
			});

			// Opens the media library frame.
			this.meta_image_frame.open();
		},

		clickLinkButton: function ( e, context ) {
			var range = context.invoke( 'editor.createRange' );
			context.invoke( 'editor.saveRange' );
			var text = range.toString()
			this.currentContext = context;

			jQuery( e.target ).closest( '.note-customGroup > .note-btn-group' ).on ('hide.bs.dropdown', function ( e ) {
				return false;
			});

			jQuery( e.target ).closest( '.note-customGroup > .note-btn-group' ).on ('shown.bs.dropdown', function ( e ) {
				jQuery( e.target ).parent().parent().find( '.link-text' ).val( text );
				jQuery( e.target ).parent().parent().find( '.link-url' ).focus();
			});
		},

		clickExtra: function( e ) {
			var textEl = jQuery( e.target ).parent().find( '.link-text' );
			var urlEl = jQuery( e.target ).parent().find( '.link-url' );
			var isNewWindowEl = jQuery( e.target ).parent().find( '.link-new-window' );
			this.currentContext.invoke( 'editor.restoreRange' );
			if ( jQuery( e.target ).hasClass( 'insert-link' ) ) {
				var text = textEl.val();
				var url = urlEl.val();
				var isNewWindow = ( isNewWindowEl.prop( 'checked' ) ) ? true: false;
				if ( 0 != text.length && 0 != url.length ) {
					this.currentContext.invoke( 'editor.createLink', { text:text, url: url, isNewWindow: isNewWindow } );
				}
			}
			textEl.val( '' );
			urlEl.val( '' );
			isNewWindowEl.prop( 'checked', false );
			jQuery( e.target ).closest( 'div.note-btn-group.open' ).removeClass( 'open' );
		},

		insertMedia: function( media, context ) {
			context.invoke( 'editor.restoreRange' );
			if ( 'image' == media.type ) {
				context.invoke( 'editor.insertImage', media.url );
			} else {
				context.invoke( 'editor.createLink', { text: media.filename, url: media.url } );
			}

		}
	});

	return controller;
} );
define('controllers/fieldStarRating',[], function() {
    var controller = Marionette.Object.extend( {

        initialize: function() {
        	this.listenTo( nfRadio.channel( 'starrating' ), 'init:model', this.register );
            this.listenTo( nfRadio.channel( 'starrating' ), 'render:view', this.initRating );
        },

        register: function( model ) {
			model.set( 'renderRatings', this.renderRatings );
		},

        initRating: function( view ){
            jQuery( view.el ).find( '.starrating' ).rating();

        },

        renderRatings: function() {
        	var html = document.createElement( 'span' );
        	// changed from 'default' to 'number_of_stars'
        	for (var i = 0; i <= this.number_of_stars - 1; i++) {
                var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-starrating-star' );
                var num = i + 1;
                var checked = '';

                // Check to see if current 'star' matches the default value
		        if ( this.value == num ) {
		        	checked = 'checked';
		        }
                var htmlFragment = template( { id: this.id, classes: this.classes, num: num, checked: checked, required: this.required } );
                html.appendChild(
                    document.createRange().createContextualFragment( htmlFragment )
                );
        	}
        	return html.innerHTML;
        }

    });

    return controller;
});

define('controllers/fieldTerms',[], function() {
    var controller = Marionette.Object.extend( {
        initialize: function() {
            this.listenTo( nfRadio.channel( 'terms' ), 'init:model', this.register );
        },

        register: function( model ) {
            // nfRadio.channel( 'field-' + this.model.get( 'id' ) ).trigger( 'click:extra', e, this.model );
            this.listenTo( nfRadio.channel( 'field-' + model.get( 'id' ) ), 'click:extra', this.clickExtra );
            this.listenTo( nfRadio.channel( 'field-' + model.get( 'id' ) ), 'keyup:field', this.keyUpExtra );
        },
        
        clickExtra: function( e, model ) {
            var el = jQuery( e.currentTarget );
            var value = el.parent().find( '.extra-value' ).val();
            this.addOption( model, value );
        },

        keyUpExtra: function( el, model, keyCode ) {
            if( 13 != keyCode ) return;
            this.addOption( model, el.val() );
        },

        addOption: function( model, value ) {
            if( ! value ) return;
            var options = model.get( 'options' );
            var new_option = {
                label: value,
                value: value,
                selected: 0,
            };
            options.push( new_option );

            var selected = model.get( 'value' );
            selected.push( value );

            // model.set( 'reRender', true );
            model.trigger( 'reRender' );
        }
        
    });

    return controller;
} );
/**
 * Before we display our form content, ask if anyone wants to give us a different view.
 * Before we do anything with the data, pass it through any loading filters.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2016 WP Ninjas
 * @since 3.0
 */
define( 'controllers/formContentFilters',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			/*
			 * Init our fieldContent view and load filter arrays.
			 */
			this.viewFilters = [];
			this.loadFilters = [];

			/*
			 * Listen for requests to add new formContent filters.
			 */
			nfRadio.channel( 'formContent' ).reply( 'add:viewFilter', this.addViewFilter, this );
			nfRadio.channel( 'formContent' ).reply( 'add:loadFilter', this.addLoadFilter, this );

			/*
			 * Listen for requests to get our formContent filters.
			 */
			nfRadio.channel( 'formContent' ).reply( 'get:viewFilters', this.getViewFilters, this );
			nfRadio.channel( 'formContent' ).reply( 'get:loadFilters', this.getLoadFilters, this );

			/*
			 * -- DEPRECATED RADIO REPLIES --
			 * 
			 * The 'fieldContents' channel has been deprecated as of 3.0 (it was present in the RC) in favour of 'formContent'.
			 * Listen for requests to add new fieldContent filters.
			 * 
			 * TODO: These radio listeners on the 'fieldContents' channels are here for backwards compatibility and should be removed eventually.
			 */
			nfRadio.channel( 'fieldContents' ).reply( 'add:viewFilter', this.addViewFilter, this );
			nfRadio.channel( 'fieldContents' ).reply( 'add:loadFilter', this.addLoadFilter, this );

			/*
			 * Listen for requests to get our fieldContent filters.
			 * TODO: Remove eventually.
			 */
			nfRadio.channel( 'fieldContents' ).reply( 'get:viewFilters', this.getViewFilters, this );
			nfRadio.channel( 'fieldContents' ).reply( 'get:loadFilters', this.getLoadFilters, this );
		
			/*
			 * -- END DEPRECATED --
			 */
		},

		addViewFilter: function( callback, priority ) {
			this.viewFilters[ priority ] = callback;
		},

		getViewFilters: function() {
			return this.viewFilters;
		},

		addLoadFilter: function( callback, priority ) {
			this.loadFilters[ priority ] = callback;
		},

		getLoadFilters: function() {
			return this.loadFilters;
		}

	});

	return controller;
} );
define( 'views/fieldItem',[], function() {
	var view = Marionette.ItemView.extend({
		tagName: 'div',

		initialize: function() {
    		this.listenTo( this.model, 'reRender', this.render, this );
    		this.listenTo( this.model, 'change:addWrapperClass', this.addWrapperClass, this );
    		this.listenTo( this.model, 'change:removeWrapperClass', this.removeWrapperClass, this );
    		this.listenTo( this.model, 'change:invalid', this.toggleAriaInvalid, this );

    		this.template = '#tmpl-nf-field-' + this.model.get( 'wrap_template' );
		},

		test: function( model ) {
			console.log( 'firing from trigger 1' );
		},

		addWrapperClass: function() {
			var cl = this.model.get( 'addWrapperClass' );
			if ( '' != cl ) {
				jQuery( this.el ).addClass( cl );
				this.model.set( 'addWrapperClass', '' );
			}
		},

		removeWrapperClass: function() {
			var cl = this.model.get( 'removeWrapperClass' );
			if ( '' != cl ) {
				jQuery( this.el ).removeClass( cl );
				this.model.set( 'removeWrapperClass', '' );
			}
		},

		toggleAriaInvalid: function() {
			var invalid = this.model.get( 'invalid' );
			jQuery( '[aria-invalid]', this.el ).attr( 'aria-invalid', JSON.stringify( invalid ) );
		},

		onRender: function() {
			this.$el = this.$el.children();
			this.$el.unwrap();
			this.setElement( this.$el );

	   		/*
    		 * If we have an input mask, init that mask.
    		 * TODO: Move this to a controller so that the logic isn't in the view.
    		 */
    		if ( 'undefined' != typeof this.model.get( 'mask' ) && '' != jQuery.trim( this.model.get( 'mask' ) ) ) {
    			if ( 'custom' == this.model.get( 'mask') ) {
    				var mask = this.model.get( 'custom_mask' );
    			} else {
    				var mask = this.model.get( 'mask' );
    			}

				/* POLYFILL */ Number.isInteger = Number.isInteger || function(value) { return typeof value === "number" && isFinite(value) && Math.floor(value) === value; };
    			if ( Number.isInteger( mask ) ) {
    				mask = mask.toString();
    			}

				if ( 'currency' == mask ) {
					var form = nfRadio.channel( 'app' ).request( 'get:form', this.model.get( 'formID' ) );

					var thousands_sep = form.get( 'thousands_sep' );
					/*
					 * TODO: if we have a &nbsp; , replace it with a string with a space.
					 */
					if ( '&nbsp;' == thousands_sep ) {
						thousands_sep = ' ';
					}
					var currencySymbol = jQuery( '<div/>' ).html( form.get( 'currencySymbol' ) ).text();
					thousands_sep = jQuery( '<div/>' ).html( thousands_sep ).text();
					var decimal_point = jQuery( '<div/>' ).html( form.get( 'decimal_point' ) ).text();
					
					/*
					 * TODO: Currently, these options use the plugin-wide defaults for locale.
					 * When per-form locales are implemented, these will need to be revisited.
					 */
					var autoNumericOptions = {
					    digitGroupSeparator        : thousands_sep,
					    decimalCharacter           : decimal_point,
					    currencySymbol             : currencySymbol
					};

					// Initialization
					var autoN_el = jQuery(jQuery( this.el ).find( '.nf-element' )[ 0 ]);
					new AutoNumeric( jQuery( this.el ).find( '.nf-element' )[ 0 ], autoNumericOptions );
					// update the value for the model so it gets saved to
					// the database properly
					var context = this;
					autoN_el.on( 'change', function( e ) {
						context.model.set( 'value', e.target.value );
					})
				} else {
					jQuery( this.el ).find( '.nf-element' ).mask( mask );
				} 			
	   		}

			nfRadio.channel( this.model.get( 'type' ) ).trigger( 'render:view', this );
			nfRadio.channel( 'fields' ).trigger( 'render:view', this );
		},

		templateHelpers: function () {
			var that = this;
	    	return {

				renderElement: function(){
					var tmpl = _.find( this.element_templates, function( tmpl ) {
						if ( 0 < jQuery( '#tmpl-nf-field-' + tmpl ).length ) {
							return true;
						}
					} );
					var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-' + tmpl );
					
					return template( this );
				},

				renderLabel: function() {
					var template = nfRadio.channel( 'app' ).request( 'get:template',  '#tmpl-nf-field-label' );
					return template( this );
				},

				renderLabelClasses: function () {
					var classes = '';
					if ( 'undefined' != typeof this.customLabelClasses ) {
						classes = this.customLabelClasses( classes );
					}
					return classes;
				},

				renderPlaceholder: function() {
					var placeholder = this.placeholder;

					if ( 'undefined' != typeof this.customPlaceholder ) {
						placeholder = this.customPlaceholder( placeholder );
					}

					if( '' != jQuery.trim( placeholder ) ) {
						return 'placeholder="' + placeholder + '"';
					} else {
						return '';
					}
				},

				renderWrapClass: function() {
					var wrapClass = 'field-wrap ' + this.type + '-wrap';

					// Check if type and parentType are different. If, so
					// then add appropriate parentType wrap class
					if ( this.type !== this.parentType ) {
						wrapClass = wrapClass + ' ' + this.parentType + '-wrap';
					}
					// If we have an old_classname defined, output wrap class for backward compatibility
					if ( 'undefined' != typeof this.old_classname && 0 < jQuery.trim( this.old_classname ).length ) {
						wrapClass += ' ' + this.old_classname + '-wrap';
					}

					if ( 'undefined' != typeof customWrapClass ) {
						wrapClass = customWrapClass( wrapClass );
					}

					return wrapClass;
				},

				renderClasses: function() {
					var classes = this.classes;

					if ( this.error ) {
						classes += ' nf-error';
					} else {
						classes = classes.replace( 'nf-error', '' );
					}

					if ( 'undefined' != typeof this.element_class && 0 < jQuery.trim( this.element_class ).length ) {
						classes += ' ' + this.element_class;
					}

					/*
					 * If we have a function for adding extra classes, add those.
					 */

					if ( 'undefined' != typeof this.customClasses ) {
						classes = this.customClasses( classes );
					}
					
					return classes;
				},

				maybeDisabled: function() {
					if ( 1 == this.disable_input ) {
						return 'disabled';
					} else {
						return '';
					}
				},
                
                maybeRequired: function() {
                    if ( 1 == this.required ) {
                        return 'required';
                    } else {
                        return '';
                    }
                },

				maybeDisableAutocomplete: function() {
					if ( 1 == this.disable_browser_autocomplete ) {
						return 'autocomplete="off"';
					} else {
						return '';
					}
				},

				maybeInputLimit: function() {
					if ( 'characters' == this.input_limit_type && '' != jQuery.trim( this.input_limit ) ) {
						return 'maxlength="' + this.input_limit + '"';
					} else {
						return '';
					}
				},

				getHelpText: function() {
					// this.help_text = jQuery( this.help_text ).html();
					// return ( 'undefined' != typeof this.help_text ) ? this.help_text.replace(/"/g, "&quot;") : '';
					return ( 'undefined' != typeof this.help_text ) ? this.help_text : '';
				},

				maybeRenderHelp: function() {

					// use jQuery().text() to make sure help_text has actual
					// text and not just HTML tags.
					var check_text_par = document.createElement( 'p' );
                    check_text_par.innerHTML = this.help_text;

                    var shouldRenderHelpText = false;
                    // Check for text or image tags
					if ( 0 != jQuery.trim( jQuery( check_text_par ).text() ).length
						|| 0 < jQuery( check_text_par ).find('img').length ) {
                    	shouldRenderHelpText = true;
                    }

					if ( 'undefined' != typeof this.help_text && shouldRenderHelpText ) {
						var icon = document.createElement( 'span' );
						icon.classList.add( 'fa', 'fa-info-circle', 'nf-help' );
						icon.setAttribute( 'data-text', this.getHelpText() );
						return icon.outerHTML;
					} else {
						return '';
					}
				},

				renderDescText: function() {
					if ( 'undefined' == typeof this.desc_text ) {
						return '';
					}

					// Creates an element so we can check to see if the text is empty.
					var text = document.createElement( 'p' );
					text.innerHTML = this.desc_text;
					if( 0 == jQuery.trim( text.innerText ).length ) return '';

                    var check, checkText;
					checkText = document.createTextNode( this.desc_text );
					check = document.createElement( 'p' );
					check.appendChild( checkText );
					if ( 0 != jQuery.trim( jQuery( check ).text() ).length ) {
						var descriptionText, fieldDescription;
                        descriptionText  = document.createRange().createContextualFragment( this.desc_text );
                        fieldDescription  = document.createElement( 'div' );
						fieldDescription.classList.add( 'nf-field-description' );
						fieldDescription.appendChild( descriptionText );
						return fieldDescription.outerHTML;
					} else {
						return '';
					}
				},
                
                renderNumberDefault: function() {
                    // If the field is clean...
                    if ( this.clean ) {
                        // If we have a default...
                        if ( this.default ) {
                            return this.default;
                        } // If we do not have a placeholder...
                        else if ( ! this.placeholder ) {
                            return this.value;
                        } // Otherwise...
                        else {
                            return '';
                        }
                    } // Otherwise... (The field is not clean.)
                    else {
                        return this.value;
                    }
                },

				renderCurrencyFormatting: function( number ) {
					/*
					 * Our number will have a . as a decimal point. We want to replace that with our locale decimal, nfi18n.decimal_point.
					 */
					var replacedDecimal = number.toString().replace( '.', '||' );
					/*
					 * Add thousands separator. Our original number var won't have thousands separators.
					 */
					var replacedThousands = replacedDecimal.replace( /\B(?=(\d{3})+(?!\d))/g, nfi18n.thousands_sep );
					var formattedNumber = replacedThousands.replace( '||', nfi18n.decimal_point );

					var form = nfRadio.channel( 'app' ).request( 'get:form', that.model.get( 'formID' ) );
					var currency_symbol = form.get( 'settings' ).currency_symbol;
					return currency_symbol + formattedNumber;
				},

				maybeRenderTime: function() {
					if ( 'time_only' == this.date_mode || 'date_and_time' == this.date_mode ) {
						return true;
					}
					return false;
				},
			};
		},

		events: {
			'change .nf-element': 'fieldChange',
			'keyup .nf-element': 'fieldKeyup',
			'click .nf-element': 'fieldClick',
			'click .extra': 'extraClick',
			'change .extra': 'extraChange',
			'blur .nf-element': 'fieldBlur'
		},

		fieldChange: function( e ) {
			var el = jQuery( e.currentTarget );
			var response = nfRadio.channel( 'nfAdmin' ).request( 'change:field', el, this.model );
		},

		fieldKeyup: function( e ) {
			var el = jQuery( e.currentTarget );
			var keyCode = e.keyCode;
			nfRadio.channel( 'field-' + this.model.get( 'id' ) ).trigger( 'keyup:field', el, this.model, keyCode );
			nfRadio.channel( this.model.get( 'type' ) ).trigger( 'keyup:field', el, this.model, keyCode );
			nfRadio.channel( 'fields' ).trigger( 'keyup:field', el, this.model, keyCode );
		},

		fieldClick: function( e ) {
			var el = jQuery( e.currentTarget );
			nfRadio.channel( 'field-' + this.model.get( 'id' ) ).trigger( 'click:field', el, this.model );
			nfRadio.channel( this.model.get( 'type' ) ).trigger( 'click:field', el, this.model );
			nfRadio.channel( 'fields' ).trigger( 'click:field', el, this.model );
		},

		extraClick: function( e ) {
			nfRadio.channel( 'field-' + this.model.get( 'id' ) ).trigger( 'click:extra', e, this.model );
			nfRadio.channel( this.model.get( 'type' ) ).trigger( 'click:extra', e, this.model );
			nfRadio.channel( 'fields' ).trigger( 'click:extra', e, this.model );
		},

		extraChange: function( e ) {
			nfRadio.channel( 'field-' + this.model.get( 'id' ) ).trigger( 'change:extra', e, this.model );
			nfRadio.channel( this.model.get( 'type' ) ).trigger( 'change:extra', e, this.model );
			nfRadio.channel( 'fields' ).trigger( 'change:extra', e, this.model );
		},

		fieldBlur: function( e ) {
			var el = jQuery( e.currentTarget );
			nfRadio.channel( 'field-' + this.model.get( 'id' ) ).trigger( 'blur:field', el, this.model );
			nfRadio.channel( this.model.get( 'type' ) ).trigger( 'blur:field', el, this.model );
			nfRadio.channel( 'fields' ).trigger( 'blur:field', el, this.model );
		},

		onAttach: function() {
			nfRadio.channel( this.model.get( 'type' ) ).trigger( 'attach:view', this );
		}
	});

	return view;
} );

define( 'views/beforeField',[], function() {
    var view = Marionette.ItemView.extend({
        tagName: 'nf-section',
        template: '#tmpl-nf-field-before'
    });

    return view;
} );
define( 'views/fieldErrorItem',[], function() {
	var view = Marionette.ItemView.extend({
		tagName: 'nf-section',
		template: '#tmpl-nf-field-error',

		onRender: function() {
			this.$el = this.$el.children();
			this.$el.unwrap();
			this.setElement( this.$el );
		},
	});

	return view;
} );
define( 'views/fieldErrorCollection',['views/fieldErrorItem'], function( fieldErrorItem ) {
	var view = Marionette.CollectionView.extend({
		tagName: "nf-errors",
		childView: fieldErrorItem,

		initialize: function( options ) {
			this.fieldModel = options.fieldModel;
		},

		onRender: function() {
			if ( 0 == this.fieldModel.get( 'errors' ).models.length ) {
                this.fieldModel.removeWrapperClass( 'nf-error' );
                this.fieldModel.removeWrapperClass( 'nf-fail' );
                this.fieldModel.addWrapperClass( 'nf-pass' );
                this.fieldModel.setInvalid( false );
            } else {
                this.fieldModel.removeWrapperClass( 'nf-pass' );
                this.fieldModel.addWrapperClass( 'nf-fail' );
                this.fieldModel.addWrapperClass( 'nf-error' );
                this.fieldModel.setInvalid( true );
            }

		}
	});

	return view;
} );

define( 'views/inputLimit',[], function() {
    var view = Marionette.ItemView.extend({
        tagName: 'nf-section',
        template: '#tmpl-nf-field-input-limit',

        initialize: function() {
        	this.listenTo( nfRadio.channel( 'field-' + this.model.get( 'id' ) ), 'keyup:field', this.updateCount );
        	this.count = this.model.get( 'input_limit' );
        	this.render();
        },

        updateCount: function( el, model ) {
            var value = jQuery( el ).val();
            var regex = /\s+/gi;
            var words = value.trim().replace(regex, ' ').split(' ');
            var wordCount = words.length;
            var charCount = value.length;
            
            /**
             * PHP Config has 'char' instead of 'characters', so I changed it to
             * 'characters', but added 'char' here so existing form fields will
             * act correctly
             **/
            if ( 'characters' == this.model.get( 'input_limit_type' )
                    || 'char' == this.model.get( 'input_limit_type' ) ) {
                jQuery( el ).attr( 'maxlength', this.model.get( 'input_limit' ) );
                this.count = this.model.get( 'input_limit' ) - charCount;
            } else {
                this.count = this.model.get( 'input_limit' ) - wordCount;
                var limit = this.model.get( 'input_limit' );
                if( wordCount > limit ){
                    jQuery( el ).val( words.slice( 0, limit).join( ' ' ) );
                }
            }

        	this.render();
        },

        templateHelpers: function() {
        	var that = this;
        	return {
        		currentCount: function() {
        			return that.count;
        		}
        	}
        }

    });

    return view;
} );
define( 'views/afterField',['views/fieldErrorCollection', 'views/inputLimit'], function( fieldErrorCollection, InputLimitView ) {
    var view = Marionette.ItemView.extend({
        tagName: 'nf-section',
        template: '#tmpl-nf-field-after',

        initialize: function() {
    		this.model.on( 'change:errors', this.changeError, this );
        },

        onRender: function() {
        	/*
        	 * If we have an error, render our error view.
        	 * TODO: Perhaps move to a controller?
        	 */
        	var errorEl = jQuery( this.el ).children( '.nf-error-wrap' );
    		this.errorCollectionView = new fieldErrorCollection( { el: errorEl, collection: this.model.get( 'errors' ), fieldModel: this.model } );
            if ( 0 < this.model.get( 'errors' ).length ) {
               this.errorCollectionView.render(); 
            }
            
    		/*
    		 * If we have an input limit set, render the view that contains our counter
    		 * TODO: Move this to a controller so that the logic isn't in the view.
    		 */
    		if ( 'undefined' != typeof this.model.get( 'input_limit' ) && '' != jQuery.trim( this.model.get( 'input_limit' ) ) ){
    			var inputLimitEl = jQuery( this.el ).children( '.nf-input-limit');
    			this.inputLimitView = new InputLimitView( { el: inputLimitEl, model: this.model } );
    		}
        },

        changeError: function() {
			this.errorCollectionView.render();
		},

    });

    return view;
} );
define( 'views/fieldRepeaterFieldLayout',['views/fieldItem', 'views/beforeField', 'views/afterField'], function( fieldItem, beforeField, afterField ) {

    var view = Marionette.LayoutView.extend({
        tagName: 'nf-field',

        regions: {
            beforeField: '.nf-before-field',
            field: '.nf-field',
            afterField: '.nf-after-field',
        },

        initialize: function() {
            this.listenTo( this.model, 'change:visible', this.render, this );
        },

        getTemplate: function() {
            if ( this.model.get( 'visible' ) ) {
                return '#tmpl-nf-field-layout';
            } else {
                return '#tmpl-nf-empty';
            }
        },

        onRender: function() {
            if ( this.model.get( 'visible' ) ) {
                this.beforeField.show( new beforeField( { model: this.model } ) );
                this.field.show( new fieldItem( { model: this.model } ) ); 
                this.afterField.show( new afterField( { model: this.model } ) );
            }
        },

        templateHelpers: function() {
            return {
                renderContainerClass: function() {
                    var containerClass = ' label-' + this.label_pos + ' ';
                    // If we have a description position, add that to our container.
                    if ( 'undefined' != typeof this.desc_pos ) {
                        containerClass += 'desc-' + this.desc_pos + ' ';
                    }
                    // if we have a container_class field setting, add that to our container.
                    if ( 'undefined' != typeof this.container_class && 0 < jQuery.trim( this.container_class ).length ) {
                        containerClass += this.container_class + ' ';
                    }

                    //check if the parent type and type are different. If
                    // so, add parent type container styling
                    
                    if( this.type !== this.parentType ) {
                        containerClass += ' ' + this.parentType + '-container';
                    }
                    return containerClass;
                }
            }
        }
    });

    return view;
} );

define( 'views/fieldRepeaterFieldCollection',['views/fieldRepeaterFieldLayout'], function( fieldLayout ) {
	var view = Marionette.CollectionView.extend({
		tagName: 'nf-fields-wrap',
		childView: fieldLayout,
	});

	return view;
} );
define( 'views/fieldRepeaterSetLayout',[ 'views/fieldRepeaterFieldCollection' ], function( fieldCollection ) {
    var view = Marionette.LayoutView.extend({
        tagName: 'fieldset',
        template: '#tmpl-nf-field-repeater-set',

        regions: {
            fields: '.nf-repeater-fieldset',
        },

        onRender: function() {
            this.fields.show( new fieldCollection( { collection: this.model.get( 'fields' ) } ) );
        },

        events: {
            'click .nf-remove-fieldset': 'removeSet',
        },

        removeSet: function() {
            nfRadio.channel( "field-repeater" ).trigger( 'remove:fieldset',  this.model )
        }

    });

    return view;
} );
define( 'views/fieldRepeaterSetCollection',['views/fieldRepeaterSetLayout'], function( repeaterSetLayout ) {
	var view = Marionette.CollectionView.extend({
		tagName: 'div',
		childView: repeaterSetLayout,
	});

	return view;
} );
define( 'views/fieldRepeaterLayout',[ 'views/fieldRepeaterSetCollection' ], function( repeaterSetCollection ) {

    var view = Marionette.LayoutView.extend({
        tagName: 'div',
        template: '#tmpl-nf-field-repeater',

        regions: {
            sets: '.nf-repeater-fieldsets',
        },

        initialize: function() {

            this.collection = this.model.get( 'sets' );

            nfRadio.channel( 'field-repeater' ).on( 'rerender:fieldsets', this.render, this );

            this.listenTo( nfRadio.channel( 'form-' + this.model.get( 'formID' ) ), 'before:submit', this.beforeSubmit );

        },

        onRender: function() { 
            this.sets.show( new repeaterSetCollection( { collection: this.collection } ) );
        },

        events: {
            'click .nf-add-fieldset': 'addSet'
        },

        addSet: function( e ) {
            nfRadio.channel( 'field-repeater' ).trigger( 'add:fieldset', e );       
        },

        beforeSubmit: function() {
			this.collection.beforeSubmit( this.model.get( 'sets' ) );
		}
        

    });

    return view;
} );
define( 'views/fieldLayout',['views/fieldItem', 'views/beforeField', 'views/afterField', 'views/fieldRepeaterLayout'], function( fieldItem, beforeField, afterField, repeaterFieldLayout ) {

    var view = Marionette.LayoutView.extend({
        tagName: 'nf-field',

        regions: {
            beforeField: '.nf-before-field',
            field: '.nf-field',
            afterField: '.nf-after-field',
        },

        initialize: function() {
            this.listenTo( this.model, 'change:visible', this.render, this );
        },

        getTemplate: function() {
            if ( this.model.get( 'visible' ) ) {
                return '#tmpl-nf-field-layout';
            } else {
                return '#tmpl-nf-empty';
            }
        },

        onRender: function() {
            if ( this.model.get( 'visible' ) ) {
                this.beforeField.show( new beforeField( { model: this.model } ) );
                if ( 'repeater' == this.model.get( 'type' ) ) {
                    this.field.show( new repeaterFieldLayout( { model: this.model } ) );
                } else {
                    this.field.show( new fieldItem( { model: this.model } ) ); 
                }
                this.afterField.show( new afterField( { model: this.model } ) );
            }
        },

        templateHelpers: function() {
            return {
                renderContainerClass: function() {
                    var containerClass = ' label-' + this.label_pos + ' ';
                    // If we have a description position, add that to our container.
                    if ( 'undefined' != typeof this.desc_pos ) {
                        containerClass += 'desc-' + this.desc_pos + ' ';
                    }
                    // if we have a container_class field setting, add that to our container.
                    if ( 'undefined' != typeof this.container_class && 0 < jQuery.trim( this.container_class ).length ) {
                        containerClass += this.container_class + ' ';
                    }

                    //check if the parent type and type are different. If
                    // so, add parent type container styling
                    
                    if( this.type !== this.parentType ) {
                        containerClass += ' ' + this.parentType + '-container';
                    }

                    return containerClass;
                }
            }
        }

    });

    return view;
} );

/**
 * Return views that might be used in extensions.
 * These are un-instantiated views.
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */
define( 'controllers/loadViews',['views/fieldItem', 'views/fieldLayout'], function( fieldItemView, fieldLayoutView ) {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			// Reply to requests for our field item view.
			nfRadio.channel( 'views' ).reply( 'get:fieldItem', this.getFieldItem );

			nfRadio.channel( 'views' ).reply( 'get:fieldLayout', this.getFieldLayout );
		},

		getFieldItem: function( model ) {
			return fieldItemView;
		},

		getFieldLayout: function() {
			return fieldLayoutView;
		}

	});

	return controller;
} );
/**
 * If a form has at least one field error, we should disable the submit button and add a form error.
 * If a form had errors, but all the field errors have been removed, we should remove the form error.
 *
 * @since 3.0
 */
define('controllers/formErrors',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			/*
			 * Listen for error messages being added to and removed from fields.
			 */
			this.listenTo( nfRadio.channel( 'fields' ), 'add:error', this.addError );
			this.listenTo( nfRadio.channel( 'fields' ), 'remove:error', this.removeError );

			/*
			 * Respond to requests to get form errors
			 */
			nfRadio.channel( 'form' ).reply( 'get:errors', this.getFormErrors );
		},

		addError: function( fieldModel, errorID, errorMsg ) {
			var formModel = nfRadio.channel( 'app' ).request( 'get:form', fieldModel.get( 'formID' ) );
			/*
			 * We store our errors in this object by field ID so that we don't have to loop over all our fields when we're testing for errors.
			 * They are stored as an object within an array, using the field ID as the key.
			 *
			 * If we haven't setup an array item for this field, set it as an object.
			 */
			if ( 'undefined' == typeof formModel.get( 'fieldErrors' )[ fieldModel.get( 'id' ) ] ) {
				formModel.get( 'fieldErrors' )[ fieldModel.get( 'id' ) ] = {};
			}
			// Add an error to our tracking array
			formModel.get( 'fieldErrors' )[ fieldModel.get( 'id' ) ][ errorID ] = errorMsg;
			/*
			 * We have at least one field error, so submmission should be prevented.
			 * Add a form error.
			 */
			nfRadio.channel( 'form-' + fieldModel.get( 'formID' ) ).request( 'add:error', 'field-errors', formModel.get( 'settings' ).formErrorsCorrectErrors );
		},

		removeError: function( fieldModel, errorID ) {
			var formModel = nfRadio.channel( 'app' ).request( 'get:form', fieldModel.get( 'formID' ) );
			// Remove this error ID from our tracking array.
			formModel.get( 'fieldErrors' )[ fieldModel.get( 'id' ) ] = _.omit( formModel.get( 'fieldErrors' )[ fieldModel.get( 'id' ) ], errorID );
			/*
			 * If we don't have any more error IDs on this field, then we need to remove this field from the array.
			 *
			 * Then, if the fieldErrors tracking array has a length of 0, we remove our form error, because all field errors have been dealt with.
			 */
			if ( 0 == _.size( formModel.get( 'fieldErrors' )[ fieldModel.get( 'id' ) ] ) ) {
				delete formModel.get( 'fieldErrors' )[ fieldModel.get( 'id' ) ];
			}

			if ( 0 == _.size( formModel.get( 'fieldErrors' ) ) ) {
				// Remove our form error.
				nfRadio.channel( 'form-' + fieldModel.get( 'formID' ) ).request( 'remove:error', 'field-errors' );
			}
		},

		getFormErrors: function( formID ) {
			var formModel = nfRadio.channel( 'app' ).request( 'get:form', formID );
			var errors = false;
			
			if ( formModel ) {
				/*
				 * Check to see if we have any errors on our form model.
				 */
				if ( 0 !== formModel.get( 'errors' ).length ) {
					_.each( formModel.get( 'errors' ).models, function( error ) {
						errors = errors || {};
						errors[ error.get( 'id' ) ] = error.get( 'msg' );
					} );						
				}

				
			}
			return errors;
		}
	});

	return controller;
} );
/**
 * Handles submission of our form.
 */
define('controllers/submit',[], function() {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			this.listenTo( nfRadio.channel( 'forms' ), 'init:model', this.registerSubmitHandler );
		},

		/**
		 * Register the submission handler function.
		 *
		 * @since  3.0
		 * @param  Backbone.model 	formModel
		 * @return void
		 */
		registerSubmitHandler: function( formModel ) {
			nfRadio.channel( 'form-' + formModel.get( 'id' ) ).reply( 'submit', this.submit );
		},

		/**
		 * Handles the actual submission of our form.
		 * When we submit:
		 *
		 * 1) Send out a message saying that we're about to begin form submission.
		 * 2) Check the form for errors
		 * 3) Submit the data
		 * 4) Send out a message with our response
		 *
		 * @since  3.0
		 * @param  Backbone.model 	formModel
		 * @return void
		 */
		submit: function( formModel ) {

			/*
			 * Send out a radio message saying that we're about to begin submitting.
			 * First we send on the generic forms channel, and then on the form-specific channel.
			 */
			nfRadio.channel( 'forms' ).trigger( 'before:submit', formModel );
			nfRadio.channel( 'form-' + formModel.get( 'id' ) ).trigger( 'before:submit', formModel );

			/*
			 * Validate our field models.
			 */
			var validate = nfRadio.channel( 'forms' ).request( 'maybe:validate', formModel );
		 	if( false !== validate ){

                // When validating all fields, set clean to false to force validation.
                _.each( formModel.get( 'fields' ).models, function( fieldModel ) {
                    fieldModel.set( 'clean', false );
                } );

				/*
				 * This method is defined in our models/fieldCollection.js file,
				 * except where overridden by an add-on (ie Layout & Styles).
				 */
				formModel.get( 'formContentData' ).validateFields();
			}

			var submit = nfRadio.channel( 'form-' + formModel.get( 'id' ) ).request( 'maybe:submit', formModel );
			if ( false == submit ) {
				nfRadio.channel( 'forms' ).trigger( 'submit:cancel', formModel );
				nfRadio.channel( 'form-' + formModel.get( 'id' ) ).trigger( 'submit:cancel', formModel );
				return;
			}

			if( false !== validate ){

				// Ignore non-blocking errors.
				var blockingFormErrors = _.filter( formModel.get( 'errors' ).models, function( error ){

					// Ignore email action related errors.
					if( 'invalid_email' == error.get( 'id' ) || 'email_not_sent' == error.get( 'id' ) ) return false;

					return true; // Error is blocking.
				});

				/*
				 * Make sure we don't have any form errors before we submit.
				 * Return false if we do.
				 */
				if ( 0 != _.size( blockingFormErrors ) ) {
					nfRadio.channel( 'forms' ).trigger( 'submit:failed', formModel );
					nfRadio.channel( 'form-' + formModel.get( 'id' ) ).trigger( 'submit:failed', formModel );
					return false;
				}
			}

			/*
			 * Send out a radio message saying that we're about to begin submitting.
			 * First we send on the generic forms channel, and then on the form-specific channel.
			 */
			nfRadio.channel( 'forms' ).trigger( 'after:submitValidation', formModel );
			nfRadio.channel( 'form-' + formModel.get( 'id' ) ).trigger( 'after:submitValidation', formModel );

			/*
			 * Actually submit our form, and send out a message with our response.
			 */

 			var formID = formModel.get( 'id' );
			var fields = {};
			_.each( formModel.get( 'fields' ).models, function( field ) {
				var fieldDataDefaults = { value:field.get( 'value' ), id:field.get( 'id' ) };

				// Add field data at the field ID for efficient access.
				fields[ field.get( 'id' ) ] = nfRadio.channel( field.get( 'type' ) ).request( 'get:submitData', fieldDataDefaults, field ) || fieldDataDefaults;;
			} );
			var extra = formModel.get( 'extra' );
			var settings = formModel.get( 'settings' );
			delete settings.formContentData;
			var formData = JSON.stringify( { id: formID, fields: fields, settings: settings, extra: extra } );
			var data = {
				'action': 'nf_ajax_submit',
				'security': nfFrontEnd.ajaxNonce,
				'nonce_ts': nfFrontEnd.nonce_ts,
				'formData': formData
			}

			var that = this;

			jQuery.ajax({
			    url: nfFrontEnd.adminAjax,
			    type: 'POST',
			    data: data,
			    cache: false,
			   	success: function( data, textStatus, jqXHR ) {
			   		try {
				   		var response = data;
				        nfRadio.channel( 'forms' ).trigger( 'submit:response', response, textStatus, jqXHR, formModel.get( 'id' ) );
				    	nfRadio.channel( 'form-' + formModel.get( 'id' ) ).trigger( 'submit:response', response, textStatus, jqXHR );
				    	jQuery( document ).trigger( 'nfFormSubmitResponse', { response: response, id: formModel.get( 'id' ) } );
			   		} catch( e ) {
			   			console.log( e );
			   			console.log( 'Parse Error' );
						console.log( e );
			   		}

			    },
			    error: function( jqXHR, textStatus, errorThrown ) {
			        // Handle errors here
			        console.log('ERRORS: ' + errorThrown);
					console.log( jqXHR );

					try {
						var response = jQuery.parseJSON( jqXHR.responseText );
						nfRadio.channel( 'forms' ).trigger( 'submit:response', response, textStatus, jqXHR, formModel.get( 'id' ) );
						nfRadio.channel( 'form-' + formModel.get( 'id' ) ).trigger( 'submit:response', response, textStatus, jqXHR );
					} catch( e ) {
						console.log( 'Parse Error' );
					}

			        // STOP LOADING SPINNER
					nfRadio.channel( 'forms' ).trigger( 'submit:response', 'error', textStatus, jqXHR, errorThrown );
			    }
			});

		}

	});

	return controller;
} );

define( 'views/fieldCollection',['views/fieldLayout'], function( fieldLayout ) {
	var view = Marionette.CollectionView.extend({
		tagName: 'nf-fields-wrap',
		childView: fieldLayout

	});

	return view;
} );
/**
 * Default filters
 * 
 * @package Ninja Forms builder
 * @subpackage Main App
 * @copyright (c) 2015 WP Ninjas
 * @since 3.0
 */
define( 'controllers/defaultFilters',[ 'views/fieldCollection', 'models/fieldCollection' ], function( FieldCollectionView, FieldCollection ) {
	var controller = Marionette.Object.extend( {
		initialize: function() {
			this.listenTo( nfRadio.channel( 'form' ), 'before:filterData', this.registerDefaultDataFilter );
		},

		registerDefaultDataFilter: function( formModel ) {
			/*
			 * Set our default formContent load filter
			 */
			nfRadio.channel( 'formContent' ).request( 'add:loadFilter', this.defaultFormContentLoad, 10, this );
			/*
			 * Set our default formContentView.
			 */
			nfRadio.channel( 'formContent' ).request( 'add:viewFilter', this.defaultFormContentView, 10, this );
		},

		defaultFormContentLoad: function( formContentData, formModel, context ) {
			var fieldCollection = formModel.get( 'fields' );
			/*
			 * If we only have one load filter, we can just return the field collection.
			 */
			var formContentLoadFilters = nfRadio.channel( 'formContent' ).request( 'get:loadFilters' );
			var sortedArray = _.without( formContentLoadFilters, undefined );
			if ( 1 == sortedArray.length || 'undefined' == typeof formContentData || true === formContentData instanceof Backbone.Collection ) return formModel.get( 'fields' );

        	var fieldModels = _.map( formContentData, function( key ) {
        		return formModel.get( 'fields' ).findWhere( { key: key } );
        	}, this );

        	var currentFieldCollection = new FieldCollection( fieldModels );

        	fieldCollection.on( 'reset', function( collection ) {
        		var resetFields = [];
        		currentFieldCollection.each( function( fieldModel ) {
        			if ( 'submit' != fieldModel.get( 'type' ) ) {
        				resetFields.push( collection.findWhere( { key: fieldModel.get( 'key' ) } ) );
        			} else {
        				resetFields.push( fieldModel );
        			}
        		} );

                currentFieldCollection.options = { formModel: formModel };
        		currentFieldCollection.reset( resetFields );
        	} );

        	return currentFieldCollection;
        },

        defaultFormContentView: function() {
        	return FieldCollectionView;
        }

	});

	return controller;
} );
/**
 * Controller responsible for removing unique field errors.
 */

define('controllers/uniqueFieldError',[], function() {
	var controller = Marionette.Object.extend( {

		initialize: function() {
			/*
			 * Listen to keyup and field changes.
			 *
			 * If those fields have a unique field error, remove that error.
			 */
			this.listenTo( nfRadio.channel( 'fields' ), 'change:modelValue', this.removeError );
			this.listenTo( nfRadio.channel( 'fields' ), 'keyup:field', this.removeError );
			this.listenTo( nfRadio.channel( 'fields' ), 'blur:field', this.removeError );

		},

		removeError: function( el, model ) {
			model = model || el;
			/*
			 * Remove any unique field errors.
			 */
			nfRadio.channel( 'fields' ).request( 'remove:error', model.get( 'id' ), 'unique_field' );
		},

	});

	return controller;
} );
define( 'models/fieldRepeaterSetModel',[], function() {
	var model = Backbone.Model.extend( {

		initialize: function(fieldsets, options) {

			this.repeaterFieldModel = options.repeaterFieldModel;

			this.set( 'label', this.repeaterFieldModel.get('label') );

			nfRadio.channel( "field-repeater" ).reply( 'reset:repeaterFieldsets', this.resetRepeaterFieldsets, this );
			nfRadio.channel( "field-repeater" ).reply( 'get:repeaterFieldsets', this.getRepeaterFieldsets, this );
			nfRadio.channel( "field-repeater" ).reply( 'get:repeaterFields', this.getRepeaterFields, this );
			nfRadio.channel( "field-repeater" ).reply( 'get:repeaterFieldById', this.getRepeaterFieldById, this );
			
		},

		resetRepeaterFieldsets: function( models) {
			this.collection = {};
			this.collection.models = models;
		},

		getRepeaterFieldsets: function() {
			return this.collection.models;
		},

		getRepeaterFields: function() {
			let fieldsets = this.getRepeaterFieldsets();
			if(fieldsets.length <= 0 ) return;

			let fields = [];
			_.each(fieldsets, function(fieldset){
				const inFields = fieldset.get('fields');
				
				_.each( inFields.models, function( field ){
					fields.push( field );
				});
			});
			return fields;
		},

		getRepeaterFieldById: function( id ){
			let fields = this.getRepeaterFields();
			if(fields.length <= 0 ) return;

			let model;
			_.each(fields, function(field){
				if( field.id === id ){
					model = field;
				}
			});
			return model;
		}

	} );

	return model;
} );

define( 'models/fieldRepeaterSetCollection',['models/fieldRepeaterSetModel', 'models/fieldCollection' ], function( repeaterSetModel, fieldCollection ) {
	var collection = Backbone.Collection.extend( {
		model: repeaterSetModel,

		initialize: function( models, options ) {
			this.options = options;
		
			nfRadio.channel( "field-repeater" ).on( 'sort:fieldsets', this.sortIDs, this);
			nfRadio.channel( "field-repeater" ).on( 'remove:fieldset', this.removeSet, this );
			nfRadio.channel( "field-repeater" ).on( 'add:fieldset', this.addSet, this );

		},

		addSet: function(e) {
			//Get correct Field Model in case of multiple Repeater fields use
			const repeaterFieldID = jQuery(e.target).prev(".nf-repeater").data("field-id");
			const repeaterFieldModel = this.options.repeaterFieldModel.id === repeaterFieldID ? this.options.repeaterFieldModel : undefined;

			if(repeaterFieldModel !== undefined){
				//Create a new collection
				let fields = new fieldCollection( this.options.templateFields, { formModel: this.options.formModel, repeaterFieldModel: repeaterFieldModel } );
				//Add it th sets of collection
				this.add( { fields: fields }, {repeaterFieldModel: repeaterFieldModel } );
				//reset all fields IDs
				this.sortIDs();
			}
			
		},

		removeSet: function( fieldset ) {
			//Remove the fieldset
			this.remove( fieldset );
			//reset all fields IDs
			this.sortIDs();
		},

		sortIDs: function(){
			nfRadio.channel( "field-repeater" ).request( 'reset:repeaterFieldsets', this.models );
			//Reset repeater fields IDs when adding / removing a field
			_.each(this.models, function(fieldset, modelIndex){
				let fields = fieldset.get('fields');
				fieldset.set( 'index', modelIndex + 1 );
				_.each( fields.models, function( field ) {
					//Remove suffix if it has one
					cutEl = String(field.id).split('_')[0];
					//Update Suffix using fieldset index
					field.set("id", cutEl + "_" + modelIndex);					
				});
			});
			//Reload repeater field view ( collection of fieldsets updated )
			nfRadio.channel( 'field-repeater' ).trigger( 'rerender:fieldsets' );
		},

		beforeSubmit: function( sets ) {
			//Collect values of all fields in the repeater and create repeaterFieldValue object
			let fieldsetCollection = sets.models;
			if(fieldsetCollection.length > 0){
				let repeaterFieldValue = {};
				//Loop through fieldsets
				_.each( fieldsetCollection, function( fieldset ){
					let fields = fieldset.get('fields');
					//Loop through fields in each fieldsets
					_.each( fields.models, function( field ){
						//Get ID and Value to format and store them in the repeaterFieldValue object
						let value = field.get('value');
						let id = field.get('id');
						repeaterFieldValue[id] = {
							"value": value,
							"id": id
						}
					});
				});
				//Update repeater field value with repeaterFieldValue 
				nfRadio.channel( 'nfAdmin' ).request( 'update:field', this.options.repeaterFieldModel, repeaterFieldValue);
			}

		},

	} );
	return collection;
} );
define('controllers/fieldRepeater',[ 'models/fieldRepeaterSetCollection', 'models/fieldCollection' ], function( repeaterSetCollection, fieldCollection ) {
    var controller = Marionette.Object.extend({

        initialize: function () {
            this.listenTo( nfRadio.channel( 'repeater' ), 'init:model', this.initRepeater );
        },

        initRepeater: function ( model ) {
        	if ( 'undefined' == typeof model.collection.options.formModel ) {
        		return false;
        	}

        	let fields = new fieldCollection( model.get( 'fields' ), { formModel: model.collection.options.formModel } );
        	model.set( 'sets', new repeaterSetCollection( [ { fields: fields } ], { templateFields: model.get( 'fields' ), formModel: model.collection.options.formModel, repeaterFieldModel: model } ) );
        },

    });

    return controller;
});
define(
	'controllers/loadControllers',[
		'controllers/formData',
		'controllers/fieldError',
		'controllers/changeField',
		'controllers/changeEmail',
		'controllers/changeDate',
		'controllers/fieldCheckbox',
		'controllers/fieldCheckboxList',
		'controllers/fieldImageList',
		'controllers/fieldRadio',
		'controllers/fieldNumber',
		'controllers/mirrorField',
		'controllers/confirmField',
		'controllers/updateFieldModel',
		'controllers/submitButton',
		'controllers/submitDebug',
		'controllers/getFormErrors',
		'controllers/validateRequired',
		'controllers/submitError',
		'controllers/actionRedirect',
		'controllers/actionSuccess',
		'controllers/fieldSelect',
		'controllers/coreSubmitResponse',
		'controllers/fieldProduct',
		'controllers/fieldTotal',
		'controllers/fieldQuantity',
		'controllers/calculations',
		'controllers/dateBackwardsCompat',
		'controllers/fieldDate',
		'controllers/fieldRecaptcha',
		'controllers/fieldRecaptchaV3',
		'controllers/fieldHTML',
		'controllers/helpText',
		'controllers/fieldTextbox',
		'controllers/fieldTextareaRTE',
		'controllers/fieldStarRating',
		'controllers/fieldTerms',
		'controllers/formContentFilters',
		'controllers/loadViews',
		'controllers/formErrors',
		'controllers/submit',
		'controllers/defaultFilters',
		'controllers/uniqueFieldError',
		'controllers/fieldRepeater',
	],
	function(
		FormData,
		FieldError,
		ChangeField,
		ChangeEmail,
		ChangeDate,
		FieldCheckbox,
		FieldCheckboxList,
		FieldImageList,
		FieldRadio,
		FieldNumber,
		MirrorField,
		ConfirmField,
		UpdateFieldModel,
		SubmitButton,
		SubmitDebug,
		GetFormErrors,
		ValidateRequired,
		SubmitError,
		ActionRedirect,
		ActionSuccess,
		FieldSelect,
		CoreSubmitResponse,
		FieldProduct,
		FieldTotal,
		FieldQuantity,
		Calculations,
		DateBackwardsCompat,
		FieldDate,
		FieldRecaptcha,
		FieldRecaptchaV3,
		FieldHTML,
		HelpText,
		FieldTextbox,
		FieldTextareaRTE,
		FieldStarRating,
		FieldTerms,
		FormContentFilters,
		LoadViews,
		FormErrors,
		Submit,
		DefaultFilters,
		UniqueFieldError,
		FieldRepeater
	) {
		var controller = Marionette.Object.extend( {
			initialize: function() {

				/**
				 * App Controllers
				 */
				new LoadViews();
				new FormErrors();
				new Submit();
				
				/**
				 * Field type controllers
				 */
				new FieldCheckbox();
				new FieldCheckboxList();
				new FieldImageList();
				new FieldRadio();
				new FieldNumber();
				new FieldSelect();
				new FieldProduct();
				new FieldTotal();
				new FieldQuantity();
				new FieldRecaptcha();
				new FieldRecaptchaV3();
				new FieldHTML();
				new HelpText();
				new FieldTextbox();
				new FieldTextareaRTE();
				new FieldStarRating();
				new FieldTerms();
				new FormContentFilters();
				new UniqueFieldError();
				new FieldRepeater();
				
				/**
				 * Misc controllers
				 */
				new FieldError();
				new ChangeField();
				new ChangeEmail();
				new ChangeDate();
				
				new MirrorField();
				new ConfirmField();
				new UpdateFieldModel();
				new SubmitButton();
				new SubmitDebug();
				new GetFormErrors();
				new ValidateRequired();
				new SubmitError();
				new ActionRedirect();
				new ActionSuccess();
				
				new CoreSubmitResponse();
				new Calculations();

				new DefaultFilters();

				/**
				 * Data controllers
				 */
				new DateBackwardsCompat();
				new FieldDate();
				new FormData();
				
			}
		});

		return controller;
} );

define( 'views/beforeForm',[], function( ) {

	var view = Marionette.ItemView.extend({
		tagName: "nf-section",
		template: "#tmpl-nf-before-form",

	});

	return view;
} );
define( 'views/formErrorItem',[], function() {
	var view = Marionette.ItemView.extend({
		tagName: 'nf-section',
		template: '#tmpl-nf-form-error',

		onRender: function() {
			// this.$el = this.$el.children();
			// this.$el.unwrap();
			// this.setElement( this.$el );
		},
	});

	return view;
} );
define( 'views/formErrorCollection',['views/formErrorItem'], function( formErrorItem ) {
	var view = Marionette.CollectionView.extend({
		tagName: "nf-errors",
		childView: formErrorItem
	});

	return view;
} );
define( 'views/honeyPot',[], function() {
    var view = Marionette.ItemView.extend({
        tagName: 'nf-section',
        template: '#tmpl-nf-form-hp',

        events: {
        	'keyup .nf-field-hp': 'maybeError',
            'change .nf-field-hp': 'maybeError'
        },

        maybeError: function( e ) {
            /*
             * If we have an empty honeyPot field, remove the honeypot form error.
             * If we do not have an empty honeyPot field, add the honeypot form error.
             */
            if ( 0 == jQuery( e.target ).val().length ) {
                nfRadio.channel( 'form-' + this.model.get( 'id' ) ).request( 'remove:error', 'honeyPot' );
            } else {
                var formModel  = nfRadio.channel( 'app'    ).request( 'get:form',  this.model.get( 'id' ) );
                nfRadio.channel( 'form-' + this.model.get( 'id' ) ).request( 'add:error', 'honeyPot', formModel.get( 'settings' ).honeypotHoneypotError );
            }
        }
    });

    return view;
} );
define( 'views/afterFormContent',['views/formErrorCollection', 'views/honeyPot'], function( FormErrors, HoneyPot ) {

    var view = Marionette.LayoutView.extend({
        tagName: "nf-section",
        template: "#tmpl-nf-after-fields",

		regions: {
			errors: ".nf-form-errors",
            hp: ".nf-form-hp"
		},

        onShow: function() {
        	this.errors.show( new FormErrors( { collection: this.model.get( 'errors' ) } ) );
            this.hp.show( new HoneyPot( { model: this.model } ) );
        }

    });

    return view;
} );
define( 'views/beforeFormContent',[], function( ) {

    var view = Marionette.ItemView.extend({
        tagName: "nf-section",
        template: "#tmpl-nf-before-fields",

        templateHelpers: function () {
            return {

                renderFieldsMarkedRequired: function() {

                    var requiredFields = this.fields.filter( { required: 1 } );
                    return ( requiredFields.length ) ? this.fieldsMarkedRequired : '';
                },
            };
        },

    });

    return view;
} );
define( 'views/formLayout',[ 'views/afterFormContent', 'views/beforeFormContent', 'models/fieldCollection' ], function( AfterFormContent, BeforeFormContent, FieldCollection ) {

	var view = Marionette.LayoutView.extend({
		tagName: "nf-section",
		template: "#tmpl-nf-form-layout",

		regions: {
			beforeFormContent: ".nf-before-form-content",
			formContent: ".nf-form-content",
			afterFormContent: ".nf-after-form-content"
		},

		initialize: function() {
			nfRadio.channel( 'form-' + this.model.get( 'id' ) ).reply( 'get:el', this.getEl, this );
			
			/*
			 * If we need to hide a form, set the visibility of this form to hidden.
			 */
			 this.listenTo( this.model, 'hide', this.hide );
		},

		onRender: function() {
			this.$el = this.$el.children();
			this.$el.unwrap();
			this.setElement( this.$el );
		},

		onShow: function() {
			this.beforeFormContent.show( new BeforeFormContent( { model: this.model } ) );
			
			/*
			 * Set our formContentData to our form setting 'formContentData'
			 */
			var formContentData = this.model.get( 'formContentData' );
			
			/*
			 * Check our fieldContentViewsFilter to see if we have any defined.
			 * If we do, overwrite our default with the view returned from the filter.
			 */
			var formContentViewFilters = nfRadio.channel( 'formContent' ).request( 'get:viewFilters' );
			
			/* 
			* Get our first filter, this will be the one with the highest priority.
			*/
			var sortedArray = _.without( formContentViewFilters, undefined );
			var callback = _.first( sortedArray );
			formContentView = callback();
			
			var options = {
				data: formContentData,
				formModel: this.model
			};
			
			/*
			 * If we have a collection, pass the returned data as the collection.
			 *
			 * If we have a model, pass the returned data as the collection.
			 */
			if ( false !== formContentData instanceof Backbone.Collection ) {
				options.collection = formContentData;
			} else if ( false !== formContentData instanceof Backbone.Model ) {
				options.model = formContentData;
			}

			this.formContent.show( new formContentView( options ) );
			this.afterFormContent.show( new AfterFormContent( { model: this.model } ) );
		},

		getEl: function() {
			return this.el;
		},

        templateHelpers: function () {
            return {

                renderClasses: function() {
                    return '';
                }

            };
        },

        hide: function() {
        	jQuery( this.el ).hide();
        }

	});

	return view;
} );
define( 'views/afterForm',[], function( ) {

	var view = Marionette.ItemView.extend({
		tagName: "nf-section",
		template: "#tmpl-nf-after-form",
		
	});

	return view;
} );
define( 'views/mainLayout',['views/beforeForm', 'views/formLayout', 'views/afterForm'], function( BeforeForm, FormLayout, AfterForm ) {

	var view = Marionette.LayoutView.extend({
		template: '#tmpl-nf-layout',

		regions: {
			responseMsg: '.nf-response-msg',
			beforeForm: '.nf-before-form',
			formLayout: '.nf-form-layout',
			afterForm: '.nf-after-form'
		},

		initialize: function() {
			this.$el = jQuery( '#nf-form-' + this.model.id + '-cont' );
			this.el = '#nf-form-' + this.model.id + '-cont';

			this.render();

			this.beforeForm.show( new BeforeForm( { model: this.model } ) );
			this.formLayout.show( new FormLayout( { model: this.model, fieldCollection: this.options.fieldCollection } ) );
			this.afterForm.show( new AfterForm( { model: this.model } ) );

			/*
			 * If we need to hide a form, set the visibility of this form to hidden.
			 */
			 this.listenTo( this.model, 'hide', this.hide );
		},

        hide: function() {
        	jQuery( this.el ).find( '.nf-form-title' ).hide();
        }

	});

	return view;
} );
// const Intl = require('intl');

// class nfLocaleConverter {
var nfLocaleConverter = function(newLocale, thousands_sep, decimal_sep) {

    // constructor(newLocale = 'en-US', thousands_sep, decimal_sep) {
        if ('undefined' !== typeof newLocale && 0 < newLocale.length) {
            this.locale = newLocale.split('_').join('-');
        } else {
            this.locale = 'en-US';
        }

        this.thousands_sep = thousands_sep || ',';
        this.decimal_sep = decimal_sep || '.';
    // }

    this.uniqueElememts = function( value, index, self ) {
        return self.indexOf(value) === index;
    }

    this.numberDecoder = function(num) {
        num = num.toString();
        // let thousands_sep = ',';
        var formatted = '';

        // Account for negative numbers.
        var negative = false;
        
        if ('-' === num.charAt(0)) {
            negative = true;
            num = num.replace( '-', '' );
        }
        
        // Account for a space as the thousands separator.
        // This pattern accounts for all whitespace characters (including thin space).
        num = num.replace( /\s/g, '' );
        num = num.replace( /&nbsp;/g, '' );

        // Determine what our existing separators are.
        var myArr = num.split('');
        var separators = myArr.filter(function(el) {
            return !el.match(/[0-9]/);
          });
          
        var final_separators = separators.filter(this.uniqueElememts);
        
        switch( final_separators.length ) {
            case 0:
                formatted = num;
                break;
            case 1:
                var replacer = '';
                if ( 1 == separators.length ) {
                    separator = separators.pop();
                    var sides = num.split(separator);
                    var last = sides.pop();
                    if ( 3 == last.length && separator == this.thousands_sep ) {
                        replacer = '';
                    } else {
                        replacer = '.';
                    }
                } else {
                    separator = final_separators.pop();
                }

                formatted = num.split(separator).join(replacer);
                break;
            case 2:
                var find_one = final_separators[0];
                var re_one;
                if('.' === find_one) {
                    re_one = new RegExp('[.]', 'g');
                } else {
                    re_one = new RegExp(find_one, 'g');
                }
                formatted = num.replace(re_one, '');
                
                var find_two = final_separators[1];
                
                var re_two;
                if('.' === find_two) {
                    re_two = new RegExp('[.]', 'g');
                } else {
                    re_two = new RegExp(find_two, 'g');
                }
                formatted = formatted.replace(re_two, '.' );
                break;
            default:
            return 'NaN';
        }

        if ( negative ) {
            formatted = '-' + formatted;
        }
        this.debug('Number Decoder ' + num + ' -> ' + formatted );
        return formatted;
    }

    this.numberEncoder = function(num, percision) {
        num = this.numberDecoder(num);

        return Intl.NumberFormat(this.locale, { minimumFractionDigits: percision, maximumFractionDigits: percision }).format(num);
    }

    this.debug = function(message) {
        if ( window.nfLocaleConverterDebug || false ) console.log(message);
    }
}

// module.exports = nfLocaleConverter;
define("../nfLocaleConverter", function(){});

/*
 * Because our backbone listens to .change() events on elements, changes made using jQuery .val() don't bubble properly.
 * This patch overwrites the default behaviour of jQuery .val() so that IF the item has an nf-element class, we fire a change event.
 */
( function( jQuery ) {
	/*
	 * Store our original .val() function.
	 */
    var originalVal = jQuery.fn.val;
    /*
     * Create our own .val() function.
     */
    jQuery.fn.val = function(){
        var prev;
        /* 
         * Store a copy of the results of the original .val() call.
         * We use this to make sure that we've actually changed something.
         */
        if( arguments.length > 0 ){
            prev = originalVal.apply( this,[] );
        }
        /*
         * Get the results of the original .val() call. 
         */
        var result = originalVal.apply( this, arguments );

        /*
         * If we have arguments, we have actually made a change, AND this has the nf-element class, trigger .change().
         */
        if( arguments.length > 0 && prev != originalVal.apply( this, [] ) && jQuery( this ).hasClass( 'nf-element' ) ) {
			jQuery(this).change();
        }

        return result;
    };
} ) ( jQuery );

jQuery( document ).ready( function( $ ) {
	require( [ 'models/formCollection', 'models/formModel', 'models/fieldCollection', 'controllers/loadControllers', 'views/mainLayout', '../nfLocaleConverter'], function( formCollection, FormModel, FieldCollection, LoadControllers, mainLayout ) {

		if( 'undefined' == typeof nfForms ) {
			/*
			 * nfForms is not defined. This means that something went wrong loading the form data.
			 * Bail form setup and empty the form containers to remove any loading animations.
			 */
			jQuery( '.nf-form-cont' ).empty();
			return;
		}

		var NinjaForms = Marionette.Application.extend({
			forms: {},
			initialize: function( options ) {
				var that = this;
				Marionette.Renderer.render = function(template, data){
					var template = that.template( template );
					return template( data );
				};

				// Underscore one-liner for getting URL Parameters
				this.urlParameters = _.object(_.compact(_.map(location.search.slice(1).split('&'), function(item) {  if (item) return item.split('='); })));

				if( 'undefined' != typeof this.urlParameters.nf_resume ) {
					this.listenTo(nfRadio.channel('form-' + this.urlParameters.nf_resume), 'loaded', this.restart);
				}

				nfRadio.channel( 'app' ).reply( 'locale:decodeNumber', this.decodeNumber);

				nfRadio.channel( 'app' ).reply( 'locale:encodeNumber',this.encodeNumber);

				var loadControllers = new LoadControllers();
				nfRadio.channel( 'app' ).trigger( 'after:loadControllers' );

				nfRadio.channel( 'app' ).reply( 'get:template', this.template );			},
			
			onStart: function() {
				var formCollection = nfRadio.channel( 'app' ).request( 'get:forms' );
				_.each( formCollection.models, function( form, index ) {
					var layoutView = new mainLayout( { model: form, fieldCollection: form.get( 'fields' ) } );			
					nfRadio.channel( 'form' ).trigger( 'render:view', layoutView );
					jQuery( document ).trigger( 'nfFormReady', layoutView );
				} );
			},

			restart: function( formModel ) {
				if( 'undefined' != typeof this.urlParameters.nf_resume ){
					var data = {
						'action': 'nf_ajax_submit',
						'security': nfFrontEnd.ajaxNonce,
						'nf_resume': this.urlParameters
					};

					nfRadio.channel( 'form-' + formModel.get( 'id' ) ).trigger( 'disable:submit' );
					nfRadio.channel( 'form-' + formModel.get( 'id' ) ).trigger( 'processingLabel' );

					this.listenTo( nfRadio.channel( 'form' ), 'render:view', function() {
						/**
						 * TODO: This needs to be re-worked for backbone. It's not dynamic enough.
						 */
						/*
						 * Hide form fields (but not the submit button).
						 */
						jQuery( '#nf-form-' + formModel.get( 'id' ) + '-cont .nf-field-container:not(.submit-container)' ).hide();
					});

					// TODO: Refactor Duplication
					jQuery.ajax({
						url: nfFrontEnd.adminAjax,
						type: 'POST',
						data: data,
						cache: false,
						success: function( data, textStatus, jqXHR ) {
							try {
						   		var response = data;
						        nfRadio.channel( 'forms' ).trigger( 'submit:response', response, textStatus, jqXHR, formModel.get( 'id' ) );
						    	nfRadio.channel( 'form-' + formModel.get( 'id' ) ).trigger( 'submit:response', response, textStatus, jqXHR );
							} catch( e ) {
								console.log( 'Parse Error' );
							}

					    },
					    error: function( jqXHR, textStatus, errorThrown ) {
					        // Handle errors here
					        console.log('ERRORS: ' + textStatus);
					        // STOP LOADING SPINNER
							nfRadio.channel( 'forms' ).trigger( 'submit:response', 'error', textStatus, jqXHR, errorThrown );
					    }
					});
				}
			},

			template: function( template ) {
				return _.template( $( template ).html(),  {
					evaluate:    /<#([\s\S]+?)#>/g,
					interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
					escape:      /\{\{([^\}]+?)\}\}(?!\})/g,
					variable:    'data'
				} );
			},

			encodeNumber: function(num) {
				var localeConverter = new nfLocaleConverter(nfi18n.siteLocale, nfi18n.thousands_sep, nfi18n.decimal_point);

				return localeConverter.numberEncoder(num);
			},

			decodeNumber: function(num) {
				var localeConverter = new nfLocaleConverter(nfi18n.siteLocale, nfi18n.thousands_sep, nfi18n.decimal_point);

				return localeConverter.numberDecoder(num);
			}
		});
	
		var ninjaForms = new NinjaForms();
		ninjaForms.start();		
	} );
} );

define("main", function(){});

}());

;
!function(){var e,t,i;!function(n){function o(e,t){return M.call(e,t)}function l(e,t){var i,n,o,l,r,s,c,f,d,u,a,h=t&&t.split("/"),m=v.map,g=m&&m["*"]||{};if(e&&"."===e.charAt(0))if(t){for(e=e.split("/"),r=e.length-1,v.nodeIdCompat&&b.test(e[r])&&(e[r]=e[r].replace(b,"")),e=h.slice(0,h.length-1).concat(e),d=0;d<e.length;d+=1)if("."===(a=e[d]))e.splice(d,1),d-=1;else if(".."===a){if(1===d&&(".."===e[2]||".."===e[0]))break;d>0&&(e.splice(d-1,2),d-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((h||g)&&m){for(i=e.split("/"),d=i.length;d>0;d-=1){if(n=i.slice(0,d).join("/"),h)for(u=h.length;u>0;u-=1)if((o=m[h.slice(0,u).join("/")])&&(o=o[n])){l=o,s=d;break}if(l)break;!c&&g&&g[n]&&(c=g[n],f=d)}!l&&c&&(l=c,s=f),l&&(i.splice(0,s,l),e=i.join("/"))}return e}function r(e,t){return function(){var i=y.call(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),h.apply(n,i.concat([e,t]))}}function s(e){return function(t){return l(t,e)}}function c(e){return function(t){p[e]=t}}function f(e){if(o(w,e)){var t=w[e];delete w[e],C[e]=!0,a.apply(n,t)}if(!o(p,e)&&!o(C,e))throw new Error("No "+e);return p[e]}function d(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function u(e){return function(){return v&&v.config&&v.config[e]||{}}}var a,h,m,g,p={},w={},v={},C={},M=Object.prototype.hasOwnProperty,y=[].slice,b=/\.js$/;m=function(e,t){var i,n=d(e),o=n[0];return e=n[1],o&&(o=l(o,t),i=f(o)),o?e=i&&i.normalize?i.normalize(e,s(t)):l(e,t):(e=l(e,t),n=d(e),o=n[0],e=n[1],o&&(i=f(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:i}},g={require:function(e){return r(e)},exports:function(e){var t=p[e];return void 0!==t?t:p[e]={}},module:function(e){return{id:e,uri:"",exports:p[e],config:u(e)}}},a=function(e,t,i,l){var s,d,u,a,h,v,M=[],y=typeof i;if(l=l||e,"undefined"===y||"function"===y){for(t=!t.length&&i.length?["require","exports","module"]:t,h=0;h<t.length;h+=1)if(a=m(t[h],l),"require"===(d=a.f))M[h]=g.require(e);else if("exports"===d)M[h]=g.exports(e),v=!0;else if("module"===d)s=M[h]=g.module(e);else if(o(p,d)||o(w,d)||o(C,d))M[h]=f(d);else{if(!a.p)throw new Error(e+" missing "+d);a.p.load(a.n,r(l,!0),c(d),{}),M[h]=p[d]}u=i?i.apply(p[e],M):void 0,e&&(s&&s.exports!==n&&s.exports!==p[e]?p[e]=s.exports:u===n&&v||(p[e]=u))}else e&&(p[e]=i)},e=t=h=function(e,t,i,o,l){if("string"==typeof e)return g[e]?g[e](t):f(m(e,t).f);if(!e.splice){if(v=e,v.deps&&h(v.deps,v.callback),!t)return;t.splice?(e=t,t=i,i=null):e=n}return t=t||function(){},"function"==typeof i&&(i=o,o=l),o?a(n,e,t,i):setTimeout(function(){a(n,e,t,i)},4),h},h.config=function(e){return h(e)},e._defined=p,i=function(e,t,i){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(i=t,t=[]),o(p,e)||o(w,e)||(w[e]=[e,t,i])},i.amd={jQuery:!0}}(),i("../lib/almond",function(){}),i("views/cellComposite",[],function(){return Marionette.CompositeView.extend({template:"#nf-tmpl-cell",className:"nf-cell",getChildView:function(){return n.channel("views").request("get:fieldLayout")},initialize:function(){this.collection=this.model.get("fields"),jQuery(this.el).css("width",this.model.get("width")+"%")},onRender:function(){0==this.collection.length&&jQuery(this.el).html("&nbsp;")},attachHtml:function(e,t){jQuery(e.el).find("nf-fields").append(t.el)}})}),i("views/rowComposite",["views/cellComposite"],function(e){return Marionette.CompositeView.extend({template:"#nf-tmpl-row",childView:e,className:"nf-row",initialize:function(){this.collection=this.model.get("cells")},onAttach:function(){1<this.collection.length&&jQuery(this.el).closest(".nf-form-wrap").addClass("nf-multi-cell")},attachHtml:function(e,t){jQuery(e.el).find("nf-cells").append(t.el)}})}),i("views/rowCollection",["views/rowComposite"],function(e){return Marionette.CollectionView.extend({tagName:"nf-rows-wrap",childView:e})}),i("models/cellFieldCollection",[],function(){return Backbone.Collection.extend({comparator:"order",initialize:function(e,t){this.cellModel=t.cellModel,_.each(e,function(e){e.set("cellcid",this.cellModel.cid,{silent:!0})},this),this.listenTo(this.cellModel.collection.rowModel.collection,"validate:fields",this.validateFields),this.listenTo(this.cellModel.collection.rowModel.collection,"show:fields",this.showFields),this.listenTo(this.cellModel.collection.rowModel.collection,"hide:fields",this.hideFields),this.cellModel.collection.formModel.get("fields").on("reset",this.resetCollection,this)},validateFields:function(){_.each(this.models,function(e){e.set("clean",!1),n.channel("submit").trigger("validate:field",e)},this)},showFields:function(){this.invoke("set",{visible:!0}),this.invoke(function(){this.trigger("change:value",this)})},hideFields:function(){this.invoke("set",{visible:!1}),this.invoke(function(){this.trigger("change:value",this)})},resetCollection:function(e){var t=[];_.each(this.models,function(i){"submit"!=i.get("type")?t.push(e.findWhere({key:i.get("key")})):t.push(i)}),this.reset(t)}})}),i("models/cellModel",["models/cellFieldCollection"],function(e){return Backbone.Model.extend({initialize:function(){var t=this.collection.formModel.get("fields"),i=[];_.each(this.get("fields"),function(e){if(void 0===t.get(e)){var n=t.findWhere({key:e});void 0!==n&&i.push(n)}else i.push(t.get(e))}),this.set("fields",new e(i,{cellModel:this})),this.set("order",Number(this.get("order"))),this.listenTo(this.get("fields"),"change:errors",this.triggerErrors)},triggerErrors:function(e){this.collection.trigger("change:errors",e)}})}),i("models/cellCollection",["models/cellModel"],function(e){return Backbone.Collection.extend({model:e,comparator:"order",initialize:function(e,t){this.rowModel=t.rowModel,this.formModel=t.formModel}})}),i("models/rowModel",["models/cellCollection"],function(e){return Backbone.Model.extend({initialize:function(){this.set("cells",new e(this.get("cells"),{rowModel:this,formModel:this.collection.formModel})),this.set("order",Number(this.get("order"))),this.listenTo(this.get("cells"),"change:errors",this.triggerErrors)},triggerErrors:function(e){this.collection.trigger("change:errors",e)}})}),i("models/rowCollection",["models/rowModel"],function(e){return Backbone.Collection.extend({model:e,comparator:"order",initialize:function(e,t){this.formModel=t.formModel},validateFields:function(){this.trigger("validate:fields",this)},showFields:function(){this.trigger("show:fields",this)},hideFields:function(){this.trigger("hide:fields",this)}})}),i("controllers/formContentFilters",["views/rowCollection","models/rowCollection"],function(e,t){return Marionette.Object.extend({initialize:function(){n.channel("formContent").request("add:viewFilter",this.getFormContentView,4),n.channel("formContent").request("add:loadFilter",this.formContentLoad,4),n.channel("fieldContents").request("add:viewFilter",this.getFormContentView,4),n.channel("fieldContents").request("add:loadFilter",this.formContentLoad,4)},getFormContentView:function(t){return e},formContentLoad:function(e,i,o,l){if(!0==e instanceof t)return e;var r=n.channel("formContent").request("get:loadFilters"),s=void 0!==r[1];!s&&_.isArray(e)&&0!=_.isArray(e).length&&void 0!==_.first(e)&&"part"==_.first(e).type&&(e=_.flatten(_.pluck(e,"formContentData"))),o=o||!1,l=l||!1;var c=[];return _.isArray(e)&&0!=e.length&&void 0===e[0].cells?_.each(e,function(e,t){c.push({order:t,cells:[{order:0,fields:[e],width:"100"}]})}):c=_.isEmpty(c)&&"undefined"!=typeof nfLayouts&&!s?nfLayouts.rows:e,new t(c,{formModel:i})}})}),i("controllers/loadControllers",["controllers/formContentFilters"],function(e){return Marionette.Object.extend({initialize:function(){new e}})});var n=Backbone.Radio;t(["controllers/loadControllers"],function(e){(new(Marionette.Application.extend({initialize:function(e){this.listenTo(n.channel("form"),"before:filterData",this.loadControllers)},loadControllers:function(t){new e}}))).start()}),i("main",function(){})}();


