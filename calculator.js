function number(value)
{
	document.calculater.result.value+=value;
}
function remove()
{
	document.calculater.result.value=" ";

}
function equal()
{
   document.calculater.result.value = eval(document.calculater.result.value);
}