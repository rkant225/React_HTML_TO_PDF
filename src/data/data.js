export const data = [
    { firstName: "jane", lastName: "doe", age: 20, phy : 40, chem : 30, mth : 50 },
    { firstName: "john", lastName: "smith", age: 21, phy : 60, chem : 20, mth : 10  }
];

export const columns = [
    {
      Header: "Name",
      columns: [ 
        { Header: "First Name", accessor: "firstName"},
        { Header: "Last Name", accessor: "lastName" }
      ]
    },
    {
      Header: "Other Info",
      columns: [
        { Header: "Age", accessor: "age" }
      ]
    },
    {
        Header: "Marks",
        columns: [
          { Header: "Physics", accessor: "phy" },
          { Header: "Chemistry", accessor: "chem" },
          { Header: "Math", accessor: "mth" },
        ]
      }
  ];