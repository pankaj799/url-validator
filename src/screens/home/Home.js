import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import Addurl from '../../components/Addurl/index'
import List from '../../components/List/index'

const Home = () => {

    
    // let listData = JSON.parse(localStorage.getItem("urldata"))

    // let [rows, setRows] = useState([]);
    
    // var rows = [];
    
    // useEffect(() => {
    //     // console.log(listData, " : listData")
    //     if (listData && listData.length > 0 ) {
    //         // let name_list = JSON.parse(listData)
    //         let name_list = listData
    //         console.log(name_list)
    //         for (var i = 0; i < name_list.length; i++) {
    //             console.log(name_list[i], " : name_list[i]")
    //             rows.push(
                    
    //             );
    //         }
    //         console.log(rows)
    //     }
    // }, [listData])


    return (
        <div>
            <Addurl />
            <div
                style={{
                    padding: '2rem'
                }}
            >
                <p
                    style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#00466E'
                    }}
                >WEBSITE</p>
                <div>
                    <List />
                    {/* {rows.map(data => "asdsa")} */}
                    {/* <div
                        className='d-flex justify-content-between align-items-center'
                        style={{
                            padding: '1rem 0',
                            borderBottom: '1px solid #B4B4B4'
                        }}
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
                            >Explore appliances, recipes and accessories from Usha Cook</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p
                                    style={{
                                        fontSize: '10px',
                                        color: '#00466E',
                                        margin: '0'
                                    }}
                                >ushacook.com</p>
                                <p
                                    style={{
                                        fontSize: '10px',
                                        color: '#B4B4B4',
                                        margin: '0'
                                    }}
                                >Last checked: 5 minutes ago</p>
                            </div>
                        </div>
                        <div style={{ marginLeft: '2rem' }}>
                            <Button
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
                            </Button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Home;