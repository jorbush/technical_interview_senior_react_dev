// Return an array [{ productName, supplierName, price }] with those having price greater than 5 and whose supplier is visible
const getData = async () => {
  const products = [
    {
      id: 101,
      name: "Winter price",
      supplier: 101,
      price: 13.5,
    },
    {
      id: 102,
      name: "Summer price",
      supplier: 101,
      price: 9.95,
    },
    {
      id: 103,
      name: "Beast price",
      supplier: 102,
      price: 1.5,
    },
    {
      id: 104,
      name: "Dangerous price",
      supplier: 102,
      price: 58.0,
    },
    {
      id: 105,
      name: "Yard",
      supplier: 103,
      price: 25.2,
    },
    {
      id: 106,
      name: "Unknown price",
      supplier: 104,
      price: 28.3,
    },
  ];


  const suppliers = [
    {
      id: 101,
      name: "British Ash",
      visible: true,
    },
    {
      id: 102,
      name: "LEON",
      visible: true,
    },
    {
      id: 103,
      name: "Scottish Bower",
      visible: false,
    },
  ];



  return { products, suppliers };
}



async function processData() {
  const data = await getData();
  let result = []
  data["products"].forEach((product) => {
    const { id, name, supplier, price } = product;
    const supplierData = data["suppliers"].find((supplierItem) => supplierItem.id === supplier);
    if (price > 5 && supplierData && supplierData.visible) {
        result.push({
            productName: name,
            supplierName: supplierData["name"] ?? "null",
            price
        });
    }
  })
  console.log("Result:", result);
}


processData();
