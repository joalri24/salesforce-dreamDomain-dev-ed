({
	onInit: function(component, event, helper){
		var harvestColumns = [
			{label: 'Date', fieldName: 'harvestDate', type: 'text'},
			{label: 'Qty', fieldName: 'qty', type: 'text'},
			{label: 'Supervisor', fieldName: 'supervisor', type: 'text'}
		];
		component.set("v.harvestColumns", harvestColumns);

		var irrigationColumns = [
			{label: 'When', fieldName: 'when', type: 'text'},
			{label: 'Duration', fieldName: 'duration', type: 'text'},
			{label: 'Volume', fieldName: 'volume', type: 'text'},
		];
		component.set("v.irrigationColumns", irrigationColumns);


		helper.loadRelatedData(component); 
	},


	recordUpdatedHandler : function(component, event, helper) {
		var changeType = event.getParams().changeType;
		if(changeType === "CHANGED"){
			var service = component.find("service");
			service.reloadRecord();
		}
	},


	navigateToRecordHome: function(component, event, helper){
		var navEvt = $A.get("e.force:navigateToSObject");
		navEvt.setParams({
			"recordId" : component.get("v.recordId"),
			"slideDevName": "detail"
		});
		navEvt.fire();
	},

	toggleChangeHandler: function(component, event, helper){
		var service = component.find("service");
		service.saveRecord(result => {});
	},
	
	recordChangeHandler: function(component, event, helper){
		var id = event.getParam("recordId");
		component.set("v.recordId", id);
		var service = component.find("service");
		service.reloadRecord();
	}

	
})