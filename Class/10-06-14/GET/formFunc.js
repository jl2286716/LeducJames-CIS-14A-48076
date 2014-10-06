// Function which retrieves the information in a form.
function getForm(url){
	var infoSplit=url.split("?");
	var nameValPairs=infoSplit[1].split("&");
	var $_GET=new Object;	//	Create the object
	for(var j=0;j<nameValPairs.length-1;j++){	//	-1 to remove the 'submit'
		var map=nameValPairs[j].split("=");
		var name=map[0];
		var val=map[1];
		$_GET[name]=val;	//	Fill the object
	}
	return $_GET;
}