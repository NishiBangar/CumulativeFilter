<html>
	<head>
	</head>
	<body>
		<!-- Search Fields-->
		<div class="row" >
				<div class="col-md-2 col-md-offset-1 "  >
					<div class="contrl-group" >
						<div class="search">
							<span class="fa fa-search"></span> 
							<input 
								class="textox form-control" id="contractIdFilter" type="text"
								placeholder="Enter Contract Id"
								ng-model="contractIdFilter" name="contractIdFilter">
						</div>
					</div>
				</div>
				<div class="col-md-2 "  style="width:230px;" >
					<div class="contrl-group" ">
						<div class="search">
							<span class="fa fa-search"></span> 
							<input 
								class="textox form-control" id="customerNameFilter" type="text"
								placeholder="Enter Customer Name"
								ng-model="customerNameFilter" name="customerNameFilter">
						</div>
					</div>
				</div>
				<div class="col-md-2 "  >
					<div class="contrl-group" >
						<div class="search">
							<span class="fa fa-search"></span> 
							<input 
								class="textox form-control" id="serviceFilter" type="text"
								placeholder="Enter Service"
								ng-model="serviceFilter" name="serviceFilter">
						</div>
					</div>
				</div>
				<div class="col-md-2 "  >
					<div class="contrl-group" >
						<div class="search">
							<span class="fa fa-search"></span> 
							<input 
								class="textox form-control" id="startDateFilter" type="date"
								
								ng-model="startDateFilter" name="startDateFilter">
						</div>
					</div>
				</div>
				<div class="col-md-2 " >
					<div class="contrl-group" >
						<div class="search">
							<span class="fa fa-search"></span> 
							<input 
								class="textox form-control" id="endDateFilter" type="date"
								
								ng-model="endDateFilter" name="endDateFilter">
						</div>
					</div>
				</div>
			</div>	
			
			<!-- Table to view the final filterd results  -->
			<div class="row">
					<form name="red_qm" role="form" novalidate style="overflow: auto;">
						<table id="mainTable"
							class="table table-response table-stripped table-hover "
							ng-show="profiles.length">
							<col width="300">
							<col width="300">
							<col width="800">
							<col width="800">
							<col width="800">
							<col width="100">
							<col width="200" ng-if="contractManager">
							<thead>
								<tr class="success ">
									<th>Contract Id</th>
									<th>Customer Name</th>
									<th >Services</th>
									<th >Start Date</th>
									<th >End Date</th>
									<!-- <th  style="text-align: center; ">Amt</th> -->
									<th class="text-center" ng-if="!readQFM">Quick Quote</th>
									<th style="text-align: center;" ng-if="WriteContractUser && contractManager">Delete<br></th>
								</tr>
							</thead>
							<tbody>
								<tr ng-repeat="profile in profiles | cumulativeFilter:contractIdFilter:customerNameFilter:serviceFilter:startDateFilter:endDateFilter" >
										<td><a href=""
											ng-click="viewcustomer(profile.conid,profile.cid,profile.type,profile.Dispstatus)">{{profile.conid}}</a></td>
										<td style="word-wrap: break-word; max-width: 120px;">{{profile.cname}}</td>
										<td style="word-wrap: break-word; max-width: 100px;">{{profile.services}}</td>
										<td  >{{profile.startDate}}</td>
										<td > {{profile.endDate}}</td>
										<!-- <td class="col-md-1" style="text-align: center; ">4000</td> -->
										<td class=" text-center" ng-if="!readQFM">
										<button type="button" class="btn btn-info btn-sm"
												style="border-radius: 25px"
												ng-click="createQuickQuote(profile.cid,profile.conid,profile.services)"
												ng-disabled="readQFM">
												<i class="fa fa-file-text-o" style="color: black"></i>
											</button>
										<td class="col-md-1" style="text-align: center;"
											ng-if="WriteContractUser && contractManager"><button type="button"
												class="btn btn-danger btn-sm"
												ng-click="deleteContract(profile.conid);">
												<i class="fa fa-trash-o"></i>
											</button></td>
								</tr>
							</tbody>
							<tfoot>

							</tfoot>
						</table>
							
					</form>
			</div>		
	</body>
</html>
