import React,{useState,useEffect} from 'react'

const Table = ({data,show}) => {



useEffect(()=>{
console.log(data)
},[data])
    return (
      <div className="tableConatiner">
        <p>ALL CO-ORDINATES:</p>
        <table>
          {data.length < 1 && (
            <tr>
              <td>My Co-ordinates</td>
              <td style={{ fontWeight: "bold" }}>
                DEFAULT
              </td>
              <td style={{  fontWeight: "bold" }}>
                DEFAULT
              </td>
            </tr>
          )}
          <tr>
            <td>
              {"1)"} {data[0] ? data[0].location : " ------"}
            </td>
            <td>
              {data[0] ? (
                data[0].latitude
              ) : (
                <span>------</span>
              )}
            </td>
            <td>
              {data[0] ? (
                data[0].longitude
              ) : (
                <span>------</span>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {"2)"} {data[1] ? data[1].location : " ------"}
            </td>
            <td>
              {data[1] ? (
                data[1].latitude
              ) : (
                <span>------</span>
              )}
            </td>
            <td>
              {data[1] ? (
                data[1].longitude
              ) : (
                <span>------</span>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {"3)"} {data[2] ? data[2].location : " ------"}
            </td>
            <td>
              {data[2] ? (
                data[2].latitude
              ) : (
                <span>------</span>
              )}
            </td>
            <td>
              {data[2] ? (
                data[2].longitude
              ) : (
                <span>------</span>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {"4)"} {data[3] ? data[3].location : " ------"}
            </td>
            <td>
              {data[3] ? (
                data[3].latitude
              ) : (
                <span>------</span>
              )}
            </td>
            <td>
              {data[3] ? (
                data[3].longitude
              ) : (
                <span>------</span>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {"5)"} {data[4] ? data[4].location : " ------"}
            </td>
            <td>
              {data[4] ? (
                data[4].latitude
              ) : (
                <span>------</span>
              )}
            </td>
            <td>
              {data[4] ? (
                data[4].longitude
              ) : (
                <span>------</span>
              )}
            </td>
          </tr>
        </table>
        <button type='button' className='routeButton' onClick={show}>Show Route</button>
      </div>
    );
}

export default Table