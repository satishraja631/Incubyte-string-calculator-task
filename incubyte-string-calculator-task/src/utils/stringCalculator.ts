export default function add(numbers:string):number{
    if(numbers==="") return 0;

    let delimitter=/[\n,]/;

    if(numbers.startsWith("//")){
        const parts=numbers.split("\n");
        delimitter=new RegExp(parts[0].slice(2));
        numbers=parts[1]
    }

     return numbers
           .split(delimitter)
           .map(Number)
           .reduce((sum,num)=>sum+num,0);

}