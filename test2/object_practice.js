const eventEmitter = require("events");
const emitter = new eventEmitter();

const services = {
  basic: {
    monthlyCharge: 3.1,
    diskSpace: "100 GB",
    dataTransfer: "1000GB/Mo",
    sitePages: "10",
  },
  professional: {
    monthlyCharge: 5.3,
    diskSpace: "500 GB",
    dataTransfer: "5000GB/Mo",
    sitePages: "100",
  },
  ultimate: {
    monthlyCharge: 10.9,
    diskSpace: "7000 GB",
    dataTransfer: "80000 GB/Mo",
    sitePages: "5000",
  },
};

function YearlyPlan(arg) {
  var calculate = arg * 12;
  return calculate;
}

emitter.on("basic", () => {
  console.log(
    `For Basic Plan \n monthly Pay ${services.basic.monthlyCharge} \n Disk space ${services.basic.diskSpace} \n data transfer ${services.basic.dataTransfer} \n Site Page ${services.basic.sitePages} \n \n `
  );

  let basic_monthly_plan = parseFloat(services.basic.monthlyCharge);
  console.log(
    `incase of Yearly planing you have to pay ${YearlyPlan(basic_monthly_plan).toFixed(2)}`
  );
});

emitter.on("professional", () => {
  console.log(
    `For professional plan \n monthly Pay ${services.professional.monthlyCharge} \n Disk space ${services.professional.diskSpace} \n data transfer ${services.professional.dataTransfer} \n Site Page ${services.professional.sitePages} \n \n `
  );
  let basic_monthly_plan = parseFloat(services.professional.monthlyCharge);
  console.log(
    `incase of Yearly planing you have to pay ${YearlyPlan(basic_monthly_plan).toFixed(2)}`
  );
});
emitter.on("ultimate", () => {
  console.log(
    `For ultimate Plan \n monthly Pay ${services.ultimate.monthlyCharge} \n Disk space ${services.ultimate.diskSpace} \n data transfer ${services.ultimate.dataTransfer} \n Site Page ${services.ultimate.sitePages}`
  );
  let basic_monthly_plan = parseFloat(services.ultimate.monthlyCharge);
  console.log(
    `incase of Yearly planing you have to pay ${YearlyPlan(basic_monthly_plan).toFixed(2)}`
    // hello 
  );
});

emitter.emit("basic");
emitter.emit("professional");
emitter.emit("ultimate");
