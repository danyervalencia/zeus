Ext.define("Siace.store.siaf.CertifmetaSCB",{extend:"Ext.data.Store",model:"Siace.model.siaf.CertifmetaSCB",pageSize:500,proxy:{type:"general",url:"php/siaf_certificado_meta_json_records.php"}});