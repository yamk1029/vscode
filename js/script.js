/*var nepal = [12,15,555,346,578,889,800,876,78]
var maximum = nepal[0];
var minimum = nepal[0];
for(var i=1; i<nepal.length; i++)
{
    if(maximum<nepal[i])
    {
        maximum=nepal[i];
    }
}
{
     if(minimum<nepal[i])
     {
        minimum=nepal[i];
     }
}
document.write("maximum ="+ maximum)
document.write("<br/>")
document.write("minimum ="+ minimum)*/

//Write a function to check given number is prime or not
function prime(a)
{
    for(var i=2; i<a/2;i++)
    {
        if(a%i==0)
        {
            return false;
        }
    }
    return true;
}
document.write(prime(8));
document.write("<br/>")
document.write(Math.ceil(Math.random()*100));
document.write("<br/>")
document.write(Math.sqrt(90));
document.write("<br/>")
document.write(Math.log(45));
document.write("<br/>")
document.write(Math.pow(6,2));
document.write("<br/>")
document.write(Math.cos(30*(Math.PI/180)));
document.write("<br/>")
document.write(Math.max(333,1124,352,45,634,54364,2422,456,235));
document.write("<br/>")
document.write(Math.min(333,1124,352,45,634,54364,2422,456,235));
document.write("<br/>")
