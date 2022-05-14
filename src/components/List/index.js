import React, { useEffect } from "react";
import { Button } from 'antd';
import { addList } from '../../actions/list'
import { useDispatch, useSelector } from 'react-redux'
import metaFetcher from 'meta-fetcher';
import moment from "moment";

const List = () => {
  const dispatch = useDispatch();

  const listData = useSelector((state) => state.list.listData)


  useEffect(() => {
    let list_data_local = JSON.parse(localStorage.getItem("urldata"))
    dispatch(addList(list_data_local))
  }, [listData])


  // useEffect(() => {
  //   let list_data_local = JSON.parse(localStorage.getItem("urldata"))
  //   dispatch(addList(list_data_local))
  //   console.log(listData)

  //   setInterval(function () {
  //     let checkLocal = localStorage.getItem("urldata");
  //     checkLocal = JSON.parse(checkLocal)
  //     for(var i=0;i<checkLocal.length;i++){
  //       const result = await metaFetcher(checkLocal[i].url);
  //       checkLocal[i].type = ""
  //     }
  //   }, 300000);
  // })

  // let onClickData = async (date) => {
  //   console.log(date)
  //   var checkLocal = localStorage.getItem("urldata");
  //   checkLocal = JSON.parse(checkLocal)
  //   var dataArr = [...checkLocal];
  //   for (var i = 0; i < checkLocal.length; i++) {
  //     if (checkLocal[i].date == date) {
  //       let utxtimes = moment();
  //       let tmsx = moment(utxtimes).format("X");
  //       var dataArrOne = {}
  //       // dataArr.splice(i, 1)
  //       metaFetcher(checkLocal[i].url).then((err, res) => {
  //         if (res) {
  //           checkLocal[i].type = "LIVE"
  //         }
  //       }).catch(err => {
  //         // console.log(checkLocal[i])
  //         // console.log(checkLocal[i].title)
  //         dataArrOne =  {
  //           "url": checkLocal[i].url,
  //           "title": checkLocal[i].title,
  //           "date": tmsx,
  //           "type": "LIVE"
  //         }
  //         console.log(dataArrOne)

          
  //         // checkLocal[i].type = "LIVE"
  //       })
  //       console.log(dataArrOne)
  //       // checkLocal[i].type = ""
  //     }
  //   }
  //   localStorage.setItem("urldata", JSON.stringify(dataArr));
  //   dispatch(addList(dataArr))
  // }




  return (
    listData && listData.map(data => (

      <div
        className='d-flex justify-content-between align-items-center'
        style={{
          padding: '1rem 0',
          borderBottom: '1px solid #B4B4B4'
        }}
        // onClick={() => onClickData(data.date)}
      >
        <div className='d-flex flex-column'
          style={{
            width: '100%'
          }}
        >
          <p
            style={{
              fontWeight: '600',
              margin: '0',
              paddingBottom: '5px'
            }}
          >{data.title}</p>
          <div className='d-flex justify-content-between align-items-center'>
            <p
              style={{
                fontSize: '10px',
                color: '#00466E',
                margin: '0'
              }}
            >{data.url}</p>
            <p
              style={{
                fontSize: '10px',
                color: '#B4B4B4',
                margin: '0'
              }}
            >{
                new Date(data.date * 1000).getHours() + ':' + (new Date(data.date * 1000).getMinutes() < 10 ? "0" + new Date(data.date * 1000).getMinutes() : new Date(data.date * 1000).getMinutes()) + (new Date(data.date * 1000).getHours() > 12 ? "PM" : "AM")
              }</p>
          </div>
        </div>
        <div style={{ marginLeft: '2rem' }}>
          {data?.type == "ERROR" ?
            (<Button
              style={{
                background: 'red',
                color: 'white',
                fontSize: '16px',
                height: '40px',
                padding: '0 2rem',
                fontSize: '10px',
                fontWeight: '600',
                borderRadius: '6px'
              }}
            >
              ERROR
            </Button>) :
            (<Button
              style={{
                background: '#058423',
                color: 'white',
                fontSize: '16px',
                height: '40px',
                padding: '0 2rem',
                fontSize: '10px',
                fontWeight: '600',
                borderRadius: '6px'
              }}
            >
              LIVE
            </Button>)}
        </div>
      </div>
    )

    )
  );
}
export default List;