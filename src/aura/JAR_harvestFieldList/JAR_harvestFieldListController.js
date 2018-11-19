({
	onInit : function(component, event, helper) {
		var columns =[
			{label: 'Name', fieldName: 'Name', type: 'text', sortable: true},
			{label: 'Crop', fieldName: 'Crop__c', type: 'text', sortable: true},
			{label: 'Size', fieldName: 'Size__c', type: 'text', sortable: true},
			{label: 'Irrigation', fieldName: 'Irrigation__c', type: 'number', sortable: true},
			{label: 'Status', fieldName: 'Status__c', type: 'text', sortable: true}
		];
		component.set("v.columns", columns);

		var action = component.get("c.getHarvestFields");
		action.setCallback(this, response =>{
			console.log('getHarvestFields: ' + (performance.now() - startTime));
			var fields = response.getReturnValue();
			component.set("v.tableData", fields);
			component.set("v.treeData", helper.buildTreeData(fields));
		});
		var startTime = performance.now();
		$A.enqueueAction(action);
	},

	onRowSelection: function(component, event, helper){
		
	},

	onTreeItemSelected: function(component, event, helper){
		var recordId = event.getParam("name");
		console.log(recordId);
		if(recordId){
			var selectEvent = $A.get("e.ltng:selectSObject");
			selectEvent.setParams({"recordId": recordId, "channel": "HarvestFields"});
			selectEvent.fire();
		}
	},

	onTreeView: function(component, event, helper){
		var map = component.find('map');
		$A.util.addClass(map, 'slds-hide');
		component.set('v.viewMode', 'tree');
	},

	onTableView: function(component, event, helper){
		var map = component.find('map');
		$A.util.addClass(map, 'slds-hide');
		component.set('v.viewMode', 'table');
	},

	onMapView: function(component, event, helper){
		component.set('v.viewMode', 'map');
		var map = component.find('map');
		$A.util.removeClass(map, 'slds-hide');
	}
})