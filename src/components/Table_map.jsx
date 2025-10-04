export default function Table_map(){
  const users=[{
    name:"Vaibhav",
    age:22,
    city:"Noida"

  },
  {
    name:"Aman",
    age:25,
    city:"Delhi"
  }
]
  return(
    <>
      <table border="1">
        
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
          <tbody>
            <tr>
              <td>Vaibhav</td>
              <td>22</td>
              <td>Ramnagar</td>
            </tr>
            <tr>
              <td>Vaibhav</td>
              <td>25</td>
              <td>Ramnagar</td>
            </tr>
            <tr>
              <td>Vaibhav</td>
              <td>23</td>
              <td>Ramnagar</td>
            </tr>
          </tbody>
      
      </table>
      <h1>Using Map Function</h1>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
        <table>
          {
            users.map((val)=>{
              return(
                <tr key={val.name}>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.city}</td>
                </tr>
              )
            })
          }
        </table>
      </table>
    </>
  )
}