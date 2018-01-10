var canvas,selectedObj,settings,coords,filename,controls,shape_controls,drawPoints,selectedPoint;!function(e,a){function t(){e("#IEcontainer").one("click",function(){e(".IEcontrol_icons.overlays").removeClass("active"),e("#IEshape_controls").removeClass("active")})}function n(){e(".searchable input, .searchable select").each(function(){var a=e(this).attr("title"),t=selectedObj[a];if(e(this).is(":checkbox")&&(t?e(this).prop("checked",!0):e(this).removeAttr("checked")),""!==t&&null!=t&&void 0!=t){if("color"==this.type){if(-1==t.indexOf("rgb")){var n=document.createElement("div");n.style.color=t,document.body.appendChild(n),t=window.getComputedStyle(n).color,document.body.removeChild(n)}t=X(t)}e(this).val(t)}}),e("#IEproperties_dialogs").css("transform","translate3d("+(innerWidth-280)+"px,0,0)")}settings={contWidth:0,contHeight:0,minScale:.3,maxScale:1,minDistance:6,color:"red",overlays:[],fontSize:20,font:"Helvetica",text:"输入文字",controlsColor:"blue",borderColor:"blue",drawStrokeColor:"rgb(255,20,20)",drawFillColor:"rgba(255,0,0,0.3)"},coords={};var i,o,r=1,s=!1,c='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="{X}px" y="{Y}px" width="{W}px" height="{H}px">',l='<line x1="{X1}" y1="{Y1}" x2="{X2}" y2="{Y2}" marker-end="url(#triangle)" stroke="{S}" stroke-width="{SW}"></line>',d={default:{angle:{name:"角度",type:"number"},backgroundColor:{name:"背景色",type:"color"},fill:{name:"填充色",type:"color"},flipX:{name:"水平镜像",type:"checkbox"},flipY:{name:"垂直镜像",type:"checkbox"},globalCompositeOperation:{name:"全局组合操作",type:["source-over","source-atop","source-in","source-out","destination-over","destination-atop","destination-in","destination-out","lighter","copy","xor"]},height:{name:"高度",type:"number"},left:{name:"左偏移",type:"number"},skewX:{name:"向右倾斜",type:"number"},skewY:{name:"向下倾斜",type:"number"},opacity:{name:"透明度",type:"range"},originX:{name:"水平偏移",type:["left","center","right"]},originY:{name:"垂直偏移",type:["top","center","bottom"]},stroke:{name:"笔触颜色",type:"color"},strokeDashArray:{name:"短划线和间隙",type:[]},strokeLineCap:{name:"饰线边缘修饰",type:["round","butt","square"]},strokeLineJoin:{name:"饰线转弯修饰",type:["round","bevel","miter"]},strokeMiterLimit:{name:"斜角接缝的限制以及斜角接缝装饰",type:"number"},strokeWidth:{name:"线的宽度",type:"number"},top:{name:"下偏移",type:"number"},visible:{name:"可见（隐藏）",type:"checkbox"},width:{name:"宽度",type:"number"}},"i-text":{fontFamily:{name:"文本字体",type:["Aclonica","Acme","Akronim","Aladin","Alegreya","Allerta","Allura","Amita","Arbutus","Architects Daughter","Archivo Black","Atomic Age","Aubrey","Bangers","Basic","Baumans","Belleza","BenchNine","Berkshire Swash","Bigshot One","Bilbo","Butcherman","Caesar Dressing","Cambo","Candal","Capriola","Carrois Gothic","Carter One","Caveat Brush","Cherry Cream Soda","Codystar","Convergence","Covered By Your Grace","Croissant One","Crushed","Days One","Devonshire","Dhurjati","Diplomata","Droid Sans Mono","Duru Sans","Engagement","Englebert","Ewert","Faster One","Griffy","Helvetica","Iceberg","Jacques Francois","Lato","Londrina Outline","Marko One","Marvel","Monoton","Mrs Sheppards","Mystery Quest","Nosifer","Nova Cut","Open Sans","Oregano","Oswald","Oxygen Mono","Press Start 2P","Quicksand","Ribeye","Roboto","Rosario","Russo One","Shojumaru","Source Code Pro","Swanky and Moo Moo","The Girl Next Door","Ubuntu","UnifrakturMaguntia","Voces","Zeyada"]},fontSize:{name:"文本字号",type:"number"},fontStyle:{name:"文本字体样式",type:["normal","italic","oblique"]},fontWeight:{name:"文本字体加粗",type:["normal","bold","400","600","900"]},lineHeight:{name:"文本行高",type:"number"},text:{name:"文本内容",type:"text"},textAlign:{name:"文本对齐方式",type:["left","center","right","justify"]},textBackgroundColor:{name:"文本背景色",type:"color"},textDecoration:{name:"文本线",type:["","underline","overline","line-through"]}},image:{alignX:{name:"图像 alignX",type:["none","mid","min","max"]},alignY:{name:"图像 alignY",type:["none","mid","min","max"]},crossOrigin:{name:"图像 crossOrigin",type:["","anonymous","use-credentials"]},meetOrSlice:{name:"图像 meetOrSlice",type:["meet","slice"]},src:{name:"图像路径",type:"string"}}};controls={text:{name:"文字",icon:"fa-pencil-square-o"},shape:{name:"图形",icon:"fa-square-o"},overlays:{name:"图像",icon:"fa-file-image-o"},measure:{name:"测量",icon:"fa-expand"},save:{name:"保存",icon:"fa-download"}},shape_controls={arrow:{name:"箭头",icon:"fa-long-arrow-right"},"double sided arrow":{name:"双箭头",icon:"fa-arrows-h"},line:{name:"线",icon:"fa-minus"},rectangle:{name:"矩形",icon:"fa-square-o"},circle:{name:"圆形",icon:"fa-circle-thin"}},e.fn.imageEdit=function(a){if(o=this,!e(o).is("img"))return alert("只能编辑图片！"),!1;"object"!=typeof a&&(i=a,a={}),a.overlays&&a.overlays.length>0&&x(a,0),e("<div />",{id:"IEcontainer"}).appendTo(e("body")),e("<div />",{id:"IEcontrols"}).appendTo(e("#IEcontainer"));for(var n in controls)(l=e("<div />",{class:"IEcontrol_icons "+n,"data-control-type":n})).append(e("<i />",{class:"fa "+controls[n].icon,"aria-hidden":!0})),l.append(e("<span />").text(controls[n].name)),l.appendTo(e("#IEcontrols"));e("<div />",{id:"IEshape_controls"}).appendTo(e("#IEcontainer"));for(var n in shape_controls)(l=e("<div />",{class:"IEcontrol_icons "+n,"data-control-type":n})).append(e("<i />",{class:"fa "+shape_controls[n].icon,"aria-hidden":!0})),l.append(e("<span />").text(shape_controls[n].name)),l.appendTo(e("#IEshape_controls"));e("#IEcontrols div").on("click",function(){if(e(this).hasClass("active"))return!1;C();var a=e(this).attr("data-control-type");switch(e(".canvas-container").show(),e("#IEcrop_image_ops, #IEmeasure_image_ops").hide(),k(),e("#IEcoords_div").hide(),e("#IEpoints, #IEmeasure_image").val(""),e("#IEmeasure_image_ops > *").not("textarea").remove(),e("#IEmeasure_image_ops textarea").removeAttr("data-image-url"),a){case"text":b();break;case"shape":e("#IEshape_controls").addClass("active");break;case"measure":r=1,s=!1,e("#IEratio, #IEreal_distance, #IEarea, #IEcalculated_distance").val(""),canvas.discardActiveObject(),croppedImage=canvas.toDataURL(),e("#IEmeasure_image_ops").css({width:canvas.width,height:canvas.height}),e(".canvas-container").hide(),e("#IEmeasure_image_ops").show();var n=new Image;n.onload=function(){e("#IEmeasure_popup").addClass("active"),e("#IEmeasure_image").attr("data-image-url",n.src),e("#IEmeasure_image").addClass("canvas-area"),e(".canvas-area[data-image-url]").canvasAreaDraw({_resetPoint:function(a){var t=e(".canvas-area[data-image-url]").data("points"),n=S(t);e("#IEcalculated_distance").val(O(n).toFixed(2)),e("#IEarea").val(A(n).toFixed(2))}}),F()},Y(),n.src=croppedImage;break;case"save":var i=canvas.toDataURL();"function"==typeof settings.onSave?settings.onSave(i):e("<a />",{href:i,download:filename+".png"})[0].click();break;case"overlays":return e("#IEshape_controls").hasClass("active")&&e("#IEshape_controls").removeClass("active"),e(this).addClass("active"),t(),!1}e("#IEcontrols div").removeClass("active")}),e("#IEshape_controls div").on("click",function(){switch(e(this).attr("data-control-type")){case"arrow":j();break;case"double sided arrow":H();break;case"line":D();break;case"rectangle":M();break;case"circle":R()}e(".IEcontrol_icons").removeClass("active"),e("#IEshape_controls").removeClass("active")}),e("<canvas />",{id:"IEcanvas"}).appendTo(e("#IEcontainer")),e('<div id="IEdraw_cont"><canvas id="IEdraw_canvas"></canvas></div>').appendTo(e("#IEcontainer")),e('<div id="IEcrop_image_ops"><img id="IEimage_el" /></div>').appendTo(e("#IEcontainer")),e('<div id="IEmeasure_image_ops"><textarea id="IEmeasure_image"></textarea></div>').appendTo(e("#IEcontainer")),e('<div id="IEcoords_div"><div><textarea id="IEpoints"></textarea><i></i></div></div>').appendTo(e("#IEcontainer")),e("<div />",{id:"IEsettings"}).appendTo(e("#IEcontainer")),e("#IEsettings").append(e("<input type='range' id='IEscale' class='range-slider__range' min='0.1' step='0.01' />")),e("#IEsettings").append(e("<div id='IEclose_icon' title='退出'><i class='fa fa-sign-out' aria-hidden='true'></i></div>")),e("<div />",{id:"IEmeasure_popup"}).appendTo(e("#IEcontainer")),e("<div />",{id:"IEmessage"}).appendTo(e("#IEcontainer")),e("#IEcontainer").append(e("<div />",{id:"IEloader"})),e("#IEcontainer").bind("dragover",function(e){L(e)}),e("#IEcontainer").bind("drop",function(e){var a=e.originalEvent.dataTransfer.files,t=new FileReader;t.onloadend=function(e){var a=e.target.result;fabric.Image.fromURL(a,function(e){_(e)})},t.readAsDataURL(a[0]),L(e)});var c=[{name:"实际距离",type:"Real Distance"},{name:"比例",type:"Ratio"},{name:"计算面积",type:"Calculated Area"},{name:"计算距离",type:"Calculated Distance"}],l=e("<div />",{class:"IEmeasure_popup_head"});l.append(e("<span />").text("测量属性")),e("#IEmeasure_popup").append(l),c.forEach(function(a){var t=e("<div />",{class:"IEmeasure_popup_opts"});t.append(e("<span />").text(a.name));var n="",i=!1;switch(a.type){case"Real Distance":n="IEreal_distance";break;case"Ratio":n="IEratio",i=!0;break;case"Calculated Area":n="IEarea",i=!0;break;case"Calculated Distance":n="IEcalculated_distance",i=!0}t.append(e("<input />",{type:"text","data-measure_prop":a.type,id:n,disabled:i})),e("#IEmeasure_popup").append(t)}),(l=e("<div />",{class:"IEmeasure_popup_opts"})).append(e("<button />",{type:"button",class:"IEclear_measure"}).text("清除")),l.append(e("<button />",{type:"button",class:"IEclose_measure"}).text("关闭")),e("#IEmeasure_popup").append(l),e("#IEmeasure_popup").css("transform","translate3d(20px,"+(innerHeight-270)+"px,0)"),a.show_props&&e("<div />",{id:"IEproperties_dialogs"}).appendTo(e("#IEcontainer")),e("#IEreal_distance").bind("input",function(){if(!s){var a=parseFloat(e("#IEreal_distance").val())||0,t=parseFloat(e("#IEcalculated_distance").val());t>0&&(r=parseFloat(a/t),e("#IEratio").val(r))}}),e("#IEclose_icon").bind("click",function(){E()}),e("#IEscale").on("input",function(){var a=e(this).val(),t=e(".canvas-container")[0].style.transform,n="",i=0,o=0;if(t.indexOf("translate")>-1&&(n=t.match(/translate.*?\)/)[0])){var r=n.match(/[^(]\d+px/g);i=parseInt(r[0].replace(/[\spx]/g,"")),o=parseInt(r[1].replace(/[\spx]/g,""))}e(this).data("isChangedProg")||(a>settings.curScale?e(".canvas-container, #IEmeasure_image_ops").addClass("IEmove_cursor"):e(".canvas-container, #IEmeasure_image_ops").removeClass("IEmove_cursor"),e(".canvas-container, #IEmeasure_image_ops, #IEdraw_cont").css("transform","translate3d("+i+"px,"+o+"px,0px) scale("+a+")"))}),e("body").bind("keydown",function(e){var a=e.keyCode,t=!1;if(selectedObj&&"BODY"==e.target.nodeName){switch(a){case 46:case 8:I(),t=!0}t&&L(e)}}),e("#IEcoords_div i").bind("click",function(){C()}),h(function(){if(i){if(o.length>1)return console.error("Mathcing selectors are more than one."),!1;switch(i){case"show":o.trigger("click");break;case"hide":E();break;case"measure":o.trigger("click"),settings.onReady=function(){e(".IEcontrol_icons.measure").click()};break;case"crop":o.trigger("click"),settings.onReady=function(){e(".IEcontrol_icons.crop").click()};break;case"save":o.trigger("click"),settings.onReady=function(){e(".IEcontrol_icons.save").click()}}}}),this.each(function(e,t){m.apply(t,[e,t,a]),p.apply(t,[e,t,a])})};var p=function(a,t,i){s=!1,r=1,e("#IEreal_distance, #IEarea, #IEcalculated_distance").val("");var o=e(t).attr("src");if(0==o.indexOf("data:")&&(filename="image_"+(e.now()%1e4).toString()),o){var c=new Image;c.onload=function(){var a=c.naturalWidth,t=c.naturalHeight;settings.imgWidth=a,settings.imgHeight=t,settings.contHeight<settings.imgHeight?settings.contWidth=settings.imgWidth*settings.contHeight/settings.imgHeight:settings.contWidth<settings.imgWidth&&(settings.contHeight=settings.imgHeight*settings.contWidth/settings.imgWidth);var i=Math.min(a,settings.contWidth),o=Math.min(t,settings.contHeight);i=a,o=t,e("#IEcanvas").attr({Width:i,Height:o}),fabric.Object.prototype.cornerColor=settings.controlsColor,fabric.Object.prototype.borderColor=settings.borderColor,fabric.Object.prototype.borderOpacityWhenMoving=1,(canvas=new fabric.Canvas("IEcanvas",{})).on("object:scaling",function(e){var a=e.target;"i-text"==a.type&&(a.fontSize*=a.scaleX,a.scale(1),a.setCoords(),canvas.renderAll())}),canvas.on("object:selected",function(a){(selectedObj=canvas.getActiveObject())?(e("#IEproperties_dialogs").show(),selectedObj.isMain||selectedObj.bringToFront(),w(),n()):e("#IEproperties_dialogs").hide()}),canvas.on("selection:cleared",function(e){selectedObj=null}),canvas.on("object:modified",function(){selectedObj&&n()}),g(),Y(),T(c.src,function(a){fabric.Image.fromURL(a,function(a){a.selectable=!1,a.hasControls=!1,a.hasBorders=!1,a.mainImage=!0,(settings.contWidth-a.width)/2<0&&(settings.contHeight/settings.imgHeight<settings.contWidth/settings.imgWidth?settings.curScale=settings.contHeight/settings.imgHeight:settings.curScale=settings.contWidth/settings.imgWidth,e(".canvas-container, #IEmeasure_image_ops, #IEdraw_cont").css("transform","scale("+settings.curScale+")")),canvas.add(a),canvas.centerObject(a),a.setCoords(),canvas.renderAll(),a.isMain=!0,F(),"function"==settings.onReady&&settings.onReady()}),v()}),e(".canvas-container, #IEmeasure_image_ops, #IEdraw_cont").bind("mousewheel",function(a){var t=a.originalEvent.wheelDelta/120,n=parseFloat(e("#IEscale").val());return t>0?n-=.01:t<0&&(n+=.01),e("#IEscale").val(n).trigger("input"),L(a),!1})},Y(),c.crossOrigin="Anonymous",c.src=o}e("#IEcontainer").addClass("active");var l=e.extend(settings,i);e(t).data("ImageEdit",l),e(t).attr("crossOrigin","Anonymous")},m=function(a,t,n){e(t).data("ImageEdit")&&(e("#IEcontainer").remove(),e(t).removeData("ImageEdit"),e(t).unbind("click"),e(t).removeAttr("crossOrigin"))},u=function(){v()},g=function(){var a=e(".canvas-container").width()/2,t=e(".canvas-container").height()/2;e(".canvas-container, #IEmeasure_image_ops, #IEdraw_cont").css("left","calc(50% - "+a+"px)"),e(".canvas-container, #IEmeasure_image_ops, #IEdraw_cont").css("top","calc(50% - "+t+"px)")},v=function(){settings.contWidth=.8*innerWidth,settings.contHeight=.8*innerHeight,settings.contHeight/settings.imgHeight<settings.contWidth/settings.imgWidth?settings.curScale=settings.contHeight/settings.imgHeight:settings.curScale=settings.contWidth/settings.imgWidth,settings.curScale>1&&(settings.curScale=1),fabric.Object.prototype.borderScaleFactor=settings.curScale,e("#IEscale").data("isChangedProg",!0),settings.minScale>settings.curScale&&(settings.minScale=settings.curScale.toFixed(2)),e("#IEscale").attr("min",settings.minScale),e("#IEscale").attr("max",settings.maxScale),e("#IEscale").val(settings.curScale),e(".canvas-container, #IEmeasure_image_ops, #IEdraw_cont").css("transform","scale("+settings.curScale+")"),e("#IEscale").data("isChangedProg",""),e(".canvas-container, #IEmeasure_image_ops, #IEdraw_cont").unbind("mousedown"),e(".canvas-container, #IEmeasure_image_ops, #IEdraw_cont").bind("mousedown",function(a){var t=a.pageX,n=a.pageY,i=e(".canvas-container")[0].style.transform,o="",r="",s=0,c=0;if(i.indexOf("scale")>-1&&(o=i.match(/scale.*?\)/)[0]),i.indexOf("translate")>-1&&(r=i.match(/translate.*?\)/)[0])){var l=r.match(/[^(]\d+px/g);s=parseInt(l[0].replace(/[\spx]/g,"")),c=parseInt(l[1].replace(/[\spx]/g,""))}e("#IEcontainer").bind("mousemove",function(a){if(a.shiftKey){var i=a.pageX-t+s,r=a.pageY-n+c;e(".canvas-container, #IEmeasure_image_ops, #IEdraw_cont").css("transform","translate3d("+i+"px,"+r+"px,0px) "+o)}}),e("#IEcontainer").bind("mouseup",function(){e("#IEcontainer").unbind("mousemove mouseup")})})},h=function(a){y(function(){e("#search_el").bind("input",function(){var a=e(this).val();""==a?e(".searchable").show():(a=a.toLowerCase(),e(".searchable").hide(),e(".searchable[title*='"+a+"']").show())}),e("#prop_head span").bind("mousedown",function(a){var t=a.offsetX;e("*").bind("mousemove",function(a){var n=a.pageX-t;e("#IEproperties_dialogs").css("transform","translate3d("+(n-80)+"px,0px,0px)")}),e("*").bind("mouseup",function(){e("*").unbind("mousemove mouseup")})}),e(".prop_body input").bind("input",function(){var a=e(this).val(),t=e(this).attr("title");"number"==e(this).attr("type")&&(a=parseFloat(a)),f(t,a)}),e(".prop_body input[type='checkbox']").bind("change",function(){var a=e(this).is(":checked"),t=e(this).attr("title");f(t,a)}),e(".prop_body select").bind("change",function(){var a=e(this).val(),t=e(this).attr("title");f(t,a)}),e("#IEmeasure_popup .IEmeasure_popup_head").bind("mousedown",function(a){var t=a.offsetX,n=a.offsetY;e("#IEcontainer").bind("mousemove",function(a){var i=a.pageX-t,o=a.pageY-n;e("#IEmeasure_popup").css("transform","translate3d("+i+"px,"+o+"px,0px)")}),e("#IEcontainer").bind("mouseup",function(){e("#IEcontainer").unbind("mousemove mouseup")})}),e(".IEclear_measure").bind("click",function(){s=!0,e("#IEreal_distance").val(""),e("#IEarea").val(""),e("#IEcalculated_distance").val(""),e("#IEmeasure_image").data("points",[]);var a=e("#IEmeasure_image").data("reset");"function"==typeof a&&a()}),e(".IEclose_measure").bind("click",function(){C()}),"function"==typeof a&&a()})},f=function(e,a){selectedObj&&(e in selectedObj&&(selectedObj[e]=a),"path-group"==selectedObj.type&&selectedObj.paths.forEach(function(t){e in t&&(t[e]=a,"fill"!=e&&"stroke"!=e||(t.fill=a,t.stroke=a))}),selectedObj.setCoords(),canvas.renderAll(),setTimeout(function(){canvas&&canvas.renderAll()},1e3))},I=function(){var e=canvas.getActiveObject(),a=canvas.getActiveGroup();if(!e.mainImage&&confirm("确定要删除此元素？"))if(a){var t=a.getObjects();canvas.discardActiveGroup(),t.forEach(function(e){canvas.remove(e)})}else e&&canvas.remove(e)},E=function(){confirm("退出后将不会保留任何更改，是否退出？")&&(canvas.dispose(),C(),e("#IEcontainer").remove(),e("#_clip_").show())},b=function(){var e=settings.text,a=new fabric.IText(e,{fontFamily:settings.font,angle:0,fontSize:settings.fontSize,fill:settings.color,hasRotatingPoint:!0,centerTransform:!0,editable:!0});_(a)},_=function(e){canvas.add(e),canvas.centerObject(e),e.setCoords(),canvas.setActiveObject(e),canvas.renderAll()},y=function(a){var t=e("<div />",{class:"prop_body"});for(var n in d){var i=e("<div />",{class:n}),o=d[n];for(var r in o){var s=o[r].type;switch(s){case"number":i.append(e('<div class="searchable" title="'+o[r].name+'"><span>'+o[r].name+'</span><input type="number" title="'+r+'" min="0" /></div>'));break;case"text":i.append(e('<div class="searchable" title="'+o[r].name+'"><span>'+o[r].name+'</span><input type="text" title="'+r+'" /></div>'));break;case"checkbox":i.append(e('<div class="searchable" title="'+o[r].name+'"><span>'+o[r].name+'</span><input type="checkbox" title="'+r+'" /></div>'));break;case"range":i.append(e('<div class="searchable" title="'+o[r].name+'"><span>'+o[r].name+'</span><input type="range" title="'+r+'" min="0" step="0.01" max="1" value="1" /></div>'));break;case"color":i.append(e('<div class="searchable" title="'+o[r].name+'"><span>'+o[r].name+'</span><input type="color" title="'+r+'" /></div>'));break;default:if("object"==typeof s&&s.length>0){var c=e("<div />",{class:"searchable",title:o[r].name});c.append(e("<span />").text(o[r].name));var l=e("<select />",{title:r});for(var p in s)l.append(e("<option />",{value:s[p]}).text(s[p]));c.append(l)}i.append(c)}}t.append(i)}e("#IEproperties_dialogs").append('<div id="prop_head"><span>属性编辑</span><input type="search" id="search_el" placeholder="查找属性" /></div>'),e("#IEproperties_dialogs").append(t),setTimeout(function(){"function"==typeof a&&a()},500)},w=function(){switch(e(".prop_body > div").hide(),selectedObj.type){case"i-text":e(".prop_body .i-text").show();break;case"image":e(".prop_body .image").show()}e(".prop_body .default").show()},x=function(a,t){if(0==t&&(settings.overlayImgs=[]),a.overlays[t]){var n=new Image;n.onload=function(){settings.overlayImgs.push(n),x(a,++t)},n.src=a.overlays[t]}else e("<div />",{id:"IEoverlays"}).appendTo(e(".overlays")),e("<div />",{class:"IEtriangle"}).appendTo(e("#IEoverlays")),e("<div />",{id:"IEoverlay_box"}).appendTo(e("#IEoverlays")),e("<button />",{id:"IEimgUpload"}).appendTo(e("#IEoverlays")),e("#IEimgUpload").html('<i class="fa fa-upload" aria-hidden="true"></i> 自定义上传').addClass("IEimgUploadButton").on("click",function(){e("#image_file").trigger("click")}),settings.overlayImgs.forEach(function(a){e(a).appendTo(e("#IEoverlay_box"))}),e("#IEoverlay_box img").bind("click",function(){var a=e(this).attr("src");fabric.Image.fromURL(a,function(e){_(e)})})},k=function(){var a=e("#IEimage_el").data("Jcrop");a&&a.destroy(),e("#IEcrop_image_ops, #IEimage_el").removeAttr("style"),e("#IEimage_el").removeAttr("src"),v(),e("#IEscale").show()},C=function(){e("#IEcontrols div").removeClass("active"),e("#IEmeasure_popup").removeClass("active"),e("#IEcoords_div").hide(),e("#IEmeasure_image_ops").hide(),e("#IEdraw_cont").hide(),e(".canvas-container").show(),e("#IEmeasure_image_ops > *").not("textarea").remove(),e("#IEmeasure_image_ops textarea").removeAttr("data-image-url")},S=function(e){for(var a=[],t=0;t<e.length;t++){var n={x:parseInt(e[t]),y:parseInt(e[t+1])};a.push(n),t++}return a},O=function(e){for(var a=0,t=0;t<e.length-1;t++){var n=e[t+1].x,i=e[t].x,o=e[t+1].y,r=e[t].y;a+=W(n,o,i,r)}if(e.length>2){var n=e[e.length-1].x,i=e[0].x,o=e[e.length-1].y,r=e[0].y;a+=W(n,o,i,r)}return a},A=function(e){for(var a=0,t=e.length-1,n=0;n<e.length;n++)a+=(e[t].x+e[n].x)*r*((e[t].y-e[n].y)*r),t=n;return Math.abs(a/2)},W=function(e,a,t,n){var i=(e-t)*r,o=(a-n)*r;return Math.sqrt(i*i+o*o)},j=function(){var e=canvas.getCenter(),a=(Math.round(e.top),Math.round(e.left),"");a+=c.replace("{X}","0").replace("{Y}","0").replace("{W}","50").replace("{H}","20"),a+='<marker xmlns="http://www.w3.org/2000/svg" id="triangle" refX="0" refY="5" markerUnits="strokeWidth" markerHeight="2" markerWidth="2" fill="red"><path d="M 40 5 L 50 10 L 40 15 z"/></marker>'+l.replace("{X1}",2).replace("{X2}",45).replace("{Y1}",10).replace("{Y2}",10).replace("{S}",settings.color).replace("{SW}","5"),a+="</svg>",fabric.loadSVGFromString(a,function(e,a){e.forEach(function(e){e.fill=settings.color});var t=fabric.util.groupSVGElements(e,a);_(t)})},H=function(){var e=canvas.getCenter(),a=(Math.round(e.top),Math.round(e.left),"");a+=c.replace("{X}","0").replace("{Y}","0").replace("{W}","50").replace("{H}","20"),a+='<marker xmlns="http://www.w3.org/2000/svg" id="triangle" refX="0" refY="5" markerUnits="strokeWidth" markerHeight="2" markerWidth="2" fill="red"><path d="M 0 10 L 10 5 L 10 15 z"/><path d="M 40 5 L 50 10 L 40 15 z"/></marker>'+l.replace("{X1}",10).replace("{X2}",45).replace("{Y1}",10).replace("{Y2}",10).replace("{S}",settings.color).replace("{SW}","5"),a+="</svg>",fabric.loadSVGFromString(a,function(e,a){e.forEach(function(e){e.fill=settings.color});var t=fabric.util.groupSVGElements(e,a);_(t)})},D=function(){var e=new fabric.Line([0,100,100,100],{stroke:settings.color,strokeWidth:2});_(e)},M=function(){var e=new fabric.Rect({fill:"transparent",width:150,height:100,stroke:settings.color,strokeWidth:2});_(e)},R=function(){var e=new fabric.Circle({fill:"transparent",radius:50,stroke:settings.color,strokeWidth:2});_(e)},T=function(e,a){var t=new Image;t.onload=function(){var e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight,e.getContext("2d").drawImage(t,0,0),F(),a(e.toDataURL())},Y(),t.crossOrigin="Anonymous",t.src=e},X=function(e){if("#"===e.substr(0,1))return e;var a=/(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(e),t=parseInt(a[2],10).toString(16),n=parseInt(a[3],10).toString(16),i=parseInt(a[4],10).toString(16);return"#"+((1==t.length?"0"+t:t)+(1==n.length?"0"+n:n)+(1==i.length?"0"+i:i))},L=function(e){return e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!1},Y=function(){e("#IEloader").addClass("active")},F=function(){e("#IEloader").removeClass("active")};e(a).on("resize",u),window.onbeforeunload=function(){if(canvas.toObject().objects.length>0)return!0},e("#image_file").on("change",function(e){var a=e.target.files[0],t=new FileReader;t.onloadend=function(){fabric.Image.fromURL(this.result,function(e){canvas.add(e),canvas.centerObject(e),e.setCoords(),canvas.setActiveObject(e),canvas.renderAll()})},t.readAsDataURL(a)}),e("#_clip_").on("contextmenu",function(e){return e.preventDefault(),!1}),new $AC("#_clip_",800,800,0,["dist/images/border/border1.png","dist/images/border/border2.png"]).ok(function(a,t){e("#_clip_").hide();var n=e("#addDecorate");n.html('<img src="'+a+'">'),n.children("img")[0].onload=function(){this&&e(this).imageEdit({maxScale:2,onReady:function(){console.log("image loaded")},onSave:function(e){var a=prompt("输入文件名字后开始下载...","download");if(null!==a){var t=document.createElement("a");t.href=e,""===a&&(a="download"),a+=".png",t.download=a;var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}},overlays:["dist/images/clips/house.png","dist/images/clips/home.png","dist/images/clips/cape_house.png","dist/images/clips/landscape.png"],show_props:!0})}})}(jQuery,window);