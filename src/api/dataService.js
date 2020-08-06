export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "ava",
          amt: 120,
          transactionDt: "05-11-2019"
        }
        ,
        {
          custid: 1,  
          name: "ava",
          amt: 95,
          transactionDt: "05-26-2019"
        }
        ,
        {
          custid: 1,
          name: "ava",
          amt: 75,
          transactionDt: "05-27-2019"
        },
        {
          custid: 1,
          name: "ava",
          amt: 40,
          transactionDt: "06-01-2019"
        },
        {
          custid: 1,
          name: "ava",
          amt: 95,
          transactionDt: "06-21-2019"
        },
        {
          custid: 1,
          name: "ava",
          amt: 250,
          transactionDt: "07-01-2019"
        },
        {
          custid: 1,
          name: "ava",
          amt: 10,
          transactionDt: "07-04-2019"
        },
        {
          custid: 1,
          name: "ava",
          amt: 96,
          transactionDt: "07-03-2019"
        },
        {
          custid: 1,
          name: "ava",
          amt: 268,
          transactionDt: "07-21-2019"
        },
        {
          custid: 2,
          name: "john",
          amt: 60,
          transactionDt: "05-11-2019"
        }
        ,
        {
          custid: 2,  
          name: "john",
          amt: 76,
          transactionDt: "05-26-2019"
        }
        ,
        {
          custid: 2,
          name: "john",
          amt: 75,
          transactionDt: "05-27-2019"
        },
        {
          custid: 2,
          name: "john",
          amt: 40,
          transactionDt: "06-01-2019"
        },
        {
          custid: 2,
          name: "john",
          amt: 95,
          transactionDt: "06-21-2019"
        },
        {
          custid: 2,
          name: "john",
          amt: 250,
          transactionDt: "07-01-2019"
        },
        {
          custid: 2,
          name: "john",
          amt: 10,
          transactionDt: "07-04-2019"
        },
        {
          custid: 12,
          name: "john",
          amt: 92,
          transactionDt: "07-03-2019"
        },
        {
          custid: 2,
          name: "john",
          amt: 148,
          transactionDt: "07-21-2019"
        }
    ]
  );
};