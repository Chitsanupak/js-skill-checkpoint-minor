// Question #1: Shipping Cost Calculator

function calculateShippingCost(total) {
  // เริ่มเขียนโค้ดตรงนี้
  if (total >= 6000){
    return "Shipping is free."
  }else if(total >= 3000){
    return "Shipping cost is 250 Baht."
  }else{
    return "Shipping cost is 500 Baht."
  }
}

// ตัวอย่างการใช้งาน
const orders = [
  {
    orderId: 1,
    total: 6000,
  },
  {
    orderId: 2,
    total: 3000,
  },
  {
    orderId: 3,
    total: 150,
  },
];
orders.forEach(function(order) {
  const message = calculateShippingCost(order.total);
  console.log(`Order ${order.orderId}: ${message}`);
});

// Order Id 1: "Shipping is free."
// Order Id 2: "Shipping cost is 250 Baht."
// Order Id 3: "Shipping cost is 500 Baht."
