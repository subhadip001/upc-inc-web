import React from 'react'
import { useState,useEffect } from 'react';
import './LinkManager.css'
import axios from 'axios';

const LinkManager = () => {
    const [linksearchKey, setLinkSearchKey] = useState("");
    // const [selectedLinks,setSelectedLinks]=useState([])
    const [links,setLinks]=useState([{title:"ath",url:"dbbdbwdbdhbd"},{title:"ath",url:"dbbdbwdbdhbd"},{title:"ath",url:"dbbdbwdbdhbd"}])

    useEffect(() => {
        const fetchLinks = async () => {
          try {
            await axios
              .get("https://t2bflnyx5i.execute-api.ap-south-1.amazonaws.com/prod/upc/api/v1/getLinks")
              .then((res) => {
                setLinks(res.data.links);
              });
          } catch (err) {
            // alert(err);
          }
        };
        fetchLinks();
      }, []);
    const createLink=async()=>{
        const title=document.querySelector("#title").value
        const type=document.querySelector("#type").value
        const link=document.querySelector("#link").value
        try{
            await axios.post("https://t2bflnyx5i.execute-api.ap-south-1.amazonaws.com/prod/upc/api/v1/createLink",{link:{title:title,type:type,url:link}})
            
        }catch(err){
            //alert(err)
        }
        alert('link created!')
        location.reload()
    }
    const deleteAll=async()=>{
      try{
        await axios.delete("https://t2bflnyx5i.execute-api.ap-south-1.amazonaws.com/prod/upc/api/v1/deleteAllLinks")
        
      }catch(err){
          //alert(err)
      }
      alert('All links deleted!')
      location.reload()
    }
    const deleteLink=async(index)=>{
      // alert(links[index]._id)
      try{
        await axios.delete("https://t2bflnyx5i.execute-api.ap-south-1.amazonaws.com/prod/upc/api/v1/deleteLinks",{params:{id:links[index]._id}})
        
      }catch(err){
          //alert(err)
      }
      alert('link deleted!')
      location.reload()
    }
  return (
    <div className='link-manager'>
        <h2>Manage Links</h2>
        <h4>Create Link : </h4>
        <div className="input-box-cont small-cont">
        
        <div className="input-box">
          <label>Title :</label>
          <input type="text" name="title" id="title" required />
        </div>
        <div className="input-box">
          <label>Type :</label>
          <select id="type" required>
            <option value="job">Latest Job</option>
            <option value="admit">Admit Card</option>
            <option value="results">Result</option>
          </select>
        </div>
      </div>
      <div className="input-box-cont small-cont">
        
        <div className="input-box">
          <label>Link :</label>
          <input type="text" name="link" id="link" required />
        </div>
        <div className="input-box">
         <button id='create-btn' onClick={createLink}>Create</button>
        </div>
      </div>
      
        <h4>Search Link : </h4>
        
        <input
        type="text"
        class="search-bar"
        placeholder="Search by title"
        value={linksearchKey}
        onChange={(e) => {
          setLinkSearchKey(e.target.value);
        }}
      />
      {/* <button id='delete-btn' > Delete selected link</button> */}
      <table class="user-details">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>URL</th>
            <th><button onClick={deleteAll}>DeleteAll</button></th>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => {
            
            if (link?.title?.toLowerCase().includes(linksearchKey.toLowerCase())) {
              return (
                <tr key={links.indexOf(link)} >
                  <td>{link?.title}</td>
                  <td>{link?.type}</td>
                  <td>{link?.url}</td>
                  {/* <td>{link?._id}</td> */}
                  <td><button onClick={()=>deleteLink(links.indexOf(link))}>Delete</button></td>
                  
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      
    </div>
  )
}

export default LinkManager