// 1.Use switch case and take Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, 
// Sunday as cases and any expression related to case 


var a = "Tuesday";

switch("Tuesday"){
    case "Monday":
        console.log("today is monday")
        break;
        case "Tuesday":
            console.log("today is tuesday")
            break;
            case "Wednesday":
            console.log("today is wednesday")
            break;
            case "Thursday":
            console.log("today is thrusday")
            break;
            case "Friday":
            console.log("today is friday")
            break;
            case "Saturday":
            console.log("today is saturday")
            break;
            case "Sunday":
            console.log("its weekend.....")
            break;
            default:
                console.log("pls choose week day")
}

// 2. For of loop:-- iterate array of elements having number 1  to 5

var a = [1,2,3,4,5]
for(i=0;i<=5;i++){
    console.log(a[i])
}

// 3. For of loop:-- take string Nd iterate characters

var a = 'nature'
for(char of a){
    console.log(char)
}