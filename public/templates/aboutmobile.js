define(function(){return function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<link rel="stylesheet" href="css/vendor/ratchet.css"/><header class="bar-title"><a href="#/" class="button-prev">Back</a><h1 class="title">Application</h1><!--a.button-next(href="#") Next--></header><nav class="bar-tab"><ul class="tab-inner"><li class="tab-item active"><a href="/#"><img src="/img/glyphicons_020_home.png" class="tab-icon"/><div class="tab-label">Home</div></a></li><li class="tab-item"><a href="/#/settings"><img src="/img/glyphicons_003_user.png" class="tab-icon"/><div class="tab-label">Profile</div></a></li><li class="tab-item"><a href="" onclick="logout()"><img src="/img/glyphicons_136_cogwheel.png" class="tab-icon"/><div class="tab-label">Logout</div></a></li></ul></nav><div class="content"><ul class="list"><li>Framework includes:</li><li> <a href="http://twitter.github.com/bootstrap">Twitter Bootstrap<span class="chevron"></span></a></li><li><a href="http://maker.github.com/ratchet/">Ratchet <span class="chevron"></span></a></li><li><a href="http://github.com/wearefractal/dermis">Dermis<span class="chevron"></span></a></li><li><a href="http://github.com/wearefractal/vein">Vein<span class="chevron"></span></a></li></ul></div>')}return buf.join("")}})