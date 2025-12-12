import React from 'react'
import Card from './components/card.jsx'


const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/cuHY22aFSzcRM6cHiGZEgGw29EzGiTAhLjBfeo2NnlY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/Njc4LzE3Ni9zbWFs/bC9nb29nbGUtbG9n/by1pY29uLWZyZWUt/cG5nLnBuZw",
    companyName: "Google",
    post: "Software Engineer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/G4fmcAaAootV6KfWEAS-LTVIEyfMC0tB3CXP9PU45Zs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
    companyName: "Apple",
    post: "UI/UX Designer",
    datePosted: "3 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 60,
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/DcDeI-6I1YQiFKaHHKKWqpXRKNM_RtZL20vldAoecNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZmL2Ri/LzIwL2ZmZGIyMDcz/MDkxNWEyOTIyNDRj/MGFmOGVmYjIyY2Zl/LmpwZw",
    companyName: "Microsoft",
    post: "Backend Developer",
    datePosted: "10 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 78,
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/f-BkexEAN83NR0elxlWvZa1uNVDQ4RlndDlDCRGF1dc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/NzY2LzQxNS9zbWFs/bC9hbWF6b24tbG9n/by1hbWF6b24taWNv/bi10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc",
    companyName: "Amazon",
    post: "Frontend Developer",
    datePosted: "7 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/ZeYvSfT6KWIIw3qLEhIDlXkspf0psLFy9fHz0_S5GZY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9k/b3dubG9hZC1oZC1t/ZXRhLWZhY2Vib29r/LWxvZ28tcG5nLTcw/MTc1MTY5NDc3NzA2/N2hxcXdtM2Rvcmgu/cG5n",
    companyName: "Meta",
    post: "Machine Learning Engineer",
    datePosted: "2 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 82,
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/hAiypPNDgbK6Kb8JyK8JFh-zXXBBL-UMaPg5XDuqvtk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ1LzIvbmV0Zmxp/eC1sb2dvLXBuZ19z/ZWVrbG9nby00NTE5/ODEucG5n",
    companyName: "Netflix",
    post: "Full Stack Developer",
    datePosted: "9 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 70,
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/DRfSvWDweJSwMmX5Vf6YihffeYNZnevo86QJxToO-Xo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y5L2Yz/L2MxL2Y5ZjNjMTJl/YmE0NGFjZDhiNmRl/OTQ5ZjE0NWZkODMx/LmpwZw",
    companyName: "Tesla",
    post: "Automation Engineer",
    datePosted: "6 days ago",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/3BEd_6wZOC6JkO6G_xHQCiH3Xrx_V6n_6-2jbmmifxE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMyLzIvbnZpZGlh/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTMyMDAx/NS5wbmc",
    companyName: "NVIDIA",
    post: "AI Research Engineer",
    datePosted: "4 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/wPejJSa8qyzkZdn6eYulJvr4MZVIu4XcSM32fZJ7M1I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA0/L09yYWNsZS1Mb2dv/LTEtNTAweDI4MS5w/bmc",
    companyName: "Oracle",
    post: "Database Administrator",
    datePosted: "8 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/jQM_GvvdEEJuZXM4ySJw77-xm8QQk6rP76JgW30E3Ss/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzAvMi9hZG9iZS1s/b2dvLXBuZ19zZWVr/bG9nby0zNDUyLnBu/Zw",
    companyName: "Adobe",
    post: "Creative Director",
    datePosted: "1 day ago",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 75,
    location: "San Jose, USA"
  }
];

console.log(jobOpenings);


const App = () => {
  return (
    <div className='parent'>

    {jobOpenings.map(function(Element , idx){
      return (
        <div key={idx}>
          <Card companyName= {Element.companyName} post = {Element.post} tag1={Element.tag1} tag2={Element.tag2} pay={Element.pay} brandLogo= {Element.brandLogo} datePosted={Element.datePosted} location={Element.location}/> 
        </div>
      )
    })}
    </div>
  )
}

export default App