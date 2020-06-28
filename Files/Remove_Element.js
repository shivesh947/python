var removeElement = function(arr,val) {
    let j=0,size=arr.length;
	for(var i=0;i<size;i++)
	{
		if(arr[i] === val)
		{
			arr[i]='-';
		}
	}
	for(var i=0;i<size;i++)
	{
		if(arr[i]!='-')
		{
			arr[j]=arr[i]
			j++;
		}
	}
	return j;
};
console.log(removeElement([-1,0,1,2,-1,-4],-1))