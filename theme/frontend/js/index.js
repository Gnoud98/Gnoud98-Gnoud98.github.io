jQuery(document).ready(function($) {
	$('.menu-btn').click(function(){
        
        $('.main-bar-m').toggleClass('clickto');
        
		if($('.main-bar-m').hasClass('clickto'))
		{
			$(this).children('i').removeClass('fa-bars');
			$(this).children('i').addClass('fa-window-close');
		}
		else
		{
			$(this).children('i').removeClass('fa-window-close');
			$(this).children('i').addClass('fa-bars');
			$('.main-bar-m').removeAttr('style');
		}
			
});
	var win = $(window);
    var html = $('html');
    var body = $('body');
    var m_nav = $('.main-bar-m');
    var nav = m_nav.children('ul');

        m_nav.find("ul li").each(function() {
            if($(this).find("ul>li").length > 0){
                $(this).prepend('<i></i>');
            }
        });
        m_nav.find("li i").click(function(){
            var ul=$(this).nextAll("ul");
            if(ul.is(":hidden") === true){
                $(this).addClass('active');
                ul.slideDown(200);
            }
            else{
                $(this).removeClass("active");
                ul.slideUp();
            }
        });

        win.click(function(e) {
            if(win.width() < 992 && m_nav.has(e.target).length == 0 && !m_nav.is(e.target)){
                m_nav.css('transform', 'translateX(-100%)');
                $('.menu-btn i').removeClass('fa-window-close');
                $('.menu-btn i').addClass('fa-bars');
                $(this).removeClass('active');
                
            }
        });

        win.resize(function() {
            if($(this).width()>991){
                nav.show();
                nav.find('ul').show();
            }
            else{
                nav.hide();
                m_nav.children('.menu-btn').removeClass('active');
                nav.find('ul').hide();
                m_nav.find('li>i').removeClass("active");
            }
        });

});
