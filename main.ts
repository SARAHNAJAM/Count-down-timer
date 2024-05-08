//Count down timer

import inquirer from "inquirer";
import{differenceInSeconds} from "date-fns"

const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please enter the amount of second",
    validate: (input)=>{
        if(isNaN(input)){
            return "Please enter a valid number"
        }else if(input > 60 ){
            return "second must be in 60"
        }else
        return true;
    }
})

let input = res.userInput  

function startTimer(val: number) {
 const intTime = new Date().setSeconds(new Date().getSeconds()+val)
 const intervalTime = new Date(intTime);
    setInterval((()=>{
        const currTime = new Date()
        const diffTime = differenceInSeconds(intervalTime,currTime)

        if(diffTime <=0){
            console.log("Time is up");
            process.exit()
        }

        const min = Math.floor((diffTime%(3600*24))/3600)
        const sec = Math.floor(diffTime%60)
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
        
    }),1000)
}

startTimer(input)