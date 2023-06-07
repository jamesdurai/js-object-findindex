const employees = [
    { name: "David Carlson", age: 30 },
    { name: "John Cena", age: 34 },
    { name: "Mike Sheridan", age: 25 },
    { name: "John Carte", age: 50 }
  ];
  
  const johnRecord = employees.find(employee => employee.name === "John");
  document.write(JSON.stringify(johnRecord) + "<br>");
  
  const johnIndex = employees.findIndex(employee => employee.name === "John");
  document.write(johnIndex);
  