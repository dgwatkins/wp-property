if ("undefined" != typeof wpp_fb_tabs) {
    for (var i in wpp_fb_tabs) if ("function" != typeof wpp_fb_tabs[i]) try {
        var json = jQuery.parseJSON(wpp_fb_tabs[i]);
        wpp_fb_tabs[i] = json;
    } catch (e) {}
    jQuery(document).ajaxSend(function(event, xhr) {
        xhr.setRequestHeader("X-FB-CANVAS", wpp_fb_tabs.canvas);
    }), "undefined" != typeof wpp_fb_tabs.data.settings.open_links_in_new_window && "true" == wpp_fb_tabs.data.settings.open_links_in_new_window && jQuery("a").live("click", function() {
        return /^\#/.test(jQuery(this).attr("href")) || /^javascript/.test(jQuery(this).attr("href")) ? void 0 : (window.open(jQuery(this).attr("href")), 
        !1);
    }), "undefined" != typeof wpp_fb_tabs.data.settings.open_forms_in_new_window && "true" == wpp_fb_tabs.data.settings.open_forms_in_new_window && jQuery("form").attr("target", "_blank");
}