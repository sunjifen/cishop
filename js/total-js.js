// 分类标签
$(function(){
	$('.index-menu').click(function(){
		var display =$('.index-head-classify').css('display');
		if(display == 'none'){
			$('.index-head-classify').fadeIn('1000');
			$('.index-menu img').attr('src','image/btn_X_pre.png'); 
		}else{
			$('.index-menu img').attr('src','image/menu.png'); 
			$('.index-head-classify').css('display','none');
		}
	})
})
// 我的分享金
$(function(){
	$('.share-one-inner').click(function(){
		var i=$('.share-one-inner').index(this);
		$('.share-one-out').eq(i).toggle();
	})
})
// 收货地址
$(function(){ 
	var images = ['image/btn_edit_Check@3.png', 'image/btn_Check@3.png'] 
	$('.address-inner-2').click(function(){ 
		var i=$('.address-inner-2').index(this);
		if($('.address-inner-2-1 img').eq(i).attr("class")=="up"){ 
			$('.address-inner-2-1 img').eq(i).attr("src",images[1]); 
			$('.address-inner-2-1 img').siblings().removeClass('up'); 
			$('.address-inner-2-1 img').siblings().attr("src",images[0]); 
		}
	}); 
}) 
$(function(){
	$('.address-inner-2').click(function(){
		$('.address-inner-2 img').attr('src','image/btn_edit_Check@3.png');
		$(this).find('img').attr('src','image/btn_Check@3.png');
	})
})
// 删除地址
// $(function(){
// 	$('.address-inner-4-p').click(function(){
// 		var i=$('.address-inner-4-p').index(this);
// 		$('.bomb-box-mask').css('display','block');
// 		$('.bomb-box-inner-confirm').click(function(){
// 			$(".address-inner").eq(i).remove();
// 			$('.bomb-box-mask').css('display','none');
// 		})
// 		$('.bomb-box-inner-cancel').click(function(){
// 			$('.bomb-box-mask').css('display','none');
// 		})
// 	})
// })

// 我的订单

	// 删除订单
$(function(){
	$('.order-state-cancel').click(function(){
		var i=$('.order-state-cancel').index(this);
		$('.bomb-box-mask').css('display','block');
		$('.bomb-box-inner-confirm').click(function(){
			$(".order-whole").eq(i).remove();
			$('.bomb-box-mask').css('display','none');
		})
		$('.bomb-box-inner-cancel').click(function(){
			$('.bomb-box-mask').css('display','none');
		})
	})
})
// 购物车
$(function(){
	$('.shopp-commodity-delete').click(function(){
		var i=$('.shopp-commodity-delete').index(this);
		$('.bomb-box-mask').css('display','block');
		$('.bomb-box-inner-confirm').click(function(){
			$(".shopp-commodity").eq(i).remove();
			$('.bomb-box-mask').css('display','none');
		})
		$('.bomb-box-inner-cancel').click(function(){
			$('.bomb-box-mask').css('display','none');
		})
	})
})
// 商品详情
	// 轮播图
var swiper = new Swiper('.details-container', {
        // slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });