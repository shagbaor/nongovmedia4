var wpAjaxUrl="https://demoduck.com/wp-admin/admin-ajax.php",flBuilderUrl="https://demoduck.com/wp-content/plugins/bb-plugin/",FLBuilderLayoutConfig={anchorLinkAnimations:{duration:1e3,easing:"swing",offset:100},paths:{pluginUrl:"https://demoduck.com/wp-content/plugins/bb-plugin/",wpAjaxUrl:"https://demoduck.com/wp-admin/admin-ajax.php"},breakpoints:{small:768,medium:1024},waypoint:{offset:80}};!function(i){"undefined"==typeof FLBuilderLayout&&(FLBuilderLayout={init:function(){FLBuilderLayout._destroy(),FLBuilderLayout._initClasses(),FLBuilderLayout._initBackgrounds(),0===i(".fl-builder-edit").length&&(FLBuilderLayout._initModuleAnimations(),FLBuilderLayout._initAnchorLinks(),FLBuilderLayout._initHash(),FLBuilderLayout._initForms())},refreshGalleries:function(e){var t=i(void 0===e?"body":e),a=t.find(".fl-mosaicflow-content"),o=t.find(".fl-gallery"),l=null;a&&(l=a.data("mosaicflow"))&&(l.columns=i([]),l.columnsHeights=[],a.data("mosaicflow",l),a.mosaicflow("refill")),o&&o.trigger("refreshWookmark")},refreshGridLayout:function(e){var t=i(void 0===e?"body":e).find(".masonry");t.length&&t.masonry("layout")},reloadSlider:function(e){var t=i(void 0===e?"body":e).find(".bx-viewport > div").eq(0),a=null;t.length&&(a=t.data("bxSlider"))&&a.reloadSlider()},resizeAudio:function(e){var t=i(void 0===e?"body":e).find(".wp-audio-shortcode.mejs-audio"),a=null,o=null,l=null,n=400;t.length&&"undefined"!=typeof mejs&&t.each((function(){a=i(this),o=mejs.players[a.attr("id")],l=a.find(".mejs-controls .mejs-time-rail");var e=a.find(".mejs-inner");a.find(".mejs-controls .mejs-time-total");void 0!==o&&(n=Math.ceil(.8*a.width()),e.length&&(l.css("width",n+"px!important"),o.options.autosizeProgress=!0,setTimeout((function(){o.setControlsSize()}),50),a.find(".mejs-inner").css({visibility:"visible",height:"inherit"})))}))},preloadAudio:function(e){var t=i(void 0===e?"body":e),a=t.closest(".fl-accordion-item"),o=t.find(".wp-audio-shortcode.mejs-audio");!a.hasClass("fl-accordion-item-active")&&o.find(".mejs-inner").length&&o.find(".mejs-inner").css({visibility:"hidden",height:0})},resizeSlideshow:function(){"undefined"!=typeof YUI&&YUI().use("node-event-simulate",(function(i){i.one(window).simulate("resize")}))},reloadGoogleMap:function(e){var t=i(void 0===e?"body":e).find('iframe[src*="google.com/maps"]');t.length&&t.attr("src",(function(i,e){return e}))},_destroy:function(){var e=i(window);e.off("scroll.fl-bg-parallax"),e.off("resize.fl-bg-video")},_isTouch:function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},_isMobile:function(){return/Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent)},_initClasses:function(){var e=i("body"),t=navigator.userAgent;!e.hasClass("archive")&&i(".fl-builder-content-primary").length>0&&e.addClass("fl-builder"),FLBuilderLayout._isTouch()&&e.addClass("fl-builder-touch"),FLBuilderLayout._isMobile()&&e.addClass("fl-builder-mobile"),i(window).width()<FLBuilderLayoutConfig.breakpoints.small&&e.addClass("fl-builder-breakpoint-small"),i(window).width()>FLBuilderLayoutConfig.breakpoints.small&&i(window).width()<FLBuilderLayoutConfig.breakpoints.medium&&e.addClass("fl-builder-breakpoint-medium"),i(window).width()>FLBuilderLayoutConfig.breakpoints.medium&&e.addClass("fl-builder-breakpoint-large"),t.indexOf("Trident/7.0")>-1&&t.indexOf("rv:11.0")>-1&&e.addClass("fl-builder-ie-11")},_initBackgrounds:function(){var e=i(window);i(".fl-row-bg-parallax").length>0&&!FLBuilderLayout._isMobile()&&(FLBuilderLayout._scrollParallaxBackgrounds(),FLBuilderLayout._initParallaxBackgrounds(),e.on("scroll.fl-bg-parallax",FLBuilderLayout._scrollParallaxBackgrounds)),i(".fl-bg-video").length>0&&(FLBuilderLayout._initBgVideos(),FLBuilderLayout._resizeBgVideos(),e.on("resize.fl-bg-video",FLBuilderLayout._resizeBgVideos))},_initParallaxBackgrounds:function(){i(".fl-row-bg-parallax").each(FLBuilderLayout._initParallaxBackground)},_initParallaxBackground:function(){var e=i(this),t=e.find("> .fl-row-content-wrap"),a=e.data("parallax-image"),o=e.data("parallax-loaded"),l=new Image;o||void 0!==a&&(i(l).on("load",(function(){t.css("background-image","url("+a+")"),e.data("parallax-loaded",!0)})),l.src=a)},_scrollParallaxBackgrounds:function(){i(".fl-row-bg-parallax").each(FLBuilderLayout._scrollParallaxBackground)},_scrollParallaxBackground:function(){var e=i(window),t=i(this),a=t.find("> .fl-row-content-wrap"),o=t.data("parallax-speed"),l=a.offset(),n=-(e.scrollTop()-l.top)/o;a.css("background-position","center "+n+"px")},_initBgVideos:function(){i(".fl-bg-video").each(FLBuilderLayout._initBgVideo)},_initBgVideo:function(){var e=i(this),t=(e.data("width"),e.data("height"),e.data("mp4")),a=e.data("youtube"),o=e.data("vimeo"),l=e.data("mp4-type"),n=e.data("webm"),d=e.data("webm-type"),r=e.data("fallback"),s=e.data("loaded"),u=e.data("video-mobile"),c=null,f=null,h=null;s||(c=i("<video autoplay loop muted playsinline></video>"),void 0!==r&&""!=r&&(c.attr("poster","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),c.css("background",'transparent url("'+r+'") no-repeat center center'),c.css("background-size","cover"),c.css("height","100%")),void 0!==t&&""!=t&&((f=i("<source />")).attr("src",t),f.attr("type",l),c.append(f)),void 0!==n&&""!=n&&((h=i("<source />")).attr("src",n),h.attr("type",d),c.append(h)),!FLBuilderLayout._isMobile()||FLBuilderLayout._isMobile()&&"yes"==u?void 0!==a?FLBuilderLayout._initYoutubeBgVideo.apply(this):void 0!==o?FLBuilderLayout._initVimeoBgVideo.apply(this):e.append(c):(c.attr("src",""),e.append(c)),e.data("loaded",!0))},_initYoutubeBgVideo:function(){var e,t,a=i(this),o=a.data("video-id"),l=a.find(".fl-bg-video-player"),n=a.data("enable-audio"),d=a.find(".fl-bg-video-audio"),r=void 0!==a.data("start")?a.data("start"):0,s=void 0!==a.data("end")?a.data("end"):0,u=void 0!==a.data("loop")?a.data("loop"):1,c=0;o&&(fallback=a.data("fallback")||!1,fallback&&(a.find("iframe").remove(),fallbackTag=i("<div></div>"),fallbackTag.addClass("fl-bg-video-fallback"),fallbackTag.css("background-image","url("+a.data("fallback")+")"),fallbackTag.css("background-size","cover"),fallbackTag.css("transition","background-image 1s"),a.append(fallbackTag),t=!0),FLBuilderLayout._onYoutubeApiReady((function(f){setTimeout((function(){e=new f.Player(l[0],{videoId:o,events:{onReady:function(i){"no"===n||FLBuilderLayout._isMobile()?i.target.mute():"yes"===n&&i.target.isMuted&&i.target.unMute(),a.data("YTPlayer",e),FLBuilderLayout._resizeYoutubeBgVideo.apply(a),i.target.playVideo(),d.length>0&&!FLBuilderLayout._isMobile()&&d.on("click",{button:d,player:e},FLBuilderLayout._toggleBgVideoAudio)},onStateChange:function(a){1===a.data&&t&&i(".fl-bg-video-fallback").css("background-image","url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"),c<4&&c++,c>1&&(-1===a.data||2===a.data)&&"yes"===n&&(e.mute(),e.playVideo(),d.show()),a.data===f.PlayerState.ENDED&&1===u&&(r>0?e.seekTo(r):e.playVideo())},onError:function(i){console.info("YT Error: "+i.data),FLBuilderLayout._onErrorYoutubeVimeo(a)}},playerVars:{playsinline:FLBuilderLayout._isMobile()?1:0,controls:0,showinfo:0,rel:0,start:r,end:s}})}),1)})))},_onErrorYoutubeVimeo:function(e){if(fallback=e.data("fallback")||!1,!fallback)return!1;e.find("iframe").remove(),fallbackTag=i("<div></div>"),fallbackTag.addClass("fl-bg-video-fallback"),fallbackTag.css("background-image","url("+e.data("fallback")+")"),e.append(fallbackTag)},_onYoutubeApiReady:function(i){window.YT&&YT.loaded?i(YT):setTimeout((function(){FLBuilderLayout._onYoutubeApiReady(i)}),350)},_initVimeoBgVideo:function(){var e,t=i(this),a=t.data("video-id"),o=t.find(".fl-bg-video-player"),l=t.data("enable-audio"),n=t.find(".fl-bg-video-audio"),d=(t.outerWidth(),navigator.userAgent);"undefined"!=typeof Vimeo&&a&&(e=new Vimeo.Player(o[0],{id:a,loop:!0,title:!1,portrait:!1,background:!0,autopause:!1,muted:!0}),t.data("VMPlayer",e),"no"===l?e.setVolume(0):"yes"===l&&(d.indexOf("Safari")>-1||d.indexOf("Chrome")>-1?(e.setVolume(0),n.show()):e.setVolume(1)),e.play().catch((function(i){FLBuilderLayout._onErrorYoutubeVimeo(t)})),n.length>0&&n.on("click",{button:n,player:e},FLBuilderLayout._toggleBgVideoAudio))},_toggleBgVideoAudio:function(i){var e=i.data.player,t=i.data.button.find(".fl-audio-control");t.hasClass("fa-volume-off")?(t.removeClass("fa-volume-off").addClass("fa-volume-up"),i.data.button.find(".fa-times").hide(),"function"==typeof e.unMute?e.unMute():e.setVolume(1)):(t.removeClass("fa-volume-up").addClass("fa-volume-off"),i.data.button.find(".fa-times").show(),"function"==typeof e.unMute?e.mute():e.setVolume(0))},_videoBgSourceError:function(e){var t=i(e.target),a=t.closest(".fl-bg-video"),o=a.find("video"),l=a.data("fallback"),n="";t.remove(),o.find("source").length||""!==l&&((n=i("<div></div>")).addClass("fl-bg-video-fallback"),n.css("background-image","url("+l+")"),a.append(n),o.remove())},_resizeBgVideos:function(){i(".fl-bg-video").each((function(){FLBuilderLayout._resizeBgVideo.apply(this),i(this).parent().find("img").length>0&&i(this).parent().imagesLoaded(i.proxy(FLBuilderLayout._resizeBgVideo,this))}))},_resizeBgVideo:function(){if(0!==i(this).find("video").length||0!==i(this).find("iframe").length){var e=i(this),t=e.outerHeight(),a=e.outerWidth(),o=e.find("video"),l=e.data("height"),n=e.data("width"),d=a,r=Math.round(l*a/n),s=0,u=0,c=e.find("iframe");o.length?""===l||void 0===l||""===n||void 0===n?(o.css({left:"0px",top:"0px",width:d+"px"}),o.on("loadedmetadata",FLBuilderLayout._resizeOnLoadedMeta)):(r<t?(r=t,s=-((d=Math.round(n*t/l))-a)/2):u=-(r-t)/2,o.css({left:s+"px",top:u+"px",height:r+"px",width:d+"px"})):c.length&&void 0!==e.data("youtube")&&FLBuilderLayout._resizeYoutubeBgVideo.apply(this)}},_resizeOnLoadedMeta:function(){var e=i(this),t=e.parent().outerHeight(),a=e.parent().outerWidth(),o=e[0].videoWidth,l=e[0].videoHeight,n=Math.round(l*a/o),d=a,r=0,s=0;n<t?(n=t,r=-((d=Math.round(o*t/l))-a)/2):s=-(n-t)/2,e.parent().data("width",o),e.parent().data("height",l),e.css({left:r+"px",top:s+"px",width:d+"px",height:n+"px"})},_resizeYoutubeBgVideo:function(){var e=i(this),t=e.outerWidth(),a=e.outerHeight(),o=e.data("YTPlayer"),l=o?o.getIframe():null,n="16:9".split(":"),d=n[0]/n[1],r=t/a>d,s=r?t:a*d,u=r?t/d:a;l&&i(l).width(s).height(u)},_initModuleAnimations:function(){void 0!==jQuery.fn.waypoint&&i(".fl-animation").each((function(){var e=i(this),t=e.offset().top,a=i(window).height(),o=i("body").height(),l="80%";void 0!==typeof FLBuilderLayoutConfig.waypoint.offset&&(l=FLBuilderLayoutConfig.waypoint.offset+"%"),o-t<.2*a&&(l="100%"),e.waypoint({offset:l,handler:FLBuilderLayout._doModuleAnimation})}))},_doModuleAnimation:function(){var e=void 0===this.element?i(this):i(this.element),t=parseFloat(e.data("animation-delay")),a=parseFloat(e.data("animation-duration"));isNaN(a)||e.css("animation-duration",a+"s"),!isNaN(t)&&t>0?setTimeout((function(){e.addClass("fl-animated")}),1e3*t):setTimeout((function(){e.addClass("fl-animated")}),1)},_initHash:function(){var e=window.location.hash.replace("#","").split("/").shift(),t=null,a=null,o=null,l=null,n=null;if(""!==e)try{(t=i("#"+e)).length>0&&(t.hasClass("fl-accordion-item")&&setTimeout((function(){t.find(".fl-accordion-button").trigger("click")}),100),t.hasClass("fl-tabs-panel")&&setTimeout((function(){a=t.closest(".fl-tabs"),o=t.find(".fl-tabs-panel-label"),l=o.data("index"),n=a.find(".fl-tabs-labels .fl-tabs-label[data-index="+l+"]"),o.is(":visible")?o.trigger("click"):(n[0].click(),FLBuilderLayout._scrollToElement(t))}),100))}catch(i){}},_initAnchorLinks:function(){i("a").each(FLBuilderLayout._initAnchorLink)},_initAnchorLink:function(){var e=i(this),t=e.attr("href"),a=window.location,o=null,l=null;if(void 0!==t&&t.indexOf("#")>-1&&e.closest("svg").length<1&&a.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&a.hostname==this.hostname)try{if(!(o=t.split("#").pop()))return;(l=i("#"+o)).length>0&&((e.hasClass("fl-scroll-link")||l.hasClass("fl-row")||l.hasClass("fl-col")||l.hasClass("fl-module"))&&i(e).on("click",FLBuilderLayout._scrollToElementOnLinkClick),l.hasClass("fl-accordion-item")&&i(e).on("click",FLBuilderLayout._scrollToAccordionOnLinkClick),l.hasClass("fl-tabs-panel")&&i(e).on("click",FLBuilderLayout._scrollToTabOnLinkClick))}catch(i){}},_scrollToElementOnLinkClick:function(e,t){var a=i("#"+i(this).attr("href").split("#").pop());FLBuilderLayout._scrollToElement(a,t),e.preventDefault()},_scrollToElement:function(e,t){var a=FLBuilderLayoutConfig.anchorLinkAnimations,o=0,l=i(window),n=i(document);e.length>0&&(o=e.offset().top>n.height()-l.height()?n.height()-l.height():e.offset().top-a.offset,i("html, body").animate({scrollTop:o},a.duration,a.easing,(function(){void 0!==t&&t(),null!=e.attr("id")&&(history.pushState?history.pushState(null,null,"#"+e.attr("id")):window.location.hash=e.attr("id"))})))},_scrollToAccordionOnLinkClick:function(e){var t=i("#"+i(this).attr("href").split("#").pop());if(t.length>0){FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,(function(){t&&(t.find(".fl-accordion-button").trigger("click"),t=!1)}))}},_scrollToTabOnLinkClick:function(e){var t=i("#"+i(this).attr("href").split("#").pop()),a=null,o=null,l=null;if(t.length>0){if(a=t.closest(".fl-tabs"),l=t.find(".fl-tabs-panel-label"),tabIndex=l.data("index"),o=a.find(".fl-tabs-labels .fl-tabs-label[data-index="+tabIndex+"]"),l.is(":visible")){FLBuilderLayout._scrollToElementOnLinkClick.call(this,e,(function(){t&&(l.trigger("click"),t=!1)}))}else o[0].click(),FLBuilderLayout._scrollToElement(t);e.preventDefault()}},_initForms:function(){FLBuilderLayout._hasPlaceholderSupport||i(".fl-form-field input").each(FLBuilderLayout._initFormFieldPlaceholderFallback),i(".fl-form-field input").on("focus",FLBuilderLayout._clearFormFieldError)},_hasPlaceholderSupport:function(){return"undefined"!=document.createElement("input").placeholder},_initFormFieldPlaceholderFallback:function(){var e=i(this),t=e.val(),a=e.attr("placeholder");"undefined"!=a&&""===t&&(e.val(a),e.on("focus",FLBuilderLayout._hideFormFieldPlaceholderFallback),e.on("blur",FLBuilderLayout._showFormFieldPlaceholderFallback))},_hideFormFieldPlaceholderFallback:function(){var e=i(this);e.val()==e.attr("placeholder")&&e.val("")},_showFormFieldPlaceholderFallback:function(){var e=i(this),t=e.val(),a=e.attr("placeholder");""===t&&e.val(a)},_clearFormFieldError:function(){var e=i(this);e.removeClass("fl-form-error"),e.siblings(".fl-form-error-message").hide()}},i((function(){FLBuilderLayout.init()})))}(jQuery),jQuery((function(i){i((function(){i(".fl-node-618bfb6c820f8 .fl-photo-img").on("mouseenter",(function(e){i(this).data("title",i(this).attr("title")).removeAttr("title")})).on("mouseleave",(function(e){i(this).attr("title",i(this).data("title")).data("title",null)}))}))})),function(i){FLBuilderPostCarousel=function(e){this.settings=e.settings,this.transitionType=e.transition,this.nodeClass=".fl-node-"+e.id,this.wrapperClass=this.nodeClass+" .fl-post-carousel-wrapper",this.postClass=this.nodeClass+" .fl-post-carousel-post",this.prevCarouselBtn=i(this.nodeClass+" .carousel-prev"),this.nextCarouselBtn=i(this.nodeClass+" .carousel-next"),this.layout=e.layout,this.navigation=e.navigationControls,this.slideWidth=e.slideWidth,this.currentBrowserWidth=i(window).width(),this._hasPosts()&&(this._initCarousel(),i(window).on("resize",function(e){var t=i(window).width();t!=this.currentBrowserWidth&&(this._resizeDebounce(),this.currentBrowserWidth=t)}.bind(this)))},FLBuilderPostCarousel.prototype={settings:{},nodeClass:"",wrapperClass:"",postClass:"",prevCarouselBtn:"",nextCarouselBtn:"",layout:"",navigation:!1,slideWidth:0,carousel:"",_hasPosts:function(){return i(this.postClass).length>0},_resizeDebounce:function(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(function(){this._reloadCarousel()}.bind(this),250)},_getSlidesNumber:function(){var e=this._getWrapperWidth();i(this.postClass).width();return Math.ceil(e/this.slideWidth)},_getSlideWidth:function(){return Math.ceil((this._getWrapperWidth()-this.settings.slideMargin*(this._getSlidesNumber()-1))/this._getSlidesNumber())},_getWrapperWidth:function(){var e=i(this.nodeClass+" .fl-post-carousel");return $width=e.width(),0===$width&&e.is(":hidden")&&($clone=e.clone().css("visibility","hidden").appendTo(i(".fl-row-content")),$width=$clone.outerWidth(),$clone.remove()),$width},_getSettings:function(){var e={slideWidth:this._getSlideWidth(),minSlides:this._getSlidesNumber(),maxSlides:this._getSlidesNumber(),onSliderLoad:function(){i(this.wrapperClass).addClass("fl-post-carousel-loaded")}.bind(this)};return i.extend({},this.settings,e)},_initCarousel:function(){this.carousel=i(this.wrapperClass).bxSlider(this._getSettings()),this.navigation&&(this.prevCarouselBtn.on("click",function(i){i.preventDefault(),this.carousel.goToPrevSlide()}.bind(this)),this.nextCarouselBtn.on("click",function(i){i.preventDefault(),this.carousel.goToNextSlide()}.bind(this)))},_reloadCarousel:function(){var i=this.carousel.data("bxSlider");i?i.reloadSlider(this._getSettings()):this.carousel.reloadSlider(this._getSettings())}}}(jQuery),function(i){i((function(){new FLBuilderPostCarousel({id:"618bfe8c3a020",layout:"gallery",slideWidth:235,settings:{pager:!1,auto:!0,pause:5e3,speed:500,autoDirection:"next",infiniteLoop:!0,adaptiveHeight:!0,controls:!1,autoHover:!0,slideMargin:64,moveSlides:1,onSlideBefore:function(e,t,a){i(".fl-node-618bfe8c3a020 .fl-post-carousel-navigation a").addClass("disabled"),i(".fl-node-618bfe8c3a020 .bx-controls .bx-pager-link").addClass("disabled")},onSlideAfter:function(e,t,a){i(".fl-node-618bfe8c3a020 .fl-post-carousel-navigation a").removeClass("disabled"),i(".fl-node-618bfe8c3a020 .bx-controls .bx-pager-link").removeClass("disabled")}}})}))}(jQuery);