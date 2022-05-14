import React, { useState } from "react";
import { Button } from 'antd';
import { addList } from '../../actions/list'
import metaFetcher from 'meta-fetcher';
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment";

const Addurl = () => {
  const dispatch = useDispatch();


  const [url, setUrl] = useState("");

  let getDataFromUrl = async () => {
    let utxtimes = moment();  
    let tmsx = moment(utxtimes).format("X");
    let checkLocal = localStorage.getItem("urldata");
    try {
      const result = await metaFetcher(url);
      if (checkLocal) {
        checkLocal = JSON.parse(checkLocal)
        var dataArr = [...checkLocal];
        dataArr.push({
          "url": result.metadata.website,
          "title": result.metadata.title,
          "date": tmsx,
          "type": "LIVE"
        })
        localStorage.setItem("urldata", JSON.stringify(dataArr));
        dispatch(addList(dataArr))
      } else {
        var dataArr = [];
        dataArr.push({
          "url": result.metadata.website,
          "title": result.metadata.title,
          "date": tmsx,
          "type": "LIVE"
        })
        localStorage.setItem("urldata", JSON.stringify(dataArr));
        dispatch(addList(dataArr))
      }
      console.log(result);
    } catch (err) {
      if (checkLocal) {
        checkLocal = JSON.parse(checkLocal)
        var dataArr = [...checkLocal];
        dataArr.push({
          "url": url,
          "title": "No Title Found",
          "date": tmsx,
          "type": "ERROR"
        })
        localStorage.setItem("urldata", JSON.stringify(dataArr));
        dispatch(addList(dataArr))
      } else {
        var dataArr = [];
        dataArr.push({
          "url": url,
          "title": "No Title Found",
          "date": new Date(),
          "type": "ERROR"
        })
        localStorage.setItem("urldata", JSON.stringify(dataArr));
        dispatch(addList(dataArr))
      }
    }
  }



  return (
    <>
      <div
        className="d-flex"
        style={{
          width: '100%',
          padding: '2rem'
        }}
      >
        <input
          placeholder="Input with URL Validation"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{
            color: '#B5B5B5',
            border: '1px solid #B5B5B5',
            height: '60px',
            fontSize: '12px',
            width: '100%',
            paddingLeft: '1rem',
            borderRadius: '6px'
          }}
        />
        <Button
          style={{
            background: '#00466E',
            color: 'white',
            height: '60px',
            fontSize: '12px',
            padding: '1rem 4rem',
            marginLeft: '1rem',
            borderRadius: '6px'
          }}
          onClick={getDataFromUrl}
        >ADD WEBSITE</Button>
      </div>
    </>
  );
}
export default Addurl;