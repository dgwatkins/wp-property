jQuery.extend(wpp = wpp || {}, {
    ui: {
        agents: {
            ready: function() {
                jQuery("tr.wpp_agent_options").find(".wpp_agents_agent_options").each(function(i, e) {
                    return jQuery(e).is(":empty") ? void 0 : (jQuery("tr.wpp_agent_options").show(), 
                    null);
                });
            }
        }
    }
}), jQuery(document).ready(wpp.ui.agents.ready);