(function($){
	$.fn.slideContent=function(options){
		var defaults = {
			duration : 1200,//durée de la transition
			currentClass : 'current',//class appliquée à l'élément actif du menu
			navId : 'nav' //id de la navigation
		};
		var o = $.extend(defaults,options);
		//
		return this.each(function(){
			//
			var container = $(this);
			var nav = $("#"+o.navId+" li a",this);
			var currentLink = $("#"+o.navId+" li a:first",this);
			var current = $("#"+o.navId+" li a:first",this).attr('href');

			$(currentLink).addClass(o.currentClass);
			$(current).fadeIn('fast').css('z-index','40');
			
			nav.each(function(i){
				var item = $(this).attr('href');
				$(item).css('z-index','20');
				
				$(this).click(function(){
					var targetLink = $(this);
					var target = $(this).attr('href');
					
					if(target != current){
						var h = $(current).height();
						$(current).css('z-index','40');
						$(target).css({'z-index':'30','opacity':'1'}).show();
						$(current).animate({opacity: 0,top:'+='+h+'px',height:"toggle"},o.duration,function(){
							$(this).css({'z-index':'30','top':'0'});
							$(target).css('z-index','40');
						});
						$(currentLink).removeClass(o.currentClass);
						$(targetLink).addClass(o.currentClass);
						currentLink = targetLink;
						current = target;
					}
					return false;
				})
			})
		});
	};
})(jQuery);