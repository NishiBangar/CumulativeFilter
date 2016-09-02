// -------Custom Filter CumilativeFilter--------------------------------
myApp.filter('cumulativeFilter', function() {
	return function(items, contractIdFilter, customerNameFilter, serviceFilter, startDateFilter, endDateFilter) {
		var flag = new Array(5);

		// If the Cumulative Search fields are 'Undefined' initially--------
		if (angular.isUndefined(contractIdFilter) && angular.isUndefined(customerNameFilter)
				&& angular.isUndefined(serviceFilter) && angular.isUndefined(startDateFilter)
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}

		// ---If the one field is empty String and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.isUndefined(customerNameFilter)
				&& angular.isUndefined(serviceFilter) && angular.isUndefined(startDateFilter)
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If the one field is empty String and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.equals(customerNameFilter, "")
				&& angular.isUndefined(serviceFilter) && angular.isUndefined(startDateFilter)
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If the one field is empty String and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.isUndefined(customerNameFilter)
				&& angular.equals(serviceFilter, "") && angular.isUndefined(startDateFilter)
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If the one field is empty String and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.isUndefined(customerNameFilter)
				&& angular.isUndefined(serviceFilter) && angular.equals(startDateFilter, "")
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If the one field is empty String and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.isUndefined(customerNameFilter)
				&& angular.isUndefined(serviceFilter) && angular.isUndefined(startDateFilter)
				&& angular.equals(endDateFilter, "")) {
			return items;
		}
		// *********************
		// ---If two fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.equals(customerNameFilter, "")
				&& angular.isUndefined(serviceFilter) && angular.isUndefined(startDateFilter)
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If two fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.isUndefined(customerNameFilter)
				&& angular.equals(serviceFilter, "") && angular.isUndefined(startDateFilter)
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If two fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.isUndefined(customerNameFilter)
				&& angular.isUndefined(serviceFilter) && angular.equals(startDateFilter, "")
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If two fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.isUndefined(customerNameFilter)
				&& angular.isUndefined(serviceFilter) && angular.isUndefined(startDateFilter)
				&& angular.equals(endDateFilter, "")) {
			return items;
		}

		// *********************

		// ---If two fields are empty Strings and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.equals(customerNameFilter, "")
				&& angular.equals(serviceFilter, "") && angular.isUndefined(startDateFilter)
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If two fields are empty Strings and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.equals(customerNameFilter, "")
				&& angular.isUndefined(serviceFilter) && angular.equals(startDateFilter, "")
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		else if (angular.isUndefined(contractIdFilter) && angular.equals(customerNameFilter, "")
				&& angular.isUndefined(serviceFilter) && angular.isUndefined(startDateFilter)
				&& angular.equals(endDateFilter, "")) {
			return items;
		}

		// *********************
		// ---If two fields are empty Strings and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.isUndefined(customerNameFilter)
				&& angular.equals(serviceFilter, "") && angular.equals(startDateFilter, "")
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		else if (angular.isUndefined(contractIdFilter) && angular.isUndefined(customerNameFilter)
				&& angular.equals(serviceFilter, "") && angular.isUndefined(startDateFilter)
				&& angular.equals(endDateFilter, "")) {
			return items;
		}

		// ********************
		// ---If two fields are empty Strings and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.isUndefined(customerNameFilter)
				&& angular.isUndefined(serviceFilter) && angular.equals(startDateFilter, "")
				&& angular.equals(endDateFilter, "")) {
			return items;
		}

		// *************************
		// ---If three fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.equals(customerNameFilter, "")
				&& angular.equals(serviceFilter, "") && angular.isUndefined(startDateFilter)
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If three fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.equals(customerNameFilter, "")
				&& angular.isUndefined(serviceFilter) && angular.equals(startDateFilter, "")
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If three fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.equals(customerNameFilter, "")
				&& angular.isUndefined(serviceFilter) && angular.isUndefined(startDateFilter)
				&& angular.equals(endDateFilter, "")) {
			return items;
		}

		// **********************
		// ---If three fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.isUndefined(customerNameFilter)
				&& angular.equals(serviceFilter, "") && angular.equals(startDateFilter, "")
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If three fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.isUndefined(customerNameFilter)
				&& angular.equals(serviceFilter, "") && angular.isUndefined(startDateFilter)
				&& angular.equals(endDateFilter, "")) {
			return items;
		}

		// *****************
		// ---If three fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.isUndefined(customerNameFilter)
				&& angular.isUndefined(serviceFilter) && angular.equals(startDateFilter, "")
				&& angular.equals(endDateFilter, "")) {
			return items;
		}

		// **********************
		// ---If three fields are empty Strings and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.equals(customerNameFilter, "")
				&& angular.equals(serviceFilter, "") && angular.equals(startDateFilter, "")
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If three fields are empty Strings and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.equals(customerNameFilter, "")
				&& angular.equals(serviceFilter, "") && angular.equals(startDateFilter, "")
				&& angular.equals(endDateFilter, "")) {
			return items;
		}
		// ---If three fields are empty Strings and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.equals(customerNameFilter, "")
				&& angular.isUndefined(serviceFilter) && angular.equals(startDateFilter, "")
				&& angular.equals(endDateFilter, "")) {
			return items;
		}
		// ************************
		// ---If three fields are empty Strings and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.isUndefined(customerNameFilter)
				&& angular.equals(serviceFilter, "") && angular.equals(startDateFilter, "")
				&& angular.equals(endDateFilter, "")) {
			return items;
		}

		// ************************
		// ---If four fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.equals(customerNameFilter, "")
				&& angular.equals(serviceFilter, "") && angular.equals(startDateFilter, "")
				&& angular.isUndefined(endDateFilter)) {
			return items;
		}
		// ---If four fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.isUndefined(customerNameFilter)
				&& angular.equals(serviceFilter, "") && angular.equals(startDateFilter, "")
				&& angular.equals(endDateFilter, "")) {
			return items;
		}
		// ---If four fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.equals(customerNameFilter, "")
				&& angular.isUndefined(serviceFilter) && angular.equals(startDateFilter, "")
				&& angular.equals(endDateFilter, "")) {
			return items;
		}
		// ---If four fields are empty Strings and the rest are undefined
		else if (angular.equals(contractIdFilter, "") && angular.equals(customerNameFilter, "")
				&& angular.equals(serviceFilter, "") && angular.isUndefined(startDateFilter)
				&& angular.equals(endDateFilter, "")) {
			return items;
		}

		// ************************
		// ---If four fields are empty Strings and the rest are undefined
		else if (angular.isUndefined(contractIdFilter) && angular.equals(customerNameFilter, "")
				&& angular.equals(serviceFilter, "") && angular.equals(startDateFilter, "")
				&& angular.equals(endDateFilter, "")) {
			return items;
		}

		// ////////////////////////////////////////////////////////////////////////////
		// If all the Cumulative Search field values are 'Empty String' ones the
		// values are discarded
		else if (angular.equals(contractIdFilter, "") && angular.equals(customerNameFilter, "")
				&& angular.equals(serviceFilter, "") && angular.equals(startDateFilter, "")
				&& angular.equals(endDateFilter, "")) {
			return items;
		}

		// *****************************************************
		// -----Cumulative Search necessary Manipulations-------
		// *****************************************************
		var filteredArray = [];
		var flag = new Array(5);

		// To count the Number of Search Fields Triggered..
		if (angular.isDefined(contractIdFilter) && !angular.equals(contractIdFilter, "")) {
			flag[0] = "/" + contractIdFilter + "/i.test(item.conid)";
		}

		if (angular.isDefined(customerNameFilter) && !angular.equals(customerNameFilter, "")) {
			flag[1] = "/" + customerNameFilter + "/i.test(item.cname)";
		}

		if (angular.isDefined(serviceFilter) && !angular.equals(serviceFilter, "")) {
			flag[2] = "/" + serviceFilter + "/i.test(item.services)";
		}

		if (angular.isDefined(startDateFilter) && !angular.equals(startDateFilter, "")) {

			var day = startDateFilter.getDate().toString();
			// month() is zero indexed
			var month = parseInt(startDateFilter.getMonth() + 1).toString();
			var year = startDateFilter.getFullYear();
			day = day.length > 1 ? day : "0" + day;
			month = month.length > 1 ? month : "0" + month;

			var startDate = day + "-" + month + "-" + year;
			flag[3] = "/" + startDate + "/i.test(item.startDate)";
		}

		if (angular.isDefined(endDateFilter) && !angular.equals(endDateFilter, "")) {

			var day = endDateFilter.getDate().toString();
			// month() is zero indexed
			var month = parseInt(endDateFilter.getMonth() + 1).toString();
			var year = endDateFilter.getFullYear();
			day = day.length > 1 ? day : "0" + day;
			month = month.length > 1 ? month : "0" + month;

			var endDate = day + "-" + month + "-" + year;

			flag[4] = "/" + endDate + "/i.test(item.endDate)";
		}

		// Formalising the Cumulative Expressions that holds good on each
		// Array's item

		var ifExpression = "";
		for (var i = 0; i < 5; i++) {
			if (!angular.equals(flag[i], undefined)) {
				ifExpression = ifExpression + " && " + flag[i];
			}
		}

		// Removing initial '&&' from the Expression String
		ifExpression = ifExpression.substring(3);

		// ---Loop into Individual Items of the original array
		angular.forEach(items, function(item, index, object) {
			if (eval(ifExpression)) {
				this.push(item);
			}
		}, filteredArray);

		return filteredArray;
	}
});
// ----------------End of Cumulative Filter---------------------------
