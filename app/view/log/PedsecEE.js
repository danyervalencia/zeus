Ext.define("Siace.view.log.PedsecEE",{extend:"Siace.view.WindowEdit",alias:"widget.log_pedsecee",title:"Enviar Requerimientos ::.",width:850,items:[{xtype:"form",bodyPadding:2,border:true,layout:{type:"hbox"},width:"100%",items:[{xtype:"comppub_year_code",hidden:true,submitValue:false},
{xtype:"panel",layout:{type:"fit"},height:450,width:"47%",items:[
	{xtype:"comp_grid",itemId:"grd1",height:"100%",multiSelect:true,width:420,viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.tiptram_id==1173?"mx-letra-negro":"mx-letra-naranja";},plugins:{ptype:"gridviewdragdrop",dragGroup:"group1",dropGroup:"group2"}},
		columns:[{xtype:"rownumberer",width:30},{dataIndex:"ped_documento",text:"Registro",sortable:false,width:70},{dataIndex:"tiptram_abrev",sortable:false,width:40},{dataIndex:"pedsec_datetime",align:"center",text:"Fecha/Hora",sortable:false,width:95,renderer:function(val,metaD,rec,rowI,colI,str,view){return rec.data.pedsec_feho;}},
		 		 {dataIndex:"area_abrev",text:"U.O.",sortable:false,width:60},{dataIndex:"usur_login",text:"Env. x",sortable:false,width:100},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",sortable:false,width:70},{dataIndex:"ped_monto",text:"Importe",align:"right",renderer:fext_FN(2),sortable:false,width:90}]}
],
dockedItems:[{xtype:"comp_tooltop",margin:"9 0 0 -6",items:[{xtype:"comp_cbotop",itemId:"filt",valueField:"fr_id",store:"array.log.FiltRec",displayField:"fr_nombre",fieldLabel:"&nbsp;Filtrar Recibidos",value:1,width:150},{xtype:"complog_tipped_abrev"}]}]},
{xtype:"displayField",flex:1},
{xtype:"panel",layout:{type:"fit"},height:450,width:"47%",items:[
	{xtype:"comp_grid",itemId:"grd2",height:"100%",width:420,viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.tiptram_id==1173?"mx-letra-negro":"mx-letra-naranja";},plugins:{ptype:"gridviewdragdrop",dragGroup:"group2",dropGroup:"group1"}},
		columns:[{xtype:"rownumberer",width:30},{dataIndex:"ped_documento",text:"Registro",sortable:false,width:85},{dataIndex:"tiptram_abrev",sortable:false,width:40},{dataIndex:"pedsec_datetime",text:"Fecha/Hora",align:"center",sortable:false,width:95,renderer:function(val,metaD,rec,rowI,colI,str,view){return rec.data.pedsec_feho;}},
				 {dataIndex:"area_abrev",text:"U.O.",sortable:false,width:60},{dataIndex:"usur_login",text:"Env. x",sortable:false,width:100},{dataIndex:"tarea_codigo",sortable:false,text:"Tarea",align:"center",width:70},{dataIndex:"ped_monto",text:"Importe",align:"right",renderer:fext_FN(2),sortable:false,width:90}]}
],
dockedItems:[{xtype:"comp_tooltop",layout:"vbox",margin:"0 0 0 -6",items:[{xtype:"comppub_area_nombre",itemId:"area_key",name:"area_key",fieldLabel:"",margin:"0 0 4 0"},{xtype:"comp_cbo",itemId:"usuracce_key",name:"usuracce_key",valueField:"usuracce_key",displayField:"indiv_apenom",tpl:"<tpl for='.'><div class='x-boundlist-item'>{indiv_apenom}&nbsp;</div></tpl>",disabled:true,editable:true,listConfig:{cls:"item00001"},margin:"0 0 0 0",width:"100%"}]}]}
]}]});