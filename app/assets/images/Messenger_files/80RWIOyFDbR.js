if (self.CavalryLogger) { CavalryLogger.start_js(["+N37Z"]); }

__d("XQuickPromotionSimpleLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/qp/action/log/",{qp_id:{type:"Int",required:!0},qp_action:{type:"Enum",enumType:1},qp_instance_log_data:{type:"StringToStringMap",defaultValue:{}},qp_event:{type:"String"}})}),null);