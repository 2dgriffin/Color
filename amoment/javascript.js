
console.log(chalk.underline.green(moment().format('dddd')));

var split_afternoon = 12
var split_evening = 17
var currentHour = moment().format('LT');

if(currentHour >= split_afternoon && currentHour <= split_evening) {
    t = "good afternoon";
} else if(currentHour >= split_evening) {
    t = "good evening";
} else {
    t = "good morning";
}

console.log(chalk.underline.yellow(t));