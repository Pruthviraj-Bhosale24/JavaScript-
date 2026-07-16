function mobileRecharge(amount) {
    return new Promise((resolve, reject) => {

        console.log("Processing recharge...");

        setTimeout(() => {

        let Balance = 500;

        if (Balance >= amount) {
                resolve("Recharge of ₹" + amount + " successful.");
        } 
        else {
                reject("Insufficient balance.");
        }

        }, 2000);
    });
}

mobileRecharge(200)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });