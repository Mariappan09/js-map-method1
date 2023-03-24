//using method-1 
 const users=[
{
	first_name:'mari',
	last_name:'raj'
},
	{
	first_name:'sri',
	last_name:'ram'
},
{
	first_name:'sathih',
	last_name:'kumar'
}
];

   var m=users.map(function(a){
    return	a.first_name+" "+a.last_name;
	
});
console.log(m);

