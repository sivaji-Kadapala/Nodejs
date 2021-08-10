//call backs are asynchrounous sequences,
console.log('user1');
setTimeout(callMeBack,5000);
console.log('user2');
setTimeout(callMeBack,5000);
console.log('user3');
setTimeout(callMeBack,5000);
function callMeBack() {
    console.log("Queried the Database and Delivered to user");
}