export default function add(numbers:string):number{
    if(numbers==="") return 0;

    let delimitter=/[\n,]/;

    if(numbers.startsWith("//")){
        numbers=numbers.replace(/\\n/g,"\n" )
        const parts=numbers.split("\n");
        delimitter=new RegExp(parts[0].slice(2));
        numbers=parts[1]
    }

    const numsArray=numbers.split(delimitter).map((num)=>{
        if(isNaN(Number(num))){
            throw new Error("Invalid input")
        }

        return Number(num);
    });
    const negatives=numsArray.filter(num=>num<0);
    if(negatives.length>0){
        throw new Error(`Negatives not allowed : ${negatives.join(",")}`);
    }
    return numsArray
           .map(Number)
           .reduce((sum,num)=>sum+num,0);

}