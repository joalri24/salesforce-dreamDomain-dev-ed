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
		
	},


	navigateToRecordHome: function(component, event, helper){
		
	},

	toggleChangeHandler: function(component, event, helper){
		
	},
	
	recordChangeHandler: function(component, event, helper){
		console.log("SObject received!");
	}

	
})