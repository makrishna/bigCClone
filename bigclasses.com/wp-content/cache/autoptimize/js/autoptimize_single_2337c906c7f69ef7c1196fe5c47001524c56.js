;
/*! Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.18
 *
 * Requires: jQuery >= 1.2.3
 */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else{factory(jQuery);}}(function($){$.fn.addBack=$.fn.addBack||$.fn.andSelf;$.fn.extend({actual:function(method,options){if(!this[method]){throw'$.actual => The jQuery method "'+method+'" you called does not exist';}
var defaults={absolute:false,clone:false,includeMargin:false,display:'block'};var configs=$.extend(defaults,options);var $target=this.eq(0);var fix,restore;if(configs.clone===true){fix=function(){var style='position: absolute !important; top: -1000 !important; ';$target=$target.clone().attr('style',style).appendTo('body');};restore=function(){$target.remove();};}else{var tmp=[];var style='';var $hidden;fix=function(){$hidden=$target.parents().addBack().filter(':hidden');style+='visibility: hidden !important; display: '+configs.display+' !important; ';if(configs.absolute===true)style+='position: absolute !important; ';$hidden.each(function(){var $this=$(this);var thisStyle=$this.attr('style');tmp.push(thisStyle);$this.attr('style',thisStyle?thisStyle+';'+style:style);});};restore=function(){$hidden.each(function(i){var $this=$(this);var _tmp=tmp[i];if(_tmp===undefined){$this.removeAttr('style');}else{$this.attr('style',_tmp);}});};}
fix();var actual=/(outer)/.test(method)?$target[method](configs.includeMargin):$target[method]();restore();return actual;}});}));